const axios = require('axios');

const data = axios.get("https://cat-fact.herokuapp.com/facts");   // when you fetch data, it gives you promise object

data
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise Resolved");
  });



const event = new Promise ((resolve, reject) => {
  var name = "Pedro";
  if (name == "Tikka") {
    resolve(name);
  } else {
    reject("name was not Tikka! Name was:"+ name);
  }
});

event
  .then((name) => {
    console.log(name);
  })
  .catch((err) => {
    console.log(err);
  }) 
  .finally(() => {
    console.log("PROMISE FINISHED");
  });