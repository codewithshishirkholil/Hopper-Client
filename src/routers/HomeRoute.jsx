import Boost from "../pages/boost/Boost";
import Lavel from "../pages/home/lavel/Lavel";
import About from "../pages/home/pages/about/About";
import Airdrop from "../pages/home/pages/airdrop/Airdrop";
import Earn from "../pages/home/pages/earn/Earn";
import Friend from "../pages/home/pages/friend/Friend";
import Home from "../pages/home/pages/home/Home";
import EditProfile from "../pages/home/pages/profile/EditProfile";
import Profile from "../pages/home/pages/profile/Profile";
import Task from "../pages/home/pages/tasks/Task";

const HomeRoute = [
      {
            path: "/",
            element: <Home />,
      },
      {
            path: "/boost",
            element: <Boost />,
      },
      {
            path: "/profile",
            element: <Profile />,
      },
      {
            path: "/profile/edit",
            element: <EditProfile />,
      },
      {
            path: "/level",
            element: <Lavel />,
      }
      ,
      {
            path: "/earn-more",
            element: <Earn />,
      },
      {
            path: '/airdrop',
            element: <Airdrop />
      },
      {
            path: '/friends',
            element: <Friend />
      },
      {
            path: '/task',
            element: <Task />
      }
];

export default HomeRoute;
