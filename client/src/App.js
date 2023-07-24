import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import { Routes ,Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contactpage from "./pages/Contactpage";
import Aboutpage from "./pages/Aboutpage";
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
    </Routes>
  );
}

export default App;
