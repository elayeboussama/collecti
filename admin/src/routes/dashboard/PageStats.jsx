import HeartIcon  from '@heroicons/react/24/outline/HeartIcon'
import BoltIcon  from '@heroicons/react/24/outline/BoltIcon'


const PageStats = ({})=>{
    return(
        <div className="shadow stats bg-base-100">
  
  <div className="stat">
    <div className="invisible stat-figure md:visible">
        <HeartIcon className='w-8 h-8'/>
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="invisible stat-figure md:visible">
        <BoltIcon className='w-8 h-8'/>
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value">2.6M</div>
    <div className="stat-desc">14% more than last month</div>
  </div>
</div>
    )
}

export default PageStats