import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isCheckboxChecked) {
      setErrorMessage("You must agree to the GDPR terms before submitting.");
      setSuccessMessage(""); // Ensure success message is cleared
      return;
    }

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xwkdrzeb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSuccessMessage("Mesaj trimis cu succes!");
        setErrorMessage(""); // Ensure error message is cleared
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      setErrorMessage("There was a problem submitting your form.");
    }
  };
  return (
    <section className="text-gray-600 body-font fixed top-0 right-0 bottom-0 left-0">
      <div className="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d939.2022960624588!2d27.58741765874336!3d47.166285048445964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb48f409c105%3A0x338d81ca4be0c8f9!2zVVNSIElhxZ9p!5e1!3m2!1sro!2sro!4v1695575176613!5m2!1sro!2sro"
          style={{}}
        ></iframe>
      </div>
      <div className="container px-5  md:py-24 mt-2 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg h-screen p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Ia legatura cu noi
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Dacă ai întrebări legate de activitatea USR Iasi, ne poti suna la <a href="tel:0743453228" className="text-blue-500 font-bold hover:underline">0743453228</a> sau completand
            formularul de mai jos:
          </p>

          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Nume
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />

              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Numar de telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />

              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>

            <div className="mt-3 flex items-center">
              <input
                type="checkbox"
                id="gdpr"
                name="gdpr"
                className="form-checkbox text-indigo-600 h-5 w-5"
                onChange={(e) => setIsCheckboxChecked(e.target.checked)}
              />
              <label htmlFor="gdpr" className="ml-2 text-xs text-gray-500">
                Sunt de acord ca USR sa proceseze datele personale conform <Link to="/GDPR" 
        className="underline hover:text-blue-600"
    >
        GDPR
    </Link>.
              </label>
            </div>

            <button
              type="submit"
              className="text-white bg-[#002A59] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-5"
            >
              Trimite
            </button>
            

            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 mt-2">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
