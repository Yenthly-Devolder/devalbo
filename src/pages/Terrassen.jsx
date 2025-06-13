import Terras from "../assets/gallerij/2.jpg";
import Terras2 from "../assets/gallerij/1.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Terrassen() {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="md:pr-36 md:pl-36 md:pt-12 md:pb-12 md:flex md:justify-center md:gap-44 p-6">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold">{t('terrassen.title')}</h1>
          <br />
          <p>
            <p className="font-bold">{t('terrassen.subtitle')}</p>
            <br />
            {t('terrassen.text')}
          </p>
          <br /><br />
          <div>
            <h1 className="text-2xl pb-4">{t('terrassen.contact_title')}</h1>
            <p>{t('terrassen.contact_text')}</p>
            <Link to="/offerte">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-8 md:mt-12"
                onClick={scrollToTop}
              >
                {t('terrassen.quote_button')}
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 pt-4 pb-4">
          <div className="h-1/2 overflow-hidden">
            <img
              src={Terras}
              alt=""
              className="w-full h-1/2 object-cover overflow-auto"
            />
            <br />
            <img
              src={Terras2}
              alt=""
              className="w-full object-cover overflow-hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Terrassen;