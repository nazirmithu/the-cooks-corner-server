const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const allServices = require("./data/data.json");

app.use(cors());

app.get('/', (req, res) => {
    res.send('cooks corner')
});

app.get("/allData", (req, res) => {
    console.log(allServices)
    res.send(allServices);
})

app.get("/allData/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    const Items = allServices?.find(item => parseInt(item.id) === id);
    res.send(Items);
})


app.listen(port, () => {
    console.log(`cooks API is running on port:${port}`)
})
