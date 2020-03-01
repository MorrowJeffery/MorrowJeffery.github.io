//globals
const aboutmeText = "Hello, i'm Jeff and I am a web developer. I have programmed for the last couple of years in several different languages and purposes. I have worked solo and with others to create varius web apps. If you would like to see some of these projects, head on over to the portfolio page or check out my github!"














//functions

//generates the homepage-the first page the user sees
function generateHomepage() {
  let contentHolder = $("#homepageHolder");
  let myName = $('<h5>').text("Jeffery Morrow").attr("id", "mainName");
  let nameDiv = $('<div>').addClass("nameDiv");
  let row1 = $('<div>').addClass("row myNav");
  let col1 = $('<div>').addClass("col s1 offset-s5");
  let col2 = $('<div>').addClass("col s1 ");
  let col3 = $('<div>').addClass("col s1 ");
  let aboutMeBUtton = $('<button>').text("About Me").addClass("navBTN").attr("id", "aboutmebtn").attr("goto", 'aboutmeholder');
  let portfolioButton = $('<button>').text("Portfolio").addClass("navBTN").attr("id", "portfoliobtn");
  let contactButton = $('<button>').text("Contact").addClass("navBTN").attr("id", "contactbtn");
 


  contentHolder.append(row1.append(col1, col2, col3));
  col1.append(aboutMeBUtton);
  col2.append(portfolioButton);
  col3.append(contactButton);
  contentHolder.append(nameDiv.append(myName));

}
//this generates a page dedicated to giving a little bit of information about me as well as a picture
function generateAboutMe() {
  let contentHolder = $("#currentpageHolder").addClass("");
  let contentHolder2 = $("<div>").addClass("container aboutmeContentHolder");
  let row1 = $('<div>').addClass("row");
  let col1 = $('<div>').addClass("col s10 offset-s1");
  let row2 = $('<div>').addClass("row");
  let col2 = $('<div>').addClass("col s12 m12");
  let row3 = $('<div>').addClass("row");
  let col3 = $('<div>').addClass("col s4 m3");
  let col4 = $('<div>').addClass("col s4 offset-s1");
  let col5 = $('<div>').addClass("col s3 offset-s1");
  let card = $('<div>').addClass("card blue-grey");
  let cardContent = $('<div>').addClass("card-content white-text");
  let cardTitle = $('<span>').addClass("card-title").text("About Me");
  let cardText1 = $('<p>').text(aboutmeText); 
  let cardImage = $('<img>').attr("src", "assets/images/PortfolioImage.jpg").addClass("cardImage");
  let HR1 = $("<hr>");
  let HR2 = $("<hr>");
  let HR3 = $("<hr>");
  let name = $("<p>").text("Jeff Morrow");
  let number = $("<p>").text("123-456-7890");
  let email = $("<p>").text("morrowjefferya@gmail.com");

  contentHolder.append(contentHolder2);
  contentHolder2.append(row1);
  row1.append(col1);
  col1.append(card);
  card.append(cardContent);
  cardContent.append(row2);
  row2.append(col2);
  col2.append(cardTitle, HR1);
  cardContent.append(row3);
  row3.append(col3, col4, col5);
  col3.append(cardImage);
  col4.append(cardText1);
  col5.append(name, HR2, number, HR3, email);
}
//this will generate the contact page that allows users to contact me once implemented
function generateContactPage() {
  let contentHolder = $("#currentpageHolder").addClass("");
  let contentHolder2 = $("<div>").addClass("container");
  let row1 = $('<div>').addClass("row");
  let col1 = $('<div>').addClass("col s12");
  let row2 = $('<div>').addClass("row");
  let col2 = $('<div>').addClass("col s12 m12");
  let card = $('<div>').addClass("card blue-grey");
  let cardContent = $('<div>').addClass("card-content white-text");
  let cardTitle = $('<span>').addClass("card-title").text("Contact");
  let HR1 = $("<hr>");
  let formctr = $("<form>");
  let formdiv1 = $("<div>").addClass("input-field");
  let formdiv2 = $("<div>").addClass("input-field");
  let formdiv3 = $("<div>").addClass("input-field");
  let namelbl = $("<label>").attr("for", "name").text("Name:");
  let nameipt = $("<input>").attr("type", "text").attr("name", "name").attr("placeholder", "").addClass("formipt");
  let emaillbl = $("<label>").attr("for", "email").text("Email:");
  let emailipt = $("<input>").attr("type", "email").attr("name", "email").attr("placeholder", "").addClass("formipt");
  let textsec = $("<textarea>").attr("type", "email").attr("name", "message").attr("placeholder", "").attr("id", "message").attr("cols", "30").attr("rows","10");
  let textlbl = $("<label>").attr("for", "message").text("Message:");
  let formbtn = $("<button>").addClass("formBtn").text("Submit");

  contentHolder.append(contentHolder2);
  contentHolder2.append(row1);
  row1.append(col1);
  col1.append(card);
  card.append(cardContent);
  cardContent.append(row2);
  row2.append(col2);
  col2.append(cardTitle, HR1);
  cardContent.append(formctr);
  formdiv1.append(namelbl, nameipt);
  formdiv2.append(emaillbl, emailipt);
  formdiv3.append(textlbl, textsec);
  formctr.append(formdiv1, formdiv2, formdiv3, formbtn);


//   <form>
//   <label for="name">Name:</label><br>
//   <input type="text" name="name" placeholder="John Snow">
//   <br>
//   <label for="email">Email:</label><br>
//   <input type="email" name="email" placeholder="email@provider.domain">
//   <br>
//   <label for="message">Message:</label> <br>
//   <textarea name="message" placeholder="Enter Message Here" id="message" cols="30" rows="10"></textarea>
//   <br>
//   <submit class="submitButton">Submit</submit>
// </form>



}
//this will generate a page dedicated to showing off a few projects that I have worked on
function generatePortfolioPage() {

}


//run at start
generateHomepage();
generateAboutMe();


//event listeners
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);
  });

  $(document).ready(function(){
    $('#aboutmebtn').on('click', function() {
      $("#currentpageHolder").empty(); //clean out the content that may have been generated before
      generateAboutMe();
    })
    $('#portfoliobtn').on('click', function() {
      $("#currentpageHolder").empty(); //clean out the content that may have been generated before
      generatePortfolioPage();
    })
    $('#contactbtn').on('click', function() {
      $("#currentpageHolder").empty(); //clean out the content that may have been generated before
      generateContactPage();
  })
});