const express = require('express')
const pageController = require("../controllers/pageController")

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/courses').get(pageController.getCoursesPage);
module.exports = router; 