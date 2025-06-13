import React from "react";
import EmblaCarousel from "../components/EmblaCarrousel";
import { Link } from "react-router-dom";
import logo from "../assets/d-logo.png";
import stelling from "../assets/stelling.jpg";
import stelling2 from "../assets/gevel2.jpg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const OPTIONS = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  React.useEffect(() => {
    console.log('Starting Juicer.io script load');
    const script = document.createElement('script');
    script.src = 'https://www.juicer.io/embed/devalbo-be/embed-code.js';
    script.id = 'JuicerScript';
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      console.error('Error loading Juicer.io script');
    };
    if (!document.getElementById('JuicerScript')) {
      document.head.appendChild(script);
      console.log('Juicer.io script appended to DOM');
    }

    script.onload = () => {
      console.log('Juicer.io script loaded successfully');
      const checkPosts = (attempt = 1, maxAttempts = 3) => {
        const widget = document.querySelector('.juicer-feed');
        const posts = widget ? document.querySelectorAll('.juicer-feed .j-post') : [];
        console.log(`Attempt ${attempt}: Number of Instagram posts loaded: ${posts.length}`);
        if (posts.length > 0) {
          console.log('Post elements found:', Array.from(posts).map(p => p.outerHTML.slice(0, 100) + '...'));
        } else {
          console.log('Widget content:', widget ? widget.innerHTML.slice(0, 200) + '...' : 'Widget not found');
          if (attempt < maxAttempts) {
            console.warn(`No posts found. Checking again in 2 seconds (attempt ${attempt + 1}/${maxAttempts})...`);
            setTimeout(() => checkPosts(attempt + 1, maxAttempts), 2000);
          } else {
            console.error('Max attempts reached. No posts loaded. Please check Juicer.io feed configuration for @devalbo.be at https://www.juicer.io/feeds/devalbo-be.');
          }
        }
      };
      setTimeout(() => checkPosts(), 1000);
    };

    return () => {
      console.log('Cleaning up Juicer.io script');
      const existingScript = document.getElementById('JuicerScript');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
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
        <div
          className="juicer-feed w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[90%] sm:max-w-[85%] md:max-w-[1400px] mx-auto"
          data-feed-id="devalbo-be"
          data-per="3"
        ></div>
        <style>
          {`
            .juicer-feed .j-stacker-wrapper,
            .juicer-feed .j-stacker,
            .juicer-feed .j-stack {
              display: contents !important;
              width: auto !important;
              padding: 0 !important;
              margin: 0 !important;
            }
            .juicer-feed .referral {
              display: none !important;
            }
            .juicer-feed .j-post {
              width: 100% !important;
              max-width: 100%;
              margin: 0 !important;
              min-width: 350px;
              display: block !important;
            }
            .juicer-feed img, .juicer-feed iframe {
              width: 100% !important;
              height: auto !important;
              aspect-ratio: 1 / 1;
              min-height: 250px;
            }
            .juicer-feed .j-branding {
              display: block;
              text-align: center;
              margin-top: 12px;
              font-size: 12px;
            }
            .juicer-feed .j-branding img {
              width: 20px;
              height: auto;
              vertical-align: middle;
            }
            .juicer-feed .j-paginate {
              display: none !important;
            }
            .juicer-feed:has(.j-post) ~ .juicer-fallback {
              display: none !important;
            }
            @media (max-width: 640px) {
              .juicer-feed img, .juicer-feed iframe {
                min-height: 200px;
              }
              .juicer-feed .j-post {
                min-width: 0;
              }
            }
            @media (min-width: 640px) and (max-width: 768px) {
              .juicer-feed img, .juicer-feed iframe {
                min-height: 220px;
              }
              .juicer-feed .j-post {
                min-width: 0;
              }
            }
            @media (min-width: 768px) {
              .juicer-feed {
                gap: 0.5rem !important;
              }
            }
          `}
        </style>
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