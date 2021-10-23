let todoList = [];
const commandList = ["new", "list", "delete", "quit"];
let response = prompt(
  "Welcome! This is your Todo List!\nCommands: new, list, delete, quit"
).toLowerCase();

// get a valid entry
while (!commandList.includes(response)) {
  response = prompt(
    "Invalid entry.\nPlease enter one the following commands: new, list, delete, quit"
  ).toLowerCase();
}

// run the program as long as user doesn't enter : quit

while (response !== "quit") {
  if (response === "new") {
    let itemToAdd = prompt("Enter item to add to todo list.");
    if (itemToAdd === "") {
        response = prompt("Invalid Entry. Try another command: new, list, delete, quit")
    } else {
      todoList.push(itemToAdd);
      console.log(`${itemToAdd} added to the list`);
      response = prompt("Try another command: new, list, delete, quit");
    }

  } else if (response === "list") {
    if (todoList.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      console.log("**********Todo List**********");
      for (let i = 0; i < todoList.length; i++) {
        console.log(`${i}: ${todoList[i]}`);
      }
      console.log("******************************");
    }
    response = prompt("Try another command: new, list, delete, quit");
  } else if (response === "delete") {
    if (todoList.length === 0) {
      console.log("Your todo list is empty. Nothing to delete.");
    } else {
      //place all the index values in an array
      let validIndexList = [];
      for (let i = 0; i < todoList.length; i++) {
        validIndexList.push(i);
      }

      response = prompt("Please enter the valid index of the item to delete'");

      //validate the index entry
      while (!validIndexList.includes(response)) {
        response = parseInt(prompt("Ivalid index entry. Try again!"));
      }

      let indexTodelete = response;
      todoList.splice(indexTodelete, 1);
      console.log("Entry deleted.");
    }

    response = prompt("Try another command: new, list, delete, quit");
  }

  // get a valid entry
  while (!commandList.includes(response)) {
    response = prompt(
      "Invalid entry.\nPlease enter one the following commands: new, list, delete, quit"
    ).toLowerCase();
  }
}

alert("You have exited your Todo List.");
