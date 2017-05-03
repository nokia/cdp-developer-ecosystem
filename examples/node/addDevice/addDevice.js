// Imports
var request = require('request');


// Create the device object
var device = {
    deviceId: 'Your First LWM2M Device!',
    model: 'LWM2M Generic Device',
    manufacturer: 'Generic',
    inUse: true
}

// Configure options for the HTTP POST method
var options = {
    url: 'http://your.cdp.server/rest/device',
    auth: {
        user: 'username',
        pass: 'password'
    },
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(device)
}

request.post(options, function(error, response, body) {
    if(error != null) {
        console.log('Error:', error);
    } else if((error === null) && response && response.statusCode) {
        if(response.statusCode === 201) {
            console.log('Successfully added ' + device.deviceId + ' to ' + options.url);
        } else {
            console.log('Bad Request');
        }
    }
});