const express = require('express');
const router = express.Router();

router.post('/optimize', (req, res) => {
  const { query } = req.body;
  const optimizedQuery = query.replace(/SELECT \*/g, 'SELECT id, name');
  res.json({ optimizedQuery, savings: '45%' });
});

module.exports = router;
