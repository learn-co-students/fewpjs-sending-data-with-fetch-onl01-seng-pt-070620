function submitData(name, email) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        })
      })
      .then( function (response) {
        return response.json()
      })
      .then( function (users) {
        document.body.innerHTML = users.id 
      })
      .catch(function(error) {
        alert("There was an error that occured");
        document.body.innerHTML = error.message
    })}