var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://mosquitto.org');

client.on('connect', function(){
    console.log('subscriber.connected.');
});

client.subscribe('topic0', function(err, granted){
    console.log('subscriber.subscribed.');
});

client.on('message', function(topic, message){
    console.log('subscriber.on.message', 'topic:', topic, 'message:', message.toString());
});

