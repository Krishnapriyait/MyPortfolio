const skills = [
  { name: "HTML", percent: 90 },
  { name: "CSS", percent: 85 },
  { name: "TailwindCSS", percent: 65 },
  { name: "JavaScript", percent: 80 },
  { name: "React.js", percent: 75 },
  { name: "Node.js", percent: 59 },
  { name: "Next.js", percent: 95 },
  { name: "Python", percent: 88 },
  { name: "Leaflet", percent: 60 },
  { name: "Express.js", percent: 55 },
  { name: "SQL", percent: 80 },
  { name: "MongoDB", percent: 70 },
  { name: "C", percent: 82 },
  { name: "Java", percent: 78 },
  { name: "OOPS", percent: 68 },
  { name: "DSA", percent: 84 },
  { name: "Algorithms", percent: 80 },
  { name: "OS", percent: 76 },
  { name: "DBMS", percent: 79 },
  { name: "Networks", percent: 73 },
];

const skillsContainer = document.getElementById('skills-container');
let currentIndex = 0;
let viewType = 'bar';
let isLoading = false;

function getSkillsPerLoad() {
  return window.innerWidth <= 768 ? 1 : 3;
}

function loadNextSkills() {
  if (isLoading || currentIndex >= skills.length) return;

  isLoading = true;
  const skillsPerLoad = getSkillsPerLoad();
  const nextSkills = skills.slice(currentIndex, currentIndex + skillsPerLoad);

  nextSkills.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';

    if (viewType === 'bar') {
      card.innerHTML = `
        <h3>${skill.name}</h3>
        <div class="bar">
          <div class="bar-fill" style="width: ${skill.percent}%"></div>
        </div>
      `;
    } else {
      const radius = 50;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (skill.percent / 100) * circumference;

      card.innerHTML = `
        <div class="circular">
          <svg>
            <circle class="bg" cx="60" cy="60" r="50"></circle>
            <circle class="progress" cx="60" cy="60" r="50"
              style="stroke-dashoffset: ${offset}; stroke-dasharray: ${circumference};"></circle>
          </svg>
          <div class="circle-percent">${skill.percent}%</div>
        </div>
        <h3>${skill.name}</h3>
      `;
    }

    skillsContainer.appendChild(card);
    setTimeout(() => {
      card.classList.add('visible');
    }, 100);
  });

  currentIndex += skillsPerLoad;
  isLoading = false;
}

function toggleSkillView() {
  skillsContainer.innerHTML = '';
  currentIndex = 0;
  viewType = viewType === 'bar' ? 'circle' : 'bar';
  loadNextSkills();
}

function toggleMode() {
  document.body.classList.toggle('light-mode');
}

window.onload = loadNextSkills;

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
    loadNextSkills();
  }
});
