let express = require('express')
let router = express()
let Houses = require('../models/house.js')
let helper = require('../controller/helper.js')

router.get('/', function(req,res,next){
  helper.allHouse(function(result){
    res.json(result)
  })
})

router.get('/:query', function(req,res,next){
  helper.searchHouse(req.params.query, function(result){
    res.json(result)
  })
})

router.post('/', function(req,res,next){
  helper.newHouse(req.body.title, req.body.address, req.body.description, req.body.price, req.body.phone_number, req.body.email, req.body.picture, req.body.lat, req.body.lng, function(result){
    res.json(result)
  })
})

module.exports = router
