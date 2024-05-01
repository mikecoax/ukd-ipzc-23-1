var express = require('express');
var router = express.Router();
var sequelize = require('../models/connect.js');


route.get('/contacts', async (req, res) => {
    try {
        const students = await sequelize.models.student.findAll()
        res.json(students);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

route.get('/contacts/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const students = await User.findByPk(id);
        if (!students) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.json(students);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

route.post('/students', async (req, res) => {
    try {
        const { lastname, firstname, githubUrl  } = req.body;
        const newStudent = await User.create({ lastname, firstname, githubUrl });
        res.status(201).json(newStudent);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

route.delete('/students/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const students = await User.findByPk(id);
        if (!students) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        await students.destroy();
        res.sendStatus(204);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

route.patch('/students/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const students = await User.findByPk(id);
        if (!students) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        await contact.update(req.body);
        res.json(students);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
