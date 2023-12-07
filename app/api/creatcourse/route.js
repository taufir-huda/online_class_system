import connectToMongo from "../../../db";

import { NextResponse } from "next/server";

const TexttoHtml = (text) => {
  var Html;
  if (text[0] == "-") {
    text = text.replace("-", "<ul><li>");
    text = text + "</li></ul>";
    Html = text.replaceAll("\n-", "</li><li>");
  } else {
    text = "<p>" + text ;
    text = text.replace("\n\n","</p>")

    // Html = text.replaceAll("\n-", "<br>");
  }
  return Html;
};

export async function POST(request) {
  await connectToMongo();
  try {
    const body = await request.json();
    const { shortdescription, details } = body;
    // console.log( "kdhjk dhnjkd idan",shortdescription,"       ",TexttoHtml(shortdescription))
    console.log(details, "     ", TexttoHtml(details));
    // const user = User.findOne({ email });
    // if (user) {
    //   return NextResponse.json(
    //     { error: "User already exists" },
    //     { status: 400 }
    //   );
    // }

    // const newUser = new User({ username, email, password: hashedPassword });
    // const savedUser = await newUser.save();

    return NextResponse.json(
      { message: "User created successfully", success: true },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
