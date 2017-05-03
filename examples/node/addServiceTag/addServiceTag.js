
// Import packages
var request = require('request');

// ID of device to be modified
var id = '72';

// Configure ServiceTag
var serviceTag = {
    name: 'ExampleTag',
    value: 'LWM2M',
    resetValue: 'LWM2M',
    dontCopy: true,
    resetOnCopy: false
};

// Configure HTTP POST method
var options = {
    url: 'http://your.cdp.server/rest/device/' + id + '/servicetag',
    auth: {
        user: 'username',
        pass: 'password'
    },
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(serviceTag)
};

// Execute POST
request.post(options, function(error, response, body) {
    if((error === null) && response && response.statusCode) {
        if(response.statusCode === 201) {
            console.log('Successfully added ' + serviceTag.name + ':' + serviceTag.value);
        } else if(response.statusCode === 404) {
            console.log('Device not found.');
        } else {
            console.log('Bad Request');
        }
    } else if(error) {
        console.log('Error:', error);
    }
});