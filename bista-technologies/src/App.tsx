
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const NavBar = lazy(() => import('./components/pages/homepage/navigation-bar/NavBar'))
import Section from "./components/pages/homepage/section/Section";
import Footer from "./components/pages/homepage/footer/Footer";
const OurLeaders = lazy(() => import('./components/pages/aboutUs/OurLeaders'))
const OurStoryLine = lazy(() => import('./components/pages/aboutUs/OurStoryLine'));
const MissionVision = lazy(() => wait(2000).then(() => import('./components/pages/aboutUs/MissionVision')));

const LeadGeneration = lazy(() => import('./components/pages/solutions/LeadGeneration'));
const MarketResearch = lazy(() => import('./components/pages/solutions/MarketResearch'));
const StaffAugmentation = lazy(() => import('./components/pages/solutions/StaffAugmentation'));
const StaffingSolutions = lazy(() => import('./components/pages/solutions/StaffingSolutions'));
const TrainingAndDev = lazy(() => import('./components/pages/solutions/TrainingAndDev'));

const EngServices = lazy(() => import('./components/pages/services/EngServices'));
const HealthCareServices = lazy(() => import('./components/pages/services/HealthCareServices'));
const ItStaffing = lazy(() => import('./components/pages/services/ItStaffing'));
const NonItStaffing = lazy(() => import('./components/pages/services/NonItStaffing'));


const JobPostings = lazy(() => import('./components/pages/carrer/JobPostings'));
const EmployeeLogin = lazy(() => import('./components/pages/carrer/EmployeeLogin'));
const EmployerLogin = lazy(() => import('./components/pages/carrer/EmployerLogin'));


function wait(time: number) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
function App() {


  return (
    <div>
      <NavBar />
      <Suspense fallback={<div className="w-full h-screen bg-black opacity-40 border-2 flex justify-center items-center">
        <div role="status">
          <svg aria-hidden="true" className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>

      </div>}>

        <Routes>
          <Route path="/" element={< Section />} />
          <Route path="aboutUs/mission-vision" element={<MissionVision />} />
          <Route path="aboutUs/our-storyline" element={<OurStoryLine />} />
          <Route path="aboutUs/our-leaders" element={<OurLeaders />} />

          <Route path="solutions/staffing-solutions" element={<StaffingSolutions />} />
          <Route path="solutions/lead-generation" element={<LeadGeneration />} />
          <Route path="solutions/training&dev" element={< TrainingAndDev />} />
          <Route path="solutions/Staff-augmentation" element={<StaffAugmentation />} />
          <Route path="solutions/market-research" element={<MarketResearch />} />


          <Route path="services/engineering-services" element={<EngServices />} />
          <Route path="services/health-care-services" element={<HealthCareServices />} />
          <Route path="services/it-staffing" element={<ItStaffing />} />
          <Route path="/services/non-it-staffing" element={<NonItStaffing />} />

          <Route path="career/job-postings" element={<JobPostings />} />
          <Route path="career/employee-login" element={<EmployeeLogin />} />
          <Route path="career/employer-login" element={<EmployerLogin />} />
        </Routes>
      </Suspense >
      <Footer />
    </div >
  );
}

export default App;
