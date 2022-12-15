import { XMarkIcon } from '@heroicons/react/24/outline'
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
            <h2>Add Event</h2>

            <form>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" className="input input-bordered" required />
                    {/* {error && <p className="mt-2 text-xs text-red-500">{error}</p>} */}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tags</span>
                    </label>
                    <div className="input-group">
                        <input type="text" placeholder="add tags" className="w-full input input-bordered" ref={tagInputRef} />
                        <button className="px-14 btn btn-square" type="button" onClick={handleAddTag}>
                            Add
                        </button>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                        {tags.map((tag, index) => (
                            <span key={index} className="cursor-pointer badge" onClick={() => handleRemoveTag(tag)} ><XMarkIcon className="w-4 h-4 mr-1" />{tag}</span>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddEvent
