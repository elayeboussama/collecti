import cn from "classnames"

const Button = ({ children, primary, wide, loading, className, ...props }) => {
    const buttonClass = cn({
        "btn": true,
        "btn-primary": primary,
        "btn-block": wide,
        "loading": loading,
        [className]: className
    })

    return (
        <button className={buttonClass} {...props}>{children}</button>)
}

export default Button