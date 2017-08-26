 console.log("things went perfect1");
// Counter code

var button = document.getElementById('counter');

button.onclick = function() {
    
    console.log("things went perfect2");

    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in avariable
    request.onreadystatechange = function() {
        console.log("things went perfect");
        if (request.readystate === XMLHttpRequest.DONE ) {
            // Take some action.
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                console.log("things went perfect");
                console.log(span.innerHTML);
            }
        }
        // Not done yet
        
    };
    
    // Make the request
    
    request.open('GET', 'http://manjushaz2012.imad.hasura-app.io/counter', true);
    request.send(null);
};