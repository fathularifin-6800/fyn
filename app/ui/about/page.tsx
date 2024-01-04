"use client"
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Button from "../components/Button";

const About = () => {
    const [about] = useState(['WELCOME TO MY ABOUT PAGE'])
    const buttonAbout = "Follow me";
    return ( 
        <div className="mt-20">
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="text-5xl font-bold text-success">
                        <Typewriter 
                        words={about}
                        loop={false}
                        />
                    </h1>
                    <p className="py-6">Hello, my name is Fathul Arifin, usually called Fin, I am 24 years old, now I am studying at Mataram University of Technology, majoring in Information Engineering, I am also active in the Islamic Student Association organization.</p>
                    <Button text={buttonAbout}/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;