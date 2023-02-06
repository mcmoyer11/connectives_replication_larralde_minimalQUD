
Template("warm_up_1.csv", 
    row => newTrial( "warmup1",
        newText("next","<br>Press SPACE BAR to continue")
            .center(),
        newText("wait","You will now see a cross. The word will appear shortly after the cross and will be directly followed by the first part of the sentence.").center().print()
        ,
        getText("next").print(),
        newKey(" ").wait(" "),
        getText("wait").remove(),getText("next").remove(),
        newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),
        newImage("cross","cross.png").print(),
        newTimer("wait", 700).start().wait()
        ,
        getImage("cross")
        .remove()
        ,
        newText("one", row.Screen1).settings.css("font-size","70").print(),
        newTimer("wait", 1100).start().wait(),
        getText ("one").remove (),
        newText("two", row.Screen2)
        .settings.css("font-size","70")
        .print(),
        getText("next").print(),
        newKey(" ")
         .wait(" ")
         .log()
        ,
        getText ("two")
        .remove (),
        getText("next").remove(),
       //newText
        newVar("RT3").global().set( v => Date.now() ),
        newKey("select","FJ").log().wait(" ").log(),
        getKey("select")
            .test.pressed(row.Screen7)
            .success(getVar("accuracy").set( v=1 ))
            .failure(getVar("accuracy").set(v=0)),
        getVar("RT3").set( v => Date.now() - v )//.log( "ReactionTime" , getVar("RT4"))
        ,
        getText ("three").remove (),
        
        newText("four", row.Screen4)
        .settings.css("font-size","70")
        .print(),
        newText("instruction3","<strong>[ J ]</strong> <br><i>agree"),
        newText("instruction4","<strong>[ F ]</strong> <br><i>disagree"),
        newCanvas("FJ", 800, 130)
        .add(   100, 90, getText("instruction4"))
        .add( 170, 90, getText("instruction3"))
        .print(),
        newKey("select","FJ").wait().log(),
        getKey("select")
            .test.pressed(row.Screen5)
            .success(newText("correct","Right answer!").italic().print())
            .failure(newText("false","Wrong answer!").color("red").print())
        ,
        newTimer("wait", 1500).start().wait(),
        getCanvas("FJ").remove(),
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
Template("warm_up_2.csv", 
    row => newTrial( "warmup2",
        getVar("score")
        .test.is(3).success(end()),
        newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),
        newImage("cross","cross.png").print()
        ,
        newTimer("wait", 700).start().wait()
        ,
        getImage("cross").remove(),
        newText("one", row.Screen1).settings.css("font-size","70").print()
        ,
        newTimer("wait", 1100).start().wait(),
        getText ("one")
        .remove ()
        ,
        newText("two", row.Screen2).settings.css("font-size","70").print()
        ,
        newKey(" ")
         .wait(" ")
         .log()
        ,
        getText ("two")
        .remove (),
        newText("four", row.Screen4).settings.css("font-size","70").print(),
        newText("instruction3","<strong>[ J ]</strong> <br><i>agree"),
        newText("instruction4","<strong>[ F ]</strong> <br><i>disagree"),
        newCanvas("FJ", 800, 130)
        .add(   100, 90, getText("instruction4"))
        .add( 170, 90, getText("instruction3"))
        .print(),
        newKey("select","FJ").wait().log(),
        getKey("select")
            .test.pressed(row.Screen7)
            .failure(newText("false","Wrong answer!").color("red").print(),newTimer("wait", 1500).start().wait()),
        getKey("select")
            .test.pressed(row.Screen9)
            .success(getVar("score").set( v => v+1 ))
            .failure(getVar("score").set(v => 0))

))
/*Template("warmup_two.csv", 
    row => newTrial( "warmup3",
        getVar("score")
        .test.is(3).success(end()),
        newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),
        newImage("cross","cross.png").print()
        ,
        newTimer("wait", 700).start().wait()
        ,
        getImage("cross").remove(),
        newText("one", row.Screen1).settings.css("font-size","70").print()
        ,
        newTimer("wait",1100).start().wait(),
        getText ("one")
        .remove ()
        ,
        newText("two", row.Screen2).settings.css("font-size","70").print()
        ,
        newKey(" ")
         .wait(" ")
         .log()
        ,
        getText ("two")
        .remove (),
        newText("four", row.Screen4).settings.css("font-size","70").print(),
        newText("instruction3","<strong>[ J ]</strong> <br><i>agree"),
        newText("instruction4","<strong>[ F ]</strong> <br><i>disagree"),
        newCanvas("FJ", 800, 130)
        .add(   100, 90, getText("instruction4"))
        .add( 170, 90, getText("instruction3"))
        .print(),
        newKey("select","FJ").wait().log(),
        getKey("select")
            .test.pressed(row.Screen7)
            .success(getVar("score").set( v => v+1 ))
            .failure(getVar("score").set(v => 0),newText("false","Wrong answer!").color("red").print(),newTimer("wait", 1500).start().wait())

))
*/

         
newTrial( "end of warmup" ,
    newText("You have successfully completed the practice round!")
        .print()
    ,
    newText("Please, make sure to keep your index fingers on the <strong>F</strong> and <strong>J</strong> keys.").print(),
    newText("<br>").print(),
    newImage("fingers.png").center().size( 500,229 ).print(),
    newText("Press <strong>SPACE BAR</strong> to start the experiment.").center().print(),
    newKey(" ")
        .wait(" ")
    )
