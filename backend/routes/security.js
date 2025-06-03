const express = require('express');
const router = express.Router();

router.get('/alerts', (req, res) => {
  res.json([{ id: 1, threat: 'Acceso sospechoso', level: 'high' }]);
});

module.exports = router;
