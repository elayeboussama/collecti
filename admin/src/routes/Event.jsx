// import Youtube from 'react-youtube'
import { useParams } from 'react-router-dom';
import Button from '../components/Button'
import ImageSlider from '../components/ImageSlider'
import { useGetEventQuery, useUpdateEventStatusMutation } from '../endpoints/apiEndpoints'
import { differenceInDays } from 'date-fns'

import UserInfo from '../components/UserInfo';
import Actions from '../components/Actions';
import { toast } from 'react-toastify';

const Event = () => {
    const { eventId } = useParams();
    const { data, isLoading } = useGetEventQuery(eventId)
    const [updateEventStatus] = useUpdateEventStatusMutation()

    console.log(data)

    const updateStatusHandler = async (status) => {
        if (status === "approve") {
            await updateEventStatus({ _id: eventId, status: "approved" })
            toast.success("Organization approved.")
        }
        else if (status === "reject") {
            await updateEventStatus({ _id: eventId, status: "rejected" })
            toast.success("Organization rejected.")
        } else {
            return
        }
    }

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
                    <UserInfo id={data?.event.organization_id} className={"xl:hidden"} />
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
                            <span className='font-bold text-gray-500 xl:text-2xl'>{differenceInDays(new Date(data?.event.date), new Date()) < 0 ? 0 : differenceInDays(new Date(data?.event.date), new Date()) < 0}</span>
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
            <UserInfo id={data.event.organization_id} className={"hidden xl:flex xl:border-0"} />
            <div className='hidden xl:block'>
                <h2 className='text-2xl font-bold'>About us</h2>
                <p className='mt-2'>{data?.event.description}</p>
            </div>
            <Actions id={data?.event._id} updateStatus={updateStatusHandler} />
        </div>
    )
}

export default Event