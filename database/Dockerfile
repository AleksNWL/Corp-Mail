FROM mariadb:latest

ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=mailserver
ENV MYSQL_USER=mailuser
ENV MYSQL_PASSWORD=mailpassword

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
