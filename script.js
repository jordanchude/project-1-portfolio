// public google sheet url
// https://docs.google.com/spreadsheets/d/1RojHETPzn_xzL_3hOaI8kawOhtHdEpOLU-eutpSLwTA/edit#gid=0

// JSON link url
// https://spreadsheets.google.com/feeds/list/1RojHETPzn_xzL_3hOaI8kawOhtHdEpOLU-eutpSLwTA/od6/public/values?alt=json


let url = `https://spreadsheets.google.com/feeds/list/1RojHETPzn_xzL_3hOaI8kawOhtHdEpOLU-eutpSLwTA/od6/public/values?alt=json`

fetch(url)  // starts the fetch process
       .then(response => response.json()) // returns the JSON data as a JS object
       .then(data => {
        //    console.log(data.feed.entry); //returns array of information
           const projects = data.feed.entry.map(entry => {
            return { //returns new object with the following properties
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t
             }
           })
        //    console.log(projects);
           app(projects);
       });

const app = (data) => {
    console.log('app is running!');
    console.log(data);

    const createProjectElement = (project) => {
        const $div = $('<div class="col-md-6 col-lg-3">');
        const $div2 = $('<div class="card project-card">');
        $div.append($div2);
        $div2.append($('<img class="card-img-top">').attr('src', project.image));
        
        const $div3 = $('<div class="card-body">');
        $div2.append($div3);

        $div3.append($('<h5 class="card-title">').text(project.title));

        $div3.append($('<p class="card-text">').text(project.description));

        //buttons
        $div3.append($('<a href="#" class="btn btn-primary">').text('Preview'))
        $div3.append($('<a href="#" class="btn btn-primary">').text('Code'))

        $('.projects-body').append($div);
    
    }
    // $('body').append(createProjectElement(data[0]));
    data.forEach(project => {
        const $projectDiv = createProjectElement(project);
        $('.projects-body').append($projectDiv);
    })
}