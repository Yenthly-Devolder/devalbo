import GoogleMap from '../components/GoogleMap';
import Muur from '../assets/wit.jpg';
import { MapPinIcon, DevicePhoneMobileIcon, EnvelopeIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

function ContactPage() {
  const { t } = useTranslation();
  const homepageStyle = {
    backgroundImage: `url(${Muur})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-10 pb-10" style={homepageStyle}>
      <div className="bg-white p-8 shadow-md rounded-md max-w-lg w-full m-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">{t('contact.title')}</h1>
       
        <div className="mb-4 flex items-center" onClick={() => handleCopyToClipboard(t('contact.phone'))}>
          <DevicePhoneMobileIcon className="h-6 w-6 text-gray-600 mr-2" />
          <p className="font-medium">{t('contact.phone')}</p>
        </div>
        <div className="mb-4 flex items-center" onClick={() => handleCopyToClipboard(t('contact.email'))}>
          <EnvelopeIcon className="h-6 w-6 text-gray-600 mr-2" />
          <p className="font-medium">{t('contact.email')}</p>
        </div>
        <div className="mb-6 flex items-center">
          <BuildingOfficeIcon className="h-6 w-6 text-gray-600 mr-2" />
          <p className="font-medium">{t('contact.vat')}</p>
        </div>
        <div className="mb-4 flex items-center">
          <MapPinIcon className="h-6 w-6 text-gray-600 mr-2" />
          <div>
            <p className="font-medium">{t('contact.address_street')}</p>
            <p className="font-medium">{t('contact.address_city')}</p>
          </div>
        </div>
        <div className="mt-8">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;