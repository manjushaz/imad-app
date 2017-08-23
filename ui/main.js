// Counter code

var button = document.geElementById('counter');

button.onclick = function() {
    
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in avariable
    request.onreadystatechange = function() {
        if (request.readystate === )
    }
    
    // Render the variable in the correct span
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerhtml = counter.toString();
}