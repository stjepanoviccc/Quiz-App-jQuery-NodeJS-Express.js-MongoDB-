const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')
const bodyparser = require('body-parser')
const axios = require('axios')
const connectDB = require('./server/database/connection')

dotenv.config({ path: 'config.env' })
const PORT = process.env.port || 8080

app.set('view engine', 'ejs')
app.use(morgan('tiny'))
app.use('/', require('./server/routes/route'))
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))
app.use('/audio', express.static(path.resolve(__dirname, 'assets/audio')))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))

// mongodb connection
connectDB()
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

// model for creating new user
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pointss: { type: String }
});

const User = mongoose.model('User', userSchema);

// sending user to database
app.post('/api/users', (req, res) => {
    const sending_user = new User({
        name: req.body.name,
        pointss: req.body.pointss
    });

    sending_user.save()
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error saving data to database');
        });
});

app.get('/api/users', (req, res) => {
    User.find()
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred" })
        })
});
