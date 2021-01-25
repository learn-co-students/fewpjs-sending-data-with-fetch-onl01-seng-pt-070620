// Add your code here
function submitData(userName, userEmail) {
    let userData = {
        name: userName,
        email: userEmail
      };

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(userData)
      };

    return fetch('http://localhost:3000/users', configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            console.log(object);
            let body = document.querySelector('body');
            let userId =  document.createElement('div');
            userId.innerHTML = object.id;
            body.appendChild(userId);
        })
        .catch(function(error) {
            alert("Unauthorized Access");
            console.log(error.message);
            let body = document.querySelector('body')
            let errorMessage =  document.createElement('div')
            errorMessage.innerHTML = error.message
            body.appendChild(errorMessage)
        });
}

submitData("Jordan", "J@email.com");