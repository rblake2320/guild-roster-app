function Stats({ roster }) {
  const members = roster.filter(m => m.name);
  const active = members.filter(m => m.status === 'Active');
  const inactive = members.filter(m => m.status === 'Inactive');
  const vacation = members.filter(m => m.status === 'Vacation');

  const totalCP = active.reduce((sum, m) => sum + m.cp, 0);
  const avgCP = active.length > 0 ? Math.round(totalCP / active.length) : 0;
  const totalTroops = active.reduce((sum, m) => sum + m.troops, 0);
  const avgTowerLevel = active.length > 0 
    ? (active.reduce((sum, m) => sum + m.towerLevel, 0) / active.length).toFixed(1) 
    : 0;

  const rankCounts = {
    R5: members.filter(m => m.rank === 'R5').length,
    R4: members.filter(m => m.rank === 'R4').length,
    R3: members.filter(m => m.rank === 'R3').length,
    R2: members.filter(m => m.rank === 'R2').length,
    R1: members.filter(m => m.rank === 'R1').length,
  };

  const level30Count = active.filter(m => m.towerLevel === 30).length;
  const level25PlusCount = active.filter(m => m.towerLevel >= 25).length;
  const cp100mPlus = active.filter(m => m.cp >= 100000000).length;

  return (
    <div className="stats-container">
      <h2>Guild Statistics</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Members</h3>
          <div className="stat-item">
            <span>Total Slots:</span>
            <span>100</span>
          </div>
          <div className="stat-item">
            <span>Filled:</span>
            <span>{members.length}</span>
          </div>
          <div className="stat-item highlight-green">
            <span>Active:</span>
            <span>{active.length}</span>
          </div>
          <div className="stat-item highlight-red">
            <span>Inactive:</span>
            <span>{inactive.length}</span>
          </div>
          <div className="stat-item highlight-blue">
            <span>On Vacation:</span>
            <span>{vacation.length}</span>
          </div>
          <div className="stat-item">
            <span>Empty Slots:</span>
            <span>{100 - members.length}</span>
          </div>
        </div>

        <div className="stat-card">
          <h3>Ranks</h3>
          <div className="stat-item">
            <span>R5 (Leader):</span>
            <span>{rankCounts.R5}</span>
          </div>
          <div className="stat-item">
            <span>R4 (Officers):</span>
            <span>{rankCounts.R4}</span>
          </div>
          <div className="stat-item">
            <span>R3:</span>
            <span>{rankCounts.R3}</span>
          </div>
          <div className="stat-item">
            <span>R2:</span>
            <span>{rankCounts.R2}</span>
          </div>
          <div className="stat-item">
            <span>R1:</span>
            <span>{rankCounts.R1}</span>
          </div>
        </div>

        <div className="stat-card">
          <h3>Tower Levels</h3>
          <div className="stat-item">
            <span>Average Level:</span>
            <span>{avgTowerLevel}</span>
          </div>
          <div className="stat-item">
            <span>Level 30s:</span>
            <span>{level30Count}</span>
          </div>
          <div className="stat-item">
            <span>Level 25+:</span>
            <span>{level25PlusCount}</span>
          </div>
        </div>

        <div className="stat-card">
          <h3>Combat Power</h3>
          <div className="stat-item large">
            <span>Total Active CP:</span>
            <span>{totalCP.toLocaleString()}</span>
          </div>
          <div className="stat-item">
            <span>Average CP:</span>
            <span>{avgCP.toLocaleString()}</span>
          </div>
          <div className="stat-item">
            <span>100M+ CP:</span>
            <span>{cp100mPlus}</span>
          </div>
        </div>

        <div className="stat-card">
          <h3>Troops</h3>
          <div className="stat-item large">
            <span>Total Troops:</span>
            <span>{totalTroops.toLocaleString()}</span>
          </div>
          <div className="stat-item">
            <span>Members with Troops:</span>
            <span>{active.filter(m => m.troops > 0).length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
