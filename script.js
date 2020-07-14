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
        const $div = $('<div>');
        $div.append($('<h2>').text(project.title));
        $div.append($('<p>')).text(project.description);
        $div.append($('<img>').attr('src', project.image));
        $div.append($('<a>').attr('href', 'project.url'));
        return $div; //return div to hold information for forEach below
    }
    // $('body').append(createProjectElement(data[0]));
    data.forEach(project => {
        const $projectDiv = createProjectElement(project);
        $('body').append($projectDiv);
    })
}