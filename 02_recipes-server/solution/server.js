// Request -> Response
function handler(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    const recipes = {
        "Breakfast": [ "Avocado Toast", "Pancakes" ],
        "Lunch": [ "Ceasar Salad", "Grilled Cheese" ],
        "Dinner": [ "Spaghetti", "Salmon" ]
    };
    if (path === "/") {
        const navItems = ["/", "/recipes", "/api"];
        const body = nav(navItems);
        const options = { headers: { "content-type": "text/html" } };
        return new Response(body, options);
    }
    if (path === "/recipes") {
        const options = { headers: { "content-type": "text/html" } };
        const body = recipeTypesList(recipes);
        return new Response(body, options);
    }
    if (path === "/api") {
        const body = JSON.stringify(recipes);
        const options = { headers: { "content-type": "application/json" } };
        return new Response(body, options);
    }
}

// Array -> String
function nav(navItems) {
    let nav = "<nav><ul>";
    for (const item of navItems) {
        nav += `<li><a href="${item}">${item}</a></li>`;
    }
    nav += "</ul></nav>";
    return nav; 
}

// Object -> String
function recipeTypesList(types) {
    let list = "<ul>";
    for (const type in types) {
        list += `<li><h2>${type}</h2>`; 
        console.log(type);
        list += recipesList(types[type]);
        list += "</li>";
    }
    list += "</ul>";
    return list;
}

// Array -> String
function recipesList(recipes) {
    let list = "<ul>";
    for (const recipe of recipes) {
        list += `<li>${recipe}</li>`;
        console.log(" ", recipe);
    }
    list += "</ul>";
    return list;
}

Deno.serve(handler);
