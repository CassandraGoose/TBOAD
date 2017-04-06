const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var cors = require('express-cors')
const app = express()
require('dotenv').config()

var authMiddleware = require('./routes/middleware')

if (process.env.NODE_ENV !== 'test') {
  const logger = require('morgan')
  app.use(logger('dev'))
}


app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '/../', 'node_modules')))

app.use(cookieParser(process.env.COOKIE_SECRET))

// app.use(cors({
//   allowedOrigins: [
//     'http://127.0.0.1:3000/'
//   ]
// }))

app.use('/api', require('./routes/home'))

app.use('*', function(req, res, next) {
  res.sendFile('index.html', {
    root: path.join(__dirname, 'public')
  })
})

app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
//   next()
// })

app.use(function(err, req, res, next) {
  res.status(err.status || 500)

  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  })
})

app.listen(process.env.PORT || 3000)

module.exports = app