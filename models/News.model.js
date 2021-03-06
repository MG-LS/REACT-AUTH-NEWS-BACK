const mongoose = require("mongoose");
const newsSchema = mongoose.Schema({
  img: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  text: {
    type: String,
    required: true,
  },


});

const News = mongoose.model("News", newsSchema);
module.exports = News;