const Avatar = ({ src }) => {
    return (
        <div className="avatar">
            <div className="w-14 rounded-3xl">
                <img src={src || "https://placeimg.com/192/192/people"} alt="" />
            </div>
        </div>
    )
}

export default Avatar