const express = require('express');
const mongoose = require('mongoose');

const productRoute = require('./routes/product-route');
const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended: false } ));

app.use("/api/products", productRoute);

app.get('/', function (req, res) {
  res.send('Hello World')
});

const uri = "mongodb+srv://datauser:dX8Rq62dmRIQeuKR@data-server.lh3hoj8.mongodb.net/ProductDB?retryWrites=true&w=majority&appName=Data-Server";


mongoose.connect(uri)
.then( () => {
    console.log('[+] Connection Established to ProductDB');
    app.listen(3000, () => {
        console.log('[+] Server is running on port 3000');
    });
})
.catch( () => console.log('[X] Connection to the database failed'));