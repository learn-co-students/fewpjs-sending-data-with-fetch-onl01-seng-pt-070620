// Add your code here
function submitData(name, email) {
    let formData = {
      "name": name,
      "email": email
    }
    let configObj = {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
    return fetch("http://localhost:3000/users", configObj)
          .then(function(response) {
            return response.json();
          })
          .then(function(object) {
              let p = document.createElement('p');
              p.textContent = object.id;
              document.body.appendChild(p);
          })
          .catch(function(error) {
              let p = document.createElement('p');
              p.textContent = error.message;
              document.body.appendChild(p);
          });
        };