import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/main";
import Home from "../pages/Home/Home/Home";
import CollegesDetails from "../pages/CollegesDetails/CollegesDetails";
import Colleges from "../pages/Colleges/Colleges";
import SignUp from "../pages/Signup/Signup";
import Admission from "../pages/Admission/Admission";
import Login from "../pages/Login/Login";
import MyProfile from "../pages/MyProfile/MyProfile";
import PrivateRoutes from "./PrivateRoutes";
import MyCollege from "../pages/MyCollege/MyCollege";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/colleges',
          element:<Colleges></Colleges>,
        },
        {
          path:"/colleges/:id",
          element: <CollegesDetails></CollegesDetails>,
          loader: ({params})=> fetch(`https://mindmeld-academy-server.vercel.app/colleges/${params.id}`)
        },
        {
          path:'/admission',
          element:<Admission></Admission>,
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:'/myProfile/:email',
          element:<PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>,
          loader:({params})=> fetch(`https://mindmeld-academy-server.vercel.app/myProfile/${params.email}`)
        },

        {
          path:'/myCollege/:email',
          element:<PrivateRoutes><MyCollege></MyCollege> </PrivateRoutes>,
          loader:({params})=> fetch(`https://mindmeld-academy-server.vercel.app/myCollege/${params.email}`)
        }
      ]
    },
  ]);

  export default router