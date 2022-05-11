const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const gameRouter = require('./routes/game');
app.use('/game', gameRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});