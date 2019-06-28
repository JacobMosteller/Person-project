const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path')
require('dotenv').config();
const massive = require('massive');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 60000 }
}))

massive(process.env.DATABASE_URL)
.then((dbInstance)=>{
    app.set('db', dbInstance)
    console.log('Db connected')
}) 

//Hosting
app.use(express.static(path.join(__dirname, '/build')));

app.get('/api/ping', (req,res) => {
    res.send("heatlty")
})


    app.get('/*', (req,res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, "build")
    })
});

const port = process.env.PORT || 7070;

app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})  
