import security from "./security.gif"
import mobile from "./mobile.gif"
import eventc from "./slider1.gif"
import profile from "./infor.gif"
const ServicesSection = () => {
    return(
        <div className=" hero" >
        <img src="https://cdn.discordapp.com/attachments/311564936004370434/1059445646022692874/Animated_Shape_1.svg"
         className="h-full"/>
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="text-center hero-content text-neutral-content ">
            <div className="w-full">
            <h1 className="mb-5 text-5xl font-bold">Our Services</h1>
            <div className="items-center w-full carousel">

            <div id="slide1" className="relative w-full carousel-item ">
            <div className="flex justify-center w-full gap-12">
                    <div className="shadow-xl card w-96 bg-base-100">
                            <figure className="px-10 pt-10">
                                
                                <img src={security} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="items-center text-center text-blue-900 card-body">
                                <h2 className="card-title">Online donation platform</h2>
                                <p> A secure and easy-to-use online donation platform
                                     where donors can make contributions to specific university clubs 
                                      💰</p>
                                {/* <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                                </div> */}
                            </div>
                        </div>
                    <div className="shadow-xl card w-96 bg-base-100">
                            <figure className="px-10 pt-10">
                                <img src={mobile} alt="Shoes" className="-mt-5 rounded-xl max-h-44" />
                            </figure>
                            <div className="items-center text-center text-blue-900 card-body">
                                <h2 className="card-title">Mobile compatibility</h2>
                                <p>A mobile-friendly website that can be accessed on any device,
                                     making it easy for donors to make contributions on the go.
                                     📱</p>
                                {/* <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                                </div> */}
                            </div>
                    </div>
              </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-28 right-28 top-1/2">
                    <a href="#slide2" className="bg-blue-900 btn btn-circle ">❮</a> 
                    <a href="#slide2" className="bg-blue-900 btn btn-circle ">❯</a>
                </div>
            </div> 
            <div id="slide2" className="relative w-full gap-12 carousel-item">
            <div className="flex justify-center w-full gap-12">
                    <div className="shadow-xl card w-96 bg-base-100">
                            <figure className="px-10 pt-10">
                                <img src={eventc} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="items-center text-center text-blue-900 card-body">
                                <h2 className="card-title">Event Creation</h2>
                                <p>Our platform allows clubs to create and post upcoming events,
                                     including date, time, location, and details about the event 📅.
                                    </p>
                                {/* <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                                </div> */}
                            </div>
                        </div>
                    <div className="shadow-xl card w-96 bg-base-100">
                            <figure className="px-10 pt-10">
                                <img src={profile} alt="Shoes" className="-mt-5 rounded-xl max-h-44" />
                            </figure>
                            <div className="items-center text-center text-blue-900 card-body">
                                <h2 className="card-title">Club Information</h2>
                                <p> Clubs can also provide detailed information about their organization, including mission statement,
                                     contact information, and upcoming events 🙍🏽‍♂️.
                                    </p>
                                {/* <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                                </div> */}
                            </div>
                    </div>
                    </div>
              
                <div className="absolute flex justify-between transform -translate-y-1/2 left-28 right-28 top-1/2">
                    <a href="#slide1" className="bg-blue-900 btn btn-circle ">❮</a> 
                    <a href="#slide1" className="bg-blue-900 btn btn-circle ">❯</a>
                </div>
            </div> 

            </div>
              
            </div>
        </div>
    </div>
    )
}

export default ServicesSection