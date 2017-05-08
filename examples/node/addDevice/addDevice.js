/* Nokia Connected Device Platform NBI API Demos (Node.js)
 * 
 * POST: /rest/device
 * 
 * Description: This URI will allow you to create a new device in the CDP console. The API returns 
 * no response body, and the status codes correspond to the following values:
 * 
 * 201 - OK/Created - Successfully added the specified device
 * 500 - Internal Server Error - Malformed JSON payload
 * 
 * @author Oliver Upton
 * 
 */

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
    // Change to your own URL and credentials
    url: 'http://cdpfest.nokialabs.com/rest/device', 
    auth: { 
        user: 'oliver',
        pass: 'changem3'
    },
    headers: {
        'Content-Type': 'application/json'
    },
    // Encode the device in text format    
    body: JSON.stringify(device) 
}

request.post(options, function(error, response, body) {
    console.log('Body:', body);
    if((error === null) && response && response.statusCode) {
        if(response.statusCode === 201) { 
            console.log('Successfully added ' + device.deviceId + ' to ' + options.url);
        } else {
            console.log('Bad Request');
        }
    } else if(error != null) {
        console.log('Error:', error);
    }
});
