import Youtube from 'react-youtube'
import Button from '../components/shared/Button'

const Event = () => {
    return (
        <div>
            <div className='max-w-3xl'>
                <Youtube className='relative overflow-hidden w-full aspect-video [&>iframe]:absolute [&>iframe]:inset-0 [&>iframe]:w-full [&>iframe]:h-full' videoId='UT5F9AXjwhg' />
            </div>
            <div className="card-body p-4">
                <h2 className="card-title">
                    Cookies are not for breakfast!
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ipsam error harum distinctio ducimus esse debitis dignissimos cumque iusto cupiditate.</p>
                <div className="menu flex flex-row border-y items-center py-4 text-base-content w-full">
                    <div className="avatar">
                        <div className="w-14 rounded-3xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div className="ml-4 leading-5 ">
                        <h2 className="font-bold leading-4">John Doe</h2>
                        <p className="text-sm text-gray-500">john@gmail.com</p>
                    </div>
                </div>
                <progress className="progress progress-success w-full my-1" value="70" max="100"></progress>
                <div className='flex gap-14'>
                    <div className='flex flex-col'>
                        <span className='font-bold text-emerald-500 text-lg'>420.50 TND</span>
                        <span className='text-gray-500 text-xs'>69%</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-bold text-gray-500'>71</span>
                        <span className='text-gray-500 text-xs'>backers</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-bold text-gray-500'>19</span>
                        <span className='text-gray-500 text-xs'>days ago</span>
                    </div>
                </div>
                <div className='my-5'>
                    <Button primary wide className={'bg-emerald-600 border-emerald-600'}>
                        Donate
                    </Button>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>About us</h2>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus error eius temporibus ipsum mollitia, autem tempore praesentium in. Eum illo ad modi necessitatibus. Odio possimus natus veritatis enim dolores consequuntur fuga cupiditate ab, quae quo a quam nostrum itaque unde deleniti rem sed consequatur neque et ut. Laboriosam, incidunt adipisci.</p>
                </div>
            </div>
        </div>
    )
}

export default Event