"use client"
import React from "react";
import { useRouter } from "next/router";

const ID = ({params}) => {
  const {id} = params;

  return (<div>{id}</div>);
};

export default ID;