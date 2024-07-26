import NavBar from "./components/pages/homepage/navigation-bar/general-nav-bar/NavBar";
import Section from "./components/pages/homepage/section/Section";
import Footer from "./components/pages/homepage/footer/Footer";
import { Routes, Route } from "react-router-dom";

import OurLeaders from "./components/pages/aboutUs/OurLeaders";
import OurStoryLine from "./components/pages/aboutUs/OurStoryLine";
import MissionVision from "./components/pages/aboutUs/MissionVision";

import LeadGeneration from "./components/pages/solutions/LeadGeneration";
import MarketResearch from "./components/pages/solutions/MarketResearch";
import StaffAugmentation from "./components/pages/solutions/StaffAugmentation";
import StaffingSolutions from "./components/pages/solutions/StaffingSolutions";
import TrainingAndDev from "./components/pages/solutions/TrainingAndDev";

import EngServices from "./components/pages/services/EngServices";
import HealthCareServices from "./components/pages/services/HealthCareServices";
import ItStaffing from "./components/pages/services/ItStaffing";
import NonItStaffing from "./components/pages/services/NonItStaffing";

import JobPostings from "./components/pages/carrer/JobPostings";
import EmployeeLogin from "./components/pages/carrer/EmployeeLogin";
import EmployerLogin from "./components/pages/carrer/EmployerLogin";
function App() {

  return (
    <div>
      <NavBar />
      <Routes>

        <Route path="/" element={< Section />} />
        <Route path="/aboutUs/mission-vision" element={<MissionVision />} />
        <Route path="/aboutUs/our-storyline" element={<OurStoryLine />} />
        <Route path="/aboutUs/our-leaders" element={<OurLeaders />} />

        <Route path="/solutions/staffing-solutions" element={<StaffingSolutions />} />
        <Route path="/solutions/lead-generation" element={<LeadGeneration />} />
        <Route path="/solutions/training&dev" element={< TrainingAndDev />} />
        <Route path="/solutions/Staff-augmentation" element={<StaffAugmentation />} />
        <Route path="/solutions/market-research" element={<MarketResearch />} />


        <Route path="/services/engineering-services" element={<EngServices />} />
        <Route path="/services/health-care-services" element={<HealthCareServices />} />
        <Route path="/services/it-staffing" element={<ItStaffing />} />
        <Route path="/services/non-it-staffing" element={<NonItStaffing />} />

        <Route path="/career/job-postings" element={<JobPostings />} />
        <Route path="/career/employee-login" element={<EmployeeLogin />} />
        <Route path="/career/employer-login" element={<EmployerLogin />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
