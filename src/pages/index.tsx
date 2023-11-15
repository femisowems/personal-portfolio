import { useEffect, useState } from 'react';

// Sections
import HomeSection from './sections/Home';
import Portfolio from './sections/portfolio';

// Components
import Loader from '../components/Loader';
import Footer from './sections/footer';

// -------------------

function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [fadeOffLoader, setFadeOffLoader] = useState<boolean>(false);

  useEffect(() => {
    const loaderTimer = setTimeout(handleLoad, 750);
    return () => {
      clearTimeout(loaderTimer);
    };
  }, []);

  const handleLoad = () => {
    setFadeOffLoader(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <>
      {loading ? <Loader fadeOffLoader={fadeOffLoader} /> : <></>}

      <div>
        <div className="content-right">
          <div className="content-right-wrapper">
            <HomeSection />
            <Portfolio />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
