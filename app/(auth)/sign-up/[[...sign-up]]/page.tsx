import { SignIn, SignUp } from "@clerk/nextjs";
import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <SignUp />
    </div>
  );
}
