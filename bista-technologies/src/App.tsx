import { Routes, Route } from "react-router-dom";
import { lazyRoutes } from "./global/config/app_routing.config.ts";
import { Suspense } from "react";
import NavBar from "./components/pages/navigation-bar/NavBar";
import Footer from "./components/pages/footer/Footer";
import { AnimatePresence } from "framer-motion"
import ScrollToTop from './components/wrappers/scroll-to-top-wrapper/ScrollToTop.tsx'
import MetaWrapper from "./components/wrappers/meta-wrapper/MetaWrapper.tsx";
import MainLoading from "./global/components/MainLoading.tsx";
import FooterWrapper from "./components/wrappers/footer-wrapper/FooterWrapper.tsx";
function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<MainLoading />}>
        <ScrollToTop>
          <AnimatePresence mode='wait'>
            <Routes >
              {lazyRoutes.map((item, index) => {
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
      <FooterWrapper>
        <Footer />
      </FooterWrapper>

    </>
  );
}

export default App;
