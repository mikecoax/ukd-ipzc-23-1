const express = require('express');
const router = express.Router();

router.post('/post-route', (req, res) => {
    const data = req.body; 
    console.log('Отримано дані:', data);
    res.send('Дані отримано успішно!');
  });

module.exports = router;
