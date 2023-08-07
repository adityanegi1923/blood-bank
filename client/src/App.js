import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import { Routes ,Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contactpage from "./pages/Contactpage";
import Aboutpage from "./pages/Aboutpage";
import Donatepage from "./pages/Donatepage";
import Candonatepage from "./pages/Candonatepage";
import Footer from "./components/Footer";

function App() {
  const user= localStorage.getItem("token")
  return (
    <Routes>
      {user && <Route path="/homepage" element={<Homepage />} />}
      <Route path='/login' element={<Loginpage />} />
      <Route path='/' element={<Signuppage />} />
      <Route path='/homepage' element={<Navigate replace to="/login" />} />
      <Route path='/contactpage' element={<Contactpage />} />
      <Route path='/aboutpage' element={<Aboutpage />} />
      <Route path='/donatepage' element={<Donatepage />} />
      <Route path='/candonatepage' element={<Candonatepage />} />
      <Route path='/footer' element={<Footer />} />
    </Routes>
  );
}

export default App;
