SetCounter("counter","inc", 1)

Template(GetTable("EXP2_test_items_set_1_2.csv").setGroupColumn( "Group" ),
    // Row will iteratively point to every row in myTable.csv
        row => newTrial( "test",
        newVar("accuracy", 0).global(),
        //newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),
        newImage("cross","cross.png").print(),
        newTimer("wait",600).start().wait(),
        getImage("cross").remove(),
        newText("one", row.Screen2).settings.css("font-size","70").print(),
        newVar("RT1").global().set( v => Date.now() ),
        newKey(" ").wait(" "),
        getVar("RT1").set( v => Date.now() - v ),//.log( "ReactionTime" , getVar("RT1"),
        getText ("one").remove (),
        newText("two", row.Screen4).settings.css("font-size","70").print(),
        newVar("RT2").global().set( v => Date.now() ),
        newKey(" ").wait(" "),
        getVar("RT2").set( v => Date.now() - v )//.log( "ReactionTime2" , getVar("RT2")
        ,
        getText ("two").remove (),
        //newText("three", row.Screen11).settings.css("font-size","70").settings.css("border", "solid 2px black")
        //.after(newText(" ").settings.css("font-size","70")
        //.after(newText("four", row.Screen12).settings.css("font-size","70").settings.css("border", "solid 2px black")
        //.after(newText(" ").settings.css("font-size","70")
        //.after(newText("five", row.Screen13).settings.css("font-size","70").settings.css("border", "solid 2px black")
        //.print()).print()).print()).print())
        //.print(),
        newText("three", row.Screen11).settings.css("font-size","70"),
        newText("four", row.Screen12).settings.css("font-size","70"),
        newText("five", row.Screen13).settings.css("font-size","70"),
        newImage('Screenshot 2022-01-05 at 16.28.58.png' , 'Screenshot 2022-01-05 at 16.28.58.png' )
        .settings.size(80, 80),
        newImage('Screenshot 2022-01-05 at 16.28.58_2.png' , 'Screenshot 2022-01-05 at 16.28.58_2.png' )
        .settings.size(80, 80),
        newImage('Screenshot 2022-01-05 at 16.28.58_3.png' , 'Screenshot 2022-01-05 at 16.28.58_3.png' )
        .settings.size(80, 80),
        newCanvas( 'myCanvas', 700, 500)
        .settings.add( 0, 0, getImage('Screenshot 2022-01-05 at 16.28.58.png') )
        .settings.add( 20, 3, getText('three') )
        .settings.add( 95, 0, getImage('Screenshot 2022-01-05 at 16.28.58_2.png'))
        .settings.add( 112, 3, getText('four'))
        .settings.add( 190, 0, getImage('Screenshot 2022-01-05 at 16.28.58_3.png'))
        .settings.add( 207, 3, getText('five'))
        .print(),
        newVar("RT3").global().set( v => Date.now() ),
        newKey("select","FJ").log().wait(" ").log(),
        getKey("select")
            .test.pressed(row.Screen7)
            .success(getVar("accuracy").set( v=1 ))
            .failure(getVar("accuracy").set(v=0)),
        getVar("RT3").set( v => Date.now() - v )//.log( "ReactionTime" , getVar("RT4"))
        ,
        getText ("three").remove ()
        
)
.log( "ID" , getVar("ParticipantName"))
.log( "Age" , getVar("Age"))
.log( "Gender" , getVar("Gender"))
.log("Handedness", getVar("Handedness"))
.log( "ReactionTime1" , getVar("RT1"))
.log( "ReactionTime2" , getVar("RT2"))
.log( "ReactionTime3" , getVar("RT3"))
.log( "Connective" , row.Screen3 )
.log( "TrialID" , row.Screen5 )
.log( "Wordform" , row.Screen6 )
.log("Truthvalue", row.Screen7 )
.log("Sentenceform" , row.Screen8 )
.log("Answeraccuracy", getVar("accuracy"))
.log("Group", row.Group))
