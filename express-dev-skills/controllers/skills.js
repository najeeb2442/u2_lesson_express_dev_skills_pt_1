const skillModel = require("../models/skill")

const index = (req, res) => {
  let skills = skillModel.getAll()
  let title = "Skill"
  res.render("skills/index", { skills, title })
}

const show = (req, res) => {
  let skill = skillModel.getOne(req.params.id)
  res.render("skills/show", { skill })
}
const newSkill = (req, res) => {
  res.render("skills/new")
}

const create = (req, res) => {
  skillModel.create(req.body)
  res.redirect("/skills")
}

const deleteSkill = (req, res) => {
  skillModel.deleteSkill(req.params.id)
  res.redirect("/skills")
}

const editPage = (req, res) => {
  const skill = skillModel.editPage(req.params.id)
  res.render("skills/edit", { skill })
}

const updateSkill = (req, res) => {
  skillModel.updateSkill(req.body, req.params.id)
  res.redirect("/skills")
}

module.exports = {
  index,
  show,
  newSkill,
  create,
  deleteSkill,
  editPage,
  updateSkill,
}
