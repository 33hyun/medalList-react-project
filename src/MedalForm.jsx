import React, { useState } from 'react';

function MedalForm({ onAddMedal }) {
  const [formData, setFormData] = useState({
    country: '',
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'country' ? value : Math.max(0, Number(value)), // 숫자는 0 이상만 허용
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMedal(formData);
    setFormData({ country: '', gold: 0, silver: 0, bronze: 0 }); // 폼 초기화
  };

  return (
    <form onSubmit={handleSubmit} className="medal-form">
      <div>
        <label>
          나라 이름:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          금메달:
          <input
            type="number"
            name="gold"
            value={formData.gold}
            onChange={handleChange}
            min="0"
            required
          />
        </label>
      </div>
      <div>
        <label>
          은메달:
          <input
            type="number"
            name="silver"
            value={formData.silver}
            onChange={handleChange}
            min="0"
            required
          />
        </label>
      </div>
      <div>
        <label>
          동메달:
          <input
            type="number"
            name="bronze"
            value={formData.bronze}
            onChange={handleChange}
            min="0"
            required
          />
        </label>
      </div>
      <button type="submit">제출</button>
    </form>
  );
}

export default MedalForm;