// Friends(DATA)
//How many of us have them
// =============================================================

var friends = [
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
},
{
  "name":"Bob",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      1,
      2,
      3,
      3,
      2,
      1,
      2,
      2,
      4,
      2
    ]
},
{
  "name":"Sally",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      6,
      3,
      3,
      3,
      3,
      6,
      4,
      5,
      4,
      4
    ]
},
{
  "name":"Peter",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      3,
      2,
      3,
      2,
      1,
      2,
      3,
      1,
      2,
      3
    ]
},
{
  "name":"Tony",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      4,
      2,
      2,
      3,
      3,
      4,
      2,
      2,
      1,
      1
    ]
}
  
];


 var totalFriends = friends;



function totalDifference(arr1,arr2){
  var sum = 0;
  for(var i =0; i<arr1.length;i++){
    sum = sum + Math.abs(arr1[i] -arr2[i])
  }
  return sum
}

var myDiff = totalDifference(totalFriends[0].scores,totalFriends[1].scores);
var myDiff1 = totalDifference(totalFriends[0].scores,totalFriends[2].scores);
//console.log(myDiff);
//console.log(myDiff1);


var match = 10000;
var friendToSetup =totalFriends[0].scores;
var newFriend;
for(var i = 1; i<totalFriends.length; i++){
  //console.log("working")
  newFriend = totalFriends[i].scores;

  //console.log(totalDifference(friendToSetup,newFriend));
  if(totalDifference(friendToSetup,newFriend)< match){
    //console.log("matching a friend")
    match = totalDifference(friendToSetup,newFriend);
    //console.log(match);
     console.log(i);
  }

}


module.exports = friends;