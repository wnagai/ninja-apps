// ===== CONFIGURAÇÃO E DADOS =====
const STORAGE_KEY = 'ics_resultados';
const USER_KEY = 'ics_usuarios';

const questoesScrum = [
    {
        id: 1,
        conceito: "Fundamentos do Scrum",
        pergunta: "O que melhor descreve o Scrum como framework?",
        alternativas: [
            { id: "A", texto: "Um método linear e sequencial de desenvolvimento." },
            { id: "B", texto: "Um modelo prescritivo que define etapas fixas." },
            { id: "C", texto: "Uma estrutura leve que permite gerar valor de forma adaptativa." },
            { id: "D", texto: "Um conjunto de boas práticas voltado exclusivamente para software." }
        ],
        correta: "C",
        pontos: 10,
        bloom: {
            nivel: "Compreender",
            justificativa: "Exige entendimento conceitual do que é o Scrum, distinguindo suas características principais de outros frameworks."
        }
    },
    {
        id: 2,
        conceito: "Fundamentos do Scrum",
        pergunta: "Quais são os três pilares que sustentam a teoria do Scrum?",
        alternativas: [
            { id: "A", texto: "Planejamento, Execução, Controle." },
            { id: "B", texto: "Transparência, Inspeção, Adaptação." },
            { id: "C", texto: "Eficiência, Qualidade, Agilidade." },
            { id: "D", texto: "Iteratividade, Colaboração, Feedback." }
        ],
        correta: "B",
        pontos: 10,
        bloom: {
            nivel: "Lembrar",
            justificativa: "Requer recordação direta dos três pilares fundamentais do empirismo no Scrum."
        }
    },
    {
        id: 3,
        conceito: "Fundamentos do Scrum",
        pergunta: "Qual é o objetivo principal do Scrum?",
        alternativas: [
            { id: "A", texto: "Reduzir custos e tempo em projetos previsíveis." },
            { id: "B", texto: "Prover uma estrutura adaptativa para resolver problemas complexos." },
            { id: "C", texto: "Criar documentação detalhada para requisitos de projeto." },
            { id: "D", texto: "Substituir todas as abordagens existentes de gestão." }
        ],
        correta: "B",
        pontos: 10,
        bloom: {
            nivel: "Compreender",
            justificativa: "Exige compreensão do propósito central do Scrum como framework para lidar com complexidade."
        }
    },
    {
        id: 4,
        conceito: "Fundamentos do Scrum",
        pergunta: "O que caracteriza o empirismo no contexto do Scrum?",
        alternativas: [
            { id: "A", texto: "Confiança total no planejamento antecipado." },
            { id: "B", texto: "Tomada de decisões baseada em experiências e observações." },
            { id: "C", texto: "Execução controlada por diretrizes externas." },
            { id: "D", texto: "Seguimento de processos normativos." }
        ],
        correta: "B",
        pontos: 10,
        bloom: {
            nivel: "Compreender",
            justificativa: "Requer entendimento do conceito de empirismo e sua aplicação no contexto ágil."
        }
    },
    {
        id: 5,
        conceito: "Fundamentos do Scrum",
        pergunta: "Qual das opções representa corretamente os valores do Scrum?",
        alternativas: [
            { id: "A", texto: "Ordem, Eficiência, Controle, Rapidez, Precisão." },
            { id: "B", texto: "Comprometimento, Coragem, Foco, Abertura, Respeito." },
            { id: "C", texto: "Agilidade, Planejamento, Dedicação, Tecnologia, Visão." },
            { id: "D", texto: "Determinação, Objetividade, Hierarquia, Praticidade, Resultado." }
        ],
        correta: "B",
        pontos: 10,
        bloom: {
            nivel: "Lembrar",
            justificativa: "Recordação direta dos cinco valores oficiais do Scrum definidos no Scrum Guide."
        }
    },
    {
        id: 6,
        conceito: "Equipe Scrum",
        pergunta: "Quais são os papéis integrantes da Equipe Scrum conforme o Scrum Guide 2020?",
        alternativas: [
            { id: "A", texto: "Product Owner, Desenvolvedores, Scrum Master." },
            { id: "B", texto: "Scrum Master, Gerente de Projeto, Desenvolvedores." },
            { id: "C", texto: "Product Owner, Scrum Master, Analista de Sistemas." },
            { id: "D", texto: "Desenvolvedores, Product Owner, Gerente de Produtos." }
        ],
        correta: "A",
        pontos: 10,
        bloom: {
            nivel: "Lembrar",
            justificativa: "Recordação dos três papéis formais definidos no Scrum Guide 2020."
        }
    },
    {
        id: 7,
        conceito: "Equipe Scrum",
        pergunta: "Qual a principal função dos Desenvolvedores na Equipe Scrum?",
        alternativas: [
            { id: "A", texto: "Definir requisitos do produto." },
            { id: "B", texto: "Especificar os entregáveis com stakeholders." },
            { id: "C", texto: "Criar incrementos utilizáveis a cada Sprint." },
            { id: "D", texto: "Validar metas estratégicas do produto." }
        ],
        correta: "C",
        pontos: 10,
        bloom: {
            nivel: "Compreender",
            justificativa: "Compreensão da responsabilidade central dos Desenvolvedores na criação de valor."
        }
    },
    {
        id: 8,
        conceito: "Equipe Scrum",
        pergunta: "O que caracteriza uma equipe Scrum como autogerenciável?",
        alternativas: [
            { id: "A", texto: "Toma decisões operacionais sob orientação da diretoria." },
            { id: "B", texto: "Depende da aprovação do Product Owner para cada tarefa." },
            { id: "C", texto: "Decide internamente quem faz o quê, quando e como." },
            { id: "D", texto: "Segue definições técnicas definidas por terceiros." }
        ],
        correta: "C",
        pontos: 10,
        bloom: {
            nivel: "Compreender",
            justificativa: "Entendimento do conceito de autogerenciamento e sua manifestação prática."
        }
    },
    {
        id: 9,
        conceito: "Equipe Scrum",
        pergunta: "O que significa multifuncionalidade em uma equipe Scrum?",
        alternativas: [
            { id: "A", texto: "Cada membro possui especialização restrita." },
            { id: "B", texto: "A equipe depende de especialistas externos para entregar valor." },
            { id: "C", texto: "Os membros têm habilidades para realizar todas as etapas de desenvolvimento." },
            { id: "D", texto: "Há um gerente que supervisiona todas as atividades da equipe." }
        ],
        correta: "C",
        pontos: 10,
        bloom: {
            nivel: "Compreender",
            justificativa: "Compreensão do conceito de equipe multifuncional e suas implicações práticas."
        }
    },
    {
        id: 10,
        conceito: "Equipe Scrum",
        pergunta: "Qual é o papel do Scrum Master na equipe?",
        alternativas: [
            { id: "A", texto: "Supervisionar as entregas técnicas do time." },
            { id: "B", texto: "Facilitar a compreensão e a aplicação do Scrum." },
            { id: "C", texto: "Aprovar as soluções propostas pelos desenvolvedores." },
            { id: "D", texto: "Priorizar os itens do Product Backlog." }
        ],
        correta: "B",
        pontos: 10,
        bloom: {
            nivel: "Compreender",
            justificativa: "Entendimento da função facilitadora e educativa do Scrum Master."
        }
    },
    {
        id: 11,
        conceito: "Papéis e Responsabilidades",
        pergunta: "O que é responsabilidade exclusiva do Product Owner?",
        alternativas: [
            { id: "A", texto: "Atualizar a Definição de Pronto." },
            { id: "B", texto: "Gerenciar o Product Backlog." },
            { id: "C", texto: "Planejar as tarefas dos desenvolvedores." },
            { id: "D", texto: "Aprovar os incrementos antes da entrega." }
        ],
        correta: "B",
        pontos: 10,
        bloom: {
            nivel: "Lembrar",
            justificativa: "Recordação da responsabilidade exclusiva do Product Owner definida no Scrum Guide."
        }
    },
    {
        id: 12,
        conceito: "Papéis e Responsabilidades",
        pergunta: "O que o Scrum Master deve promover junto à organização?",
        alternativas: [
            { id: "A", texto: "Adesão ao plano de projeto tradicional." },
            { id: "B", texto: "Implementação de um novo software de gestão." },
            { id: "C", texto: "Entendimento e adoção efetiva do Scrum." },
            { id: "D", texto: "Controle financeiro dos sprints." }
        ],
        correta: "C",
        pontos: 10,
        bloom: {
            nivel: "Aplicar",
            justificativa: "Aplicação dos conhecimentos sobre o papel do Scrum Master na transformação organizacional."
        }
    },
    {
        id: 13,
        conceito: "Papéis e Responsabilidades",
        pergunta: "Qual é o papel do Scrum Master durante os eventos Scrum?",
        alternativas: [
            { id: "A", texto: "Delegar tarefas aos desenvolvedores." },
            { id: "B", texto: "Garantir que o evento ocorra e seja produtivo." },
            { id: "C", texto: "Apresentar resultados para os stakeholders." },
            { id: "D", texto: "Redefinir a meta do produto." }
        ],
        correta: "B",
        pontos: 10,
        bloom: {
            nivel: "Aplicar",
            justificativa: "Aplicação do conhecimento sobre facilitação em contextos específicos dos eventos."
        }
    },
    {
        id: 14,
        conceito: "Papéis e Responsabilidades",
        pergunta: "O que o Product Owner precisa garantir em relação ao Product Backlog?",
        alternativas: [
            { id: "A", texto: "Que ele esteja visível, transparente e claro para todos." },
            { id: "B", texto: "Que contenha apenas requisitos funcionais." },
            { id: "C", texto: "Que siga um modelo tradicional de documentação." },
            { id: "D", texto: "Que seja revisado mensalmente pela diretoria." }
        ],
        correta: "A",
        pontos: 10,
        bloom: {
            nivel: "Compreender",
            justificativa: "Compreensão dos princípios de transparência aplicados ao Product Backlog."
        }
    },
    {
        id: 15,
        conceito: "Papéis e Responsabilidades",
        pergunta: "O que distingue o Scrum Team em termos de responsabilidade?",
        alternativas: [
            { id: "A", texto: "Divisão clara entre planejamento e execução." },
            { id: "B", texto: "Responsabilidade compartilhada pela entrega de valor." },
            { id: "C", texto: "Autonomia apenas do Scrum Master." },
            { id: "D", texto: "Responsabilidade limitada ao cumprimento de tarefas." }
        ],
        correta: "B",
        pontos: 10,
        bloom: {
            nivel: "Compreender",
            justificativa: "Entendimento do conceito de responsabilidade coletiva na equipe Scrum."
        }
    },
    {
        id: 16,
        conceito: "Eventos Scrum",
        pergunta: "Qual é o propósito da Sprint?",
        alternativas: [
            { id: "A", texto: "Documentar os requisitos do produto." },
            { id: "B", texto: "Gerar incrementos de valor utilizáveis." },
            { id: "C", texto: "Validar soluções com a diretoria." },
            { id: "D", texto: "Planejar o roadmap anual." }
        ],
        correta: "B",
        pontos: 10,
        bloom: {
            nivel: "Compreender",
            justificativa: "Compreensão do objetivo central das Sprints na geração de valor."
        }
    },
    {
        id: 17,
        conceito: "Eventos Scrum",
        pergunta: "Durante o Sprint Planning, o que a equipe Scrum define?",
        alternativas: [
            { id: "A", texto: "A lista completa de funcionalidades do produto." },
            { id: "B", texto: "A definição de impedimentos externos." },
            { id: "C", texto: "A meta da Sprint e o plano para alcançá-la." },
            { id: "D", texto: "As tarefas futuras dos stakeholders." }
        ],
        correta: "C",
        pontos: 10,
        bloom: {
            nivel: "Compreender",
            justificativa: "Entendimento dos resultados esperados do evento Sprint Planning."
        }
    },
    {
        id: 18,
        conceito: "Eventos Scrum",
        pergunta: "Qual é o foco principal do Daily Scrum?",
        alternativas: [
            { id: "A", texto: "Apresentar o andamento do projeto para a gestão." },
            { id: "B", texto: "Planejar o trabalho das próximas 24 horas." },
            { id: "C", texto: "Realizar inspeção externa do backlog." },
            { id: "D", texto: "Definir os indicadores de desempenho." }
        ],
        correta: "B",
        pontos: 10,
        bloom: {
            nivel: "Aplicar",
            justificativa: "Aplicação do conhecimento sobre o Daily Scrum em situações práticas de planejamento."
        }
    },
    {
        id: 19,
        conceito: "Eventos Scrum",
        pergunta: "O que caracteriza o Sprint Review?",
        alternativas: [
            { id: "A", texto: "Apresentar e inspecionar o incremento com stakeholders." },
            { id: "B", texto: "Avaliar o desempenho dos desenvolvedores." },
            { id: "C", texto: "Corrigir falhas da Sprint anterior." },
            { id: "D", texto: "Redefinir a estrutura da equipe." }
        ],
        correta: "A",
        pontos: 10,
        bloom: {
            nivel: "Compreender",
            justificativa: "Compreensão da natureza colaborativa e inspetiva do Sprint Review."
        }
    },
    {
        id: 20,
        conceito: "Eventos Scrum",
        pergunta: "Qual é o foco da Sprint Retrospective?",
        alternativas: [
            { id: "A", texto: "Rever entregas e metas trimestrais." },
            { id: "B", texto: "Planejar melhorias no processo e na equipe." },
            { id: "C", texto: "Validar resultados com clientes." },
            { id: "D", texto: "Atualizar a visão do produto." }
        ],
        correta: "B",
        pontos: 10,
        bloom: {
            nivel: "Avaliar",
            justificativa: "Avaliação crítica de processos e identificação de oportunidades de melhoria."
        }
    },
    {
        id: 21,
        conceito: "Artefatos e Compromissos",
        pergunta: "Qual o propósito do Product Backlog?",
        alternativas: [
            { id: "A", texto: "Registrar todas as tarefas operacionais." },
            { id: "B", texto: "Definir metas de longo prazo." },
            { id: "C", texto: "Representar uma lista ordenada de necessidades do produto." },
            { id: "D", texto: "Servir como documento de planejamento financeiro." }
        ],
        correta: "C",
        pontos: 10,
        bloom: {
            nivel: "Compreender",
            justificativa: "Compreensão da natureza e finalidade do Product Backlog como artefato."
        }
    },
    {
        id: 22,
        conceito: "Artefatos e Compromissos",
        pergunta: "Qual compromisso está vinculado ao Product Backlog?",
        alternativas: [
            { id: "A", texto: "Definição de Pronto." },
            { id: "B", texto: "Meta do Produto." },
            { id: "C", texto: "Planejamento da Sprint." },
            { id: "D", texto: "Orçamento do Projeto." }
        ],
        correta: "B",
        pontos: 10,
        bloom: {
            nivel: "Lembrar",
            justificativa: "Recordação da relação entre artefatos e seus compromissos no Scrum Guide 2020."
        }
    },
    {
        id: 23,
        conceito: "Artefatos e Compromissos",
        pergunta: "Qual artefato corresponde ao trabalho planejado para o Sprint atual?",
        alternativas: [
            { id: "A", texto: "Product Backlog." },
            { id: "B", texto: "Sprint Review." },
            { id: "C", texto: "Sprint Backlog." },
            { id: "D", texto: "Definição de Pronto." }
        ],
        correta: "C",
        pontos: 10,
        bloom: {
            nivel: "Lembrar",
            justificativa: "Recordação direta da definição do Sprint Backlog."
        }
    },
    {
        id: 24,
        conceito: "Artefatos e Compromissos",
        pergunta: "Quando um incremento pode ser considerado entregue?",
        alternativas: [
            { id: "A", texto: "Quando o Scrum Master aprova o trabalho." },
            { id: "B", texto: "Quando cumpre a Definição de Pronto acordada." },
            { id: "C", texto: "Quando é discutido na Sprint Review." },
            { id: "D", texto: "Quando o cliente fornece feedback." }
        ],
        correta: "B",
        pontos: 10,
        bloom: {
            nivel: "Aplicar",
            justificativa: "Aplicação do conceito de Definição de Pronto em cenários práticos de entrega."
        }
    },
    {
        id: 25,
        conceito: "Artefatos e Compromissos",
        pergunta: "Qual é a função da Definição de Pronto no Scrum?",
        alternativas: [
            { id: "A", texto: "Medir a produtividade da equipe." },
            { id: "B", texto: "Definir critérios de aceitação compartilhados para os incrementos." },
            { id: "C", texto: "Priorizar itens do backlog." },
            { id: "D", texto: "Indicar prazos de entrega para cada item." }
        ],
        correta: "B",
        pontos: 10,
        bloom: {
            nivel: "Compreender",
            justificativa: "Compreensão da função e importância da Definição de Pronto na garantia de qualidade."
        }
    }
];

// ===== CLASSE PRINCIPAL DO APLICATIVO =====
class InventarioConceitos {
    constructor() {
        this.questaoAtualIndex = 0;
        this.pontuacaoTotal = 0;
        this.tentativasNaQuestao = 0;
        this.questaoRespondidaCorretamente = false;
        this.nomeUsuario = '';
        this.inicioQuizTime = null;
        this.conceitosUnicos = [...new Set(questoesScrum.map(q => q.conceito))];
        
        this.initializeStatistics();
        this.bindEvents();
        this.loadUserHistory();
        this.focusNameInput();
    }

    // ===== INICIALIZAÇÃO =====
    initializeStatistics() {
        this.estatisticas = {
            acertosPrimeiraTentativa: 0,
            respostasBloom: {},
            respostasConceito: {},
            detalhesConceitos: {}
        };

        this.conceitosUnicos.forEach(conceito => {
            const questoesConceito = questoesScrum.filter(q => q.conceito === conceito);
            this.estatisticas.detalhesConceitos[conceito] = {
                total: questoesConceito.length,
                acertos: 0,
                pontosObtidos: 0,
                pontosMaximos: questoesConceito.reduce((acc, q) => acc + q.pontos, 0)
            };
        });
    }

    bindEvents() {
        // Elementos do DOM
        this.elements = {
            inicioArea: document.getElementById('inicio-area'),
            quizHeader: document.getElementById('quiz-header'),
            usuarioDisplay: document.getElementById('usuario-display'),
            nomeUsuario: document.getElementById('nome-usuario'),
            btnIniciar: document.getElementById('btn-iniciar'),
            perguntaTexto: document.getElementById('pergunta-texto'),
            numeroQuestao: document.getElementById('numero-questao'),
            conceitoQuestao: document.getElementById('conceito-questao'),
            bloomNivel: document.getElementById('bloom-nivel'),
            bloomJustificativa: document.getElementById('bloom-justificativa'),
            alternativasArea: document.getElementById('alternativas-area'),
            feedbackUsuario: document.getElementById('feedback-usuario'),
            btnProxima: document.getElementById('btn-proxima'),
            quizArea: document.getElementById('quiz-area'),
            resultadoFinalArea: document.getElementById('resultado-final-area'),
            mensagemMotivacional: document.getElementById('mensagem-motivacional'),
            pontuacaoFinal: document.getElementById('pontuacao-final'),
            btnReiniciar: document.getElementById('btn-reiniciar'),
            btnNovoUsuario: document.getElementById('btn-novo-usuario'),
            btnVerHistorico: document.getElementById('btn-ver-historico'),
            btnLimparHistorico: document.getElementById('btn-limpar-historico'),
            historicoResultados: document.getElementById('historico-resultados'),
            listaResultados: document.getElementById('lista-resultados'),
            storageStatus: document.getElementById('storage-status')
        };

        // Event Listeners
        this.elements.btnIniciar.addEventListener('click', () => this.iniciarQuizComNome());
        this.elements.btnProxima.addEventListener('click', () => this.proximaQuestao());
        this.elements.btnReiniciar.addEventListener('click', () => this.reiniciarQuiz());
        this.elements.btnNovoUsuario.addEventListener('click', () => this.voltarInicio());
        this.elements.btnVerHistorico.addEventListener('click', () => this.toggleHistorico());
        this.elements.btnLimparHistorico.addEventListener('click', () => this.limparHistorico());

        // Enter no campo nome
        this.elements.nomeUsuario.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.iniciarQuizComNome();
            }
        });
    }

    focusNameInput() {
        this.elements.nomeUsuario.focus();
    }

    // ===== GERENCIAMENTO DE DADOS =====
    salvarResultado(dadosResultado) {
        try {
            const resultadosExistentes = this.carregarResultados();
            resultadosExistentes.push(dadosResultado);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(resultadosExistentes));
            
            // Salvar na lista de usuários
            const usuarios = this.carregarUsuarios();
            if (!usuarios.includes(dadosResultado.nome_usuario)) {
                usuarios.push(dadosResultado.nome_usuario);
                localStorage.setItem(USER_KEY, JSON.stringify(usuarios));
            }

            this.elements.storageStatus.style.display = 'block';
            console.log('Resultado salvo no localStorage:', dadosResultado);
            return true;
        } catch (error) {
            console.error('Erro ao salvar resultado:', error);
            this.elements.storageStatus.textContent = '⚠️ Erro ao salvar resultado no armazenamento local.';
            this.elements.storageStatus.style.background = 'linear-gradient(135deg, #fdeaa7 0%, #ffccaa 100%)';
            this.elements.storageStatus.style.color = '#e74c3c';
            return false;
        }
    }

    carregarResultados() {
        try {
            const dados = localStorage.getItem(STORAGE_KEY);
            return dados ? JSON.parse(dados) : [];
        } catch (error) {
            console.error('Erro ao carregar resultados:', error);
            return [];
        }
    }

    carregarUsuarios() {
        try {
            const dados = localStorage.getItem(USER_KEY);
            return dados ? JSON.parse(dados) : [];
        } catch (error) {
            console.error('Erro ao carregar usuários:', error);
            return [];
        }
    }

    loadUserHistory() {
        const resultados = this.carregarResultados();
        if (resultados.length > 0) {
            this.mostrarHistoricoInicial(resultados);
        }
    }

    mostrarHistoricoInicial(resultados) {
        const ultimos5 = resultados.slice(-5).reverse();
        
        this.elements.listaResultados.innerHTML = '';
        ultimos5.forEach(resultado => {
            const item = document.createElement('div');
            item.className = 'resultado-item';
            
            const data = new Date(resultado.data_realizacao).toLocaleDateString('pt-BR');
            const hora = new Date(resultado.data_realizacao).toLocaleTimeString('pt-BR', { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            
            item.innerHTML = `
                <div class="resultado-header">${resultado.nome_usuario} - ${resultado.percentual}%</div>
                <div class="resultado-info">
                    ${data} às ${hora} | ${resultado.pontuacao_total}/${resultado.pontuacao_maxima} pontos | ${resultado.classificacao}
                </div>
            `;
            
            this.elements.listaResultados.appendChild(item);
        });

        this.elements.historicoResultados.style.display = 'block';
    }

    toggleHistorico() {
        const historico = this.elements.historicoResultados;
        if (historico.style.display === 'none' || !historico.style.display) {
            this.loadUserHistory();
            historico.style.display = 'block';
        } else {
            historico.style.display = 'none';
        }
    }

    limparHistorico() {
        if (confirm('Tem certeza que deseja limpar todo o histórico de resultados?')) {
            localStorage.removeItem(STORAGE_KEY);
            localStorage.removeItem(USER_KEY);
            this.elements.historicoResultados.style.display = 'none';
            alert('Histórico limpo com sucesso!');
        }
    }

    // ===== CONTROLE DO QUIZ =====
    iniciarQuizComNome() {
        const nome = this.elements.nomeUsuario.value.trim();
        if (!nome) {
            alert('Por favor, digite seu nome para continuar!');
            this.elements.nomeUsuario.focus();
            return;
        }

        this.nomeUsuario = nome;
        this.elements.usuarioDisplay.textContent = `👋 Olá, ${this.nomeUsuario}!`;
        
        this.elements.inicioArea.style.display = 'none';
        this.elements.quizHeader.style.display = 'block';
        this.elements.quizArea.style.display = 'block';
        
        this.iniciarQuiz();
    }

    iniciarQuiz() {
        console.log("Iniciando Inventário de Conceitos Scrum para:", this.nomeUsuario);
        
        this.questaoAtualIndex = 0;
        this.pontuacaoTotal = 0;
        this.inicioQuizTime = new Date();
        
        this.initializeStatistics();
        this.elements.resultadoFinalArea.style.display = 'none';
        this.elements.btnProxima.style.display = 'none';
        this.carregarQuestao();
    }

    carregarQuestao() {
        console.log(`Carregando questão ${this.questaoAtualIndex + 1}`);
        
        this.questaoRespondidaCorretamente = false;
        this.tentativasNaQuestao = 0;
        const questao = questoesScrum[this.questaoAtualIndex];

        // Atualizar interface
        this.elements.numeroQuestao.textContent = `Questão ${questao.id} de ${questoesScrum.length}`;
        this.elements.conceitoQuestao.textContent = `📖 ${questao.conceito}`;
        this.elements.perguntaTexto.textContent = questao.pergunta;
        
        // Informações de Bloom
        this.elements.bloomNivel.textContent = `🎯 Nível de Bloom: ${questao.bloom.nivel}`;
        this.elements.bloomJustificativa.textContent = questao.bloom.justificativa;
        
        // Limpar áreas
        this.elements.alternativasArea.innerHTML = '';
        this.elements.feedbackUsuario.textContent = '';
        this.elements.feedbackUsuario.style.background = '';
        this.elements.btnProxima.style.display = 'none';

        // Inicializar estatísticas
        if (!this.estatisticas.respostasBloom[questao.bloom.nivel]) {
            this.estatisticas.respostasBloom[questao.bloom.nivel] = 0;
        }

        this.criarAlternativas(questao);
    }

    criarAlternativas(questao) {
        questao.alternativas.forEach(alt => {
            const wrapper = document.createElement('div');
            wrapper.className = 'alternativa-wrapper';

            const label = document.createElement('span');
            label.className = 'alternativa-label';
            label.textContent = `${alt.id})`;

            const textoAlt = document.createElement('span');
            textoAlt.className = 'alternativa-texto';
            textoAlt.textContent = alt.texto;

            const canvas = this.criarCanvasRaspadinha(alt, questao);

            wrapper.appendChild(label);
            wrapper.appendChild(textoAlt);
            wrapper.appendChild(canvas);
            this.elements.alternativasArea.appendChild(wrapper);
        });
    }

    criarCanvasRaspadinha(alternativa, questao) {
        const canvas = document.createElement('canvas');
        canvas.className = 'raspadinha-canvas';
        canvas.width = 130;
        canvas.height = 40;
        canvas.dataset.alternativaId = alternativa.id;

        const ctx = canvas.getContext('2d', { alpha: true });
        
        this.desenharFundoCanvas(ctx, canvas, alternativa.id === questao.correta);
        this.desenharCamadaRaspavel(ctx, canvas);
        this.adicionarEventosCanvas(canvas, ctx, alternativa, questao);

        return canvas;
    }

    desenharFundoCanvas(ctx, canvas, isCorreta) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (isCorreta) {
            ctx.fillStyle = '#d5f4e6';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#27ae60';
            ctx.font = 'bold 26px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('⭐', canvas.width / 2, canvas.height / 2);
        } else {
            ctx.fillStyle = '#fdeaa7';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#e74c3c';
            ctx.font = 'bold 22px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('❌', canvas.width / 2, canvas.height / 2);
        }
    }

    desenharCamadaRaspavel(ctx, canvas) {
        ctx.globalCompositeOperation = 'source-over';
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#bdc3c7');
        gradient.addColorStop(1, '#95a5a6');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#2c3e50';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('RASPE AQUI', canvas.width / 2, canvas.height / 2);
    }

    adicionarEventosCanvas(canvas, ctx, alternativa, questao) {
        let isDrawing = false;
        let raspadaNestaAlternativa = false;

        const obterCoordenadas = (e, canvas) => {
            const rect = canvas.getBoundingClientRect();
            let x, y;
            
            if (e.type.startsWith('touch')) {
                const touch = e.touches && e.touches.length > 0 ? e.touches[0] : e.changedTouches[0];
                x = touch.clientX - rect.left;
                y = touch.clientY - rect.top;
            } else {
                x = e.offsetX !== undefined ? e.offsetX : e.clientX - rect.left;
                y = e.offsetY !== undefined ? e.offsetY : e.clientY - rect.top;
            }
            
            return { x, y };
        };

        const rasparArea = (e) => {
            if (!isDrawing || this.questaoRespondidaCorretamente || raspadaNestaAlternativa) return;

            const { x, y } = obterCoordenadas(e, canvas);
            
            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            const raioRaspagem = 20;
            ctx.arc(x, y, raioRaspagem, 0, Math.PI * 2, false);
            ctx.fill();
        };

        const finalizarTentativa = () => {
            if (raspadaNestaAlternativa || this.questaoRespondidaCorretamente) return;

            raspadaNestaAlternativa = true;
            this.tentativasNaQuestao++;

            // Revelar completamente
            ctx.globalCompositeOperation = 'source-over';
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (alternativa.id === questao.correta) {
                this.processarRespostaCorreta(ctx, canvas, questao);
            } else {
                this.processarRespostaIncorreta(ctx, canvas);
            }
        };

        // Mouse events
        canvas.addEventListener('mousedown', (e) => {
            if (this.questaoRespondidaCorretamente || raspadaNestaAlternativa) return;
            isDrawing = true;
            rasparArea(e);
        });

        canvas.addEventListener('mousemove', rasparArea);

        canvas.addEventListener('mouseup', () => {
            if (isDrawing) {
                finalizarTentativa();
            }
            isDrawing = false;
        });

        // Touch events
        canvas.addEventListener('touchstart', (e) => {
            if (this.questaoRespondidaCorretamente || raspadaNestaAlternativa) return;
            e.preventDefault();
            isDrawing = true;
            rasparArea(e);
        }, { passive: false });

        canvas.addEventListener('touchmove', (e) => {
            if (!isDrawing || this.questaoRespondidaCorretamente || raspadaNestaAlternativa) return;
            e.preventDefault();
            rasparArea(e);
        }, { passive: false });

        canvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            if (isDrawing) {
                finalizarTentativa();
            }
            isDrawing = false;
        }, { passive: false });
    }

    processarRespostaCorreta(ctx, canvas, questao) {
        // Desenhar fundo verde com estrela
        ctx.fillStyle = '#d5f4e6';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#27ae60';
        ctx.font = 'bold 26px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('⭐', canvas.width / 2, canvas.height / 2);

        this.questaoRespondidaCorretamente = true;
        
        // Sistema de pontuação progressiva
        let pontosGanhos = this.calcularPontos(questao.pontos);
        
        this.pontuacaoTotal += pontosGanhos;
        this.atualizarEstatisticas(questao, pontosGanhos);
        
        this.elements.feedbackUsuario.textContent = `🎉 Correto, ${this.nomeUsuario}! Você ganhou ${pontosGanhos} pontos.`;
        this.elements.feedbackUsuario.style.background = 'linear-gradient(135deg, #d5f4e6 0%, #a8e6cf 100%)';
        this.elements.feedbackUsuario.style.color = '#27ae60';
        this.elements.feedbackUsuario.style.borderRadius = '8px';
        
        this.elements.btnProxima.style.display = 'inline-block';
        this.desabilitarOutrasAlternativas();
    }

    processarRespostaIncorreta(ctx, canvas) {
        // Desenhar fundo amarelo com X
        ctx.fillStyle = '#fdeaa7';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#e74c3c';
        ctx.font = 'bold 22px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('❌', canvas.width / 2, canvas.height / 2);

        this.elements.feedbackUsuario.textContent = `❌ Ops, ${this.nomeUsuario}! Esta não é a resposta correta. Continue tentando!`;
        this.elements.feedbackUsuario.style.background = 'linear-gradient(135deg, #fdeaa7 0%, #ffccaa 100%)';
        this.elements.feedbackUsuario.style.color = '#e74c3c';
        this.elements.feedbackUsuario.style.borderRadius = '8px';
    }

    calcularPontos(pontosBase) {
        if (this.tentativasNaQuestao === 1) { 
            this.estatisticas.acertosPrimeiraTentativa++;
            return pontosBase;
        } else if (this.tentativasNaQuestao === 2) { 
            return Math.ceil(pontosBase * 0.6); 
        } else if (this.tentativasNaQuestao === 3) { 
            return Math.ceil(pontosBase * 0.3); 
        } else { 
            return 1; // Ponto mínimo
        }
    }

    atualizarEstatisticas(questao, pontosGanhos) {
        this.estatisticas.respostasBloom[questao.bloom.nivel]++;
        this.estatisticas.detalhesConceitos[questao.conceito].acertos++;
        this.estatisticas.detalhesConceitos[questao.conceito].pontosObtidos += pontosGanhos;
    }

    desabilitarOutrasAlternativas() {
        const todosOsCanvas = this.elements.alternativasArea.querySelectorAll('.raspadinha-canvas');
        todosOsCanvas.forEach(cv => {
            cv.classList.add('disabled');
        });
    }

    proximaQuestao() {
        this.questaoAtualIndex++;
        if (this.questaoAtualIndex < questoesScrum.length) {
            this.carregarQuestao();
        } else {
            this.mostrarResultadoFinal();
        }
    }

    reiniciarQuiz() {
        this.iniciarQuiz();
    }

    voltarInicio() {
        this.elements.resultadoFinalArea.style.display = 'none';
        this.elements.quizHeader.style.display = 'none';
        this.elements.quizArea.style.display = 'none';
        this.elements.inicioArea.style.display = 'block';
        this.elements.nomeUsuario.value = '';
        this.elements.nomeUsuario.focus();
    }

    // ===== RESULTADO FINAL =====
    mostrarResultadoFinal() {
        this.elements.quizArea.style.display = 'none';
        this.elements.resultadoFinalArea.style.display = 'block';
        
        const pontuacaoMaxima = questoesScrum.reduce((acc, q) => acc + q.pontos, 0);
        const percentual = Math.round((this.pontuacaoTotal / pontuacaoMaxima) * 100);
        const tempoTotal = this.calcularTempoTotal();
        const tempoTotalSegundos = Math.floor((new Date() - this.inicioQuizTime) / 1000);
        
        this.exibirMensagemMotivacional(percentual);
        this.exibirPontuacaoFinal(pontuacaoMaxima, percentual);
        this.exibirEstatisticas(tempoTotal);
        this.gerarDashboardConceitos();
        
        const dadosCompletos = this.prepararDadosCompletos(pontuacaoMaxima, percentual, tempoTotal, tempoTotalSegundos);
        this.salvarResultado(dadosCompletos.dados_simples);
        this.logDadosCompletos(dadosCompletos.dados_completos);
    }

    exibirMensagemMotivacional(percentual) {
        const motivacao = this.obterMensagemMotivacional(percentual);
        this.elements.mensagemMotivacional.className = `mensagem-motivacional ${motivacao.classe}`;
        this.elements.mensagemMotivacional.textContent = motivacao.texto;
    }

    exibirPontuacaoFinal(pontuacaoMaxima, percentual) {
        this.elements.pontuacaoFinal.innerHTML = `
            <strong>Pontuação de ${this.nomeUsuario}: ${this.pontuacaoTotal} de ${pontuacaoMaxima} pontos (${percentual}%)</strong>
        `;
    }

    exibirEstatisticas(tempoTotal) {
        const conceitoMaisForte = Object.entries(this.estatisticas.detalhesConceitos)
            .sort(([,a], [,b]) => (b.pontosObtidos/b.pontosMaximos) - (a.pontosObtidos/a.pontosMaximos))[0];
        
        const bloomPredominante = Object.entries(this.estatisticas.respostasBloom)
            .sort(([,a], [,b]) => b - a)[0];

        document.getElementById('acertos-primeira').textContent = `${this.estatisticas.acertosPrimeiraTentativa}/25`;
        document.getElementById('conceito-forte').textContent = conceitoMaisForte ? conceitoMaisForte[0] : 'N/A';
        document.getElementById('bloom-predominante').textContent = bloomPredominante ? bloomPredominante[0] : 'N/A';
        document.getElementById('tempo-total').textContent = tempoTotal;
        document.getElementById('eficiencia-pontos').textContent = `${Math.round((this.pontuacaoTotal / questoesScrum.reduce((acc, q) => acc + q.pontos, 0)) * 100)}%`;
    }

    gerarDashboardConceitos() {
        const conceitosListaEl = document.getElementById('conceitos-lista');
        const resumoConceitosEl = document.getElementById('resumo-conceitos');
        
        conceitosListaEl.innerHTML = '';
        
        // Gerar resumo geral
        let resumoTexto = '';
        Object.entries(this.estatisticas.detalhesConceitos).forEach(([conceito, dados], index) => {
            const percentualPontos = Math.round((dados.pontosObtidos / dados.pontosMaximos) * 100);
            if (index > 0) resumoTexto += '<br>';
            resumoTexto += `<strong>${conceito}:</strong> (${dados.pontosObtidos}/${dados.pontosMaximos} pts - ${percentualPontos}%)`;
        });
        resumoConceitosEl.innerHTML = resumoTexto;

        // Gerar cards detalhados
        Object.entries(this.estatisticas.detalhesConceitos).forEach(([conceito, dados]) => {
            const percentualAcertos = Math.round((dados.acertos / dados.total) * 100);
            const percentualPontos = Math.round((dados.pontosObtidos / dados.pontosMaximos) * 100);
            
            const conceitoCard = document.createElement('div');
            conceitoCard.className = 'conceito-card';
            
            conceitoCard.innerHTML = `
                <div class="conceito-header">
                    <div class="conceito-nome">📖 ${conceito}</div>
                    <div class="conceito-score">(${dados.pontosObtidos}/${dados.pontosMaximos} pts)</div>
                </div>
                <div class="conceito-barra">
                    <div class="conceito-progresso" style="width: ${percentualPontos}%"></div>
                </div>
                <div class="conceito-detalhes">
                    <div style="margin-bottom: 5px;">
                        <strong>📊 ${percentualPontos}% dos pontos obtidos</strong> • 
                        <strong>✅ ${dados.acertos}/${dados.total} questões corretas (${percentualAcertos}%)</strong>
                    </div>
                    <div style="color: #27ae60; font-weight: 600;">
                        🎯 ${dados.pontosObtidos} pontos conquistados de ${dados.pontosMaximos} possíveis
                    </div>
                </div>
            `;
            
            conceitosListaEl.appendChild(conceitoCard);
        });
    }

    prepararDadosCompletos(pontuacaoMaxima, percentual, tempoTotal, tempoTotalSegundos) {
        const conceitoMaisForte = Object.entries(this.estatisticas.detalhesConceitos)
            .sort(([,a], [,b]) => (b.pontosObtidos/b.pontosMaximos) - (a.pontosObtidos/a.pontosMaximos))[0];
        
        const bloomPredominante = Object.entries(this.estatisticas.respostasBloom)
            .sort(([,a], [,b]) => b - a)[0];

        const classificacao = percentual >= 90 ? 'EXCELENTE' : 
                            percentual >= 70 ? 'BOM' : 
                            percentual >= 50 ? 'REGULAR' : 'PRECISA MELHORAR';

        const dados_simples = {
            nome_usuario: this.nomeUsuario,
            pontuacao_total: this.pontuacaoTotal,
            pontuacao_maxima: pontuacaoMaxima,
            percentual: percentual,
            acertos_primeira_tentativa: this.estatisticas.acertosPrimeiraTentativa,
            tempo_total_segundos: tempoTotalSegundos,
            detalhes_conceitos: this.estatisticas.detalhesConceitos,
            respostas_bloom: this.estatisticas.respostasBloom,
            classificacao: classificacao,
            data_realizacao: new Date().toISOString()
        };

        const dados_completos = {
            usuario: {
                nome: this.nomeUsuario,
                data_realizacao: new Date().toISOString(),
                inicio_quiz: this.inicioQuizTime?.toISOString(),
                fim_quiz: new Date().toISOString()
            },
            performance_geral: {
                pontuacao_total: this.pontuacaoTotal,
                pontuacao_maxima: pontuacaoMaxima,
                percentual_geral: percentual,
                acertos_primeira_tentativa: this.estatisticas.acertosPrimeiraTentativa,
                tempo_total_segundos: tempoTotalSegundos,
                tempo_total_formatado: tempoTotal,
                questoes_totais: questoesScrum.length
            },
            performance_conceitos: {},
            performance_bloom: this.estatisticas.respostasBloom,
            estatisticas_avancadas: {
                conceito_mais_forte: conceitoMaisForte ? {
                    nome: conceitoMaisForte[0],
                    percentual_pontos: Math.round((conceitoMaisForte[1].pontosObtidos / conceitoMaisForte[1].pontosMaximos) * 100),
                    pontos_obtidos: conceitoMaisForte[1].pontosObtidos,
                    pontos_maximos: conceitoMaisForte[1].pontosMaximos
                } : null,
                bloom_predominante: bloomPredominante ? {
                    nivel: bloomPredominante[0],
                    questoes_acertadas: bloomPredominante[1]
                } : null,
                eficiencia_primeira_tentativa: Math.round((this.estatisticas.acertosPrimeiraTentativa / questoesScrum.length) * 100)
            },
            classificacao: classificacao
        };

        // Detalhamento por conceito
        Object.entries(this.estatisticas.detalhesConceitos).forEach(([conceito, dados]) => {
            dados_completos.performance_conceitos[conceito] = {
                questoes_total: dados.total,
                questoes_acertadas: dados.acertos,
                percentual_acertos: Math.round((dados.acertos / dados.total) * 100),
                pontos_obtidos: dados.pontosObtidos,
                pontos_maximos: dados.pontosMaximos,
                percentual_pontos: Math.round((dados.pontosObtidos / dados.pontosMaximos) * 100),
                questoes_do_conceito: questoesScrum.filter(q => q.conceito === conceito).map(q => ({
                    id: q.id,
                    pergunta: q.pergunta.substring(0, 60) + '...',
                    bloom_nivel: q.bloom.nivel
                }))
            };
        });

        return { dados_simples, dados_completos };
    }

    logDadosCompletos(dadosCompletos) {
        console.log('='.repeat(80));
        console.log('🎯 RELATÓRIO COMPLETO DO INVENTÁRIO DE CONCEITOS SCRUM - ICS');
        console.log('='.repeat(80));
        console.log('📋 DADOS COMPLETOS:', dadosCompletos);
        console.log('');
        
        console.log('👤 INFORMAÇÕES DO USUÁRIO:');
        console.log(`   Nome: ${dadosCompletos.usuario.nome}`);
        console.log(`   Data: ${new Date(dadosCompletos.usuario.data_realizacao).toLocaleString('pt-BR')}`);
        console.log(`   Tempo total: ${dadosCompletos.performance_geral.tempo_total_formatado}`);
        console.log('');
        
        console.log('🏆 PERFORMANCE GERAL:');
        console.log(`   Pontuação: ${dadosCompletos.performance_geral.pontuacao_total}/${dadosCompletos.performance_geral.pontuacao_maxima} (${dadosCompletos.performance_geral.percentual_geral}%)`);
        console.log(`   Classificação: ${dadosCompletos.classificacao}`);
        console.log(`   Acertos na 1ª tentativa: ${dadosCompletos.performance_geral.acertos_primeira_tentativa}/25 (${dadosCompletos.estatisticas_avancadas.eficiencia_primeira_tentativa}%)`);
        console.log('');
        
        console.log('📚 PERFORMANCE POR CONCEITO SCRUM:');
        Object.entries(dadosCompletos.performance_conceitos).forEach(([conceito, dados]) => {
            console.log(`   📖 ${conceito}:`);
            console.log(`      Questões: ${dados.questoes_acertadas}/${dados.questoes_total} (${dados.percentual_acertos}%)`);
            console.log(`      Pontos: ${dados.pontos_obtidos}/${dados.pontos_maximos} (${dados.percentual_pontos}%)`);
        });
        console.log('');
        
        console.log('🧠 PERFORMANCE POR NÍVEL DE BLOOM:');
        Object.entries(dadosCompletos.performance_bloom).forEach(([nivel, acertos]) => {
            const totalNivel = questoesScrum.filter(q => q.bloom.nivel === nivel).length;
            const percentualNivel = Math.round((acertos / totalNivel) * 100);
            console.log(`   🎯 ${nivel}: ${acertos}/${totalNivel} questões (${percentualNivel}%)`);
        });
        
        console.log('='.repeat(80));
        console.log('📤 Dados disponíveis globalmente em: window.dadosICSCompletos');
        console.log('='.repeat(80));
        
        window.dadosICSCompletos = dadosCompletos;
    }

    // ===== UTILITÁRIOS =====
    obterMensagemMotivacional(percentual) {
        if (percentual >= 90) {
            return {
                classe: 'mensagem-excelente',
                texto: `🏆 Fantástico, ${this.nomeUsuario}! Você demonstrou excelente domínio dos conceitos Scrum! Parabéns!`
            };
        } else if (percentual >= 70) {
            return {
                classe: 'mensagem-bom',
                texto: `👏 Muito bem, ${this.nomeUsuario}! Você tem um bom conhecimento em Scrum. Continue estudando para alcançar a excelência!`
            };
        } else if (percentual >= 50) {
            return {
                classe: 'mensagem-pode-melhorar',
                texto: `💪 Bom esforço, ${this.nomeUsuario}! Você está no caminho certo. Revise os conceitos e tente novamente para melhorar ainda mais!`
            };
        } else {
            return {
                classe: 'mensagem-pode-melhorar',
                texto: `📚 Não desanime, ${this.nomeUsuario}! O aprendizado é um processo. Estude os conceitos Scrum e volte para um novo desafio!`
            };
        }
    }

    calcularTempoTotal() {
        if (!this.inicioQuizTime) return '0m 0s';
        
        const agora = new Date();
        const diff = Math.floor((agora - this.inicioQuizTime) / 1000);
        const minutos = Math.floor(diff / 60);
        const segundos = diff % 60;
        
        return `${minutos}m ${segundos}s`;
    }
}

// ===== INICIALIZAÇÃO DO APLICATIVO =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 Inventário de Conceitos Scrum (ICS) - Iniciado');
    new InventarioConceitos();
});