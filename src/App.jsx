import React, { useState, useEffect } from "react";
import MedalForm from "./MedalForm";
import MedalTable from "./MedalTable";
import "./index.css";

function App() {
  const [medalTable, setMedalTable] = useState([]);
  const [formData, setFormData] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });
  const [sortBy, setSortBy] = useState("gold");

  // 페이지가 로드될 때 로컬 스토리지에서 데이터 불러오기
  useEffect(() => {
    const savedData = localStorage.getItem("medalTable");
    if (savedData) {
      setMedalTable(JSON.parse(savedData));
    }
  }, []);

  // medalTable 변경 시 로컬 스토리지에 저장
  useEffect(() => {
    if (medalTable.length > 0) {
      localStorage.setItem("medalTable", JSON.stringify(medalTable));
    }
  }, [medalTable]);

  // 입력 값 핸들링
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "country" ? value : Math.max(0, Number(value)),
    }));
  };

  // 폼 제출
  const handleSubmit = (e) => {
    e.preventDefault();

    const existingIndex = medalTable.findIndex(
      (medal) => medal.country === formData.country
    );

    if (existingIndex !== -1) {
      alert("이미 등록된 국가입니다.");
      return;
    }

    if (formData.country.trim() === "") {
      alert("국가명을 입력해주세요.");
      return;
    }

    // 새로운 국가 추가
    setMedalTable((prevTable) => [...prevTable, { ...formData }]);

    // 폼 초기화
    setFormData({ country: "", gold: 0, silver: 0, bronze: 0 });
  };

  // 데이터 삭제
  const handleDelete = (country) => {
    setMedalTable((prevTable) =>
      prevTable.filter((medal) => medal.country !== country)
    );
  };

  // 국가 수정
  const handleUpdate = (e) => {
    e.preventDefault();
    const existingIndex = medalTable.findIndex(
      (medal) => medal.country === formData.country
    );

    if (existingIndex === -1) {
      alert("존재하지 않는 국가입니다.");
      return;
    }

    const updatedTable = [...medalTable];
    updatedTable[existingIndex] = { ...formData };
    setMedalTable(updatedTable);

    setFormData({ country: "", gold: 0, silver: 0, bronze: 0 });
  };

  // 총 메달 수로 정렬
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // 메달 수 계산 함수
  const calculateTotalMedals = (medal) => medal.gold + medal.silver + medal.bronze;

  // 정렬된 메달 리스트
  const sortedMedals = [...medalTable].sort((a, b) => {
    if (sortBy === "gold") {
      return b.gold - a.gold;
    }
    const totalA = calculateTotalMedals(a);
    const totalB = calculateTotalMedals(b);
    return totalB - totalA;
  });

  return (
    <div className="app-container">
      <h1 className="app-header">2024 파리 올림픽</h1>

      {/* 정렬 기준 선택 */}
      <div className="sort-options">
        <label>정렬 기준:</label>
        <select onChange={handleSortChange} value={sortBy}>
          <option value="gold">금메달</option>
          <option value="total">총 메달</option>
        </select>
      </div>

      <MedalForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onUpdate={handleUpdate}
      />

      <MedalTable medals={sortedMedals} onDelete={handleDelete} />
    </div>
  );
}

export default App;