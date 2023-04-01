const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://tushar:1793248650@cluster.worozjg.mongodb.net/?retryWrites=true&w=majority", {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`DB Connected at: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err}`);
    process.exit(1);
  }
};

module.exports = connectDB;
