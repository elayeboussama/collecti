import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import EditEvent from './routes/EditEvent';
import EditOrganization from './routes/EditOrganization';
import ErrorPage from './routes/ErrorPage';
import Event from './routes/Event';
import Events from './routes/Events';
import Index from './routes/Index';
import Organization from './routes/Organization';
import Organizations from './routes/Organizations';

const root = ReactDOM.createRoot(document.getElementById('root'));

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
            path: 'events/:eventId/edit',
            element: <EditEvent />,
          },
          {
            path: 'organizations',
            element: <Organizations />,
          },
          {
            path: 'organizations/:organizationId',
            element: <Organization />,
          },
          {
            path: 'organizations/:organizationId/edit',
            element: <EditOrganization />,
          }
        ]
      }
    ]
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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
