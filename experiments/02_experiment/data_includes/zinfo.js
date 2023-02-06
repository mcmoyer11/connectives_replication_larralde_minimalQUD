newTrial( "Consent" ,
    newText("Please click on the link below to read our information sheet.")
            .center()
            .settings.css("font-size","15")
            .print()
    ,
    newText("<br><a href='https://drive.google.com/file/d/1zUgXRVJW_GxeNo4TVp1o5qydarS_Srz7/view?usp=sharing' target='_blank'> Information sheet </a>").center().print(),
    newText("<br> ").center().color("red").print(),
    newHtml("Consent","consent.html").print(),
    newButton("continue", "Continue").center()
    .print()
    .wait(
        getHtml("Consent").test.complete()
            .failure( newText("You need to tick all the boxes above to take part in the experiment. If you do not wish to consent, you may close you browser now.").color("red").print() )
    
))
newTrial("Participantid",
    newVar("ParticipantName")
    .global(),
    newText("Before we start can you please provide us with the following information.").center().print(),
    newText("<br>Please enter your prolific ID below and press ENTER:")
    .center().print(),
    newText("<br> ").center().print(),
    newTextInput().center().print().wait()                 // The next command won't be executed until Enter is press 
    .setVar( "ParticipantName" )  // This setVar command stores the value from the TextInput element into the Var element
    
)
newTrial("Questionsparticipant",
    newText("Before we start can you please provide us with the following information.").center().print(),
    newText("<br> ").center().print(),
    newVar("Age").global(),
    newVar("Gender").global(),
    newVar("Handedness").global(),
    newTextInput("Age").before(newText("<br>Please enter your age and press ENTER : ").center().print()).center().print().wait().setVar("Age"),
    newText("<br> ").center().print(),
    newText("<br> ").center().print(),
    newDropDown("hand", "Please select your dominant hand")
    .before(newText("<br>Dominant hand : ").settings.css("font-size","15"))
    .center()
    .add("Right","Left", "Both") ,
    newDropDown("gender", "Please select your gender")
    .before(newText("<br>Gender : ").settings.css("font-size","15"))
    .center()
    .add("Female","Male", "Other","Prefer not to say") 
    ,
    newCanvas("drop2", 1000, 100)
    .add(   0, 0, getDropDown("gender"))
    .add( 360, 0, getDropDown("hand"))
    .print().log(),
    getDropDown("gender").wait().setVar("Gender"),
    getDropDown("hand").wait().setVar("Handedness"),
    newText("<br> ").center().print(),
    newButton("next","Continue")
    .center()
    .print()
    .wait()
    

)
.log( "ID" , getVar("ParticipantName"))
.log( "Age" , getVar("Age"))
.log("Handedness", getVar("Handedness"))
.log( "Gender" , getVar("Gender"))


