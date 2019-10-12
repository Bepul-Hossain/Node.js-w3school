var events = require('events');

var eventEmitter = new events.EventEmitter();

var myEventHandlerr = function(){
    console.log('Handler ok');
}
eventEmitter.on('scream',myEventHandlerr);
eventEmitter.emit('scream');
