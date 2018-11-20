const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const ch = require('chance');
const Chance = new ch();
const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here


app.get('/token', function(request, response) {
  const identity = Chance.name();

  let token = new AccessToke(

    proccess.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET


  );

  token.identity = identity;

  const grant = new VideoGrant();

  token.addGrant(grant);


  response.send({
    identity:identity,
    token: token.toJwt()
  });




})



// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
