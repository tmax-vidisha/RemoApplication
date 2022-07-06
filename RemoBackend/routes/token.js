const express = require("express");
const router = express.Router();
const {getToken,createToken,getFolderData} = require('../controllers/token')

router.route('/').get(getToken).post(createToken)


router.route('/folder').post(getFolderData)
router.route('/folder/:token').patch(getFolderData)

// router.route('/folder').post(getFolderData)
// router.route('/recent').get(createRequset);
// router.route('/ssss').get(sendData)

//  router.route('/folder').get(getFolderData)

module.exports = router