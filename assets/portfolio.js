var config = {
  apiKey: "AIzaSyBJDXzudh6eMwDmTWJ-FHAUayeHrHYVTMg",
  authDomain: "contact-me-a1f91.firebaseapp.com",
  databaseURL: "https://contact-me-a1f91.firebaseio.com",
  projectId: "contact-me-a1f91",
  storageBucket: "contact-me-a1f91.appspot.com",
  messagingSenderId: "708955501166"
};
firebase.initializeApp(config);

var database =firebase.database();
var messageDB = database.ref("/messages");

function modalMonitor(){
  $(".modalProject").click(function(){
    $("#portfolioModalContent").empty();
    let projUrl = $(this).attr("data-url")
    let frame = $("<iframe>").attr({"src": projUrl, "allow": "geolocation"})
    $("#portfolioModalContent").append(frame);
    $("#porfolioModal").modal();
  })
}

function clickButtons(){
$("#contactModal").on("click", "#messageSend", function(){
    let senderName = $("#sender-name").val();
    let senderEmail = $("#sender-email").val();
    let senderMessage = $("#sender-message").val();
    setTimeout(function(){$('#contactModal').modal('hide', )}, 1000)
    $("#sender-name, #sender-email, #sender-message").val("");
    $("#sender-message").val("Thanks!");
    $("#contactModal").on("hidden.bs.modal", function(){
    $("#sender-message").val("");
    })	
    messageDB.push({
      name: senderName,
      senderEmail: senderEmail,
      senderMessage: senderMessage,
    })
  })

  $("#portfolioButton").on("click", function(){
    let scrollLoc = $(this).attr("data-scroll");
    $('html, body').animate({
      scrollTop: ($(scrollLoc).offset().top) - 320
    }, 3000,)
  });
};

$(document).ready(function(){

  modalMonitor()
  clickButtons()
  $('.gitTag').tooltip({placement: "bottom"})
  setTimeout(function(){objectTest()}, 2000)
// end of doc ready
})