var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const repositories = [
    { url: 'https://github.com/Nazar1007' },
    { url: 'https://github.com/Vkosylo' },
    { url: 'https://github.com/APIDT' },
    { url: 'https://github.com/StanislavKviatkovskyi' },
    { url: 'https://github.com/VasyliukAndriy' },
    { url: 'https://github.com/Vasyl-Mokhnatchuk' },
    { url: 'https://github.com/igormilinchuk' },
    { url: 'https://github.com/Vlad-Vasylenko23' },
    { url: 'https://github.com/Dimaa411' },
    { url: 'https://github.com/oleksandraIl' },
    { url: 'https://github.com/savamix2013' },
    { url: 'https://github.com/evgen-romanovych' },
    { url: 'https://github.com/denysiklym' },
    { url: 'https://github.com/AndriiVasyliu' },
    { url: 'https://github.com/S-0ne' },
    { url: 'https://github.com/Olena098' },
    { url: 'https://github.com/OlexandrPartyka' },
    { url: 'https://github.com/slobodianiukdenys' },
    { url: 'https://github.com/NyzhnykVV' },
    { url: 'https://github.com/stefandobrovolskiy' },
    { url: 'https://github.com/vhumeniak' },
    { url: 'https://github.com/vdedeliuk' },
    { url: 'https://github.com/Maria19Sm' },
  ];

  console.log(repositories.length);
  res.render('repositories', { title: 'Student repositories', repositories})
});

module.exports = router;

