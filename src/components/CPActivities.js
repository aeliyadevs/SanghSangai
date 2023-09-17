import "../css/CPActivities.css";
import cp1 from "../img/cp1.jpg";
import cp2 from "../img/cp2.jpg";
import cp3 from "../img/cp3.jpg";
import cp4 from "../img/cp4.jpg";

const CPActivities = () => {
  return (
    <div className="cp-activities container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="cpa-item">
              <img src={cp1} />
              <div className="item-title">
                <h3>
                  Child <br />
                  Advocacy
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="cpa-item">
              <img src={cp2} />
              <div className="item-title">
                <h3>
                  Disaster <br />
                  Management
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="cpa-item">
              <img src={cp3} />
              <div className="item-title">
                <h3>
                  Community <br />
                  Development
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="cpa-item">
              <img src={cp4} />
              <div className="item-title">
                <h3>
                  Conduct <br />
                  Trainings
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPActivities;
