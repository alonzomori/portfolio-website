// How to make a SPA Router using Vanilla JS
// Step 1: Create the Router
const route = (event) => { // We define a variable called "route" which we pass an event argument into.
    event = event || window.event; // Captures the click event for the link.
    const target = event.target.closest("[data-link]"); // We store the attribute "data-link" in the target object
    // The above line states that any element that has the 'data-link' attribute is stored the target variable. 
    if (!target) return; // In this function, we make the condition that if it doesn't have the 'data-link' attribute, nothing happens.  
    event.preventDefault();  // We prevent the natural behavior of the link when it's clicked.
    window.history.pushState({}, "", target.href); // This updates the URL in the browser without reloading the page.
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
const handleLocation = async() => {     // Next, we store an async function in our handleLocation variable.
    const path = window.location.pathname; // In our path variable, we store the url path. 
    const route = routes[path] || routes[404] // We store the url routes and path in our route variable.
    const html = await fetch(route).then((data) => data.text()); // In our html variable, we get the the routes and paths and convert the data into text. 
    // fetch(route) send an HTTP request to get the what is stored in route.
    document.getElementById("main-page").innerHTML = html; 
    // We retrieve the html element that has the id "main-page" and inject the fetched html into that part of the page. 
}

// window.onpopstate = handleLocation;
// window.route = route;

// document.addEventListener("click", route);
handleLocation();