const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const homeRouter = require('./routes/home');
app.use('/home', homeRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});