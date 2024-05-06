const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  console.log({ email, password })
  //TODO check user credentials in DB
  if (email === 'admin@example.com' && password === 'admin') {
    req.session.email = "admin@example.com";
    res.redirect('/repositories');
  } else {
    res.render('invalid.credentials.hbs');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/auth/login');
});

module.exports = router;