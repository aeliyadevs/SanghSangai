import cp1 from "../../img/cp1.jpg";
import cp2 from "../../img/cp2.jpg";
import cp3 from "../../img/cp3.jpg";
import cp4 from "../../img/cp4.jpg";
import "../../css/Blogs/Blogs.css";

const Blogs = () => {
  return (
    <div className="container blogs">
      <div className="featured">
        <div className="row">
          <div className="col-md-12 title">
            <h2>Featured Blog</h2>
          </div>
          <div className="col-md-5">
            <img src={cp2} />
          </div>
          <div className="col-md-7 featured-info">
            <span>Team Reflection | 15th September 2023</span>
            <h3>Team reflection for the first sprint</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div className="read-more">
              <a href="">
                Read More <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-list">
        <div className="row">
          <div className="col-md-12 title">
            <h2 className="text-center">Our Reflections</h2>
          </div>
          <div className="col-md-4">
            <div className="blog-item">
              <div className="blog-img">
                <img src={cp1} />
              </div>
              <div className="blog-info">
                <span>Team Reflection | 15th September 2023</span>
                <h3>Team reflection for the first sprint</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="read-more">
                  <a href="">
                    Read More <i class="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog-item">
              <div className="blog-img">
                <img src={cp1} />
              </div>
              <div className="blog-info">
                <span>Team Reflection | 15th September 2023</span>
                <h3>Team reflection for the first sprint</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="read-more">
                  <a href="">
                    Read More <i class="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog-item">
              <div className="blog-img">
                <img src={cp1} />
              </div>
              <div className="blog-info">
                <span>Team Reflection | 15th September 2023</span>
                <h3>Team reflection for the first sprint</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="read-more">
                  <a href="">
                    Read More <i class="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
