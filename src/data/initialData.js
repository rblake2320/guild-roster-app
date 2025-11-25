// Initial roster data with sample members
export const RANKS = ['R5', 'R4', 'R3', 'R2', 'R1'];
export const STATUSES = ['Active', 'Inactive', 'Vacation'];
export const ROLES = ['Leader', 'Warlord', 'Recruiter', 'Muse', 'Butler', 'Member'];

// Generate initial 100 member slots
export const generateInitialRoster = () => {
  const sampleMembers = [
    { name: '¥Dash¥', towerLevel: 25, cp: 58986490, troops: 0, rank: 'R5', role: 'Leader', status: 'Active' },
    { name: 'Smiley10', towerLevel: 30, cp: 217928741, troops: 0, rank: 'R4', role: 'Warlord', status: 'Active' },
    { name: 'Smallz Jfive', towerLevel: 22, cp: 46751120, troops: 0, rank: 'R4', role: 'Recruiter', status: 'Active' },
    { name: 'B Rad From Da Bu', towerLevel: 24, cp: 57717780, troops: 0, rank: 'R4', role: 'Muse', status: 'Active' },
    { name: 'Viper8', towerLevel: 25, cp: 59314230, troops: 0, rank: 'R4', role: 'Butler', status: 'Active' },
    { name: 'rogueghost', towerLevel: 29, cp: 100840770, troops: 0, rank: 'R3', role: 'Member', status: 'Active' },
    { name: 'Geïšh', towerLevel: 24, cp: 57646030, troops: 0, rank: 'R3', role: 'Member', status: 'Active' },
    { name: 'CRĂZY ŠHĂRḰ', towerLevel: 27, cp: 72411580, troops: 0, rank: 'R3', role: 'Member', status: 'Active' },
    { name: 'Stinkfish', towerLevel: 25, cp: 70389710, troops: 0, rank: 'R3', role: 'Member', status: 'Active' },
    { name: 'Teezoh', towerLevel: 23, cp: 55749910, troops: 0, rank: 'R3', role: 'Member', status: 'Active' },
    { name: 'Sugar Momma', towerLevel: 25, cp: 104326880, troops: 0, rank: 'R3', role: 'Member', status: 'Active' },
    { name: 'QueenHuntress', towerLevel: 21, cp: 43786450, troops: 0, rank: 'R3', role: 'Member', status: 'Active' },
    { name: '· Ellimac ·', towerLevel: 23, cp: 71021840, troops: 0, rank: 'R3', role: 'Member', status: 'Active' },
    { name: 'Maaauro', towerLevel: 25, cp: 52614760, troops: 0, rank: 'R3', role: 'Member', status: 'Active' },
    { name: 'wolvpak', towerLevel: 29, cp: 110514530, troops: 0, rank: 'R3', role: 'Member', status: 'Active' },
  ];

  const roster = [];
  for (let i = 0; i < 100; i++) {
    if (i < sampleMembers.length) {
      roster.push({
        id: i + 1,
        ...sampleMembers[i],
        returnDate: null,
        notes: '',
        position: { x: (i % 10) * 4, y: Math.floor(i / 10) * 4 }
      });
    } else {
      roster.push({
        id: i + 1,
        name: '',
        towerLevel: 0,
        cp: 0,
        troops: 0,
        rank: 'R3',
        role: 'Member',
        status: 'Active',
        returnDate: null,
        notes: '',
        position: { x: (i % 10) * 4, y: Math.floor(i / 10) * 4 }
      });
    }
  }
  return roster;
};

// Generate empty enemy roster
export const generateEmptyRoster = () => {
  const roster = [];
  for (let i = 0; i < 100; i++) {
    roster.push({
      id: i + 1,
      name: '',
      towerLevel: 0,
      cp: 0,
      troops: 0,
      rank: 'R3',
      role: 'Member',
      status: 'Active',
      returnDate: null,
      notes: '',
      position: { x: (i % 10) * 4, y: Math.floor(i / 10) * 4 }
    });
  }
  return roster;
};

// Format large numbers
export const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'K';
  }
  return num.toString();
};

// Get box color based on rank
export const getRankColor = (rank) => {
  switch (rank) {
    case 'R5': return '#FFD700'; // Gold
    case 'R4': return '#FFFF64'; // Yellow
    default: return '#4682B4'; // Blue
  }
};

// Get text color based on rank
export const getTextColor = (rank) => {
  switch (rank) {
    case 'R5':
    case 'R4':
      return '#000000'; // Black
    default:
      return '#FFFFFF'; // White
  }
};

// Get status color for cell background
export const getStatusColor = (status) => {
  switch (status) {
    case 'Active': return '#C8FFC8';
    case 'Inactive': return '#DC3545';
    case 'Vacation': return '#C8DCFF';
    default: return 'transparent';
  }
};
