const express = require('express')
const router = express.Router();
const {checkedDrugs} = require("../controllers/FetchDrugsController")

router.route('/').get(checkedDrugs);




module.exports = router;