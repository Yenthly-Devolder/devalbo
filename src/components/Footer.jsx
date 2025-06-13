import Logo from "../assets/devalbo.png";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 text-black p-6 md:p-12">
      <div className="container mx-auto px-4">
        <img src={Logo} alt="Logo" className="w-auto h-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="text-lg font-bold mb-4">{t('footer.contact_title')}</h3>
            <p>
              {t('footer.contact_name')}
              <br />
              {t('footer.contact_address_street')}
              <br />
              {t('footer.contact_address_city')}
            </p>
            <p className="mt-2">
              {t('footer.contact_phone_label')} {t('footer.contact_phone')}
              <br />
              {t('footer.contact_email_label')} {t('footer.contact_email')}
            </p>
          </div>

          <div className="md:col-span-1 lg:col-span-1 mt-4 md:mt-0">
            <h3 className="text-lg font-bold mb-4">{t('footer.company_title')}</h3>
            <p>
              {t('footer.company_vat_label')} {t('footer.company_vat')}
            </p>
            <div className="flex gap-7 pt-7">
              <a
                href="https://www.instagram.com/devalbo.be"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size="2.5em" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61550729383779"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook size="2.5em" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p>
            © {new Date().getFullYear()} Devalbo. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;