const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://antortaufiq:4nBFCmqjuiURS5jb@coursesking.vapci1l.mongodb.net/CourseKing?retryWrites=true&w=majority";

const connectToMongo = async () => {
  await mongoose.connect(mongoURI).then(()=>{
    console.log("connected to db")
  }).catch((err)=>{
    console.log(err)
  });
};

module.exports = connectToMongo;
