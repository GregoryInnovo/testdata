# API Simple con Express

API sencilla con Express que responde en formato JSON y tiene CORS habilitado para cualquier IP.

## Instalación

```bash
npm install
```

## Ejecución

Para ejecutar en modo producción:
```bash
npm start
```

Para ejecutar en modo desarrollo con recarga automática:
```bash
npm run dev
```

## Endpoints

- `GET /`: Endpoint principal, devuelve un mensaje de bienvenida
- `GET /health`: Endpoint de verificación de salud, devuelve estado 200 si el servidor está funcionando correctamente

## Configuración

El servidor se ejecuta por defecto en el puerto 3000. Puedes cambiar el puerto estableciendo la variable de entorno `PORT`. 