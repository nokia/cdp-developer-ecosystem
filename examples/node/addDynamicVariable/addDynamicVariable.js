// Import packages
var request = require('request');

// Device ID
var id = '72';

// Configure the dynamic variable
var dynamicVariable = {
    name: 'TestDynamicVariable',
    value: 'Test',
    resetValue: 'Test',
    encrypt: false,
    resetOnCopy: false,
    dontCopy: true
};

// Configure the HTTP POST method
var options = {
    url: 'http://your.cdp.server/rest/device/' + id + '/dynamicvariable',
    auth: {
        user: 'username',
        pass: 'password'
    },
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dynamicVariable)
};

// Execute the method
request.post(options, function(error, response, body) {
    if((error === null) && response && response.statusCode) {
        if(response.statusCode === 201) {
            console.log('Successfully added ' + dynamicVariable.name + ':' + dynamicVariable.value);
        } else if(response.statusCode === 404) {
            console.log('Device not found');
        } else {
            console.log('Bad request', body);
        }
    } else if(error) {
        console.log('Error:', error);
    }
});