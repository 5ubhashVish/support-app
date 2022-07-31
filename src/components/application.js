import React, { useState } from "react";
import PendingReq from "./pendingReq";
import editIcon from "../assets/pen.png";
/* 
const data = [
  {
    appId: "1452-1870-1711-1234",
    client: "XYZ Corp. Pvt Ltd",
    contact: "Peter scarborough",
    amount: "$150000",
    risk: "Medium",
    status: "Pending",
  },
  {
    appId: "1566-1987-1742-1055",
    contact: "Scott Wagner",
    client: "ABC Corp. Ltd",
    amount: "$70000",
    risk: "Low",
    status: "Approved",
  },
]; */

const Application = (props) => {
  const [currentStatus, setcurrentStatus] = useState(false);
  const [pendingReq, setpendingReq] = useState(false);
  const [currentApplication, setCurrentApplication] = useState({});
  const [chartType, setchartType] = useState("candlestick");

  const setPendingData = (currentData) => {
    setCurrentApplication(currentData);
    setpendingReq(!pendingReq);
  };

  const handleChart = (data) => {
    console.log(data);
    setchartType(data);
  };

  return (
    <React.Fragment>
      {!pendingReq ? (
        <div className="application">
          <div className="row">
            <div className="col-sm-3">
              <h3 className="text-color">Application</h3>
            </div>
            <div className="col-sm-9 text-right">
              <span>All</span>&nbsp;&nbsp;
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setcurrentStatus(e.target.checked);
                  }}
                />
                <span className="slider round"></span>
              </label>
              <span>Pending</span>
            </div>
          </div>
          <hr />
          <div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Application Id</th>
                  <th>Client Name</th>
                  <th>Amount </th>
                  <th>Risk </th>
                  <th>Status </th>
                  <th>Actions </th>
                </tr>
              </thead>
              <tbody>
                {!currentStatus
                  ? props.appDatas.map((appData, indx) => {
                      return (
                        <tr key={indx}>
                          <td>{appData.appId}</td>
                          <td>{appData.client}</td>
                          <td>{appData.amount}</td>
                          <td>{appData.risk}</td>
                          <td>{appData.status}</td>
                          <td
                            onClick={() => {
                              setPendingData(appData);
                            }}
                          >
                            <img
                              className="cursor-pointer"
                              src={editIcon}
                              alt="edit"
                              width="15"
                              height="15"
                            />
                          </td>
                        </tr>
                      );
                    })
                  : props.appDatas
                      .filter((a) => {
                        return a.status === "Pending";
                      })
                      .map((appData, indx) => {
                        return (
                          <tr key={indx}>
                            <td>{appData.appId}</td>
                            <td>{appData.client}</td>
                            <td>{appData.amount}</td>
                            <td>{appData.risk}</td>
                            <td>{appData.status}</td>
                            <td
                              onClick={() => {
                                setPendingData(appData);
                              }}
                            >
                              <img
                                className="cursor-pointer"
                                src={editIcon}
                                alt="edit"
                                width="15"
                                height="15"
                              />
                            </td>
                          </tr>
                        );
                      })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <PendingReq
          dispData={currentApplication}
          {...props}
          chartType={chartType}
          setchartType={(data) => handleChart(data)}
        />
      )}
    </React.Fragment>
  );
};

export default Application;
