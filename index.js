
console.log("Load function ready");
const log = msg => {
    document.getElementById('log').innerHTML += msg + "\n";
};

function sendWebhookData() {
  const xhr = new XMLHttpRequest();

  // Bind the FormData object and the form element
  const fd = new FormData( form );
  log(fd);
  console.log(fd);
  url = fd.destination_url
  log(url);
  console.log(url);
  json = fd.json_to_send
  console.log(json);
  log(json);

  // Define what happens on successful data submission
  xhr.addEventListener( "load", function(event) {
    log( event.target.responseText );
  } );

  // Define what happens in case of error
  xhr.addEventListener( "error", function( event ) {
    this.LOADING( 'Oops! Something went wrong.' );
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
document.getElementById("submit_webhook")( "click", function ( event ) {
  console.log("Submitting form");
  form.sendWebhookData();
  event.preventDefault();
} );
