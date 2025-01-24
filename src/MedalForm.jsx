import React from "react";

function MedalForm({ formData, onChange, onSubmit, onUpdate }) {
  return (
    <form className="medal-form">
      <div className="input-group">
        <label>국가명:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={onChange}
          required
        />
      </div>
      <div className="input-group">
        <label>금메달:</label>
        <input
          type="number"
          name="gold"
          value={formData.gold}
          onChange={onChange}
          min="0"
          required
        />
      </div>
      <div className="input-group">
        <label>은메달:</label>
        <input
          type="number"
          name="silver"
          value={formData.silver}
          onChange={onChange}
          min="0"
          required
        />
      </div>
      <div className="input-group">
        <label>동메달:</label>
        <input
          type="number"
          name="bronze"
          value={formData.bronze}
          onChange={onChange}
          min="0"
          required
        />
      </div>
      <div className="action-buttons">
        <button type="submit" className="submit-button" onClick={onSubmit}>
          국가 추가
        </button>
        <button type="submit" className="submit-button" onClick={onUpdate}>
          업데이트
        </button>
      </div>
    </form>
  );
}

export default MedalForm;