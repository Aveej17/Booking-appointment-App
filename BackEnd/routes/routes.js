const express = require('express');
const router = express.Router();

const Controller = require('../controllers/controller'); 

router.get('/', Controller.getUsers);
router.delete('/:id', Controller.deleteUsers);
router.post('/', Controller.postUsers);

module.exports= router;