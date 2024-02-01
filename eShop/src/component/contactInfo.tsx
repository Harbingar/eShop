import React from 'react';

const ContactInfo: React.FC = () => {
  return (
    <div className="relative w-1/4 border-2 text-bestWhite border-bestWhite rounded-sm">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-100" style={{backgroundImage: "url('./contact-bg.jpg')"}}></div>
      
      <div className="relative p-4">
        <h1 className="text-5xl text-center py-1">Contact Info</h1>
        <p className="px-1 py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur exercitationem, ea ipsa ad inventore incidunt, molestiae, excepturi reprehenderit ullam iusto quasi deleniti nobis quos asperiores numquam rem mollitia esse fugiat.</p>
        <div className="flex flex-row items-start py-2">
            <img className="w-1/6" src="./locate.png" alt="locate" />
            <p>
                Address: Michael I. Days 9000 <br />
                Preston Street Wichita,<br />
                KS 87213
            </p>
        </div>
        <div className="flex flex-row items-center py-3">
            <img className="w-1/6" src="./mail.png" alt="mail" />
            <p>Email: contact@info.com</p>
        </div>
        <div className="flex flex-row items-center py-3">
            <img className="w-1/6" src="./phone.png" alt="phone" />
            <p>Phone: 0412 34 56 78</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
