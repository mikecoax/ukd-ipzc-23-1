var express = require('express');
var router = express.Router();
var sequelize = require('../models/connect.js');
const { parse } = require('dotenv');

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
  const id = parseInt(req.params.id, 10);

  if (!id){
    return res.status(400).json({Message: "id should be number"})
  }

  const rowsDeleted = await sequelize.models.student.destroy({
    where: { id:id }
  });

  return res.json({ rowsDeleted })
})

module.exports = router;