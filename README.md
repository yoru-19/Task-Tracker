"# Task-Tracker" 
Sample soulutions for the https://roadmap.sh/projects/task-tracker challenge from roadmap.sh
CLI Task Tracker is a command-line interface application designed to help you manage your tasks efficiently. With this tool, you can easily add new tasks, update existing ones, delete tasks, and view tasks by their status (such as todo, in-progress, or done). It stores all tasks in a JSON file, allowing for quick access and management right from your terminal. Simplify your task management with an intuitive and straightforward CLI experience!

Features
-Add Tasks: Create a new task with a description.
-Update Tasks: Modify the description or status.
-List Tasks: View tasks by status or list all tasks.
-Delete Tasks: Remove tasks by ID.


#Usage
-Start:
   node app.js
-Commands:
.Add Task: add "task description"
.Update Description: update id "new description"
.Delete Task: delete id
.List Tasks: list [ |todo|in-progress|done]
.Mark In-Progress: mark-in-progress id
.Mark Done: mark-done id
.Exit: exit