const express = require('express');
const app = express();
const port = 3030;
const path = require('path');


app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) =>{
    return res.sendFile(path.join(__dirname,'views','index.html'))
});

app.get('/views/babbage.html',(req,res) =>{
    return res.sendFile(path.join(__dirname,'views','babbage.html'))
});

app.get('/views/berners-lee.html',(req,res) =>{
    return res.sendFile(path.join(__dirname,'views','berners-lee.html'))
});

app.get('/views/clarke.html',(req,res) =>{
    return res.sendFile(path.join(__dirname,'views','clarke.html'))
});

app.get('/views/hamilton.html',(req,res) =>{
    return res.sendFile(path.join(__dirname,'views','hamilton.html'))
});

app.get('/views/hopper.html',(req,res) =>{
    return res.sendFile(path.join(__dirname,'views','hopper.html'))
});

app.get('/views/lovelace.html',(req,res) =>{
    return res.sendFile(path.join(__dirname,'views','lovelace.html'))
});

app.get('/views/turing.html',(req,res) =>{
    return res.sendFile(path.join(__dirname,'views','turing.html'))
});


app.listen(port, () => console.log(` Server run on port http://Localhost:${port}`)
 );
 