import React from "react";

function MedalTable({ medals, onDelete }) {
  return (
    <table className="medal-table">
      <thead>
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>총 메달</th>
          <th>액션</th>
        </tr>
      </thead>
      <tbody>
        {medals.map((medal, index) => (
          <tr key={index}>
            <td>{medal.country}</td>
            <td>{medal.gold}</td>
            <td>{medal.silver}</td>
            <td>{medal.bronze}</td>
            <td>{medal.gold + medal.silver + medal.bronze}</td>
            <td>
              <button className="delete-button" onClick={() => onDelete(medal.country)}>
                삭제
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MedalTable;