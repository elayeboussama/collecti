import cn from 'classnames'
import Avatar from './Avatar'

const UserInfo = ({ className }) => {

    const userInfoClassName = cn(
        'flex-row items-center w-full py-4 menu border-y text-base-content',
        className
    )

    return (
        <div className={userInfoClassName}>
            <Avatar />
            <div className="ml-4 leading-5">
                <h2 className="font-bold leading-4">John Doe</h2>
                <p className="text-sm text-gray-500">john@gmail.com</p>
            </div>
        </div>
    )
}

export default UserInfo