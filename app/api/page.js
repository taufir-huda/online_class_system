import connectToMongo from "../../db"
import React from 'react'
import Student from "@/models/Student"
// var mongoose = require('mongoose');
// var Student = mongoose.model('Student')

async function page() {
    connectToMongo()
    const student = await Student.create({
        name: "Mahin hasan",
        password: "hguae173y7",
        email: "demo3@gmail.com",
        phoneNumber: "017365456965",
        studentId: 3,
    });
    
    return (
        <div>
            jshauyuiqfhui 
        </div>
    )
}

export default page
