import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
// import Work from "./components/Pages/Work"; // Import Work page
// import AboutUs from "./components/Pages/AboutUs";
import Layout from "./Layout";
// import ContactUs from "./components/Pages/ContactUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectWork from "./components/Pages/ProjectWork";


function App() {
  return (
    <div className="w-full">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
