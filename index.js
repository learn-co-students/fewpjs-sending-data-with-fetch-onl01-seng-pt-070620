// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   })
// });

// or 

// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
   
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
   
//   fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   })
//   .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

// challenge
// first attempt

function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    };
    let configuredObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json" 
        },
        body: JSON.stringify(formData)
    }
      return fetch("http://localhost:3000/users", configuredObject)
        .then(function(response) {
            return response.json();
        })
        .then(function(objects) {
            // console.log(objects["id"])
            let userId = objects["id"]
            let li = document.createElement("li")
            li.innerHTML = userId
            document.body.appendChild(li)
        })
        .catch(function(error) {
            alert("something is wrong. Time to debug!")
            // console.log(error.message)
            let errorMessage = error.message
            let h2 = document.createElement("h2")
            h2.innerHTML = errorMessage
            document.body.appendChild(h2)
        });
  }

  // second attempt

//   function submitData(name, email) {
//     let formData = {
//         name: name,
//         email: email
//     };
//     let configuredObject = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json" 
//         },
//         body: JSON.stringify(formData)
//     }
//       return fetch("http://localhost:3000/users", configuredObject)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(objects) {
//             console.log(objects["id"])
//             let userId = objects["id"];
//             let p = document.body.createElement("p")
//             p.innerHTML = userId
//             document.body.appendChild(p)
//         })
//         .catch(function(error) {
//             alert("Unauthorized Access. Time to debug!");
//             console.log(error.message);
//             let errorMsg = error.message
//             let h2 = document.body.createElement("h2")
//             h2.innerHTML = errorMsg
//             document.body.appendChild(h2)
//         });
//   }


