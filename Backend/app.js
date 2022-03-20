const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const SendEmail = require('./mailer');

// create express instance
const app = express();



app.use(cors());
app.use(bodyParser.json());

// Router
app.get('/', (req, res) => {
    SendEmail(req.query.to, req.query.count)
  })

// Listen on port
app.listen(5000, function () {
  console.log("App listening at port:", 5000);
});