const { Schema, model } = require('mongoose')
const imageSchema = new Schema({
  url: {
    type: String
  }
}, {
  versionKey: false,
  timestamps: true
})

const Image = model('Image', imageSchema)

module.exports = Image