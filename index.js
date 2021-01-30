// Add your code here


function submitData(n, e){
    let data = {
        name: n,
        email: e
    }
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }
    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            document.body.innerHTML = object[ "id" ]
        })
        .catch(function(error) {
            alert("UH OH");
            document.body.innerHTML = error.message
        });
}
