let PortfolioItem = function(obj){
  this.name = obj.name;
  this.synopsis = obj.synopsis;
  this.image = obj.image;
  this.gitURL = obj.gitURL;
  this.siteURL = obj.siteURL;
  this.mobile = obj.mobile;
  this.drawCard = function(){
    let cardCol = $("<div>").addClass("col-md-6 col-xl-4");
    let card = $("<div>").addClass("card mb-2")
    let img = $("<img>").addClass("card-img-top img-fluid").attr({"src": this.image, "alt": this.name})
    let cardBody = $("<div>").addClass("card-body")
    let overlay = $("<div>").addClass("cardOverlay");
    let overlayaTag = $("<a>").addClass("gitTag").attr({"href": this.gitURL, "title": "github repository", "target": "_blank"});
    overlayaTag.html(`<i class="fas fa-code"></i>`)
    let overlayTitle = $("<h5>").addClass("card-title").text(this.name);
    let overlayText = $("<p>").addClass("card-text").text(this.synopsis);
    let overlayButtonRow = $("<div>").addClass("row justify-content-center");
    let overlayButtonCol = $("<div>").addClass("col-12");
    let buttonaTag = $("<a>").addClass("btn btn-success btn-block").attr({"href": this.siteURL,"target": "_blank", "role": "button", "aria-pressed": "true"}).text("Check It Out")
    if (this.mobile){
      let mobilebtn = $("<button>").addClass("btn btn-success btn-block modalProject mb-1 d-none d-md-block");
      mobilebtn.attr({"type": "button", "data-url": this.siteURL}).text("Mobile");
      overlayButtonCol.append(mobilebtn);
    }
    overlayButtonCol.append(buttonaTag);
    overlayButtonRow.append(overlayButtonCol);
    cardBody.append(overlay.append(overlayaTag, overlayTitle, overlayText, overlayButtonRow));
    cardCol.append(card.append(img, cardBody));
    $("#portfolioRow").append(cardCol);
  }
}//end portfolio constructor


var portfolioArr = [
  {
    name: "Bob Ross Word Guess",
    synopsis: "Hangman styled word guess game with an homage to Bob Ross and his Happy Little Trees",
    image: "assets/images/bob-ross_header.jpg",
    gitURL: "https://github.com/zkinsk/Word-Guess-Game",
    siteURL: "https://zkinsk.github.io/Word-Guess-Game/",
    mobile: false,
    order: 10
  },
  {
    name: "Crystals Collector",
    synopsis: "A funny little game that leaves you guessing as to how to match the value of four unknown crystals to a target number.",
    image: "assets/images/Garnet_Andradite20.jpg",
    gitURL: "https://github.com/zkinsk/unit-4-gemgame",
    siteURL: "https://zkinsk.github.io/unit-4-gemgame/",
    mobile: false,
    order: 70
  },
  {
    name: "Bike to Brew",
    synopsis: "Find good brews near to your favorite trail, or explore both someplace else!",
    image: "assets/images/biketobrew_square.png",
    gitURL: "https://github.com/zkinsk/BikeToBrew",
    siteURL: "https://zkinsk.github.io/BikeToBrew/",
    mobile: true,
    order: 20
  },
  {
    name: "Star Wars RPG",
    synopsis: "Pick your favorite Jedi, and do battle with 3 others. Turn up the volume!",
    image: "assets/images/the-empire-strikes-back-star-wars.jpg",
    gitURL: "https://github.com/zkinsk/unit-4-RPGgame",
    siteURL: "https://zkinsk.github.io/unit-4-RPGgame/",
    mobile: false,
    order: 30
  },
  {
    name: "Big Lebowski Trivia",
    synopsis: "The Dude abides and so should you. Don't roll any gutter balls!",
    image: "assets/images/big_Lebowski.jpg",
    gitURL: "https://github.com/zkinsk/TriviaGame",
    siteURL: "https://zkinsk.github.io/TriviaGame/",
    mobile: false,
    order: 50
  },
  {
    name: "Gif Viewer",
    synopsis: "A nice teal and orange gif viewer using the Giphy API<",
    image: "assets/images/mtb-Bike.gif",
    gitURL: "https://github.com/zkinsk/Giphy-HW",
    siteURL: "https://zkinsk.github.io/Giphy-HW/",
    mobile: true,
    order: 40
  },
  {
    name: "MultiPlayer Rock Paper Sissors",
    synopsis: "Play rock paper sissors with your best buds and chat smack while your crack some sissors",
    image: "assets/images/RockPaperScissors.jpg",
    gitURL: "assets/images/RockPaperScissors.jpg",
    siteURL: "https://zkinsk.github.io/RPS-Multiplayer/",
    mobile: true,
    order: 60
  },
  {
    name: "liriBot",
    synopsis: "Console Line bot to find info on movies, conerts and songs.",
    image: "assets/images/siri-2.gif",
    gitURL: "https://github.com/zkinsk/liri-node-app",
    siteURL: "https://github.com/zkinsk/liri-node-app",
    mobile: false,
    order: 80
  },
  {
    name: "Node Word Guess",
    synopsis: "Command line constructor Word Guess game built with node.js",
    image: "assets/images/constructor_word_guess.png",
    gitURL: "https://github.com/zkinsk/Constructor-WordGuess",
    siteURL: "https://github.com/zkinsk/Constructor-WordGuess",
    mobile: false,
    order: 90
  },
  {
    name: "bAmazon",
    synopsis: "Definitely not Amazon online store using MySql and node.js",
    image: "assets/images/bamazonBox.jpg",
    gitURL: "https://github.com/zkinsk/bamazon",
    siteURL: "https://github.com/zkinsk/bamazon",
    mobile: false,
    order: 100
  },
  {
    name: "Friend Finder",
    synopsis: "You'll never guess who you could be friends with! You're just 10 survey questions away from a new bestie.",
    image: "assets/images/friend-finder.jpg",
    gitURL: "https://github.com/zkinsk/friendFinder",
    siteURL: "https://friend-finder-sz-2.herokuapp.com/",
    mobile: false,
    order: 110
  },
];


function drawPortolio(){
  portfolioArr.sort(function(a, b){return a.order - b.order})
  portfolioArr.forEach(function(portItem){
    let portCard = new PortfolioItem(portItem)
    portCard.drawCard();
  })
}//end of drawPorfolio fn



