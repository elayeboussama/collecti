import { PlusSmallIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useFormik } from 'formik'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import AvatarUpload from '../components/AvatarUpload'
import CoverUpload from '../components/CoverUpload'
import Button from '../components/shared/Button'
import { useUpdateOrganizationMutation } from '../endpoints/AuthEndpoints'
import { updateCredentials } from '../features/authSlice'
import { useStorage } from '../hooks/useStorage'
import { EditOrganizationSchema } from '../schemas'

const EditOrganization = () => {
    const tagInputRef = useRef(null)
    const [tags, setTags] = useState([])
    const [loading, setIsLoading] = useState(false)

    const { uploadFile } = useStorage()
    const [updateOrganization] = useUpdateOrganizationMutation()
    const user = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        setFieldValue("name", user.user.name || "")
        setFieldValue("email", user.user.email || "")
        setFieldValue("keywords", user.user.keywords || [])
        if (user.user.keywords) setTags(user.user.keywords)
        setFieldValue("phone", user.user.phone || "")
        setFieldValue("catchPhrase", user.user.catchPhrase || "")
        setFieldValue("description", user.user.description || "")
        setFieldValue("socialMedia.facebook", user.user.socialMedia?.facebook || "")
        setFieldValue("socialMedia.instagram", user.user.socialMedia?.instagram || "")
        setFieldValue("socialMedia.likendIn", user.user.socialMedia?.linkedIn || "")
    }, [user])

    const { values, handleChange, handleBlur, errors, touched, setFieldValue, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: "",
            avatar: [],
            coverPhoto: [],
            keywords: [],
            phone: "",
            description: "",
            // catchPhrase: "",
            socialMedia: {
                facebook: '',
                instagram: '',
                linkedIn: '',
            },
        },
        validationSchema: EditOrganizationSchema,
        onSubmit: async (values) => {
            setIsLoading(true)

            let fistConnection = true
            if (user.user.firstConnection === false) fistConnection = false

            const [avatar, coverPhoto] = await Promise.all([
                uploadFile(values.avatar[0]),
                uploadFile(values.coverPhoto[0])
            ]);
            const requestObject = {
                ...values,
                _id: user.userId,
                logo: avatar,
                cover: coverPhoto,
                status: "pending",
                fistConnection
            }
            try {
                console.log(requestObject)
                const response = await updateOrganization({ ...requestObject }).unwrap()
                dispatch(updateCredentials(response.organizationUpdated))
                toast.success("Profile updated! You're all set. 🙌")
            } catch (error) {
                console.error(error)
            }
            setIsLoading(false)
        }
    })

    console.log(errors)
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
                <h2 className="mb-4 text-2xl font-bold">{user.user.firstConnection ? "Complete your organization's profile 📝" : "Edit profile 📝"}</h2>
                <p className="mb-8 text-gray-700">Update your organization's information with us! 📑 Let's make sure all the details are accurate and up-to-date. 🔍 Share with us more about your organization, and let's get ready to promote your cause.</p>
            </div>
            {user.user.firstConnection && <div className=" alert alert-warning">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>Complete your profile before creating an event. It will help us promote your cause.</span>
                </div>
            </div>}
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
                            <input value={""} onChange={handleChange} type="text" name='slogan' placeholder={values.email}
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
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Catch phrase</span>
                    </label>
                    <input type="text" name='catchPhrase'
                        placeholder="Write your catch phrase"
                        onChange={handleChange}
                        value={values.catchPhrase}
                        onBlur={handleBlur}
                        className={`input input-bordered block ${errors.catchPhrase && touched.catchPhrase && 'input-error'}`} />
                    {errors.catchPhrase && touched.catchPhrase && <p className="mt-2 text-xs text-red-500">{errors.catchPhrase}</p>}
                </div> */}
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
                        <span className="label-text">Facebook</span>
                    </label>
                    <input type="text" name='socialMedia.facebook'
                        placeholder="Facebook Link"
                        onChange={handleChange}
                        value={values.socialMedia.facebook}
                        onBlur={handleBlur}
                        className={`input input-bordered block ${errors.socialMedia?.facebook && touched.socialMedia?.facebook && 'input-error'}`} />
                    {errors.socialMedia?.facebook && touched.socialMedia?.facebook && <p className="mt-2 text-xs text-red-500">{errors.socialMedia?.facebook}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instagram</span>
                    </label>
                    <input type="url" name='socialMedia.instagram'
                        placeholder="Instagram Link"
                        onChange={handleChange}
                        value={values.socialMedia.instagram}
                        onBlur={handleBlur}
                        className={`input input-bordered block ${errors.socialMedia?.instagram && touched.socialMedia?.instagram && 'input-error'}`} />
                    {errors.socialMedia?.instagram && touched.socialMedia?.instagram && <p className="mt-2 text-xs text-red-500">{errors.socialMedia?.instagram}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Linkedin</span>
                    </label>
                    <input type="text" name='socialMedia.linkedIn'
                        placeholder="Linked in Link"
                        onChange={handleChange}
                        value={values.socialMedia.linkedIn}
                        onBlur={handleBlur}
                        className={`input input-bordered block ${errors.socialMedia?.linkedIn && touched.socialMedia?.linkedIn && 'input-error'}`} />
                    {errors.socialMedia?.linkedIn && touched.socialMedia?.linkedIn && <p className="mt-2 text-xs text-red-500">{errors.socialMedia?.linkedIn}</p>}
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
                    <Button loading={loading} className="border-none btn btn-primary" type="submit">Save profile</Button>
                </div>

            </form>
        </div>
    )
}

export default EditOrganization