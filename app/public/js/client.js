function submitData(e) {
    e.preventDefault();

    const form = new window.FormData(e.target);
    let postRequest = {
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: form.get('name')
        }),
        method: 'POST'
    }
    fetch('http://localhost:3000/submit', postRequest)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
};

document.querySelector('.auth-form').addEventListener('submit', submitData);