
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import PlaceCreate from "./components/place-create/PlaceCreate";
import PlaceDetails from "./components/place-details/PlaceDetails";
import PlaceList from "./components/place-list/PlaceList";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import About from "./components/about/About";
import ContactUs from "./components/contact/contactUs";
import Footer from "./components/footer/Footer";


function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<PlaceList />} />
        <Route path="/create" element={<PlaceCreate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/places/:placeId" element={<PlaceDetails />} />
        <Route path="/about" element={< About/>} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App
