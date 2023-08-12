const CourseController = require('../app/controllers/CourseController');
const express = require('express');
const router = express.Router();

router.get('/data',CourseController.test);

module.exports = router;

