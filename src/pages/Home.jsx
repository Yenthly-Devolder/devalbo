import React from "react";
import EmblaCarousel from "../components/EmblaCarrousel";
import { Link } from "react-router-dom";
import logo from "../assets/d-logo.png";
import stelling from "../assets/stelling.jpg";
import stelling2 from "../assets/gevel2.jpg";
import { useTranslation } from "react-i18next";
import InstagramFeed from "./InstagramFeed";

const Home = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const OPTIONS = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  React.useEffect(() => {
    // Cleanup function if needed
    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div className="w-full p-6 sm:p-8 md:p-12">
      <section className="container mx-auto px-4">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>

      <div className="container mx-auto px-4 flex flex-col md:flex-row md:gap-20 pt-12">
        <div className="w-full md:w-1/3 h-1/3 mb-8 md:mb-0">
          <h1 className="font-normal text-5xl">{t('home.quality')}</h1>
          <p className="font-thin pt-4">{t('home.quality_text')}</p>
        </div>
        <div className="w-full md:w-1/3 h-1/3 mb-8 md:mb-0">
          <h1 className="font-normal text-5xl">{t('home.passion')}</h1>
          <p className="font-thin pt-4">{t('home.passion_text')}</p>
        </div>
        <div className="w-full md:w-1/3 h-1/3">
          <h1 className="font-normal text-5xl">{t('home.detail')}</h1>
          <p className="pt-4">{t('home.detail_text')}</p>
        </div>
      </div>
      <hr className="container mx-auto px-4 md:mt-24 mt-12 border-l-orange-500" />

      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 md:gap-24 pt-6">
        <div className="md:w-1/2 h-auto md:h-96">
          <div className="p-6 sm:p-6 md:p-2 text-center flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl md:text-4xl mb-4">{t('home.project_title')}</h1>
            <p className="md:pt-12 pt-4">{t('home.project_text')}</p>
            <Link to="/offerte">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4 md:mt-12" onClick={scrollToTop}>
                {t('home.quote_button')}
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 h-64 md:h-96 relative">
          <img src={stelling2} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 md:gap-24 pt-12">
        <div className="md:w-1/2 h-64 md:h-96 relative bg-black">
          <img src={stelling} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/2 h-auto md:h-96">
          <div className="p-6 sm:p-6 md:p-12 text-center flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl md:text-4xl mb-4">{t('home.renovation_title')}</h1>
            <p className="pt-4 md:pt-12">{t('home.renovation_text')}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12">
        <h1 className="font-bold text-2xl md:text-4xl text-center mb-8">{t('home.news_title')}</h1>
        <InstagramFeed />
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 md:gap-24 pt-12">
        <div className="md:w-1/2 h-auto md:h-96">
          <div className="p-6 sm:p-6 md:p-12 text-center flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl md:text-4xl mb-4">{t('home.question_title')}</h1>
            <p className="pt-4 md:pt-12">{t('home.question_text')}</p>
            <Link to="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-8 md:mt-12" onClick={scrollToTop}>
                {t('home.contact_button')}
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 h-64 md:h-96 relative bg-black">
          <img src={logo} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;