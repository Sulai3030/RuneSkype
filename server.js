require('dotenv').config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const faker = require("faker");
const AccessToken = require("twilio").jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
// const admin = require('firebase-admin');
const {Storage} = require('@google-cloud/storage');





app.get('env')


// gs://runeskype-111.appspot.com


// admin.initializeApp({
//   credential: admin.credential.cert("firebase.json"),
//   databaseURL: "https://runeskype-111.firebaseio.com"
// });

// let db = admin.database();
// let ref = db.ref("/");
// console.log('DB ref: ' + ref); //just to debug, if undefined, there's a problem.



  const bucketName = 'images-111'
  const keyfile = JSON.parse(process.env.GCLOUD)
 
  const storage = new Storage({
    projectId: "runeskype-1111",
    keyFilename: keyfile
  });




// // Create a root reference
// var storageRef = firebase.storage().ref();

// // Create a reference to 'mountains.jpg'
// var mountainsRef = storageRef.child('mountains.jpg');

// // Create a reference to 'images/mountains.jpg'
// var mountainImagesRef = storageRef.child('images/mountains.jpg');

// // While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name            // true
// mountainsRef.fullPath === mountainImagesRef.fullPath    // false

if(process.env.NODE_ENV === "development") { // Configuration for development environment
    var webpackDevMiddleware = require("webpack-dev-middleware");
    var webpackConfig = require("./webpack.config.js");
    const webpackCompiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(webpackCompiler));
    app.use(express.static(path.join(__dirname, "app")));
} else if(process.env.NODE_ENV === "production") { // Configuration for production environment
    app.use(express.static(path.join(__dirname, "dist")));
}

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));

// }

if (process.env.NODE_ENV === "production" || "prod") {
  app.use(express.static("client/build"));

}

let apiKey = process.env.API_KEY
let sid = process.env.API_SID
let secret = process.env.API_SECRET


// Define API routes here

app.post('/image-upload/', (req, res) => {
  console.log('works!')
  console.log(req.file)
  const imageToUpload = req.value;

 
  let bucket = storage.bucket(bucketName);
  let localFilename = imageToUpload;

  bucket.upload(localFilename, function(err, file) {
    if (!err) {
      console.log('somefile-inThisCaseASong.mp3 is now in your bucket.');
    } else {
      console.log('Error uploading file: ' + err);
    }

})
});




app.get('/token/', function(req, res) {
  var identity = faker.name.findName();

  let token = new AccessToken(

    sid,
    apiKey,
    secret


  );

  token.identity = identity;

  const grant = new VideoGrant();

  token.addGrant(grant);

  console.log(token)
  console.log(token.toJwt())


  res.send({
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