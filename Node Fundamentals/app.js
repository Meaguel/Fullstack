//app.js
const math = require('./math'); // Import the custom module
const myEmitter = require('./emitter'); // Import the custom event emitter

// Use the custom module
const result = math.square(5);
console.log(`Square of 5 is: ${result}`);

//Emit the custom event
myEmitter.emit('customEvent');