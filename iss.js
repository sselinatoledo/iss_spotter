const request = require('request');

const fetchCoordsByIP = function(ip, callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const parsedBody = JSON.parse(body);
    if (!parsedBody.success) {
        const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
        callback(Error(message), null);
        return;
      } 
  
      const { latitude, longitude } = parsedBody;
  
      callback(null, {latitude, longitude});
    });
  };

module.exports = { fetchCoordsByIP };