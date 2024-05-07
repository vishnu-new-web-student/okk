import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Pay from './Payment.jsx';
import { useNavigate } from 'react-router-dom';


import Card from './components/Debit-card.jsx';
import Otp from './Otp.jsx';
import Orderid from './orderid.jsx';
import Kabaddi from './kabaddi.jsx';
import Football from './football.jsx';
import Volleyball from './volleyball.jsx';


const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },
  
  {
    path: "/Payment-options",
    element: <Pay />,
  },

  {
    path: "/Prime-Membership",
    element: <Card />,
  },

  {
    path: "Otp-verification",
    element: <Otp />,
  },

  {
    path: "Order id",
    element: <Orderid />,
  },

  {
  path: "kabaddi",
    element: <Kabaddi />,
  },
  
  {
    path: "football",
      element: <Football />,
    },

    {
      path: "volleyball",
        element: <Volleyball />,
      },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
