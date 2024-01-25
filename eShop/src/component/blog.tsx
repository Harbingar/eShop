import React from 'react';
import {BlogProps} from "../interface/blogInterface";

const blog: React.FC<BlogProps> = ({ imgSrc, Name, description}) => {
  return (
    <>
        <div className="w-1/4 border-2 border-bestGreen flex flex-col items-center">
            <img src={imgSrc} alt="blogImg" />
            <div className="flex flex-col p-3">
                <div className="text-bestWhite text-4xl">
                    <h1>{Name}</h1>
                </div>
                <div className="text-bestWhite text-sm">
                    <p>{description}</p>
                </div>
            </div>
            <div className="w-full text-bestGreen text-2xl flex justify-between px-3 pb-1">
                    <a className="hover:text-bestWhite" href="#">Like</a>
                    <a className="hover:text-bestWhite" href="#">Comment</a>
                    <a className="hover:text-bestWhite" href="#">More</a>
            </div>
        </div>
    </>
  );
}

export default blog;