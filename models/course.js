import mongoose from "mongoose";
const {Schema}= mongoose;

const CourseSchema = new Schema({
    shorttitle: {
        type: String,
        required: true,
    },
    title : {
        type: String,
        required: true,
    },
    courseId:{
        type : Number,
        unique : true,
        default : 1,
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
    }
});

module.exports = mongoose.models.Course || mongoose.model("Course", CourseSchema);