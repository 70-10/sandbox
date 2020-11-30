FROM mcr.microsoft.com/dotnet/sdk:5.0 as builder
COPY . /app
WORKDIR /app

RUN dotnet publish -c Release

FROM mcr.microsoft.com/dotnet/aspnet:5.0

COPY --from=builder /app/bin/Release/net5.0/publish/ /app
WORKDIR /app
ENTRYPOINT [ "dotnet", "ApiDockerSample.dll" ]