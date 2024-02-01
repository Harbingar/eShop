import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <>
      <div className="text-bestWhite w-1/2 items-center">
        <h1 className="text-2xl">Get in touch</h1>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio justo, ultrices ac nisl sed, lobortis porta elit. Fusce in metus ac ex venenatis ultricies at cursus mauris.</p>
        <form action="#" className="flex flex-col my-4">
            <label htmlFor="name" className="flex flex-col text-xl my-2">
            Your Name
            <input id="name" type="text" className="px-1 my-2 w-full border-b-2 border-bestWhite bg-transparent focus:outline-none text-bestWhite"/>
            </label>
            <label htmlFor="email" className="flex flex-col text-xl my-2">
            Your Email
            <input id="email" type="email" className="px-1 my-2 w-full border-b-2 border-bestWhite bg-transparent focus:outline-none text-bestWhite"/>
            </label>
            <label htmlFor="subject" className="flex flex-col text-xl my-2">
            Subject
            <input id="subject" type="text" className="px-1 my-2 w-full border-b-2 border-bestWhite bg-transparent focus:outline-none text-bestWhite"/>
            </label>
            <label htmlFor="message" className="flex flex-col text-xl my-2">
            Your Message
            <textarea id="message" className="rounded-lg px-3 py-1 bg-transparent border-2 border-bestWhite" rows={4}></textarea>
            </label>
            <div className="flex justify-center my-6">
              <button type="submit" className="w-1/4 text-5xl px-5 py-2 bg-bestGreen text-bestBlack hover:border-2 hover:border-bestGreen hover:text-bestWhite hover:bg-transparent rounded-tl-100 rounded-tr-50 rounded-bl-50 rounded-br-100">
              Send
              </button>
            </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
