// Data structure for the Kanban application
const kanbanData = {
  kanban_columns: [
    { name: "Backlog/Ideias", color: "#E3F2FD", description: "Tranquilidade e criatividade" },
    { name: "A Fazer", color: "#D0F8CE", description: "Energia para começar" },
    { name: "Em Progresso", color: "#FFF9C4", description: "Foco e atenção" },
    { name: "Em Revisão", color: "#FFE0B2", description: "Colaboração e qualidade" },
    { name: "Concluído", color: "#B2EBF2", description: "Realização e fechamento" }
  ],
  
  principles: {
    change_management: [
      {
        title: "Comece com o que você faz hoje",
        example: "Se sua turma já usa listas de tarefas no papel, comece visualizando essas listas em um quadro Kanban digital, sem mudar o processo de imediato."
      },
      {
        title: "Concorde em buscar a melhoria evolutiva",
        example: "Após uma semana usando o quadro, a turma percebe que há muitos trabalhos parados em 'Em Progresso'. Juntos, decidem limitar o número de tarefas nessa coluna para testar se melhora o fluxo."
      },
      {
        title: "Encoraje atos de liderança em todos os níveis",
        example: "Um estudante sugere uma nova política para revisar trabalhos antes de marcar como concluído. A turma aceita e todos passam a colaborar com ideias de melhoria."
      }
    ],
    service_delivery: [
      {
        title: "Compreenda e foque nas necessidades dos clientes",
        example: "O grupo de estudos pergunta aos colegas quais conteúdos têm mais dificuldade e prioriza esses temas no quadro Kanban."
      },
      {
        title: "Gerencie o trabalho, permitindo auto-organização",
        example: "Cada estudante escolhe qual tarefa puxar do quadro, de acordo com sua disponibilidade e interesse, sem que um líder precise delegar tudo."
      },
      {
        title: "Revise regularmente a rede de serviços e políticas",
        example: "A cada mês, a turma revisa as regras do quadro e ajusta conforme o que funcionou ou não, como mudar o limite de tarefas em andamento."
      }
    ]
  },

  // FIXED: Proper cadence levels with correct structure
  cadence_levels: [
    {
      level: "Ruim",
      characteristics: "Reuniões raras, sem foco, decisões atrasadas, feedback ausente",
      example: "Só se reúne quando há problema grave"
    },
    {
      level: "Razoável",
      characteristics: "Reuniões mensais longas, pouco objetivas",
      example: "Reunião mensal de 2h, pouca revisão"
    },
    {
      level: "Boa",
      characteristics: "Reuniões semanais, acompanhamento básico",
      example: "Reunião semanal de 30 min, revisa tarefas"
    },
    {
      level: "Muito Boa",
      characteristics: "Reuniões diárias + retrospectivas regulares",
      example: "Daily 15 min + retrospectiva quinzenal"
    },
    {
      level: "Excelente",
      characteristics: "Cadências adaptadas, feedback constante",
      example: "Daily + review semanal + análise mensal"
    }
  ],

  metrics: {
    lead_time: "Tempo total desde que uma tarefa entra no sistema até ser concluída. Mede a experiência do cliente: quanto tempo ele espera para receber o resultado.",
    cycle_time: "Tempo desde que alguém começa a trabalhar ativamente em uma tarefa até sua conclusão. Ajuda a entender quanto tempo realmente se gasta 'com a mão na massa'.",
    wip: "Número de tarefas que estão em andamento ao mesmo tempo. Monitorar ajuda a evitar sobrecarga e identificar gargalos no processo.",
    throughput: "Número de tarefas concluídas em um período. Mede a produtividade e ajuda a prever entregas futuras baseado no histórico."
  },

  statik_steps: [
    { step: 1, title: "Propósito", description: "Defina quem é o cliente e o que é sucesso para ele. Compreenda o valor que seu sistema deve entregar." },
    { step: 2, title: "Fontes de Insatisfação", description: "Liste o que incomoda clientes e equipe. Identifique problemas que o Kanban pode resolver." },
    { step: 3, title: "Análise da Demanda", description: "Identifique o que chega, por quais canais, frequência e variabilidade das solicitações." },
    { step: 4, title: "Análise de Capacidade", description: "Avalie quanto trabalho conseguem entregar e quais são as limitações atuais." },
    { step: 5, title: "Modelagem do Fluxo", description: "Desenhe as etapas reais que cada tarefa percorre desde o início até a conclusão." },
    { step: 6, title: "Classes de Serviço", description: "Separe tarefas por prioridade, tipo ou urgência para tratamento diferenciado." },
    { step: 7, title: "Design do Sistema", description: "Construa o quadro com colunas, limites de WIP e políticas explícitas." },
    { step: 8, title: "Rollout e Feedback", description: "Implemente o sistema, colete feedback e ajuste continuamente baseado nos resultados." }
  ]
};

// Global application state
let currentStatikStep = 1;
let highwayState = {
  sectors: [
    { capacity: 3, cars: [], limit: 3 },
    { capacity: 2, cars: [], limit: 2 },
    { capacity: 2, cars: [], limit: 2 },
    { capacity: Infinity, cars: [], limit: Infinity }
  ],
  carId: 0
};

let quizState = {
  currentQuestion: 0,
  score: 0,
  questions: [
    {
      question: "O que significa WIP no Kanban?",
      options: ["Work in Progress", "Work in Process", "Wait in Progress", "Work in Planning"],
      correct: 0
    },
    {
      question: "Qual é o principal objetivo de limitar o WIP?",
      options: ["Reduzir custos", "Melhorar o fluxo", "Aumentar a equipe", "Acelerar reuniões"],
      correct: 1
    },
    {
      question: "Quantos princípios de gestão de mudanças o Kanban possui?",
      options: ["2", "3", "4", "5"],
      correct: 1
    },
    {
      question: "O que são cadências no Kanban?",
      options: ["Tipos de tarefas", "Ciclos de reuniões", "Limites de WIP", "Métricas de fluxo"],
      correct: 1
    },
    {
      question: "Qual métrica mede o tempo total desde a entrada até a conclusão?",
      options: ["Cycle Time", "Lead Time", "Throughput", "WIP"],
      correct: 1
    }
  ]
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeExpandableContent();
  initializePrinciples();
  initializeKanbanBoard();
  initializeHighwaySimulation();
  initializeMetrics();
  initializeCadences();
  initializeStatik();
  initializeQuiz();
  initializeDownloads();
  initializeSmoothScrolling();
  console.log('Kanban Interactive Guide initialized successfully!');
});

// Initialize expandable content
function initializeExpandableContent() {
  document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const content = document.getElementById(targetId);
      
      if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        this.textContent = 'Saiba Mais';
      } else {
        content.classList.add('expanded');
        this.textContent = 'Mostrar Menos';
      }
    });
  });
}

// Initialize principles section
function initializePrinciples() {
  const changePrinciplesContainer = document.getElementById('change-principles');
  const servicePrinciplesContainer = document.getElementById('service-principles');

  // Change management principles
  kanbanData.principles.change_management.forEach(item => {
    const principleDiv = document.createElement('div');
    principleDiv.className = 'principle-item';
    principleDiv.innerHTML = `
      <h4>${item.title}</h4>
      <div class="principle-example">
        <strong>Exemplo:</strong> ${item.example}
      </div>
    `;
    changePrinciplesContainer.appendChild(principleDiv);
  });

  // Service delivery principles
  kanbanData.principles.service_delivery.forEach(item => {
    const principleDiv = document.createElement('div');
    principleDiv.className = 'principle-item';
    principleDiv.innerHTML = `
      <h4>${item.title}</h4>
      <div class="principle-example">
        <strong>Exemplo:</strong> ${item.example}
      </div>
    `;
    servicePrinciplesContainer.appendChild(principleDiv);
  });
}

// Initialize Kanban board with drag and drop
function initializeKanbanBoard() {
  const kanbanBoard = document.getElementById('kanban-board');
  
  // Create columns with specific colors
  kanbanData.kanban_columns.forEach((column, index) => {
    const columnDiv = document.createElement('div');
    columnDiv.className = 'kanban-column';
    columnDiv.style.backgroundColor = column.color;
    columnDiv.dataset.column = index;
    
    columnDiv.innerHTML = `
      <div class="column-header">
        <h3>${column.name}</h3>
        <p class="column-description">${column.description}</p>
      </div>
    `;

    // Add sample tasks for demonstration
    if (index === 0) {
      const sampleTasks = [
        'Criar roteiro do curso de Python',
        'Pesquisar exemplos práticos',
        'Definir exercícios interativos'
      ];
      sampleTasks.forEach(task => {
        const taskDiv = createTaskElement(task);
        columnDiv.appendChild(taskDiv);
      });
    }

    setupDragAndDrop(columnDiv);
    kanbanBoard.appendChild(columnDiv);
  });

  // Add task functionality
  document.getElementById('add-task').addEventListener('click', addNewTask);
  document.getElementById('new-task-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addNewTask();
    }
  });
}

function addNewTask() {
  const input = document.getElementById('new-task-input');
  const taskText = input.value.trim();
  
  if (taskText) {
    const firstColumn = document.querySelector('.kanban-column');
    const taskDiv = createTaskElement(taskText);
    firstColumn.appendChild(taskDiv);
    input.value = '';
  }
}

function createTaskElement(text) {
  const taskDiv = document.createElement('div');
  taskDiv.className = 'kanban-task';
  taskDiv.draggable = true;
  taskDiv.textContent = text;
  
  taskDiv.addEventListener('dragstart', function(e) {
    e.dataTransfer.setData('text/plain', text);
    taskDiv.classList.add('dragging');
  });

  taskDiv.addEventListener('dragend', function() {
    taskDiv.classList.remove('dragging');
  });

  return taskDiv;
}

function setupDragAndDrop(column) {
  column.addEventListener('dragover', function(e) {
    e.preventDefault();
    column.classList.add('drag-over');
  });

  column.addEventListener('dragleave', function() {
    column.classList.remove('drag-over');
  });

  column.addEventListener('drop', function(e) {
    e.preventDefault();
    column.classList.remove('drag-over');
    
    const taskText = e.dataTransfer.getData('text/plain');
    const draggingTask = document.querySelector('.kanban-task.dragging');
    
    if (draggingTask) {
      draggingTask.remove();
      const newTask = createTaskElement(taskText);
      column.appendChild(newTask);
    }
  });
}

// Initialize highway simulation
function initializeHighwaySimulation() {
  updateHighwayDisplay();

  document.getElementById('add-car').addEventListener('click', addCar);
  document.getElementById('advance-cars').addEventListener('click', advanceCars);
  document.getElementById('simulate-jam').addEventListener('click', simulateJam);
  document.getElementById('adjust-limits').addEventListener('click', adjustLimits);
  document.getElementById('reset-highway').addEventListener('click', resetHighway);
}

function addCar() {
  const firstSector = highwayState.sectors[0];
  if (firstSector.cars.length < firstSector.limit) {
    firstSector.cars.push(++highwayState.carId);
    updateHighwayDisplay();
    updateInsights();
  } else {
    showInsight('🚨 Setor de entrada lotado! Isso causará atrasos. Experimente ajustar os limites ou avançar os veículos.');
  }
}

function advanceCars() {
  // Move cars from right to left (backwards through sectors)
  for (let i = highwayState.sectors.length - 2; i >= 0; i--) {
    const currentSector = highwayState.sectors[i];
    const nextSector = highwayState.sectors[i + 1];
    
    if (currentSector.cars.length > 0 && nextSector.cars.length < nextSector.limit) {
      const car = currentSector.cars.shift();
      nextSector.cars.push(car);
    }
  }
  
  updateHighwayDisplay();
  updateInsights();
}

function simulateJam() {
  // Add multiple cars to create congestion
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      if (highwayState.sectors[0].cars.length < highwayState.sectors[0].limit) {
        addCar();
      }
    }, i * 300);
  }
  showInsight('🚗 Simulando congestionamento... Observe como o excesso de WIP afeta o fluxo! Tente avançar os veículos para ver o impacto.');
}

function adjustLimits() {
  const newLimit = prompt('Digite o novo limite para os setores intermediários (atual: 2):', '3');
  if (newLimit && !isNaN(newLimit) && parseInt(newLimit) > 0) {
    const limit = parseInt(newLimit);
    highwayState.sectors[1].limit = limit;
    highwayState.sectors[2].limit = limit;
    updateHighwayDisplay();
    showInsight(`🔧 Limites ajustados para ${limit}. Observe como isso afeta a capacidade e o fluxo do sistema!`);
  }
}

function resetHighway() {
  highwayState.sectors.forEach(sector => {
    sector.cars = [];
  });
  highwayState.carId = 0;
  // Reset limits to original values
  highwayState.sectors[1].limit = 2;
  highwayState.sectors[2].limit = 2;
  updateHighwayDisplay();
  showInsight('🔄 Rodovia resetada! Comece uma nova simulação para experimentar diferentes cenários.');
}

function updateHighwayDisplay() {
  highwayState.sectors.forEach((sector, index) => {
    const sectorElement = document.querySelector(`[data-sector="${index}"]`);
    const carsContainer = sectorElement.querySelector('.cars-container');
    const capacitySpan = sectorElement.querySelector('.capacity');
    
    // Update capacity display
    const limit = sector.limit === Infinity ? '∞' : sector.limit;
    capacitySpan.textContent = `${sector.cars.length}/${limit}`;
    
    // Clear and rebuild cars
    carsContainer.innerHTML = '';
    sector.cars.forEach(() => {
      const carDiv = document.createElement('div');
      carDiv.className = 'car';
      carsContainer.appendChild(carDiv);
    });
    
    // Add congestion styling
    if (sector.cars.length >= sector.limit * 0.8 && sector.limit !== Infinity) {
      sectorElement.classList.add('congested');
    } else {
      sectorElement.classList.remove('congested');
    }
  });
}

function updateInsights() {
  const totalCars = highwayState.sectors.reduce((sum, sector) => sum + sector.cars.length, 0);
  const throughput = highwayState.sectors[3].cars.length;
  
  let insight = `🚗 ${totalCars} veículos no sistema (WIP). `;
  
  if (throughput > 0) {
    insight += `${throughput} já saíram (throughput). `;
  }
  
  const congested = highwayState.sectors.some(sector => 
    sector.cars.length >= sector.limit * 0.8 && sector.limit !== Infinity
  );
  
  if (congested) {
    insight += 'Há congestionamento - considere ajustar limites ou melhorar o fluxo!';
  } else {
    insight += 'Fluxo está saudável!';
  }
  
  showInsight(insight);
}

function showInsight(message) {
  const insightsElement = document.getElementById('highway-insights');
  insightsElement.innerHTML = `<p>💡 <strong>Insight:</strong> ${message}</p>`;
}

// Initialize metrics
function initializeMetrics() {
  document.querySelectorAll('.metric-card').forEach(card => {
    const metricKey = card.dataset.metric;
    const description = kanbanData.metrics[metricKey];
    const descriptionElement = card.querySelector('.metric-description');
    if (descriptionElement && description) {
      descriptionElement.textContent = description;
    }
  });
}

// Initialize cadences - FIXED TO PROPERLY FORMAT TABLE
function initializeCadences() {
  const cadencesBody = document.getElementById('cadences-body');
  
  // Clear any existing content
  cadencesBody.innerHTML = '';
  
  // Create properly formatted table rows
  kanbanData.cadence_levels.forEach(cadence => {
    const row = document.createElement('tr');
    
    // Create level cell with proper styling
    const levelCell = document.createElement('td');
    const levelSpan = document.createElement('span');
    levelSpan.className = `cadence-level ${cadence.level.toLowerCase().replace(' ', '-')}`;
    levelSpan.textContent = cadence.level;
    levelCell.appendChild(levelSpan);
    
    // Create characteristics cell
    const characteristicsCell = document.createElement('td');
    characteristicsCell.textContent = cadence.characteristics;
    
    // Create example cell
    const exampleCell = document.createElement('td');
    exampleCell.textContent = cadence.example;
    
    // Append cells to row
    row.appendChild(levelCell);
    row.appendChild(characteristicsCell);
    row.appendChild(exampleCell);
    
    // Append row to table body
    cadencesBody.appendChild(row);
  });
}

// Initialize STATIK wizard
function initializeStatik() {
  const wizard = document.getElementById('statik-wizard');
  
  // Clear existing content
  wizard.innerHTML = '';
  
  kanbanData.statik_steps.forEach((step, index) => {
    const stepDiv = document.createElement('div');
    stepDiv.className = 'statik-step';
    stepDiv.dataset.step = step.step;
    
    if (index === 0) {
      stepDiv.classList.add('active');
    }
    
    stepDiv.innerHTML = `
      <h3>Passo ${step.step}: ${step.title}</h3>
      <p>${step.description}</p>
      <textarea class="form-control" placeholder="Descreva suas ideias e reflexões para este passo..." rows="4"></textarea>
    `;
    
    wizard.appendChild(stepDiv);
  });

  document.getElementById('statik-next').addEventListener('click', nextStatikStep);
  document.getElementById('statik-prev').addEventListener('click', prevStatikStep);
  
  updateStatikProgress();
}

function nextStatikStep() {
  if (currentStatikStep < 8) {
    document.querySelector(`[data-step="${currentStatikStep}"]`).classList.remove('active');
    currentStatikStep++;
    document.querySelector(`[data-step="${currentStatikStep}"]`).classList.add('active');
    updateStatikProgress();
    updateStatikButtons();
  }
}

function prevStatikStep() {
  if (currentStatikStep > 1) {
    document.querySelector(`[data-step="${currentStatikStep}"]`).classList.remove('active');
    currentStatikStep--;
    document.querySelector(`[data-step="${currentStatikStep}"]`).classList.add('active');
    updateStatikProgress();
    updateStatikButtons();
  }
}

function updateStatikProgress() {
  const progress = (currentStatikStep / 8) * 100;
  document.getElementById('statik-progress').style.width = `${progress}%`;
  document.getElementById('current-step').textContent = currentStatikStep;
}

function updateStatikButtons() {
  const prevBtn = document.getElementById('statik-prev');
  const nextBtn = document.getElementById('statik-next');
  
  prevBtn.disabled = currentStatikStep === 1;
  
  if (currentStatikStep === 8) {
    nextBtn.textContent = 'Finalizar STATIK';
    nextBtn.onclick = function() {
      alert('🎉 Parabéns! Você completou o processo STATIK. Agora você tem uma base sólida para implementar seu sistema Kanban de forma evolutiva e consciente!');
      // Reset to first step
      currentStatikStep = 1;
      document.querySelector(`[data-step="8"]`).classList.remove('active');
      document.querySelector(`[data-step="1"]`).classList.add('active');
      updateStatikProgress();
      updateStatikButtons();
    };
  } else {
    nextBtn.textContent = 'Próximo';
    nextBtn.onclick = nextStatikStep;
  }
}

// Initialize quiz
function initializeQuiz() {
  document.getElementById('start-quiz').addEventListener('click', startQuiz);
}

function startQuiz() {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.classList.remove('hidden');
  quizState.currentQuestion = 0;
  quizState.score = 0;
  displayQuestion();
}

function displayQuestion() {
  const quizContainer = document.getElementById('quiz-container');
  const question = quizState.questions[quizState.currentQuestion];
  
  quizContainer.innerHTML = `
    <div class="quiz-question">
      <h4>Pergunta ${quizState.currentQuestion + 1} de ${quizState.questions.length}</h4>
      <p>${question.question}</p>
      <div class="quiz-options">
        ${question.options.map((option, index) => 
          `<div class="quiz-option" onclick="selectAnswer(${index})">${option}</div>`
        ).join('')}
      </div>
    </div>
  `;
}

function selectAnswer(selectedIndex) {
  const question = quizState.questions[quizState.currentQuestion];
  const options = document.querySelectorAll('.quiz-option');
  
  options.forEach((option, index) => {
    if (index === question.correct) {
      option.classList.add('correct');
    } else if (index === selectedIndex && index !== question.correct) {
      option.classList.add('incorrect');
    }
    option.onclick = null; // Disable further clicks
  });
  
  if (selectedIndex === question.correct) {
    quizState.score++;
  }
  
  setTimeout(() => {
    quizState.currentQuestion++;
    if (quizState.currentQuestion < quizState.questions.length) {
      displayQuestion();
    } else {
      showQuizResult();
    }
  }, 1500);
}

function showQuizResult() {
  const quizContainer = document.getElementById('quiz-container');
  const percentage = Math.round((quizState.score / quizState.questions.length) * 100);
  
  let message = '';
  let emoji = '';
  if (percentage >= 80) {
    message = 'Excelente! Você domina os conceitos do Kanban!';
    emoji = '🎉';
  } else if (percentage >= 60) {
    message = 'Bom trabalho! Continue estudando para aprimorar seus conhecimentos.';
    emoji = '👍';
  } else {
    message = 'Continue estudando! Revise os conceitos e tente novamente.';
    emoji = '📚';
  }
  
  quizContainer.innerHTML = `
    <div class="quiz-result">
      <h4>Resultado do Quiz</h4>
      <p>Você acertou ${quizState.score} de ${quizState.questions.length} perguntas (${percentage}%)</p>
      <p>${emoji} ${message}</p>
      <button class="btn btn--primary" onclick="startQuiz()">Tentar Novamente</button>
    </div>
  `;
}

// Initialize download links
function initializeDownloads() {
  document.querySelectorAll('.download-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const fileName = this.textContent;
      alert(`📄 Download simulado: ${fileName}\n\nEm uma implementação real, este seria um link para download do arquivo.`);
    });
  });
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Global functions for quiz (needed for onclick handlers)
window.selectAnswer = selectAnswer;
window.startQuiz = startQuiz;
