FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \
    zip \
    unzip \
    nodejs \
    npm

RUN docker-php-ext-install pdo pdo_mysql pdo_pgsql mbstring exif pcntl bcmath gd

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

COPY . .

RUN composer install --optimize-autoloader --no-dev
RUN npm install && npm run build


RUN mkdir -p storage/framework/views \
    storage/framework/cache \
    storage/framework/sessions \
    storage/logs \
    bootstrap/cache

RUN chmod -R 775 storage bootstrap/cache
RUN chown -R www-data:www-data storage bootstrap/cache

EXPOSE 8000

CMD php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=8000