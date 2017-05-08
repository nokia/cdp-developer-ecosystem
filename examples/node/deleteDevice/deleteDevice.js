/* Nokia Connected Device Platform NBI API Demos (Node.js)
 * 
 * DELETE: /rest/device/{deviceId}
 * 
 * Description: This URI allows you to delete a device from the CDP Server.
 * 
 * 204 - OK/Deleted - Successfully deleted the specified device
 * 500 - Internal Server Error - Malformed JSON payload
 * 
 * @author Oliver Upton
 * 
 */

// Import packages
var request = require('request');

// Device ID obtained from 'getDevices' example
var id = 'NUMERIC_DEVICE_ID';

// Configure the HTTP DELETE method
var options = {
    url: 'http://your.cdp.server/rest/device/' + id,
    auth: {
        user: 'username',
        pass: 'password'
    }
}

// Execute the HTTP DELETE
request.delete(options, function(error, response, body) {
    if((error === null) && response && response.statusCode) {
        if(response.statusCode === 204) {
            console.log('Successfully deleted.');
        } else if(response.statusCode === 404) {
            console.log('No device associated to id ' + id);
        } else {
            console.log('Bad requesst');
        }
    } else if(error) {
        console.log('Error:', error);
    }
});