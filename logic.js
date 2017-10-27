    $("#submit").on("click", function(event) {
      //prevents the button from refreshing
      event.preventDefault();

      //create a new friend object
      var newFriend = {
      	"name":$("#fullName").val().trim(),
      	"photo":$("#photoLink").val().trim(),
        "scores":[
	        $("#question1").attr("value"),
	        $("#question2").attr("value"),
	        $("#question3").attr("value"),
	        $("#question4").attr("value"),
	        $("#question5").attr("value"),
	        $("#question6").attr("value"),
	        $("#question7").attr("value"),
	        $("#question8").attr("value"),
	        $("#question9").attr("value"),
	        $("#question10").attr("value")
        ]
      };

      // Question: What does this code do??
      $.post("/api/friends", newFriend)
      .done(function(data) {
        console.log(data);
        alert("Adding friend...");
      });
    });
