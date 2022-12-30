import React from "react";
import "./css/BlogCard.css"

const BlogCard = ({ title, description, imgUrl }) => {
    return (
        <div className="img-card-container">
            <div className="img-wrapper">
                <img className="card-image" src={imgUrl} alt="blog" />
            </div>
            <div className="img-card-overlay">
                <div className="img-card-overlay-text">
                    <h3>{title}</h3>
                    <p>{description.substring(0, 30)}...</p>
                    <button className="secondary">
                        <span>Read More</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
