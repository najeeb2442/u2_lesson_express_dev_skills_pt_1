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

module.exports = { getAll, getOne }
