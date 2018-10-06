k# Web Application (Todo App) on Docker

## Prepare (init docker swarm)

### manager init

```
> docker container exec -it manager docker swarm init
```

### join worker

execute at worker01, worker02 and worker03

```
> docker container exec -it worker01 docker swarm join --token ***** manager:2377
> docker container exec -it worker02 docker swarm join --token ***** manager:2377
> docker container exec -it worker03 docker swarm join --token ***** manager:2377
```

### ceate network

```
> docker container exec -it manager docker network create --driver=overlay --attachable todoapp
```

## Swarm

### MySQL

#### build image

```
> cd gihyodocker/tododb
> docker image build -t ch04/tododb:latest .
> docker image tag ch04/tododb:latest localhost:5000/ch04/tododb:latest
> docker image push localhost:5000/ch04/tododb:latest
```

#### deploy stack

```
docker container exec -it manager docker stack deploy -c /stack/todo-mysql.yml todo_mysql
```

#### init data

```
> docker container exec -it manager docker service ps todo_mysql_master --no-trunc --filter "desired-state=running" --format "docker container exec -it {{.Node}} docker container exec -it {{.Name}}.{{.ID}} init-data.sh"
```

### API

#### build image

```
> cd gihyodocker/todoapi
> docker image build -t ch04/todoapi:latest .
> docker image tag ch04/todoapi:latest localhost:5000/ch04/todoapi:latest
> docker image push localhost:5000/ch04/todoapi:latest
```

#### deploy stack

```
> docker container exec -it manager docker stack deploy -c /stack/todo-app.yml todo_app
```

### Nginx

#### build image

```
> cd gihyodocker/todonginx
> docker image build -t ch04/nginx:latest .
> docker image tag ch04/nginx:latest localhost:5000/ch04/nginx:latest
> docker image push localhost:5000/ch04/nginx:latest
```

#### deploy stack

```
> docker container exec -it manager docker stack deploy -c /stack/todo-app.yml todo_app
```

### Web

```
> cd gihyodocker/todoweb
> docker image build -t ch04/todoweb:latest .
> docker image tag ch04/todoweb:latest localhost:5000/ch04/todoweb:latest
> docker image push localhost:5000/ch04/todoweb:latest
```
