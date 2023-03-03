const express = require('express')

const app = express();

app.get('/' , (req,res)=>{
    res.send('<h1>Hello Node.js</h1>')
})

app.get('/api/main', (req,res)=>{
    res.send('express is a framework which is used by Node.js. express is an enhanced version of Http and it just uses simple Javascript code.. ');
    res.end();
})


app.listen(3000 , ()=>{
    console.log("server has started on the server 3000");
});