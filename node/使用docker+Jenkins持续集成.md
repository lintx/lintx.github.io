### 引言

本文记录使用`docker+Jenkins`进行`golang`项目的持续部署过程中的环境、软件等的安装及配置，整个过程为从零开始部署，直到可以在生产环境使用，部分信息已经进行脱敏处理

### 一、使用到的环境及软件

1. 服务器一台，操作系统为`Ubuntu 20.04`修改ssh端口为`6022`，将`22`端口给`gitlab`使用，创建`jenkins-task`用户，并设置免密`sudo`权限。
2. `docker`和`docker compose(v2)`。
3. `nginx`进行各种服务的访问转发。
4. `gitlab-ce`进行代码版本管理。
5. `harbor`存放私有镜像。
6. `jenkins`进行持续部署。



### 二、目录结构及访问域名

###### 目录结构

```
/data
└───tools                        存放各种安装时的文件
|   └───docker-compose           存放docker-compose的安装文件
|   └───harbor                   存放harbor的安装文件
└───docker                       存放运行的各种docker项目
    └───gitlab
    └───harbor
    └───jenkins
    └───nginx
        |   nginx.conf            nginx配置文件
        └───conf.d                nginx配置文件目录
            |   gitlab_example_com     gitlab.example.com的配置文件
            |   harbor_example_com     harbor.example.com的配置文件
            |   jenkins_example_com    jenkins.example.com的配置文件
            └───cert
                |   cert.conf          公用ssl配置文件
                |   server.key         ssl证书的密钥
                |   server.pem         ssl证书
```



###### 访问域名

本文以`example.com`作为域名进行安装，需要设置好域名解析（统一设置到该服务器的内网或外网IP），并请准备好ssl证书（如没有可以去各种免费申请网站申请，比如阿里云、腾讯云等）

| 域名                | 说明            | 本机端口               |
| ------------------- | --------------- | ---------------------- |
| gitlab.example.com  | gitlab访问域名  | 8002端口,git使用22端口 |
| harbor.example.com  | harbor访问域名  | 8001端口               |
| jenkins.example.com | jenkins访问域名 | 8080端口               |

> 本机端口可以自行指定，只需要nginx配置文件和响应容器的端口设置一致即可，但是git建议使用22端口，网上也有git和ssh共用22端口的方法，不过我没有采用，而是修改了ssh登录端口，所以这里没有写共用方法



### 三、安装docker和docker-compose

###### 安装docker

使用命令`curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun`安装docker

>  如服务器无法下载sh文件，可以在本地打开`get.docker.com`，将sh文件传输到服务器上（假设为`docker`），然后执行`./docker --mirror Aliyun`安装
>
> `--mirror Aliyun`的作用是下载docker的安装文件时，从阿里云的源下载，以免无法下载



###### 更改docker镜像源并修改docker数据目录

使用命令`vi /etc/docker/daemon.json`并输入以下内容：

```json
{
  "data-root": "/data/docker",
  "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"]
}
```

保存后使用`systemctl restart docker`命令重启docker

> docker默认使用`docker.io`站点下载镜像，但是国内访问速度堪忧，故更改镜像站，但是修改后仍有部分资源下载速度很慢，暂未彻底解决
>
> 如果使用`echo "">/etc/docker/daemon.json`方式保存文件，记得把引号转义，否则会造成docker无法识别json文件无法启动



###### 安装docker-compose

本文安装的是`v2`版本的`docker-compose`，也叫`compose-cli`，项目地址为`https://github.com/docker/compose`因为使用安装脚本会自动从`github`下载安装文件，而国内环境下载速度很慢，所以采用手动下载并安装的方式。

首先到`https://github.com/docker/compose/releases`下载`v2.x`版本的安装文件，本文以[docker-compose-linux-x86_64](https://github.com/docker/compose/releases/download/v2.22.0/docker-compose-linux-x86_64) 为例。

然后下载安装脚本`https://github.com/docker/compose/releases/download/v2.22.0/docker-compose-linux-x86_64`，

You can download Docker Compose binaries from the release page on this repository.

Rename the relevant binary for your OS to docker-compose and copy it to $HOME/.docker/cli-plugins

Or copy it into one of these folders to install it system-wide:

/usr/local/lib/docker/cli-plugins OR /usr/local/libexec/docker/cli-plugins
/usr/lib/docker/cli-plugins OR /usr/libexec/docker/cli-plugins
(might require making the downloaded file executable with chmod +x)

将`install_lunux.sh`和`docker-compose-linux-amd64`文件上传到服务器上的`/data/tools/docker-compose`目录下，进入该目录，运行`./install_lunux.sh`进行安装

> 注意：
>
> 1. 安装完成后，需要使用原生`docker`命令时使用`com.docker.cli`替代，需要使用`docker-compose`时使用`docker compose`命令，和`1.x`版本的`docker-compose`不同。
> 2. 如果你是centos系统，可能需要执行`visudo`命令后，将`Defaults secure_path  = ...`中添加`/usr/local/bin`到最前面再安装，这是因为安装脚本会把`docker-compose`安装在`/usr/local/bin`目录下，但是centos系统没有将这个目录放入`root`用户的`PATH`中，不使用`/etc/profile`等的原因是只有在这里修改才会在`sudo`命令中有效，而且`/etc/profile`文件会在系统升级时被恢复为默认，所以平时如果需要修改环境变量也不要在`/etc/profile`中修改，而应该在`/etc/profile.d/*`中修改，或者在`~/.bashrc`等处修改。
> 3. 使用脚本安装成功后会提示`Error: Docker Compose CLI installation error`，看脚本有点像是脚本有错，但是本人对sh不算很熟悉，所以不能确认，但是可以确定的是安装确实已经成功。



### 四、安装nginx

在`/data/docker/nginx`目录下新建`docker-compose.yml`文件，文件内容：

```yaml
version: '3.8'
services:
  nginx:
    image: nginx:latest
    container_name: nginx
    restart: always
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./conf.d:/etc/nginx/conf.d:ro
      - ./log:/var/log/nginx
    network_mode: "host"
```

> 以上配置文件将会使用`nginx:latest`镜像运行容器，容器名为`nginx`(`container_name`)，在主程序退出时重启容器，将当前目录的`nginx.conf`以只读模式映射到容器的`/etc/nginx/nginx.conf`，将当前目录下的`conf.d`目录以只读模式映射到容器的`/etc/nginx/conf.d`目录，将当前目录下的`log`目录以默认的读写模式映射到容器的`/var/log/nginx`目录，直接使用主机的网络。
>
> 使用主机网络的原因1是因为不需要更改端口，2是为了减少网络开销，你也可以使用映射模式，将容器的80端口和443端口映射到本机，下面的其他容器同理，下面不再赘述。
>
> `services`下面的`nginx`是`docker-compose`的服务名，在使用`docker compose`命令时有时会用到（比如`exec`等命令），在同一个`yml`配置文件中不能重复，而`container_name`后面的`nginx`是传递给`docker`的容器名，在整个`docker`中不能重复。
>
> 关于更多`docker-compose`的配置文件细节及含义，可以参考网上的文档。

创建`conf.d`、`log`文件夹：`mkdir conf.d log`

创建`nginx.conf`配置文件，文件内容（就是普通的nginx配置文件，会加载`/etc/nginx/conf.d`即本机当前目录`conf.d`下的`*.conf`文件）：

```nginx
# For more information on configuration, see:
#   * Official English Documentation: http://nginx.org/en/docs/
#   * Official Russian Documentation: http://nginx.org/ru/docs/

user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;
}
```

创建`conf.d/gitlab_example_com`配置文件（监听来自`gitlab.example.com`域名的请求，转发到本机的`8002`端口，如果你的gitlab使用的是其他端口，对应修改即可）：

```nginx
server {
        listen 80;
        listen 443 ssl;

    include /etc/nginx/conf.d/cert/cert.conf;

    server_name gitlab.example.com;

    location / {
        proxy_pass  http://127.0.0.1:8002;

        #Proxy Settings
        proxy_redirect     off;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_set_header   Host              $host:$server_port;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;
        proxy_max_temp_file_size 0;
        proxy_connect_timeout      3600;
        proxy_send_timeout         3600;
        proxy_read_timeout         3600;
        proxy_buffer_size          4k;
        proxy_buffers              4 32k;
        proxy_busy_buffers_size    64k;
        proxy_temp_file_write_size 64k;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_buffering off;
        proxy_request_buffering off;
    }
}
```

创建`conf.d/harbor_example_com`配置文件（监听来自`harbor.example.com`域名的请求并转发到本机的`8001`端口，注意harbor存储docker的本地镜像，所以会涉及到大文件上传，所以必须修改`client_max_body_size`）：

```nginx
server {
        listen 80;
        listen 443 ssl;

    include /etc/nginx/conf.d/cert/cert.conf;

    server_name harbor.example.com;
    #将上传文件大小设置为不显示，否则会出现413 Request Entity Too Large错误
    client_max_body_size 0;

    location / {
        proxy_pass  http://127.0.0.1:8001;

        #Proxy Settings
        proxy_redirect     off;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_set_header   Host              $host:$server_port;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;
        proxy_max_temp_file_size 0;
        proxy_connect_timeout      3600;
        proxy_send_timeout         3600;
        proxy_read_timeout         3600;
        proxy_buffer_size          4k;
        proxy_buffers              4 32k;
        proxy_busy_buffers_size    64k;
        proxy_temp_file_write_size 64k;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_buffering off;
        proxy_request_buffering off;
    }
}

```

创建`conf.d/jenkins_example_com`配置文件（监听来自`jenkins.example.com`域名的请求并转发到本地的`8080`端口）：

```nginx
server {
        listen 80;
        listen 443 ssl;

    include /etc/nginx/conf.d/cert/cert.conf;

    server_name jenkins.example.com;

    location / {
        proxy_pass  http://127.0.0.1:8080;

        #Proxy Settings
        proxy_redirect     off;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_set_header   Host              $host:$server_port;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;
        proxy_max_temp_file_size 0;
        proxy_connect_timeout      3600;
        proxy_send_timeout         3600;
        proxy_read_timeout         3600;
        proxy_buffer_size          4k;
        proxy_buffers              4 32k;
        proxy_busy_buffers_size    64k;
        proxy_temp_file_write_size 64k;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_buffering off;
        proxy_request_buffering off;
    }
}

```

> 以上配置文件都有一句`include /etc/nginx/conf.d/cert/cert.conf;`，这是因为我将公用的ssl证书配置做到一个文件中复用了

创建`conf.d/cert/cert.conf`配置文件：

```nginx
ssl_certificate   /etc/nginx/conf.d/cert/server.pem;
ssl_certificate_key  /etc/nginx/conf.d/cert/server.key;
ssl_session_timeout 5m;
ssl_session_cache shared:SSL:10m;
ssl_ciphers HIGH:!aNULL:!eNULL:!MD5:!RC4:!DES:!PSK:!EXPORT:!SHA:!SHA256;
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
ssl_prefer_server_ciphers on;
```

在`nginx`的`docker-compose.yml`对应目录(`/data/docker/nginx`)下执行命令（下同，不再赘述）`docker compose up -d`即可启动`nginx`的`docker`容器



### 五、安装gitlab


创建`docker-compose.yml`文件：

```yaml
version: '3.8'
services:
    gitlab:
        image: 'gitlab/gitlab-ce:latest'
        container_name: gitlab
        restart: always
        hostname: 'gitlab.example.com'
        ports:
        - '8002:80'
        - '6022:22'
        volumes:
        - ./config:/etc/gitlab
        - ./logs:/var/log/gitlab
        - ./data:/var/opt/gitlab
```

创建需要的文件夹：`mkdir config logs data`

使用`docker compose up -d`启动`gitlab`

>使用另外的nginx转发gitlab的请求时，gitlab默认是http访问，此时部分服务可能出现问题，如在`go-get=1`时提供的网址为http开头，如需修正，可以在`config/gitlab.rb`中增加以下配置：  
>```
>letsencrypt['enable'] = false
>external_url 'https://gitlab.example.com'
>nginx['listen_port'] = 80
>nginx['listen_https'] = false
>```
>第一行的作用是`external_url`为https开头时，默认将开启这个设置，开启时会校验ssl证书，不关闭会因为证书校验失败问题无法启动  
>第三行和第四行的作用是`external_url`为https开头时内置nginx默认监听https的443端口，我们用另外的nginx转发，gitlab内置的nginx其实还是80端口，所以需要设置  

启动好后使用命令`grep 'Password:' ./config/initial_root_password`查看初始密码  
打开`https://gitlab.example.com`，使用用户名`root`和查看的密码登录

最后添加一个机器人账户，并设置好ssl公钥，关于如何创建公钥并使之可以登录到git主机的方法，网上有很多，所以这里不再赘述。

#### 复用22端口（可选）
> git所使用的ssh仓库地址，如`git@gitlab.example.com:lintx/xxx.git`，其实就是使用`git`用户登录`gitlab.example.com`  
> 当我们使用宿主机安装gitlab时，ssh流量会被`git`用户下脚本重定向到gitlab  
> 而当我们使用docker安装gitlab时，宿主机没有`git`用户,也没有gitlab，所以无法重定向到gitlab  
> 解决了这个问题，我们就可以将ssh登录的端口和git所使用的端口复用22端口了  
> 不过实际解决的时候有一个前提条件，那就是宿主机和容器使用同一份`authorized_keys`文件，
> 这是因为在gitlab网页上添加公钥时，gitlab会将该公钥添加到`authorized_keys`文件中，
> 这样这份公钥才能在ssh下进行验证。  
> 但是又不能简单的将`authorized_keys`文件进行软硬链接之类，因为sshd要求其他用户没有`authorized_keys`的写权限才能进行验证，
> 因为需要让gitlab自动维护该文件，所以容器内的git用户必须有该文件的写权限，而宿主机的git用户uid如果和容器中的uid用户不一致，那么就会有“其他用户”拥有该文件的写权限而导致无法验证。  
> 解决方法有几种：
> 1. 在宿主机创建和容器中uid一致的git用户，这可以在创建用户的时候使用`-u`参数指定uid来实现，gitlab中的git用户的uid一般是998，
     > 宿主机有和容器中uid一致的git用户后，可以使用软硬链接将该文件链接，也可以指定宿主机的git用户的home目录，也可以在docker中额外将该文件进行挂载。
     > 该方式较为简单，但是经常会欧已经存在相同uid的用户这种问题，而修改用户uid则可能会有其他问题，所以本人研究了另一种方法。
> 2. sshd配置文件`/etc/sshd/sshd_config`中存在`AuthorizedKeysCommand`配置项，
     > 该配置允许您指定将在登录期间运行的命令，以从远程源检索用户公钥文件并执行验证，
     > 在用户登录时，将优先运行该命令，该命令应该在标准输出中输出0行或多行ssh-key字符串（即`authorized_keys`中每一行的内容）
     > 如果用户登录所使用的私钥能够和输出的这些ssh-key中的一个匹配，则登录成功，否则将读取`authorized_keys`文件进行验证。  
     > 利用这一点，我们可以编写一个脚本，它以root用户的身份运行，运行时判断登录的用户名，如果是`git`，
     > 则读取docker中的`authorized_keys`并输出，以实现公钥验证。

首先我们需要建立一个名为`git`的用户，否则用户不存在无法验证
```shell
> useradd -m -s /bin/sh -d /home/git git
```
在`/data/docker/gitlab`下建立`git-ssh`文件读取`authorized_keys`，内容如下：
```shell
#!/bin/sh
if [ $1 = 'git' ];then
  cat /data/docker/gitlab/data/.ssh/authorized_keys
fi
```
> 注意：该文件可以输出任何公钥文件以实现任意用户的密钥登录，所以它应该只能由`root`用户进行编辑和执行（即700）  
> `/data/docker/gitlab/data/.ssh/authorized_keys`文件是容器中的git用户的`authorized_keys`文件

然后我们修改`/etc/sshd/sshd_config`文件：
```
AuthorizedKeysCommand /data/docker/gitlab/git-ssh %u
AuthorizedKeysCommandUser root
```
修改完毕使用`systemctl restart sshd`命令重启sshd

gitlab自动维护的`authorized_keys`每一行的内容大约是：
```
command="/opt/gitlab/embedded/service/gitlab-shell/bin/gitlab-shell key-xxx",no-port-forwarding,no-X11-forwarding,no-agent-forwarding,no-pty ssh-ed25519 xxxxxxxx
```
它的作用是将ssh流量转发到`/opt/gitlab/embedded/service/gitlab-shell/bin/gitlab-shell`，
宿主机接收到ssh流量后也会将流量转发到宿主机的该位置，而该位置并没有任何东西，所以会导致失败，
在`/data/docker/gitlab`下新建`gitlab-shell`文件：
```shell
#!/bin/sh

ssh -p 6022 -o StrictHostKeyChecking=no git@127.0.0.1 "SSH_ORIGINAL_COMMAND=\"$SSH_ORIGINAL_COMMAND\" $0 $@"
```
注意`6022`是gitlab映射到宿主机的端口,然后不要忘记添加执行权限
添加可执行权限后，软链接到/opt/gitlab/embedded/service/gitlab-shell/bin/gitlab-shell
```shell
mkdir -p /opt/gitlab/embedded/service/gitlab-shell/bin/
ln -s /data/docker/gitlab/gitlab-shell /opt/gitlab/embedded/service/gitlab-shell/bin/gitlab-shell
```
此时git用户的ssh流量将在脚本的作用下进行公钥验证，然后转发到容器中，但是从宿主机转发到容器中的ssh流量还要经过一次验证，这次验证的私钥需要由宿主机的git用户提供
所以我们需要给宿主机的git用户生成密钥对，并将公钥写入到`authorized_keys`中：
```shell
sudo -u git ssh-keygen -t rsa -b 4096 -C "Git docker ssh keygen"  #然后一路回车，给git用户生成登录密钥
cat /home/git/.ssh/id_rsa.pub >> /data/docker/gitlab/data/.ssh/authorized_keys  #将git用户的登录公钥添加到authorized_keys种
```
至此，我们就完成了22端口的复用



###### 数据迁移（可选）

如已有旧的`gitlab`，需要将旧数据迁移过来，则：

1. 先在原`gitlab`服务器端执行命令`gitlab-rake gitlab:backup:create`备份文件，备份文件的默认位置是`/var/opt/gitlab/backups/`，如原服务端已在docker中运行，请查看docker的目录卷映射，备份文件的文件名一般为`时间戳_年_月_日_时.分.秒_gitlab_backup.tar`。
2. 备份完成后将备份文件拷贝到当前服务器的`/data/docker/gitlab/data/backups`目录。
3. 使用`docker compose down`停止gitlab。
4. 然后将`docker-compose.yml`文件中的版本号修改为原来的gitlab一致的版本号，再启动gitlab。
5. 然后使用`docker compose exec gitlab bash`命令进入容器。
6. 再在容器内使用`gitlab-rake gitlab:backup:restore`命令恢复数据。
7. 恢复数据开始后会提示是否恢复数据，请确保本机的gitlab中没有重要数据。
8. 如在恢复数据后需要将gitlab的版本升级，请参考升级指南`https://docs.gitlab.com/ee/update/index.html`，按照升级指南的版本一步步升级，否则可能造成文件损坏

> 恢复数据或升级版本后，在浏览器打开gitlab网页，确认可以进行登录之后再停止容器，然后修改`docker-compose.yml`文件中的版本号，再启动容器，依次升级，千万不要在还不能登录时就停止容器，否则会造成文件损坏。



### 六、安装harbor

1. 在`https://github.com/goharbor/harbor/releases`下载最新的安装包（放到`/data/tools/harbor`）
2. 使用`tar zxvf xxx.tgz`命令解压压缩文件，然后修改`harbor.yml`文件，主要修改：
   1. `hostname`修改为`harbor.example.com`
   2. `harbor_admin_password` 和`database.password`修改为随机密码，增强安全性
   3. `http.port`修改为`8001`
      > 也可以不修改，不过如果这里不修改端口，那么就要修改之后生成的`docker-compose.yml`中暴露的端口，否则会因为和nginx同时使用80端口而出错
   4. `data_volume`修改为`/data/docker/harbor/harbor_data`
   5. `log.local.location`修改为`/data/docker/harbor/harbor_log`
   6. 注释掉`https`块内容
      > 注释掉https块的内容的原因是如果不注释掉，harbor会尝试监听443端口，并使用ssl证书，但是我们是使用了一个统一的nginx来进行统一的请求转发和证书配置，所以不需要
3. 执行`install.sh`
4. 修改配置以使得在前置了另外一层`nginx`时可以使用：
   1. 打开`common/config/core/env`文件，将`EXT_ENDPOINT=http://harbor.example.com:8001`修改为`EXT_ENDPOINT=https://harbor.example.com`）
      > 如果没有修改`harbor.yml`中的`http.port`，那么这里应该是`EXT_ENDPOINT=http://harbor.example.com`，那么只需要将`http`修改为`https`即可。  
      > 总之，将这里的地址修改为我们在使用web界面时的访问地址，否则在命令行下登录docker会出现重定向错误问题，这个问题我在网上找了很久没有找到解决方案，最后是自己摸索出来的。  
      > 如果是单机安装harbor，外面不需要另外一层nginx，那么这里的地址应该默认就是正确的。
   2. 打开`common/config/nginx/nginx.conf`，将`location /`、`location /v2/`、`location /service/`块下面的`proxy_set_header X-Forwarded-Proto $scheme;`注释掉
      > 因为我们在外面前置了一层`nginx`，所以内部nginx在转发的时候不要再加`X-Forwarded-Proto`这个http头，不然会出现解析错误问题
5. 因为`container_name`是全局唯一的，而`harbor`的部分容器名使用的默认的，会和其他的冲突（比如`nginx`），所以我们打开`docker-compose.yml`，将所有没有`harbor`前缀的`container_name`加上`harbor`前缀，以防和其他容器冲突
6. 将需要的文件和文件夹(`common`,`docker-compose.yml`)拷贝到`/data/docker/harbor`下，注意`common`文件夹需要带权限拷贝（`cp -p`），否则启动容器会出问题
   > 其他文件在容器运行时并不需要，所以我建议在一个目录生成配置文件，然后把配置文件复制到另一个目录运行，以免文件混乱，注意复制到的目录要和之前`harbor.yml`文件中的`data_volume`对应（去除最后一层目录）
7. 进入`/data/docker/harbor`创建日志文件夹`mkdir harbor_log`
8. 执行`docker compose up -d`启动容器  

安装好后，进入web管理页面`https://harbor.example.com`，删除默认的仓库，并添加一个仓库`example`，在该仓库下添加2个机器人`pull`和`push`，分别给予`拉取 artifact`和`拉取artifact,推送artifact`权限。

> harbor策略是push必须有pull权限  
> 此时还可以设置一下垃圾清理策略、仓库的artifact保留策略等，建议每天或每周清理一次垃圾，每个镜像只保留最后10-30次推送的版本


### 七、安装并初始化Jenkins

在`/data/docker/jenkins`创建`docker-compose.yml`文件：

```yaml
version: "3.8"
services:
    jenkins:
        image: jenkins/jenkins:lts
        container_name: jenkins
        restart: always
        network_mode: "host"
        volumes:
            - ./jenkins_home:/var/jenkins_home
            - /var/run/docker.sock:/var/run/docker.sock
            - /bin/docker:/bin/docker
        environment:
            HOST_WORKSPACE: ${PWD}/jenkins_home/workspace
        user: root
```

> `environment.HOST_WORKSPACE`项的作用是把`${PWD}/jenkins_home/workspace`映射到docker中的`HOST_WORKSPACE`环境变量，这样在Jenkins的任务中，我们可以通过`"$HOST_WORKSPACE/$JOB_NAME"`来获取项目工作空间在宿主机上的位置  
> 同时我们在`volumes`中映射了docker的bin和sock，这样我们就可以在Jenkins中运行docker，并将工作空间在宿主机上的位置映射给该docker，以便我们编译golang项目

启动Jenkins：`docker compose up -d`

启动好后先停止Jenkins：`docker compose down`

然后修改配置文件，实现插件安装加速之后再启动Jenkins：

```shell
# 编辑jenkins配置文件
vi jenkins_home/updates/default.json
# 执行ex命令, 替换所有插件下载URL（先输入:，然后粘贴:后面的命令）
:1,$s/https:\/\/updates.jenkins.io\/download/https:\/\/mirrors.tuna.tsinghua.edu.cn\/jenkins/g
# 执行ex命令, 替换连接测试URL
:1,$s/https:\/\/www.google.com/https:\/\/www.baidu.com/g
# 重启jenkins容器
docker compose up -d
```

> 这里修改的目的是为了在Jenkins初始化的时候可以正常下载插件，否则初始化过程中会有很多插件无法下载，导致初始化完毕后有很多插件因为缺少前置插件无法加载，需要一个个修复，比较麻烦

初始化Jenkins并安装插件

在浏览器打开`https://jenkins.example.com`进入安装页面，通过命令`cat jenkins_home/secrets/initialAdminPassword`查看初始密码

然后安装推荐插件、创建管理员用户

`Jenkins URL`如果默认显示的是`https://jenkins.example.com`那么保持默认即可

jenkins左侧-`Manage Jenkins/系统管理`-`Manage Plugins/插件管理`-`Advanced/高级`-`Update Site/升级站点`

修改为`https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json`

修改后点击右下方的`立即获取`，等待更新后`再次修改default.json配置文件`，并重新启动Jenkins

重新进入Jenkins后安装需要的插件：

1. gitlab
2. Publish over SSH（远程登录其他服务器）



###### golang编译环境问题

由于go在国内下载问题，导致Jenkins的go插件的官方安装方式无法使用，加上Jenkins中没有gcc运行环境，所以我们使用宿主机的docker运行golang的镜像来进行程序的编译，更方便



###### 设置凭据

各种帐号密码不要直接放在脚本中，这样容易造成泄漏，可以使用Jenkins自带的凭据管理，在`系统设置`-`Manage Credentials`中，进入系统凭据存储，进入全局凭据，然后点左侧的`添加凭据`即可添加各种凭据

这里需要将gitlab机器人账户的私钥、2个harbor机器人帐号和密码添加进凭据中：

| id                  | 凭据类型                      | 备注                                        |
| ------------------- | ----------------------------- | ------------------------------------------- |
| gitlab-server-creds | SSH Username with private key | gitlab机器人帐号                            |
| harbor-pull-creds   | Username with password        | 用于在各种服务器上pull docker仓库镜像的帐号 |
| harbor-push-creds   | Username with password        | 用于在Jenkins中向docker仓库push镜像的帐号   |



### 八、创建测试go项目，并进行持续集成测试

###### 创建基础镜像

由于`scratch`、`alpine`、`busybox`等小型镜像都不含根证书，会导致使用这些小型镜像无法进行证书校验，也就无法进行https请求等，同时这些镜像的时区都是默认的格林威治时，所以我们自定义一个镜像，并上传到我们的私有库，之后我们的项目以这个自定义的镜像作为基础镜像，会更方便。

首先我们将本机的上海时区文件和根证书复制到当前目录：

```shell
cp -p /usr/share/zoneinfo/Asia/Shanghai .
cp -p /etc/ssl/certs/ca-certificates.crt .
```

然后创建`Dockerfile`文件：

```dockerfile
FROM scratch
  
COPY Shanghai /etc/localtime
COPY ca-certificates.crt /etc/ssl/certs/
```

然后我们编译镜像、上传到私有库：

```shell
docker build --tag harbor.example.com/example/scratch:v1 --tag harbor.example.com/example/scratch:latest .
docker login harbor.example.com
docker push --all-tags harbor.example.com/example/scratch
docker logout harbor.example.com
```

> 参考：https://juejin.cn/post/6844904174396637197



###### 本地创建项目

创建一个go项目`example`，在该项目下创建文件夹`build`，在`build`文件夹下创建`docker-compose.yml`文件以使用docker部署该go项目：

```yaml
version: '3.8'
services:
  example:
    image: harbor.example.com/example/example:latest
    container_name: example
    restart: always
    volumes:
      - ./data:/app/data
    network_mode: "host"
```

创建`Dockerfile`文件以编译docker镜像，注意我们使用自定义过的镜像作为基础镜像：

```dockerfile
FROM harbor.example.com/example/scratch:latest

WORKDIR /app
COPY example .
VOLUME /app/data
ENTRYPOINT ["./example"]
```

创建jenkins持续部署脚本`Jenkinsfile`：

```groovy
pipeline {
    agent any
    environment {
        GO_BUILD_IMAGE = 'golang:1.16.6'            //使用的编译golang docker镜像名及版本
        OUTPUT_FILENAME = 'build/example'    //编译阶段输出文件
        
        HARBOR_DOMAIN = 'harbor.example.com'          //harbor的域名
        HARBOR_PROJECT = 'example'                  //harbor的仓库名
        HARBOR_ARTIFACT = 'example'          //harbor的项目名
        VERSION_CURRENT = "v${env.BUILD_NUMBER}"          //本次编译的版本名，BUILD_NUMBER是Jenkins的版本号，从1开始累加
        VERSION_LATEST = 'latest'                   //最后版本的版本名
    }
    stages {
        //阶段1：将golang源码编译成可执行文件（注：本文默认所有代码均已在gitlab中，无需go get等，如需要请自行添加对应代码）
        stage('Build go project') {
            steps{
                echo 'Building go project...'
                sh "docker run --rm -v \"$HOST_WORKSPACE/$JOB_NAME\":/usr/src/app -w /usr/src/app $GO_BUILD_IMAGE go build -o $OUTPUT_FILENAME  -ldflags \'-linkmode \"external\" -extldflags \"-static\"\'"
                //使用-trimpath参数去除源码路径
                //因为使用scratch作为基础镜像，所以编译的二进制文件必须是没有动态链接库的
                //所以使用-ldflags '-linkmode "external" -extldflags "-static"'参数编译动态链接库
                //以免编译后的程序因为找不到动态链接库而无法运行
                //查看二进制文件是否有动态链接库，可以使用ldd file命令查看
                //网上很多文章都说使用环境变量CGO_ENABLED=0来进行静态编译，但是没有说为什么
                //但是https://johng.cn/cgo-enabled-affect-go-static-compile/这篇文章就说的很明白，CGO_ENABLED=0不是万能的
                //正确的做法是使用linkmode
            }
        }
        //阶段2：将编译完成后的可执行文件编译进docker镜像，并上传到私有仓库
        stage('Build docker') {
            steps{
                echo 'Building docker...'
                // 创建docker临时配置目录，将docker的登录信息放进Jenkins的临时文件夹
                withEnv(["DOCKER_CONFIG=" + pwd(tmp:true) + "/.docker"]) {
                    //读取Jenkins凭据
                    //这里的harbor-push-creds对应Jenkins后台的凭据ID
                    withCredentials([usernamePassword(credentialsId: 'harbor-push-creds', passwordVariable: 'password', usernameVariable: 'username')]) {
                        sh '''
                            mkdir -p $DOCKER_CONFIG
                            # 镜像名
                            image=$HARBOR_DOMAIN/$HARBOR_PROJECT/$HARBOR_ARTIFACT

                            # 构建Docker镜像，同时设置2个tag，前一个tag是当前版本，当需要版本回退时使用
                            # 后一个tag是latest，这样latest永远是最新的版本，拉取镜像时用latest就可以一直拉取最新版本而不需要修改版本号
                            docker build --tag $image:$VERSION_CURRENT --tag $image:$VERSION_LATEST ./build

                            # 登录harbor，使用echo和管道的原因是docker建议这样使用，以免密码出现在sh的历史记录中
                            # 如果使用——password就会产生一个警告，其实在Jenkins中密码会被脱敏，所以关系不大
                            echo $password | docker login --username=$username --password-stdin $HARBOR_DOMAIN
                            # 镜像上传至Docker镜像仓库，使用--all-tags将所有tag都上传到仓库
                            docker push --all-tags $image
                            # 删除构建镜像，防止镜像在本机累积
                            docker rmi $image:$VERSION_CURRENT $image:$VERSION_LATEST
                            # 为了安全考虑，登出docker
                            docker logout $HARBOR_DOMAIN
                            # 删除docker临时配置目录
                            [ -d $DOCKER_CONFIG ] && rm -rf $DOCKER_CONFIG
                        '''
                    }
                }
            }
        }
        //阶段3：部署到生产环境
        stage('Deploy to production') {     // 部署生产环境服务器上
            steps{
                echo 'Ready to deploy'
                //将harbor pull的帐号密码写入到文件，以便使用scp传输到对应服务器，避免密码出现在sh执行记录中
                    //这里的harbor-pull-creds对应Jenkins后台的凭据ID
                withCredentials([usernamePassword(credentialsId: 'harbor-pull-creds', passwordVariable: 'password', usernameVariable: 'username')]) {
                    sh 'echo "${username} ${password}" > build/.username'
                }
                echo 'Deploy to production'
                sshPublisher(
                    publishers: [
                        sshPublisherDesc(
                            //Jenkins系统设置中已配置的服务器名
                            configName: 'development',
                            transfers: [
                                sshTransfer(
                                    cleanRemote: false,
                                    excludes: '',
                                    //在对应的服务器上执行的指令，先切换到工作目录，然后配置docker的临时配置，然后登陆docker，之后pull镜像并重新运行容器
                                    execCommand: '''
                                    cd /data/docker/example
                                    export DOCKER_CONFIG=`pwd`/.docker
                                    username=`cat .username | awk '{print $1}'`
                                    domain=harbor.example.com
                                    cat .username | awk '{print $2}' | sudo -E com.docker.cli login --username=$username --password-stdin $domain
                                    sudo -E docker compose pull
                                    sudo -E docker compose down -v
                                    sudo -E docker compose up -d
                                    sudo -E com.docker.cli logout $domain
                                    [ -d .docker ] && sudo rm -rf .docker
                                    [ -f .username ] && rm -rf .username
                                    ''',
                                    execTimeout: 120000,
                                    flatten: false,
                                    makeEmptyDirs: false,
                                    noDefaultExcludes: false,
                                    patternSeparator: '[, ]+',
                                    //远程目录，该目录是Jenkins对应服务器的相对目录，因为服务器上设置的是/，所以这里基本上按完整目录填写
                                    remoteDirectory: 'data/docker/example',
                                    remoteDirectorySDF: false,
                                    //去除前缀，将上传文件的前缀去除，否则会按源文件的路径生成子目录
                                    removePrefix: 'build/',
                                    //上传的文件
                                    sourceFiles: 'build/docker-compose.yml,build/.username'
                                )
                            ],
                            usePromotionTimestamp: false,
                            useWorkspaceInPromotion: true,
                            //是否在Jenkins控制台显示命令执行信息
                            verbose: true
                        )
                    ]
                )
                //清理本地保存的harbor帐号密码
                echo 'Clean workspace'
                sh 'rm -rf build/.username'
            }
        }
    }
}
```

> 以上脚本，如需在其他工程中使用，大部分变量可以在开头的环境变量配置中修改，少部分依然需要逐个修改：
>
> 1. `harbor-push-creds`和`harbor-pull-creds`，凭据ID
> 2. sshPublisher的`execCommand`中的目录、域名
> 3. sshPublisher`configName`、`remoteDirectory`、`removePrefix`和`sourceFiles`



###### Jenkins设置发布主机

在Jenkins中的`系统管理`-`系统配置`-`Publish over SSH`中，设置全局登录凭证：

1. `Passphrase`表示登录密码，如设置了私钥，则表示私钥的密码
2. `Path to key`表示私钥的路径
3. `Key`表示私钥的文本，我们直接将私钥填写到这里，然后点新增，添加一个主机：
4. `Name`表示名字，在脚本中需要用到，我们这里填写为和脚本中一样的`development``
5. ``Hostname`表示主机的IP或域名，我们填`gitlab.example.com`
6. `Username`表示开启了ssh登录的用户的用户名，我们填`jenkins-task`，注意该用户需要免密`sudo`权限
7. `Remote Directory`表示远程目录，脚本中的目录都是相对这个目录而言的，如果不填则表示为用户的home目录，我们填`/`
8. 因为我们设置了本机的ssh登录端口为6022，所以我们需要展开`高级`设置，将`Port`修改为`6022`，之后保存

> 注意：因为我们使用`jenkins-task`帐号登录服务器后，可能需要新建文件夹，这就需要`jenkins-task`帐号需要对可能需要新建文件夹的文件夹具有rwx权限  
> 注意jenkins要使用旧版私钥登录（`ssh-keygen -m PEM -t rsa -b 4096`，第一行是`-----BEGIN RSA PRIVATE KEY-----`而不是`-----BEGIN OPENSSH PRIVATE KEY-----`）



###### 创建gitlab项目

在gitlab中新建一个仓库（地址假设为`https://gitlab.example.com/example`、`git@gitlab.example.com:example.git`）



###### Jenkins设置项目

1. 在Jenkins主页选择新建项目，项目名填`example`，项目类型选`流水线`后确认

2. 然后在`构建触发器`中勾选`Build when a change is pushed to GitLab. GitLab webhook URL: https://jenkins.example.com/project/example`，点击下面的`高级`，再点下面的`Secret token`下面的`Generate`生成一个随机的token，我们需要将`https://jenkins.example.com/project/example`和token记住
3. 在`流水线`的`定义`中，选择`Pipeline script from SCM`，表示从版本管理系统中检出脚本，SCM选择`git`
   1. `Repository URL`填刚刚创建的gitlab项目的地址`https://gitlab.example.com/example`
   2. `Credentials`选择我们在凭据中添加的gitlab帐号的凭据
   3. 在`源码库浏览器`中选择`gitlab`以在我们推送代码后可以在Jenkins对应的任务中直接点击链接跳转到gitlab查看代码提交
      1. `URL`填gitlab的web地址`https://gitlab.example.com/example`
      2. `Version`填gitlab的`x.y`形式的版本号，比如我们使用的gitlab版本为`14.0.6`，那么就填`14.0`
   4. `脚本路径`填`build/Jenkinsfile`
   5. 取消`轻量级检出`前面的对勾
4. 然后保存



###### 设置gitlab的webhook

1. 如果`jenkins.example.com`解析的地址是本地地址，那么进入gitlab的`Menu`-`Admin`-`Settings`-`Network`-`Outbound requests`，将解析的地址加入`Local IP addresses and domain names that hooks and services may access.`中，否则gitlab不允许webhook请求本地地址（也可以勾选`Allow requests to the local network from web hooks and services`，但是不建议）
2. 进入gitlab的web管理页面，进入example项目，进入`settings`-`webhooks`
3. 在右侧的`URL`中填入刚刚在Jenkins中记住的地址`https://jenkins.example.com/project/example`，并在`Secret token`中填入Jenkins中记住的token
4. 勾选`Merge request events`的对勾
5. 点击`Add webhook`



现在可以将本地的go代码推送到gitlab了，如果不出意外，推送完毕后，gitlab会调用webhook，然后Jenkins会拉取最新的代码，并在编译完成后推送到服务器并运行对应的容器