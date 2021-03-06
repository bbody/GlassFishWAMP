asyncTest( "PubSub: Vanilla subscribe and publish", function() {
	var wsuri = "ws://localhost:8080/GlassFishWAMP/wamp";
	var truncate_topic = "http://example.com/truncate";

	expect(2);
	ab.connect(wsuri,

	  // WAMP session was established
	  function (session) {
            ok( true, "Successfully started" );
                session.subscribe(truncate_topic, function onEvent(topic, event) {
                         ok(true, "Hello");
                         //start();
                       });
                       session.publish(truncate_topic, "Hello");
                       setTimeout(function (){start();},650);
	    	
	  },

	  // WAMP session is gone
	  function (code, reason) {
	     console.log(code);
	     console.log(reason);
	  },
	  {skipSubprotocolCheck:true, skipSubprotocolAnnounce:true} // Important! Play rejects all subprotocols...
	);

	
});