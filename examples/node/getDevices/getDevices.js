/* Nokia Connected Device Platform NBI API Demos (Node.js)
 * 
 * GET: /rest/device
 * 
 * Description: This URI will return a list of devices currently in CDP.
 * 
 * 200 - OK - Returned array of devices
 * 500 - Internal Server Error - Malformed JSON payload
 * 
 * @author Oliver Upton
 * 
 */

// Import packages
var request = require('request');

// Set return list size
var displayLength = '20';

// Configure the HTTP GET method
var options = {
    url: 'http://your.cdp.server/rest/device?iDisplayLength=' + displayLength,
    auth: {
        user: 'username',
        pass: 'password'
    }
};

// Helper function to print device into console
var printDevice = function(device) {
    console.log('');
    console.log('Device name: ', device.deviceId);
    console.log('Numeric ID:', device.id);
    console.log('Manufacturer:', device.manufacturer);
    console.log('Model:', device.model);
    console.log('');
}

// Execute the HTTP GET
request.get(options, function(error, response, body) {
    
    // Print out the error (if any) and the statusCode on the response
    console.log('Error:', error);
    console.log('statusCode:', response.statusCode);
    
    // Interpret JSON object returned from server
    var data = JSON.parse(body);
    var data = data.aaData;

    // Print out each device in the returned array
    for(var i = 0; i < data.length; i++) {
        printDevice(data[i]);
    }
});