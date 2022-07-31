import React from "react";

const AdditionalRequest = () => {
  return (
    <div className="additional_req">
      <header>
        <h4 className="text-color"> Request Additional Info </h4>
        <br />
        <p>Application Id: 1452-1870-1711-1234</p>
        <p> Client Name: XYZ Corp. Pvt Ltd </p>
        <p> Primary Contact: Peter Scarborough </p>
        <p>Loan Type: On Capital</p>
        <p>Amount Requested: $150000</p>
      </header>
      <br />
      <p>Additional Info Sought </p>
      <textarea type="text" className="additional_req__inbox" />
      <div className="text-right req-btn  mt-2">
        <button className="btn btn-dark">Request </button>
      </div>
    </div>
  );
};

export default AdditionalRequest;
