const log = msg => {
    document.getElementById('log').innerHTML += msg + "\n";
};

function sendFormData() {

  function sendData() {
    var XHR = new XMLHttpRequest()
    var FD = new FormData(form)
    url = FD.destination_url
    log(url);
    console.log(url);
    postJSON = FD.json_to_send
    console.log(postJSON);
    log(postJSON);
    XHR.addEventListener('load', function(event) {
      form.classList.add('inactive')
      var success = document.querySelectorAll('.post-sent')[0]
      success.classList.add('active')
    })
    XHR.addEventListener('error', function(event) {
      form.classList.add('inactive')
      var error = document.querySelectorAll('.post-error')[0]
      error.classList.add('active')
    })
    XHR.setRequestHeader('Content-Type', 'application/json');
    XHR.open('POST', url);
    XHR.send(postJSON);
  }

  var form = document.querySelectorAll('.my-form')[0]
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    sendData()
  })

}

log( XHR.statusText );
log( XHR.responseURL );
log( XHR.responseType );
log( XHR.responseBody );
