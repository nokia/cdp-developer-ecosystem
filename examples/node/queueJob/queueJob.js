// Import packages
var request = require('request');

// Specify device
var deviceId = '72';

var job = {
    actionId: '65',
    needNotification: true,
    enabledNbiNotification: true
}
// Configure POST
var options = {
    url: 'http://cdpfest.nokialabs.com/rest/device/' + deviceId + '/job',
    auth: {
        user: 'oliver',
        pass: 'changem3'
    },
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(job)
}

// Execute the HTTP GET request 
request.post(options, function(error, response, body) {
    if((error === null) && response && response.statusCode) {
        if(response.statusCode === 201) {
            // Success
            console.log('Successfully queued Job');
            console.log(body);
        } else if (response.statusCode === 404) {
            // Resource not found
            console.log('Job/Device not found');
        } else {
            // Malformed request
            console.log('Bad Request');
        }
    } else if (error) {
        // Catch error
        console.log('Error:', error);
    }
});