import React from 'react'
import Home from "./Pages/Home/Home";
import Landing from "./Pages/Landing/Landing";
import Log from './Pages/Login/Log'
import Signup from "./Pages/Signup/Signup";
import Ticket from "./Pages/Ticket/Ticket";
import Pay from "./Pages/Pay/Pay";
import Event from "./Pages/Event/Event";
import Seats from "./Pages/Seats/Seats";


import{createBrowserRouter, RouterProvider} from "react-router-dom";

import './App.css'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Landing />,
    errorElement: <h1>404 error</h1>
  },

  {
    path:'/Log',
    element:<Log />,
    errorElement: <h1>404 error</h1>
  },
  {
    path:'/Seats',
    element:<Seats />,
    errorElement: <h1>404 error</h1>
  },
  {
    path:'/Signup',
    element:<Signup />,
    errorElement: <h1>404 error</h1>
  },
  {
    path:'/Home',
    element:<Home />,
    errorElement: <h1>404 error</h1>
  },
  {
    path:'/Event',
    element:<Event/>,
    errorElement: <h1>404 error</h1>
  },
  {
    path:'/Ticket',
    element:<Ticket/>,
    errorElement: <h1>404 error</h1>
  },
  {
    path:'/Pay',
    element:<Pay />,
    errorElement: <h1>404 error</h1>
  },
 
])

function App() {
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App
