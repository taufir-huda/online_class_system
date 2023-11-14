"use server";

export async function getsudentdata(id) {
  console.log(`id = ${id}`);
  return {
    Id: 23001,
    name: "Nasib Islam Aurko",
    institute: "BUET",
    courses: 5,
  };
}
