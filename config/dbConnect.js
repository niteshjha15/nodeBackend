const mongoose = require("mongoose");

const dbConnect = async () =>
  await mongoose.connect(
    "mongodb+srv://admin:4u8yG5rqMw1IdhuZ@cluster0.kvj3g.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
  );

module.exports = dbConnect;
