
const Index = () => {
    return (
        <div className="container  ">
        {/* <div className="welcome-container flex flex-col items-center w-full h-4/5">
            <div className="bg-gray-400 bg-cover bg-no-repeat bg-center w-full h-screen" 
                style={{ backgroundImage: `url(https://wp-medias.odella.fr/2020/11/85ab84ae-les-obseques-qui-peut-aider-pour-lorganisation-gettyimages-1194025411-1536x954.jpg)` }}>
        

            </div>
        </div> */}
        <div className="hero ">
            <img src="https://cdn.discordapp.com/attachments/311564936004370434/1059448023031222322/Simple_Shiny.svg" className="h-full"/>
           
           
            <div className="hero-content flex-col lg:flex-row-reverse px-28 ">
                <img src="https://cdn.discordapp.com/attachments/311564936004370434/1059446218146717786/Untitled_2.svg"
                 className="max-w-md rounded-lg shadow-2xl shadow-white bg-white" />
                <div className='text-white'>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6 w-9/12">Provident cupiditate voluptatem et in. 
                Quaerat fugiat ut assumenda excepturi exercitationem quasi. 
                In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary" >Get Started</button>
                </div>
            </div>
        </div>

        <div className="py-28 flex flex-col items-center gap-20">
             {/* <img src={wave} className="h-full"/> */}
            <div className="hero-content flex-col lg:flex-row pl-44 ">
                <img src="https://cdn.discordapp.com/attachments/311564936004370434/1059440775567519866/undraw_transfer_money_re_6o1h.svg" className="max-w-sm rounded-lg shadow-2xl" />
                <div className='w-11/12 pl-24'>
                    <h1 className="text-5xl font-bold">About us!</h1>
                    <p className="py-6 ">Provident cupiditate voluptatem et in.
                     Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                      In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>
                
            </div>
            <div className="stats  w-4/5 gap-48">
                        
                        <div className="stat">
                            <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div className="stat-title">Total Likes</div>
                            <div className="stat-value text-primary">25.6K</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>
                        
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div className="stat-title">Page Views</div>
                            <div className="stat-value text-secondary">2.6M</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>
                        
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                <img src="https://placeimg.com/128/128/people" />
                                </div>
                            </div>
                            </div>
                            <div className="stat-value">86%</div>
                            <div className="stat-title">Tasks done</div>
                            <div className="stat-desc text-secondary">31 tasks remaining</div>
                        </div>
                        
                        </div>
        </div>

        <div className=" hero" >
            <img src="https://cdn.discordapp.com/attachments/311564936004370434/1059445646022692874/Animated_Shape_1.svg"
             className="h-full"/>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center text-neutral-content ">
                <div className="w-full">
                <h1 className="mb-5 text-5xl font-bold">Our Services</h1>
                <div className="carousel w-full items-center">

                <div id="slide1" className="carousel-item relative w-full ">
                <div className="w-full flex justify-center gap-12">
                        <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center text-blue-900">
                                    <h2 className="card-title">Hello!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center text-blue-900">
                                    <h2 className="card-title">Hello!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                        </div>
                  </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-28 right-28 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-blue-900 ">❮</a> 
                        <a href="#slide2" className="btn btn-circle bg-blue-900 ">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full gap-12">
                <div className="w-full flex justify-center gap-12">
                        <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center text-blue-900">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center text-blue-900">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                        </div>
                        </div>
                  
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-28 right-28 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-blue-900 ">❮</a> 
                        <a href="#slide1" className="btn btn-circle bg-blue-900 ">❯</a>
                    </div>
                </div> 

                </div>
                  
                </div>
            </div>
        </div>

        <div className="hero  py-28" id="login">
            <div className="hero-content flex-col lg:flex-row-reverse pl-28 pr-10">
                <div className="text-center lg:text-left w-11/12 pl-24">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </div>
                </div>
            </div>
            </div>

    </div>
    )
}

export default Index