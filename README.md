<!-- @format -->

# Tic-Tac-Toe
## Description:
Tic Tac Toe Game
This is a simple Tic Tac Toe game built with ReactJS. It allows two players to play on the same computer, with X and O as the symbols used to mark the squares. The game displays the current player and notifies the winner once the game is over.

## Code decsription:
This code is a JavaScript and React implementation of a simple Tic-Tac-Toe game. It consists of the following components:

Board Component: This component represents the game board. It maintains the game state, including the current player and the status of the game (e.g., whether someone has won). It allows players to take turns and displays the game status and a restart button.

Square Component: This component represents each square on the Tic-Tac-Toe board. It handles the user's interaction with the square, updating it with an "X" or "O" when a player clicks on it.

Winning Combinations: The win array defines the winning combinations for the game.

Game Logic: The checkForWinner function checks if there is a winner based on the current game state.

Here's a summary of the code's main functionality:

It initializes the game board, allowing two players to take turns.
It tracks the game's state, including each player's moves.
It checks for a winner based on the game state and displays the result.
It provides a restart button to reset the game.
The isSuperset function is used to check if one set is a superset of another, which is utilized to determine winning combinations. When a player wins, the game displays which player (X or O) has won.

The code is organized into React functional components and uses React hooks to manage state and side effects.

One important modification is that the restart function now uses location.reload() to perform a hard reset of the game, essentially reloading the entire page to start a new game.

Overall, this code implements a basic Tic-Tac-Toe game with features for tracking the winner and resetting the game when needed.

How to Play
To play the game, simply click on an empty square to fill it with your symbol. The first player to get three symbols in a row (horizontally, vertically, or diagonally) wins the game. If all squares are filled and there is no winner, the game is a tie.

##Projected features to be implemented:

- 1- Restart button to allow starting new round of the game.
- 2- keep log of the winners with count of winning games.
  How Implementation of those features:
- 1: the start button with a handler function to reset the Game components and children components
- 2: a state of counter and array to store player winning logs.


## Contributing
Contributions are welcome! If you find a bug or would like to add a new feature, feel free to open an issue or submit a pull request.
