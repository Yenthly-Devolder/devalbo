import Muur from "../assets/wit.jpg";
import Foto from "../assets/gallerij/4.5.jpg";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Offerte = () => {
  const homepageStyle = {
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
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Naam is verplicht";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "E-mailadres is verplicht";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Voer een geldig e-mailadres in";
    }

    // Phone number validation
    const phoneRegex = /^\+?\d[\d\s-]{8,}$/;
    if (!telephonenr.trim()) {
      newErrors.telephonenr = "Telefoonnummer is verplicht";
    } else if (!phoneRegex.test(telephonenr)) {
      newErrors.telephonenr = "Voer een geldig telefoonnummer in";
    }

    // Postcode validation (Belgian format: 4 digits)
    const postcodeRegex = /^\d{4}$/;
    if (!postcode.trim()) {
      newErrors.postcode = "Postcode is verplicht";
    } else if (!postcodeRegex.test(postcode)) {
      newErrors.postcode = "Voer een geldige Belgische postcode in (4 cijfers)";
    }

    // Message validation
    if (!message.trim()) {
      newErrors.message = "Bericht is verplicht";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const logFormData = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

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
        console.log("Email sent:", response);
        setName("");
        setEmail("");
        setPostcode("");
        setTelephonenr("");
        setMessage("");
        setErrors({});
        alert("Offerte successfully sent! We will contact you soon.");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Er is een fout opgetreden bij het verzenden. Probeer opnieuw.");
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={homepageStyle}
    >
      <div className="container mx-auto px-4 py-8 sm:py-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
        <form
          className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full max-w-md md:max-w-lg"
          onSubmit={logFormData}
          noValidate
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-800">
            Offerte Aanvragen
          </h1>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              Uw Naam
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-500" : "focus:ring-orange-500"
              }`}
              placeholder="Voer uw naam in"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              E-mailadres
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500" : "focus:ring-orange-500"
              }`}
              placeholder="Voer uw e-mailadres in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="telephonenr"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              Telefoonnummer
            </label>
            <input
              type="text"
              id="telephonenr"
              name="telephonenr"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 $
                errors.telephonenr ? "border-red-500" : "focus:ring-orange-500"
              }`}
              placeholder="Voer uw telefoonnummer in"
              value={telephonenr}
              onChange={(e) => setTelephonenr(e.target.value)}
            />
            {errors.telephonenr && (
              <p className="text-red-500 text-xs mt-1">{errors.telephonenr}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="postcode"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              Postcode
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.postcode ? "border-red-500" : "focus:ring-orange-500"
              }`}
              placeholder="Voer uw postcode in"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />
            {errors.postcode && (
              <p className="text-red-500 text-xs mt-1">{errors.postcode}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              Bericht
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.message ? "border-red-500" : "focus:ring-orange-500"
              }`}
              placeholder="Vertel ons over uw project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={Object.keys(errors).length > 0 || !name || !email || !telephonenr || !postcode || !message}
          >
            Verzenden
          </button>
        </form>
        <div className="hidden md:block w-full max-w-md md:max-w-lg">
          <img
            src={Foto}
            alt="Project"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Offerte;