// import Youtube from 'react-youtube'
import { differenceInDays } from 'date-fns';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DonationPopup from '../components/event/DonationPopup';
import Button from '../components/shared/Button';
import ImageSlider from '../components/shared/ImageSlider';
import UserInfo from '../components/shared/UserInfo';
import { useGetEventQuery } from '../endpoints/AuthEndpoints';

const Event = () => {
    let { eventId } = useParams();
    const { data, isLoading } = useGetEventQuery(eventId)
    const [showModal, setShowModal] = useState(false)
    console.log(data)

    const handleVisible = num => {
        setShowModal(!showModal);


    }
    const handleClick = num => {
        // 👇️ take parameter passed from Child component
        setShowModal(true)
        // setEventId(num);
    };

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
                    <UserInfo id={data.event.organization_id} className={"xl:hidden"} />
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
                            <span className='font-bold text-gray-500 xl:text-2xl'>{differenceInDays(new Date(data?.event.date), new Date()) < 0 ? 0 : differenceInDays(new Date(data?.event.date), new Date())}</span>
                            <span className='text-xs text-gray-500'>days to go</span>
                        </div>
                    </div>
                    <div className='my-5 xl:mb-auto'>
                        <Button disabled={data?.event.status !== "approved"} wide className={'btn-success text-white'} onClick={() => handleClick(data?.event._id)}>
                            Donate
                        </Button>
                    </div>
                    {data?.event.status === "pending" && <div className="block alert alert-warning xl:hidden">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span>This event is not visible to the public yet as it's still waiting for approval by our administrators.</span>
                        </div>
                    </div>}
                    {data?.event.status === "rejected" && <div className="my-2 alert alert-error xl:hidden">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span>We regret to inform you that your event has been rejected.</span>
                        </div>
                    </div>}
                    <div className='xl:hidden'>
                        <h2 className='text-2xl font-bold'>About us</h2>
                        <p className='mt-2'>{data?.event.description}</p>
                    </div>
                </div>

            </div>
            <UserInfo id={data.event.organization_id} className={"hidden xl:flex xl:border-0"} />
            <div className='hidden xl:block'>
                {data?.event.status === "pending" && <div className="my-2 alert alert-warning">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span>This event is not visible to the public yet as it's still waiting for approval by our administrators.</span>
                    </div>
                </div>}
                {data?.event.status === "rejected" && <div className="my-2 alert alert-error">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span>We regret to inform you that your event has been rejected.</span>
                    </div>
                </div>}
                <h2 className='text-2xl font-bold'>About us</h2>
                <p className='mt-2'>{data?.event.description}</p>
            </div>
            <DonationPopup
                isOpen={showModal}
                eventId={eventId}
                onClose={handleVisible} />
        </div>
    )
}

export default Event