/* Nokia Connected Device Platform NBI API Demos (Node.js)
 * 
 * GET: /rest/device/job
 * 
 * Description: This URI will allow you get the list of jobs posted to a device
 * 
 * 200 - OK - Returned job array
 * 500 - Internal Server Error - Malformed JSON payload
 * 
 * @author Oliver Upton
 * 
 */

// Import packages
var request = require('request');

// Device ID from the 'getDevices' example
var deviceId = '72';

// Configure request
var options = {
    url: 'http://your.cdp.server/rest/device/' + deviceId + '/job/history',
    auth: {
        user: 'username',
        pass: 'password'
    }
};

// Execute the HTTP GET request 
request.get(options, function(error, response, body) {
    if((error === null) && response && response.statusCode) {
        if(response.statusCode === 200) {
            // Success
            console.log('Successfully retrieved Job data');
            console.log('');
            var jobArray = JSON.parse(body).aaData;
            for(var i = 0; i < jobArray.length; i++) {
                printJob(jobArray[i]);
            }
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


// Helper function to print values from the response
var printJob = function(job) {
    console.log('');
    console.log('JOB NAME:', job.actionName);
    console.log('Correlator ID:', job.nbiCorrelator);
    var date = new Date(job.startTime);
    console.log('Time:', date.toUTCString());
    console.log('');
}