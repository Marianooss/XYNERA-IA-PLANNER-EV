const express = require('express');
const router = express.Router();

router.post('/sync', (req, res) => {
  res.json({ status: 'Sincronización exitosa' });
});

module.exports = router;
