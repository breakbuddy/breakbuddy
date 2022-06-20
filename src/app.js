const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '5000mb', extended: true, parameterLimit: 100000000000}));
app.use(express.static(path.join(__dirname, "public")));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Encoding, Content-Transfer-Encoding");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, DELETE, PATCH");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

const gameRouter = require('./routes/game');
app.use('/game', gameRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});