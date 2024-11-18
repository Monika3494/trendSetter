import React from 'react';
import './Blogs.css';
import Header from "./HeaderL";

const blogData = [
  {
    title: "The Ultimate Guide to Color Matching",
    image: "1 Hourglass Figure .jpeg", // Replace with actual blog image
    link: "https://styledna.ai/hourglass-body-type",
  },
  {
    title: "5 Tips for Building a Minimalist Wardrobe",
    image: "triangle.jpeg", // Replace with actual blog image
    link: "https://styledna.ai/triangle-body-shape",
  },
  {
    title: "How to Choose the Right Outfit for Every Occasion",
    image: "https://via.placeholder.com/300x200", // Replace with actual blog image
    link: "https://example.com/right-outfit-tips",
  },
  {
    title: "Trending Fashion Styles of 2024",
    image: "https://via.placeholder.com/300x200", // Replace with actual blog image
    link: "https://example.com/fashion-trends-2024",
  },
];

function Blogs() {
  return (
<>
    <Header/>
    <div id="blogs" className="blogs-section">
      <h1 className="blogs-title">Our Latest Blogs</h1>
      <div className="blogs-container">
        {blogData.map((blog, index) => (
          <a key={index} href={blog.link} target="_blank" rel="noopener noreferrer" className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h2 className="blog-title">{blog.title}</h2>
          </a>
        ))}
      </div>
    </div>
    </>
    
  );
}

export default Blogs;
