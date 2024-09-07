import { Routes, Route } from "react-router-dom";
import { routes } from "./global/config/app_routing.config.ts";
import { Suspense } from "react";
import NavBar from "./components/pages/navigation-bar/NavBar";
import Footer from "./components/pages/footer/Footer";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import ScrollToTop from './components/wrappers/scroll-to-top-wrapper/ScrollToTop.tsx'
import MetaWrapper from "./components/wrappers/meta-wrapper/MetaWrapper.tsx";
import MainLoading from "./global/components/MainLoading.tsx";
function App() {
  const location = useLocation()
  return (
    <>
      <NavBar />
      <Suspense fallback={<MainLoading />}>
        <ScrollToTop>
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              {routes.map((item, index) => {
                return <Route key={index} path={item.path} element={
                  <MetaWrapper>
                    <item.component />
                  </MetaWrapper>
                } />
              })}
            </Routes>
          </AnimatePresence>
        </ScrollToTop >
      </Suspense >

      <Footer />
    </>
  );
}

export default App;
