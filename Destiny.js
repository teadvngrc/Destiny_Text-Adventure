$(document).ready(function(){
  var whichButton;
  $("#wakeUpBtn").hide();
  $("#snoozeBtn").hide();
  $( "#prompt" ).hide();
  $( "#prompt2" ).hide();
  $( "#vid" ).hide();
  $( "#vid2" ).hide();
  $("#visual").hide();
  $( "#vid3" ).hide();

  $("#wakeUpBtn").click(function(){
      $("#wakeUpBtn").hide();
      $("#snoozeBtn").hide();
  });

  $("#show").click(function(){
      $("p").show();
  });


  });

  function start(){
    document.getElementById('myImage').src="morningbedroom.jpg";
    $("#wakeUpBtn").show();
    $("#snoozeBtn").show();
    $( "#prompt" ).show();
    $( "#startBtn" ).css("visibility", "hidden");
    $("#startBtn").css("display", "none");
  }


  function mySnooze(){
    whichButton = "snooze";
    $("#wakeUpBtn").hide();
    $("#snoozeBtn").hide();
    $("#nextBtn").css("visibility", "visible");
    $("#nextBtn").css("display", "inline");
    $( "#prompt" ).html( "Oh no! You overslept and are late for school!" );
    document.getElementById('myImage').src="snooze.jpg";
  }

  function wakeUp(){
    whichButton = "wakeUp";
  $("#wakeUpBtn").hide();
  $("#snoozeBtn").hide();
  $("#nextBtn").css("visibility", "visible");
  $( "#prompt" ).html( "You woke up in time. Now you have extra time to give a good first impression!");
  document.getElementById('myImage').src="bedroom.jpg";
  $("#nextBtn").css("visibility", "visible");
  $("#nextBtn").css("display", "inline");
}

// Happens when next button is pressed
function toClass(){
  if (whichButton === "snooze") {
    document.getElementById('myImage').src="class2.jpg";
    $("#nextBtn").remove();
    $("#nextBtn2").show();
    $( "#prompt" ).remove();
 }

 else {
    document.getElementById('myImage').src="class.jpg";
    $( "#prompt" ).remove();
    $("#nextBtn").remove();
    $("#nextBtn2").show();
  }
 }
 function toLunch(){
   if (whichButton === "wakeUp", "snooze") {
     document.getElementById('myImage').src="Lunch.gif";
     $( "#prompt" ).remove();
     $("#nextBtn3").show();
     $("#nextBtn2").remove();

   }
}

// This is for snooze part
function danielle(){
  if (whichButton === "snooze"){
    document.getElementById('myImage').src="danielle02continue.jpg";
    $("#nextBtn3").show();
    $("#nextBtn3").remove();
    $("#nextBtn4").show();
  }
  if (whichButton === "wakeUp"){
    document.getElementById('myImage').src="danielle.jpg";
    $("#nextBtn3").show();
    $("#nextBtn3").remove();
    $("#nextBtn40").show();

  }
}
function danielle02(){
  if (whichButton === "snooze"){
    document.getElementById('myImage').src="danielle02.jpg";
    $("#nextBtn4").show();
    $("#nextBtn4").remove();
    $("#nextBtn5").show();
    $( "#myImage" ).hide();
    $( "#vid" ).show();
  }
}

// This is for wakeup  part
  function danielleOpt1(){
   if (whichButton === "wakeUp"){
     document.getElementById('myImage').src="danielle2.jpg";
     $("#nextBtn40").show();
     $("#nextBtn40").remove();
     $("#nextBtn50").show();
     $( "#myImage" ).hide();
     $( "#vid" ).show();
   }
  }
  // This is what happens after the nextBtn5, nextBtn50,
  function bell(){
    if (whichButton === "snooze"){
      document.getElementById('myImage').src="message.gif";
      $("#nextBtn5").show();
      $("#nextBtn5").remove();
      $("#nextBtn6").show();
      $( "#myImage" ).show();
      $( "#vid" ).hide();

    }
     if (whichButton === "wakeUp"){
       document.getElementById('myImage').src="message.gif";
       $("#nextBtn50").show();
       $("#nextBtn50").remove();
       $("#nextBtn60").show();
       $( "#myImage" ).show();
       $( "#vid" ).hide();
     }
   }

// This is after the bell scene
function car(){
  if (whichButton === "snooze"){
    $("#visual").show();
    $("#myImage").hide();
    $("#nextBtn6").show();
    $("#nextBtn6").remove();
    $("#textbackBtn").show();
    $("#textlaterBtn").show();
    $( "#prompt2" ).html( "Do you want to text back now or text back later?");
    $( "#prompt2" ).show();

  }
   if (whichButton === "wakeUp"){
     $("#visual").show();
     $("#myImage").hide();
     $("#nextBtn60").show();
     $("#nextBtn60").remove();
     $("#textbackBtn").show();
     $("#textlaterBtn").show();
     $( "#prompt2" ).html( "Do you want to text back now or text back later?");
     $( "#prompt2" ).show();
   }
 }
 function textBack(){
   if (whichButton === "snooze","wakeUp"){
     $("#myImage").hide();
     $("#visual").hide();
     $("#vid2").show();
     $("#textbackBtn").hide();
     $("#textlaterBtn").hide();
     $( "#prompt2" ).hide();
   }
 }
 function textLater(){
   if (whichButton === "snooze","wakeUp"){
     $("#myImage").hide();
     $("#visual").hide();
     $("#vid2").hide();
     $("#vid3").show();
     $("#textbackBtn").hide();
     $("#textlaterBtn").hide();
     $( "#prompt2" ).hide();
   }
 }
