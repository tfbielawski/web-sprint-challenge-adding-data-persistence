const db = require("../../data/dbConfig");

async function findTask(task) {
    const id = await db("tasks").insert(task);
    const foundTask = {
        task_id: id,
        task_description: task.task_description,
        task_notes: task.task_notes,
        task_completed: task.task_completed,
        project_id: task.project_id
    }
    return foundTask;
}

async function postTask() {
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

    const tasks = [];
    results.forEach((task) => {
        tasks.push({
            task_id: task.task_id,
            task_description: task.task_description,
            task_notes: task.task_notes,
            task_completed: Boolean(task.task_completed),
            project_name: task.project_name,
            project_description: task.project_description,
        });
    });

    return tasks;
}

module.exports = {  findTask, postTask,};
