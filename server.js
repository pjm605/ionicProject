var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.set('port', process.env.PORT || 5000);
app.use(cors());
app.use(express.static('www'));

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
