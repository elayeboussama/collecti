import { useFormik } from 'formik'

import { DonateSchema } from '../../schemas';

import image from './donation.png';

const DonationPopup = ({isOpen, onClose}) =>{

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
    if(!isOpen) return null;
    const handleOnClose= (e) => {
        if(e.target.id === 'container')
         onClose()
        }


        
   
    return(
        <div id="container"
        onClick={handleOnClose} 
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
        flex flex-col justify-center items-center">
            <div className="top-icon bg-white w-28 rounded-full absolute top-32 drop-shadow-xl">
                <img src={image} alt="Shoes" />
            </div>
      
          
           <div className=" p-2 rounded-3xl w-1/4  p-14 bg-white bg-opacity-80 flex flex-col items-center">

           <form onSubmit={handleSubmit} className='flex flex-col space-y-3 w-11/12'>
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
                    <input type="number" name="amount" placeholder="Montant" 
                        onChange={handleChange}
                        value={values.amount}
                        onBlur={handleBlur}
                        className={`input input-bordered ${errors.amount && touched.amount && 'input-error'}`} />
                    {errors.amount && touched.amount && <p className="mt-2 text-xs text-red-500">{errors.amount}</p>}
                </div>
              <div className="radio-groupe flex flex-col pl-4">
              <label>
                    <input type="radio" name="paymentMethod" value="paypal" /> Paypal
                </label>

                <label>
                    <input type="radio" name="paymentMethod" value="stripe" /> Stripe
                </label>
               
                
                {errors.paymentMethod && touched.paymentMethod && <div className="error">{errors.paymentMethod}</div>}
                
              </div>
              
            </form>
      
   
                <button className="btn btn-primary w-1/2 mt-6" onClick={onClose}>Donate</button>
            </div>
       
        </div>
        
    )
}

export default DonationPopup;