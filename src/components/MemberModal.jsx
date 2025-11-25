import { formatNumber } from '../data/initialData';

function MemberModal({ member, onClose, onUpdate }) {
  if (!member) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{member.name}</h2>
          <span className={`role-badge ${member.role.toLowerCase()}`}>{member.role}</span>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="stat-row">
            <span className="stat-label">Rank:</span>
            <span className="stat-value">{member.rank}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Status:</span>
            <span className={`stat-value status-${member.status.toLowerCase()}`}>
              {member.status}
            </span>
          </div>
          {member.status === 'Vacation' && member.returnDate && (
            <div className="stat-row">
              <span className="stat-label">Returns:</span>
              <span className="stat-value">{member.returnDate}</span>
            </div>
          )}
          <div className="stat-row">
            <span className="stat-label">Tower Level:</span>
            <span className="stat-value">{member.towerLevel}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">CP:</span>
            <span className="stat-value">{member.cp.toLocaleString()}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Troops:</span>
            <span className="stat-value">
              {member.troops > 0 ? member.troops.toLocaleString() : 'Not set'}
            </span>
          </div>
          {member.notes && (
            <div className="stat-row notes">
              <span className="stat-label">Notes:</span>
              <span className="stat-value">{member.notes}</span>
            </div>
          )}
        </div>
        
        <div className="modal-footer">
          <p className="edit-hint">Edit member data in the Roster tab</p>
        </div>
      </div>
    </div>
  );
}

export default MemberModal;
