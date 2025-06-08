const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

var functionOne = (message) => {
    console.log(message + "1");
}

var functionTwo = (message) => {
    console.log(message + "2");
}

var functionThree = (message) => {
    console.log(message + "3");
}

eventEmitter.on('firstEvent', functionOne);
eventEmitter.on('firstEvent', functionTwo);
eventEmitter.on('firstEvent', functionThree);

// Prepend listener
eventEmitter.prependListener('firstEvent', () => {
    console.log("Prepend listener.");
});

// Listener count
console.log(eventEmitter.listenerCount('firstEvent'));

// List listeners.
console.log(eventEmitter.listeners('firstEvent'));

eventEmitter.emit('firstEvent', "message 1.");