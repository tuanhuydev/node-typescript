const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

let count = 0;

eventEmitter.on('start', () => {
	console.log('started');
});

eventEmitter.on('count', () => {
	count++;
});

eventEmitter.on('end', () => {
	console.log('count', count);
});

module.exports = eventEmitter;
