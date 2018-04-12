// Small express server that can be used to run the app locally.
var express = require("express");
var app = express();

app.use(express.static('./'));
app.listen(3000);