
function modalMonitor(){
  $(".modalProject").click(function(){
    $("#portfolioModalContent").empty();
    let projUrl = $(this).attr("data-url")
    let frame = $("<iframe>").attr({"src": projUrl, "allow": "geolocation"})
    $("#portfolioModalContent").append(frame);
    $("#porfolioModal").modal();
  })
}

$(document).ready(function(){

  modalMonitor()
// end of doc ready
})