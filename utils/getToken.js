require("dotenv").config();
const axios = require("axios");

const getToken = async () => {
  let token;
  await axios
    .post(
      `https://id.twitch.tv/oauth2/token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=client_credentials`
    )
    .then((res) => {
      token = res.data.access_token;
    })
    .catch((err) => {
      console.log(err);
      token = null;
    });
  return token;
};

module.exports = getToken();
