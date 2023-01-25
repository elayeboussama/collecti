import AboutSection from "./AboutSection"
import JoinUsSection from "./JoinUsSection"
import ServicesSection from "./ServicesSection"
import Button from "../components/shared/Button"
import { useEffect } from "react"
import { useState } from "react"

const Index = () => {
    const title = "Welcome to COLLECTI!"
    const [i, setI] = useState(-1)
    useEffect(() => {
        setTimeout(() => {
            if (i < title.length) {
                document.getElementById("title").innerHTML += title.charAt(i);
                setI(i + 1);

            }
        }, 70)
        // if( i ==title.length){
        //     document.getElementById("title").innerHTML=""
        //     setI(0)
        //     setTimeout(() =>{
        //         if (i < title.length) {
        //             document.getElementById("title").innerHTML += title.charAt(i);
        //             setI(i+1);

        //           }},50)


        // }

    })
    return (
        <div className="w-full scroll-smooth">

            <div className="hero ">
                <img src="https://cdn.discordapp.com/attachments/311564936004370434/1059455397150326844/Simple_Shiny_1.svg" className="w-full h-full" />
                <div className="flex-col hero-content lg:flex-row-reverse px-28 ">
                    <img src="https://cdn.discordapp.com/attachments/311564936004370434/1059446218146717786/Untitled_2.svg"
                        className="max-w-md bg-white rounded-lg shadow-2xl shadow-white" />
                    <div className='text-white'>
                        <h1 className="text-5xl font-bold " id="title"></h1>
                        <p className="w-9/12 py-6"> Your support helps us provide valuable resources and opportunities for
                            our students, and we are deeply grateful for your contribution.
                            Your generosity will make a real impact in the lives of our students and the success of our clubs..</p>
                    </div>
                </div>
            </div>
            <div className="scroll-smooth">
                <AboutSection />
                <section id="join">
                    <ServicesSection />
                </section>
                <JoinUsSection /></div>


        </div>
    )
}

export default Index