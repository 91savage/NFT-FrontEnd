import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import GallaryPage from './page/GallaryPage';
import MainPage from './page/MainPage';
import MintPage from './page/MintPage';
import { useRef } from 'react';
import ScrollTriggerProxy from './lib/animation/gsap/ScrollTriggerProxy';
import useLocoScroll from './lib/hooks/useLocoScroll';

function App() {
    const containRef = useRef(null);
    useLocoScroll(true);

    return (
        <BrowserRouter>
            {/* <LocomotiveScrollProvider
                options={{
                    smooth: true,
                    smartphone: {
                        smooth: true,
                    },
                    tablet: {
                        smooth: true,
                    },
                }}
                watch={
                    [
                        //..all the dependencies you want to watch to update the scroll.
                        //  Basicaly, you would want to watch page/location changes
                        //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
                    ]
                }
                containerRef={containRef}
            > */}
            {/* <ScrollTriggerProxy /> */}
            <main className="App" id="App" data-scroll-container ref={containRef}>
                <ScrollToTop>
                    <Header />
                    <Routes>
                        <Route path="/" element={<MainPage />} />

                        <Route path="/gallary" element={<GallaryPage />} />
                        <Route path="/mint" element={<MintPage />} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </main>
            {/* </LocomotiveScrollProvider> */}
        </BrowserRouter>
    );
}

export default App;
