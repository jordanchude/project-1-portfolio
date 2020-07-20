# Project Overview

## Final Website
- [Preview](https://github.com/jordanchude/project-1-portfolio/tree/master/final-preview)
- [Live Website](https://jordanspersonalportfolio.netlify.app/)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 2| Bootstrap Implementation | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Incomplete


## Project Description

For my final website, as a top to bottom description, I am going to have a navigation bar with several links at the top of the page, with links pushed to the left of the navigation and myy name at the right of the description. At a certain width, the navigation bar will turn into a hamburger, with no links visible until the user hits the button.

Under the navigation bar, I am going to have a hero section with a larger, horizontal-dimensioned photo of myself with the text "Jordan Williams" centered and "Podcast Host, Artist Management Consultant, Software" under it. If I have time, I am going to use Javascript to fade in the hero text, button, skills cards, and project cards, once they've been scrolled over.

Under it, I plan on having three equally sized sections, size by side, that explain my skill sets. One for web development, one for consulting, and one for designing. In each section, I'll have a list of what each of those skill sets can offer the user.

Under that section, I want to use a grid-like format for web development projects with a screenshot of each project and a button under the screenshot to view on Codepen. If I have time, I also want to have the same format extend to a few Instagram videos from my podcast. 

Finally, I am going to have a google contact form and a footer at the bottom of the page with my social media links.

## Google Sheet

- [Projects](https://docs.google.com/spreadsheets/d/1V1M3Eq1NXH2PNmeTlVviRhEjX9kenq769Vo2P5mMtro/edit#gid=0)

## Wireframes

- [Mobile](https://res.cloudinary.com/dpjdvsigb/image/upload/v1594586519/Mobile_lnvbtw.png)
- [Tablet](https://res.cloudinary.com/dpjdvsigb/image/upload/v1594586521/Tablet_rejiut.png)
- [Desktop](https://res.cloudinary.com/dpjdvsigb/image/upload/v1594586520/Laptop_zwcak5.png)


## Time/Priority Matrix 

- [Matrix](https://res.cloudinary.com/dpjdvsigb/image/upload/v1595014213/time-priority-matrix_qe6km8.jpg)
- [Key](https://res.cloudinary.com/dpjdvsigb/image/upload/v1595014447/time-priority-matrix-key_fnqehg.jpg)

#### MVP

- Create wireframe layouts for mobile, tablet, and desktop
- Use HTML and CSS to create website hero/"About" section, "Skills" "Projects", and "Contact" sections
- Create navigation bar for desktop and hamburger menu for mobile navigation 
- Use Javascript to make website dynamic with external API
- Use Bootstrap, Flexbox, Grid to organize content in aesthetically pleasing way
- Make website responsive for mobile, tablet, and desktop
- Test website for complete responsiveness
- Deploy website via Netlify

#### PostMVP 

- Use Javascript to add aesthetically pleasing effects to website (e.g. fade in)
- Make hero image a carousel with images pulled from API
- Add responsive "Podcast Clips" section
- Add social media icons under contact section
- Upon hover, increase size and drop shadow of projects
- Make footer text dynamic

## Functional Components
#### MVP
| Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: |
| Design Research | H | 1hr | 1hr |
| Wireframing | H | 2hr | 2.5hr |
| Bootstrap Implementation | H | 3hr | 5hr |
| Navigation Skeleton - Mobile, Tablet, and Desktop | H | 2hr | 1hr |
| Hero Skeleton - Mobile, Tablet, and Desktop | M | 2hr | 1hr |
| Skills Skeleton - Mobile, Tablet, and Desktop | H | 2hr | 1hr |
| Projects Skeleton - Mobile, Tablet, and Desktop | M | 2hr| 1hr |
| JSON Implementation | H | 2hr | 1hr |
| Google Contact Form | H | 1hr| 4.5hr |
| Navbar Styling | M | 1hr | 1hr |
| Hero Styling | M | 1hr | 1hr |
| Skill Styling | H | 1hr | 1hr |
| Projects Styling | H | 2hr | 1hr |
| Form Styling | H | 1hr | 1hr | -hr|
| Footer Grid Layout | H | 2hr | 1hr |
| Deployment | H | 2hr | .5hr |
| Debugging | H | 3hr | 2hr |
| Refactor | H | 2hr | 1hr |
| Documentation | H | 1hr | 2.5hr |
| Total | H | 33hrs| 30hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: |
| Element Fade In Functionality | M | 2hr | 2hr |
| Smooth Scrolling for Links | L | 1hr | .5hr |
| Social Media Icons | L | 1hr | .5hr |
| Podcast Clips Skeleton - Mobile, Tablet, and Desktop | M | 2hr | -hr |
| Footer with Dynamically Sized Text | L | 1hr | -hr |
| Hero Carousel with images pulled from external API | L | 2hr | -hr |
| Project Section Hover Responsiveness | L | 1hr | -hr |
| Total | H | 10hrs| 3hrs |

## Additional Libraries
 - [Bootstrap](https://getbootstrap.com/)
 - [jQuery](https://jquery.com/)
 - [Font Awesome](https://fontawesome.com/)

## Code Snippet
The code below fades in each of the website's cards and contact section when scrolled over.
- [Source](https://www.superhi.com/blog/how-to-add-web-design-elements-that-fade-in-and-out-on-scroll)
```
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
```

## Issues and Resolutions
- In the navigation bar, the border around the 'CONTACT' link deformed when in the mobile hamburger. In response, I selected the link in a media query and removed the border altogether when the hamburger is active.
- The description in the hero/"About" section is difficult to read on smaller screens and also pushed up the title, "Jordan Williams," off of frame. In response, if the page is smaller than 768 pixels, the description will be removed from the page.
- In the "Projects" section, not all of the cards were of equal height after being created in jQuery, and it made the margins for each card react differently on different screens. In response, I made all of the cards of equal width and height for all screens so added margins around them would look identical for each card.
- Connecting the Google Form backend to the website's form was difficult, with the biggest problem being that the form would not submit. Instead, it forwarded the user to the Google Form that the web form was connected to and have inputs pre-filled out but not submitted. In response, I used the Dev Tools in Google Chrome to look at the Google Form's HTML to make sure I used the correct attributes in my web form as opposed to originally looking at the Google Form's page source.
