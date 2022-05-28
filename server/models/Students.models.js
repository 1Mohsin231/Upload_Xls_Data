const mongoose = require('mongoose')

const Students = new mongoose.Schema({
    id: {
    type: Number,
    // required: true,
  },
  name: {
    type: String,
    // required: true,
  },
  class: {
    type: Number,
    // required: true,
  },
  section: {
    type: String,
    // required: true,
  },
  age:{
      type: Number,
      // required: true,
  },
  attendance:{
      type: Boolean,
      // required: true,
  }
})

const Std = mongoose.model("Students Details", Students)
module.exports = Std

