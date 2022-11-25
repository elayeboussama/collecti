import cn from "classnames"

const Button = ({ primary, wide, loading }) => {
    const buttonClass = cn({
        "btn": true,
        "btn-primary": primary,
        "btn-block": wide,
        "loading": loading,
    })

    return (
        <button className={buttonClass}>Button</button>)
}

export default Button