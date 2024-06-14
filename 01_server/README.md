# Exercise: REST server

Using Deno's `serve` method, build a server with the following
endpoints. Make sure to properly set the `Content-Type` header according
to the resource's type (plain text, HTML, JSON, etc.). Test each
endpoint using the browser and curl. When using curl, make sure to
examine the response with the `-v` flag.

-   GET requests with the "/" path should return an HTML document with
    the section title "Homepage".

-   GET requests with the "/about" path should return the first paragraph
    of MDN's [article][] on the `Content-Type` representation header
    (you can simply copy it).

-   GET requests with the "/api" path should return the following
    JavaScript object in JSON format. Given a JavaScript value, the
    builtin `JSON.stringify` method returns its JSON representation.
    
    ```js
    { user: "Moushi", age: 36 }
    ```

[article]:
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
