
const aboutMe =`
<p>I am a family man, father of two. My wife and I work together to raise two of my favorite people in the world to spend time with.</p>

<p>I am an avid mountain biker and dirt bike rider.  As a kid I rode my BMX bike everywhere and over everything. As an adult I still ride my bikes over anything that I can. </p>
        
<p>I have a bachelor’s degree in religious studies from Virginia Commonwealth University. I started school trying to get my degree in physics, but a road trip across country changed that. I spent at least a year living mostly out of my car, but sometimes paying rent here or there.  Along the way I met born again Christians speaking in tongues in strip mall parking lots of nowhere Georgia. I met hippies in clothing optional hot springs in the middle of Death Valley. I met actors chanting yoga mantras in Las Angeles. I met Shinto practitioners tending their Japanese gardens. I met kids hopping trains to New Orleans to eat mangos in abandoned buildings. In short I met a lot of people doing a lot of things that were right there in some sort of spiritual and religious yearning. So I changed my major. </p>
        
<p>I spent years as a mechanic. I have worked on cars, trucks, scooters and motorcycles. As a scooter mechanic I was paid in beer.  That job didn’t last long. For a while I was a boat mechanic crawling around in musty, moldy and sometimes rotten boats of anyone who would drag their lump to our shop. That soggy job didn’t last much longer.</p>
        
<p>I have been the land surveyor tromping through the woods around your house.  I was that guy on the side of road looking through that thing on the tripod. I have been eaten up by ticks, stung by yellow jackets and up to my knees in mud.  I have circled swamps in chest high grass, and amazingly have never been bitten by a snake.</p> 
        
<p>Currently I am a land surveyor who sits behind a desk. I take subdivision designs from engineers and translate those designs into actual infrastructure on and in the ground. I am usually the first person in years to walk through a big piece of property. Then after we have subdivided the land, installed all the infrastructure and built the house, I am often the last person to leave before the new homeowner unlocks the front door.</p>

<p>Now I am involved in a University of Richmond Full Stack Coding Boot Camp and I love it. I am excited to learn new technologies and apply them.  The process is fantastic, learn a tech, apply it immediately in an activity or assignment and see the reults on the spot. I love plugging through javascript, splitting functions to add new features, building objects to contain functionality and solving process puzzles. It is changing the way I think!</p>`;

const myCoding = `
<h5>
  I am a full stack developer in Richmond Va who feels equally at home working anywhere in the MERN Stack.</br></br>
  I have a passion for writing clean and clear code that is easy to maintain. </br></br>
  My skills on the front end include: HTML, CSS(& various libraries), SASS, javascript, jQuery and React.</br></br>
  On the back end I have experience with: nodeJs, Express, Express Handlebars, mySQL, Sequelize, Mongo, and Mongoose. </br></br>
  I am also well versed in version control using Github. 
</h5>
`

const modalHeader = `
<div class="modal-header about-me">
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`;

const modalFooter = `
<div class="modal-footer about-me">
</div>
`;

function writeMyDetails(){
$("#aboutMe").append(myCoding);
}//end my details

$(document).ready(function(){
  writeMyDetails()
})