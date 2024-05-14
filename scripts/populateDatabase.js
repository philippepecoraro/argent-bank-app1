const axios = require("axios");
const signupApi = "https://argent-bank1-server.onrender.com/api/v1/user/signup";
const users = [
  {
    firstName: "Tony",
    lastName: "Stark",
    email: "tony@stark.com",
    password: "passwordTS",
  },
  {
    firstName: "Steve",
    lastName: "Rogers",
    email: "steve@rogers.com",
    password: "passwordSR",
  },
];

users.forEach((user) => {
  axios
    .post(signupApi, user)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
});
