    // score 
    //     wins 
    //     loses 

    //Score 

    var wins = 0;
    var losses = 0;
    
    // Game play limit and counter
    //     guesses left 
    //     guesses made 
    
    var guesses = 9;
    var userArray = [];


    // Game
    //     computer guess

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


    var compChoice = letters[Math.round(Math.random() * letters.length)]
    console.log(compChoice);


    //     Check if user input = computer guess
    //     +1 to win or loses
    //     -1 to guesses, if guesses equal zero display game over
    //     display guesses 

    
    

    document.addEventListener('keydown', function (event) {
        if (event.key === compChoice) {
        wins++;
        userArray.push("~~~WINNER!!!~~~");
        guesses = 9;
        compChoice = letters[Math.round(Math.random() * letters.length)];
        console.log(compChoice);
        } else {
        guesses--;
        }
        
        if (guesses === 0){
        losses++, 
        guesses = 9;
        userArray = [];
        compChoice = letters[Math.round(Math.random() * letters.length)];       
        console.log(compChoice);
        }
   

        userArray.push(event.key); 
        console.log(event);
            
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("losses").innerHTML = "losses: " + losses;
        document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
        document.getElementById("lettersGuessed").innerHTML = userArray;
    })
