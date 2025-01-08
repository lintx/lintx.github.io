# 使用gitlab管理npm私有包实践
### 前言
前端开发中往往需要使用大量的`npm`包，其中有一部分可能是企业内部开发的，而且不希望它们被公开到互联网上，这时就需要一个`npm`私服来管理企业内部的`npm`包。
网上也有很多方案，比如直接使用`git`仓库作为包，不过由于每次使用都要输入完整的url，加上版本管理不便，所以我没有考虑。
还有使用`nexus`的，我对`nexus`了解不多，印象中它是一个Java包的管理工具，而且比较重。还有使用`verdaccio`、`cnpm`等各种方案的，不过由于我这边使用的git仓库是`gitlab`，正好`gitlab`就有包管理器功能，所以就研究了一下使用`gitlab`的包管理器。  

### npm的相关配置
平时使用`npm config`进行配置时，其实都是写入到`.npmrc`这个配置文件中，`.npmrc` 文件是 `NPM` 用来配置和存储相关设置的配置文件。它可以是全局配置、用户级配置，也可以是项目级配置。这个文件的作用是控制 `NPM` 的行为，比如设置包的源、身份验证信息、代理、缓存等。`.npmrc` 文件通常存在于以下几种位置：

项目级：每个 Node.js 项目中都可以有一个 `.npmrc` 文件，这个配置只对当前项目有效。
用户级：存储在用户目录下（如 `~/.npmrc`），对当前用户下所有的项目生效。
全局级：`NPM` 会在安装目录下的全局配置文件中查找全局配置（例如，`$PREFIX/etc/npmrc`）。
`.npmrc` 文件的基本格式
`.npmrc` 文件是由一组键值对（key-value pairs）组成，每一对配置项都按照 key=value 的格式进行设置。每一行是一个独立的配置项，支持注释、字符串和路径等。

示例 `.npmrc` 文件：
```ini
registry=https://registry.npmjs.org/
proxy=http://proxy.example.com:8080
//registry.npmjs.org/:_authToken=abcdefg1234567
```
#### scope
`scope`是`npm`包的命名空间，用于区分不同的包。`scope`可以是任何字符串，但是必须以`@`开头，后面跟着一个非空的字符串。`scope`不仅可以用于区分不同的包，比如`@my-scope/package-name`和`@other-scope/package-name`就是两个不同的包；还能使用不同的注册表使得不同的`scope`在不同的仓库进行下载。同一个组织的包可以使用同一个`scope`，这样可以方便管理和使用。  
本文以`my-scope`为例，在实际项目中请将`my-scope`替换为你自己的`scope`。
#### 注册表
注册表是一个存储和分发 `npm` 包的地方。`npm` 包管理器使用注册表来查找、下载和发布包。每个包都有一个唯一的名称和版本号，这些信息用于在注册表中查找和定位包。  
默认的注册表是 `https://registry.npmjs.org/` ，配置它的方法是 `registry=https://registry.npmjs.org/` 默认情况下，`npm` 会使用默认的注册表。  
当我们使用私有仓库时，需要配置私有注册表，以便在私有仓库中下载和发布包。本文以`gitlab`的包管理器为例，注册表地址以 `https://gitlab.explame.com/api/v4/groups/1/-/packages/npm/` 为例，具体地址获取方法见下文。  
本文将使用用户级配置，如需使用全局级配置请将对应命令中的`-L user`替换为`--global`，如需使用项目级配置请将对应命令中的`-L user`删除，如需手动修改配置文件请自行修改对应的`.npmrc`文件。  
我们需要使用如下命令配置注册表：
```shell
npm -L user config set @my-scope:registry=https://gitlab.explame.com/api/v4/groups/1/-/packages/npm/
```
或者直接在对应的`.npmrc`文件中增加如下内容：
```ini
@my-scope:registry=https://gitlab.explame.com/api/v4/groups/1/-/packages/npm/
```

#### API鉴权
npm的api鉴权配置是 `npm` 包管理器使用注册表来查找、下载和发布包时，使用身份验证来验证用户的身份。`npm` 包管理器使用 `_authToken` 来存储身份验证信息。`_authToken` 是一个字符串，用于验证用户的身份。  
如果你的Npm版本是8以前，那么配置会比较复杂，建议升级到8或以上。本文以鉴权密钥`abcdefg`为例进行配置，具体鉴权密钥获取方法见下文。  
我们需要使用如下命令配置注册表：
```shell
npm -L user config set -- '//gitlab.explame.com/:_authToken' abcdefg
```
或者直接在对应的`.npmrc`文件中增加如下内容：
```ini
//gitlab.explame.com/:_authToken=abcdefg
```
#### 代理
国内使用npm时，一般需要使用Npm镜像或者代理，如果你使用的是代理，而且你的`gitlab`内网等环境，使用代理后可能会无法连接到`gitlab`，所以需要配置你的`gitlab`地址不使用代理。
我们需要使用如下命令配置注册表：
```shell
npm -L user config set noproxy=gitlab.explame.com
```
或者直接在对应的`.npmrc`文件中增加如下内容：
```ini
noproxy=gitlab.explame.com
```

#### 发布设置
发布包时，需要配置注册表、鉴权密钥，以及发布包的权限，在`gitlab`自己的`ci/cd`中，有内部变量可以辅助我们快速完成配置，而且只需要在项目根目录下添加`.gitlab-ci.yml`文件即可自动发布，而在本地发布或者使用Jenkins发布则需要额外的操作，所以建议使用`gitlab ci`进行发布，本文以`gitlab ci`进行发布，具体配置见下文


### gitlab的包管理器
`gitlab`的包管理器是`gitlab`的一个功能，它可以让你在`gitlab`上管理`npm`包，而且可以使用`gitlab`的权限管理功能，比如可以设置包的权限，只有管理员才能发布包，其他人只能拉取包。  
`gitlab`的包管理器可以管理`npm`包，一个或多个`npm`包存储在一个项目中。

#### API端点
在下载包时，`gitlab`提供了3种类型的API端点，分别是：

**`Instance`（实例级）**  
也就是整个`gitlab`实例级别的API端点，整个`gitlab`站点所有包都可以用同一个注册表地址
适用于有多个`scope`或者多个项目在不同的`group`下，此时注册表地址是 `https://gitlab.explame.com/api/v4/packages/npm/` 。
由于注册地址中没有指定`scope`，所以当你有多个不同的`scope`包时，`gitlab`为了能找到这个包在哪个`group`下，必须有一个和`scope`同名的`group`，否则将会找不到对应的包。
此时的`.npmrc`文件类似这样：
```
//gitlab.explame.com/:_authToken=<your_token>
@group-1:registry=https://gitlab.explame.com/api/v4/packages/npm/
@group-2:registry=https://gitlab.explame.com/api/v4/packages/npm/
```

**`Group`（组级）**  
整个组内所有包都可以用同一个API地址
16.0手动开启，16.1默认开启组级包功能，推荐使用
适用于有一个组专门存放所有的包，此时注册地址是 `https://gitlab.explame.com/api/v4/groups/<group_id>/-/packages/npm/`。  
由于注册地址和api地址中指定了groupd_id，所以`scope`不需要和`group`同名，此时的`.npmrc`文件类似这样：
```
//gitlab.explame.com/:_authToken=<your_token>
@group-1:registry=https://gitlab.explame.com/api/v4/groups/<group_id>/-/packages/npm/
@group-2:registry=https://gitlab.explame.com/api/v4/groups/<group_id>/-/packages/npm/
```
`group_id`的获取方式：进入组的主页，右上角新建项目旁边三个点的按钮，点击后可以看到`group_id`，可以点击复制，也可以进入组的设置-通用，也能看到`group_id`

**`Project`（项目级）**  
每个项目单独使用一个API地址
适用于包比较少，而且没有专门的组用来存放包，此时的注册地址是`https://gitlab.explame.com/api/v4/projects/<project_id>/packages/npm/`，API地址是`//your_domain_name/api/v4/projects/<project_id>/packages/npm/:_authToken=<your_token>`
由于注册地址和api地址中指定了project_id，所以`scope`不需要和`group`同名，此时的`.npmrc`文件类似这样：
```
//gitlab.explame.com/:_authToken=<your_token>
@group-1:registry=https://gitlab.explame.com/api/v4/projects/<project_id>/packages/npm/
@group-2:registry=https://gitlab.explame.com/api/v4/projects/<project_id>/packages/npm/
```
`project_id`的获取方式：进入项目的主页，右上角fork旁边三个点的按钮，点击后可以看到`project_id`，可以点击复制，也可以进入项目的设置-通用，也能看到`project_id`  

本文以组级项目为例，具体的API端点地址以 `https://gitlab.explame.com/api/v4/groups/1/-/packages/npm/` 为例。  
**发布包时，只能使用项目级别的端点，而拉取包时，则可以使用上述任意端点**

关于鉴权地址：
npm8以前，鉴权地址必须和注册地址完全匹配，而Npm8及以后，改为前缀匹配，也就是前缀一样即可匹配，npm在下载包时，会先从注册表地址查询包，获取包的下载地址，而下载地址则是项目级API地址，所以在npm8以前，你必须配置多个鉴权地址，否则会无法鉴权，而在npm8以后，除非你在同一个域名下使用多个不同的鉴权密钥，否则只需要按照本文的例子配置整个域名下的鉴权地址即可。  

#### 鉴权密钥
在发布包时，我们使用`gitlab ci`，该环境中会自动注入鉴权密钥作为环境变量`${CI_JOB_TOKEN}`，无需我们另外配置鉴权密钥。  
在下载包时，有多种鉴权密钥可以使用，比如个人访问令牌、部署令牌等。本文以部署令牌为例：  
进入组的设置-仓库-展开部署令牌-添加令牌-勾选`read_package_registry`，然后点击添加令牌，生成一个部署令牌。  


### 正文
根据你的情况选择合适的项目级别，然后组合好对应的注册表地址，生成好token，然后我们正式开始
这里以我使用的组级项目为例
我们先发布一个npm包
如果发布作业的服务器上登录过其他npm仓库，且`scope`有冲突，最好在`package.json`中增加以下配置强制指定发布地址（但是不建议，因为该配置每个项目都要手动修改`project_id`，比较麻烦，建议保证`scope`的唯一性）：
```
{
    "publishConfig": { "@my-scope:registry":"https://gitlab.explame.com/api/v4/projects/<project_id>/packages/npm/" }
}
```
然后准备一个npm包项目，在项目根目录下创建`.gitlab-ci.yml`文件，写入内容：
```
image: node:latest

stages:
  - deploy

deploy:
  stage: deploy
  script:
    - echo "@my-scope:registry=https://${CI_SERVER_HOST}/api/v4/projects/${CI_PROJECT_ID}/packages/npm/" > .npmrc
    - echo "//${CI_SERVER_HOST}/api/v4/projects/${CI_PROJECT_ID}/packages/npm/:_authToken=${CI_JOB_TOKEN}" >> .npmrc
    - npm publish
  environment: production
```
`${CI_SERVER_HOST}`、`${CI_PROJECT_ID}`和`${CI_JOB_TOKEN}`是gitlab变量，使用变量可以让所有项目都使用同一套配置，新建项目时直接将配置复制一份即可，无需针对项目进行修改。  
推送到gitlab后，不出意外即可发布成功。  

然后是拉取包，如果你已经配置过了npm注册表和鉴权密钥，那么你可以直接使用`npm i @my-scope/package`命令添加包了。