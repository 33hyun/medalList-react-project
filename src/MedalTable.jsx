import React from 'react';

function MedalTable({ medals }) {
  return (
    <div className="medal-table">
      <h2>메달 테이블</h2>
      <table>
        <thead>
          <tr>
            <th>나라 이름</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
          </tr>
        </thead>
        <tbody>
          {medals.map((medal, index) => (
            <tr key={index}>
              <td>{medal.country}</td>
              <td>{medal.gold}</td>
              <td>{medal.silver}</td>
              <td>{medal.bronze}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedalTable;