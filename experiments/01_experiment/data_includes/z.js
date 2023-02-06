newTrial( "intro" ,
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
    newText("<p>It is important that you complete the experiment in one go. Before continuing, please make sure that you are in a calm and quiet environment. The task will require your full attention and concentration. Please remove any potential source of distraction and turn off any sound system around you (please mute speakers, put phone on silence mode, turn the TV off, etc).</p>")
    .settings.css("font-size","15")
    .center()
    .print(),
    newButton("next", "Continue")
    .center()
    .print()
    .wait()
    )