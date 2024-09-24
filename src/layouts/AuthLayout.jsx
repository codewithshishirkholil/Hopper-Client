import { Outlet } from "react-router-dom";
import AuthNav from "../components/nav&sidenav/AuthNav";
import { useContext } from "react";
import { BrightProvider } from "../context/MainContext";
import HomeLayout from "./HomeLayout";

const AuthLayout = () => {

      const { user } = useContext(BrightProvider);
      console.log(user);
      return (
            <div>
                  {/* {user ? <HomeLayout /> : <div>
                        <AuthNav />
                        <Outlet />
                  </div>} */}
                  

            </div>
      );
};

export default AuthLayout;
