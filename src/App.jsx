import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import India from "./pages/India";
import ErrorPage from "./pages/ErrorPage";


  const router = createBrowserRouter([
    {
       path:"/",
       element:<AppLayout />,
       errorElement:<ErrorPage />,
       children:[
          {
            path:"/",
            element:<Home />,
          },
          {
            path:"/about",
            element:<About />,
          },
          {
            path:"/contact",
            element:<Contact />,
          },
          {
            path:"/country",
            element:<Country />,
          },
          {
            path:"/india",
            element:<India />,
          },
       ]
    }
])


function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;