const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('firstEvent', () => {
    console.log("This is the first listener.");
});

eventEmitter.on('secondEvent', () => {
    console.log("This is the second listener.");
});

eventEmitter.emit('firstEvent');
eventEmitter.emit('secondEvent');