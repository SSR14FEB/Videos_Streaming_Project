import LoginPage from '@/pages/LoginPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegistraionPage from '@/pages/RegistrationPage'
import HeroPage from '@/pages/HeroPage'
import ForgetPassword from '@/pages/ForgetPassword'
import Authentication from '@/pages/Authentication'
import VideoUpload from '@/pages/VideoUpload'
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
    path:"/validet-your-email",
    element:<Authentication/>
},
{
    path:"/forgetPassword",
    element:<ForgetPassword/>
},
{
  path:"/upload",
  element:<VideoUpload/>
}
])
  return (
    <RouterProvider router={routes}/>
  )
}




