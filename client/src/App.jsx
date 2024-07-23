
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import WallpaperCreate from "./components/wallpaper-create/WallpaperCreate";
import WallpaperDetails from "./components/wallpaper-details/GameDetails";
import WallpaperList from "./components/wallpaper-list/WallpaperList";
import Login from "./components/login/Login";
import Register from "./components/register/Register";


function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallpapers" element={<WallpaperList />} />
        <Route path="/wallpapers/create" element={<WallpaperCreate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wallpaper/:wallpaperId" element={<WallpaperDetails />} />
      </Routes>
    </>
  );
}

export default App
