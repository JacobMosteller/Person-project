const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path')
require('dotenv').config();
const massive = require('massive');

const app = express();

massive("postgres://ytxloeiowdjtzq:d0c86012465a00588458733cf29cf4fc0e1217b56b7da718106d25cd63bf9103@ec2-107-20-185-16.compute-1.amazonaws.com:5432/dc9og262l1dk4e?ssl=true")
 .then((dbInstance)=>{
        console.log('db is connected')
        app.set('db', dbInstance)
    })

app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 60000 }
}))


//Hosting
app.use(express.static(path.join(__dirname, '/build')));

app.use('/api/*', (req,res,next)=>{
    if(!req.session.user){
        res.send({success:false, message:'please login'})
    }else{
        next();
    }
})

app.get('/api/ping', (req,res) => {
    res.send("heatlty")
})

app.post('/auth/login', (req,res,next)=>{
const db = req.app.get('db');
const{username, password} = req.body;
db.user_table.findOne({username})
.then((user)=>{
    if(!user){
        throw('No user')
    }
    if(password!==user.password){
        throw("wrong password")
    }
    delete user.password;

    req.session.user = user;
    res.send({success:true, user:user})
})
.catch((err)=>{
    res.send({success:false, err})
})
})
app.get('/auth/user', (req,res,next)=>{
    if(req.session.user){
        res.send({success:true})
    }else{
        res.send({success:false})
    }
})
app.post('/auth/logout', (req,res,next)=>{
    req.session.destroy();
    res.send({success:true})
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
