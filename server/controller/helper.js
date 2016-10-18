let Houses = require('../models/house.js')

let newHouse = function(title, address, description, price, phone_number, email, picture, lat, lng, callback){
  let newhouse = new Houses({title: title, address: address, description: description, price: price, phone_number, email:email, picture:picture, "google_map.lat": lat, "google_map.lng": lng}).save(function(err, result){
    if(err){
      callback({message:"error", details: err})
    } else {
      callback(result)
    }
  })
}

let allHouse = function(callback){
  Houses.find({}, function(err, result){
    if(err){
      callback({message: "error", details: err})
    } else {
      callback(result)
    }
  })
}

let searchHouse = function(query,callback){
  Houses.find({$or: [{title: {$regex: `${query}*`,$options: 'i'}},{address: {$regex: `${query}*`,$options: 'i'}},{description: {$regex: `${query}*`,$options: 'i'}}]}, function(err, result){
    if(err){
      callback({message: "error", details: err})
    } else {
      callback(result)
    }
  })
}

module.exports ={newHouse, allHouse, searchHouse}
