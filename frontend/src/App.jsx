import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainWrapper from "./layouts/MainWrapper";
import Register from "./views/auth/Register.jsx";
import Login from "./views/auth/Login.jsx";
import Dashboard from "./views/base/Dashboard.jsx";
import KpiDetailView from "./views/base/KpiDetailView.jsx";
import GoalAndVisions from "./views/base/GoalAndVisions.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* MainWrapper checks if user has been authenticated */}
      <MainWrapper>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/kpi/:kpiId" element={<KpiDetailView />} />
          <Route path="/kpi/:kpiId/sub/:subId" element={<KpiDetailView />} />
          <Route path="/kpi/new" element={<GoalAndVisions />} />
        </Routes>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
