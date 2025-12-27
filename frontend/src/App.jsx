import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainWrapper from "./layouts/MainWrapper";
import Register from "./views/auth/Register.jsx";
import Login from "./views/auth/Login.jsx";
import Dashboard from "./views/base/Dashboard.jsx";
import KpiDetailView from "./views/base/KpiDetailView.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* MainWrapper checks if user has been authenticated */}
      <MainWrapper>
        <Routes>
          <Route path="/register/" element={<Register />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/dashboard/" element={<Dashboard />} />
          <Route path="/kpi/:kpiId" element={<KpiDetailView />} />
          <Route path="/kpi/:kpiId/sub/:subId" element={<KpiDetailView />} />
        </Routes>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
