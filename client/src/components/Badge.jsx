import cn from 'classnames'
import React from 'react'

const Badge = ({ status }) => {

    const BadgeClassName = cn({
        "inline-block px-4 rounded-full font-medium capitalize": true,
        'bg-[#fae9c2] text-[#542b14]': status === 'pending',
        'bg-[#e6f4ea] text-[#1f5d3d]': status === 'approved',
        'bg-[#f4d7d7] text-[#5d1f1f]': status === 'rejected',
    })

    return (
        <div className={BadgeClassName}>{status}</div>
    )
}

export default Badge