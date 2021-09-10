const db = require("../../data/dbConfig");

async function findProjects() {
  const projectsRes = await db("projects");
  const projectsMapped = projectsRes.map((proj) => {
    return {
      project_name: proj.project_name,
      project_description: proj.project_description,
      project_completed: proj.project_completed != 1 ? false : true,
    };
  });

  return projectsMapped;
}

async function postProjects(project) {
  const id = await db("projects").insert(project);
  const thisProject = {
    project_id: id,
    project_name: project.project_name,
    project_description: project.project_description,
    project_completed: project.project_completed != 1 ? false : true,
  };
  return thisProject;
}

module.exports = { findProjects, postProjects,};