const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
let webpack = require("webpack");
const app = express();
const faker = require("faker");
const AccessToken = require("twilio").jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
// const admin = require('firebase-admin');
const axios = require('axios')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

}



// if(process.env.NODE_ENV === "DEV" || 'development' || 'dev') { // Configuration for development environment
//     var webpackDevMiddleware = require("webpack-dev-middleware");
//     var webpackHotMiddleware = require("webpack-hot-middleware");
//     var webpackConfig = require("./webpack.config.js");
//     const webpackCompiler = webpack(webpackConfig);
//     app.use(webpackDevMiddleware(webpackCompiler, {
//       hot: true
//     }));
//     app.use(webpackHotMiddleware(webpackCompiler));
//     app.use(express.static(path.join(__dirname, "client/src")));
// } else if(process.env.NODE_ENV === "PROD" || 'production' ||'prod') { // Configuration for production environment
//   app.use(express.static("client/build"));
// }
// app.use(function(req, res, next){
//   console.log("Request from: ", req.url);
//   next();
// })

// gs://runeskype-111.appspot.com


// admin.initializeApp({
//   credential: admin.credential.cert("firebase.json"),
//   databaseURL: "https://runeskype-111.firebaseio.com"
// });

// let db = admin.database();
// let ref = db.ref("/");
// console.log('DB ref: ' + ref); //just to debug, if undefined, there's a problem.



  // const bucketName = 'images-111'
  // const keyfile = JSON.parse(process.env.GCLOUD)
 
  // const storage = new Storage({
  //   projectId: "runeskype-1111",
  //   keyFilename: keyfile
  // });




// // Create a root reference
// var storageRef = firebase.storage().ref();

// // Create a reference to 'mountains.jpg'
// var mountainsRef = storageRef.child('mountains.jpg');

// // Create a reference to 'images/mountains.jpg'
// var mountainImagesRef = storageRef.child('images/mountains.jpg');

// // While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name            // true
// mountainsRef.fullPath === mountainImagesRef.fullPath    // false




// if (process.env.NODE_ENV === "production" || "prod") {
//   app.use(express.static("client/build"));

// }

let apiKey = process.env.API_KEY
let sid = process.env.API_SID
let secret = process.env.API_SECRET


let Item = new Schema(
 
      {name: String, drdr: String, content: String }
  
);
let Item1 = mongoose.model('Images', Item);



mongoose.connect(process.env.MONGODB_URI || "mongodb://testaccount:fakepassword1@ds241493.mlab.com:41493/deploytest", { useNewUrlParser : true});
let db = mongoose.connection;
db.once('open', function() { console.log('Successfully connected');});
db.on('error', console.error.bind(console, 'conn error:'));
// Define API routes here

// app.post('/image-upload/', (req, res) => {
//   console.log('works!')
//   console.log(req.file)
//   const imageToUpload = req.value;

 
//   let bucket = storage.bucket(bucketName);
//   let localFilename = imageToUpload;

//   bucket.upload(localFilename, function(err, file) {
//     if (!err) {
//       console.log('somefile-inThisCaseASong.mp3 is now in your bucket.');
//     } else {
//       console.log('Error uploading file: ' + err);
//     }

// })
// });



//  app.post('/api/photo/',function(req,res){
//   let newItem = new Item();
//   newItem.img.data = req.body.fileAsBinaryString
//   newItem.img.contentType = 'image/*';
//   newItem.save();
//  });

//  app.post('/api/canvas/',function(req,res){
//    console.log(req);
//    console.log(req.body)
//   let newItem = new Item();
//   newItem.img.data = req.body.canvasMaster
//   newItem.img.contentType = 'image/*';
//   newItem.save();
//  });

 app.post('/api/background/',function(req,res){
  let newItem = new Item1();
  newItem.name = 'background'
  newItem.drdr = req.body.bgUrl
  newItem.content = req.body.bgUrl
  newItem.save();
 });

 app.post('/api/sprite/',function(req,res){
  let newItem = new Item1();
  newItem.name = 'sprite'
  newItem.drdr = req.body.spriteUrl
  newItem.content = req.body.spriteUrl
  newItem.save();
 });

 app.post('/api/map/',function(req,res){
  let newItem = new Item1();
  for (let key in newItem)
  newItem.name = 'map'
  newItem.drdr = req.body.mapUrl
  newItem.content = req.body.mapUrl
  newItem.save();
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