# Development Plan

Este documento contiene el plan completo de desarrollo extraído de `plan completo desarrollo.txt`.

## 1. Estructura de Carpetas
```plaintext
xynera-ia-planner/
├── backend/
│   ├── routes/
│   │   ├── autopilot.js
│   │   ├── eva.js
│   │   ├── esg.js
│   │   ├── security.js
│   │   ├── integration.js
│   │   └── monitoring.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── pages/
│   │   └── index.js
│   └── package.json
├── tests/
│   └── autopilot.test.js
└── .env
```

## 2. Contenido Inicial de Archivos
- **backend/server.js**: servidor Express, conexión a MongoDB y rutas.
- **backend/routes/**: microservicios para autopilot, eva, esg, security, integration y monitoring.
- **frontend/pages/index.js**: cliente Next.js con llamada a `/api/autopilot/optimize`.
- **tests/autopilot.test.js**: prueba de optimización SQL.
- **.env**: variables de entorno (MONGO_URI, JWT_SECRET, PORT).

## 3. Instrucciones de Uso
1. Instalar dependencias (`npm install`).
2. Ejecutar backend (`npm run start`).
3. Ejecutar frontend (`npm run dev`).
4. Ejecutar tests (`npm test`).
