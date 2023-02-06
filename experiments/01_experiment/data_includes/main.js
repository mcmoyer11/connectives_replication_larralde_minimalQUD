PennController.ResetPrefix(null); // Shorten command names (keep this line here)
PennController.DebugOff() 
Sequence("intro","counter","Consent","Participantid","Questionsparticipant","instructions","instructions2",
"endintructions","warmup1","mid warmup","vartest","warmup2","end of warmup", randomize("test") ,"debrief",
SendResults() ,"prolific","bye" )

     
// What is in Header happens at the beginning of every single trial
Header(
    //We will use this global Var element later to store the participant's name
    newVar("ParticipantName")
       .global()
   ,
    newTimer(250)
       .start()
       .wait()
)


// This log command adds a column reporting the participant's name to every line saved to the results

/*newTrial( "intro" ,
    newImage("logo-ucl.jpg")
    .size( 300,100 )      // Resize the image to 150x250px
    .center()
      .print(),
    newText("<p>WELCOME!")
    .settings.css("font-size","20")
    .center()
    .print(),
    newText("<p>The following experiment is conducted by the Division of Psychology and Language Sciences at University College London.</p>")
    .settings.css("font-size","15")
    .center()
    .print(),
    newText("<p>You will read a few statements and will then need to decide if you agree or disagree with them.</p>")
    .settings.css("font-size","15")
    //.center()
    .print(),
    newText("<p>It is important that you complete the experiment in one go. Before continuing, please make sure that you are in a calm and quiet environment.</p>")
    .settings.css("font-size","15")
    .center()
    .print(),
    newButton("next", "Continue")
    .center()
    .print()
    .wait()
    )*/


//.log( "Name" , getVar("ParticipantName"))

/*newTrial( "Consent" ,
    newText("Please click on the link below to read our consent form.")
            .center()
            .settings.css("font-size","15")
            .print()
    ,
    newText("<br><a href='https://docs.google.com/document/d/1prBsl-YGL9oWTRAlceidVxdLb0JMez2zF0FQnMjytq0/edit?usp=sharing' target='_blank'> Consent form </a>").center().print(),
    /*newDropDown("consent", "Please select your answer")
    .before(newText("<br>Do you agree with the <a href='https://docs.google.com/document/d/1prBsl-YGL9oWTRAlceidVxdLb0JMez2zF0FQnMjytq0/edit?usp=sharing' target='_blank'> consent form</a>? "))
    .settings.css("font-size","15")
    .center()
    .add( "I agree","I disagree" ) 
    .print().wait(),
    newText("<br> ")
    .print(),
    newVar("consentform")
        .global()
        .set(getDropDown("consent")),
    getVar("consentform").test.is("I agree")
        .success(newButton("next","Continue").center().settings.css("font-size","15").print().wait()),
    getVar("consentform").test.is("I disagree")
        .failure(newText("<br>Sorry, you cannot proceed with the experiment if you do not wish to consent.").settings.css("font-size","15").center().print()).wait() 
    newText("<br>By clicking continue you confirm that you have read and agree with the consent form.").center().color("red").print(),
    newButton("next","Continue").center().settings.css("font-size","15").print().wait()
    
)
newTrial("Participantid",
    newVar("ParticipantName")
    .global(),
    newText("Before we start can you please provide us with the following information:").center().print(),
    newText("<br>Please enter your prolific ID below and press Enter:")
    .center().print(),
    newText("<br> ").center().print(),
    newTextInput().center().print().wait()                 // The next command won't be executed until Enter is press 
    .setVar( "ParticipantName" )  // This setVar command stores the value from the TextInput element into the Var element
    
)
newTrial("Questionsparticipant",
    newText("Before we start can you please provide us with the following information:").center().print(),
    newText("<br> ").center().print(),
    newVar("Age").global(),
    newTextInput("Age").before(newText("<br>Age : ").center().print()).center().print().setVar("Age"),
    newText("<br> ").center().print(),
    //newVar("Browser").global(),
    newDropDown("Browser", "Please select your browser")
    .before(newText("<br>Browser : ").settings.css("font-size","15"))
    //.center()
    .add( "Google Chrome","Windows Edge", "Safari", "Firefox", "Opera", "Internet Explorer", "Brave", "Other","I don't know" ) 
    //.setVar("Browser"),
    //newText("<br> ").center().print(),
    //.wait().log(),
    ,
    newDropDown("OS", "Please select your operating system")
    .before(newText("<br>Operating system : ").settings.css("font-size","15"))
    //.center()
    .add("Windows 10","Windows 9", "Windows Vista", "Windows 7", "Other Windows", "Linux Ubuntu", "Other Linux", "macOS", "Other","I don't know") 
    //.wait()
    //.log(),
    ,
    newCanvas("drop", 1000, 50)
    .add(   0, 0, getDropDown("OS"))
    .add( 360, 0, getDropDown("Browser"))
    .print().log(),
    newText("<br> ").center().print(),
    newDropDown("hand", "Please select your dominant hand")
    .before(newText("<br>Dominant hand : ").settings.css("font-size","15"))
    .center()
    .add("Right","Left", "Both") 
    //.print()
    //.wait()
    //.log(),
    //newText("<br> ").center().print()
    ,
    newDropDown("gender", "Please select your gender")
    .before(newText("<br>Gender : ").settings.css("font-size","15"))
    .center()
    .add("Female","Male", "Other","Prefer not to say") 
    //.print()
    //.wait()
    //.log()
    ,
    newCanvas("drop2", 1000, 100)
    .add(   0, 0, getDropDown("gender"))
    .add( 360, 0, getDropDown("hand"))
    .print().log(),
    newText("<br> ").center().print(),
    newButton("next","Continue")
    .center()
    .print()
    .wait()
    

)
.log( "ID" , getVar("ParticipantName"))
.log( "Age" , getVar("Age"))*/

//sendresults()
//newTrial("Questionsparticipant",
    //newTextInput().before(newText("Age : ")).center().print().settings.log()
    

//)

/*newTrial( "instructions" ,
    newText("The following experiment consists in a series of sentences that will be presented to you in chunks. <br>For the purpose of the experiment we ask you to imagine that someone wrote three letters in alphabetical order on a blackboard as illustrated bellow.")
    .center()
    //.settings.css("font-size","30")
    .print()
    ,
    newText("<br> ").center().print(),
    newImage("black_board.jpg").center().size(200,200).print(),
    newText("Each trial will start by giving you an indication on one of the letters on the board : ")
    //.center()
    //.settings.css("font-size","30")
    .print()
    ,
    newText("<br><pre>“The first letter is an A”</pre>")
    .center()
    //.settings.css("font-size","30")
    .print()
    ,
    newText("Followed by a statement about what else is written on the board.")
    //.center()
   // .settings.css("font-size","30")
    .print()
    ,
    newText("<br><pre>“There is a B and there is a C” </pre>")
    .center()
    //.settings.css("font-size","30")
    .print()
    ,
    newText("<br>At the end of each sentence you will be asked if you agree or disagree with the sentence that you have just read. ")
    .center()
    //.settings.css("font-size","30")
    .print()
    ,
    newButton("next","Continue").center().print().wait()
)
newTrial("instructions2",
    newText("You will use 3 keyboard keys throughout the experiment : <br><pre><strong>SPACE BAR</strong> --> go to the next chunk / to the next sentence <br><strong>F</strong> --> I <strong>dis</strong>agree with the sentence (False) <br><strong>J</strong> --> I agree with the sentence (True).")
    //.center()
    //.settings.css("font-size","30")
    .print(),
    newText("<br>For response efficiency matter, we would like you to position your fingers as illustrated bellow : <br><pre>Each of your index fingers above the F and J keys </pre><pre>Your thumbs above the spacebar.</pre>")
    //.center()
    //.settings.css("font-size","30")
    .print(),
    newImage("fingers.png").center().size( 500,229 ).print(),
    newText("It is very important to maintain this position throughout."),
    newButton("next","Continue").center().print().wait()
)
newTrial("endintructions",
    newText("Please position your fingers adequatly and press SPACE BAR when you are ready to start the experiment. <br> You will first be presented with three practice sentences to get you used to the experiment.")
    .center()
    //.settings.css("font-size","30")
    .print(),
    newKey(" ")
    .wait()
)
    
    //newText("Please enter your name below and press Enter:")
     //   .center()
     //   .print()
   // ,
  //  newTextInput()
   // .center()
    //    .print()
    //    .wait()                 // The next command won't be executed until Enter is pressed
    //    .setVar( "ParticipantName" )
        // This setVar command stores the value from the TextInput element into the Var element

/*Template("warm_up.csv" ,
    // Row will iteratively point to every row in myTable.csv
        row => newTrial( "variable",
        newText("next","Press SPACE BAR to continue")
            .center()
            //.settings.css("font-size","30")
            .print()
        ,
        newKey(" ")
        .wait(" ")
        ,
        getText("next")
            .remove()
        ,
        newText("wait","Wait for the next trial")
        .center()
        //.settings.css("font-size","30")
        .print()
        ,
        newTimer("wait", 1500)
        .start()
        .wait()
        ,
        getText("wait")
        .remove()
        ,
        newText("instruction0","On a hidden blackboard I have written down 3 letters in the order that they appear in the alphabet.")
        .settings.css("font-size","30")
        .center()
        .print(),
        newText("instruction2","<p> Press SPACE BAR to continue </p>")
        //.settings.css("font-size","30")
        .center()
        .print(),
        newKey (" ")
        .wait(),
        getText ("instruction0")
        .remove (),
        getText ("instruction2")
        .remove ()
        ,
        newText("one", row.Screen1) 
        .settings.css("font-size","30")
        .center()
        .print()
        ,
        newKey(" ")
         .wait(" ")
         .log()
        ,
        getText ("one")
        .remove ()
        ,
        newText("two", row.Screen2)
        .settings.css("font-size","30")
        .center()
        .print()
        ,
        newKey(" ")
         .wait(" ")
         .log()
        ,
        getText ("two")
        .remove ()
        ,
        /*newText("three", row.Screen3)
        .settings.css("font-size","30")
        .center()
        .print()
        ,
        newKey(" ")
        .wait(" ")
        .log()
        ,
        getText ("three")
        .remove (),*/
       /* newText("four", row.Screen4)
        .settings.css("font-size","30")
        .center()
        .print()
        ,
        newText("instruction3","<strong>[ J ]</strong> <br><i>agree")
        //.center()
        //.settings.css("font-size","30")
        ,
        newText("instruction4","<strong>[ F ]</strong> <br><i>disagree")
        //.center()
        //.settings.css("font-size","30")
        ,
        newText("instruction5","<i>Press key 'F'(disagree) or key 'J'(agree) to answer")
        .center(),
        newCanvas("FJ", 800, 130)
        .add(   250, 90, getText("instruction4"))
        .add( 400, 90, getText("instruction3"))
        .add(190, 130, getText("instruction5"))
        .print(),
        newKey("FJ")
        .log()
            .wait(" ")
            .log()
        
        ,
        getText ("four")
        .remove (),
        getText ("instruction3")
        .remove (),
        getText ("instruction4")
        .remove (),
        getText ("instruction5")
        .remove ()
    
))*/

/*newTrial( "end of warmup" ,
    newText("You have successfully completed the practice round!")
        //.center()
        //.settings.css("font-size","30")
        .print()
    ,
    newText("Press <strong>SPACE BAR</strong> to continue.")
        //.center()
        //.settings.css("font-size","30")
        .print()
    ,
    newText("Please, make sure to keep your index fingers on the <strong>F</strong> and <strong>J</strong> keys.")
        //.center()
        //.settings.css("font-size","30")
        .print(),
    newKey(" ")
        .wait(" ")
    )*/
// This Template command generates as many trials as there are rows in myTable.csv
/*Template("Sentence_trials.csv" ,
    // Row will iteratively point to every row in myTable.csv
        row => newTrial( "test",
        //newText("instruction0","<p>On a hidden blackboard I have written down 3 letters in the order that they appear in the alphabet</p>")
        //.settings.css("font-size","30")
        //.center()
        //.print(),
        /*   newText("next","Press space bar to go to the next trial")
            .center()
            .settings.css("font-size","30")
            .print()
        ,
            
        newKey(" ")
        .wait(" "),
        getText("next")
            .remove(),
        newText("instruction2","<p> Press space bar to continue </p>")
        //.settings.css("font-size","30")
        .center()
        .print(),
        newKey (" ")
        .wait(),
        //getText ("instruction0")
        //.remove (),
        getText ("instruction2")
        .remove ()
        ,
        newText("wait","Wait for the next trial")
        .center()
        //.settings.css("font-size","30")
        .print(),
        newTimer("wait", 1500)
        .start()
        .wait(),
        getText("wait")
        .remove(),
        newText("one", row.Screen1) 
        .settings.css("font-size","30")
        .center()
        .print()
        ,
        newVar("RT1").global().set( v => Date.now() ),
        newKey(" ")
         .wait(" ")
         .log()
        ,
        getVar("RT1").set( v => Date.now() - v )//.log( "ReactionTime" , getVar("RT1")
        ,
        getText ("one")
        .remove ()
        ,
        newText("two", row.Screen2)
        .settings.css("font-size","30")
        .center()
        .print()
        ,
        newVar("RT2").global().set( v => Date.now() ),
        newKey(" ")
         .wait(" ")
        ,
         getVar("RT2").set( v => Date.now() - v )//.log( "ReactionTime" , getVar("RT2")
        ,
        getText ("two")
        .remove ()
        ,
        /*newText("three", row.Screen3)
        .settings.css("font-size","30")
        .center()
        .print(),
        newVar("RT3").global().set( v => Date.now() ),
        newKey(" ")
        .wait(" "),
        getVar("RT3").set( v => Date.now() - v )//.log( "ReactionTime" , getVar("RT3"))
        ,
        getText ("three")
        .remove (),*/
     /*   newText("four", row.Screen4)
        .settings.css("font-size","30")
        .center()
        .print()
        ,
        newVar("RT4").global().set( v => Date.now() ),
        newText("instruction3","<strong>[ J ]</strong> <br><i>agree")
        //.center()
        //.settings.css("font-size","30")
        ,
        newText("instruction4","<strong>[ F ]</strong> <br><i>disagree")
        //.center()
        //.settings.css("font-size","30")
        ,
        newText("instruction5","<i>Press key 'F'(disagree) or key 'J'(agree) to answer")
        .center(),
        newTimer("wait", 1500)
        .start()
        .wait(),
        newCanvas("FJ", 800, 130)
        .add(   250, 90, getText("instruction4"))
        .add( 400, 90, getText("instruction3"))
        .add(190, 130, getText("instruction5"))
        .print(),
        newKey("FJ")
        .log()
            .wait(" ")
            .log(),
        getVar("RT4").set( v => Date.now() - v )//.log( "ReactionTime" , getVar("RT4"))
        ,
        getText ("four")
        .remove (),
        getText ("instruction3")
        .remove (),
        getText ("instruction4")
        .remove (),
        getText ("instruction5")
        .remove ()
        
        /*
        newText("five","Press <strong>F</strong> if you agree.")
        .center()
        .settings.css("font-size","30")
        .print(),
        newText("six","Press <strong>J</strong> if you disagree.")
        .center()
        .settings.css("font-size","30")
        .print(),
        newVar("RT5").global().set( v => Date.now() ),
        newKey("FJ")
        .log()
        .wait(" "),
        getVar("RT5").set( v => Date.now() - v )//.log( "ReactionTime" , getVar("RT4"))
        ,
        getText ("five")
        .remove (),
        getText ("six")
        .remove (),
    */
         
//)
   /* .log( "ReactionTime1" , getVar("RT1"))
    .log( "ReactionTime2" , getVar("RT2"))
    .log( "ReactionTime3" , getVar("RT3"))
    .log( "ReactionTime4" , getVar("RT4"))
    //.log( "ReactionTime5" , getVar("RT5"))
    .log( "Connectives" , row.Screen3 )
    .log( "Letters" , row.Screen1 )
    //.log( "Time2" , row.Screen2 )*/
   // .log( "Connectives" , row.Screen3 )
    //.log("TF", row.Screen4 ) 
    // Add these three columns to the results lines of these Template-based trials
//)
//)
SendResults()

// Spaces and linebreaks don't matter to the script: we've only been using them for the sake of readability
newTrial( "bye" ,
    newText("Thank you for your participation!").print(),
    newButton().wait()  // Wait for a click on a non-displayed button = wait here forever
)
.setOption( "countsForProgressBar" , false )
;
// Make sure the progress bar is full upon reaching this last (non-)trial
    