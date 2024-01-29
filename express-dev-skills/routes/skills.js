var express = require("express")
var router = express.Router()
const skillsController = require("../controllers/skills")

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource")
// })

router.get("/", skillsController.index)

router.get("/:id", skillsController.show)

module.exports = router
