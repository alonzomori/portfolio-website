// How to make a SPA Router using Vanilla JS
// Step 1: Create the Router
const route = (event) => {
    event = event || window.event; // Captures the click event for the link.
    event.preventDefault(); // We prevent the natural behavior of the link when it's clicked.
    window.history.pushState({}, "", event.target.href); // This updates the URL in the browser without reloading the page.

};



window.route = route;
