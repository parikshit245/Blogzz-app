const mongoose = require('mongoose');

const cnt = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

cnt();
