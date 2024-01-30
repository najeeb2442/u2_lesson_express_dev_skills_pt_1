const skills = [
  { id: 125223, name: "HTML", expert: true, description: "tags" },
  { id: 127904, name: "CSS", expert: false, description: "styles" },
  { id: 139608, name: "JavaScript", expert: true, description: "coding stuff" },
]

const getAll = () => {
  return skills
}

const getOne = (id) => {
  let skill = skills.find((skill) => {
    return skill.id === parseInt(id)
  })
  return skill
}
const create = (newSkill) => {
  newSkill.id = Date.now() % 1000000
  newSkill.done = false
  skills.push(newSkill)
}

const deleteSkill = (id) => {
  const deletedIndex = skills.findIndex((skill) => {
    return parseInt(id) === skill.id
  })
  skills.splice(deletedIndex, 1)
}

const editPage = (id) => {
  const skill = skills.find((skill) => {
    return parseInt(id) === skill.id
  })
  return skill
}

const updateSkill = (skill, id) => {
  const oldSkill = skills.find((s) => {
    return parseInt(id) === s.id
  })
  oldSkill.name = skill.name
  oldSkill.description = skill.description
  oldSkill.expert = skill.expert
}

module.exports = { getAll, getOne, create, deleteSkill, updateSkill, editPage }
