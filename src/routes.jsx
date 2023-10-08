import { Home, Programs, SignIn, About} from "@/pages";
import Contact from "./pages/contact";
import GalleryPage from "./pages/galleryPage";
import { PhoneIcon, UsersIcon } from "@heroicons/react/24/outline";
import {
  HomeIcon,
  ArrowRightOnRectangleIcon,
  PhotoIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import TeamPage from "./pages/teamPage";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/",
    element: <Home />,
  },
  {
    icon: UsersIcon,
    name: "About Us",
    path: "/about-us",
    element: <About />,
  },
  {
    icon: UserGroupIcon,
    name: "Our Team",
    path: "/teamPage",
    element: <TeamPage/>,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Programs",
    path: "/programs",
    element: <Programs/>,
  },
  {
    icon: PhotoIcon,
    name: "gallery",
    path: "gallery",
    element: <GalleryPage />,
  },
  {
    icon: PhoneIcon,
    name: "Contact Us",
    path: "/contact",
    element: <Contact />,
  },
];


export default routes;
