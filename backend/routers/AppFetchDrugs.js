const express = require('express')
const router = express.Router();
const {checkedDrugs, sendDrugs , sendQRCode, blobImage, getAllContent} = require("../controllers/FetchDrugsController")

router.route('/').get(checkedDrugs);
router.route('/savemeds').post(sendDrugs);
router.route('/saveqrcode').post(sendQRCode);
router.route('/getBlob').post(blobImage);
router.route('/getAll').post(getAllContent);


module.exports = router;