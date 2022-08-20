# map_plat

## Tech
 - [tailwind.css](https://tailwindcss.com)
 - [Leaflet](https://leafletjs.com/)
 - [leaflet.heat](https://github.com/Leaflet/Leaflet.heat)
 - [Vue.js](https://vuejs.org/)
 - [Vue Cli 3](https://cli.vuejs.org/)
 - [Vue Test Utils](https://vue-test-utils.vuejs.org/)
 - [ESLint](https://eslint.org/)
 - [Jest](https://jestjs.io/)
 - [Chai](http://www.chaijs.com/)
 - [Docker and Docker Compose](https://www.docker.com/)
 - [Pandas](https://pandas.pydata.org/)
 - [gRPC Web](https://github.com/improbable-eng/grpc-web)
 - [Protocol Buffers](https://developers.google.com/protocol-buffers/)
 - [Let's Encrypt](https://letsencrypt.org/)
 - [certbot](https://certbot.eff.org/)
 - [gziphandler](https://github.com/NYTimes/gziphandler)
 - [pq](https://github.com/lib/pq)
 - [PostGIS](https://postgis.net/)
 - [PostgreSQL](https://www.postgresql.org/)
 

## Project setup

### Database Setup
```
docker-compose up -d
```

Once running, connect via pgAdmin
```
username: docker
password: docker
port: 54321
```

Create a locations table in the gis database with latitude, longitude, and count columns

Import the initial dataset
```
copy locations from '/data/out.csv' DELIMITERS ',' CSV;
```

### Certs
generate self signed certs and place in the root of the application

### Testing
Currently, all server side tests rely on a local database running. This requirement should be updated in the future.
```
docker-compose up -d
go test ./...
```

### Run the server
```
go get
go run main.go
```

### Compiles and hot-reloads for development (from app directory)
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

### TODO for proper production deploy
    1 Add go vendoring
    2 Create main docker container to run application
    3 Remove exposed port on db container
    4 Move database connection string to use environment variables
    5 Move utility classes from html into a component scss library
    6 Add validation logic for the bounded box input
    7 Add user friendly help text
    8 Remove the need for a real database to run go tests

