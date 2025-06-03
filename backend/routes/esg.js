const express = require('express');
const router = express.Router();

router.post('/calculate', (req, res) => {
  const { energyUsage } = req.body;
  const carbonFootprint = energyUsage * 0.5;
  res.json({ carbonFootprint, recommendation: 'Reducir uso en 20%' });
});

module.exports = router;
