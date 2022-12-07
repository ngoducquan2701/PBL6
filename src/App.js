import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./components/topbar/Topbar";
import { Context } from "./context/Context";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";


function App() {
  const [state]= useContext(Context);
  const currentUser = state.user;

  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route path="/register" element={currentUser ? <Homepage /> : <Register />} />
        <Route path="/login" element={currentUser ? <Homepage /> : <Login />}/>
        <Route path="/post/:id" element={<Single />}/>
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
