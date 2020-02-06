$(document).ready(function(){
    var userScore= 0;
    var computerScore=0;
    var userScore = $("#user-score");
    var computerScore = $("#computer-score");
    var scoreBoard
    // $(scoreBoard).querySelector(".score-board");
    // $(result).querySelector(".result");
    // var rock = $("r");
    // var paper = $("p");
    // var scissors = $("s");

})

   function getComputerChoice() {
       var choices =['r','p','s'];
       var randomNumb = Math.floor(Math.random() * 3);
       return choices[randomNumb];

   }
   
   function game(userChoice) {
       var ComputerChoice = getComputerChoice();
       console.log(ComputerChoice);
   }

   function main() {
    rock.addEventListerner('click',function() {
        game("r");
    })

    paper.addEventListerner('click',function() {
        game("p");
    })

    scissors.addEventListerner('click',function() {
        game("s");
    })






