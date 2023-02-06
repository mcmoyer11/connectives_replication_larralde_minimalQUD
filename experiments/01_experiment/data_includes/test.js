SetCounter("counter","inc", 1)
Template(GetTable("test_items_set_1_2.csv").setGroupColumn( "Group" ),
    // Row will iteratively point to every row in myTable.csv
        row => newTrial( "test",
        newVar("accuracy", 0).global(),
        newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),newText("space","<br>").print(),
        newImage("cross","cross.png").print(),
        newTimer("wait",700).start().wait(),
        getImage("cross").remove(),
        newText("one", row.Screen1).settings.css("font-size","70").print(),
        //newVar("RT1").global().set( v => Date.now() ),
        newTimer("wait",1100).start().wait(),
        //getVar("RT1").set( v => Date.now() - v )//.log( "ReactionTime" , getVar("RT1"),
        getText ("one").remove (),
        newText("two", row.Screen2).settings.css("font-size","70").print(),
        newVar("RT1").global().set( v => Date.now() ),
        newKey(" ").wait(" "),
        getVar("RT1").set( v => Date.now() - v )//.log( "ReactionTime" , getVar("RT2")
        ,
        getText ("two").remove (),
        newText("four", row.Screen4).settings.css("font-size","70").print(),
        newVar("RT2").global().set( v => Date.now() ),
        newKey("select","FJ").log().wait(" ").log(),
        getKey("select")
            .test.pressed(row.Screen7)
            .success(getVar("accuracy").set( v=1 ))
            .failure(getVar("accuracy").set(v=0)),
        getVar("RT2").set( v => Date.now() - v )//.log( "ReactionTime" , getVar("RT4"))
        ,
        getText ("four").remove ()
)
    .log( "ID" , getVar("ParticipantName"))
    .log( "Age" , getVar("Age"))
    .log( "Gender" , getVar("Gender"))
    .log("Handedness", getVar("Handedness"))
    .log( "ReactionTime1" , getVar("RT1"))
    .log( "ReactionTime2" , getVar("RT2"))
    .log( "Connectives" , row.Screen3 )
    .log( "TrialID" , row.Screen5 )
    .log( "Wordform" , row.Screen6 )
    .log("Truthvalue", row.Screen7 )
    .log("Sentenceform" , row.Screen8 )
    .log("Answeraccuracy", getVar("accuracy"))
    .log("Group", row.Group)

)