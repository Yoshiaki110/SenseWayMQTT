var mqtt = require('mqtt');
var config = require('./config.js');

//var client = mqtt.connect('mqtt://mosquitto.org');

var client = mqtt.connect(config.url, {username: config.uid, password: config.pass});

client.on('connect', function(){
    console.log('publisher.connected.');
});

setInterval(function(){
    var message = '{"gw": [{"date": "2017-12-16T07:46:58.599083Z", "rssi": -87, "snr": 10, "gwid": "000b78fffea00036"}], "mod": {"fq": 923.8, "cnt": 406, "data": "000100020000030011223344556677889900aabbccdd", "mt": "ucnf", "devEUI": "000b78fffe051a0d", "dr": "5", "port": 120}}';;
    client.publish(config.topic + '/' + config.uid + '/' + config.did + '/tx', message);
    console.log('publisher.publish:', message);
}, 10000);

