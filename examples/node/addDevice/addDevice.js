// Imports
var request = require('request');

var device = {
    deviceId: 'Your First LWM2M Device!',
    model: 'LWM2M Generic Device',
    manufacturer: 'Generic',
    inUse: true
}

var options = {
    url: 'http://cdpfest.nokialabs.com/rest/device',
    auth: {
        user: 'oliver',
        pass: 'changem3'
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