PennController.ResetPrefix(null)
DebugOff()
Sequence(
    "intro","Consent","Participantid","Questionsparticipant","game1","counter","instructions","instructions2",
    "endintructions",
    "warmup1","mid warmup","vartest","warmup2","end of warmup",
    "reminder",
    randomize("test"),"debrief",
SendResults(),"prolific","bye")


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


SendResults()

// Spaces and linebreaks don't matter to the script: we've only been using them for the sake of readability
newTrial( "bye" ,
    newText("Thank you for your participation!").print(),
    newButton().wait()  // Wait for a click on a non-displayed button = wait here forever
)
.setOption( "countsForProgressBar" , false )
;
// Make sure the progress bar is full upon reaching this last (non-)trial
    