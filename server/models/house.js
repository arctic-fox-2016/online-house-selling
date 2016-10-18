let mongoose = require('mongoose')
mongoose.connect('localhost:27017/test2-online-house')
let Schema = mongoose.Schema

let houseSchema = new Schema({
  title: String,
  address: String,
  description: String,
  price: Number,
  phone_number: String,
  email: String,
  picture: String,
  google_map:{
    lat: String,
    lng: String
  }
})

let house = mongoose.model('houses', houseSchema)
module.exports = house
