const perguntas = [
    {
        pergunta: "O que significa a sigla CSS?",
        respostas: [
            "Cascading Style Sheets",
            "Central Style System",
            "Computer Style Script",
        ],
        correta: 0
    },
    {
        pergunta: "Qual propriedade do CSS é usada para definir a cor do texto?",
        respostas: [
            "text-color",
            "color",
            "font-color",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o Box Model no CSS?",
        respostas: [
            "Uma técnica de layout com caixas retangulares",
            "Um modelo tridimensional para design gráfico",
            "Um método para criar bordas arredondadas",
        ],
        correta: 0
    },
    {
        pergunta: "Qual propriedade do CSS é usada para adicionar margem ao redor de um elemento?",
        respostas: [
            "padding",
            "margin",
            "spacing",
        ],
        correta: 1
    },
    {
        pergunta: "O que é Flexbox?",
        respostas: [
            "Um modelo de layout bidimensional",
            "Um modelo de layout unidimensional",
            "Uma propriedade de estilo para fontes flexíveis",
        ],
        correta: 1
    },
    {
        pergunta: "Qual propriedade do CSS é usada para alterar o espaçamento entre as linhas de texto?",
        respostas: [
            "line-spacing",
            "line-height",
            "text-spacing",
        ],
        correta: 1
    },
    {
        pergunta: "O que é importante considerar ao projetar para acessibilidade?",
        respostas: [
            "Utilizar apenas imagens complexas",
            "Ignorar a estrutura de títulos",
            "Garantir que o conteúdo seja percebido por todos, independentemente das habilidades",
        ],
        correta: 2
    },
    {
        pergunta: "Como definir a largura de uma borda em CSS?",
        respostas: [
            "border-width",
            "border-size",
            "line-width",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a tag HTML para criar uma lista ordenada?",
        respostas: [
            "<ul>",
            "<ol>",
            "<li>",
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma unidade de medida comum para largura de conteúdo em CSS?",
        respostas: [
            "Pixels (px)",
            "Centímetros (cm)",
            "Polegadas (in)",
        ],
        correta: 0
    },
    // Adicione mais perguntas conforme necessário

    {
        pergunta: "Qual propriedade do CSS é usada para definir a ordem de exibição dos elementos em um contêiner Flexbox?",
        respostas: [
            "flex-direction",
            "order",
            "display-order",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o conceito de 'box-sizing' em CSS?",
        respostas: [
            "Uma propriedade que define o tamanho da caixa de um elemento",
            "Um modelo de layout baseado em caixas",
            "Uma propriedade que controla como as bordas são renderizadas",
        ],
        correta: 0
    },
    {
        pergunta: "Como você centraliza um elemento horizontalmente em CSS?",
        respostas: [
            "text-align: center;",
            "margin: auto;",
            "align: center;",
        ],
        correta: 1
    },
    {
        pergunta: "O que é 'line-height' em CSS?",
        respostas: [
            "O espaço entre as linhas de um parágrafo",
            "A largura de uma linha de texto",
            "O número máximo de linhas em um contêiner",
        ],
        correta: 0
    },
    {
        pergunta: "Qual propriedade do CSS é usada para ajustar o espaçamento entre as letras?",
        respostas: [
            "word-spacing",
            "letter-spacing",
            "text-spacing",
        ],
        correta: 1
    },
    {
        pergunta: "Como melhorar a acessibilidade em uma página web?",
        respostas: [
            "Usar fontes pequenas para economizar espaço",
            "Incorporar vídeos sem legendas",
            "Adicionar descrições de texto apropriadas para imagens",
        ],
        correta: 2
    },
    {
        pergunta: "Qual propriedade do Flexbox é usada para alinhar itens no eixo transversal?",
        respostas: [
            "align-items",
            "justify-content",
            "flex-align",
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma 'media query' em CSS?",
        respostas: [
            "Um seletor para mídias sociais",
            "Um método para consultar bancos de dados externos",
            "Um recurso que permite aplicar estilos com base nas características do dispositivo",
        ],
        correta: 2
    },
    {
        pergunta: "Como se cria uma lista não ordenada em HTML?",
        respostas: [
            "<ul>",
            "<ol>",
            "<li>",
        ],
        correta: 0
    },
    {
        pergunta: "O que é um 'pseudo-elemento' em CSS?",
        respostas: [
            "Um elemento HTML especial",
            "Um elemento dentro de outro elemento",
            "Um elemento que não existe no DOM, mas pode ser estilizado",
        ],
        correta: 2
    },
    // Adicione mais perguntas conforme necessário

    {
        pergunta: "Qual propriedade do Flexbox define o alinhamento de um item ao longo do eixo principal?",
        respostas: [
            "align-items",
            "justify-content",
            "flex-align",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o conceito de 'viewport' em web design responsivo?",
        respostas: [
            "Um componente gráfico em uma página web",
            "A área visível de uma página web em um dispositivo",
            "Um tipo de animação CSS",
        ],
        correta: 1
    },
    {
        pergunta: "Como você adiciona um comentário em HTML?",
        respostas: [
            "<!-- Comentário aqui -->",
            "// Comentário aqui",
            "/* Comentário aqui */",
        ],
        correta: 0
    },
    {
        pergunta: "O que é 'em' em CSS?",
        respostas: [
            "Uma unidade de medida baseada na largura da letra 'm'",
            "Uma unidade de medida para margens",
            "Um seletor de elemento",
        ],
        correta: 0
    },
    {
        pergunta: "Qual propriedade do CSS é usada para alterar o estilo do cursor quando o mouse passa sobre um elemento?",
        respostas: [
            "cursor-type",
            "mouse-style",
            "cursor",
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma 'pseudo-classe' em CSS?",
        respostas: [
            "Uma classe específica para estilização",
            "Um seletor que se aplica apenas durante uma ação específica",
            "Uma classe de programação em linguagens web",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o papel do atributo 'alt' em uma tag de imagem HTML?",
        respostas: [
            "Define a altura da imagem",
            "Fornece uma descrição alternativa para a imagem",
            "Define o estilo da borda da imagem",
        ],
        correta: 1
    },
    {
        pergunta: "O que é um 'fallback' em relação a fontes web?",
        respostas: [
            "Uma fonte que é sempre usada",
            "Um método para usar várias fontes simultaneamente",
            "Uma fonte alternativa a ser usada caso a principal não esteja disponível",
        ],
        correta: 2
    },
    {
        pergunta: "Qual propriedade do CSS é usada para aplicar uma sombra a um elemento?",
        respostas: [
            "box-shadow",
            "text-shadow",
            "element-shadow",
        ],
        correta: 0
    },
    {
        pergunta: "Como você cria um link externo em HTML?",
        respostas: [
            "<a href='http://www.exemplo.com'>Link Externo</a>",
            "<a src='http://www.exemplo.com'>Link Externo</a>",
            "<a link='http://www.exemplo.com'>Link Externo</a>",
        ],
        correta: 0
    },
];

  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }