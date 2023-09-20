import "../../css/Blogs/Blogs.css";
import Default from "../../layouts/Default";
import BlogCard from "../../components/Blogs/BlogCard";

const Blogs = () => {
  const blogs = [
    {
      title: "Team reflection for the first sprint",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      image: "images/cp1.jpg",
      category: "Team Reflection",
      publishedDate: "15th September 2023",
    },
    {
      title: "Team reflection for the second sprint",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      image: "images/cp2.jpg",
      category: "Team Reflection",
      publishedDate: "15th September 2023",
    },
    {
      title: "Team reflection for the third sprint",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      image: "images/cp3.jpg",
      category: "Team Reflection",
      publishedDate: "15th September 2023",
    },
  ];
  return (
    <Default>
      <div className="container blogs">
        <div className="featured">
          <div className="row">
            <div className="col-md-12 section-title">
              <h2 className="text-center">Featured Reflection</h2>
            </div>
            <div className="col-md-5">
              <img src="images/cp1.jpg" />
            </div>
            <div className="col-md-7 featured-info">
              <span>Team Reflection | 15th September 2023</span>
              <h3>Team reflection for the first sprint</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <div className="read-more">
                <a href="">
                  Read More <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-list">
          <div className="row">
            <div className="col-md-12 section-title">
              <h2 className="text-center">Our Reflections</h2>
            </div>
            <BlogCard blog={blogs[0]} />

            <BlogCard blog={blogs[1]} />

            <BlogCard blog={blogs[2]} />
          </div>
        </div>
      </div>
    </Default>
  );
};
export default Blogs;
