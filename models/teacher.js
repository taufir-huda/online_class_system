import mongoose from "mongoose";
const { Schema } = mongoose;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  teachersId: {
    type: Number,
    unique: true,
    default: 1,
  },
  email: {
    type: String,
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
  courses: {
    type: Object,
  },
});

module.exports =
  mongoose.models.Student || mongoose.model("teacher", StudentSchema);
