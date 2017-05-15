const express = require('express')
const router = express.Router()
const knex = require('../db')

router.get('/', (req, res) => {
  console.log('hello from get');
  res.status(200).json({
    hello: 'hello podcast get'
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
      console.log(messages);
      res.json(messages);
    })
})

module.exports = router
