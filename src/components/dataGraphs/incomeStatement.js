import React from "react";

const IncomeStatement = (props) => {
  return (
    <table className="table" cellSpacing="5" id="outerTable">
      <thead className="thead-dark">
        <tr>
          <th>Income Statement</th>
          <th>Unit</th>
          <th>2017</th>
          <th>2018</th>
          <th>2019</th>
        </tr>
      </thead>
      {props.incomeData.map((incomeData, b) => {
        return (
          <tbody key={b} className="text-left mt-4">
            <tr className="font-bold">
              <td>{incomeData.head.name}</td>
              <td>{incomeData.head.Unit}</td>
              <td>{incomeData.head.firstYear}</td>
              <td>{incomeData.head.secondYear}</td>
              <td>{incomeData.head.thirdYear}</td>
            </tr>

            {incomeData.child.map((childData, childindx) => {
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
          </tbody>
        );
      })}
    </table>
  );
};

export default IncomeStatement;
