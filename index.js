window.addEventListener( "load", function () {
    const log = msg => {
        document.getElementById('log').innerHTML += msg + "\n";
    };

    function sendWebhookData() {
      const xhr = new XMLHttpRequest();
  
      // Bind the FormData object and the form element
      const fd = new FormData( form );
      url = fd.destination_url
      json = fd.json_to_send
  
      // Define what happens on successful data submission
      xhr.addEventListener( "load", function(event) {
        alert( event.target.responseText );
      } );
  
      // Define what happens in case of error
      xhr.addEventListener( "error", function( event ) {
        alert( 'Oops! Something went wrong.' );
      } );
  
      // Set up our request
      xhr.open( "POST", url );
      xhr.setRequestHeader('Content-Type', 'application/json');
  
      // The data sent is what the user provided in the form
      xhr.send( json.stringify(json) );

          //listen for response
    xhr.onreadystatechange=(e) =>{
      log( xhr.statusText );
      log( xhr.responseURL );
      log( xhr.responseType );
      log( xhr.responseBody );
  }
      
    }
  
    // Access the form element...
    const form = document.getElementById( "send_webhook" );

  
    // ...and take over its submit event.
    form.addEventListener( "submit_webhook", function ( event ) {
      event.preventDefault();
  
      sendWebhookData();
    } );

} );
