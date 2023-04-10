const socket = new WebSocket("ws://your-cloud-server-ip-address:port");

socket.onopen = function(event) {

  console.log("Connection established.");

};

socket.onmessage = function(event) {

  console.log(`Message received: ${event.data}`);

};

socket.onclose = function(event) {

  console.log("Connection closed.");

};

socket.onerror = function(error) {

  console.log(`Error: ${error}`);

};

