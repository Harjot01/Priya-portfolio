import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { client } from "./clients";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
      
  };

  return (
    <section className="bg-primary/[.03] py-16 md:py-32" id="contact">
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="text-center text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Contact Me
        </h2>
        <h4 className="pt-6 text-center text-xl font-medium sm:text-2xl lg:text-3xl mb-16 lg:mb-24">
          Would love to hear from you!
        </h4>
        {!isFormSubmitted ? (
          <div className="space-y-8">
            <Fade top distance="20%" duration={1500}>
              <div>
                <input
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  type="text"
                  placeholder="Your Name"
                  name="username"
                  value={username}
                  onChange={handleChangeInput}
                />
              </div>
            </Fade>

            <Fade top distance="20%" duration={1500} delay={300}>
              <div>
                <input
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                />
              </div>
            </Fade>
            <Fade top distance="20%" duration={1500} delay={600}>
              <div className="sm:col-span-2">
                <textarea
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your Message"
                  value={message}
                  name="message"
                  onChange={handleChangeInput}
                />
              </div>
            </Fade>
            <Fade top distance="20%" duration={1500} delay={900}>
              <button
                type="button"
                className="py-3 px-5 text-sm font-medium text-center text-white  bg-primary transition duration-300 hover:bg-opacity-90 hover:shadow-Button rounded-md sm:w-fit"
                onClick={handleSubmit}
              >
                {!loading ? "Send Message" : "Sending..."}
              </button>
            </Fade>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
