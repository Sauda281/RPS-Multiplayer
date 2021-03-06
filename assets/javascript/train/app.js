$(document).ready(function() {

	// 1. Initialize Firebase
  var config = {
        apiKey: "AIzaSyC8B_URGe2QCCqIUPrH8bRmnwZjKMPWJFw",
        authDomain: "trainscheduler-e141b.firebaseapp.com",
        databaseURL: "https://trainscheduler-e141b.firebaseio.com",
        projectId: "trainscheduler-e141b",
        storageBucket: "trainscheduler-e141b.appspot.com",
        messagingSenderId: "973927129384",
        appId: "1:973927129384:web:db3eca308f4447bf51701d",
        measurementId: "G-DQPP7YP378"
      };

  firebase.initializeApp(config);

  var database = firebase.database();



  // First Time (pushed back 1 year to make sure it comes before current time)

  // 2. Button for adding Trains
  $("#add-train-btn").on("click", function(event) {
  		event.preventDefault();

	 // Grabs user input
	  var trainName = $("#train-name-input").val().trim();
	  var trainDest = $("#dest-input").val().trim();
	  var firstTrain = $("#firstTrain-input").val().trim();
	  var trainFreq = $("#freq-input").val().trim();

	  // Creates local "temporary" object for holding train data
	  var newTrain = {
	  	name: trainName,
	  	destination: trainDest,
	  	start: firstTrain,
	  	frequency: trainFreq
	  };

	  // Uploads train data to the database
  		database.ref().push(newTrain);


	   // Alert
  		alert("Train successfully added");

	 // Clears all of the text-boxes
	  $("#train-name-input").val("");
	  $("#dest-input").val("");
	  $("#firstTrain-input").val("");
	  $("#freq-input").val("");
  	});

  	// 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
	database.ref().on("child_added", function(childSnapshot, prevChildKey) {

	  console.log(childSnapshot.val());

	  // Store everything into a variable.
	  var trainName = childSnapshot.val().name;
	  var trainDest = childSnapshot.val().destination;
	  var firstTrain = childSnapshot.val().start;
	  var trainFreq = childSnapshot.val().frequency;


	   // Declare variable
  		var trainFreq;

  		// Time is to be entered on the entry form
   		 var firstTime = 0;

	   var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
	    console.log(firstTimeConverted);

	  // Current Time
	    var currentTime = moment();
	    console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

	  // Difference between the times
		var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
		console.log("DIFFERENCE IN TIME: " + diffTime);

		// Time apart (remainder)
	    var tRemainder = diffTime % trainFreq;
	    console.log(tRemainder);

	    // Minute Until Train
	    var tMinutesTillTrain = trainFreq - tRemainder;
	    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

	    // Next Train
	    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
	    console.log("ARRIVAL TIME: " + moment(nextTrain).format("HH:mm"));


	  // Add each train's data into the table
	  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainFreq +
	   "</td><td>" + moment(nextTrain).format("HH:mm") + "</td><td>" + tMinutesTillTrain + "</td></tr>");
	});

});
