var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://mosquitto.org');

client.on('connect', function(){
    console.log('publisher.connected.');
});

setInterval(function(){
    var message = Date.now().toString();
    client.publish('topic0', message);
    console.log('publisher.publish:', message);
}, 1000);

