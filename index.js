const submitData = (name, email) => {
  return fetch("http://localhost:3000/users", {
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
      .then(r => r.json())
      .then(obj => document.body.innerHTML = obj.id)
      .catch(error => document.body.innerHTML = error)
};
