console.log("things went perfect1");
 
// Counter code

var button = document.getElementById('counter');

button.onclick = function() {
    console.log('request created');
    
   // create a request object
   var request = new XMLHttpRequest();
   
   request.onreadystatechange = function () {
       
       // Capture the request and store it in a variable
       
       if ( request.readyState === XMLHttpRequest.DONE) {
           // Take some action
           if (request.status === 200) {
               var counter = request.responseText;
               var span = document.getElementById('count');
               span.innerHTML = counter.toString();
           }
       }
       // Not done yet
   };
   
   // Make the request
   request.open('GET', 'http://manjushaz2012.imad.hasura-app.io/counter', true);
   request.send(null);
};


// Submit name

var submit = document.getElementById('submitBtn');
submit.onclick = function() {
    
   // create a request object
   var request = new XMLHttpRequest();
   
   request.onreadystatechange = function () {
       
       // Capture the request and store it in a variable
       
       if ( request.readyState === XMLHttpRequest.DONE) {
           // Take some action
           if (request.status === 200) {
                var names=request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (var i=0; i<names.length; i++) {
                    list += '<li>' + names[i] + '</li>'; 
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
           }
       }
       // Not done yet
   };
   
   // Make the request
   var nameInput = document.getElementById('name');
   var nameValue = nameInput.value;
   request.open('GET', 'http://manjushaz2012.imad.hasura-app.io/submit-name?name=' + nameValue, true);
   request.send(null);
    
};