import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./scenes/Home";
import Dsa from "./scenes/Dsa";
import MachineLearn from "./scenes/MachineLearn";
import Csfundamental from "./scenes/Csfundamental";
import Webd from "./scenes/Webd";
import QuesList from "./scenes/QuesList";
import ResumeMaker from "./scenes/ResumeMaker";
import Login from "./scenes/Login";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/resumemaker' element={<ResumeMaker />} />
            <Route path='/dsa' element={<Dsa />} />
            <Route path='/ml' element={<MachineLearn />} />
            <Route path='/csfundamental' element={<Csfundamental />} />
            <Route path='/webd' element={<Webd />} />
            <Route path="/dsa/question/:id" element={<QuesList />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
