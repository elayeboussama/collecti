import AboutSection from "./AboutSection"
import JoinUsSection from "./JoinUsSection"
import ServicesSection from "./ServicesSection"

const Index = () => {
    return (
        <div className="container ">
        
        <div className="hero ">
            <img src="https://cdn.discordapp.com/attachments/311564936004370434/1059455397150326844/Simple_Shiny_1.svg" className="h-full"/>
           
           
            <div className="flex-col hero-content lg:flex-row-reverse px-28 ">
                <img src="https://cdn.discordapp.com/attachments/311564936004370434/1059446218146717786/Untitled_2.svg"
                 className="max-w-md bg-white rounded-lg shadow-2xl shadow-white" />
                <div className='text-white'>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="w-9/12 py-6">Provident cupiditate voluptatem et in. 
                Quaerat fugiat ut assumenda excepturi exercitationem quasi. 
                In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary" >Get Started</button>
                </div>
            </div>
        </div>

       <AboutSection/>

       <ServicesSection/>

        <JoinUsSection/>

    </div>
    )
}

export default Index