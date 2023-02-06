newTrial( "instructions" ,
    newText("The following experiment consists in a series of sentences that will be presented to you in chunks.")
    .center()
    .print()
    ,
    newText("<br> ").center().print(),
    newText("Each trial unfolds as illustrated below. <br><p>You are first presented with a word written in capital letters. <br>The word is followed by a statement, broken up into two chunks, about the letters contained in that word. <br>Hitting the <strong>SPACE BAR</strong> allows you to progress from the first chunk to the second one. <br>At the end of the sentence you will need to press <strong>F</strong> if the sentence if false and <strong>J</strong> if the sentence is correct.")
    .print()
    ,
    newText("<br><pre>BET</pre>")
    .center()
    .print()
    ,
    newText("<br><pre>There is a B and</pre>").center().print()
    ,
    newText("<br> <strong>SPACE BAR ").center().print()
    ,
    newText("<br><pre>there is an A.</pre>").center().print(),
    newText("<br> Press <strong>F</strong> or <strong>J</strong> ").center().print(),
    newText("<br> END ").center().print(),
    newText("<br> ").center().print(),
    newButton("next","Continue").center().print().wait()
)
newTrial("instructions2",
    newText("You will use 3 keyboard keys throughout the experiment : <br><pre><strong>SPACE BAR</strong> --> go to the next chunk <br><strong>F</strong> --> I <strong>dis</strong>agree with the sentence (False) <br><strong>J</strong> --> I agree with the sentence (True).")
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
   