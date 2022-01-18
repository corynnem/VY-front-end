import { useState } from "react";
import Auth from "./Auth/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from './Main/CreateVenue'
import Navigation from "./Main/Nav/Nav";
import Welcome from './Main/Home'
import "./App.css";


function App() {
  const [token, setToken] = useState(true);

  return (
    <div className="App">
     
      {token === undefined ? (
        <Auth token={token} setToken={setToken} />
      ) : (
        <div>
           
          <BrowserRouter>
          <Navigation/>
            <Routes>
              <Route path="/" element={<Welcome/>} />
              <Route path="create" element={<Create/>} />
              {/* <Route path="applications" element={} /> */}
              {/* <Route path="contact" element={} /> */}
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
