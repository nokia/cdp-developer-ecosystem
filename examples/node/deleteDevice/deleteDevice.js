var request = require('request');

var id = 'NUMERIC_DEVICE_ID';

var options = {
    url: 'http://your.cdp.server/rest/device/' + id,
    auth: {
        user: 'username',
        pass: 'password'
    }
}

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