const express = require('express');
const bodyParser = require('body-parser');
const webRoute = require('./routes/web');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

webRoute(app);

let port = 8080;

app.listen(port, () => {
    console.log('App running at port: ' + port);
});
