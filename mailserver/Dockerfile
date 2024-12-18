# Базовый образ
FROM debian:latest

# Установка необходимых пакетов
RUN apt-get update && apt-get install -y \
    postfix \
    dovecot-core \
    dovecot-imapd \
    dovecot-pop3d \
    dovecot-lmtpd \
    libsasl2-modules \
    sasl2-bin \
    openssl \
    && apt-get clean


# Копирование конфигурационных файлов для Postfix
COPY postfix/ /etc/postfix/

# Копирование конфигурационных файлов для Dovecot
COPY dovecot/ /etc/dovecot/

# Копирование стартового скрипта
COPY config/startup.sh /usr/local/bin/startup.sh

# Делаем скрипт исполняемым
RUN chmod +x /usr/local/bin/startup.sh

# Открытие портов для SMTP и IMAP
EXPOSE 25 587 143 993

# Установка скрипта запуска в качестве команды по умолчанию
CMD ["/usr/local/bin/startup.sh"]
