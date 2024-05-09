import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { DetailsPage } from "./pages/DatailsPage/DetailsPage";
import { Favorites } from "./pages/Favorites/Favorites";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
