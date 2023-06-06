// Add your code here

function submitData(userName, userEmail) {

    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-type": 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    })
        .then(response => response.json())

        .then(respJson => {
            console.log(respJson.id)
            document.body.append(respJson.id)
        })

        .catch(function (error) {
            document.body.append(error.message)
        })

}

 submitData('Ivan', 'Ivan@theTerrible.com')