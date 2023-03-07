const axios = require('axios');

exports.indexRoute = (req, res) => {
    res.render('index')
}
exports.optionsRoute = (req, res) => {
    res.render('options')
}
exports.startRoute = (req, res) => {
    res.render('start')
}

// GET request 
exports.highscoreRoute = (req,res)=> {
    axios.get('http://localhost:4000/api/users')
    .then(function(response){
        res.render('highscore',{users:response.data})
    })
    .catch(err => {
        res.send(err);
    })
}
exports.falseRoute = (req,res) => {
    res.render('false')
}