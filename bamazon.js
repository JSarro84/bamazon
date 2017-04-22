
//MySQL NPM package
var mysql      = require('mysql');

//connection to MySQL database
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bamazon'
});

connection.connect();
//this function grabs data from database 
connection.query('SELECT * FROM products', function (error, results, fields) {
  if (error) throw error;
  //a for loop that cycles through the returned data and logs ID, name, and price
  for (i = 0; i < results.length; i++) {
    console.log(results[i].id, results[i].product_name, results[i].price);
}
});

//Inquirer NPM package
var inquirer = require("inquirer");
// Create a "Prompt" with a series of questions.
inquirer.prompt([
  {
    type: "input",
    message: "What is the ID number of the product you want to buy?" + "\n",
    name: "ID"
  },

  {
    type: "input",
    message: "How many units do you want to buy?",
    name: "units"
  },

  {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true

  }
//after the questions we store all of the answers into a "user" object.
]).then(function(user) {

  // If we log that user as a JSON, we can see how it looks.
  console.log(JSON.stringify(user, null, 2));

  // If the user confirms purchase transaction, we use the item's ID to find it's location in the database.
  if (user.confirm) {

    connection.query('SELECT * FROM products WHERE id =' + user.ID, function (error, results, fields) {
      if (error) console.log(error.code);

      //if statement checks to see if we have enough product in stock to complete request
      if (results[0].stock_quantity > user.units) {
        //if we have enough product we subtract the amount requested from amount in database
        newQuantity = results[0].stock_quantity - user.units
        connection.query('UPDATE products SET stock_quantity=' + newQuantity + ' WHERE id = ' + user.ID)
        console.log(results[0].price);

        //this prompt confirms transaction.
       console.log("==============================================");
       console.log("");
       console.log("Congrats, you just bought " + user.units + " units of item number "+ user.ID);
       console.log("");
       console.log("That's " + results[0].price + " dollars worth of " + results[0].product_name);
       console.log("");
       console.log("===============================================");
      }
      else {
        console.log("==============================================");
        console.log("");
        console.log("Insufficient quantity!, There's only " + results[0].stock_quantity + " units available.");
        console.log("");
        console.log("==============================================");
      }
    });
  }
  // If the user does not confirm, then a message is provided and the program quits.
  else {
        console.log("==============================================");
        console.log("");
        console.log("It looks like you've changed your mind about making a purchase.");
        console.log("");
        console.log("Please come again.");
        console.log("");
        console.log("==============================================");
  }
});