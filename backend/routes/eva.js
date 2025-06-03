const express = require('express');
const router = express.Router();

router.post('/message', (req, res) => {
  const { message } = req.body;
  if (message.includes('evento')) {
    res.json({ response: '¿Quieres crear un evento?' });
  } else {
    res.json({ response: 'No entendí tu mensaje' });
  }
});

module.exports = router;
