import React from "react";

const BalanceSheet = (props) => {
  return (
    <table className="table" cellSpacing="5" id="outerTable">
      <thead className="thead-dark">
        <tr>
          <th>Balance Sheet</th>
          <th>Unit</th>
          <th>2017</th>
          <th>2018</th>
          <th>2019</th>
        </tr>
      </thead>
      {props.balanceData.map((balanceData, b) => {
        return (
          <tbody key={b} className="text-left mt-4">
            {balanceData.child.map((childData, childindx) => {
              return (
                <tr key={"childindx" + childindx}>
                  <td>{childData.name} </td>
                  <td>{childData.Unit}</td>
                  <td>{childData.firstYear}</td>
                  <td>{childData.secondYear}</td>
                  <td>{childData.thirdYear}</td>
                </tr>
              );
            })}
            <tr className="font-bold">
              <td>
                {balanceData.total !== undefined
                  ? balanceData.total.name
                  : null}
              </td>
              <td>
                {balanceData.total !== undefined
                  ? balanceData.total.Unit
                  : null}
              </td>
              <td>
                {balanceData.total !== undefined
                  ? balanceData.total.firstYear
                  : null}
              </td>
              <td>
                {balanceData.total !== undefined
                  ? balanceData.total.secondYear
                  : null}
              </td>
              <td>
                {balanceData.total !== undefined
                  ? balanceData.total.thirdYear
                  : null}
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default BalanceSheet;
