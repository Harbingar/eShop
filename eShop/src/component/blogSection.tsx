import React from 'react';
import Blog from './blog';
import { BlogProps } from "../interface/blogInterface";

const blogData: BlogProps[] = [
    { imgSrc: './blog-img-01.jpg', Name:'Blog 1', description:'Description for Blog 1'},
    { imgSrc: './blog-img-02.jpg', Name:'Blog 2', description:'Description for Blog 2'},
    { imgSrc: './blog-img.jpg', Name:'Blog 3', description:'Description for Blog 3'},
];

const BlogSection: React.FC = () => {
  return (
    <div className="flex flex-col">
        <div>
            <img src="" alt="" />
        </div>
        <div className="flex flex-row">
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
  );
}

export default BlogSection;
