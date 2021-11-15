# Oversight
A game where you play as a stationary watchtower who must guess its way in searching for the troublemaker down below. Look at the hint to succeed and prevent the enemy from destroying you.

## Game Design:
1. There would be divs, one would be the Watchtower at the upper side of the screen and the areas at the lower side of the screen.
2. The areas will be divided into 15 individual blocks that are clickable.
3. The computer will randomly select one of the fifteen to be the area where it chooses to hide the troublemaker.
4. Many event listeners will be placed seeing if the Watchtower selected the right location as to where the troublemaker is hiding.
5. If the troublemaker is found, the Watchtower wins, if the troublemaker is not found in three tries, a new hint will display where the troublemaker is not located in.
6. The two areas he possible is located in will glow red.
7. After two shots with no success, the last hint shows what area the troublemaker is in, said area will be the only one to glow red.
8. If the Watchtower fails to find the troublemaker with the last shot, then it loses.

## Tasks:
1. Create the HTML depicting the board.
2. Create EventListeners for clicks for each of the 15 blocks.
3. Create the game loop process detailing how it plays out above.
4. Decorate it with as much appealing aesthetic additions in CSS and sound addition in JavaScript.
5. Iron out the last remaining potential bugs and exploits.
6. Make the code as DRY as possible.

## Aesthetic and Theme:
The game has a very surveillance theme to it combined with a Real Time Strategy sense of control. I grew up playing strategy games and I love the overpowering aura it gives the player in controlling units and destroying enemies. There is only one unit to control in this game, and one enemy to destroy however. The colors and atmosphere of the game mimics the style of many past RTS games.

## Completion:
The game is complete when it satisfies a decent gameplay loop and has a reasonably complicated and desirable aesthetic spirit for a mere front end language game containing no professional art asset development theme. I sincerely strive to create an art piece of a game with what simple resources I have.
