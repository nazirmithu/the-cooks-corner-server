const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const allServices = require('./data/data.json');

app.get('/', (req, res)=>{
res.send('cooks corner')
});

app.get("/allData", (req, res)=>{
    res.send(allServices);
})

app.listen(port, ()=>{
    console.log(`cooks API is running on port:${port}`)
})
