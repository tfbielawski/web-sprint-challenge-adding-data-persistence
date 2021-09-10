const db = require("../../data/dbConfig");

async function postResource(resource) {
  const [id] = await db("resources").insert(resource);
  const newResource = {
    resource_id: id,
    resource_name: resource.resource_name,
    resource_description: resource.resource_description,
  };
  return newResource;
}

async function findResources() {
  return await db("resources");
}

module.exports = { findResources, postResource,};
