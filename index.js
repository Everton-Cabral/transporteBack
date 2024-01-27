const express = require("express")
const cors = require("cors")
const app = express()
const AWS = require('aws-sdk');

app.use(cors({ origin: '*' }))

app.use(express.json())


// Configuração do SDK da AWS
AWS.config.update({
    accessKeyId: 'AKIA6GBMDWTG5FPXMPGM',
    secretAccessKey: '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',
    region: 'sa-east-1',
  });
  
  const s3 = new AWS.S3();
  app.set('s3', s3);  
  
// DB Connection
const conn = require("./db/conn");

conn();

// Routes
const routes = require("./routes/router");

app.use("/api", routes)

app.listen(3000, '0.0.0.0', function(){
    console.log("servidor Online!!")
   
});

