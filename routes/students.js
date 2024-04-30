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

router.patch('/:id', async function(req, res) {

  const id = parseInt(req.params.id, 10);

  if (!id){
    return res.status(400).json({Message: "id should be number 1 "})
  }

  const student = await sequelize.models.student.findOne({
    where: {
      id:id 
    }
  })
  
  if (!student) {
    return res.status(400).json({Message: "student not found"})
  }

  const {
    firstName, lastName, URLfromGitHub
  } = req.body

  student.lastName = lastName?.trim() || student.lastName;
  student.firstName = firstName?.trim() || student.firstName

  if (URLfromGitHub) {
    student.URLfromGitHub = URLfromGitHub
  }

  const updatedStudent = await student.save({ returning: true })

  return res.json(updatedStudent);
})

module.exports = router;