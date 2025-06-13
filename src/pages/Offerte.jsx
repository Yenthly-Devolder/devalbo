import Muur from "../assets/wit.jpg";
import Foto from "../assets/gallerij/4.5.jpg";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Offerte = () => {
  const { t } = useTranslation();
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

    if (!name.trim()) {
      newErrors.name = t('offerte.name_error');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = t('offerte.email_error');
    } else if (!emailRegex.test(email)) {
      newErrors.email = t('offerte.email_error');
    }

    const phoneRegex = /^\+?\d[\d\s-]{8,}$/;
    if (!telephonenr.trim()) {
      newErrors.telephonenr = t('offerte.phone_error');
    } else if (!phoneRegex.test(telephonenr)) {
      newErrors.telephonenr = t('offerte.phone_error');
    }

    const postcodeRegex = /^\d{4}$/;
    if (!postcode.trim()) {
      newErrors.postcode = t('offerte.postcode_error');
    } else if (!postcodeRegex.test(postcode)) {
      newErrors.postcode = t('offerte.postcode_error');
    }

    if (!message.trim()) {
      newErrors.message = t('offerte.message_error');
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
        alert(t('offerte.success_message'));
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert(t('offerte.error_message'));
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
            {t('offerte.title')}
          </h1>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              {t('offerte.name_label')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-500" : "focus:ring-orange-500"
              }`}
              placeholder={t('offerte.name_placeholder')}
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
              {t('offerte.email_label')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500" : "focus:ring-orange-500"
              }`}
              placeholder={t('offerte.email_placeholder')}
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
              {t('offerte.phone_label')}
            </label>
            <input
              type="text"
              id="telephonenr"
              name="telephonenr"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.telephonenr ? "border-red-500" : "focus:ring-orange-500"
              }`}
              placeholder={t('offerte.phone_placeholder')}
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
              {t('offerte.postcode_label')}
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.postcode ? "border-red-500" : "focus:ring-orange-500"
              }`}
              placeholder={t('offerte.postcode_placeholder')}
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
              {t('offerte.message_label')}
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.message ? "border-red-500" : "focus:ring-orange-500"
              }`}
              placeholder={t('offerte.message_placeholder')}
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
            {t('offerte.submit_button')}
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