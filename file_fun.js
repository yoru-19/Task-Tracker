import fs from "fs";

const saveData = (description) => {
  fs.readFile("tasks.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    // Parse the existing data
    let tasks = [];
    try {
      tasks = JSON.parse(data);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      return;
    }
    //get last task id
    var lastId = tasks[tasks.length - 1].id;
    //create a new task
    const newTask = {
      id: ++lastId,
      description: description,
      status: "todo",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    // Add the new task to the array
    tasks.push(newTask);

    // Convert the updated array back to JSON and write to the file
    const updatedContent = JSON.stringify(tasks, null, 2);
    fs.writeFile("tasks.json", updatedContent, (writeError) => {
      if (writeError) {
        console.error("Error writing to the file:", writeError);
        return;
      }
      console.log("New task saved successfully!");
    });
  });
};

const updateDescription = (id, description) => {
  fs.readFile("tasks.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    // Parse the existing data
    let tasks = [];
    try {
      tasks = JSON.parse(data);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      return;
    }
    //search by id
    tasks.forEach((element) => {
      if (element.id == id) {
        //update description, and time
        element.description = description;
        element.updatedAt = new Date().toISOString();
        console.log(
          element.id + "\t" + element.description + "\t\t" + element.status
        );
      }
    });

    // Convert the updated array back to JSON and write to the file
    const updatedContent = JSON.stringify(tasks, null, 2);
    fs.writeFile("tasks.json", updatedContent, (writeError) => {
      if (writeError) {
        console.error("Error writing to the file:", writeError);
        return;
      }
    });
  });
};

const updateStatus = (id, status) => {
  fs.readFile("tasks.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    // Parse the existing data
    let tasks = [];
    try {
      tasks = JSON.parse(data);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      return;
    }
    //search by id
    tasks.forEach((element) => {
      if (element.id == id) {
        //update status, and time
        element.status = status;
        element.updatedAt = new Date().toISOString();
        console.log(
          element.id + "\t" + element.description + "\t\t" + element.status
        );
      }
    });

    // Convert the updated array back to JSON and write to the file
    const updatedContent = JSON.stringify(tasks, null, 2);
    fs.writeFile("tasks.json", updatedContent, (writeError) => {
      if (writeError) {
        console.error("Error writing to the file:", writeError);
        return;
      }
    });
  });
};

const getData = (status) => {
  fs.readFile("tasks.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    // Parse the existing data
    let tasks = [];
    try {
      tasks = JSON.parse(data);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      return;
    }
    if (status == "all") {
      //get all tasks
      tasks.forEach((element) => {
        console.log(
          element.id + "\t" + element.description + "\t\t" + element.status
        );
      });
    } else {
      //get taks by status
      tasks.forEach((element) => {
        if (element.status == status) {
          console.log(
            element.id + "\t" + element.description + "\t\t" + element.status
          );
        }
      });
    }
  });
};

const deleteData = (id) => {
  fs.readFile("tasks.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    // Parse the existing data
    let tasks = [];
    try {
      tasks = JSON.parse(data);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      return;
    }
    //search by id
    tasks.forEach((element, index) => {
      if (element.id == id) {
        //delete task
        tasks.splice(index, 1);
      }
    });

    // Convert the updated array back to JSON and write to the file
    const updatedContent = JSON.stringify(tasks, null, 2);
    fs.writeFile("tasks.json", updatedContent, (writeError) => {
      if (writeError) {
        console.error("Error writing to the file:", writeError);
        return;
      }
      console.log("Task delted successfully!");
    });
  });
};
export { saveData, updateDescription, updateStatus, getData, deleteData };
