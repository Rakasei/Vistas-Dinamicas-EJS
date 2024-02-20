const express = require("express");
const router = express.Router();
const mainController = require("../controllers/index")



router.get('/', mainController.main),
router.get('/home', mainController.main),
router.get('/menu/:id', mainController.getMenu)



module.exports = router