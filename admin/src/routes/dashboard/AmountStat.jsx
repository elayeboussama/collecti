

const AmountStats =({donators, raiseMoney})=>{
    return(
        <div className="shadow stats bg-base-100">
            <div className="bg-blue-100 stat">
                <div className="stat-title">Donators</div>
                <div className="stat-value">{donators}</div>
                <div className="stat-actions">
                    <button className="btn btn-xs">View Users</button> 
                </div>
            </div>
            
            <div className="stat">
                <div className="stat-title">Donations</div>
                <div className="stat-value">${raiseMoney}</div>
                <div className="stat-actions">
                    <button className="btn btn-xs">View Members</button> 
                </div>
            </div>
        </div>
    )
}

export default AmountStats