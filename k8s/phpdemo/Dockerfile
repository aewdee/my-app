FROM php:7.2-apache

# Environment setup
#ENV APACHE_DOCUMENT_ROOT /path
#ENV APACHE_LOG_DIR /tmp

# Setup and update
RUN apt-get update

# php.ini configuration
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini" && \
    sed -i 's|;date.timezone =|date.timezone = Asia/Bangkok|g' $PHP_INI_DIR/php.ini && \
    sed -i 's|;session.save_path = "/tmp"|session.save_path = "/tmp"|g' $PHP_INI_DIR/php.ini

# x-powered-by Off
RUN sed -i 's|expose_php = On|expose_php = Off|g' $PHP_INI_DIR/php.ini

# Server signature disable
RUN echo "ServerSignature Off" >> $APACHE_CONFDIR/apache2.conf && \
    echo "ServerTokens Prod" >> $APACHE_CONFDIR/apache2.conf

COPY ./src /var/www/html/

RUN a2enmod rewrite \
    && a2enmod headers \
    && a2enmod expires \
    && a2enmod deflate

#EXPOSE 80

#CMD ""
