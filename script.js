// public google sheet url
// https://docs.google.com/spreadsheets/d/1RojHETPzn_xzL_3hOaI8kawOhtHdEpOLU-eutpSLwTA/edit#gid=0

// JSON link url
// https://spreadsheets.google.com/feeds/list/1RojHETPzn_xzL_3hOaI8kawOhtHdEpOLU-eutpSLwTA/od6/public/values?alt=json

// JSON
let url = `https://spreadsheets.google.com/feeds/list/1RojHETPzn_xzL_3hOaI8kawOhtHdEpOLU-eutpSLwTA/od6/public/values?alt=json`

// credit: https://git.generalassemb.ly/SEIR-629/JSON-and-jQuery
fetch(url)  // starts the fetch process
       .then(response => response.json()) // returns the JSON data as a JS object
       .then(data => { //returns array of information
           const projects = data.feed.entry.map(entry => {
            return { //returns new object with the following properties
                title: entry.gsx$title.$t, //project title
                image: entry.gsx$image.$t, //project image
                description: entry.gsx$description.$t, //project description
                url: entry.gsx$url.$t, //project url
                preview: entry.gsx$preview.$t //project screenshot
             }
           })
           app(projects); //call app function
       });

//credit: https://git.generalassemb.ly/SEIR-629/JSON-and-jQuery
const app = (data) => {
    const createProjectElement = (project) => {
        //columns
        const $div = $('<div class="col-md-6 col-lg-3">');
        $('.projects-body').append($div);

        //nested card
        const $div2 = $('<div class="card project-card">');
        $div2.append($('<img class="card-img-top">').attr('src', project.image));
        $div.append($div2);
        
        //nested card information
        const $div3 = $('<div class="card-body">');
        $div3.append($('<h5 class="card-title">').text(project.title));
        $div3.append($('<p class="card-text">').text(project.description));
        $div2.append($div3);

        //buttons
        $div3.append($('<a class="btn btn-primary projects-buttons" target="_blank">').text('Preview').attr('href', project.preview));
        $div3.append($('<a class="btn btn-primary projects-buttons" target="_blank">').text('Codepen').attr('href', project.url));
    
    }
    
    data.forEach(project => {
        const $projectDiv = createProjectElement(project);
        $('.projects-body').append($projectDiv);
    })
}

// credit: https://www.superhi.com/blog/how-to-add-web-design-elements-that-fade-in-and-out-on-scroll
$(document).on("scroll", function() {
    //variable to see how far down the page scrolled
    var $pageTop = $(document).scrollTop();
    var $pageBottom = $pageTop + $(window).height();
    
    //fade in classes set to variables
    var $cards = $('.card');
    var $contact = $('.contact-div');

    //loop to see if card is in frame
    for (let i = 0; i < $cards.length; i++) {
        let card = $cards[i];
        //if in frame, make card visible
       if ($(card).position().top < $pageBottom) {
           $(card).addClass("visible");
       }
    }
    // if div is in frame, make div visible
    if ($($contact).position().top < $pageBottom) {
        $($contact).addClass("visible");
    }
});

//after half a second, make the jumbotron text visible
setInterval(function() {
    $('.jumbotron-text').addClass("visible");
}, .500);

//after second, make jumbotron button visible
setInterval(function() {
    $('.jumbotron-button').addClass("visible");
}, 1250);

//smooth scroll when clicking buttons
// credit: https://dev.to/attacomsian/smooth-scroll-to-page-section-with-jquery-2jng#:~:text=Here%20is%20a%20little%20jQuery,This%20value%20is%20in%20milliseconds.

$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1500, 'swing');
});