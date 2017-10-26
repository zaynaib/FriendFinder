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
}
  
];


 var user1 =[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
 var user2 = [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
 var user3 = [5,3,6,9,10,8,1,3,9,2]

 var totalFriends =[user1,user2,user3];
 //console.log(totalFriends);
 //console.log(totalFriends[0]);



function totalDifference(arr1,arr2){
  var sum = 0;
  for(var i =0; i<arr1.length;i++){
    sum = sum + Math.abs(arr1[i] -arr2[i])
  }
  return sum
}


var match = 10000;
for(var i = 1; i<totalFriends.length; i++){
  if(totalDifference(totalFriends[0],totalFriends[i])< match){
     match = totalDifference(totalFriends[0],totalFriends[i]);
     console.log(match);
  }
}

//console.log(totalDifference(user1,user2));
//console.log(totalDifference(user1,user3));
module.exports = friends;