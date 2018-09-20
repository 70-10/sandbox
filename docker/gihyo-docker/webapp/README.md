# Web Application (Todo App) on Docker

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
