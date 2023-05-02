const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const allServices = require("./data/data.json");

app.use(cors());

app.get('/', (req, res)=>{
res.send('cooks corner')
});

app.get("/allData", (req, res)=>{
    console.log(allServices)
    res.send(allServices);
})

app.listen(port, ()=>{
    console.log(`cooks API is running on port:${port}`)
})
