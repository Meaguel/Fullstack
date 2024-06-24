
const express = require('express');
const { connectToDb } = require('./Database/connectionManager')

// create instance of express app
const app = new express();
const watchListModule = require(`./Modules/watchListModule`);

const port = 3000;

// setup middleware

//define routes

//fetch watchlist
app.get('/watchlist', async(req, res) => {
    const data = await watchListModule.getItems(); 
     res.send(data);  
})

// add to watchlist
app.post('/watchlist', async(req, res) => {
    // updated express, uses request.query
    const { symbol } = req.query;
    console.log(JSON.stringify(req.query));

    await watchListModule.addItem(symbol);

    // no need to send back message, status 200 is enough
    res.send()
})

app.delete('/watchlist', async(req, res) => {

    const { symbol } = req.query;

    await watchListModule.removeItem(symbol);

    res.send()
})

// ====> lets's connect to mongoDb and then start the express we server...
connectToDb().then(() => {
    console.log(`MongoDb connection completed..`)

    // start express server on specific port
    app.listen(port, () => {
        console.log(` Express server started on ${port}`)
    })
})


