// Add your code here
console.log('%c Hi', 'color: lightblue')

const destURL = 'http://localhost:3000/users'

function submitData(name, email) {
  return fetch(destURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  })
    .then(resp => resp.json())
    .then(function(data){
      document.body.innerHTML = data["id"]
    })
    .catch(function(error){
      alert("Unauthorized Access");
      document.body.innerHTML = error.message;
    })
};
