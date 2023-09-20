import { useState } from "react";

const BlogCard = (props) => {
  return (
    <div className="col-md-4">
      <div className="blog-item">
        <div className="blog-img">
          <img src={props.blog.image} />
        </div>
        {console.log(props.blog.image)}
        <div className="blog-info">
          <span>
            {props.blog.category} | {props.blog.publishedDate}
          </span>
          <h3>{props.blog.title}</h3>
          <p>{props.blog.content.substring(0, 120) + " ..."}</p>
          <div className="read-more">
            <a href="">
              Read More <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
