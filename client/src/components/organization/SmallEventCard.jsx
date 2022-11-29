import { Link } from "react-router-dom";

const SmallEventCard = ({event}) => {
    return(
        <div className=" card card-side glass bg-base-100 hover:shadow-xl h-1/5 ">
                  <figure className="w-2/4"><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
                  <div className="card-body p-0 pl-1 ">
                    <h2 className="card-title">{event.title}</h2>
                    <p>short event description</p>
                    <div className="card-actions justify-end">
                      <Link to={`events/1`}>
                      <button className="link btn-sm hover:text-primary">details</button>
                      </Link>
                    </div>
                  </div>
                  
                </div>

    )
}

export default SmallEventCard;