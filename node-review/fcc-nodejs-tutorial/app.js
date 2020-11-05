
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', function() { console.log('hey')});
eventEmitter.on('nope', function() { console.log('nope')});

console.log(eventEmitter.getMaxListeners());