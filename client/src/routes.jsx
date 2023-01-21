import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import CheckoutSuccess from './components/event/CheckoutSuccess';
import OrganizationDetails from './components/organization/OrganizationDetails';
import ProtectedRoutes from './components/ProtectedRoutes';
import CreateEvent from './routes/CreateEvent';
import EditEvent from './routes/EditEvent';
import EditOrganization from './routes/EditOrganization';
import ErrorPage from './routes/ErrorPage';
import Event from './routes/Event';
import Events from './routes/Events';
import Index from './routes/Index';
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
                        path: 'events/:eventId',
                        element: <Event />,
                    },
                    {
                        path: 'events/add',
                        element: <ProtectedRoutes><CreateEvent /></ProtectedRoutes>,
                    },
                    {
                        path: 'events/:eventId/edit',
                        element: <ProtectedRoutes><EditEvent /></ProtectedRoutes>,
                    },
                    {
                        path: 'organizations',
                        element: <Organizations />,
                    },
                    {
                        path: 'organizations/:organizationId',
                        element: <OrganizationDetails />,
                    },
                    {
                        path: 'organization/edit',
                        element: <ProtectedRoutes><EditOrganization /></ProtectedRoutes>,
                    },
                    {
                        path: '/checkout-success',
                        element: <CheckoutSuccess />,
                    }
                ]
            }
        ]
    },
]);

export default router

/*
/                                     -> Home
/events                               -> List of events
/events/:eventId                      -> Specific event details
/events/add                           -> Add new event
/events/:eventId/edit                 -> Edit an event
/events/:eventId/donate               -> Donate page
/organizations                        -> list of Organizations
/organizations/:oraganizationId       -> Specific organization details
/organizations/:oraganizationId/edit  -> Edit profile?
*/

// ? Sign up & Sign in golt n7ot'hom fi modal?
// ? /about & /services mawjoudin fel homepage, so ma8erma na3mel routes lehom