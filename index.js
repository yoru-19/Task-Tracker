#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquerier from "inquirer";
import {
  saveData,
  updateDescription,
  updateStatus,
  getData,
  deleteData,
} from "./file_fun.js";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function Welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    "WELCOME TO MY FIRST CLI PROJECT!\n"
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
        ${chalk.bold(
          "HERE IS WHERE WE CREATE TASK BARS, EDIT, AND DELETE THEM!"
        )}
        `);
}

async function getTask() {
  const answers = await inquerier.prompt({
    name: "discription",
    type: "input",
    message: "#",
  });
  //get the action
  const action = answers.discription.split(" ")[0];

  if (action == "add" || action == "update" || action == "delete") {
    if (action == "add") {
      //get the description
      const description = answers.discription.split('"')[1];
      //insert new task
      saveData(description);
    } else if (action == "update") {
      //get id, and description
      const id = answers.discription.split(" ")[1];
      const desc = answers.discription.split('"')[1];
      // console.log(id + " " + desc);
      updateDescription(id, desc);
    } else if (action == "delete") {
      //get id
      const id = answers.discription.split(" ")[1];
      
      deleteData(id);
    }
  } else if (action == "list") {
    //get status
    const status = answers.discription.split(" ")[1];

    if (!status) {
      //if its null get all tasks
      getData("all");
    } else if (status == "done") {
      //get tasks that are done
      getData(status);
    } else if (status == "todo") {
      //get tasks that are todo
      getData(status);
    } else if (status == "in-progress") {
      //get tasks that are in-progress
      getData(status);
    }
  } else if (action == "mark-in-progress") {
    //get status, and id
    const status = answers.discription.split(" ")[0];
    const id = answers.discription.split(" ")[1];

    updateStatus(id, "in-progress");
  } else if (action == "mark-done") {
    //get status, and id
    const status = answers.discription.split(" ")[0];
    const id = answers.discription.split(" ")[1];

    updateStatus(id, "done");
  } else {
    console.log("WRONG SYNTAX!");
  }
}
// await Welcome();
while (true) {
  await getTask();
}
