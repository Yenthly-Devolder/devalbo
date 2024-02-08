import Logo from "../assets/devalbo.png";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black md:p-36 md:pt-12 md:pb-12 pb-12 ">
   
      <div className="container mx-auto p-12">
      <img src={Logo} alt="Logo" className="w-auto h-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div className="md:col-span-1 lg:col-span-2">
            
            <h3 className="text-lg font-bold mb-4">Contactinformatie</h3>
            <p>
              Yenthe Devolder
              <br />
              Bareldreef 117 postbus 002
              <br />
              2880 Bornem
            </p>
            <p className="mt-2">
              Tel. +32 493 45 08 72
              <br />
              E-mail: info@devalbo.be
            </p>
          </div>

          <div className="md:col-span-1 lg:col-span-1 mt-4 md:mt-0">
            <h3 className="text-lg font-bold mb-4">Bedrijfsgegevens</h3>
            <p>
              BTW-nummer: BE0748 542 664
              <br />
              Rekeningnummer: BE25 3632 0152 1782
              <br />
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
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Devalbo. Alle rechten
            voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
