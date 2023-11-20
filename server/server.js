const express = require('express');
const app = express();
const fetch = require('node-fetch');

const cors = require('cors');
app.use(express.json());
app.use(cors());



app.get('/getItems', async(req, res) => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    res.json(data);
})

app.listen(9000, function(){
    console.log("listenig on 9000");
})