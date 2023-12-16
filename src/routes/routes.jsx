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
          loader: ({params})=> fetch(`http://localhost:5000/colleges/${params.id}`)
        },
        {
          path:'/admission',
          element:<Admission></Admission>,
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router