const axios = require('axios');
const express = require('express');
const helmet = require('helmet')
const https = require('https');

const app = express();

app.use(helmet());
app.use(express.json())
app.get("/", function(req, res){    
    res.json("wwwwwwwwwwwwwwwwwwwwwwwwwwwww")
})


app.listen(3000, function msg(){
    console.log("The server is listening on port 3000!")
})