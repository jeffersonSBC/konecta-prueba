
FROM php:7.2-fpm
# Install modules
RUN buildDeps="libpq-dev libzip-dev libicu-dev libpng-dev libjpeg62-turbo-dev libfreetype6-dev libmagickwand-6.q16-dev libxslt-dev" && \
    apt-get update && \
    apt-get install -y $buildDeps --no-install-recommends && \
    ln -s /usr/lib/x86_64-linux-gnu/ImageMagick-6.8.9/bin-Q16/MagickWand-config /usr/bin && \
    pecl install imagick && \
    echo "extension=imagick.so" > /usr/local/etc/php/conf.d/ext-imagick.ini && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    docker-php-ext-install \
        opcache \
        pdo \
        pdo_pgsql \
        pgsql \
        sockets \
        xsl \
        intl
RUN apt-get update -y && \
    apt-get install zip unzip
    
RUN apt-get update -y && \
    apt-get install nano

RUN apt-get update -y && \
    apt-get install git


# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN apt-get update -y && \
    cd /application && \
    composer update

CMD ["php-fpm"]