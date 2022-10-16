function getPush(pushId) {
    fetch(`https://k42pcx1qi8.execute-api.eu-central-1.amazonaws.com/production/push/${pushId}`)
        .then(resp => resp.json())
        .then((data) => console.log(data));
}


