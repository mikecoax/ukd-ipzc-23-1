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