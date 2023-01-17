// import Youtube from 'react-youtube'
import { useParams } from 'react-router-dom';
import Button from '../components/shared/Button'
import ImageSlider from '../components/shared/ImageSlider'
import { useGetEventQuery } from '../endpoints/AuthEndpoints'
import { differenceInDays } from 'date-fns'
import Avatar from '../components/shared/Avatar';

const Event = () => {
    let { eventId } = useParams();
    const { data, isLoading } = useGetEventQuery(eventId)
    console.log(data)

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className='w-full max-w-5xl mx-auto'>
            <div className='xl:flex'>
                <div className='w-full max-w-3xl mx-auto xl:max-w-2xl xl:mx-0'>
                    {data?.event?.image && <ImageSlider images={data?.event?.image} />}
                    {/* <Youtube className='relative overflow-hidden w-full aspect-video [&>iframe]:absolute [&>iframe]:inset-0 [&>iframe]:w-full [&>iframe]:h-full' videoId='UT5F9AXjwhg' /> */}
                </div>
                <div className="max-w-3xl p-4 mx-auto card-body xl:py-0 xl:max-w-sm xl:m-0">
                    <h2 className="card-title">
                        {data?.event?.name}
                    </h2>
                    <p className=''>{data?.event?.catchPhrase}</p>
                    <div className="flex flex-row items-center w-full py-4 menu border-y text-base-content xl:hidden">
                        <Avatar />
                        <div className="ml-4 leading-5">
                            <h2 className="font-bold leading-4">John Doe</h2>
                            <p className="text-sm text-gray-500">john@gmail.com</p>
                        </div>
                    </div>
                    <progress className="w-full my-1 progress progress-success" value={((data?.event.raisedMoney / data?.event.requirementFunds) * 100).toFixed(0)} max="100"></progress>
                    <div className='flex gap-10 xl:flex-col xl:gap-3'>
                        <div className='flex flex-col xl:flex-row xl:justify-between xl:items-baseline'>
                            <span className=''>
                                <span className='text-lg font-bold text-success xl:text-2xl'>{data?.event.raisedMoney} TND</span>
                                <span className='text-xs font-medium text-gray-500 xl:text-base'>/ {data?.event?.requirementFunds} TND</span>
                            </span>
                            <span className='text-xs font-medium text-gray-500 xl:text-base'>{((data?.event.raisedMoney / data?.event.requirementFunds) * 100).toFixed(0)}%</span>
                        </div>
                        <div className='flex flex-col items-baseline space-x-1 xl:flex-row'>
                            <span className='font-bold text-gray-500 xl:text-2xl'>{data?.event.donators}</span>
                            <span className='text-xs text-gray-500'>donators</span>
                        </div>
                        <div className='flex flex-col items-baseline space-x-1 xl:flex-row'>
                            <span className='font-bold text-gray-500 xl:text-2xl'>{differenceInDays(new Date(data?.event.date), new Date())}</span>
                            <span className='text-xs text-gray-500'>days to go</span>
                        </div>
                    </div>
                    <div className='my-5 xl:mb-auto'>
                        <Button wide className={'btn-success text-white'}>
                            Donate
                        </Button>
                    </div>
                    <div className='xl:hidden'>
                        <h2 className='text-2xl font-bold'>About us</h2>
                        <p className='mt-2'>{data?.event.description}</p>
                    </div>
                </div>

            </div>
            <div className="flex-row items-center hidden w-full py-4 menu xl:flex border-y xl:border-0 text-base-content">
                <div className="avatar">
                    <div className="w-14 rounded-3xl">
                        <img src="https://placeimg.com/192/192/people" alt="" />
                    </div>
                </div>
                <div className="ml-4 leading-5">
                    <h2 className="font-bold leading-4">John Doe</h2>
                    <p className="text-sm text-gray-500">john@gmail.com</p>
                </div>
            </div>
            <div className='hidden xl:block'>
                <h2 className='text-2xl font-bold'>About us</h2>
                <p className='mt-2'>{data?.event.description}</p>
            </div>
        </div>
    )
}

export default Event