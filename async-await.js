const axios = require('axios');

const fetchData = async () => {       // async makes function asynchronous
  try {
    const data = await axios.get("https://cat-fact.herokuapp.com/facts");    // await makes function wait 'till data retrieve happens 
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("FINITO");
  }
};

fetchData();