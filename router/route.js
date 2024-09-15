const express = require('express');
const UserController = require('../controller/Usecontroller');
const router = express.Router();

router.get('/GetData', UserController.GetData);
router.post('/AddData', UserController.AddData);
router.delete('/DeleteData', UserController.DeleteData);

module.exports = router;
