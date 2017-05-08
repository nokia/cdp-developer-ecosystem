/* Nokia Connected Device Platform NBI API Demos (Node.js)
 * 
 * POST: /rest/device/{deviceId}/servicetag
 * 
 * Description: This URI will allow you to create a new service tag attached to the
 * specified device
 * 
 * 201 - OK/Created - Successfully added the service tag
 * 500 - Internal Server Error - Malformed JSON payload
 * 
 * @author Oliver Upton
 * 
 */

// Import packages
var request = require('request');

// Device ID obtained from the 'getDevices' example
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