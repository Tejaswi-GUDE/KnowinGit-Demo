import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Donations from "./pages/Donations.jsx";
import Volunteers from "./pages/Volunteers.jsx";
import Programs from "./pages/Programs.jsx";
import Reports from "./pages/Reports.jsx";
import Calendar from "./pages/Calendar.jsx";
import Settings from "./pages/Settings.jsx";
import Support from "./pages/Support.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}
