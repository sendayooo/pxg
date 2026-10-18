const teams = {
  ubers: {
    name: 'Ubers',
    path: 'teams/ubers/index.html',
    description: 'Estratégia, defesa e controle de campo.',
    color: '#d9b24f'
  },
  pxg: {
    name: 'PXG',
    path: 'teams/pxg/index.html',
    description: 'Elenco da PXG e suas fichas completas.',
    color: '#ff2638'
  },
  bastard: {
    name: 'Bastard München',
    path: 'teams/bastard/index.html',
    description: 'Técnica, racionalidade e domínio ofensivo.',
    color: '#e7c46c'
  },
  barcha: {
    name: 'FC Barcha',
    path: 'teams/barcha/index.html',
    description: 'Criatividade, drible e futebol expressivo.',
    color: '#d6a33d'
  },
  manshine: {
    name: 'Manshine City',
    path: 'teams/manshine/index.html',
    description: 'Físico, velocidade e evolução de performance.',
    color: '#c8e1ec'
  }
};

const frame = document.getElementById('teamFrame');
const loading = document.getElementById('loading');
const teamName = document.getElementById('teamName');
const teamDescription = document.getElementById('teamDescription');
const openStandalone = document.getElementById('openStandalone');
const statusDot = document.querySelector('.status-dot');
const buttons = [...document.querySelectorAll('.team-button')];

function setTeam(key, updateHash = true) {
  const team = teams[key] || teams.ubers;
  const resolvedKey = teams[key] ? key : 'ubers';

  buttons.forEach(button => button.classList.toggle('active', button.dataset.team === resolvedKey));
  teamName.textContent = team.name;
  teamDescription.textContent = team.description;
  statusDot.style.background = team.color;
  statusDot.style.boxShadow = `0 0 10px ${team.color}88`;
  openStandalone.href = team.path;
  frame.title = `${team.name} — Central de Fichas`;

  if (!frame.src.endsWith(team.path)) {
    loading.classList.remove('hidden');
    frame.src = team.path;
  }

  document.title = `${team.name} — Blue Lock Central`;
  if (updateHash && location.hash.slice(1) !== resolvedKey) history.replaceState(null, '', `#${resolvedKey}`);
}

buttons.forEach(button => button.addEventListener('click', () => setTeam(button.dataset.team)));
frame.addEventListener('load', () => loading.classList.add('hidden'));
window.addEventListener('hashchange', () => setTeam(location.hash.slice(1), false));

setTeam(location.hash.slice(1) || 'ubers', false);
