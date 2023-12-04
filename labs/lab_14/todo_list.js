"use strict";


   //async function to display user
   const displayUser = async () => { 
    
     const domain = "https://jsonplaceholder.typicode.com";
     //fetching the user info
     const userResponse = await fetch(`${domain}/users`);
     //assigning the user info to a const for further user
     const users = await userResponse.json();
     //for loop to add the user name and id to the select menu
     for(let i = 0; i < 10; i++){
      //adding the user id to the option value and the user name to the option
      $("#users").append(`<option value="${users[i].id}">${users[i].name}</option>`);
     }
   
   };  
   //async ready event 
   $(document).ready(async () => {
    //function call
    displayUser();
    //async event handler 
    $("#view_list").click( async () => {
      //domain variable
      const domain = "https://jsonplaceholder.typicode.com";
      //value to hold user ids
     const userId = $("#users").val();
     //api call to fetch the info assocaited with the userid 
     const taskResponse = await fetch(`${domain}/todos/?userId=${userId}`);
     //variable to hold all of the 
     const tasks = await taskResponse.json();
      //clearing out previous entries
      $("#list").empty();
      //appending the titles for the table 
      $("#list").append(`<tr><th>ToDo<th>Completed`);
      //for loop to iterate through the task items 
      for(let i = 0; i<tasks.length; i++ ){
        //appending the list to add the task title and the task completion status 
        $("#list").append(`<tr><td>${tasks[i].title}</td><td>${tasks[i].completed}</td></tr>`);
      }
    
    })
   });


