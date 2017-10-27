/*

Your `apiRoutes.js` file should contain two routes:

   * A GET route with the url `/api/friends`. 
   This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`.
    This will be used to handle incoming survey results. 
   This route will also be used to handle the compatibility logic. 

   */

//this file contains the api RESTFUl functions for friends data

// Routes
// =============================================================

// Pull in required dependencies
var path = require('path');

var totalFriends = require("../data/friends.js");


module.exports = function (app){


// Get all friends
app.get("/api/friends", function(req, res) {
  res.json(totalFriends);
});

// Create New Friend - takes in JSON input
app.post("/api/friends", function(req, res) {

  // This works because of our body-parser middleware
  console.log(req.body, "wassupthebody")
  var newFriend = req.body;


  //check to see if a new friend is actually created
  console.log("Added my new Friend " ,newFriend);

  //add the new friend to the beginning friends array
  totalFriends.unshift(newFriend);
  console.log("all bros ", totalFriends);


  function totalDifference(arr1,arr2){
    var sum = 0;
    for(var i =0; i<arr1.length;i++){
      sum = sum + Math.abs(arr1[i] -arr2[i])
    }
    return sum
  }



var match = 10000;
var friendToSetup =totalFriends[0].scores;
var newFriend;
var matchNum;
for(var i = 1; i<totalFriends.length; i++){
  newFriend = totalFriends[i].scores;

  if(totalDifference(friendToSetup,newFriend)< match){
    match = totalDifference(friendToSetup,newFriend);
    //console.log(i);
    matchNum = i;
    console.log(totalFriends[i]);
  }

}
res.json(totalFriends[matchNum]);

});



}//end of module.export function
