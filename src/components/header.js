import React from "react";
import logo from "../assets/logo.png";
import bell from "../assets/bell.png";

const header = (props) => {
  return (
    <div className="row header">
      <div className="col-sm-4">
        <img src={logo} alt="logo" width="100" height="50" />
      </div>

      <div className="col-sm-8 text-right align-middle">
        <span>
          <img src={bell} alt="logo" width="30" height="30" />
        </span>
        &nbsp;&nbsp;
        <span>
          <button className="btn  border btn-round mt-2"> Log Out </button>
        </span>
      </div>
    </div>
  );
};

export default header;
