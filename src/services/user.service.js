const axios = require("axios");

const profile = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
  const user = await axios.get(url);
  console.log('User found => ', user.data);
  return user.data;
};

module.exports = {
  profile
};
