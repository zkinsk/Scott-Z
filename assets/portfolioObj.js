const PortfolioItem = function(obj){
  this.name = obj.name;
  this.synopsis = obj.synopsis;
  this.image = obj.image;
  this.gitURL = obj.gitURL;
  this.siteURL = obj.siteURL;
  this.mobile = obj.mobile;
  this.tech = obj.tech;

  this.drawCard = function(){
    let buttons = /*html*/`<a class="btn btn-success btn-block" href="${this.siteURL}" target="_blank" role= "button" aria-pressed="true">Check It Out</a>`
    if (this.mobile){
      buttons += /*html*/ `<button class="btn btn-success btn-block modalProject mb-1 d-none d-md-block" type="button" data-url="${this.siteURL}">Mobile</button>`
    }
    let wowDuration = ((Math.random()*2) + 2).toFixed(2);
    let techList = ""
    this.tech.forEach(function(techItem){ // tech boxes
      console.log(techItem);
      techList += `<p title="Technology">${techItem}</p>`
      // console.log(this.techList);
    });
    console.log('Draw Card', techList);
    let cardCol = /*html*/`
    <div class="col-md-6 col-xl-4 wow fadeInUp" data-wow-duration="${wowDuration}s" data-wow-offset="100">
      <div class="card mb-4" >
        <img class="card-img-top img-fluid" src="${this.image}" alt="${this.name}">
        <div class="card-body">
          <div class="cardOverlay">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">${this.synopsis}</p>
            <div class="row justify-content-center">
              <div class="col-12">
                ${buttons}
                <a class="gitTag" href="${this.gitURL}" title="github repository" target="_blank"><i class="fas fa-code"></i></a>
              </div>
            </div>
          </div>
          <div class="techList">
            ${techList}
          </div>
        </div>
      </div>
    </div>
    `
    $("#portfolioRow").append(cardCol);
  } //end of draw card
}//end portfolio constructor


var portfolioArr = [
  {
    name: "Bob Ross Word Guess",
    synopsis: "Hangman styled word guess game with an homage to Bob Ross and his Happy Little Trees",
    image: "assets/images/bob-ross_header.jpg",
    gitURL: "https://github.com/zkinsk/Word-Guess-Game",
    siteURL: "https://zkinsk.github.io/Word-Guess-Game/",
    mobile: false,
    order: 10,
    tech: ["HTML", "CSS", "Javascript"]
  },
  {
    name: "Crystals Collector",
    synopsis: "A funny little game that leaves you guessing as to how to match the value of four unknown crystals to a target number.",
    image: "assets/images/Garnet_Andradite20.jpg",
    gitURL: "https://github.com/zkinsk/unit-4-gemgame",
    siteURL: "https://zkinsk.github.io/unit-4-gemgame/",
    mobile: false,
    order: 70,
    tech: ["HTML", "CSS", "jQuery"]
  },
  {
    name: "Bike to Brew",
    synopsis: "Find good brews near to your favorite trail, or explore both someplace else!",
    image: "assets/images/biketobrew_square.png",
    gitURL: "https://github.com/zkinsk/BikeToBrew",
    siteURL: "https://zkinsk.github.io/BikeToBrew/",
    mobile: true,
    order: 20,
    tech: ["Materialize", "AJAX & APIs", "jQuery"]
  },
  {
    name: "Star Wars RPG",
    synopsis: "Pick your favorite Jedi, and do battle with 3 others. Turn up the volume!",
    image: "assets/images/the-empire-strikes-back-star-wars.jpg",
    gitURL: "https://github.com/zkinsk/unit-4-RPGgame",
    siteURL: "https://zkinsk.github.io/unit-4-RPGgame/",
    mobile: false,
    order: 30,
    tech: ["HTML", "Bootstrap", "jQuery"]
  },
  {
    name: "Big Lebowski Trivia",
    synopsis: "The Dude abides and so should you. Don't roll any gutter balls!",
    image: "assets/images/big_Lebowski.jpg",
    gitURL: "https://github.com/zkinsk/TriviaGame",
    siteURL: "https://zkinsk.github.io/TriviaGame/",
    mobile: false,
    order: 50,
    tech: ["HTML", "Bootstrap", "jQuery"]
  },
  {
    name: "Gif Viewer",
    synopsis: "A nice teal and orange gif viewer using the Giphy API.",
    image: "assets/images/mtb-Bike.gif",
    gitURL: "https://github.com/zkinsk/Giphy-HW",
    siteURL: "https://zkinsk.github.io/Giphy-HW/",
    mobile: true,
    order: 40,
    tech: ["AJAX", "Bootstrap", "jQuery"]
  },
  {
    name: "MultiPlayer Rock Paper Sissors",
    synopsis: "Play rock paper sissors with your best buds and chat smack while your crack some sissors",
    image: "assets/images/RockPaperScissors.jpg",
    gitURL: "assets/images/RockPaperScissors.jpg",
    siteURL: "https://zkinsk.github.io/RPS-Multiplayer/",
    mobile: true,
    order: 60,
    tech: ["Firebase", "jQuery", "Bootstrap"]
  },
  {
    name: "liriBot",
    synopsis: "Console Line bot to find info on movies, conerts and songs.",
    image: "assets/images/siri-2.gif",
    gitURL: "https://github.com/zkinsk/liri-node-app",
    siteURL: "https://github.com/zkinsk/liri-node-app",
    mobile: false,
    order: 80,
    tech: ["nodeJS", "AJAX"]
  },
  {
    name: "Node Word Guess",
    synopsis: "Command line constructor Word Guess game built with node.js",
    image: "assets/images/constructor_word_guess.png",
    gitURL: "https://github.com/zkinsk/Constructor-WordGuess",
    siteURL: "https://github.com/zkinsk/Constructor-WordGuess",
    mobile: false,
    order: 90,
    tech: ["Constructors", "nodeJS"]
  },
  {
    name: "bAmazon",
    synopsis: "Definitely not Amazon online store using MySql and node.js",
    image: "assets/images/bamazonBox.jpg",
    gitURL: "https://github.com/zkinsk/bamazon",
    siteURL: "https://github.com/zkinsk/bamazon",
    mobile: false,
    order: 100,
    tech: ["nodeJS", "mySQL"]
  },
  {
    name: "Friend Finder",
    synopsis: "You'll never guess who you could be friends with! You're just 10 survey questions away from a new bestie.",
    image: "assets/images/friend-finder.jpg",
    gitURL: "https://github.com/zkinsk/friendFinder",
    siteURL: "https://friend-finder-sz-2.herokuapp.com/",
    mobile: true,
    order: 110,
    tech: ["nodeJS", "Heroku", "handlebars"]
  },
  {
    name: "Eat Dat Burger",
    synopsis: "Create a Burger, Chomp a Burger and watch the database update!",
    image: "assets/images/burger.gif",
    gitURL: "https://github.com/zkinsk/burger",
    siteURL: "https://burgerize-scz.herokuapp.com/",
    mobile: true,
    order: 120,
    tech: ["ORM", "nodeJS", "handlebars"]
  },
  {
    name: "Dogs Day Out",
    synopsis: "Chat with some folks, check out their dogs stats, and set up a play date!",
    image: "assets/images/two-pugs.jpg",
    gitURL: "https://github.com/zkinsk/project-2",
    siteURL: "https://dogs-day-out-2.herokuapp.com/",
    mobile: true,
    order: 5,
    tech: ["nodeJS", "sequelize", "AWS", "Heroku"]
  },
];//end of portfolio objectArray

cardOrder = {
  dogsDayOut: {
    name: "Dogs Day Out",
    order: 10,
  },
  eatDatBurger: {
    name: "Eat Dat Burger",
    order: 70,
  },
  bikeToBrew: {
    name: "Bike to Brew",
    order: 20
  },
  friendFinder: {
    name: "Friend Finder", 
    order: 30,
  },
  bAmazon: {
    name: "bAmazon", 
    order: 50
  },
  nodeWordGuess: {
    name: "Node Word Guess", 
    order: 40
  },
  bobRossWordGuess: {
    name: "Bob Ross Word Guess",
    order: 80,
  },
  crystalsCollector: {
    name: "Crystals Collector",
    order: 90,
  }
};


function drawPortolio(){
  portfolioArr.sort(function(a, b){return a.order - b.order})
  portfolioArr.forEach(function(portItem){
    let portCard = new PortfolioItem(portItem)
    portCard.drawCard();
  })
}//end of drawPorfolio fn



