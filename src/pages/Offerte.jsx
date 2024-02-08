import Muur from "../assets/wit.jpg";
import Foto from "../assets/gallerij/4.5.jpg";
import { useState } from "react";
import emailjs from "@emailjs/browser";
//const VITE_APP_PASSWORD = import.meta.env.VITE_APP_PASSWORD
// import { test } from '../functions/email'
const Offerte = () => {
  const homepageStijl = {
    backgroundImage: `url(${Muur})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephonenr, setTelephonenr] = useState("");
  const [postcode, setPostcode] = useState("");
  const [message, setMessage] = useState("");

  const logFormData = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const serviceId = "service_kx5wp9t";
    const templateId = "template_fkbqewh";
    const publicKey = "zgTYjCb2UKxXBjQ-d";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "info@devalbo.be",
      postcode: postcode,
      telephonenr: telephonenr,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("email sent", response);
        setName("");
        setEmail("");
        setPostcode("");
        setTelephonenr("");
        setMessage("");
        alert('Offerte succesvol verzonden! Wij nemen zo snel mogelijk contact op.')
      })
      .catch((error) => {
        console.log("error sending email:", error);
      });
  };

  return (
    <div
      className="homepage min-h-screen flex align-middle justify-center"
      style={homepageStijl}
    >
      <div className="md:pt-12 md:pb-12 md:flex flex-col md:flex-row rounded-md justify-center align-middle ">
        <form
          className="bg-white md:p-12 shadow-lg md:mb-0 md:w-1/3 m-6 p-6 mb-0 md:m-0 "
          onSubmit={logFormData}
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">
            Offerte Aanvragen
          </h1>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 text-sm font-bold mb-2"
            >
              Uw Naam
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:shadow-outline-blue"
              placeholder=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-bold mb-2"
            >
              E-mailadres
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:shadow-outline-blue"
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 text-sm font-bold mb-2"
            >
              Telefoonnummer
            </label>
            <input
              type="text"
              id="telephonenr"
              name="telephonenr"
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:shadow-outline-blue"
              placeholder=""
              onChange={(e) => setTelephonenr(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-bold mb-2"
            >
              Postcode
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:shadow-outline-blue"
              placeholder=""
              onChange={(e) => setPostcode(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-600 text-sm font-bold mb-2"
            >
              Bericht
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:shadow-outline-blue"
              placeholder="Vertel ons over uw project..."
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Verzenden
          </button>
        </form>
        <div className="md:w-1/3 pr-6 pl-6 pb-6  md:pr-0 md:pl-0 md:pb-0">
          <img
            src={Foto}
            alt=""
            className=" md:w-full md:h-full h-1/3 object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Offerte;
