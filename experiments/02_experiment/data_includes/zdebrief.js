newTrial( "debrief" ,
    newImage("thankyou3.png")
    .size(450,161)
    .center() 
    .print(),
    newText("Your participation tremendously helped our robot improve.").print(),
    //newText("<p>This study specifically looked at how people process sentences containing 'and','but' and 'so'. </p>")
    //.settings.css("font-size","15")
    //.print(),
    newText("<p>Before you go, can you indicate below what regional variety of English you consider yourself speaking (British, Australian, American etc.).").print(),
    newTextInput().center().settings.size(400,20).print().log(),
    newText("<p>If you have any comments on the experiment or if you encountered any difficulties, please indicate them below.").print(),
    newTextInput().center().settings.size(400,100).print().log(),
    newText("<p><br>Click on continue to obtain your prolific completion code.").print(),
    newText("<br>").print(),
    newButton("Continue").center().print().wait()
    )
    newTrial("prolific",
    newText("<br>Please click <a href='https://app.prolific.co/submissions/complete?cc=88AB7BC5'> here</a> to obtain your prolific completion code.").center().print(),
    newText("<p>If you have any follow-up question regarding this study please contact Cecile Larralde : </p>").print(),
    newText("<p>cecile.larralde.15@ucl.ac.uk</p>").center().print(),
    newText("<p><br>You may now close this window.").center().print(),
    newButton().wait()
    )