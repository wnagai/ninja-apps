// Application data
const techniques = [
  {
    "id": "zero-shot",
    "name": "Zero-Shot Prompting",
    "description": "O modelo executa tarefas sem exemplos prévios, baseando-se apenas em instruções diretas",
    "applications": ["Classificação de texto", "Análise de sentimento", "Tradução básica", "Perguntas e respostas gerais"],
    "scenarios": ["Quando não há exemplos disponíveis", "Tarefas simples", "Teste rápido de capacidades"],
    "example": "Classifique o sentimento: 'O filme foi incrível!' → Positivo",
    "complexity": "Baixa",
    "accuracy": "Média",
    "efficiency": "Alta",
    "token_usage": "Muito Baixo",
    "icon": "⚡",
    "color": "#4CAF50"
  },
  {
    "id": "few-shot",
    "name": "Few-Shot Prompting", 
    "description": "Fornece alguns exemplos para guiar o modelo na tarefa desejada",
    "applications": ["Formatação específica", "Tarefas especializadas", "Geração de código", "Categorização complexa"],
    "scenarios": ["Quando precisamos de consistência", "Domínios especializados", "Formato específico de saída"],
    "example": "Texto: 'Bom!' // Positivo\\nTexto: 'Ruim!' // Negativo\\nTexto: 'Ótimo!' // ?",
    "complexity": "Baixa",
    "accuracy": "Alta", 
    "efficiency": "Média",
    "token_usage": "Médio",
    "icon": "📝",
    "color": "#2196F3"
  },
  {
    "id": "chain-of-thought",
    "name": "Chain-of-Thought (CoT)",
    "description": "O modelo mostra seu raciocínio passo a passo para chegar à resposta final",
    "applications": ["Problemas matemáticos", "Raciocínio lógico", "Análise complexa", "Resolução de problemas"],
    "scenarios": ["Problemas multi-etapas", "Quando transparência é importante", "Tarefas de raciocínio complexo"],
    "example": "Jason tinha 20 balas, deu algumas para Denny, agora tem 12. Vamos pensar passo a passo: 20 - x = 12, então x = 8.",
    "complexity": "Média",
    "accuracy": "Muito Alta",
    "efficiency": "Baixa",
    "token_usage": "Alto",
    "icon": "🔗",
    "color": "#9C27B0"
  },
  {
    "id": "chain-of-drafts",
    "name": "Chain-of-Drafts (CoD)",
    "description": "Raciocínio minimalista, focando apenas nos passos essenciais, cada etapa com até 5 palavras",
    "applications": ["Raciocínio matemático", "Lógica", "Aplicações em tempo real", "Tarefas que exigem eficiência", "Sistemas embarcados"],
    "scenarios": ["Quando eficiência é crucial", "Recursos limitados", "Aplicações de produção", "Sistemas de baixa latência"],
    "example": "Jason: 20 - x = 12; x = 8 ####",
    "complexity": "Média",
    "accuracy": "Alta",
    "efficiency": "Muito Alta",
    "token_usage": "Muito Baixo",
    "icon": "⚡",
    "color": "#FF5722",
    "isNew": true
  },
  {
    "id": "tree-of-thoughts",
    "name": "Tree-of-Thoughts (ToT)",
    "description": "Explora múltiplos caminhos de raciocínio simultaneamente, como uma árvore de decisões",
    "applications": ["Problemas complexos", "Planejamento estratégico", "Escrita criativa", "Jogos", "Tomada de decisão"],
    "scenarios": ["Múltiplas abordagens válidas", "Problemas criativos", "Planejamento complexo"],
    "example": "Explorar 3 estratégias diferentes: A) Abordagem direta B) Método iterativo C) Solução criativa",
    "complexity": "Alta",
    "accuracy": "Muito Alta",
    "efficiency": "Baixa",
    "token_usage": "Muito Alto",
    "icon": "🌳",
    "color": "#795548"
  },
  {
    "id": "role-based",
    "name": "Role-Based Prompting",
    "description": "Atribui um papel específico ao modelo para guiar suas respostas",
    "applications": ["Consultoria especializada", "Ensino", "Atendimento ao cliente", "Criação de conteúdo especializado"],
    "scenarios": ["Expertise específica necessária", "Tom particular de resposta", "Contexto profissional"],
    "example": "Você é um médico. Explique os sintomas da gripe de forma simples.",
    "complexity": "Baixa",
    "accuracy": "Alta",
    "efficiency": "Alta",
    "token_usage": "Baixo",
    "icon": "👤",
    "color": "#FF9800"
  },
  {
    "id": "meta-prompting",
    "name": "Meta-Prompting",
    "description": "Usa o próprio modelo para gerar e otimizar prompts",
    "applications": ["Otimização de prompts", "Automação de testes", "Melhoria iterativa", "Desenvolvimento de prompts"],
    "scenarios": ["Quando precisamos otimizar prompts", "Desenvolvimento iterativo", "Automação de qualidade"],
    "example": "Gere 5 variações do prompt 'Analise este texto' para melhorar os resultados.",
    "complexity": "Alta",
    "accuracy": "Muito Alta",
    "efficiency": "Média",
    "token_usage": "Alto",
    "icon": "🔄",
    "color": "#607D8B"
  },
  {
    "id": "self-refine",
    "name": "Self-Refine Prompting",
    "description": "Melhoria iterativa das respostas através de auto-avaliação e refinamento",
    "applications": ["Escrita criativa", "Análise crítica", "Melhoria de qualidade", "Revisão de conteúdo"],
    "scenarios": ["Quando qualidade é prioritária", "Processos iterativos", "Refinamento de resultados"],
    "example": "Escreva um parágrafo, depois critique-o e melhore-o em 3 iterações.",
    "complexity": "Alta",
    "accuracy": "Muito Alta",
    "efficiency": "Baixa",
    "token_usage": "Alto",
    "icon": "✨",
    "color": "#E91E63"
  },
  {
    "id": "generated-knowledge",
    "name": "Generated Knowledge Prompting",
    "description": "Incorpora conhecimento contextual gerado pelo próprio modelo",
    "applications": ["QA com contexto", "Síntese de informações", "Análise baseada em conhecimento"],
    "scenarios": ["Quando contexto adicional é necessário", "Tarefas de conhecimento intensivo"],
    "example": "Primeiro gere fatos sobre energia solar, depois responda sobre sua viabilidade.",
    "complexity": "Alta",
    "accuracy": "Muito Alta",
    "efficiency": "Média",
    "token_usage": "Alto",
    "icon": "🧠",
    "color": "#3F51B5"
  },
  {
    "id": "rag",
    "name": "Retrieval-Augmented Generation (RAG)",
    "description": "Combina recuperação de informações com geração de texto",
    "applications": ["Sistemas de QA", "Documentação", "Suporte técnico", "Pesquisa automatizada"],
    "scenarios": ["Informações atualizadas necessárias", "Base de conhecimento específica"],
    "example": "Busque informações sobre o produto X e responda sobre suas especificações.",
    "complexity": "Muito Alta",
    "accuracy": "Muito Alta",
    "efficiency": "Média",
    "token_usage": "Alto",
    "icon": "🔍",
    "color": "#009688"
  },
  {
    "id": "prompt-chaining",
    "name": "Prompt Chaining",
    "description": "Workflows complexos em múltiplas etapas encadeadas",
    "applications": ["Workflows complexos", "Processamento de documentos", "Análise multi-etapas"],
    "scenarios": ["Tarefas complexas divididas", "Pipelines de processamento"],
    "example": "Etapa 1: Extrair dados → Etapa 2: Analisar → Etapa 3: Gerar relatório",
    "complexity": "Alta",
    "accuracy": "Alta",
    "efficiency": "Média",
    "token_usage": "Alto",
    "icon": "⛓️",
    "color": "#795548"
  },
  {
    "id": "react",
    "name": "ReAct (Reasoning + Acting)",
    "description": "Alterna entre raciocínio e execução de ações externas",
    "applications": ["Agentes autônomos", "Integração com APIs", "Busca em tempo real", "Automação"],
    "scenarios": ["Acesso a dados externos necessário", "Ações em sistemas externos"],
    "example": "Pensamento: Preciso da cotação → Ação: Buscar API → Resposta: Analisar dados",
    "complexity": "Muito Alta",
    "accuracy": "Alta",
    "efficiency": "Média",
    "token_usage": "Alto",
    "icon": "🤖",
    "color": "#FF6F00"
  }
];

const domains = [
  {
    "name": "Educação",
    "icon": "🎓",
    "applications": ["Tutoria personalizada", "Geração de exercícios", "Planos de aula automatizados"],
    "best_techniques": ["Role-Based", "Chain-of-Thought", "Few-Shot"],
    "examples": [
      "Tutoria matemática com Chain-of-Thought",
      "Geração de exercícios com Few-Shot",
      "Professor virtual com Role-Based"
    ]
  },
  {
    "name": "Saúde",
    "icon": "🏥",
    "applications": ["Análise de sintomas", "Suporte à decisão médica", "Educação de pacientes"],
    "best_techniques": ["Role-Based", "Generated Knowledge", "Chain-of-Thought"],
    "examples": [
      "Consulta médica virtual",
      "Análise de prontuários",
      "Educação sobre medicamentos"
    ]
  },
  {
    "name": "Negócios",
    "icon": "💼",
    "applications": ["Atendimento ao cliente", "Análise de dados", "Relatórios automatizados"],
    "best_techniques": ["Role-Based", "RAG", "Chain-of-Drafts"],
    "examples": [
      "Chatbot de suporte",
      "Análise de vendas",
      "Relatórios executivos"
    ]
  },
  {
    "name": "Tecnologia",
    "icon": "💻",
    "applications": ["Geração de código", "Debugging", "Documentação técnica"],
    "best_techniques": ["Few-Shot", "Chain-of-Thought", "Meta-Prompting"],
    "examples": [
      "Assistente de programação",
      "Revisão de código",
      "Documentação automática"
    ]
  },
  {
    "name": "Criatividade",
    "icon": "🎨",
    "applications": ["Escrita criativa", "Geração de ideias", "Campanhas publicitárias"],
    "best_techniques": ["Tree-of-Thoughts", "Self-Refine", "Role-Based"],
    "examples": [
      "Brainstorming criativo",
      "Roteiros publicitários",
      "Histórias interativas"
    ]
  },
  {
    "name": "Pesquisa",
    "icon": "🔬",
    "applications": ["Síntese de literatura", "Análise de dados", "Geração de hipóteses"],
    "best_techniques": ["RAG", "Generated Knowledge", "Meta-Prompting"],
    "examples": [
      "Revisão sistemática",
      "Análise estatística",
      "Hipóteses de pesquisa"
    ]
  }
];

const promptTemplates = {
  "zero-shot": "Tarefa: {task}\n\nInstrução: {instruction}",
  "few-shot": "Tarefa: {task}\n\nExemplos:\n{examples}\n\nAgora faça: {instruction}",
  "chain-of-thought": "Tarefa: {task}\n\nVamos pensar passo a passo:\n{instruction}",
  "chain-of-drafts": "Tarefa: {task}\n\nPense passo a passo, mas mantenha apenas um rascunho mínimo para cada etapa, com 5 palavras no máximo. Retorne a resposta ao final após ####.\n\n{instruction}",
  "role-based": "Você é um {role}. Sua tarefa é {task}.\n\n{instruction}",
  "tree-of-thoughts": "Tarefa: {task}\n\nExplore múltiplas abordagens possíveis:\n1. Abordagem A: ...\n2. Abordagem B: ...\n3. Abordagem C: ...\n\nAvalie e escolha a melhor: {instruction}"
};

// Global state
let filteredTechniques = [...techniques];
let selectedTechniquesForComparison = [];

// DOM elements
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const searchInput = document.getElementById('search-input');
const complexityFilter = document.getElementById('complexity-filter');
const efficiencyFilter = document.getElementById('efficiency-filter');
const techniquesGrid = document.getElementById('techniques-grid');
const domainsGrid = document.getElementById('domains-grid');
const techniqueCheckboxes = document.getElementById('technique-checkboxes');
const comparisonTableBody = document.getElementById('comparison-table-body');
const techniqueSelect = document.getElementById('technique-select');
const taskTypeSelect = document.getElementById('task-type');
const contextInput = document.getElementById('context-input');
const roleInput = document.getElementById('role-input');
const generateBtn = document.getElementById('generate-btn');
const generatedPrompt = document.getElementById('generated-prompt');
const copyBtn = document.getElementById('copy-btn');
const tooltip = document.getElementById('tooltip');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeTabs();
  renderTechniques();
  renderDomains();
  initializeComparison();
  initializeGenerator();
  initializeSearch();
  initializeFilters();
  initializeTooltips();
});

// Tab functionality
function initializeTabs() {
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.dataset.tab;
      switchTab(tabId);
    });
  });
}

function switchTab(tabId) {
  // Update button states
  tabButtons.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
  
  // Update content visibility
  tabContents.forEach(content => content.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

// Render techniques
function renderTechniques() {
  techniquesGrid.innerHTML = '';
  
  filteredTechniques.forEach(technique => {
    const card = createTechniqueCard(technique);
    techniquesGrid.appendChild(card);
  });
}

function createTechniqueCard(technique) {
  const card = document.createElement('div');
  card.className = `technique-card${technique.isNew ? ' technique-card--new' : ''}`;
  
  const applicationsHtml = technique.applications.map(app => 
    `<span class="application-tag">${app}</span>`
  ).join('');
  
  card.innerHTML = `
    <div class="technique-header">
      <div class="technique-icon" style="background-color: ${technique.color}20;">
        ${technique.icon}
      </div>
      <h3 class="technique-name">${technique.name}</h3>
    </div>
    
    <p class="technique-description">${technique.description}</p>
    
    <div class="technique-metrics">
      <div class="metric">
        <span class="metric-label">Complexidade:</span>
        <span class="metric-value ${getMetricClass(technique.complexity)}">${technique.complexity}</span>
      </div>
      <div class="metric">
        <span class="metric-label">Precisão:</span>
        <span class="metric-value ${getMetricClass(technique.accuracy)}">${technique.accuracy}</span>
      </div>
      <div class="metric">
        <span class="metric-label">Eficiência:</span>
        <span class="metric-value ${getMetricClass(technique.efficiency)}">${technique.efficiency}</span>
      </div>
      <div class="metric">
        <span class="metric-label">Tokens:</span>
        <span class="metric-value ${getTokenClass(technique.token_usage)}">${technique.token_usage}</span>
      </div>
    </div>
    
    <div class="technique-example">
      <strong>Exemplo:</strong><br>
      ${technique.example}
    </div>
    
    <div class="technique-applications">
      <strong>Aplicações:</strong>
      <div class="applications-list">
        ${applicationsHtml}
      </div>
    </div>
  `;
  
  return card;
}

function getMetricClass(value) {
  switch(value) {
    case 'Muito Alta':
    case 'Alta': return 'high';
    case 'Média': return 'medium';
    case 'Baixa': return 'low';
    default: return '';
  }
}

function getTokenClass(value) {
  switch(value) {
    case 'Muito Baixo':
    case 'Baixo': return 'high';
    case 'Médio': return 'medium';
    case 'Alto':
    case 'Muito Alto': return 'low';
    default: return '';
  }
}

// Render domains
function renderDomains() {
  domainsGrid.innerHTML = '';
  
  domains.forEach(domain => {
    const card = createDomainCard(domain);
    domainsGrid.appendChild(card);
  });
}

function createDomainCard(domain) {
  const card = document.createElement('div');
  card.className = 'domain-card';
  
  const applicationsHtml = domain.applications.map(app => 
    `<li>${app}</li>`
  ).join('');
  
  const examplesHtml = domain.examples.map(example => 
    `<li>${example}</li>`
  ).join('');
  
  const techniquesHtml = domain.best_techniques.map(tech => 
    `<span class="technique-badge">${tech}</span>`
  ).join('');
  
  card.innerHTML = `
    <div class="domain-header">
      <div class="domain-icon">${domain.icon}</div>
      <h3 class="domain-name">${domain.name}</h3>
    </div>
    
    <div class="domain-section">
      <h4>Aplicações:</h4>
      <ul class="domain-list">
        ${applicationsHtml}
      </ul>
    </div>
    
    <div class="domain-section">
      <h4>Técnicas Recomendadas:</h4>
      <div class="best-techniques">
        ${techniquesHtml}
      </div>
    </div>
    
    <div class="domain-section">
      <h4>Exemplos Práticos:</h4>
      <ul class="domain-list">
        ${examplesHtml}
      </ul>
    </div>
  `;
  
  return card;
}

// Initialize comparison
function initializeComparison() {
  renderTechniqueCheckboxes();
  updateComparisonTable();
}

function renderTechniqueCheckboxes() {
  techniqueCheckboxes.innerHTML = '';
  
  techniques.forEach(technique => {
    const checkboxItem = document.createElement('div');
    checkboxItem.className = 'checkbox-item';
    
    checkboxItem.innerHTML = `
      <input type="checkbox" id="checkbox-${technique.id}" value="${technique.id}">
      <label for="checkbox-${technique.id}">
        ${technique.icon} ${technique.name}
      </label>
    `;
    
    const checkbox = checkboxItem.querySelector('input');
    checkbox.addEventListener('change', handleTechniqueSelection);
    
    techniqueCheckboxes.appendChild(checkboxItem);
  });
}

function handleTechniqueSelection(event) {
  const techniqueId = event.target.value;
  
  if (event.target.checked) {
    if (selectedTechniquesForComparison.length < 6) {
      selectedTechniquesForComparison.push(techniqueId);
    } else {
      event.target.checked = false;
      showTooltip(event.target, 'Máximo de 6 técnicas para comparação');
    }
  } else {
    selectedTechniquesForComparison = selectedTechniquesForComparison.filter(id => id !== techniqueId);
  }
  
  updateComparisonTable();
}

function updateComparisonTable() {
  comparisonTableBody.innerHTML = '';
  
  selectedTechniquesForComparison.forEach(techniqueId => {
    const technique = techniques.find(t => t.id === techniqueId);
    if (technique) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            ${technique.icon} <strong>${technique.name}</strong>
            ${technique.isNew ? '<span class="status status--error">NOVO</span>' : ''}
          </div>
        </td>
        <td><span class="metric-value ${getMetricClass(technique.complexity)}">${technique.complexity}</span></td>
        <td><span class="metric-value ${getMetricClass(technique.accuracy)}">${technique.accuracy}</span></td>
        <td><span class="metric-value ${getMetricClass(technique.efficiency)}">${technique.efficiency}</span></td>
        <td><span class="metric-value ${getTokenClass(technique.token_usage)}">${technique.token_usage}</span></td>
      `;
      comparisonTableBody.appendChild(row);
    }
  });
}

// Initialize generator
function initializeGenerator() {
  // Populate technique select
  techniqueSelect.innerHTML = '<option value="">Escolha uma técnica...</option>';
  techniques.forEach(technique => {
    const option = document.createElement('option');
    option.value = technique.id;
    option.textContent = `${technique.icon} ${technique.name}`;
    techniqueSelect.appendChild(option);
  });
  
  // Add event listeners
  generateBtn.addEventListener('click', generatePrompt);
  copyBtn.addEventListener('click', copyToClipboard);
}

function generatePrompt() {
  const selectedTechnique = techniqueSelect.value;
  const taskType = taskTypeSelect.value;
  const context = contextInput.value.trim();
  const role = roleInput.value.trim();
  
  if (!selectedTechnique || !taskType || !context) {
    showTooltip(generateBtn, 'Preencha todos os campos obrigatórios');
    return;
  }
  
  const technique = techniques.find(t => t.id === selectedTechnique);
  let template = promptTemplates[selectedTechnique] || promptTemplates['zero-shot'];
  
  // Replace placeholders
  let prompt = template
    .replace('{task}', taskType)
    .replace('{instruction}', context);
  
  if (selectedTechnique === 'role-based' && role) {
    prompt = prompt.replace('{role}', role);
  } else if (selectedTechnique === 'role-based') {
    prompt = prompt.replace('{role}', 'especialista');
  }
  
  if (selectedTechnique === 'few-shot') {
    prompt = prompt.replace('{examples}', 'Exemplo 1: [Insira exemplo]\nExemplo 2: [Insira exemplo]');
  }
  
  // Add technique-specific enhancements
  prompt = enhancePrompt(prompt, selectedTechnique, technique);
  
  generatedPrompt.textContent = prompt;
  copyBtn.style.display = 'block';
}

function enhancePrompt(prompt, techniqueId, technique) {
  const enhancements = {
    'chain-of-drafts': '\n\nLembre-se: mantenha cada etapa do raciocínio com máximo 5 palavras. Seja conciso e direto.',
    'tree-of-thoughts': '\n\nExplore pelo menos 3 abordagens diferentes antes de decidir.',
    'self-refine': '\n\nApós sua resposta inicial, critique-a e forneça uma versão melhorada.',
    'meta-prompting': '\n\nConsidere como este prompt poderia ser otimizado para melhores resultados.',
    'react': '\n\nUse o formato: Pensamento: [seu raciocínio] → Ação: [ação necessária] → Observação: [resultado]'
  };
  
  return prompt + (enhancements[techniqueId] || '');
}

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(generatedPrompt.textContent);
    copyBtn.textContent = '✅ Copiado!';
    copyBtn.classList.add('btn--success');
    
    setTimeout(() => {
      copyBtn.textContent = '📋 Copiar';
      copyBtn.classList.remove('btn--success');
    }, 2000);
  } catch (err) {
    console.error('Erro ao copiar:', err);
    showTooltip(copyBtn, 'Erro ao copiar para a área de transferência');
  }
}

// Search functionality
function initializeSearch() {
  searchInput.addEventListener('input', handleSearch);
}

function handleSearch() {
  const query = searchInput.value.toLowerCase().trim();
  applyFilters();
}

// Filter functionality
function initializeFilters() {
  complexityFilter.addEventListener('change', applyFilters);
  efficiencyFilter.addEventListener('change', applyFilters);
}

function applyFilters() {
  const query = searchInput.value.toLowerCase().trim();
  const complexityValue = complexityFilter.value;
  const efficiencyValue = efficiencyFilter.value;
  
  filteredTechniques = techniques.filter(technique => {
    const matchesSearch = !query || 
      technique.name.toLowerCase().includes(query) ||
      technique.description.toLowerCase().includes(query) ||
      technique.applications.some(app => app.toLowerCase().includes(query));
    
    const matchesComplexity = !complexityValue || technique.complexity === complexityValue;
    const matchesEfficiency = !efficiencyValue || technique.efficiency === efficiencyValue;
    
    return matchesSearch && matchesComplexity && matchesEfficiency;
  });
  
  renderTechniques();
}

// Tooltip functionality
function initializeTooltips() {
  document.addEventListener('mouseover', handleTooltipShow);
  document.addEventListener('mouseout', handleTooltipHide);
}

function handleTooltipShow(event) {
  const element = event.target;
  const tooltipText = element.getAttribute('data-tooltip');
  
  if (tooltipText) {
    tooltip.textContent = tooltipText;
    tooltip.classList.add('show');
    updateTooltipPosition(event);
  }
}

function handleTooltipHide(event) {
  tooltip.classList.remove('show');
}

function updateTooltipPosition(event) {
  const rect = tooltip.getBoundingClientRect();
  const x = event.clientX - rect.width / 2;
  const y = event.clientY - rect.height - 10;
  
  tooltip.style.left = Math.max(10, Math.min(x, window.innerWidth - rect.width - 10)) + 'px';
  tooltip.style.top = Math.max(10, y) + 'px';
}

function showTooltip(element, message) {
  tooltip.textContent = message;
  tooltip.classList.add('show');
  
  const rect = element.getBoundingClientRect();
  tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
  tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
  
  setTimeout(() => {
    tooltip.classList.remove('show');
  }, 3000);
}