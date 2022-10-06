Avengers Infinity War Mancala

1.  RENDER BOARD:  Game will render a board and declare player One's turn (Avengers)
 1.1.  Board will have 2 rows (arrays) of 6 planets (divs) that will hold 4 stones (more divs) to start -- ARRAYS and DIVS
  1.1.2.  When hovering over the board spot, a number will pop up shwoing number of stones -- EVENT HANDLER
 1.2.  Board will have an Avengers collection div on the right side of board -- ARRAY and DIV
 1.3.  Board will have a Thanos collection div on the left side of board  -- ARRAY and DIV
 1.4.  Board will render a gif on the side of the players collection to signify each players turn  -- DIV and CSS
  1.4.1. Make original gif just of the Avengers "assembling" -- DIV and CSS
  1.4.2. Make original gif of Thanos landing -- DIV and CSS
 1.5.  Board will render an 'action' gif of an Avenger fighting Thanos in the direct middle of the board  -- UPDATE DIV, CSS after EVENT HANDLER
  1.5.1. After the Avengers' first turn, cycle through gifs of the different avengers fighting Thanos and load Thanos gif for turn  -- UPDATE DIV, CSS after EVENT HANDLER
  1.5.2. After Thano's first turn, cycle through gifs of Thanos fighting an Avenger and cycle through Avenger gif  --  UPDATE DIV, CSS after EVENT HANDLER
 1.6.  Lower corner of board will have a ? mark div that when clicked displays a brief instruction on game rules  --  DIV, CSS, and EVENT HANDLER
 1.7.  A soundtrack will play in background at loading, but will be able to be turned off via a button next to the ? instructions button  -- 
2.  GAMEPLAY:  Avengers will click on a planet to start distributing their stones counter-clockwise  --  UPDATE EACH DIV ARRAY IN JS, CSS
 2.1.  If Avengers land in right side Avengers collection, Avengers go again  -- CONDITIONAL TO UPDATE THE ARRAYS AND LEAVE THE TURN VALUE
 2.2.  If Avengers go past Avengers collection, start to drop stones into Thanos planets  -- CHANGE UPDATE OF ARRAYS TO THANOS PLANETS
 2.3.  2 Conditionals for end of Avengers turn  --  NEED CONDITIONAL TO DETERMINE SWITCH OF TURNS  
  2.3.1.  When amount of stones reaches zero, switch turn to Thanos  --  COUNT DOWN IN ARRAY AND UPDATE TURN VALUE
  2.3.2.  2 Conditionsl for Avengers last stone ending in empty planet on Avenger's side  -- CONDITIONAL AND ARRAY AND CSS UPDATES
    2.3.2.1.  If Thanos has stones in the same planet on Thano's side, Avengers take the one stone on Avenger side and all stones on Thanos's side to Avenger Collection  --  UPDATE AVENGERS and THANOS ARRAYS, AVENGER COLLECTION ARRAY, DIVS, AND CSS AND TURN VALUE
    2.3.2.2.  If Thanos has no stones, end Avenger turn.  -- UPDATE TURN VALUE
 2.4.  Repeat all instructions for THANO's turn.

