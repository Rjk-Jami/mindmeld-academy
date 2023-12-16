import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/main";
import Home from "../pages/Home/Home/Home";
import CollegesDetails from "../pages/CollegesDetails/CollegesDetails";
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
          element:<Home></Home>,
        },
        {
          path:"/colleges/:id",
          element: <CollegesDetails></CollegesDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/colleges/${params.id}`)
        }
        
      ]
    },
  ]);

  export default router