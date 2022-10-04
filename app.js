const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

const products = require('./db.json');

app.get('/products', (req, res)=>{
    res.status(200).json(products);
});

app.use('/images', express.static('images'))

const port = 4000;

app.listen(port, () => {
    console.log("OK")
});