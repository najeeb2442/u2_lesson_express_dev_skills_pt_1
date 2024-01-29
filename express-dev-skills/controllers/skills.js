const skillModel = require("../models/skill")

const index = (req, res) => {
  let skills = skillModel.getAll()
  let title = "Skill"
  res.render("skills/index", { skills, title })
}

const show = (req, res) => {
  let skills = skillModel.getOne(req.params.id)
  res.render("skills/show", { skills })
}

module.exports = { index, show }
