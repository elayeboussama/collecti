import { PlusSmallIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useFormik } from 'formik'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AvatarUpload from '../components/AvatarUpload'
import CoverUpload from '../components/CoverUpload'
import EventCreatedPopUp from '../components/event/EventCreatedPopUp'
import Button from '../components/shared/Button'
import { useCreateEventMutation } from '../endpoints/AuthEndpoints'
import { setVisible } from '../features/conffetiSlice'
import { openModal, setContent } from '../features/modalSlice'
import { useStorage } from '../hooks/useStorage'
import { EditOrganizationSchema } from '../schemas'

const EditOrganization = () => {
    const [tags, setTags] = useState([])
    const [images, setImages] = useState([])
    const { uploadFile, isLoading } = useStorage()
    const tagInputRef = useRef(null)

    const user = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [createEvent, { isLoading: requestLoading }] = useCreateEventMutation()

    const uploadImages = async (images) => {
        const promises = images.map(image => {
            return uploadFile(image)
        })
        const urls = await Promise.all(promises)
        return urls
    }

    const { values, handleChange, handleBlur, errors, touched, setFieldValue, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            avatar: [],
            coverPhoto: [],
            keywords: [],
            phone: "",
            description: "",
        },
        validationSchema: EditOrganizationSchema,
        onSubmit: async (values) => {
            const avatar = await uploadImages(values.avatar)
            const coverPhoto = await uploadImages(values.coverPhoto)
            const requestObject = {
                ...values,
                avatar,
                coverPhoto,
            }
            try {
                console.log(requestObject)
                const response = await createEvent({ ...requestObject }).unwrap()
                console.log(response)
                dispatch(setContent(<EventCreatedPopUp url={`http://localhost:3000/events/${response.id}`} id={response.id} />))
                dispatch(openModal())
                dispatch(setVisible(true))
                setTimeout(() => {
                    dispatch(setVisible(false))
                }, 6000)
            } catch (error) {
                console.error(error)
            }

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
                <h2 className="mb-4 text-2xl font-bold">{/* "Edit profile 🎉" */ "Complete your organization's profile 📝"}</h2>
                <p className="mb-8 text-gray-700">Update your organization's information with us! 📑 Let's make sure all the details are accurate and up-to-date. 🔍 Share with us more about your organization, and let's get ready to promote your cause.</p>
            </div>
            <div className=" alert alert-warning">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>Complete your profile before creating an event. It will help us promote your cause.</span>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-3'>
                <div className='flex flex-col items-center space-x-3 md:flex-row'>
                    <div className="w-full max-w-[14rem] mt-10">
                        <AvatarUpload handleChange={handleChange} setFieldValue={setFieldValue} />
                        {errors.avatar && touched.avatar && <p className="ml-1 text-xs text-red-500">{errors.avatar}</p>}
                    </div>
                    <div className='w-full'>
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="label-text">Name <span className='text-error'>*</span></span>
                            </label>
                            <input type="text" name='name'
                                placeholder="Unicef"
                                onChange={handleChange}
                                value={values.name}
                                onBlur={handleBlur}
                                className={`input input-bordered block ${errors.name && touched.name && 'input-error'}`} />
                            {errors.name && touched.name && <p className="mt-2 ml-1 text-xs text-red-500">{errors.name}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email <span className='text-error'>*</span></span>
                            </label>
                            <input type="text" name='slogan' placeholder="abc@example.com"
                                disabled
                                className={`input input-bordered ${errors.slogan && touched.slogan && 'input-error'}`} />
                        </div>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Cover photo <span className='text-error'>*</span></span>
                    </label>
                    <CoverUpload handleChange={handleChange} setFieldValue={setFieldValue} />
                    {errors.coverPhoto && touched.coverPhoto && <p className="ml-1 text-xs text-red-500">{errors.coverPhoto}</p>}
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
                        <span className="label-text">Phone number</span>
                    </label>
                    <input type="number" name='phone'
                        placeholder="12345678"
                        onChange={handleChange}
                        value={values.phone}
                        onBlur={handleBlur}
                        className={`input input-bordered block ${errors.phone && touched.phone && 'input-error'}`} />
                    {errors.phone && touched.phone && <p className="mt-2 text-xs text-red-500">{errors.phone}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">About us <span className='text-error'>*</span></span>
                    </label>
                    <textarea placeholder="Introduce your organization to the world! Who are you and what do you do? Share your mission and the impact you strive to make in the community. Let people know why your organization is worth supporting." name='description'
                        onChange={handleChange}
                        value={values.description}
                        onBlur={handleBlur}
                        className={`h-36 textarea textarea-bordered ${errors.description && touched.description && 'textarea-error'}`}
                    ></textarea>
                    {errors.description && touched.description && <p className="mt-2 ml-1 text-xs text-red-500">{errors.description}</p>}
                </div>
                <div className='text-right'>
                    <Button loading={isLoading || requestLoading} className="border-none btn btn-primary" type="submit">Save profile</Button>
                </div>

            </form>
        </div>
    )
}

export default EditOrganization