SetCounter("counter", "inc", 1)

Template(GetTable("minimalQUD.csv").setGroupColumn("Group"),
    // Row will iteratively point to every row in myTable.csv
    row => newTrial("test",
        newVar("accuracy", 0).global(),

        // Fixation Cross
        newImage("cross", "cross.png").print(),
        newTimer("wait", 600).start().wait(),
        getImage("cross").remove(),
        
        // QUD
        newText("zero", row.SpecificQUD).settings.css("font-size", "70").print(),
        // newVar("RT1").global().set(v => Date.now()),
        newKey(" ").wait(" "),
        // getVar("RT1").set(v => Date.now() - v),
        newTimer("wait", 600).start().wait(),
        getText("zero").remove(),
        
        // First conjunct
        newText("one", row.FirstConj).settings.css("font-size", "70").print(),
        newVar("RT1").global().set(v => Date.now()),
        newKey(" ").wait(" "),
        getVar("RT1").set(v => Date.now() - v),
        getText("one").remove(),
        
        // Second conjunct
        newText("two", row.SecondConj).settings.css("font-size", "70").print(),
        newVar("RT2").global().set(v => Date.now()),
        newKey(" ").wait(" "),
        getVar("RT2").set(v => Date.now() - v),
        getText("two").remove(),

        newText("three", row.Screen11).settings.css("font-size", "70"),
        newText("four", row.Screen12).settings.css("font-size", "70"),
        newText("five", row.Screen13).settings.css("font-size", "70"),
        newImage('Screenshot 2022-01-05 at 16.28.58.png', 'Screenshot 2022-01-05 at 16.28.58.png')
            .settings.size(80, 80),
        newImage('Screenshot 2022-01-05 at 16.28.58_2.png', 'Screenshot 2022-01-05 at 16.28.58_2.png')
            .settings.size(80, 80),
        newImage('Screenshot 2022-01-05 at 16.28.58_3.png', 'Screenshot 2022-01-05 at 16.28.58_3.png')
            .settings.size(80, 80),
        newCanvas('myCanvas', 700, 500)
            .settings.add(0, 0, getImage('Screenshot 2022-01-05 at 16.28.58.png'))
            .settings.add(20, 3, getText('three'))
            .settings.add(95, 0, getImage('Screenshot 2022-01-05 at 16.28.58_2.png'))
            .settings.add(112, 3, getText('four'))
            .settings.add(190, 0, getImage('Screenshot 2022-01-05 at 16.28.58_3.png'))
            .settings.add(207, 3, getText('five'))
            .print(),

        // Decision
        newVar("RT3").global().set(v => Date.now()),
        newKey("select", "FJ").log().wait(" ").log(),
        getKey("select")
            .test.pressed(row.Screen7)
            .success(getVar("accuracy").set(v = 1))
            .failure(getVar("accuracy").set(v = 0)),
        getVar("RT3").set(v => Date.now() - v),
        getText("three").remove()

    )
        .log("ID", getVar("ParticipantName"))
        .log("Age", getVar("Age"))
        .log("Gender", getVar("Gender"))
        .log("Handedness", getVar("Handedness"))
        .log("ReactionTime1", getVar("RT1"))
        .log("ReactionTime2", getVar("RT2"))
        .log("ReactionTime3", getVar("RT3"))
        .log("QUD", row.SpecificQUD)
        .log("Connective", row.Conj)
        .log("TrialID", row.Screen5)
        .log("Wordform", row.Screen6)
        .log("Truthvalue", row.Screen7)
        .log("Sentenceform", row.Screen8)
        .log("Answeraccuracy", getVar("accuracy"))
        .log("Group", row.Group))
