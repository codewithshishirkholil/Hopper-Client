
import { createBrowserRouter } from "react-router-dom";
import ScrollToTop from "../hooks/ScrollToTop";
import HomeRoute from "./HomeRoute";

import HomeLayout from "../layouts/HomeLayout";
import AuthRoute from "./AuthRouter";

const Router = createBrowserRouter([
      {
            path: "/",
            element: (
                  <>
                        <ScrollToTop />
                        <HomeLayout />
                  </>
            ),
            children: HomeRoute,
      },

      // {
      //       path: "",
      //       element: (
      //             <>
      //                   <ScrollToTop />
      //                   <HomeLayout />
      //             </>
      //       ),
      //       children: AuthRoute
      // }

]);

export default Router;
