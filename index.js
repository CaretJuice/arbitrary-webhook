const log = msg => {
    document.getElementById('log').innerHTML += msg + "\n";
};

function sendFormData() {

  function sendData() {
    var xhr = new XMLHttpRequest()
    var fd = new FormData(form)
    url = fd.destination_url
    log(url);
    console.log(url);
    postJSON = fd.json_to_send
    console.log(postJSON);
    log(postJSON);
    xhr.addEventListener('load', function(event) {
      form.classList.add('inactive')
      var success = document.querySelectorAll('.post-sent')[0]
      success.classList.add('active')
    })
    xhr.addEventListener('error', function(event) {
      form.classList.add('inactive')
      var error = document.querySelectorAll('.post-error')[0]
      error.classList.add('active')
    })
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.open('POST', url);
    xhr.send(postJSON);
  }

  var form = document.querySelectorAll('.my-form')[0]
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    sendData()
  })
  log( xhr.statusText );
  log( xhr.responseURL );
  log( xhr.responseType );
  log( xhr.responseBody );

}

