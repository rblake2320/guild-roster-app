import { useState } from 'react';
import { generateEmptyRoster } from '../data/initialData';

function WarCompare({ roster }) {
  const [enemy1, setEnemy1] = useState(generateEmptyRoster());
  const [enemy2, setEnemy2] = useState(generateEmptyRoster());
  const [enemy1Name, setEnemy1Name] = useState('Enemy Guild 1');
  const [enemy2Name, setEnemy2Name] = useState('Enemy Guild 2');
  const [showEnemy1Form, setShowEnemy1Form] = useState(false);
  const [showEnemy2Form, setShowEnemy2Form] = useState(false);

  // Calculate your guild stats
  const yourActive = roster.filter(m => m.name && m.status === 'Active');
  const yourTotalCP = yourActive.reduce((sum, m) => sum + m.cp, 0);
  const yourAvgCP = yourActive.length > 0 ? Math.round(yourTotalCP / yourActive.length) : 0;
  const yourTroops = yourActive.reduce((sum, m) => sum + m.troops, 0);

  // Calculate enemy 1 stats
  const enemy1Active = enemy1.filter(m => m.name && m.status === 'Active');
  const enemy1TotalCP = enemy1Active.reduce((sum, m) => sum + m.cp, 0);
  const enemy1AvgCP = enemy1Active.length > 0 ? Math.round(enemy1TotalCP / enemy1Active.length) : 0;
  const enemy1Troops = enemy1Active.reduce((sum, m) => sum + m.troops, 0);

  // Calculate enemy 2 stats
  const enemy2Active = enemy2.filter(m => m.name && m.status === 'Active');
  const enemy2TotalCP = enemy2Active.reduce((sum, m) => sum + m.cp, 0);
  const enemy2AvgCP = enemy2Active.length > 0 ? Math.round(enemy2TotalCP / enemy2Active.length) : 0;
  const enemy2Troops = enemy2Active.reduce((sum, m) => sum + m.troops, 0);

  const getAdvantage = (yours, enemy1Val, enemy2Val) => {
    const maxEnemy = Math.max(enemy1Val, enemy2Val);
    if (maxEnemy === 0) return { text: 'No enemy data', class: 'neutral' };
    const diff = yours - maxEnemy;
    if (diff > 0) return { text: `YOU +${diff.toLocaleString()}`, class: 'advantage' };
    if (diff < 0) return { text: `ENEMY +${Math.abs(diff).toLocaleString()}`, class: 'disadvantage' };
    return { text: 'TIE', class: 'neutral' };
  };

  const getAssessment = (yourCP, enemyCP) => {
    if (enemyCP === 0) return { text: 'No enemy data', class: 'neutral' };
    const ratio = yourCP / enemyCP;
    if (ratio >= 1.1) return { text: 'STRONG ADVANTAGE - Likely WIN', class: 'strong-advantage' };
    if (ratio >= 1.0) return { text: 'SLIGHT ADVANTAGE', class: 'advantage' };
    if (ratio >= 0.9) return { text: 'CLOSE MATCH - Could go either way', class: 'neutral' };
    return { text: 'DISADVANTAGE - Tough fight', class: 'disadvantage' };
  };

  const handleEnemyChange = (enemyNum, index, field, value) => {
    const setEnemy = enemyNum === 1 ? setEnemy1 : setEnemy2;
    const enemy = enemyNum === 1 ? enemy1 : enemy2;
    
    const updated = [...enemy];
    const numericFields = ['towerLevel', 'cp', 'troops'];
    updated[index] = {
      ...updated[index],
      [field]: numericFields.includes(field) ? parseInt(value) || 0 : value
    };
    setEnemy(updated);
  };

  const EnemyForm = ({ enemyNum, enemy, enemyName, setEnemyName, onClose }) => (
    <div className="enemy-form-overlay" onClick={onClose}>
      <div className="enemy-form" onClick={e => e.stopPropagation()}>
        <div className="enemy-form-header">
          <input
            type="text"
            value={enemyName}
            onChange={(e) => setEnemyName(e.target.value)}
            className="enemy-name-input"
          />
          <button onClick={onClose}>×</button>
        </div>
        <div className="enemy-form-body">
          <p className="form-hint">Enter enemy member data (Name & CP required, Troops optional)</p>
          <table className="enemy-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>CP</th>
                <th>Troops</th>
              </tr>
            </thead>
            <tbody>
              {enemy.slice(0, 20).map((m, i) => (
                <tr key={m.id}>
                  <td>{m.id}</td>
                  <td>
                    <input
                      type="text"
                      value={m.name}
                      onChange={(e) => handleEnemyChange(enemyNum, i, 'name', e.target.value)}
                      placeholder="Name..."
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={m.cp || ''}
                      onChange={(e) => handleEnemyChange(enemyNum, i, 'cp', e.target.value)}
                      placeholder="CP..."
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={m.troops || ''}
                      onChange={(e) => handleEnemyChange(enemyNum, i, 'troops', e.target.value)}
                      placeholder="Troops..."
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="war-compare-container">
      <h2>War Comparison</h2>
      
      <div className="compare-table">
        <div className="compare-header">
          <div className="compare-col stat-name">STAT</div>
          <div className="compare-col your-guild">YOUR GUILD</div>
          <div className="compare-col enemy1">
            {enemy1Name}
            <button className="edit-btn" onClick={() => setShowEnemy1Form(true)}>Edit</button>
          </div>
          <div className="compare-col enemy2">
            {enemy2Name}
            <button className="edit-btn" onClick={() => setShowEnemy2Form(true)}>Edit</button>
          </div>
          <div className="compare-col advantage">ADVANTAGE</div>
        </div>

        <div className="compare-row">
          <div className="compare-col stat-name">Active Members</div>
          <div className="compare-col your-guild">{yourActive.length}</div>
          <div className="compare-col enemy1">{enemy1Active.length}</div>
          <div className="compare-col enemy2">{enemy2Active.length}</div>
          <div className={`compare-col advantage ${getAdvantage(yourActive.length, enemy1Active.length, enemy2Active.length).class}`}>
            {getAdvantage(yourActive.length, enemy1Active.length, enemy2Active.length).text}
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-col stat-name">Total CP</div>
          <div className="compare-col your-guild">{yourTotalCP.toLocaleString()}</div>
          <div className="compare-col enemy1">{enemy1TotalCP.toLocaleString()}</div>
          <div className="compare-col enemy2">{enemy2TotalCP.toLocaleString()}</div>
          <div className={`compare-col advantage ${getAdvantage(yourTotalCP, enemy1TotalCP, enemy2TotalCP).class}`}>
            {getAdvantage(yourTotalCP, enemy1TotalCP, enemy2TotalCP).text}
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-col stat-name">Average CP</div>
          <div className="compare-col your-guild">{yourAvgCP.toLocaleString()}</div>
          <div className="compare-col enemy1">{enemy1AvgCP.toLocaleString()}</div>
          <div className="compare-col enemy2">{enemy2AvgCP.toLocaleString()}</div>
          <div className={`compare-col advantage ${getAdvantage(yourAvgCP, enemy1AvgCP, enemy2AvgCP).class}`}>
            {getAdvantage(yourAvgCP, enemy1AvgCP, enemy2AvgCP).text}
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-col stat-name">Total Troops</div>
          <div className="compare-col your-guild">{yourTroops.toLocaleString()}</div>
          <div className="compare-col enemy1">{enemy1Troops.toLocaleString()}</div>
          <div className="compare-col enemy2">{enemy2Troops.toLocaleString()}</div>
          <div className={`compare-col advantage ${getAdvantage(yourTroops, enemy1Troops, enemy2Troops).class}`}>
            {getAdvantage(yourTroops, enemy1Troops, enemy2Troops).text}
          </div>
        </div>
      </div>

      <div className="assessment-section">
        <h3>Overall Assessment</h3>
        <div className="assessment-row">
          <span>vs {enemy1Name}:</span>
          <span className={getAssessment(yourTotalCP, enemy1TotalCP).class}>
            {getAssessment(yourTotalCP, enemy1TotalCP).text}
          </span>
        </div>
        <div className="assessment-row">
          <span>vs {enemy2Name}:</span>
          <span className={getAssessment(yourTotalCP, enemy2TotalCP).class}>
            {getAssessment(yourTotalCP, enemy2TotalCP).text}
          </span>
        </div>
      </div>

      <div className="compare-notes">
        <h4>How to Use:</h4>
        <ol>
          <li>Click "Edit" to enter enemy guild data</li>
          <li>CP is the main comparison (visible in-game)</li>
          <li>Troops data is optional intel from battles</li>
          <li>10%+ CP advantage = Strong, within 10% = Close</li>
        </ol>
      </div>

      {showEnemy1Form && (
        <EnemyForm
          enemyNum={1}
          enemy={enemy1}
          enemyName={enemy1Name}
          setEnemyName={setEnemy1Name}
          onClose={() => setShowEnemy1Form(false)}
        />
      )}

      {showEnemy2Form && (
        <EnemyForm
          enemyNum={2}
          enemy={enemy2}
          enemyName={enemy2Name}
          setEnemyName={setEnemy2Name}
          onClose={() => setShowEnemy2Form(false)}
        />
      )}
    </div>
  );
}

export default WarCompare;
