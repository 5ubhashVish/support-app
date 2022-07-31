import React, { useState } from "react";
import approve from "../assets/check.png";
import reject from "../assets/close.png";
import request from "../assets/question.png";
import minus from "../assets/minus.png";
import success from "../assets/success.png";
import caution from "../assets/caution.png";
import cancel from "../assets/cancel.png";
import add from "../assets/add.png";
import GaugeMeter from "./dataGraphs/gaugeMeter";
import BalanceSheet from "./dataGraphs/balanceSheet";
import CashFlow from "./dataGraphs/cashFlow";
import IncomeStatement from "./dataGraphs/incomeStatement";
import LineChart from "./dataGraphs/lineChart";
import BarChart from "./dataGraphs/barchart";
import AdditionalRequest from "./AdditionalRequest";
import CandleStick from "./dataGraphs/Candlestick";

const PendingReq = (props) => {
  const [kpiData, setKpidata] = useState(false);
  const [cashflowData, setCashflowData] = useState(true);
  const [capitalData, setcapitalData] = useState(true);
  const [kpiCollapse, setKpiCollapse] = useState(true);
  const [cashflowCollapse, setCashflowCollapse] = useState(true);
  const [capitalCollaps, setCapitalCollaps] = useState(true);
  const [mailData, setMailData] = useState(false);
  const [graphType, setGraphType] = useState(false);
  const [showDocs, setShowDocs] = useState(false);

  const [displayData, setDisplayData] = useState(props.dispData);

  const handleChange = (currentId) => {
    for (let data of props.appDatas) {
      if (data.appId === currentId) {
        setDisplayData(data);
      }
    }
  };

  return (
    <div>
      {!mailData ? (
        <div className="pendingreq">
          <header>
            <div className="row">
              <div className="col-sm-5">
                <h4 className="text-color">
                  {displayData.status === "Pending"
                    ? "Pending Applications"
                    : "Approved Applications"}
                </h4>
              </div>
              <div className="col-sm-7 text-right">
                <select
                  value={displayData.appId}
                  className="border btn-round mt-2"
                  onChange={(e) => {
                    handleChange(e.target.value);
                  }}
                >
                  {props.appDatas.map((data, index) => {
                    return (
                      <option
                        value={data.appId}
                        className="border btn-round"
                        key={index}
                      >
                        {data.appId}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <br />
            <p> Client Name: {displayData.client} </p>
            <p> Primary Contact: {displayData.contact} </p>
            <p>Loan Type: On Capital</p>
            <p>Amount Requested: {displayData.amount}</p>
            <p>Loan Status: {displayData.status} </p>
            <p
              onClick={() => {
                setShowDocs(!showDocs);
              }}
              type="button"
              data-toggle="collapse"
              data-target="#showDocs"
            >
              Submitted Documents: &nbsp;
              {displayData.docs ? (
                <img
                  title="Valid Documents"
                  src={success}
                  alt="Accepted"
                  width="12"
                  height="12"
                />
              ) : (
                <img
                  title="Warnings"
                  src={caution}
                  alt="reject"
                  width="24"
                  height="24"
                />
              )}
            </p>

            <div id="showDocs" className={!showDocs ? "collapse " : " "}>
              <table
                className="table border text-center"
                style={{ width: "60%" }}
              >
                <thead>
                  <tr>
                    <th>File</th>
                    <th>Document Tempering Status </th>
                    <th>Expiry Status </th>
                    <th>Remarks </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tax Document </td>

                    <td>
                      <img
                        src={success}
                        alt="accepted"
                        width="12"
                        height="12"
                      />
                    </td>
                    <td>
                      {displayData.status === "Pending" ? (
                        <img src={cancel} alt="reject" width="12" height="12" />
                      ) : (
                        <img
                          src={success}
                          alt="accepted"
                          width="12"
                          height="12"
                        />
                      )}
                    </td>
                    <td>
                      {displayData.status === "Pending"
                        ? "Data Missing"
                        : "Accepted"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </header>

          <br />
          {displayData.status === "Pending" ? (
            <div>
              <span>
                <img
                  src={approve}
                  className="cursor-pointer"
                  alt="approve"
                  width="30"
                  height="30"
                />
                &nbsp; Approved
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>
                <img
                  src={reject}
                  alt="reject"
                  className="cursor-pointer"
                  width="30"
                  height="30"
                />
                &nbsp; Reject
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span
                onClick={() => setMailData(true)}
                className="cursor-pointer"
              >
                <img src={request} alt="request" width="30" height="30" />
                &nbsp; Request Additional Information
              </span>
            </div>
          ) : null}
          <hr />
          <h4 className="text-color">Overall Risk Score </h4>
          <div className="row mt-3">
            <div className="col-sm-4">
              <GaugeMeter percent={displayData.meterVal / 100} id="mainGauge" />
              <div className="text-center">
                <small> {displayData.meterVal}/100</small>
              </div>
            </div>
          </div>
          <hr />
          <header>
            <h4 className="text-color">KPI's </h4>
            <p>Refreshing Data in Real-time from QuickBooks</p>
            <p
              onClick={() => {
                setKpiCollapse(!kpiCollapse);
              }}
              type="button"
              data-toggle="collapse"
              data-target="#kpi"
            >
              Financial KPI's &nbsp;
              {kpiCollapse ? (
                <img src={add} alt="reject" width="12" height="12" />
              ) : (
                <img src={minus} alt="reject" width="12" height="12" />
              )}
            </p>
          </header>

          <div
            id="kpi"
            className={kpiCollapse ? "collapse data-block" : " data-block"}
          >
            <div className=" graph-btn mb-2">
              <div className="col-sm-1.5">
                <button
                  className={
                    kpiData
                      ? "btn  border btn-round mt-2 active-button"
                      : "btn  border btn-round mt-2"
                  }
                  onClick={() => setKpidata(true)}
                >
                  Graph
                </button>
              </div>
              &nbsp;
              <div className="col-sm-1 ">
                <button
                  className={
                    !kpiData
                      ? "btn  border btn-round mt-2 active-button"
                      : "btn  border btn-round mt-2"
                  }
                  onClick={() => setKpidata(false)}
                >
                  Data
                </button>
              </div>
            </div>
            {kpiData ? (
              <div className="row">
                <div className="col-sm-4 text-center text-color">
                  <div className="dotted-border">
                    <GaugeMeter percent=".70" id="internal-gauge-1" avg=".55" />
                    <p>70/100 </p>
                    <p>Average : 55</p>
                  </div>
                  Liquidity Ratio
                </div>
                <div className="col-sm-4 text-center text-color">
                  <div className="dotted-border">
                    <GaugeMeter percent=".80" id="internal-gauge-2" avg=".6" />
                    <p>80/100</p>
                    <p>Average : 60</p>
                  </div>
                  Debt Service Ratio
                </div>
                <div className="col-sm-4 text-center text-color">
                  <div className="dotted-border">
                    <GaugeMeter percent=".53" id="internal-gauge-3" avg=".34" />
                    <p>53/100</p>
                    <p>Average : 34</p>
                  </div>
                  Debt Coverage Ratio
                </div>
              </div>
            ) : (
              <IncomeStatement incomeData={props.incomeData} />
            )}
          </div>

          <hr />
          <header>
            <p
              onClick={() => {
                setCashflowCollapse(!cashflowCollapse);
              }}
              type="button"
              data-toggle="collapse"
              data-target="#cashflow"
            >
              Cash Flow &nbsp;
              {cashflowCollapse ? (
                <img src={add} alt="reject" width="12" height="12" />
              ) : (
                <img src={minus} alt="reject" width="12" height="12" />
              )}
            </p>
          </header>

          <div
            id="cashflow"
            className={cashflowCollapse ? "collapse data-block" : " data-block"}
          >
            <div className="graph-btn mb-2">
              <div className="col-sm-1.5">
                <button
                  className={
                    cashflowData
                      ? "btn  border btn-round mt-2 active-button"
                      : "btn  border btn-round mt-2"
                  }
                  onClick={() => setCashflowData(true)}
                >
                  Graph
                </button>
              </div>
              &nbsp;
              <div className="col-sm-1 ">
                <button
                  className={
                    !cashflowData
                      ? "btn  border btn-round mt-2 active-button"
                      : "btn  border btn-round mt-2"
                  }
                  onClick={() => setCashflowData(false)}
                >
                  Data
                </button>
              </div>
            </div>
            {cashflowData ? (
              <div className="row">
                {/* <div className="graph-btn mb-2" style={{ fontSize: "small" }}>
                  <div className="col-sm-1.5">
                    <button
                      className={
                        !graphType
                          ? "btn btn-sm  border btn-round mt-2 active-button"
                          : "btn btn-sm  border btn-round mt-2"
                      }
                      onClick={() => setGraphType(false)}
                    >
                      CandleStick Graph
                    </button>
                  </div>
                  <div className="col-sm-2 ">
                    <button
                      className={
                        graphType
                          ? "btn btn-sm border btn-round mt-2 active-button"
                          : "btn btn-sm border btn-round mt-2"
                      }
                      onClick={() => setGraphType(true)}
                    >
                      Line Graph
                    </button>
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-sm-12 text-right">
                    <span>CandleStick Graph</span>&nbsp;&nbsp;
                    <label className="switch">
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          setGraphType(e.target.checked);
                        }}
                      />
                      <span className="slider round"></span>
                    </label>
                    <span>Line Graph</span>
                  </div>
                </div>

                {!cashflowCollapse ? (
                  !graphType ? (
                    <CandleStick chartType="candlestick" />
                  ) : (
                    <LineChart chartType="line" />
                  )
                ) : null}
              </div>
            ) : (
              <CashFlow cashFlowData={props.cashFlowData} />
            )}
          </div>

          <hr />
          <header>
            <p
              onClick={() => {
                setCapitalCollaps(!capitalCollaps);
              }}
              type="button"
              data-toggle="collapse"
              data-target="#capital"
            >
              Working Capital &nbsp;
              {capitalCollaps ? (
                <img src={add} alt="reject" width="12" height="12" />
              ) : (
                <img src={minus} alt="reject" width="12" height="12" />
              )}
            </p>
          </header>

          <div
            id="capital"
            className={capitalCollaps ? "collapse data-block" : " data-block"}
          >
            <div className="graph-btn mb-2">
              <div className="col-sm-1.5">
                <button
                  className={
                    capitalData
                      ? "btn  border btn-round mt-2 active-button"
                      : "btn  border btn-round mt-2"
                  }
                  onClick={() => setcapitalData(true)}
                >
                  Graph
                </button>
              </div>
              &nbsp;
              <div className="col-sm-1 ">
                <button
                  className={
                    !capitalData
                      ? "btn  border btn-round mt-2 active-button"
                      : "btn  border btn-round mt-2"
                  }
                  onClick={() => setcapitalData(false)}
                >
                  Data
                </button>
              </div>
            </div>
            {capitalData ? (
              <div>
                {!capitalCollaps ? (
                  <BarChart chartData={props.barchartData} />
                ) : null}
              </div>
            ) : (
              <BalanceSheet balanceData={props.balanceData} />
            )}
          </div>
        </div>
      ) : (
        <AdditionalRequest />
      )}
    </div>
  );
};
export default PendingReq;
