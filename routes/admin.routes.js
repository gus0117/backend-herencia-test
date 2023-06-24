const express = require('express');
const router = express.Router();

const adminCtrl = require('../controllers/admin.controller');

router.get('/', adminCtrl.getAdmins);
router.post('/', adminCtrl.createAdmin);

module.exports = router;