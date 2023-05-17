
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from "./components/signin";
import Dashboard from "./components/dashboard";
import TotalCheck from "./components/total-check";
import TotalCheck2 from "./components/total-check2";
import TotalSite from "./components/total-site";
import TotalSite2 from "./components/total-site2";
import TotalAudit from "./components/total-audits";
import TotalInspector from "./components/total-inspector";
import TotalReviewer from "./components/total-reviewer";
import PrivacyPol from "./components/privacy-pol";
import Terms from "./components/terms";
import Welcome from "./components/welcome";
import CompleteAudit from "./components/complete-audit";
import Notification from "./components/notifications";
import Profile from "./components/profile";
import TotalUser from "./components/total-user";
import CreateUser from "./components/create-user";
import Report from "./components/reports";
import Client from "./components/clients";
import Help from "./components/help";
import Auditor from "./components//auditors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/total-check" element={<TotalCheck />} />
        <Route path="/total-check2/:id/:ide" element={<TotalCheck2 />} />
        <Route path="/total-audit" element={<TotalAudit />} />
        <Route path="/total-site" element={<TotalSite />} />
        <Route path="/total-site2" element={<TotalSite2 />} />
        <Route path="/total-reviewer" element={<TotalReviewer />} />
        <Route path="/total-inspector" element={<TotalInspector />} />
        <Route path="/privacy-pol" element={<PrivacyPol />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/complete-audit" element={<CompleteAudit />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/total-user" element={<TotalUser />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/reports" element={<Report />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/help" element={<Help />} />
        <Route path="/auditors" element={<Auditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
