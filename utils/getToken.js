require("dotenv").config();
const axios = require("axios");

// get token method to get token from twitch to use in the games DB API calls
const getToken = () => {
  return axios
    .post(
      `https://id.twitch.tv/oauth2/token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=client_credentials`
    )
    .then((res) => {
      return res.data.access_token;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = getToken;
