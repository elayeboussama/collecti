import cn from 'classnames'
import { useOrgDetailsQuery } from '../../endpoints/AuthEndpoints'
import Avatar from './Avatar'

const UserInfo = ({ id, className }) => {

    const { data } = useOrgDetailsQuery(id)

    const userInfoClassName = cn(
        'flex-row items-center w-full py-4 menu border-y text-base-content',
        className
    )

    return (
        <div className={userInfoClassName}>
            <Avatar src={data?.organization.logo} id={id} />
            <div className="ml-4 leading-5">
                <h2 className="font-bold leading-4">{data?.organization.name}</h2>
                <p className="text-sm text-gray-500">{data?.organization.email}
                </p>
            </div>
        </div>
    )
}

export default UserInfo