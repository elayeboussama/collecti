import { Link } from "react-router-dom";
import { useGetEventQuery } from "../endpoints/apiEndpoints"


const SmallEventCard = (event) => {

  const { data, isLoading } = useGetEventQuery(event.event)
  return (
    <div className="pr-1 card card-side glass bg-base-100 hover:shadow-xl max-w-96 w-80 h-fit">
      <figure className="h-full w-28 max-w-28"><img className="object-cover w-full h-full " src={data?.event.image[0]} alt="Movie" /></figure>
      <div className="p-0 pl-2 card-body ">
        <h2 className="card-title ">{data?.event.name}</h2>
        <p>{data?.event.catchPhrase}</p>
        <div className="justify-end card-actions">
          <Link to={`/events/${data?.event._id}`}>
            <button className="link btn-sm hover:text-primary">details</button>
          </Link>
        </div>
      </div>

    </div>

  )
}

export default SmallEventCard