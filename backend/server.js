const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Conectado'))
  .catch(err => console.error(err));

// Rutas
app.use('/api/autopilot', require('./routes/autopilot'));
app.use('/api/eva', require('./routes/eva'));
app.use('/api/esg', require('./routes/esg'));
app.use('/api/security', require('./routes/security'));
app.use('/api/integration', require('./routes/integration'));
app.use('/api/monitoring', require('./routes/monitoring'));

// Iniciar servidor solo si este archivo es ejecutado directamente
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
}
// Exportar la aplicación para testing
module.exports = app;
