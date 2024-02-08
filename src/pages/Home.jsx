import EmblaCarousel from "../components/EmblaCarrousel";
import { Link } from "react-router-dom";
import logo from "../assets/d-logo.png";
import stelling from "../assets/stelling.jpg";
import stelling2 from "../assets/gevel2.jpg";
// import stelling3 from "../assets/hout.jpg"
// import { Fade } from "react-awesome-reveal";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const OPTIONS = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="jumbotron w-full sm:p-12 p-12 md:p-36 md:pt-12">
      <section className="sandbox__carousel ">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>

      <div className="flex flex-col md:flex-row md:gap-20 pt-12">
        <div className="container w-full md:w-1/3 h-1/3 mb-8 md:mb-0">
          <h1 className="font-normal text-5xl">KWALITEIT</h1>
          <p className="font-thin pt-4">
            Gedreven door toewijding aan kwaliteit, leveren wij hoogwaardige
            resultaten om U tegen te zeggen.
          </p>
        </div>
        <div className="container w-full md:w-1/3 h-1/3 mb-8 md:mb-0 ">
          <h1 className="font-normal text-5xl">PASSIE</h1>
          <p className="font-thin pt-4">
            Gedreven door passie weeft Devalbo emotie in elk project,
            resulterend in creatieve en betrokken oplossingen.
          </p>
        </div>
        <div className="container w-full md:w-1/3 h-1/3 ">
          <h1 className="font-normal text-5xl">DETAIL</h1>
          <p className=" pt-4">
            Een scherp oog voor detail resulteerd elk project een
            voortreffelijke afwerking met een verfijnde esthetiek.
          </p>
        </div>
      </div>
      <hr className="md:mt-24  mt-12 border-l-orange-500" />

  <div className="flex flex-col md:flex-row gap-8 md:gap-24 pt-6">

    {/* First Section */}
    <div className="container md:w-1/2 h-auto md:h-96">
      <div className="p-6 md:p-2 text-center flex flex-col justify-center items-center  ">
        <h1 className="font-bold text-2xl md:text-4xl mb-4">
          Totaalproject renovatie of nieuwbouw.
        </h1>
        <p className=" md:pt-12 pt-4">
          Welkom bij Devalbo, jouw specialist in renovaties en terrassen. Laat ons jouw droomproject realiseren met vakmanschap en kwaliteit. Neem vandaag nog contact op voor een vernieuwde leefomgeving.
        </p>
        <Link to="/offerte">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4 md:mt-12"       onClick={scrollToTop}
>
            Offerte aanvragen
          </button>
        </Link>
      </div>
    </div>

    {/* Image Section */}
    <div className="container md:w-1/2 h-64 md:h-96 relative">
      <img
        src={stelling2}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

  </div>

  {/* Second Section */}
  <div className="flex flex-col md:flex-row gap-8 md:gap-24 pt-12">

    {/* Image Section */}
    <div className="container md:w-1/2 h-64 md:h-96 relative bg-black">
      <img
        src={stelling}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

    {/* Second Text Section */}
    <div className="container md:w-1/2 h-auto md:h-96">
      <div className="p-6 md:p-12 text-center flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl md:text-4xl mb-4">Renoveren wordt haalbaar</h1>
        <p className="pt-4 md:pt-12">
          Als doorwinterd renovatiebedrijf kan Devalbo u uitstekend begeleiden in het omzetten van uw ideeën naar een haalbaar plan. We gaan na wat technisch en budgettair mogelijk is en adviseren u in het gebruik van materialen. Hebt u nog geen architect? Dan kunnen we u daarin zeker begeleiden.
        </p>
      </div>
    </div>

  </div>

  {/* Third Section */}
  <div className="flex flex-col md:flex-row gap-8 md:gap-24 pt-12">

    {/* Third Text Section */}
    <div className="container md:w-1/2 h-auto md:h-96">
      <div className="p-6 md:p-12 text-center flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl md:text-4xl mb-4">Heeft u een vraag?</h1>
        <p className="pt-4 md:pt-12">
          Heb je een vraag over een project of werk waar je niet uitgeraakt? Wens je wat meer info of had je graag een afspraak gemaakt voor een geheel vrijblijvende offerte? Aarzel dan niet en neem zo snel mogelijk contact op met ons.
        </p>
        <Link to="/contact">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-8 md:mt-12"       onClick={scrollToTop}
>
            Neem contact op
          </button>
        </Link>
      </div>
    </div>

    {/* Third Image Section */}
    <div className="container md:w-1/2 h-64 md:h-96 relative bg-black">
      <img src={logo} alt="" className="w-full h-full object-cover" />
    </div>

  </div>

{/*   
  <div className="pt-12" >
    <img src={stelling3} className="w-full h-96 object-cover" />
  </div> */}
</div>

  );
  };
export default Home;
