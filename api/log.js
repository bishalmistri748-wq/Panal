const express = require('express');
const db = require('../database');
const router = express.Router();

router.post('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const ua = req.headers['user-agent'] || '';
  db.run(
    `INSERT INTO activity_log (ip, user_agent) VALUES (?, ?)`,
    [ip, ua],
    function(err) {
      if (err) return res.status(500).send('Log error');
      res.send('✅ Logged securely.');
    }
  );
});

module.exports = router;
