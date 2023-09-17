import "../css/ProjectDesc.css";
import shapeGrid from "../img/shape-grid.png";

const ProjectDesc = () => {
  return (
    <div id="project" className="project-desc-wrap">
      <div className="project-desc">
        <div className="shape"></div>
        <h2 className="heading">Project Description</h2>
        {/* <p>
          “Sangah Sangai” is a four-month long development with a vision to see
          communities living life in all its fullness, free from poverty,
          injustice, and conflict. Our community partner is Micah Nepal which is
          a national chapter of Micah Global.
        </p> */}
        <p>
          The issue of unstructured data of Micah Nepal has been managed
          properly to visualize community transformation scores as it was
          maintained manually. This has been solved by previous team ‘AKAS’ by
          digitalizing it. This year we will be directly interacting with the
          community partner “Micah Nepal” for collecting and maintaining data of
          beneficiaries in communities with a hope to deliver the best possible
          solution.
        </p>
        <p>
          This would serve as a solution for both administrators and partners
          possess the authority to access and actively maintain the information.
          This implies that not only the administrators but also the partners
          could view, edit, and manage the information as needed, ensuring a
          collaborative approach to information management and accessibility
          within the organization or system.
        </p>
        <img src={shapeGrid} alt="shape" />
      </div>
    </div>
  );
};

export default ProjectDesc;
