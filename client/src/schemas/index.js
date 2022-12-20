import * as yup from 'yup';

export const CreateEventSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    slogan: yup.string().required('Slogan is required'),
    price: yup.number().required('Price goal is required'),
    date: yup.date().required('Date is required'),
    description: yup.string().min(200, 'Description must be at least 200 characters').required('Description is required'),
})