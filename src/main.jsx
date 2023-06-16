import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Registration from './Pages/Registration/Registration.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import DashboardLayout from './Layout/DashboardLayout.jsx';
import MangeUsers from './Pages/Dashboard/Admin/MangeUsers.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AddAClass from './Pages/Dashboard/AddAClass/AddAClass.jsx';
import MyClasses from './Pages/Dashboard/MyClasses/MyClasses.jsx';
import ManageClasses from './Pages/Dashboard/ManageClasses/ManageClasses.jsx';
import Instructors from './Pages/Home/Instructors/Instructors.jsx';
import Classes from './Pages/Home/Classes/Classes.jsx';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute.jsx';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>
      },
      {
        path: "/classes",
        element: <Classes></Classes>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: 'dashboard/users',
        element: <MangeUsers></MangeUsers>
      },
      {
        path: 'dashboard/add-a-class',
        element: <AddAClass></AddAClass>
      },
      {
        path: 'dashboard/my-classes',
        element: <MyClasses></MyClasses>
      },
      {
        path: 'dashboard/manage-classes',
        element: <ManageClasses></ManageClasses>
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
