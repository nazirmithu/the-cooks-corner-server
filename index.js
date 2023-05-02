const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
res.send('cooks corner')
});

app.listen(port, ()=>{
    console.log(`cooks API is running on port:${port}`)
})