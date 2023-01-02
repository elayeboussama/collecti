// import HeroImage from './heroImagee.png'
// import aboutImage from './about.png'

// import hero from "./SimpleShiny.png"
// import AnimatedShape from "./AnimatedShape.png"

// const Home = ()=>{
//     return(
//         <div className="container  ">
//             {/* <div className="welcome-container flex flex-col items-center w-full h-4/5">
//                 <div className="bg-gray-400 bg-cover bg-no-repeat bg-center w-full h-screen" 
//                     style={{ backgroundImage: `url(https://wp-medias.odella.fr/2020/11/85ab84ae-les-obseques-qui-peut-aider-pour-lorganisation-gettyimages-1194025411-1536x954.jpg)` }}>
            

//                 </div>
//             </div> */}
//             <div className="hero ">
//                 <img src={hero} className="h-full"/>
               
               
//                 <div className="hero-content flex-col lg:flex-row-reverse px-28 ">
//                     <img src={HeroImage} className="max-w-md rounded-lg shadow-2xl shadow-white" />
//                     <div className='text-white'>
//                     <h1 className="text-5xl font-bold">Box Office News!</h1>
//                     <p className="py-6 w-9/12">Provident cupiditate voluptatem et in. 
//                     Quaerat fugiat ut assumenda excepturi exercitationem quasi. 
//                     In deleniti eaque aut repudiandae et a id nisi.</p>
//                     <button className="btn btn-primary">Get Started</button>
//                     </div>
//                 </div>
//             </div>

//             <div className="py-28"
//              >
//                  {/* <img src={wave} className="h-full"/> */}
//                 <div className="hero-content flex-col lg:flex-row pl-28 pr-10">
//                     <img src={aboutImage} className="max-w-sm rounded-lg shadow-2xl" />
//                     <div className='w-11/12 pl-24'>
//                         <h1 className="text-5xl font-bold">About us!</h1>
//                         <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                   
//                     <div className="collapse">
//                         <input type="checkbox" /> 
//                         <div className="collapse-title text-xl font-medium">
//                             <button className="btn btn-primary">See stat</button>
//                         </div>
//                         <div className="collapse-content "> 
//                         <div className="stats shadow">
  
//                             <div className="stat place-items-center ">
//                                 <div className="stat-title">Downloads</div>
//                                 <div className="stat-value">31K</div>
//                                 <div className="stat-desc">From January 1st to February 1st</div>
//                             </div>
                            
//                             <div className="stat place-items-center">
//                                 <div className="stat-title">Users</div>
//                                 <div className="stat-value text-secondary">4,200</div>
//                                 <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
//                             </div>
                            
//                             <div className="stat place-items-center">
//                                 <div className="stat-title">New Registers</div>
//                                 <div className="stat-value">1,200</div>
//                                 <div className="stat-desc">↘︎ 90 (14%)</div>
//                             </div>
                            
//                         </div>
//                         </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className=" hero" >
//                 <img src={AnimatedShape} className="h-full"/>
//                 {/* <div className="hero-overlay bg-opacity-60"></div> */}
//                 <div className="hero-content text-center text-neutral-content ">
//                     <div className="w-full">
//                     <h1 className="mb-5 text-5xl font-bold">Our Services</h1>
//                     <div className="carousel w-full items-center">

//                     <div id="slide1" className="carousel-item relative w-full ">
//                     <div className="w-full flex justify-center gap-12">
//                             <div className="card w-96 bg-base-100 shadow-xl">
//                                     <figure className="px-10 pt-10">
//                                         <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
//                                     </figure>
//                                     <div className="card-body items-center text-center text-blue-900">
//                                         <h2 className="card-title">Hello!</h2>
//                                         <p>If a dog chews shoes whose shoes does he choose?</p>
//                                         <div className="card-actions">
//                                         <button className="btn btn-primary">Buy Now</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             <div className="card w-96 bg-base-100 shadow-xl">
//                                     <figure className="px-10 pt-10">
//                                         <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
//                                     </figure>
//                                     <div className="card-body items-center text-center text-blue-900">
//                                         <h2 className="card-title">Hello!</h2>
//                                         <p>If a dog chews shoes whose shoes does he choose?</p>
//                                         <div className="card-actions">
//                                         <button className="btn btn-primary">Buy Now</button>
//                                         </div>
//                                     </div>
//                             </div>
//                       </div>
//                         <div className="absolute flex justify-between transform -translate-y-1/2 left-28 right-28 top-1/2">
//                             <a href="#slide2" className="btn btn-circle bg-blue-900 ">❮</a> 
//                             <a href="#slide2" className="btn btn-circle bg-blue-900 ">❯</a>
//                         </div>
//                     </div> 
//                     <div id="slide2" className="carousel-item relative w-full gap-12">
//                     <div className="w-full flex justify-center gap-12">
//                             <div className="card w-96 bg-base-100 shadow-xl">
//                                     <figure className="px-10 pt-10">
//                                         <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
//                                     </figure>
//                                     <div className="card-body items-center text-center text-blue-900">
//                                         <h2 className="card-title">Shoes!</h2>
//                                         <p>If a dog chews shoes whose shoes does he choose?</p>
//                                         <div className="card-actions">
//                                         <button className="btn btn-primary">Buy Now</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             <div className="card w-96 bg-base-100 shadow-xl">
//                                     <figure className="px-10 pt-10">
//                                         <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
//                                     </figure>
//                                     <div className="card-body items-center text-center text-blue-900">
//                                         <h2 className="card-title">Shoes!</h2>
//                                         <p>If a dog chews shoes whose shoes does he choose?</p>
//                                         <div className="card-actions">
//                                         <button className="btn btn-primary">Buy Now</button>
//                                         </div>
//                                     </div>
//                             </div>
//                             </div>
                      
//                         <div className="absolute flex justify-between transform -translate-y-1/2 left-28 right-28 top-1/2">
//                             <a href="#slide1" className="btn btn-circle bg-blue-900 ">❮</a> 
//                             <a href="#slide1" className="btn btn-circle bg-blue-900 ">❯</a>
//                         </div>
//                     </div> 

//                     </div>
                      
//                     </div>
//                 </div>
//             </div>

//             <div className="hero  py-28">
//                 <div className="hero-content flex-col lg:flex-row-reverse pl-28 pr-10">
//                     <div className="text-center lg:text-left w-11/12 pl-24">
//                     <h1 className="text-5xl font-bold">Login now!</h1>
//                     <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     </div>
//                     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                     <div className="card-body">
//                         <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Email</span>
//                         </label>
//                         <input type="text" placeholder="email" className="input input-bordered" />
//                         </div>
//                         <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Password</span>
//                         </label>
//                         <input type="text" placeholder="password" className="input input-bordered" />
//                         <label className="label">
//                             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                         </label>
//                         </div>
//                         <div className="form-control mt-6">
//                         <button className="btn btn-primary">Login</button>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//                 </div>

//         </div>
      
//     )
// }

// export default Home;