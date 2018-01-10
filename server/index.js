const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const app = express();
const db = require('./db');
const socketio = require('socket.io');
module.exports = app;

// Static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

const createApp = () => {

// Logging middleware
app.use(morgan('dev'));

 // Body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//api routes
app.use('/api', require('./api'))  

// Sends index.html
app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

// Error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})
}

// Start listening 
const startListening = () => {
app.listen(8080, () => console.log('Mixing it up on port 8080'))
}
const syncDb = () => db.sync()

if (require.main === module) {
  syncDb()
    .then(createApp)
    .then(startListening)
} else {
  createApp(app)
}
