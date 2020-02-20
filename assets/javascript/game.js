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



  
  $("#add-train-btn").on("click", function(event) {
  		event.preventDefault();

	
	  var trainName = $("#train-name-input").val().trim();
	  var trainDest = $("#dest-input").val().trim();
	  var firstTrain = $("#firstTrain-input").val().trim();
	  var trainFreq = $("#freq-input").val().trim();

	  
	  var newTrain = {
	  	name: trainName,
	  	destination: trainDest,
	  	start: firstTrain,
	  	frequency: trainFreq
	  };

	  
  		database.ref().push(newTrain);


	 
  		alert("Train added");

	  $("#train-name-input").val("");
	  $("#dest-input").val("");
	  $("#firstTrain-input").val("");
	  $("#freq-input").val("");
  	});

  	
	database.ref().on("child_added", function(childSnapshot, prevChildKey) {

	  console.log(childSnapshot.val());

	  
	  var trainName = childSnapshot.val().name;
	  var trainDest = childSnapshot.val().destination;
	  var firstTrain = childSnapshot.val().start;
	  var trainFreq = childSnapshot.val().frequency;


	   
  		var trainFreq;

  		
   		 var firstTime = 0;

	   var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
	    console.log(firstTimeConverted);

	 
	    var currentTime = moment();
	    console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

		var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
		console.log("DIFFERENCE IN TIME: " + diffTime);

		
	    var tRemainder = diffTime % trainFreq;
	    console.log(tRemainder);

	  
	    var tMinutesTillTrain = trainFreq - tRemainder;
	    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

	   
	    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
	    console.log("ARRIVAL TIME: " + moment(nextTrain).format("HH:mm"));


	  
	  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainFreq +
	   "</td><td>" + moment(nextTrain).format("HH:mm") + "</td><td>" + tMinutesTillTrain + "</td></tr>");
	});

});
