const mongoose = require("mongoose");

const schema = mongoose.Schema({
  dna: Array,
  isMutant: Boolean
});

module.exports = mongoose.model("dna", schema);