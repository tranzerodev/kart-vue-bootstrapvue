# client

## Requirements

nodejs version >= 10.x and npm version >= 6.x

Edit **.env** file in order to set backend url into ui app, constant value should be assigned to VUE_APP_API_URL: 
```env
#.env file
VUE_APP_API_URL=http://URL_FOR_BACKEND:PORT_FOR_BACKEND
VUE_APP_GOOGLE_KEY=<HERE_ADD_GOOGLE_PLAY_TOKEN>
```

For API KEY to use google maps, please go to [https://developers.google.com/maps/documentation/javascript/get-api-key](https://developers.google.com/maps/documentation/javascript/get-api-key) to review how to generate the API key to enable google maps.

## 1. Add dependencies
inside client project run next command:

```
npm install
```

## 2. generate dist file
```
npm run build
```
This command generate the **dist** folder with all minified files.

## 3. use files in dist folder to run client

You can use dist file to run client on any server (nginx, apache, nodejs...)

Here we have the config for nginx configuration.

```conf
user  nginx;
worker_processes  1;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;
events {
  worker_connections  1024;
}
http {
  include       /etc/nginx/mime.types;
  default_type  application/octet-stream;
  log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';
  access_log  /var/log/nginx/access.log  main;
  sendfile        on;
  keepalive_timeout  65;
  server {
    listen       80;
    server_name  localhost;
    location / {
      root   /app;
      index  index.html;
      try_files $uri $uri/ /index.html;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
      root   /usr/share/nginx/html;
    }
  }
}
```

**Note**
You can run files in *dist* folder on any backend server (Django, Nodejs) as a static folder.

### Docker configuration

If you need I added docker configuration to deploy easily container with UI site.

run with docker:

```
docker build -t caravel-ui
docker run -d -p 8080:80 caravel-ui
```