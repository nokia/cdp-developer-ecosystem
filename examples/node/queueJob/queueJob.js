/* Nokia Connected Device Platform NBI API Demos (Node.js)
 * 
 * POST: /rest/device/{deviceId}/job
 * 
 * Description: This URI will allow you to queue a job to the device specified
 * 
 * 201 - OK/Created - Successfully queued job
 * 500 - Internal Server Error - Malformed JSON payload
 * 
 * @author Oliver Upton
 * 
 */

// Import packages
var request = require('request');

// Device ID found in the 'getDevices' example
var deviceId = '72';

// Action ID found in the 'getActions' example
var job = {
    actionId: '65',
    needNotification: true,
    enabledNbiNotification: true
}
// Configure POST
var options = {
    url: 'http://your.cdp.server/rest/device/' + deviceId + '/job',
    auth: {
        user: 'username',
        pass: 'password'
    },
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(job)
}

// Execute the HTTP GET request 
request.post(options, function(error, response, body) {
    console.log('Body:', body);
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