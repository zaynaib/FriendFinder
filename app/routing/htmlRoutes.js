//https://scotch.io/tutorials/keeping-api-routing-clean-using-express-routers
//http://jilles.me/express-routing-the-beginners-guide/

//this file contains the views (html pages) routes

//reqiure the path library
var path = require("path");

//export this function
module.exports = function(app){

// Basic route that sends the user to the homepage
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

// Basic route that sends the user the survey page to the AJAX Page
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

//Wildcard route, if the user puts a route thats not avalible then
//redirect them to home
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});



}//end of anonymous function 