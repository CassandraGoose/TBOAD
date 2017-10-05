const express = require('express')
const router = express.Router()
const knex = require('../db')

router.get('/', (req, res) => {
  console.log('hello from get');
  res.status(200).json({
    hello: 'status200'
  })
})

router.post('/', (req, res) => {
  console.log(req.body.text)
  var theMessage = {
    name: req.body.name,
    text: req.body.text
  }
  knex('message')
    .insert(theMessage)
    .then(messages => {
      res.json(messages);
    })
})

module.exports = router
