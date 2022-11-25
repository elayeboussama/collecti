import cn from "classnames"

const Button = ({ children, primary, wide, loading }) => {
    const buttonClass = cn({
        "btn": true,
        "btn-primary": primary,
        "btn-block": wide,
        "loading": loading,
    })

    return (
        <button className={buttonClass}>{children}</button>)
}

export default Button