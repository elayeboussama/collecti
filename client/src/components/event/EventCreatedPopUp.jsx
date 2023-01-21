import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRef } from 'react';
import QRCode from "react-qr-code";
import { useNavigate } from 'react-router-dom';

const EventCreatedPopUp = ({ url, id }) => {

    const urlRef = useRef()
    const navigate = useNavigate();

    const copyToClipboard = () => {
        navigator.clipboard.writeText(urlRef.current.value)
    }

    const visitEventPage = () => {
        navigate(`/events/${id}`)
    }

    return (
        <label className="relative max-w-sm p-0 modal-box lg:max-w-2xl bg-base-100">
            <div className="flex-shrink-0 mx-auto card">
                <label htmlFor="my-modal-4" className="absolute btn btn-circle btn-ghost right-2 top-2"><XMarkIcon className="w-6 h-6" /></label>
                <div className="flex-col justify-around flex-grow p-8 lg:flex-row card-body">
                    <div>
                        <div className='flex items-center justify-center max-w-sm p-4 mb-2 border rounded-lg'>
                            <QRCode value={url} style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
                        </div>
                        <div className="items-center form-control">
                            <div className="input-group">
                                <input ref={urlRef} readOnly type="text" value={url} className="w-full input input-bordered focus:outline-0" />
                                <button onClick={copyToClipboard} className="w-16 btn btn-square">
                                    Copy
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='items-center justify-between form-control'>
                        <div className='items-center text-center form-control'>
                            <CheckCircleIcon className='p-2 w-36 h-36 text-success' />
                            <p className='text-2xl font-semibold text-black'>Live and Ready!</p>
                            <p className='text-sm text-gray-600'>Share the event and let's make it a success!💰</p>
                        </div>
                        <label htmlFor="my-modal-4" onClick={visitEventPage} className='w-full mt-2 text-white lg:mt-0 btn btn-success'>Visit my event page</label>
                    </div>
                </div>
            </div>
        </label>
    )
}

export default EventCreatedPopUp