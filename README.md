# Concord CRM

## Requisitos

- PHP 8.2
- Node.js (ver `.nvmrc`)
- Docker y `docker-compose`

## Instalación

1. Instala dependencias PHP:
   ```bash
   composer install
   ```
2. Instala dependencias JS:
   ```bash
   npm install
   ```

## Puesta en marcha

Levanta el entorno con Docker:

```bash
docker-compose up -d
```

## Pruebas

- Ejecutar las pruebas de PHP:
  ```bash
  php artisan test
  ```
- Analizar el código JavaScript:
  ```bash
  npm run lint
  ```
