import LoginPage from '@/pages/LoginPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegistraionPage from '@/pages/RegistrationPage'
import HeroPage from '@/pages/HeroPage'
import ForgetPassword from '@/pages/forgetPassword'

export default function Routers() {
const routes = createBrowserRouter([
{
path:"/",
element:<HeroPage/>
},
{
    path:"/login",
    element:<LoginPage/>
},
{
    path:"/singup",
    element:<RegistraionPage/>
},
{
    path:"/forgetPassword",
    element:<ForgetPassword/>
}
])
  return (
    <RouterProvider router={routes}/>
  )
}




