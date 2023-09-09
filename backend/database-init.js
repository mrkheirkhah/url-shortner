const mongoose = require("mongoose");

function init({ url }) {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = { init };
