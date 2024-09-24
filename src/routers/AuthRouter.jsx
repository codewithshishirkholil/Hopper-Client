
import Sign_in from "../pages/auth/Sign_in";
import Sign_up from "../pages/auth/Sign_up";

const AuthRoute = [
      {
            path: "/",
            element: <Sign_in />,
      },
      {
            path: "/sign-up",
            element: <Sign_up />,
      },
];

export default AuthRoute;
