import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainWrapper from "./layouts/MainWrapper";
import Register from "./views/auth/Register.jsx";
import Login from "./views/auth/Login.jsx";

function App() {
    return (
        <BrowserRouter>
            {/* MainWrapper checks if user has been authenticated */}
            <MainWrapper>
                <Routes>
                    <Route path="/register/" element={<Register />} />
                    <Route path="/login/" element={<Login />} />
                </Routes>
            </MainWrapper>
        </BrowserRouter>
    );
}

export default App;
