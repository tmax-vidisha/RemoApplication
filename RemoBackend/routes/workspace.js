const express = require("express");
const router = express.Router();
const {getAllSites} = require('../controllers/workspace')

router.route('/subSites').post(getAllSites)



module.exports = router