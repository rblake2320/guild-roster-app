import { useState, useEffect } from 'react';
import Board from './components/Board';
import Roster from './components/Roster';
import Stats from './components/Stats';
import WarCompare from './components/WarCompare';
import { generateInitialRoster } from './data/initialData';
import './App.css';

const STORAGE_KEY = 'guild-roster-data';

function App() {
  const [activeTab, setActiveTab] = useState('board');
  const [roster, setRoster] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return generateInitialRoster();
      }
    }
    return generateInitialRoster();
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(roster));
  }, [roster]);

  const handleUpdateMember = (id, updatedMember) => {
    setRoster(prev => prev.map(m => m.id === id ? updatedMember : m));
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(roster, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `guild-roster-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target.result);
          if (Array.isArray(imported) && imported.length === 100) {
            setRoster(imported);
            alert('Roster imported successfully!');
          } else {
            alert('Invalid roster file format');
          }
        } catch {
          alert('Error reading file');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleReset = () => {
    if (confirm('Reset all data to default? This cannot be undone.')) {
      setRoster(generateInitialRoster());
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>⚔️ Guild Roster Manager</h1>
        <nav className="app-nav">
          <button className={activeTab === 'board' ? 'active' : ''} onClick={() => setActiveTab('board')}>
            📋 Board
          </button>
          <button className={activeTab === 'roster' ? 'active' : ''} onClick={() => setActiveTab('roster')}>
            📝 Roster
          </button>
          <button className={activeTab === 'stats' ? 'active' : ''} onClick={() => setActiveTab('stats')}>
            📊 Stats
          </button>
          <button className={activeTab === 'war' ? 'active' : ''} onClick={() => setActiveTab('war')}>
            ⚔️ War
          </button>
        </nav>
        <div className="app-actions">
          <button onClick={handleExport}>💾 Export</button>
          <label className="import-btn">
            📂 Import
            <input type="file" accept=".json" onChange={handleImport} hidden />
          </label>
          <button onClick={handleReset} className="reset-btn">🔄</button>
        </div>
      </header>

      <main className="app-main">
        {activeTab === 'board' && <Board roster={roster} onUpdateMember={handleUpdateMember} />}
        {activeTab === 'roster' && <Roster roster={roster} onUpdateMember={handleUpdateMember} />}
        {activeTab === 'stats' && <Stats roster={roster} />}
        {activeTab === 'war' && <WarCompare roster={roster} />}
      </main>

      <footer className="app-footer">
        <p>Guild Roster Manager • Data saved automatically</p>
      </footer>
    </div>
  );
}

export default App;
