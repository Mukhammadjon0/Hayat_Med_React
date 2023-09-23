import "./App.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";

import Login from "./pages/login/Login";
import Booking from "./pages/booking/booking";
import Guests from "./pages/guests/guests";
import GuestsDocs from "./pages/guestsDocs/guestsDocs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/guests" element={<Guests />} />
        <Route path="/guests-docs" element={<GuestsDocs />} />
      </Routes>
    </div>
  );
}

export default App;
