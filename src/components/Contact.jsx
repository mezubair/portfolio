import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_SERVICE_ID);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#000000] flex justify-center items-center p-4"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
       
          <p className="text-gray-300 py-4 ">
           Submit the form below or shoot me an email -
            zbrjaveed@gmail.com<MdEmail />
          </p>
        </div>
        <input
          className="bg-[#fffff] p-2"
          type="text"
          placeholder="Name"
          name="name"
          
        />
        <input
          className="my-4 p-2 bg-[#fffff]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#fffff] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
