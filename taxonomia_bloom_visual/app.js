// Taxonomia de Bloom - Aplicação Interativa

// Dados da aplicação
const bloomData = {
  niveis_bloom: [
    {
      nivel: "Recordar",
      cor: "#3498db",
      icone: "🧠",
      definicao: "Recuperar informações e conhecimentos armazenados na memória de longo prazo.",
      verbos: ["listar", "nomear", "identificar", "definir", "descrever", "reconhecer"],
      ferramentas_digitais: ["Google", "Bookmarks", "Flashcards", "Redes sociais"],
      exemplo_ia: "Liste os principais componentes do sistema solar",
      atividades_praticas: ["Flashcards digitais", "Pesquisa orientada", "Organização de favoritos"]
    },
    {
      nivel: "Compreender",
      cor: "#27ae60",
      icone: "💡",
      definicao: "Construir significado através de interpretação, exemplificação e classificação.",
      verbos: ["explicar", "interpretar", "resumir", "comparar", "categorizar", "exemplificar"],
      ferramentas_digitais: ["Blogs", "Wikis", "Mind maps", "Tags"],
      exemplo_ia: "Explique a diferença entre energia renovável e não renovável",
      atividades_praticas: ["Mapas mentais", "Resumos colaborativos", "Discussões em fóruns"]
    },
    {
      nivel: "Aplicar",
      cor: "#e67e22",
      icone: "⚙️",
      definicao: "Utilizar procedimentos para executar exercícios ou resolver problemas.",
      verbos: ["executar", "implementar", "usar", "demonstrar", "resolver", "construir"],
      ferramentas_digitais: ["Simuladores", "Editores", "Calculadoras", "Jogos educativos"],
      exemplo_ia: "Calcule a área de um triângulo com base 5cm e altura 8cm",
      atividades_praticas: ["Laboratórios virtuais", "Simulações", "Projetos práticos"]
    },
    {
      nivel: "Analisar",
      cor: "#f1c40f",
      icone: "🔬",
      definicao: "Dividir informações em partes constituintes e determinar relações.",
      verbos: ["diferenciar", "organizar", "atribuir", "comparar", "contrastar", "examinar"],
      ferramentas_digitais: ["Survey Monkey", "Análise de dados", "Visualizações", "Debates online"],
      exemplo_ia: "Compare as vantagens e desvantagens das energias solar e eólica",
      atividades_praticas: ["Análise de casos", "Debates estruturados", "Comparações visuais"]
    },
    {
      nivel: "Avaliar",
      cor: "#e74c3c",
      icone: "⚖️",
      definicao: "Fazer julgamentos baseados em critérios através de verificação e crítica.",
      verbos: ["verificar", "criticar", "julgar", "avaliar", "testar", "monitorar"],
      ferramentas_digitais: ["Peer review", "Comentários", "Avaliações", "Moderação"],
      exemplo_ia: "Avalie a eficácia das políticas de sustentabilidade da empresa X",
      atividades_praticas: ["Revisão por pares", "Avaliação de projetos", "Críticas construtivas"]
    },
    {
      nivel: "Criar",
      cor: "#9b59b6",
      icone: "🎨",
      definicao: "Reunir elementos para formar um todo coerente e funcional.",
      verbos: ["gerar", "planejar", "produzir", "construir", "formular", "projetar"],
      ferramentas_digitais: ["Editores de vídeo", "Blogs", "Wikis", "Programação", "Design"],
      exemplo_ia: "Desenvolva um plano de negócios para uma startup de tecnologia limpa",
      atividades_praticas: ["Projetos autorais", "Prototipagem", "Criação de conteúdo"]
    }
  ]
};

// Estado da aplicação
let appState = {
  currentTab: 'overview',
  userScore: 0,
  earnedBadges: new Set(),
  completedLevels: new Set(),
  quizState: {
    currentQuestion: 0,
    correctAnswers: 0,
    questions: [],
    isActive: false
  },
  selectedComplexity: new Set(),
  isDarkMode: false
};

// Perguntas do Quiz
const quizQuestions = [
  {
    question: "Qual nível da Taxonomia de Bloom envolve reunir elementos para formar algo novo?",
    options: ["Aplicar", "Analisar", "Criar", "Avaliar"],
    correct: 2,
    level: "Criar"
  },
  {
    question: "O verbo 'listar' está associado a qual nível cognitivo?",
    options: ["Recordar", "Compreender", "Aplicar", "Analisar"],
    correct: 0,
    level: "Recordar"
  },
  {
    question: "Qual nível envolve fazer julgamentos baseados em critérios?",
    options: ["Analisar", "Aplicar", "Avaliar", "Compreender"],
    correct: 2,
    level: "Avaliar"
  },
  {
    question: "Google e Bookmarks são ferramentas digitais associadas a qual nível?",
    options: ["Recordar", "Compreender", "Aplicar", "Criar"],
    correct: 0,
    level: "Recordar"
  },
  {
    question: "O nível 'Compreender' está associado a qual cor?",
    options: ["Azul", "Verde", "Laranja", "Amarelo"],
    correct: 1,
    level: "Compreender"
  },
  {
    question: "Qual verbo NÃO pertence ao nível 'Aplicar'?",
    options: ["executar", "implementar", "interpretar", "construir"],
    correct: 2,
    level: "Aplicar"
  },
  {
    question: "Mind maps são ferramentas digitais do nível:",
    options: ["Recordar", "Compreender", "Aplicar", "Analisar"],
    correct: 1,
    level: "Compreender"
  },
  {
    question: "O ícone 🔬 representa qual nível cognitivo?",
    options: ["Aplicar", "Analisar", "Avaliar", "Criar"],
    correct: 1,
    level: "Analisar"
  },
  {
    question: "Qual nível tem como definição 'Utilizar procedimentos para executar exercícios'?",
    options: ["Compreender", "Aplicar", "Analisar", "Avaliar"],
    correct: 1,
    level: "Aplicar"
  },
  {
    question: "Laboratórios virtuais são atividades práticas do nível:",
    options: ["Recordar", "Compreender", "Aplicar", "Analisar"],
    correct: 2,
    level: "Aplicar"
  }
];

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  populateLevelsGrid();
  populateBadgesGrid();
  populateLevelSelect();
  updateProgress();
  updateStats();
  setupPyramidInteractions();
}

function setupEventListeners() {
  // Tab navigation
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => switchTab(e.target.dataset.tab));
  });

  // Theme toggle
  document.getElementById('toggleTheme').addEventListener('click', toggleTheme);

  // Quiz controls
  document.getElementById('startQuiz').addEventListener('click', startQuiz);
  document.getElementById('nextQuestion').addEventListener('click', nextQuestion);
  document.getElementById('restartQuiz').addEventListener('click', restartQuiz);

  // Tools
  document.getElementById('generateObjective').addEventListener('click', generateObjective);
  document.querySelectorAll('.complexity-item').forEach(item => {
    item.addEventListener('click', (e) => toggleComplexity(e.currentTarget));
  });

  // Achievement modal
  document.getElementById('closeAchievement').addEventListener('click', closeAchievementModal);
}

function switchTab(tabName) {
  // Update active tab button
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

  // Update active tab content
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  document.getElementById(tabName).classList.add('active');

  appState.currentTab = tabName;
}

function populateLevelsGrid() {
  const levelsGrid = document.getElementById('levelsGrid');
  levelsGrid.innerHTML = '';

  bloomData.niveis_bloom.forEach((nivel, index) => {
    const card = createLevelCard(nivel, index);
    levelsGrid.appendChild(card);
  });
}

function createLevelCard(nivel, index) {
  const card = document.createElement('div');
  card.className = 'level-card';
  card.style.setProperty('--level-color', nivel.cor);
  
  card.innerHTML = `
    <div class="level-card__header">
      <div class="level-card__icon" style="background: ${nivel.cor}">
        ${nivel.icone}
      </div>
      <h3 class="level-card__title">${nivel.nivel}</h3>
    </div>
    
    <p class="level-card__definition">${nivel.definicao}</p>
    
    <div class="level-card__section">
      <h4>Verbos Associados</h4>
      <div class="verbs-list">
        ${nivel.verbos.map(verbo => `<span class="verb-tag">${verbo}</span>`).join('')}
      </div>
    </div>
    
    <div class="level-card__section">
      <h4>Ferramentas Digitais</h4>
      <ul class="tools-list">
        ${nivel.ferramentas_digitais.map(ferramenta => `<li>${ferramenta}</li>`).join('')}
      </ul>
    </div>
    
    <div class="level-card__section">
      <h4>Exemplo com IA</h4>
      <p><em>"${nivel.exemplo_ia}"</em></p>
    </div>
  `;

  card.addEventListener('click', () => {
    exploreLevel(nivel, index);
  });

  return card;
}

function exploreLevel(nivel, index) {
  // Marcar nível como explorado
  appState.completedLevels.add(nivel.nivel);
  updateProgress();
  
  // Ganhar pontos
  if (!appState.earnedBadges.has(`explorer_${nivel.nivel}`)) {
    addScore(10);
    earnBadge(`explorer_${nivel.nivel}`, `🏅 Explorador ${nivel.nivel}`, `Você explorou o nível ${nivel.nivel}!`);
  }
  
  // Animação visual
  const card = event.currentTarget;
  card.style.transform = 'scale(1.05)';
  setTimeout(() => {
    card.style.transform = '';
  }, 200);
}

function populateBadgesGrid() {
  const badgesGrid = document.getElementById('badgesGrid');
  badgesGrid.innerHTML = '';

  // Badges para cada nível
  bloomData.niveis_bloom.forEach(nivel => {
    const badge = createBadge(`explorer_${nivel.nivel}`, nivel.icone, `${nivel.nivel}`);
    badgesGrid.appendChild(badge);
  });

  // Badges especiais
  const specialBadges = [
    { id: 'quiz_master', icon: '🎯', name: 'Quiz Master' },
    { id: 'tool_user', icon: '🛠️', name: 'Ferramenta' },
    { id: 'scholar', icon: '🎓', name: 'Acadêmico' }
  ];

  specialBadges.forEach(badge => {
    const badgeElement = createBadge(badge.id, badge.icon, badge.name);
    badgesGrid.appendChild(badgeElement);
  });
}

function createBadge(id, icon, name) {
  const badge = document.createElement('div');
  badge.className = 'badge';
  badge.id = `badge_${id}`;
  
  if (appState.earnedBadges.has(id)) {
    badge.classList.add('earned');
  }
  
  badge.innerHTML = `
    <div class="badge__icon">${icon}</div>
    <div class="badge__name">${name}</div>
  `;
  
  return badge;
}

function setupPyramidInteractions() {
  document.querySelectorAll('.pyramid-level').forEach(level => {
    level.addEventListener('click', (e) => {
      const levelName = e.currentTarget.dataset.level;
      const levelData = bloomData.niveis_bloom.find(n => n.nivel.toLowerCase() === levelName);
      
      if (levelData) {
        // Destacar nível selecionado
        document.querySelectorAll('.pyramid-level').forEach(l => l.style.boxShadow = '');
        e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
        
        // Adicionar pontos
        addScore(5);
        
        // Ir para a aba de níveis se não estiver lá
        if (appState.currentTab !== 'levels') {
          switchTab('levels');
        }
        
        // Scroll para o card correspondente
        setTimeout(() => {
          const cards = document.querySelectorAll('.level-card');
          const targetCard = Array.from(cards).find(card => 
            card.querySelector('.level-card__title').textContent === levelData.nivel
          );
          
          if (targetCard) {
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            targetCard.style.boxShadow = '0 0 20px rgba(52, 152, 219, 0.5)';
            setTimeout(() => {
              targetCard.style.boxShadow = '';
            }, 2000);
          }
        }, 300);
      }
    });
  });
}

function populateLevelSelect() {
  const levelSelect = document.getElementById('levelSelect');
  levelSelect.innerHTML = '<option value="">Selecione um nível</option>';
  
  bloomData.niveis_bloom.forEach(nivel => {
    const option = document.createElement('option');
    option.value = nivel.nivel;
    option.textContent = `${nivel.icone} ${nivel.nivel}`;
    levelSelect.appendChild(option);
  });
}

// Sistema de Quiz
function startQuiz() {
  appState.quizState = {
    currentQuestion: 0,
    correctAnswers: 0,
    questions: [...quizQuestions].sort(() => Math.random() - 0.5),
    isActive: true
  };
  
  document.getElementById('startQuiz').classList.add('hidden');
  document.getElementById('quizResults').classList.add('hidden');
  document.getElementById('quizContent').classList.remove('hidden');
  
  showQuestion();
}

function showQuestion() {
  const state = appState.quizState;
  const question = state.questions[state.currentQuestion];
  
  document.getElementById('currentQuestion').textContent = state.currentQuestion + 1;
  document.getElementById('totalQuestions').textContent = state.questions.length;
  document.getElementById('quizQuestion').textContent = question.question;
  
  const optionsContainer = document.getElementById('quizOptions');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'quiz-option';
    optionElement.textContent = option;
    optionElement.addEventListener('click', () => selectOption(index));
    optionsContainer.appendChild(optionElement);
  });
  
  document.getElementById('nextQuestion').classList.add('hidden');
  updateQuizProgress();
}

function selectOption(selectedIndex) {
  const state = appState.quizState;
  const question = state.questions[state.currentQuestion];
  const options = document.querySelectorAll('.quiz-option');
  
  // Desabilitar todas as opções
  options.forEach(option => option.style.pointerEvents = 'none');
  
  // Marcar resposta selecionada
  options[selectedIndex].classList.add('selected');
  
  // Mostrar resposta correta
  setTimeout(() => {
    options[question.correct].classList.add('correct');
    
    if (selectedIndex !== question.correct) {
      options[selectedIndex].classList.add('incorrect');
    } else {
      state.correctAnswers++;
      addScore(10);
    }
    
    document.getElementById('nextQuestion').classList.remove('hidden');
  }, 500);
}

function nextQuestion() {
  const state = appState.quizState;
  state.currentQuestion++;
  
  if (state.currentQuestion < state.questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const state = appState.quizState;
  const percentage = Math.round((state.correctAnswers / state.questions.length) * 100);
  
  document.getElementById('quizContent').classList.add('hidden');
  document.getElementById('quizResults').classList.remove('hidden');
  
  const resultsHtml = `
    <div class="score-display">${percentage}%</div>
    <p>Você acertou ${state.correctAnswers} de ${state.questions.length} perguntas!</p>
    <div class="achievements" id="achievements">
      ${getQuizAchievements(percentage)}
    </div>
  `;
  
  document.getElementById('resultsSummary').innerHTML = resultsHtml;
  document.getElementById('restartQuiz').classList.remove('hidden');
  
  // Badges do quiz
  if (percentage >= 70) {
    earnBadge('quiz_master', '🎯 Quiz Master', 'Você dominou o quiz com mais de 70% de acertos!');
  }
  
  if (percentage === 100) {
    earnBadge('scholar', '🎓 Acadêmico', 'Perfeição! 100% de acertos no quiz!');
    addScore(50);
  }
  
  state.isActive = false;
}

function getQuizAchievements(percentage) {
  if (percentage === 100) {
    return '<div class="status status--success">🏆 Perfeição! Resultado excepcional!</div>';
  } else if (percentage >= 80) {
    return '<div class="status status--success">⭐ Excelente! Muito bem!</div>';
  } else if (percentage >= 60) {
    return '<div class="status status--warning">👍 Bom trabalho! Continue estudando!</div>';
  } else {
    return '<div class="status status--info">📚 Continue praticando para melhorar!</div>';
  }
}

function restartQuiz() {
  document.getElementById('quizResults').classList.add('hidden');
  document.getElementById('startQuiz').classList.remove('hidden');
  document.getElementById('nextQuestion').classList.add('hidden');
  document.getElementById('restartQuiz').classList.add('hidden');
  
  updateQuizProgress(0);
}

function updateQuizProgress(progress = null) {
  const state = appState.quizState;
  const progressPercent = progress !== null ? progress : 
    state.isActive ? ((state.currentQuestion + 1) / state.questions.length) * 100 : 0;
  
  document.getElementById('quizProgressFill').style.width = `${progressPercent}%`;
}

// Ferramentas
function generateObjective() {
  const level = document.getElementById('levelSelect').value;
  const topic = document.getElementById('topicInput').value.trim();
  
  if (!level || !topic) {
    document.getElementById('generatedObjective').innerHTML = 
      '<p style="color: var(--color-error)">⚠️ Selecione um nível e digite um tópico</p>';
    return;
  }
  
  const levelData = bloomData.niveis_bloom.find(n => n.nivel === level);
  const randomVerb = levelData.verbos[Math.floor(Math.random() * levelData.verbos.length)];
  
  const objective = `O estudante deve conseguir <strong>${randomVerb}</strong> conceitos relacionados a <strong>${topic}</strong>, demonstrando domínio do nível cognitivo <strong>${level}</strong> da Taxonomia de Bloom.`;
  
  document.getElementById('generatedObjective').innerHTML = `
    <p>${objective}</p>
    <small style="color: var(--color-text-secondary)">💡 Exemplo gerado automaticamente</small>
  `;
  
  // Badge para uso de ferramenta
  if (!appState.earnedBadges.has('tool_user')) {
    earnBadge('tool_user', '🛠️ Ferramenta', 'Você usou o gerador de objetivos!');
    addScore(5);
  }
}

function toggleComplexity(item) {
  const complexity = parseInt(item.dataset.complexity);
  
  if (appState.selectedComplexity.has(complexity)) {
    appState.selectedComplexity.delete(complexity);
    item.classList.remove('selected');
  } else {
    appState.selectedComplexity.add(complexity);
    item.classList.add('selected');
  }
  
  updateComplexityResult();
}

function updateComplexityResult() {
  const selected = Array.from(appState.selectedComplexity).sort((a, b) => a - b);
  const resultDiv = document.getElementById('complexityResult');
  
  if (selected.length === 0) {
    resultDiv.innerHTML = '<p>Selecione os níveis cognitivos envolvidos em sua atividade</p>';
    return;
  }
  
  const average = selected.reduce((a, b) => a + b, 0) / selected.length;
  const complexity = average < 2 ? 'Baixa' : average < 4 ? 'Média' : 'Alta';
  const color = average < 2 ? 'var(--color-info)' : average < 4 ? 'var(--color-warning)' : 'var(--color-error)';
  
  resultDiv.innerHTML = `
    <h4>Análise de Complexidade</h4>
    <p>Níveis selecionados: ${selected.join(', ')}</p>
    <p>Complexidade média: <span style="color: ${color}; font-weight: bold">${average.toFixed(1)} - ${complexity}</span></p>
    <small>Quanto maior o número, maior a complexidade cognitiva</small>
  `;
}

// Sistema de gamificação
function addScore(points) {
  appState.userScore += points;
  updateStats();
  
  // Animação de pontuação
  showScoreAnimation(points);
}

function showScoreAnimation(points) {
  const animation = document.createElement('div');
  animation.textContent = `+${points}`;
  animation.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-success);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: bold;
    z-index: 1000;
    animation: scoreFloat 2s ease-out forwards;
  `;
  
  document.body.appendChild(animation);
  
  setTimeout(() => {
    document.body.removeChild(animation);
  }, 2000);
}

function earnBadge(badgeId, title, description) {
  if (appState.earnedBadges.has(badgeId)) return;
  
  appState.earnedBadges.add(badgeId);
  
  // Atualizar badge visual
  const badgeElement = document.getElementById(`badge_${badgeId}`);
  if (badgeElement) {
    badgeElement.classList.add('earned');
  }
  
  // Mostrar modal de conquista
  showAchievementModal(title, description);
  
  updateStats();
}

function showAchievementModal(title, description) {
  document.getElementById('achievementDetails').innerHTML = `
    <div class="achievement-badge">🏆</div>
    <h3>${title}</h3>
    <p>${description}</p>
  `;
  
  document.getElementById('achievementModal').classList.remove('hidden');
}

function closeAchievementModal() {
  document.getElementById('achievementModal').classList.add('hidden');
}

function updateProgress() {
  const totalLevels = bloomData.niveis_bloom.length;
  const completedLevels = appState.completedLevels.size;
  const progressPercent = Math.round((completedLevels / totalLevels) * 100);
  
  document.getElementById('progressPercent').textContent = `${progressPercent}%`;
  document.getElementById('progressFill').style.width = `${progressPercent}%`;
}

function updateStats() {
  document.getElementById('userScore').textContent = appState.userScore;
  document.getElementById('badgesEarned').textContent = appState.earnedBadges.size;
}

function toggleTheme() {
  appState.isDarkMode = !appState.isDarkMode;
  const theme = appState.isDarkMode ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-color-scheme', theme);
  document.getElementById('toggleTheme').textContent = appState.isDarkMode ? '☀️' : '🌙';
}

// Adicionar animações CSS dinamicamente
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes scoreFloat {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-50px) scale(1.2); opacity: 0; }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  .pulse {
    animation: pulse 1s ease-in-out;
  }
`;
document.head.appendChild(styleSheet);