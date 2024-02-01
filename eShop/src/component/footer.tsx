import React, { useState } from 'react';
type LogoName = 'facebook' | 'X' | 'Linkedin' | 'Pinterest';

const footer: React.FC = () => {
    const [hoveredLogo, setHoveredLogo] = useState<LogoName | null>(null);

    const handleMouseEnter = (logoName: LogoName) => {
        setHoveredLogo(logoName);
    };

    const handleMouseLeave = () => {
        setHoveredLogo(null);
    };

    const getLogoSource = (logoName: LogoName) => {
        switch (logoName) {
        case 'facebook':
            return hoveredLogo === 'facebook' ? './fbGreen.png' : './fb.png';
        case 'X':
            return hoveredLogo === 'X' ? './xGreen.png' : './x.png';
        case 'Linkedin':
            return hoveredLogo === 'Linkedin' ? './lkdnGreen.png' : './lkdn.png';
        case 'Pinterest':
            return hoveredLogo === 'Pinterest' ? './pinterestGreen.png' : './pinterest.png';
        default:
            return '';
        }
    };
  return (
    <>
        <footer className="w-screen flex flex-col py-5">
            <div className="flex flex-row justify-around">
                <div className="text-bestWhite px-3 w-1/4">
                    <div className="flex flex-col pb-3">
                        <h1 className="text-2xl text-bestGreen underline">Business Time</h1>
                    </div>
                    <p>Monday - Friday: 08.00am to 05.00pm</p>
                    <p>Saturday: 10.00am to 08.00pm</p>
                    <p>Sunday: Closed</p>
                </div>
                <div className="text-bestWhite px-3 w-1/4">
                    <div className="flex flex-col pb-3">
                        <h1 className="text-2xl text-bestGreen underline">NewsLetter</h1>
                    </div>
                    <div className="flex flex-col">
                        <input className="rounded-md text-bestBlack border-none bg-bestWhite px-5" placeholder="Email Adress" type="text" />
                        <div className='flex justify-end'>
                            <button className="bg-bestGreen text-bestBlack rounded-md px-2 my-2">Submit</button>
                        </div>
                    </div>
                    
                </div>
                <div className="text-bestWhite px-3 w-1/4">
                    <div className="flex flex-col pb-3">
                        <h1 className="text-2xl text-bestGreen underline">Social Media</h1>
                    </div>
                    <div className="flex flex-row items-center">
                        <a href="" onMouseEnter={() => handleMouseEnter('facebook')} onMouseLeave={handleMouseLeave}>
                            <img className="w-12 h-12" src={getLogoSource('facebook')} alt="facebook" />
                        </a>
                        <a href="" onMouseEnter={() => handleMouseEnter('X')} onMouseLeave={handleMouseLeave}>
                            <img className="w-12 h-12" src={getLogoSource('X')} alt="X" />
                        </a>
                        <a href="" onMouseEnter={() => handleMouseEnter('Linkedin')} onMouseLeave={handleMouseLeave}>
                            <img className="w-11 h-11" src={getLogoSource('Linkedin')} alt="Linkedin" />
                        </a>
                        <a href="" onMouseEnter={() => handleMouseEnter('Pinterest')} onMouseLeave={handleMouseLeave}>
                            <img className="w-10 h-10 mx-1" src={getLogoSource('Pinterest')} alt="Pinterest" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="m-5 p-5">
                <hr />
            </div>
            <div className="flex flex-row justify-around">
                <div className="text-bestWhite px-3 w-1/4">
                    <div className="flex flex-col pb-3">
                        <h1 className="text-2xl text-bestGreen underline">About Fresh Shop</h1>
                    </div>
                    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt deleniti aperiam voluptatem repudiandae, fuga ullam! Natus voluptatum in, accusamus dolore dignissimos maiores ipsa, ducimus quam alias ut quae, fuga nisi.</p>
                </div>
                <div className="text-bestWhite px-3 w-1/4">
                    <div className="flex flex-col pb-3">
                        <h1 className="text-2xl text-bestGreen underline">Informations</h1>
                    </div>
                    <div className="flex flex-col">
                        <a className="hover:text-bestGreen hover:pl-2" href="#">link1</a>
                        <a className="hover:text-bestGreen hover:pl-2" href="#">link2</a>
                        <a className="hover:text-bestGreen hover:pl-2" href="#">link3</a>
                    </div>
                </div>
                <div className="text-bestWhite px-3 w-1/4">
                    <div className="flex flex-col pb-3">
                        <h1 className="text-2xl text-bestGreen underline">Contact Us</h1>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row my-1">
                            <img className="w-6 h-6 mx-1" src="./locate.png" alt="location" />
                            <p>Address: Michael I. Days 3756 <br />
                                Preston Street Wichita,<br />
                                KS 67213
                            </p>
                        </div>
                        <div className="flex flex-row my-1">
                            <img className="w-6 h-6 mx-1" src="./phone.png" alt="location" />
                            <p>Phone: +1-888 705 770</p>
                        </div>
                        <div className="flex flex-row my-1">
                            <img className="w-6 h-6 mx-1" src="./mail.png" alt="location" />
                            <p>Email: contactinfo@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="flex flex-row justify-center">
            <img className="w-12" src="./logoTitre.png" alt="logo" />
            <div className="flex items-center mx-3">
                <p className="text-bestGreen">All Rights Reserved. © 2024 Design By :  Thomas Syben</p>
            </div>
        </div>
    </>
  );
};

export default footer;
