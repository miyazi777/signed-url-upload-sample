const AWS = require('aws-sdk');
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const server = app.listen(3001, function(){
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/api/url", function(req, res, next){
  const s3 = new AWS.S3();
  const params = {Bucket: "s3-bucket-name", Key: req.query.filename, Expires: 30, ContentType: req.query.filetype };
  s3.getSignedUrl('putObject', params, function (err, url) {
    console.log(url);
    res.json({'url': url});
  });
});
