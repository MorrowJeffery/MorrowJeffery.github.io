//globals















//functions

function generateHomepage() {
  let contentHolder = $("#homepageHolder");
  let myName = $('<h5>').text("Jeffery Morrow").attr("id", "mainName");
  let nameDiv = $('<div>').addClass("nameDiv");
  let row1 = $('<div>').addClass("row myNav");
  let col1 = $('<div>').addClass("col s2 offset-s1");
  let col2 = $('<div>').addClass("col s2 offset-s2");
  let col3 = $('<div>').addClass("col s2 offset-s3");
  let aboutMeBUtton = $('<button>').text("About Me").addClass("navBTN").attr("id", "aboutmebtn").attr("goto", 'aboutmeholder');
  let portfolioButton = $('<button>').text("Portfolio").addClass("navBTN").attr("id", "portfoliobtn");
  let contactButton = $('<button>').text("Contact").addClass("navBTN").attr("id", "contactbtn");

  contentHolder.append(row1.append(col1, col2, col3));
  col1.append(aboutMeBUtton);
  col2.append(portfolioButton);
  col3.append(contactButton);
  contentHolder.append(nameDiv.append(myName));

}

function generateAboutMe() {
  let contentHolder = $("#aboutmeholder").addClass("container");
  let row1 = $('<div>').addClass("row");
  let col1 = $('<div>').addClass("col s12 m10");
  let card = $('<div>').addClass("card blue-grey");
  let cardContent = $('<div>').addClass("card-content white-text");
  let cardTitle = $('<span>').addClass("card-title").text("Title");
  let cardText1 = $('<p>').text("placeholder text"); 
  let cardImage = $('<img>').attr("src", "assets/images/PortfolioImage.jpg").addClass("cardImage");
  let HR = $("<hr>");

  contentHolder.append(row1);
  row1.append(col1);
  col1.append(card);
  card.append(cardContent);
  cardContent.append(cardTitle, HR, cardImage, cardText1);

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
      var id = "#" + $(this).attr('goto');
      var top = $(id).position().top;
      $('html').scrollTop(top);
    })
    $('#portfoliobtn').on('click', function() {
      
    })
    $('#contactbtn').on('click', function() {
    
  })
});