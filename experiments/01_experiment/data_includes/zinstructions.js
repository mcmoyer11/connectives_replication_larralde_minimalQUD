newTrial("game1",
     newText("Your task today will be to help us train a robot for an online word game.")
    .print(),
    newText("In this game, the player is given nine letter tiles and tries to make a robot 'guess' a three letter word formed with the letters on the tiles. ")
    .print(),
    newText("<br> ").center().print(),
    newText("The robot will ask the player a question, then the player gives the robot hints about two of the letters in that word as can be seen on the figure below.")
    .print(),
    newText("<br> ").center().print(),
    newText("Our robot is well trained to take into account the letter tiles available when making a guess. However it still does not reliably use the hints provided by the player.")
    .print(),
    newText("<br> ").center().print(),
    newText("In the task that you are about to complete, you will see questions asked by the robot and hints given by players.").print(), 
    newText("<br> ").center().print(),
    newText("You will then be asked if the word guessed by the robot matches the hint. Your feedback will be used by our robot to improve its predictions.")
    .print(),
    newText("<br> ").center().print(),
    newImage("Pic_exp_pres_QUD.png")
    .size( 500,207 )      // Resize the image to 150x250p
    .center().print(),
    newText("<br> ").center().print(),
    newButton("next","Continue").center().print().wait()
)

newTrial("game2",
    newText("The goal of the game is to make the computer guess as many three letter words as possible by providing hints.")
    .center().print(),
    newText("<br> ").center().print(),
    newText("The rules are simple. The player is presented with a number of letter tiles and composes three letter words with the letters represented on the tiles. The player then needs to make the computer “guess” these words one by one by typing hints about two of the letters in the word.").print(),
    newText("<br> ").center().print(),
    newText("The challenge  for the player is to give hints that can only lead to one single option out of all the possible three letter words that can be formed with the letters available.").print(),
    newText("In the example below, the player thinks of the word TAB but the hint that they provide could also correspond to the word BET as guessed by the computer.").print(),
    newText("<br> ").center().print(),
    newImage("Pic_exp_pres.png")
    .size( 500,207 )      // Resize the image to 150x250px
    .center()
      .print(),
    newText("<br> ").center().print(),
    newButton("next","Continue").center().print().wait()
)

newTrial("game3", 
    newText("At the moment, the artificial intelligence takes into account the letter tiles available when making a guess. However it still does not reliably use the hints provided by the player. To address this issue we designed the  “trial and error” learning task that you are about to complete.")
    .center().print(),
    newText("<br> ").center().print(),
    newText("In this task you will see the hint provided by the player followed by the word guessed by the computer. You will then be asked to assess whether the guess matched the hint given. Your feedback will help improve the artificial intelligence’s use of the players’ hints.")
    .center().print(),
    newText("<br> ").center().print(),
    newText("Since the artificial intelligence already performs well in restricting its guesses to the possible combinations of the letters tiles, you will not need to check the computer’s guess against the tiles given to the players. You will actually not even see those tiles.") 
    .center().print(),
    newText("<br> ").center().print(),
    newButton("next","Continue").center().print().wait()
)

newTrial( "instructions" ,
  
    newText("<br> ").center().print(),
    newText("The hints and guesses will be presented as illustrated below. You will see the first part of the hint and will then need to press the <strong>SPACE BAR</strong> to progress to the second part. <br> Once you've seen the whole hint, press <strong>SPACE BAR</strong> to display the word guessed by the robot.<br> Finally press <strong>F</strong> if the word does <strong>not</strong> match the hint and <strong>J</strong> if the word accurately matches the hint you have just read.")
    .print()
    ,
    newText("<br><pre>There is a P and</pre>").center().print()
    ,
    newText("<br> <strong>SPACE BAR ").center().print()
    ,
    newText("<br><pre>there is a T</pre>").center().print()
    ,
    newText("<br> <strong>SPACE BAR ").center().print()
    ,
    newText("<br><pre>PET</pre>").center().print(),
    //newText("<br><pre>CAR</pre>").left().print(),
    newText("<br><strong>F</strong>   or   <strong>J</strong> ").center().print(),
    newText("<br> END ").center().print(),
    newText("<br> ").center().print(),
    newButton("next","Continue").center().print().wait()
)
newTrial("instructions2",
    newText("You will use 3 keyboard keys throughout the task : <br><pre><strong>SPACE BAR</strong> --> Go to the next screen.<br><strong>F</strong> --> The word does <strong>not</strong> match the hint given by the player.<br><strong>J</strong> --> The word matches the hint given by the player.")
    //.center()
    //.settings.css("font-size","30")
    .print(),
    newText("<br>For time efficency purposes, we would like you to position your fingers as illustrated below : <br><pre>Each of your index fingers poised above the F and J keys. </pre><pre>Your thumbs poised above the spacebar.</pre>")
    //.center()
    //.settings.css("font-size","30")
    .print(),
    newImage("fingers.png").center().size( 500,229 ).print(),
    newText("It is very important to maintain this position throughout.").print(),
    newText("<br> ").print(),
    newButton("next","Continue").center().print().wait()
)
newTrial("endintructions",
    newText("You will now start a practice round. The first four trials will be presented with full intructions that will then be removed for the rest of the practice. At the end, a message will inform you that you are about to start the test phase.<br><p>Please position your fingers adequately and press <strong>SPACE BAR</strong> when you are ready to start the experiment.")
    .center().print(),
    newImage("fingers.png").center().size( 500,229 ).print(),
    newKey(" ").wait()
)
newTrial("endintructions2",
    newText("You will now start the task. A cross will be displayed before each new hint to mark the start of a new trial. At that point, no action is needed from you, the cross will disapear on its own.<br><p>Please position your fingers adequately and press <strong>SPACE BAR</strong> when you are ready to start the experiment.")
    .center().print(),
    newImage("fingers.png").center().size( 500,229 ).print(),
    newKey(" ").wait()
)