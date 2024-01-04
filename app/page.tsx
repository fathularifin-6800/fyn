"use client"
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Button from "./ui/components/Button";


const Page = () => {
  const [name] = useState([
    "MY NAME FATHUL ARIFIN.",
    "WELCOME TO MY BLOGS."
  ])
  const buttonHome = "Visit my About"
  return (
    <main className="flex min-h-screen  items-center justify-between flex-col">
        <div className="text-success text-2xl md:text-5xl font-bold mt-56">
          <p className="text-white">Hi....</p>
            <Typewriter 
            words={name}
            loop={false}
            cursorStyle={"_"}
            cursor
            />
            <Button text1={buttonHome}/>
        </div>
    </main>
  )
}
export default Page;
