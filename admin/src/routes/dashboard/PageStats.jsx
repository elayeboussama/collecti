import HeartIcon  from '@heroicons/react/24/outline/HeartIcon'
import BoltIcon  from '@heroicons/react/24/outline/BoltIcon'


const PageStats = ({donators, raiseMoney})=>{
    return(
        <div className="shadow stats bg-base-100">
  
  <div className="stat">
    <div className="invisible stat-figure md:visible">
        <HeartIcon className='w-8 h-8'/>
    </div>
    <div className="stat-title">Donators</div>
                <div className="stat-value">{donators}</div>
    {/* <div className="stat-desc">21% more than last month</div> */}
  </div>
  
  <div className="stat">
    <div className="invisible stat-figure md:visible">
        <BoltIcon className='w-8 h-8'/>
    </div>
    <div className="stat-title">Donations</div>
                <div className="stat-value">${raiseMoney}</div>
    {/* <div className="stat-desc">14% more than last month</div> */}
  </div>
</div>
    )
}

export default PageStats