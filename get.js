var mqtt = require('mqtt');
var config = require('./config.js');

//var client = mqtt.connect('mqtt://mosquitto.org');
var client = mqtt.connect(config.url, {username: config.uid, password: config.pass});

client.on('connect', function(){
    console.log('subscriber.connected.');
});

client.subscribe(config.topic + '/' + config.uid + '/' + config.did + '/#', function(err, granted){
    console.log('subscriber.subscribed.');
});

client.on('message', function(topic, message){
    console.log('subscriber.on.message', 'topic:', topic, 'message:', message.toString());
});

