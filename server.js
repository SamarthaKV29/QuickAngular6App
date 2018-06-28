var express = require('express');
var app = express();

app.listen(process.env.PORT || 4500);
console.log("App started");

app.use(express.static(__dirname + '/dist/test-app'));
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/test-app/index.html');
});