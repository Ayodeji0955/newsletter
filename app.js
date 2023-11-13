
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');     


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");

    let firtsName = req.body.fName;
    let lastName = req.params.lName;
    let email = req.body.email;

    console.log(firtsName, lastName, email);
});

app.listen(3000, function () {
    console.log('server is running on port 3000');
});
