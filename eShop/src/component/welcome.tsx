import Title from "./welcomeTitle";
import Carousel from "./carouselTitle";
const welcome: React.FC = () => {

  return (
    <>
        <div className="w-full h-12">
        </div>
        <div className="flex flex-row my-5">
            <div className="flex flex-row justify-center items-start">
            <Title/>
            <div className="w-1/3 mx-5">
                <Carousel/>
            </div>
            
            </div>
            <div>

            </div>
        </div>
    </>
    
  );
};

export default welcome;
