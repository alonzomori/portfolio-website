// How to make a SPA Router using Vanilla JS
// Step 1: Create the routes 

const routes = {
   "/": "Home",
   "/about": "About Me",
   "/experience": "Experience",
   "/projects": "Projects",
};

//Step 2: Add an Event Listener that Listens For Page Navigation
    document.addEventListener('click', (e) => {     // We listen for the event on 'click'. Once the link is clicked, an event is triggered. 
        if (e.target.matches('[data-link]')) {      // If the event is placed on an element containing the 'data-link' attribute, 
            e.preventDefault();
            navigateTo(e.target.href);                     // The normal event will not take place as a result of 'preventDefault'.
        }
    
    });

    window.history.addEventListener("popstate", router);
    document.addEventListener("DOMContentLoaded", router);
// Step 3: Create the router by defining route behavior and location changes
    const route = (event) => {          // We define a route method and pass through an event. 
        event = event || window.event;  // the event is defined to occur within the browser. 'event.window' returns the event handled by the site's code.
        event.preventDefault();         // Prevents the normal behavior of the link when it's clicked.
        window.history.pushState({}, "", event.target.href); // Changes the URL of the page without reloading the page.
    }

    window.route = route;


