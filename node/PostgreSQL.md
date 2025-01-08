1.运行

建立以下`docker-compose.yml`文件，并使用`docker compose up -d`运行

```
version: '3.8'
services:
    postgres:
        image: 'postgres:latest'
        container_name: postgres
        restart: always
        environment:
            POSTGRES_PASSWORD: postgres
        ports:
        - '5432:5432'
        #network_mode: "host"
        volumes:
        - ./data:/var/lib/postgresql/data
```

必须在环境变量中设置密码，否则无法启动，会一直重启

