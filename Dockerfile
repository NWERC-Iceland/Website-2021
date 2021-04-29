FROM ubuntu

RUN apt-get update && apt-get install -y hugo
COPY ./ /src/
RUN cd /src && hugo -D

FROM nginx

COPY --from=0 /src/public /usr/share/nginx/html

