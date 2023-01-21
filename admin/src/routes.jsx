import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './routes/ErrorPage';
import Events from './routes/Events';
import Index from './routes/Index';
import Organization from './routes/Organization';
import Organizations from './routes/Organizations';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <Index />
                    },
                    {
                        path: 'events',
                        element: <Events />,
                    },
                    {
                        path: 'organizations',
                        element: <Organizations />,
                    },
                    {
                        path: 'organization/:organizationId',
                        element: <Organization />,
                    },
                    // {
                    //     path: 'events/:eventId',
                    //     element: <Event />,
                    // },
                    // {
                    //     path: 'events/add',
                    //     element: <CreateEvent />,
                    // },
                    // {
                    //     path: 'events/:eventId/edit',
                    //     element: <EditEvent />,
                    // },
                    // {
                    //     path: 'organizations',
                    //     element: <Organizations />,
                    // },
                    // {
                    //     path: 'organizations/:organizationId',
                    //     element: <OrganizationDetails />,
                    // },
                    // {
                    //     path: 'organization/edit',
                    //     element: <EditOrganization />,
                    // },
                    // {
                    //     path: '/checkout-success',
                    //     element: <CheckoutSuccess />,
                    // }
                ]
            }
        ]
    },
]);

export default router