// Submit username and password to login

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    
   // create a request object
   var request = new XMLHttpRequest();
   
   request.onreadystatechange = function () {
       
       // Capture the request and store it in a variable
       
       if ( request.readyState === XMLHttpRequest.DONE) {
           // Take some action
           if (request.status === 200) {
               console.log('user loggedin');
               alert('Logged in successfully');
            } else if (request.status ===403) {
                    alert('Username/password is incorrect.');
            } else if (request.staus === 500) {
                        alert('Something went wrong on the server.');
            }
       }
       // Not done yet
   };
   
   // Make the request
   
   var username = document.getElementById('username');
   var password = document.getElementById('password');
   console.log(username);
   console.log(password);
   request.open('POST', 'http://manjushaz2012.imad.hasura-app.io/login', true);
   request.setRequestHeader('Conternt-Type', 'application/json');
   request.send(JSON.stringify({username: username, password: password}));
    
};