//require express
//require prompt

//set up simple express server

//make a function (class) that returns/console.logs a matrix/the board

//use prompt to take in user inputs
  //the players switch each turn
    //use a turn counter or turn boolean

//the prompts callback returns a new board with the players input passed in,
//and then fires off another prompt function for the next player to respond to

//end game cases:
  //someone makes three in a row
    //check for three in a row at each turn
    //break match checking into its one function, invoke it at end of
    //each turn
      //return a win message, check the turn value to see which player won
  //the board is full, tie game
    //check if the matrix no longer contains unchanged values
      //return a tie message

    //make a play again prompt?