import cn from "classnames"

const Button = ({ primary, wide }) => {
    const buttonClass = cn({
        "btn": true,
        "btn-primary": primary,
        "btn-wide": wide,
    })

    return (
        <button className={buttonClass}>Button</button>)
}

export default Button