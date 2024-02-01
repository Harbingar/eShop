import React from 'react';
import Blog from './blog';
import { BlogProps } from "../interface/blogInterface";

const blogData: BlogProps[] = [
    { imgSrc: './blog-img-01.jpg', Name:'Title 1', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'},
    { imgSrc: './blog-img-02.jpg', Name:'Title 2', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'},
    { imgSrc: './blog-img.jpg', Name:'Title 3', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'},
];

const BlogSection: React.FC = () => {
  return (
    <>
        <div className="flex flex-col">
            <div className="flex justify-center">
                <img className="w-1/3"src="./blog.png" alt="blogTitle" />
            </div>
            <div className="flex flex-row justify-evenly">
                {blogData.map((blog, index) => (
                <Blog
                key={index}
                imgSrc={blog.imgSrc}
                Name={blog.Name}
                description={blog.description}
                />
                ))}
            </div>
        </div>
        <div className='h-12 w-full'>

        </div>
    </>
    
  );
}

export default BlogSection;
