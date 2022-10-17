const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

const products = require('./db.json');

app.get('/products/GBP', (req, res)=>{
    res.status(200).json(products.GBP);
});

app.use('/images', express.static('images'))

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("OK")
});