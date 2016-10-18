let express = require('express')
let app = express()
let api = require('./routes/api.js')
let bodyParser = require('body-parser')
let cors = require('cors')

app.set('view-engine', 'ejs')
app.use(bodyParser())
app.use(cors())

app.use('/api', api )

app.get('/', function(req,res,next){
  res.render('test.ejs')
})

app.listen(3000, function(){
  console.log('listening on 3000')
})
