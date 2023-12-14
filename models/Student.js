import mongoose from "mongoose";
const {Schema}= mongoose;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  institution : {
    type: String,
  },
  studentId:{
    type : Number,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  courses:{
    type: Object,
    default: {},
  }
});

module.exports = mongoose.models.Student || mongoose.model("Student", StudentSchema);