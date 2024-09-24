
import { Outlet } from "react-router-dom";
import HomeNav from "../components/nav&sidenav/HomeNav";
import HomeFooter from "../components/footer/HomeFooter";

const HomeLayout = () => {

      return (
            <div className=" h-screen w-full bg-black">


                  <div className=" h-screen overflow-y-auto z-[1000]  ">
                        <Outlet />
                  </div>
                  <div className="fixed right-0 left-0 bottom-0 z-50">
                        <HomeNav />
                  </div>
            </div >
      );
};

export default HomeLayout;
