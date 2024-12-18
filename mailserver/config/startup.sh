#!/bin/bash

# Создаём сертификаты для Dovecot
mkdir -p /etc/dovecot/private
openssl req -new -x509 -days 365 -nodes -out /etc/dovecot/dovecot.pem -keyout /etc/dovecot/private/dovecot.pem -subj "/C=US/ST=State/L=City/O=Company/OU=Org/CN=mailserver.local"

# Запуск Postfix
service postfix start

# Запуск Dovecot
service dovecot start

# Удерживаем контейнер запущенным
tail -f /dev/null
