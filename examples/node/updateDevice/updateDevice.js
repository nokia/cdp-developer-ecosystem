/* Nokia Connected Device Platform NBI API Demos (Node.js)
 * 
 * PUT: /rest/device/{deviceId}
 * 
 * Description: This URI will allow you to create update a device in the CDP console. The API returns 
 * no response body, and the status codes correspond to the following values:
 * 
 * 204 - OK/Updated - Successfully updated the specified device
 * 500 - Internal Server Error - Malformed JSON payload
 * 
 * @author Oliver Upton
 * 
 */

// Import packages
var request = require('request');

// Device ID found in the 'getDevices' example
var deviceId = '72';

// Configure the Device update
var deviceUpdate = {
    customerId: 'NewCustomerID',
    manufacturer: null,
    model: null
}

// Configure PUT
var options = {
    url: 'http://your.cdp.server/rest/device/' + deviceId,
    auth: {
        user: 'username',
        pass: 'password'
    },
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(deviceUpdate)
}

// Execute PUT
request.put(options, function(error, response, body) {
    if((error === null) && response && response.statusCode) {
        if(response.statusCode < 400) {
            console.log('Successfully updated device');
        } else if(response.statusCode === 404) {
            console.log('Device not found');
        } else {
            console.log('Bad request');
        }
    }
});