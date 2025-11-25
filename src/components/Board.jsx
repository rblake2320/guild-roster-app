import { DndContext, DragOverlay, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import { useState } from 'react';
import MemberBox from './MemberBox';
import MemberModal from './MemberModal';

function Board({ roster, onUpdateMember }) {
  const [activeId, setActiveId] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    setActiveId(null);
    // Position tracking could be added here if needed
  };

  const handleBoxClick = (member) => {
    if (member.name) {
      setSelectedMember(member);
    }
  };

  const activeMember = activeId ? roster.find(m => m.id === activeId) : null;

  // Only show members with names
  const filledMembers = roster.filter(m => m.name);
  const emptySlots = roster.filter(m => !m.name).slice(0, 15); // Show some empty slots

  return (
    <div className="board-container">
      <div className="board-header">
        <h2>Guild Board</h2>
        <p className="board-hint">Drag boxes to rearrange • Click to view details</p>
      </div>
      
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="board-grid">
          {filledMembers.map((member) => (
            <MemberBox
              key={member.id}
              member={member}
              onClick={handleBoxClick}
            />
          ))}
          {emptySlots.map((member) => (
            <MemberBox
              key={member.id}
              member={member}
              onClick={handleBoxClick}
            />
          ))}
        </div>
        
        <DragOverlay>
          {activeMember ? (
            <MemberBox member={activeMember} onClick={() => {}} />
          ) : null}
        </DragOverlay>
      </DndContext>

      {selectedMember && (
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
          onUpdate={onUpdateMember}
        />
      )}
    </div>
  );
}

export default Board;
