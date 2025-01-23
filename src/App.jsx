import React, { useState } from 'react';
import MedalForm from './MedalForm';
import MedalTable from './MedalTable';

function App() {
  const [medalTable, setMedalTable] = useState([]);

  const addMedal = (medalData) => {
    setMedalTable((prevTable) => [...prevTable, medalData]);
  };

  return (
    <div className="app-container">
      <header className="app-header">2024 파리 올림픽</header>
      <main className="app-main">
        <MedalForm onAddMedal={addMedal} />
        <MedalTable medals={medalTable} />
      </main>
    </div>
  );
}

export default App;