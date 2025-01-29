
import App from "./App";
import { createHashRouter } from "react-router-dom";
import Home from "./components/Home/Home";

export const router = createHashRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: '/početna',
          element: <Home />,
        }
    ],
},
]);