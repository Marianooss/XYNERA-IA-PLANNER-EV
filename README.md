# XYNERA IA PLANNER

Proyecto para gestionar y optimizar consultas SQL, eventos, métricas ESG, seguridad, integración y monitoreo con microservicios en Node.js y Next.js.

## Estructura de Carpetas
```
xynera-ia-planner/
├── backend/
├── frontend/
├── tests/
├── .env
├── .gitignore
├── LICENSE
├── README.md
├── DEVELOPMENT_PLAN.md
├── TRACKER.md
├── CODE_OF_CONDUCT.md
└── CONTRIBUTING.md
```

## Instrucciones de Uso
1. Configurar variables en `.env`:
   ```dotenv
   MONGO_URI=mongodb://localhost:27017/xynera
   JWT_SECRET=your-secret-key
   PORT=5000
   ```
2. Instalar y ejecutar servicios:
   ```powershell
   # Backend
   cd backend
   npm install
   npm run start

   # Frontend (nueva terminal)
   cd frontend
   npm install
   npm run dev
   ```
3. Acceder en el navegador: http://localhost:3000
4. Ejecutar tests:
   ```powershell
   cd backend
   npm test
   ```

## Documentación
- `DEVELOPMENT_PLAN.md`: Plan de desarrollo completo.
- `TRACKER.md`: Seguimiento de tareas.

## Licencia
Este proyecto está bajo la Licencia Apache 2.0. Consulte el archivo `LICENSE` para más detalles.
