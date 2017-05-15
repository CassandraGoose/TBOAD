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
  console.log(req.body.url)
  var thePodcast = {
    url: req.body.url
  }
  knex('podcast')
    .insert(podcast)
    .then(podcasts => {
      console.log(podcasts);
      res.json(podcasts);
    })
})

module.exports = router
