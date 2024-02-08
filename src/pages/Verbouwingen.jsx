import { Link } from "react-router-dom";
import Foto from "../assets/gallerij/5.jpg";
import stelling3 from "../assets/hout.jpg";

function Verbouwingen() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="md:pl-36 md:pr-36 md:pt-12 md:pb-12 p-6">
        <div className="flex gap-44">
          <div>
            <h1 className="text-3xl pb-4 font-bold">
              Devalbo is de ideale partner voor uw totale renovatie in Bornem en
              ver daarbuiten.
            </h1>
            <p>
              Met een uitgebreide ervaring in renovatiewerken, bieden we een
              hoogwaardige dienst aan onze klanten. We werken alleen, wat zorgt
              voor een persoonlijke en toegewijde benadering van elk project.
            </p>
          </div>
        </div>

        <div className="pt-12">
          <img src={stelling3} className="w-full h-96 object-cover" />
        </div>

        <br />
        <h1 className="text-2xl pb-4">TOTALE RENOVATIE</h1>
        <p>
          Bij Devalbo snappen we als geen ander dat een totale renovatie een
          grote onderneming is. Daarom bieden we een grondige en gestructureerde
          aanpak om uw woning te transformeren. Of u nu een nieuwe keuken wilt
          plaatsen of uw woonkamer wilt vernieuwen, wij hebben de expertise in
          huis om uw droom werkelijkheid te maken. Let op, voor
          elektriciteitswerken verwijzen we u door naar gespecialiseerde
          partners.
        </p>
        <br />
        <h1 className="text-2xl pb-4"> BADKAMERRENOVATIE</h1>
        <p>
          Een badkamer is meer dan alleen een functionele ruimte, het is ook een
          plek om te ontspannen en tot rust te komen. Bij Devalbo zorgen we voor
          een stijlvolle en praktische badkamerrenovatie die aan al uw behoeften
          voldoet.
        </p>
        <br />
        <h1 className="text-2xl pb-4"> ZOLDERRENOVATIE</h1>
        <p>
          Heeft u extra ruimte nodig? Een zolderrenovatie kan uw huis volledig
          transformeren. Of het nu gaat om het creëren van een nieuwe
          slaapkamer, kantoorruimte of speelkamer, Devalbo kan u helpen om
          optimaal gebruik te maken van elke vierkante meter.
        </p>
        <br />
        <hr className="mb-6"/>

        <div className="flex flex-col md:flex-row justify-center md:gap-40 gap-12">
          <div className="md:w-1/2">
            <h1 className="text-2xl pb-4">CONTACTEER ONS</h1>
            <p>
              Bent u overtuigd van ons vakmanschap en wenst u een offerte aan te
              vragen? Neem dan zeker even contact op met Devalbo!
            </p>
            <Link to="/offerte">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-8 md:mt-12"       onClick={scrollToTop}>
                Offerte aanvragen
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
