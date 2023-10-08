import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import SponsorUs from "./pages/sponserUs";
import GalleryPage from "./pages/galleryPage";
import { Contact, Home } from "./pages";
import TeamPage from "./pages/teamPage";

function App() {
  return (
    <>
      <div className="container fixed left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />  
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="/sponsor" element={<SponsorUs/>} /> 
        <Route path="/galleryPage" element={<GalleryPage/>} /> 
        {/* <Route path="/teamPage" element={<TeamPage/>}/> */}
        {/* <Route path="" element={<Home/>} /> */}
       <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
