const express = require('express');
const app = express();
const path = require('path');
const PORT = 4500;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res)=> {
    res.send('it works');
    
});

app.listen(PORT, ()=>{
   console.log(`listening on port ${PORT}`) 
});