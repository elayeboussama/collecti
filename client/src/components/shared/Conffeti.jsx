import cn from 'classnames';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useSelector } from 'react-redux';
import useWindowSize from '../../hooks/useWindowSize';

const Conffeti = () => {
    const size = useWindowSize()
    const conffeti = useSelector(state => state.conffeti)
    const [showClassName, setShowClassName] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowClassName(false)
        }, 5000)
    }, [])


    return (
        <div className={cn({
            "absolute top-0 left-0 z-30": true,
            "invisible": showClassName
        })}>
            <Confetti
                recycle={conffeti.isVisible}
                width={size.width}
                height={size.height}
            />
        </div>
    )
}

export default Conffeti