function handler(request) {
    const segments = request.url.split("/");
    const path = segments[segments.length - 1];
    if (path === "") {
        const options = { headers: { "content-type": "text/html" } };
        return new Response("<h1>Homepage</h1>", options);
    }
    if (path === "about") {
        const options = { headers: { "content-type": "text/html" } };
        const body =
            "The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).";
        return new Response(body, options);
    }
    if (path === "api") {
        const options = { headers: { "content-type": "application/json" } };
        const data = { user: "Moushi", age: 36 };
        const body = JSON.stringify(data);
        return new Response(body, options);
    }
}

Deno.serve(handler);
