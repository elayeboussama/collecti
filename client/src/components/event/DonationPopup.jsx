import { useFormik } from 'formik'

import { DonateSchema } from '../../schemas';

import image from './donation.png';
import PayButton from './PayButton';

const DonationPopup = ({ isOpen, onClose, eventId, prevRaisedMoney, prevDonators }) => {

    const { values, handleChange, handleBlur, errors, touched, setFieldValue, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: "",
            amount: "",
            paymentMethod: "",

        },
        validationSchema: DonateSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })
    if (!isOpen) return null;
    const handleOnClose = (e) => {
        if (e.target.id === 'container')
            onClose()
    }




    return (
        <div id="container"
            onClick={handleOnClose}
            className="fixed inset-0 z-10 flex flex-col items-center justify-center w-screen bg-black bg-opacity-30 backdrop-blur-sm">
            <div className="absolute bg-white rounded-full top-icon w-28 top-32 drop-shadow-xl">
                <img src={image} alt="Shoes" />
            </div>


            <div className="flex flex-col items-center w-full max-w-md bg-white rounded-3xl p-14 bg-opacity-80">

                <form onSubmit={handleSubmit} className='flex flex-col w-11/12 space-y-3'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Nom"
                            onChange={handleChange}
                            value={values.name}
                            onBlur={handleBlur}
                            className={`input input-bordered ${errors.name && touched.name && 'input-error'}`} />
                        {errors.name && touched.name && <p className="mt-2 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            className={`input input-bordered ${errors.email && touched.email && 'input-error'}`} />
                        {errors.email && touched.email && <p className="mt-2 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Amount</span>
                        </label>
                        <input type="number" name="amount" max="9999999999" placeholder="Montant"
                            onChange={handleChange}
                            value={values.amount}
                            onBlur={handleBlur}
                            className={`input input-bordered ${errors.amount && touched.amount && 'input-error'}`} />
                        {errors.amount && touched.amount && <p className="mt-2 text-xs text-red-500">{errors.amount}</p>}
                    </div>
                    {/* <div className="flex flex-col pl-4 radio-groupe">
              <label>
                    <input type="radio" name="paymentMethod" value="paypal" /> Paypal
                </label>

                <label>
                    <input type="radio" name="paymentMethod" value="stripe" /> Stripe
                </label>
               
                
                {errors.paymentMethod && touched.paymentMethod && <div className="error">{errors.paymentMethod}</div>}
                
              </div> */}

                </form>

                <PayButton
                    onClose={onClose}
                    informations={values}
                    eventId={eventId}
                    prevDonators={prevDonators}
                    prevRaisedMoney={prevRaisedMoney}
                />
                {/* <button className="w-1/2 mt-6 btn btn-primary" onClick={onClose}>Donate</button> */}
            </div>

        </div>

    )
}

export default DonationPopup;