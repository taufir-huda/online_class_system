import { NextResponse } from "next/server";
import connectToMongo from "../../../db";
import Student from "../../../models/Student";
const bcrypt = require("bcrypt");

// Function to generate a unique 4-digit number
function generateUniqueNumber() {
  return Math.floor(1000 + Math.random() * 9000);
}

// Function to generate the student ID
function generateStudentID() {
  const currentYear = new Date().getFullYear();
  const uniqueNumber = generateUniqueNumber();
  return `${currentYear}${uniqueNumber}`;
}

// Function to check if the generated student ID exists in the database
async function isStudentIDUnique(studentID) {
  const existingStudent = await Student.findOne({ studentId: studentID });
  return !existingStudent;
}

async function POST(request) {
  console.log("Server reached");
  await connectToMongo();

  try {
    const student = await request.json();
    const phone = student.phone;
    const name = student.name;
    const institution = student.institution;
    const pass = student.pass;
    var user = await Student.findOne({ phone });
    if (user !== null) {
      console.log("phone");
      //console.log(user);
      return NextResponse.json(
        {
          error: "Phone already in use",
        },
        { status: 400 }
      );
    }

    let generatedStudentID = generateStudentID();

    while (!(await isStudentIDUnique(generatedStudentID))) {
      generatedStudentID = generateStudentID();
    }

    const saltRounds = 10;
    const hash = await bcrypt.hashSync(pass, saltRounds);
    var newStudent;
    newStudent = new Student({
      name,
      institution,
      password: hash,
      phoneNumber: phone,
      studentId: generatedStudentID,
    });
    await newStudent.save();
    console.log("saved");
    return NextResponse.json(
      {
        message: "Student registered",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err.message);
    return NextResponse.json(
      {
        error: "Signup Failed!",
      },
      {
        status: 500,
      }
    );
  }
}

module.exports = { POST };
