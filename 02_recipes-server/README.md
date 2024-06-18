# Exercise: Recipes

Using Deno's `serve` method, build a server with the following
endpoints. Make sure to properly set the `Content-Type` header according
to the resource's type (plain text, HTML, JSON, etc.). Test each
endpoint using the browser and curl. When using curl, make sure to
examine the response with the `-v` flag.

-   GET requests with the "/" path should return an unordered list of
    anchor elements, each one corresponding to an endpoint.

-   GET requests with the "/recipes" path should return the following
    unordered list of recipes. Each type (breakfast, lunch, dinner)
    should be its own unordered sub-list. 

    -   Breakfast
        -   Avocado Toast
        -   Pancakes
        -   Smoothie Bowl
        -   Omelette
        -   French Toast
    
    -   Lunch
        -   Caesar Salad
        -   Grilled Cheese Sandwich
        -   Chicken Quesadilla
        -   Vegetable Stir-fry
        -   Tuna Salad
    
    -   Dinner
        -   Spaghetti Carbonara
        -   Grilled Salmon
        -   Beef Tacos
        -   Eggplant Parmesan
        -   Chicken Curry
    

-   GET requests with the "/api" path should return the same list of
    recipes, but in JSON format.
