
const footer: React.FC = () => {
  return (
    <footer className="w-screen flex flex-col">
        <div className="flex flex-row justify-around">
            <div className="text-bestWhite px-3">
                <div className="flex flex-col pb-3">
                    <h1 className="text-2xl text-bestGreen underline">Business Time</h1>
                </div>
                <p>Monday - Friday: 08.00am to 05.00pm</p>
                <p>Saturday: 10.00am to 08.00pm</p>
                <p>Sunday: Closed</p>
            </div>
            <div className="text-bestWhite px-3">
                <div className="flex flex-col pb-3">
                    <h1 className="text-2xl text-bestGreen underline">NewsLetter</h1>
                </div>
                <div className="flex flex-col items-end">
                    <input className="rounded-md text-bestBlack border-none bg-bestWhite" placeholder="Email Adress" type="text" />
                    <button className="bg-bestGreen text-bestBlack rounded-md px-2 my-2">Submit</button>
                </div>
                
            </div>
            <div className="text-bestWhite px-3">
                <div className="flex flex-col pb-3">
                    <h1 className="text-2xl text-bestGreen underline">Social Media</h1>
                </div>
                <div className="flex">

                </div>
            </div>
        </div>
        
    </footer>
  );
};

export default footer;
