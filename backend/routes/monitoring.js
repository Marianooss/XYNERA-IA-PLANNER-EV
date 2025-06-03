const express = require('express');
const router = express.Router();

router.get('/predict', (req, res) => {
  res.json({ prediction: 'Fallo en servidor 3 en 24h' });
});

module.exports = router;
