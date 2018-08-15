const mongoose = require('mongoose')

const url = 'mongodb://puhelinluettelo_dmitri:secret_password@ds247121.mlab.com:47121/puhelinluettelo'

mongoose.connect(url, { useNewUrlParser: true })

const Person = mongoose.model('Person', {
  name: String,
  number:String
})

module.exports = Person