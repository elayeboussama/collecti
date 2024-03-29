import * as yup from 'yup'

const phoneNumberRegex = /^\d{8,}$/;

export const EditOrganizationSchema = yup.object().shape({
    name: yup.string().required("Your organization needs a name. Please add one. 📝"),
    avatar: yup.array().min(1, "Hold on! You forgot to include a logo for your organization. 📷").max(1),
    coverPhoto: yup.array().min(1, "Hold on! You forgot to include a cover photo for your organization. 📷").max(1),
    phone: yup.string().matches(phoneNumberRegex, "Please enter a valid phone number. 📞"),
    socailMedia: yup.object().shape({
        facebook: yup.string().url("Please enter a valid Facebook URL. 🌐"),
        instagram: yup.string().url("Please enter a valid Instagram URL. 🌐"),
        linkedin: yup.string().url("Please enter a valid Linkedin URL. 🌐"),
    }),
    description: yup.string().min(200, "Please enter a description for your organization that is at least 200 characters. 📝").required("A description is required for your organization. Please add one. 📝"),
})

export const CreateEventSchema = yup.object().shape({
    title: yup.string().required("Your event needs a title. Please add one. 📝"),
    slogan: yup.string().required("Don't forget to add a catchy slogan for your event. 🎉"),
    images: yup.array().min(1, "Hold on! You forgot to include an image for your event. 📷"),
    price: yup.number().required("Please enter a goal for the amount of money you hope to raise with this event. 💰"),
    date: yup.date().required("Don't forget to select a date for your event. 📅"),
    description: yup.string().min(200, "Please enter a description for your event that is at least 200 characters. 📝").required("A description is required for your event. Please add one. 📝"),
})

export const RegisterSchema = yup.object().shape({
    name: yup.string().required("Whoops, a name is required. 😕"),
    email: yup.string().email("Sorry, but that email doesn't seem to be valid. 😞").required("Whoops, a email is required. 😕"),
    password: yup.string().min(6, "Your password must be at least 6 characters long. 😕").required("Whoops, a password is required. 😕"),
})

export const LoginSchema = yup.object().shape({
    email: yup.string().email("Sorry, but that email doesn't seem to be valid. 😞").required("Whoops, a email is required. 😕"),
    password: yup.string().min(6, "Your password must be at least 6 characters long. 😕").required("Whoops, a password is required. 😕"),
})

export const DonateSchema = yup.object().shape({
    amount: yup.number().required('Le montant est obligatoire'),
    name: yup.string().required('Le nom est obligatoire'),
    email: yup.string().email('Adresse email non valide').required('L\'email est obligatoire'),
    paymentMethod: yup.string().required('Le moyen de paiement est obligatoire'),
})

