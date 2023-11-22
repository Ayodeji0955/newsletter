
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');     


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", function(req, res) {
//     res.sendFile(__dirname + "/signup.html");

// });


app.get('/', (req, res) => {
    axios.get(__dirname + '/signup.html')
      .then(response => {
        res.send(response.data);
      })
      .catch(error => {
        res.status(500).send('An error occurred');
      });
  });


app.post("/", function(req, res){
    
    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let email = req.body.email;
    
    console.log(firstName, lastName, email);
})

app.listen(3000, function() {
    console.log('server is running on port 3000');
});


// 868d0cf8860880853b234e9e273d01d2-us14