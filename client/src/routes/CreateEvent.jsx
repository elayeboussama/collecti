import { PlusSmallIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRef, useState } from 'react'
import { useFormik } from 'formik'
import { CreateEventSchema } from '../schemas'
import ImageUpload from '../components/ImageUpload'
import { useStorage } from '../hooks/useStorage'

const AddEvent = () => {
    const [tags, setTags] = useState([])
    const [images, setImages] = useState([])
    // console.log(images[0].file)
    const { uploadFile } = useStorage()
    const tagInputRef = useRef(null)

    const uploadImages = async (images) => {
        const promises = images.map(image => {
            return uploadFile(image.file)
        })
        const urls = await Promise.all(promises)
        return urls
    }

    const { values, handleChange, handleBlur, errors, touched, setFieldValue, handleSubmit } = useFormik({
        initialValues: {
            title: "",
            slogan: "",
            keywords: [],
            price: "",
            coverPhoto: "",
            date: "",
            description: "",
        },
        validationSchema: CreateEventSchema,
        onSubmit: (values) => {
            uploadImages(images)
        }
    })


    const handleAddTag = () => {
        const tag = tagInputRef.current.value
        if (tag && !tags.includes(tag)) {
            setTags([...tags, tag])
            setFieldValue("keywords", [...tags, tag])
            tagInputRef.current.value = ""
        }
    }

    const handleRemoveTag = (tag) => {
        setTags(tags.filter(badge => badge !== tag))
        setFieldValue("keywords", tags.filter(badge => badge !== tag))
    }


    return (
        <div className="w-full max-w-3xl p-4 mx-auto">
            <div className="mt-10">
                <h2 className="mb-4 text-2xl font-bold">Create a Fundraising Event 🎉</h2>
                <p className="mb-8 text-gray-700">Use this form to create a new fundraising event for your organization. 📝 Be sure to provide all of the necessary details, including the event name, catchphrase, categories, cover photo, and description. 🔍 This information will be used to promote your event and attract potential donors. 💰</p>
            </div>



            <form onSubmit={handleSubmit} className='flex flex-col space-y-3'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" name='title'
                        placeholder="Race for the Cure"
                        onChange={handleChange}
                        value={values.title}
                        onBlur={handleBlur}
                        className={`input input-bordered ${errors.title && touched.title && 'input-error'}`} />
                    {errors.title && touched.title && <p className="mt-2 text-xs text-red-500">{errors.title}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Slogan</span>
                    </label>
                    <input type="text" name='slogan' placeholder="Join us in the fight against breast cancer!"
                        onChange={handleChange}
                        value={values.slogan}
                        onBlur={handleBlur}
                        className={`input input-bordered ${errors.slogan && touched.slogan && 'input-error'}`} />
                    {errors.slogan && touched.slogan && <p className="mt-2 text-xs text-red-500">{errors.slogan}</p>}
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
                        <input type="number" placeholder="15000" name='price'
                            onChange={handleChange}
                            value={values.price}
                            onBlur={handleBlur}
                            className={`input input-bordered w-full ${errors.price && touched.price && 'input-error'}`} />
                        <span>TND</span>
                    </label>
                    {errors.price && touched.price && <p className="mt-2 text-xs text-red-500">{errors.price}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Event Images</span>
                    </label>
                    <ImageUpload images={images} setImages={setImages} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Event date</span>
                    </label>
                    <input type="date" name='date'
                        onChange={handleChange}
                        value={values.date}
                        onBlur={handleBlur}
                        className={`input input-bordered ${errors.date && touched.date && 'input-error'}`} />
                    {errors.date && touched.date && <p className="mt-2 text-xs text-red-500">{errors.date}</p>}

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea placeholder="Join us for our annual Race for the Cure to raise funds for breast cancer research and support. This event is open to all fitness levels and is a great way to get active while supporting a good cause. All proceeds from ticket sales and donations will go towards supporting those affected by breast cancer and finding a cure. We hope to see you there!" name='description'
                        onChange={handleChange}
                        value={values.description}
                        onBlur={handleBlur}
                        className={`h-36 textarea textarea-bordered ${errors.description && touched.description && 'textarea-error'}`}
                    ></textarea>
                    {errors.description && touched.description && <p className="mt-2 text-xs text-red-500">{errors.description}</p>}
                </div>
                <p className="text-xs text-gray-600">
                    Please note: By submitting this form, you agree to make the event's data publicly available. This includes money collected and number of donors. This information will be visible to anyone visiting the event page. 🌍
                </p>
                <div className='text-right'>
                    <button className="border-none btn animated-gradient" type="submit">Create Event</button>
                </div>

            </form>
        </div>
    )
}

export default AddEvent

// Todo: change how images are being handled (uplading and previewing)