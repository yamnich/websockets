// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require websocket_rails/main
//= require_tree .

$( document ).ready(function() {
    console.log( "ready!" );
        // connect to server like normal
    var dispatcher = new WebSocketRails('127.0.0.1:3000/websocket');

    // subscribe to the channel
    var channel = dispatcher.subscribe('index');

    // You can also pass an object to the subscription event
    // var channel = dispatcher.subscribe({channel: 'channel_name', foo: 'bar'});

    // bind to a channel event
    channel.bind('test', function(data) {
      console.log('channel event received: ' + data);
    });

    // unbind to a channel event
    //channel.unbind('event_name');
});
