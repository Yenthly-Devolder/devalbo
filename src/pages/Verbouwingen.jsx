import { Link } from "react-router-dom";
import Foto from "../assets/jumbislides/5.jpg";
import stelling3 from "../assets/hout.jpg";
import { useTranslation } from "react-i18next";

function Verbouwingen() {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="md:pl-36 md:pr-36 md:pt-12 md:pb-12 p-6">
        <div className="flex gap-44">
          <div>
            <h1 className="text-3xl pb-4 font-bold">{t('verbouwingen.title')}</h1>
            <p>{t('verbouwingen.text')}</p>
          </div>
        </div>

        <div className="pt-12">
          <img src={stelling3} className="w-full h-96 object-cover" alt="" />
        </div>

        <br />
        <h1 className="text-2xl pb-4">{t('verbouwingen.renovation_title')}</h1>
        <p>{t('verbouwingen.renovation_text')}</p>
        <br />
        <h1 className="text-2xl pb-4">{t('verbouwingen.bathroom_title')}</h1>
        <p>{t('verbouwingen.bathroom_text')}</p>
        <br />
        <h1 className="text-2xl pb-4">{t('verbouwingen.attic_title')}</h1>
        <p>{t('verbouwingen.attic_text')}</p>
        <br />
        <hr className="mb-6"/>

        <div className="flex flex-col md:flex-row justify-center md:gap-40 gap-12">
          <div className="md:w-1/2">
            <h1 className="text-2xl pb-4">{t('verbouwingen.contact_title')}</h1>
            <p>{t('verbouwingen.contact_text')}</p>
            <Link to="/offerte">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-8 md:mt-12" onClick={scrollToTop}>
                {t('verbouwingen.quote_button')}
              </button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src={Foto}
              className="w-full h-48 md:h-96 object-cover"
              alt="Placeholder"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Verbouwingen;