import { PlusSmallIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRef, useState } from 'react'

const AddEvent = () => {

    const [tags, setTags] = useState(["badge1", "badge2"])
    const tagInputRef = useRef(null)

    const handleAddTag = () => {
        const tag = tagInputRef.current.value
        if (tag && !tags.includes(tag)) {
            setTags([...tags, tag])
            tagInputRef.current.value = ""
        }
    }

    const handleRemoveTag = (tag) => {
        console.log(tag);
        setTags(tags.filter(badge => badge !== tag))
    }


    return (
        <div className="w-full max-w-3xl p-4 mx-auto">
            <div class="mt-10">
                <h2 class="text-2xl font-bold mb-4">Create a Fundraising Event</h2>
                <p class="text-gray-700 mb-8">Use this form to create a new fundraising event for your organization. Be sure to provide all of the necessary details, including the event name, catchphrase, categories, cover photo, and description. This information will be used to promote your event and attract potential donors.</p>
            </div>


            <form className='flex flex-col space-y-3'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" placeholder="Race for the Cure" className="input input-bordered" required />
                    {/* {error && <p className="mt-2 text-xs text-red-500">{error}</p>} */}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Slogan</span>
                    </label>
                    <input type="text" placeholder="Join us in the fight against breast cancer!" className="input input-bordered" required />
                    {/* {error && <p className="mt-2 text-xs text-red-500">{error}</p>} */}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Keywords</span>
                    </label>
                    <div className="input-group">
                        <input type="text" placeholder="(e.g. charity, marathon, breast cancer)" className="w-full input input-bordered" ref={tagInputRef} />
                        <button className="flex w-24 btn btn-square" type="button" onClick={handleAddTag}>
                            <PlusSmallIcon className='w-6 h-6 mr-1 text-white' /> Add
                        </button>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                        {tags.map((tag, index) => (
                            <span key={index} className="cursor-pointer badge" onClick={() => handleRemoveTag(tag)} ><XMarkIcon className="w-4 h-4 mr-1" />{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price goal</span>
                    </label>
                    <label className="input-group">
                        <input type="number" placeholder="15000" className="w-full input input-bordered" />
                        <span>TND</span>
                    </label>
                </div>
                <div className="w-full max-w-xs form-control">
                    <label className="label">
                        <span className="label-text">Cover Photo</span>
                    </label>
                    <input type="file" className="w-full file-input file-input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea className="h-36 textarea textarea-bordered" placeholder="Join us for our annual Race for the Cure to raise funds for breast cancer research and support. This event is open to all fitness levels and is a great way to get active while supporting a good cause. All proceeds from ticket sales and donations will go towards supporting those affected by breast cancer and finding a cure. We hope to see you there!"></textarea>
                </div>
                <div className='text-right'>
                    <button className="border-none btn btn-primary bg-gradient-to-r from-green-500 to-blue-500" type="submit">Create Event</button>
                </div>

            </form>
        </div>
    )
}

export default AddEvent
