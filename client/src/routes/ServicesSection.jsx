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
                                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="items-center text-center text-blue-900 card-body">
                                <h2 className="card-title">Hello!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    <div className="shadow-xl card w-96 bg-base-100">
                            <figure className="px-10 pt-10">
                                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="items-center text-center text-blue-900 card-body">
                                <h2 className="card-title">Hello!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                                </div>
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
                                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="items-center text-center text-blue-900 card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    <div className="shadow-xl card w-96 bg-base-100">
                            <figure className="px-10 pt-10">
                                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="items-center text-center text-blue-900 card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                                </div>
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