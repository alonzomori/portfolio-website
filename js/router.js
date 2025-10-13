// How to make a SPA Router using Vanilla JS
// Step 1: Create the Router
const route = (event) => { // We define a variable called "route" which we pass an event argument into.
    event = event || window.event; // Captures the click event for the link.
    event.preventDefault(); // We prevent the natural behavior of the link when it's clicked.
    window.history.pushState({}, "", event.target.href); // This updates the URL in the browser without reloading the page.
    handleLocation();
};

//Step 3: Define the routes for the path.
    const routes = {
        404: "/pages/404.html",
        "/": "/pages/home.html",
        "/about": "/pages/about.html",
        "/experience": "/pages/experience.html",
        "/projects": "/pages/projects.html",
    };



//Step 2: Create a function that will handlie the changing of our location whenever navigation occurs. 
const handleLocation = async() => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404]
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();