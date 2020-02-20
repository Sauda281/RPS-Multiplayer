$(document).ready(function(){
    
    var firebaseConfig = {
        apiKey: "AIzaSyBAMYUPYMo_iYIrVVl2VCQ429PSjqBXR9M",
        authDomain: "r-p-s-multiplayer-3c3af.firebaseapp.com",
        databaseURL: "https://r-p-s-multiplayer-3c3af.firebaseio.com",
        projectId: "r-p-s-multiplayer-3c3af",
        storageBucket: "r-p-s-multiplayer-3c3af.appspot.com",
        messagingSenderId: "745989261719",
        appId: "1:745989261719:web:6a1884590c0f895fe21cd2"
      };
    firebase.initializeApp(config);
    var database = firebase.database()
    var userScore= 0;
    var computerScore=0;
    var userScore = $("#user-score");
    var computerScore = $("#computer-score");
    var scoreBoard = $(".score-board");
    var result = $(".result");
    var rock = $("#rock");
    var paper = $("#paper");
    var scissors = $("#scissors");
    var choices =$(".choices");
    var userChoice ="";
    var computerChoice ="";



    
    
    function getComputerChoice(){
        var choices=['rock','paper','scissors'];
        // var randomNumber =$(Math.floor(Math.random()*3));
        // return choices[randomNumber]
    }
     getComputerChoice();
    
     function game(userChoice){
     var computerChoice = $('getcomputerChoice');
    }
    
    $("#rock").on('click',function(){
       console.log("you clicked on rock!")
       
  })

    $("#paper").on('click',function(){
      console.log("you clicked on paper!")
           })
        
           $("#scissors").on('click',function(){
            game("s");
               })

              //  $(".result").text(Math.floor(Math.random()* 3) > 1);

              //  $("#user").on('click',function(){
              //   console.log("hello!")
              //  })
               if(userChoice== 'rock'){
               }
                if(computerChoice=='rock'){
                   "draw";
                }
                   else{

                   computerChoice =="paper"
                     "you lose";
                  }

                  $("#computer").on('click',function(){
                    
                  })
                  database.ref(choices).orderByChild("dateAdded").limitToLast().on("child_added", function(snapshot){
                    $("scoreBoard").prepend("<P>"+ snapshot.val().score+"</p>");
                    $("").remove()
                  });
                });
          