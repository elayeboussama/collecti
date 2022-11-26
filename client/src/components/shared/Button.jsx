import cn from "classnames"

const Button = ({ children, primary, wide, loading, className }) => {
    const buttonClass = cn({
        "btn": true,
        "btn-primary": primary,
        "btn-block": wide,
        "loading": loading,
        [className]: className
    })

    return (
        <button className={buttonClass}>{children}</button>)
}

export default Button