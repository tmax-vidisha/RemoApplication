const express = require("express");
const router = express.Router();
const {getAllSites,getDrivesofSubSites,getsubItemsroot,getsubItemsId} = require('../controllers/workspace')

router.route('/subSites/:token').get(getAllSites)
router.route('/subSites/drives').post(getDrivesofSubSites)
router.route('/subSites/drives/root').post(getsubItemsroot)
router.route('/subSites/drives/items/id').post(getsubItemsId)
module.exports = router