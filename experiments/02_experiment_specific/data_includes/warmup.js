
Template("Exp2_warmup1.csv", 
    row => newTrial( "warmup1",
        newText("next","<br>Press SPACE BAR to continue")
            .center()
        ,
        newText("wait","You will now see a cross. The first part of the hint will appear shortly after the cross.")
            .center()
            .print()
        ,
        getText("next")
            .print(),
        newKey(" ")
            .wait(" ")
        ,
        getText("wait")
            .remove()
        ,
        getText("next")
            .remove()
        ,
        //newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),
        newImage("cross","cross.png")
            .print(),
        newTimer("wait", 700).start().wait()
        ,
        getImage("cross")
        .remove()
        ,
        // presentation of the target
        newText("one", row.Screen1).settings.css("font-size","70").print(),
        getText("next").print(),
        newKey(" ").wait(" ").log(),
        getText ("one").remove (),
        getText("next").remove(),
        newText("two", row.Screen2)
        .settings.css("font-size","70")
        .print(),
        getText("next").print(),
        newKey(" ").wait(" ").log(),
        getText ("two").remove (),
        getText("next").remove()
        ,
        
        // presentation of the word
        newText("three", row.Screen11).settings.css("font-size","70"),
        newText("four", row.Screen12).settings.css("font-size","70"),
        newText("five", row.Screen13).settings.css("font-size","70"),
        newImage('Screenshot 2022-01-05 at 16.28.58.png' , 'Screenshot 2022-01-05 at 16.28.58.png' )
        .settings.size(80, 80),
        newImage('Screenshot 2022-01-05 at 16.28.58_2.png' , 'Screenshot 2022-01-05 at 16.28.58_2.png' )
        .settings.size(80, 80),
        newImage('Screenshot 2022-01-05 at 16.28.58_3.png' , 'Screenshot 2022-01-05 at 16.28.58_3.png' )
        .settings.size(80, 80),
        newText("instruction3","<strong>[ F ]</strong><br><i>disagree"),
        newText("instruction4","<strong>[ J ]</strong><br><i>agree"),
        newCanvas( 'myCanvas', 700, 100)
        .settings.add( 0, 0, getImage('Screenshot 2022-01-05 at 16.28.58.png') )
        .settings.add( 20, 3, getText('three') )
        .settings.add( 95, 0, getImage('Screenshot 2022-01-05 at 16.28.58_2.png'))
        .settings.add( 112, 3, getText('four'))
        .settings.add( 190, 0, getImage('Screenshot 2022-01-05 at 16.28.58_3.png'))
        .settings.add( 207, 3, getText('five'))
        .settings.add( 88, 90,getText("instruction3"))
        .settings.add( 180, 90,getText("instruction4"))
        .print(),
        // newText("instruction3","<strong>[ F ]</strong><br><i>disagree"),
        // newText("instruction4","<strong>[ J ]</strong><br><i>agree"),
        newKey("select","FJ").log().wait(" ").log(),
        getKey("select")
            .test.pressed(row.Answer)
            .success(newText("correct","Right answer!").italic().center().print())
            .failure(newText("false","Wrong answer!").color("red").center().print()),
        newTimer("wait", 1500).start().wait(),
        getCanvas ('myCanvas').remove (),
        getText("correct").remove(),
        getText("false").remove(),
        getText ("four").remove (),
        getText ("instruction3").remove (),
        getText ("instruction4").remove ()
   
))
newTrial( "mid warmup" ,
    newText("We will now remove the instructions.")
        .center().print()
    ,
    newText("<br>Press <strong>SPACE BAR</strong> to continue.").center().print()
    ,
    newKey(" ")
        .wait(" ")
    )
newTrial("vartest",newVar("score", 0).global())
Template("Exp2_warmup2.csv", 
    row => newTrial( "warmup2",
        getVar("score")
        .test.is(3).success(end()),
        //newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),
        newImage("cross","cross.png").print()
        ,
        newTimer("wait", 700).start().wait()
        ,
        getImage("cross").remove(),
        newText("one", row.Screen1).settings.css("font-size","70").print(),
        newKey(" ").wait(" ").log(),
        getText ("one").remove (),
        
        newText("two", row.Screen2).settings.css("font-size","70").print(),
        newKey(" ").wait(" ").log(),
        getText ("two").remove (),
        
        newText("three", row.Screen11).settings.css("font-size","70"),
        newText("four", row.Screen12).settings.css("font-size","70"),
        newText("five", row.Screen13).settings.css("font-size","70"),
        newImage('Screenshot 2022-01-05 at 16.28.58.png' , 'Screenshot 2022-01-05 at 16.28.58.png' )
        .settings.size(80, 80),
        newImage('Screenshot 2022-01-05 at 16.28.58_2.png' , 'Screenshot 2022-01-05 at 16.28.58_2.png' )
        .settings.size(80, 80),
        newImage('Screenshot 2022-01-05 at 16.28.58_3.png' , 'Screenshot 2022-01-05 at 16.28.58_3.png' )
        .settings.size(80, 80),
        newCanvas( 'myCanvas', 700, 100)
        .settings.add( 0, 0, getImage('Screenshot 2022-01-05 at 16.28.58.png') )
        .settings.add( 20, 3, getText('three') )
        .settings.add( 95, 0, getImage('Screenshot 2022-01-05 at 16.28.58_2.png'))
        .settings.add( 112, 3, getText('four'))
        .settings.add( 190, 0, getImage('Screenshot 2022-01-05 at 16.28.58_3.png'))
        .settings.add( 207, 3, getText('five'))
        .print(),
        newKey("select","FJ").wait().log(),
        getKey("select")
            .test.pressed(row.Feedback)
            .failure(newText("false","Wrong answer!").color("red").print(),newTimer("wait", 1300).start().wait()),
        getKey("select")
            .test.pressed(row.Answer)
            .success(getVar("score").set( v => v+1 ))
            .failure(getVar("score").set(v => 0))

))

newTrial( "end of warmup" ,
    newText("You have successfully completed the practice round!")
        .print(),
    newText("You will now see and evaluate real player-robot interactions. Our robot counts on your feedback to improve its guesses !")
        .print(),
    newImage("ready.png").size( 250, 112 ).print(),
    newButton("next","Continue").center()
    .print().wait()
    )
newTrial("reminder",
    newText("Please, make sure to keep your index fingers on the <strong>F</strong> and <strong>J</strong> keys.").print(),
    newText("<br>").print(),
    newImage("fingers.png").center().size( 500,229 ).print(),
    newText("Press <strong>SPACE BAR</strong> to start the experiment.").center().print(),
    newKey(" ")
        .wait(" ")
    )
