import mongoose from "mongoose";
const {Schema}= mongoose;

const CourseSchema = new Schema({
    shorttitle: {
        type: String,
        required: true,
        unique : true,
    },
    title : {
        type: String,
        required: true,
    },
    courseFee:{
        type : Number,
        required : true,
    },
    shortdescription: {
        type: String,
        required : true,
    },
    Startingdate: {
        type: Date,
    },
    State: {
        type : String,
        default : "upcomming",
    }
});

module.exports = mongoose.models.Course || mongoose.model("Course", CourseSchema);