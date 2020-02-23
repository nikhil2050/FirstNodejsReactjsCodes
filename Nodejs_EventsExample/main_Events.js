var events = require("events");

// Create EventEmitter object
var eventEmitter = new events.EventEmitter();


var eventHandler = function connected() {
    console.log('Connection successful...');

    // Fire an event
    eventEmitter.emit('dataReceivedEvent');
};

// Bind Event & Event-Handler
eventEmitter.on('connectionEvent', eventHandler);

eventEmitter.on('dataReceivedEvent', function(){
    console.log("Data received successfully.");
});

// Fire an event
eventEmitter.emit('connectionEvent');
