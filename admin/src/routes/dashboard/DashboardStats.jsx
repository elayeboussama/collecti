const DashboardStats=({title, icon, value, description, colorIndex})=>{

    const COLORS = ["primary", "primary"]

    const getDescStyle = () => {
        if(description.includes("↗︎"))return "font-bold text-green-700"
        else if(description.includes("↙"))return "font-bold text-red-700"
        else return ""
    }

    const getBackgroundColor = () =>{
        if(title.includes("Approved"))return "bg-green-100"
        else if(title.includes("Pending"))return "bg-fuchsia-100"

}
    return(
        <div className={`shadow stats `+ getBackgroundColor()}>
            <div className="stat">
                <div className={`stat-figure text-${COLORS[colorIndex%2]}`}>{icon}</div>
                <div className="stat-title">{title}</div>
                <div className={`stat-value text-${COLORS[colorIndex%2]}`}>{value}</div>
                <div className={"stat-desc  " + getDescStyle()}>{description}</div>
            </div>
        </div>
    )
}

export default DashboardStats