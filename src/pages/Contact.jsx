
import GoogleMap from '../components/GoogleMap';
import Muur from '../assets/wit.jpg';
import { MapPinIcon, DevicePhoneMobileIcon, EnvelopeIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

function ContactPage() {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-10 pb-10 " style={homepageStyle}>
      <div className="bg-white p-8 shadow-md rounded-md max-w-lg w-full m-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Contacteer ons</h1>
       
        <div className="mb-4 flex items-center" onClick={() => handleCopyToClipboard('+32 493 45 08 72')}>
          <DevicePhoneMobileIcon className="h-6 w-6 text-gray-600 mr-2" />
          <p className="font-medium">+32 493 45 08 72</p>
        </div>
        <div className="mb-4 flex items-center" onClick={() => handleCopyToClipboard('info@devalbo.be')}>
          <EnvelopeIcon className="h-6 w-6 text-gray-600 mr-2" />
          <p className="font-medium">info@devalbo.be</p>
        </div>
        <div className="mb-6 flex items-center">
          <BuildingOfficeIcon className="h-6 w-6 text-gray-600 mr-2" />
          <p className="font-medium">BE10 222 714 19</p>
        </div>
        <div className="mb-4 flex items-center">
        <MapPinIcon className="h-6 w-6 text-gray-600 mr-2" />
          <div>
            <p className="font-medium">Zwaluwstraat 71</p>
            <p className="font-medium">1840 Londerzeel</p>
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
