# Docker Swarm Sample

## manager init

```
> docker container exec -it manager docker swarm init
```

## join worker

execute at worker01, worker02 and worker03

```
> docker container exec -it worker01 docker swarm join --token ***** manager:2377
```

## build example/echo

```
> cd ../echo
> docker build -t example/echo:latest .
```

## regiter example/echo at registry

```
> docker image tag example/echo:latest localhost:5000/example/echo:latest
> docker push localhost:5000/example/echo:latest
```

## pull image at worker01

```
> docker container exec -it worker01 docker pull registry:5000/example/echo:latest
```

## create service

```
> docker container exec -it manager docker service create --replicas 1 --publish 8000:8080 --name echo registry:5000/example/echo:latest
```

## scale service

```
> docker container exec -it manager docker service scale echo=6
```

## delete service

```
> docker container exec -it manager docker service rm echo
```
