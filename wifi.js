const http = require('http');

// Replace with your router's IP address
const routerIp = '192.168.1.1';

// Replace with the path to the data you want to retrieve
const path = '/status';

// Set up the options for the HTTP request
const options = {
  hostname: routerIp,
  port: 80,
  path: path,
  method: 'GET'
};

// Send the HTTP request to the router
const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  // Listen for the data event to retrieve the response
  res.on('data', data => {
    console.log(data.toString());
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();
