FROM amazoncorretto:11-alpine-jdk as builder

COPY . /app
WORKDIR /app

RUN ./gradlew build

FROM amazoncorretto:11-alpine-jdk
COPY --from=builder /app/build/libs /app
WORKDIR /app

ENTRYPOINT [ "java", "-jar", "hello-world-0.1.0.jar" ]