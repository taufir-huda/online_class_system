import connectToMongo from "../../db"
import React from 'react'
import Course from "../../models/course"
// var mongoose = require('mongoose');
// var Student = mongoose.model('Student')

async function page() {
    connectToMongo()
//     const courses = await Course.create([       
//     {
//       shorttitle: "pre-eng-25",
//       shortdescription: `<h3><span></span></h3><ul style="list-style-type:disc"><li>বোর্ড বইয়ের অনুশীলনী MCQ প্রশ্নব্যাংক ৫টি</li><li>১০৫টি&nbsp;স্মার্টবোর্ড&nbspলাইভ ক্লাস (সকল বিষয়)</li><li>১০৫টি লাইভ MCQ এক্সাম (সকল বিষয়)</li><li>মেডিকেল, ইঞ্জিনিয়ারিং, ভার্সিটি ‘ক’ আলাদা প্রি-এডমিশন ক্লাস-পরীক্ষা</li><li>ডাউট সলভিংয়ে সার্বক্ষণিক Q&amp;A সার্ভিস</li><li>শুরু: ১৩ জানুয়ারি, ২০২৪ (সম্ভাব্য)</li></ul>`,
//       title: "ফাইনাল রিভিশন কোর্স &amp; প্রি-এডমিশন কোর্স",
//       courseId: 101,
//       State: "past",
//     },
//     {
//         shorttitle: "pre-eng-24",
//         shortdescription: `<h3><span></span></h3><ul style="list-style-type:disc"><li>বোর্ড বইয়ের অনুশীলনী MCQ প্রশ্নব্যাংক ৫টি</li><li>১০৫টি&nbsp;স্মার্টবোর্ড&nbspলাইভ ক্লাস (সকল বিষয়)</li><li>১০৫টি লাইভ MCQ এক্সাম (সকল বিষয়)</li><li>মেডিকেল, ইঞ্জিনিয়ারিং, ভার্সিটি ‘ক’ আলাদা প্রি-এডমিশন ক্লাস-পরীক্ষা</li><li>ডাউট সলভিংয়ে সার্বক্ষণিক Q&amp;A সার্ভিস</li><li>শুরু: ১৩ জানুয়ারি, ২০২৪ (সম্ভাব্য)</li></ul>`,
//         title: "ফাইনাল রিভিশন কোর্স &amp; প্রি-এডমিশন কোর্স",
//         courseId: 102,
//         State: "past",
//     },
//     {
//         shorttitle: "pre-eng-23",
//         shortdescription: `<h3><span></span></h3><ul style="list-style-type:disc"><li>বোর্ড বইয়ের অনুশীলনী MCQ প্রশ্নব্যাংক ৫টি</li><li>১০৫টি&nbsp;স্মার্টবোর্ড&nbspলাইভ ক্লাস (সকল বিষয়)</li><li>১০৫টি লাইভ MCQ এক্সাম (সকল বিষয়)</li><li>মেডিকেল, ইঞ্জিনিয়ারিং, ভার্সিটি ‘ক’ আলাদা প্রি-এডমিশন ক্লাস-পরীক্ষা</li><li>ডাউট সলভিংয়ে সার্বক্ষণিক Q&amp;A সার্ভিস</li><li>শুরু: ১৩ জানুয়ারি, ২০২৪ (সম্ভাব্য)</li></ul>`,
//         title: "ফাইনাল রিভিশন কোর্স &amp; প্রি-এডমিশন কোর্স",
//         courseId: 103,
//         State: "upcomming",
//     },
//     {
//         shorttitle: "pre-eng-26",
//         shortdescription: `<h3><span></span></h3><ul style="list-style-type:disc"><li>বোর্ড বইয়ের অনুশীলনী MCQ প্রশ্নব্যাংক ৫টি</li><li>১০৫টি&nbsp;স্মার্টবোর্ড&nbspলাইভ ক্লাস (সকল বিষয়)</li><li>১০৫টি লাইভ MCQ এক্সাম (সকল বিষয়)</li><li>মেডিকেল, ইঞ্জিনিয়ারিং, ভার্সিটি ‘ক’ আলাদা প্রি-এডমিশন ক্লাস-পরীক্ষা</li><li>ডাউট সলভিংয়ে সার্বক্ষণিক Q&amp;A সার্ভিস</li><li>শুরু: ১৩ জানুয়ারি, ২০২৪ (সম্ভাব্য)</li></ul>`,
//         title: "ফাইনাল রিভিশন কোর্স &amp; প্রি-এডমিশন কোর্স",
//         courseId: 104,
//         State: "upcomming",
//     },
//     {
//         shorttitle: "pre-eng-27",
//         shortdescription: `<h3><span></span></h3><ul style="list-style-type:disc"><li>বোর্ড বইয়ের অনুশীলনী MCQ প্রশ্নব্যাংক ৫টি</li><li>১০৫টি&nbsp;স্মার্টবোর্ড&nbspলাইভ ক্লাস (সকল বিষয়)</li><li>১০৫টি লাইভ MCQ এক্সাম (সকল বিষয়)</li><li>মেডিকেল, ইঞ্জিনিয়ারিং, ভার্সিটি ‘ক’ আলাদা প্রি-এডমিশন ক্লাস-পরীক্ষা</li><li>ডাউট সলভিংয়ে সার্বক্ষণিক Q&amp;A সার্ভিস</li><li>শুরু: ১৩ জানুয়ারি, ২০২৪ (সম্ভাব্য)</li></ul>`,
//         title: "ফাইনাল রিভিশন কোর্স &amp; প্রি-এডমিশন কোর্স",
//         courseId: 105,
//         State: "current",
//     },
// ]);

    return (
        <div>
            jshauyuiqfhui 
        </div>
    )
}

export default page
