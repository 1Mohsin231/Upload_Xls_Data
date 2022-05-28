const express = require('express');
const router = express.Router();

const student = require('../controller/student');


router.post('/',student.stdinsert);
router.get('/',student.getstudents);

module.exports = router;