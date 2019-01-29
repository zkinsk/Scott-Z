let PortfolioItem = function(name, synopsis, image, gitURL, siteURL, mobile){
  this.name = name;
  this.synopsis = synopsis;
  this.image = image;
  this.gitURL = gitURL;
  this.siteURL =siteURL;
  this.mobile = movile;
  this.drawCard = function(){
    let cardCol = $("<div>").addClass("col-md-6 col-xl-4");
    let card = $("<div>").addClass("card mb-2")
    let img = $("<img>").addClass("card-img-top img-fluid")
    let cardBody = $("<div>").addClass("card-body")
    // let overLay = $("<div>").addClass("cardOverlay").html()
    let overLay = $(`<div class=""cardOverlay"><a href="${this.gitURL} class="gitTag" title="github repository"
      target="_blank"><<i class="fas fa-code"></i></a>
      <h5> class="card-title">${this.name}</h5>
      <p class="card-text">${this.synopsis}</p>
      <div class"row justify-content-center">`)
    


  }

}
