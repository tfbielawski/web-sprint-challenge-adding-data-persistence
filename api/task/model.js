// build your `Task` model here
const db = require("../../data/dbConfig");

async function postTask(task) {
    const [id] = await db("tasks").insert(task);
    const newTask = {
        task_id: id,
        task_description: task.task_description,
        task_notes: task.task_notes,
        task_completed: task.task_completed,
        project_id: task.project_id,
    };
    return newTask;
}

async function findTasks() {
    const results = await db("tasks as t")
        .leftJoin("projects as p", "p.project_id", "t.project_id")
        .select(
            "t.task_id",
            "t.task_description",
            "t.task_notes",
            "t.task_completed",
            "p.project_name",
            "p.project_description"
        );

    const tasksArray = [];
    results.forEach((task) => {
        tasksArray.push({
            task_id: task.task_id,
            task_description: task.task_description,
            task_notes: task.task_notes,
            task_completed: Boolean(task.task_completed),
            project_name: task.project_name,
            project_description: task.project_description,
        });
    });

    return tasksArray;
}

module.exports = { findTasks, postTask,};