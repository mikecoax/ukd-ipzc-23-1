var express = require('express');
var router = express.Router();
var sequelize = require('../models/connect.js')

router.get('/', async function(req, res, next) {
  const students = await sequelize.models.student.findAll()
  res.json({ students });
});

router.post('/', async function(req, res, next) {

  const {
    firstName, lastName, URLfromGitHub
  } = req.body

  await sequelize.models.student.create({
    firstName,
    lastName,
    githubUrl: URLfromGitHub
  })

  return res.json({firstName, lastName, URLfromGitHub})
})

router.delete('/:id', async function(req, res, next){
  console.log(req.params)
  res.status(204).end()
})

module.exports = router;