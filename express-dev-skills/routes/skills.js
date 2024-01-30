var express = require("express")
var router = express.Router()
const skillsController = require("../controllers/skills")

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource")
// })

router.get("/", skillsController.index)

router.get("/new", skillsController.newSkill)
router.post("/new", skillsController.create)

router.delete("/:id", skillsController.deleteSkill)
//edit
router.get("/:id/edit", skillsController.editPage)
router.put("/:id", skillsController.updateSkill)

router.get("/:id", skillsController.show)

module.exports = router
