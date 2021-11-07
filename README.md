# Oversight
A game where you play as a watch tower who must guess its way in searching for troublemakers down below. Search for hints to succeed and prevent them from attacking you.

Game Loop:
1. There are two players or a player and an AI. Player 1 is the Watch Tower, Player 2 (which can be an AI) is the troublemaker.
2. Player 2 selects which of a set of pre-clickable locations that he is hiding.
3. Upon selection by Plyaer 2, a statement is given in the screen that hints to where Player 2 is hiding for Player 1 to find them.
4. Player 1 guesses where Player 2 is hiding, if he is found, Player 1 wins, if he is not found, Player 1 has two more chances.
5. Player 2 can choose to move to a new location, but he cannot hide in the previous location that Player 1 picked in the last turn.
6. If Player 1 runs out of chances before finding Player 2, Player 2 wins.
