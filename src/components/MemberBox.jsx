import { useDraggable } from '@dnd-kit/core';
import { formatNumber, getRankColor, getTextColor } from '../data/initialData';

function MemberBox({ member, onClick }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: member.id,
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    backgroundColor: getRankColor(member.rank),
    color: getTextColor(member.rank),
    opacity: isDragging ? 0.8 : 1,
    cursor: isDragging ? 'grabbing' : 'grab',
  };

  const getDisplayText = () => {
    if (!member.name) {
      return `Box ${member.id}`;
    }
    if (member.status === 'Vacation' && member.returnDate) {
      return `${member.name}\nBack: ${member.returnDate}`;
    }
    if (member.status === 'Inactive') {
      return `${member.name}\nINACTIVE`;
    }
    let text = `${member.name}\nL:${member.towerLevel} | ${formatNumber(member.cp)}`;
    if (member.troops > 0) {
      text += ` | T:${formatNumber(member.troops)}`;
    }
    return text;
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`member-box ${member.status.toLowerCase()} ${!member.name ? 'empty' : ''}`}
      onClick={() => onClick(member)}
    >
      <div className="member-box-content">
        {getDisplayText().split('\n').map((line, i) => (
          <div key={i} className={i === 0 ? 'member-name' : 'member-stats'}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemberBox;
