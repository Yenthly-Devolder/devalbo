import Terras from "../assets/gallerij/2.jpg";
import Terras2 from "../assets/gallerij/1.jpg";
import { Link } from "react-router-dom";
function Terrassen() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="md:pr-36 md:pl-36 md:pt-12 md:pb-12 md:flex md:justify-center md:gap-44 p-6">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold"> OPRIT EN TERRAS</h1>
          <br />
          <p>
            <p className="font-bold">
              {" "}
              Terras of oprit aanleggen? <br /> <br />
            </p>
            Devalbo uit Londerzeel legt prachtige terrassen voor u aan in de stijl
            die aansluit bij uw woning of pand. <br /> <br />
            De keuze is volledig aan u. Zo gebruiken we bijvoorbeeld platines,
            kasseien met een afgeplatte bovenkant. Ze passen perfect bij
            woningen in de pastoriestijl en zijn verkrijgbaar in bruin, grijs,
            zwart en multicolor. Hebt u liever een moderne stijl? Dan kunnen we
            beter kijken naar klinkers of tegels. Er zijn verschillende soorten
            materialen mogelijk, zoals bijvoorbeeld natuursteen of
            betonklinkers. Aanleg terras De aanleg van een terras verreist de
            nodige vakkennis. <br /> Bij Devalbo is deze kennis doorgegeven van
            vader op zoon. <br />
            <br />
            Het belangrijkste aspect bij de aanleg van een terras is om
            verzakkingen te voorkomen. U kan ook op uw beide oren slapen als u
            uw terras door ons laat aanleggen. Wij zorgen voor een egaal &
            loodrechte plaatsing. Gratis advies We adviseren u naargelang uw
            budget over de mogelijkheden, materialen, onderhoud & duurzaamheid.
            U kiest de materialen en wij leveren en plaatsen uw terras.
          </p>
          <br /> <br />
          <div>
            <h1 className="text-2xl pb-4">CONTACTEER ONS</h1>
            <p>
              Bent u overtuigd van ons vakmanschap en wenst u een offerte aan te
              vragen? Neem dan zeker even contact op met Devalbo!
            </p>
            <Link to="/offerte">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-8 md:mt-12"
                onClick={scrollToTop}
              >
                Offerte aanvragen
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 pt-4 pb-4">
          <div className=" h-1/2 overflow-hidden">
            {" "}
            <img
              src={Terras}
              alt=""
              className="w-full h-1/2 object-cover  overflow-auto"
            />
            <br />
            <img
              src={Terras2}
              alt=""
              className="w-full  object-cover  overflow-hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Terrassen;
