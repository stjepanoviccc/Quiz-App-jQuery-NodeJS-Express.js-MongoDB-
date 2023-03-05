const express = require('express')
const connectDB = require('./server/database/connection')
const app = express()
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')
const bodyparser = require('body-parser')
dotenv.config({path: 'config.env'})
const PORT = process.env.port || 8080

app.set('view engine', 'ejs')
app.use(morgan('tiny'))
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))
app.use('/audio', express.static(path.resolve(__dirname, 'assets/audio')))
// load routes app.use('/', require('./server/routes/router'))
// mongodb connection
connectDB();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))

// route triggers
app.get('/', (req,res)=> {
    res.render('index')
})
app.get('/start', (req,res)=> {
    res.render('start')
})
app.get('/over', (req,res)=> {
    res.render('over')
})
app.get('/options', (req,res)=> {
    res.render('options')
})
app.get('/highscore', (req,res)=> {
    res.render('highscore')
})

// server port
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})