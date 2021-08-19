exports.handler = async function(event, context) {
    const fd = event.body;
    const url = fd.destination_url;
    const postJson = fd.json_to_send;

    return fetch( url , {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: postJson ,
    })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted to ${url}:\n ${data}`)
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
}