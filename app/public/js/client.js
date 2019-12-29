const form = document.querySelector('form');

form.onsubmit = sendData;

function sendData(event) {
    event.preventDefault();

    let f = new window.FormData(form);

    let params = {
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: f.get('name')
        }),
        method: 'POST'
    }

    fetch('http://localhost:3000/formData', params)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
};