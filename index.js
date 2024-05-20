const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const productRoute = require("./routes/product.route.js");
const app = express();

app.use(express.json()); // middleware
app.use(express.urlencoded({ extended: false })); // middleware

// routes
app.use("/api/products", productRoute);

// to get request
app.get('/', (req, res) => {
    res.send("Hello from NODE API updated ");
});


// database connection
mongoose.connect("mongodb+srv://sankalpsuyash98:sIZFAUL1rB6io4SI@backenddb.hzzbhzh.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("connected to DB");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => {
        console.log("Connection failed");
    });

