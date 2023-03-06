const express = require('express')
const route = express.Router()
const services = require('../services/render')

route.get('/', services.indexRoute)
route.get('/options', services.optionsRoute)

route.get('/start', services.startRoute)
route.get('/highscore', services.highscoreRoute)
route.get('/false', services.falseRoute)

module.exports = route