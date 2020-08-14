FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base

RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install nodejs -yq


WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk AS build

RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install nodejs -yq

WORKDIR /src
COPY ["NativeScript_DotNet/NativeScript_DotNet.csproj", "NativeScript_DotNet/"]



RUN dotnet restore "NativeScript_DotNet/NativeScript_DotNet.csproj"
COPY . .
WORKDIR "/src/NativeScript_DotNet"
RUN dotnet build "NativeScript_DotNet.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "NativeScript_DotNet.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "NativeScript_DotNet.dll"]



