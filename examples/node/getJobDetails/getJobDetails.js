// Import packages
var request = require('request');

// Specify job and device
var deviceId = '72';
var jobId = 'MDM_41300';

// Configure request
var options = {
    url: 'http://your.cdp.server/rest/device/' + deviceId + '/job/' + jobId,
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
            printJob(JSON.parse(body));
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
    console.log('JOB NAME:', job.actionName);
    console.log('Status:', job.jobStatus);
    console.log('Correlator ID:', job.jobCorrelatorId);
    console.log('+++ REQUEST +++');
    var request = JSON.parse(job.primitiveRequest);
    console.log('Path:', request.nodePath);
    console.log('Write value:', request.resourceValue);
    console.log('+++ RESPONSE +++');
    var response = JSON.parse(job.primitiveResponse);
    console.log('Response Status:', response.responseStatus);
    console.log('Response Code:', response.responseCode);
    console.log('');
}