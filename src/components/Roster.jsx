import { useState } from 'react';
import { RANKS, STATUSES, ROLES, getStatusColor } from '../data/initialData';

function Roster({ roster, onUpdateMember }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredRoster = roster.filter(member => {
    if (filter === 'filled' && !member.name) return false;
    if (filter === 'empty' && member.name) return false;
    if (filter === 'active' && member.status !== 'Active') return false;
    if (filter === 'inactive' && member.status !== 'Inactive') return false;
    if (filter === 'vacation' && member.status !== 'Vacation') return false;
    if (search && member.name && !member.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const handleChange = (id, field, value) => {
    const member = roster.find(m => m.id === id);
    if (member) {
      const numericFields = ['towerLevel', 'cp', 'troops'];
      const newValue = numericFields.includes(field) ? parseInt(value) || 0 : value;
      onUpdateMember(id, { ...member, [field]: newValue });
    }
  };

  return (
    <div className="roster-container">
      <div className="roster-header">
        <h2>Guild Roster</h2>
        <div className="roster-controls">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-select">
            <option value="all">All Slots (100)</option>
            <option value="filled">Filled Only</option>
            <option value="empty">Empty Only</option>
            <option value="active">Active Only</option>
            <option value="inactive">Inactive</option>
            <option value="vacation">On Vacation</option>
          </select>
        </div>
      </div>

      <div className="roster-table-container">
        <table className="roster-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Role</th>
              <th>Rank</th>
              <th>Status</th>
              <th>Tower</th>
              <th>CP</th>
              <th>Troops</th>
              <th>Return Date</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {filteredRoster.map((member) => (
              <tr key={member.id} className={member.name ? '' : 'empty-row'}>
                <td className="col-id">{member.id}</td>
                <td className="col-name">
                  <input
                    type="text"
                    value={member.name}
                    onChange={(e) => handleChange(member.id, 'name', e.target.value)}
                    placeholder="Enter name..."
                  />
                </td>
                <td className="col-role">
                  <select
                    value={member.role}
                    onChange={(e) => handleChange(member.id, 'role', e.target.value)}
                  >
                    {ROLES.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </td>
                <td className="col-rank">
                  <select
                    value={member.rank}
                    onChange={(e) => handleChange(member.id, 'rank', e.target.value)}
                  >
                    {RANKS.map(rank => (
                      <option key={rank} value={rank}>{rank}</option>
                    ))}
                  </select>
                </td>
                <td className="col-status">
                  <select
                    value={member.status}
                    onChange={(e) => handleChange(member.id, 'status', e.target.value)}
                    style={{ backgroundColor: getStatusColor(member.status) }}
                  >
                    {STATUSES.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </td>
                <td className="col-tower">
                  <input
                    type="number"
                    min="0"
                    max="30"
                    value={member.towerLevel || ''}
                    onChange={(e) => handleChange(member.id, 'towerLevel', e.target.value)}
                  />
                </td>
                <td className="col-cp">
                  <input
                    type="number"
                    min="0"
                    value={member.cp || ''}
                    onChange={(e) => handleChange(member.id, 'cp', e.target.value)}
                  />
                </td>
                <td className="col-troops">
                  <input
                    type="number"
                    min="0"
                    value={member.troops || ''}
                    onChange={(e) => handleChange(member.id, 'troops', e.target.value)}
                  />
                </td>
                <td className="col-return">
                  <input
                    type="date"
                    value={member.returnDate || ''}
                    onChange={(e) => handleChange(member.id, 'returnDate', e.target.value)}
                    disabled={member.status !== 'Vacation'}
                  />
                </td>
                <td className="col-notes">
                  <input
                    type="text"
                    value={member.notes}
                    onChange={(e) => handleChange(member.id, 'notes', e.target.value)}
                    placeholder="Notes..."
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Roster;
