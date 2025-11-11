import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainWrapper from "./layouts/MainWrapper";
import Register from "../src/views/auth/Register.jsx";

function App() {
return(
  <BrowserRouter>
  {/* MainWrapper checks if user has been authenticated */}
  <MainWrapper>
    <Routes>
      <Route path="/register/" element={<Register/>}/>
    </Routes>

  </MainWrapper>
  </BrowserRouter>
)
}

export default App
