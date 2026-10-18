const players = {
  npc1: {
    name: "NPC 1",
    subtitle: "Lateral Esquerdo • Lateral Caçador",
    level: 1,
    xp: 0,
    identity: {
      "AT": "Caçador de Corredor",
      "EGO": "Individualista - Restritivo",
      "Arquétipo": "Marcador de Ala",
      "Playstyle": "Jockey"
    },
    archetypeBonus: "+1 Pressão",
    stats: {
      "Drible": 13,
      "Físico": 12,
      "Velocidade": 17,
      "Técnica": 10,
      "Defesa": 14,
      "Egoísmo": 11,
      "Passe": 11,
      "Leitura de Jogo": 12
    },
    highlights: ["Velocidade", "Defesa"],
    skills: [
      ["+3", "Explosão"],
      ["+2", "Pressão"],
      ["+2", "Desarme"]
    ],
    nerfs: [
      ["-2", "Jogo Aéreo"],
      ["-1", "Potência"]
    ],
    talent: {
      name: "Sem Corredor",
      text: `Quando estiver defendendo próximo à lateral do campo, recebe <strong>+2 em Pressão</strong>. Caso esteja entre o adversário e o centro do campo, também recebe <strong>+1 em Desarme</strong>.`
    },
    abilities: [
      {
        name: "Caçada Lateral",
        text: `Quando um adversário acelerar pela lateral, pode utilizar <strong>Explosão</strong> para acompanhá-lo. Caso empate ou vença o teste de velocidade, pode imediatamente iniciar <strong>Pressão</strong> contra ele.`
      },
      {
        name: "Roubo e Arrancada",
        text: `Quando recuperar a bola através de <strong>Desarme</strong>, recebe <strong>+2 em Explosão</strong> durante sua primeira movimentação. Durante essa movimentação, não sofre redução de velocidade por estar conduzindo a bola.`
      }
    ]
  },

  npc2: {
    name: "NPC 2",
    subtitle: "Volante • Maestro Recuado",
    level: 1,
    xp: 0,
    identity: {
      "AT": "Maestro Recuado",
      "EGO": "Holístico - Liberativo",
      "Arquétipo": "Regista",
      "Playstyle": "Long Ball Pass"
    },
    archetypeBonus: "+1 Precisão",
    stats: {
      "Drible": 9,
      "Físico": 10,
      "Velocidade": 8,
      "Técnica": 15,
      "Defesa": 13,
      "Egoísmo": 11,
      "Passe": 17,
      "Leitura de Jogo": 16
    },
    highlights: ["Passe", "Leitura de Jogo"],
    skills: [
      ["+3", "Precisão"],
      ["+3", "Percepção Espacial"],
      ["+2", "Lançamento"]
    ],
    nerfs: [
      ["-2", "Potência"],
      ["-1", "Encadeamento"]
    ],
    talent: {
      name: "Central de Comando",
      text: `Ao receber a bola no campo defensivo ou no meio-campo, pode utilizar <strong>Percepção Espacial</strong>. Se identificar um companheiro livre, seu próximo passe recebe <strong>+2 em Precisão</strong>. Se esse passe ultrapassar uma linha defensiva, o receptor recebe <strong>+1 em Domínio</strong>.`
    },
    abilities: [
      {
        name: "Lançamento Cirúrgico",
        text: `Pode realizar um <strong>Lançamento</strong> para um jogador distante com <strong>+2</strong>. Caso o jogador esteja realizando <strong>Desmarque</strong>, o bônus aumenta para <strong>+3</strong>.`
      },
      {
        name: "Quebra de Linha",
        text: `Ao realizar um passe entre dois ou mais adversários, recebe <strong>+2 em Precisão</strong>. Se o passe for concluído, o receptor recebe <strong>+1 Domínio</strong> e <strong>+1 Explosão</strong> em sua próxima movimentação.`
      }
    ]
  },

  npc3: {
    name: "NPC 3",
    subtitle: "Zagueiro Central • Zagueiro de Combate",
    level: 1,
    xp: 0,
    identity: {
      "AT": "Destruidor",
      "EGO": "Individualista - Restritivo",
      "Arquétipo": "Stopper",
      "Playstyle": "Bruiser"
    },
    archetypeBonus: "+1 Desarme",
    stats: {
      "Drible": 5,
      "Físico": 17,
      "Velocidade": 11,
      "Técnica": 8,
      "Defesa": 16,
      "Egoísmo": 14,
      "Passe": 7,
      "Leitura de Jogo": 13
    },
    highlights: ["Físico", "Defesa"],
    skills: [
      ["+3", "Duelo Físico"],
      ["+3", "Desarme"],
      ["+2", "Pressão"]
    ],
    nerfs: [
      ["-2", "Lançamento"],
      ["-2", "Encadeamento"]
    ],
    talent: {
      name: "Você Não Passa",
      text: `Sempre que um adversário tentar atravessar sua posição carregando a bola, recebe <strong>+2 em Duelo Físico</strong>. Se vencer um Duelo Físico por 2 ou mais, o adversário recebe <strong>-1 em Equilíbrio</strong> até o fim da jogada.`
    },
    abilities: [
      {
        name: "Bote de Impacto",
        text: `Quando estiver a até 2 metros do portador da bola, pode avançar imediatamente para realizar <strong>Desarme</strong>. Recebe <strong>+2 no Desarme</strong>. Porém, se perder o teste, recebe <strong>-2 em Tempo de Reação</strong> contra a próxima ação daquele jogador.`
      },
      {
        name: "Pressão Sufocante",
        text: `Após se aproximar de um adversário, pode aplicar <strong>Pressão</strong>. Enquanto permanecer próximo dele, o adversário recebe <strong>-1 Domínio</strong>, <strong>-1 Precisão</strong> e <strong>-1 Execução</strong>. O efeito termina caso ele consiga se afastar.`
      }
    ]
  },

  npc4: {
    name: "NPC 4",
    subtitle: "Zagueiro Central • Zagueiro de Cobertura",
    level: 1,
    xp: 0,
    identity: {
      "AT": "Sentinela Defensivo",
      "EGO": "Holístico - Restritivo",
      "Arquétipo": "Defensor de Cobertura",
      "Playstyle": "Anticipate"
    },
    archetypeBonus: "+1 Interceptação",
    stats: {
      "Drible": 6,
      "Físico": 14,
      "Velocidade": 12,
      "Técnica": 8,
      "Defesa": 17,
      "Egoísmo": 11,
      "Passe": 10,
      "Leitura de Jogo": 16
    },
    highlights: ["Defesa", "Leitura de Jogo"],
    skills: [
      ["+3", "Interceptação"],
      ["+2", "Antecipação de Jogadas"],
      ["+2", "Bloqueio"]
    ],
    nerfs: [
      ["-2", "Encadeamento"],
      ["-1", "Execução"]
    ],
    talent: {
      name: "Última Linha",
      text: `Enquanto for o defensor mais recuado da jogada, recebe <strong>+2 em Antecipação de Jogadas</strong>. Caso identifique corretamente a jogada, recebe também <strong>+1 em Interceptação</strong> ou <strong>Bloqueio</strong> contra aquela ação. Se recuperar a posse, o primeiro passe realizado não sofre penalidade por pressão.`
    },
    abilities: [
      {
        name: "Zona Morta",
        text: `Quando um adversário tentar realizar um passe, infiltração ou cruzamento dentro de sua zona defensiva, pode realizar uma <strong>Interceptação com +2</strong>. Se vencer por 2 ou mais de diferença, domina automaticamente a bola após o corte.`
      },
      {
        name: "Fechar a Porta",
        text: `Ao utilizar <strong>Bloqueio</strong> contra um chute ou passe, reduz em <strong>-2 a Execução ou Precisão</strong> do adversário. Se estiver protegendo diretamente o gol, recebe <strong>+1 adicional</strong> no teste.`
      }
    ]
  },

  npc6: {
    name: "NPC 6",
    subtitle: "Meia Central • Meia Técnico",
    level: 1,
    xp: 0,
    identity: {
      "AT": "Conector Criativo",
      "EGO": "Holístico - Liberativo",
      "Arquétipo": "Meia Técnico",
      "Playstyle": "Tiki Taka"
    },
    archetypeBonus: "+1 Domínio",
    stats: {
      "Drible": 15,
      "Físico": 7,
      "Velocidade": 12,
      "Técnica": 17,
      "Defesa": 8,
      "Egoísmo": 13,
      "Passe": 16,
      "Leitura de Jogo": 14
    },
    highlights: ["Técnica", "Passe"],
    skills: [
      ["+3", "Domínio"],
      ["+2", "Finta"],
      ["+2", "Precisão"]
    ],
    nerfs: [
      ["-2", "Duelo Físico"],
      ["-1", "Jogo Aéreo"]
    ],
    talent: {
      name: "Primeiro Toque Perfeito",
      text: `Ao receber um passe, pode utilizar <strong>Domínio</strong>. Se vencer o teste por 2 ou mais, pode escolher imediatamente uma das opções: deslocar-se 1 metro, realizar uma <strong>Finta</strong> ou realizar um passe curto. Essa ação não consome sua movimentação normal.`
    },
    abilities: [
      {
        name: "Toque de Primeira",
        text: `Pode realizar um passe imediatamente após receber a bola. Esse passe recebe <strong>+2 em Precisão</strong>. Caso tenha recebido a bola de um jogador a menos de 5 metros, recebe <strong>+3</strong> em vez de +2.`
      },
      {
        name: "Finta de Recepção",
        text: `Antes mesmo de dominar a bola, pode realizar uma <strong>Finta</strong> contra o marcador. Caso vença, recebe <strong>+2 Domínio</strong> e o marcador recebe <strong>-1 Tempo de Reação</strong> contra sua próxima ação.`
      }
    ]
  },

  npc10: {
    name: "NPC 10",
    subtitle: "Ponta Direito / Segundo Atacante • Atacante de Ruptura",
    level: 1,
    xp: 0,
    identity: {
      "AT": "Predador de Espaço",
      "EGO": "Individualista - Liberativo",
      "Arquétipo": "Atacante de Ruptura",
      "Playstyle": "Quick Step"
    },
    archetypeBonus: "+1 Desmarque",
    stats: {
      "Drible": 16,
      "Físico": 12,
      "Velocidade": 17,
      "Técnica": 14,
      "Defesa": 6,
      "Egoísmo": 15,
      "Passe": 9,
      "Leitura de Jogo": 11
    },
    highlights: ["Velocidade", "Drible"],
    skills: [
      ["+3", "Explosão"],
      ["+3", "Agilidade"],
      ["+2", "Desmarque"]
    ],
    nerfs: [
      ["-2", "Desarme"],
      ["-1", "Interceptação"]
    ],
    talent: {
      name: "Ponto Cego",
      text: `Quando iniciar um <strong>Desmarque</strong> fora da visão direta do marcador, recebe <strong>+2</strong>. Se conseguir ultrapassar a linha do marcador, recebe também <strong>+1 em Explosão</strong> até tocar na bola.`
    },
    abilities: [
      {
        name: "Arrancada Predatória",
        text: `Ao identificar um espaço entre dois defensores, pode utilizar <strong>Explosão com +2</strong>. Caso consiga atravessar a linha defensiva, recebe <strong>+2 em Domínio</strong> ao receber um passe durante aquela corrida.`
      },
      {
        name: "Corte Fulminante",
        text: `Durante um Drible em velocidade, pode realizar uma mudança brusca de direção usando <strong>Agilidade</strong>. Recebe <strong>+2 em Agilidade</strong>. Se vencer por 2 ou mais de diferença, o adversário recebe <strong>-2 em Tempo de Reação</strong> contra sua próxima ação.`
      },
      {
        name: "1v1 Instintivo",
        text: `Uma vez por posse, quando estiver isolado contra apenas um defensor, recebe <strong>+1 Agilidade</strong> e <strong>+1 Finta</strong>. Se superar o marcador, recebe <strong>+1 Execução</strong> caso finalize imediatamente.`
      }
    ]
  },

  npc7: {
    name: "NPC 7",
    subtitle: "O Fantasma Azul • Ponta-esquerda / Infiltrador",
    description: "O jogador mais imprevisível do ataque. Usa aceleração, fintas e mudanças bruscas de direção para desmontar a marcação. Prefere criar a própria oportunidade em vez de depender dos companheiros.",
    level: 1,
    xp: 49,
    identity: {
      "AT": "Instinto de Ruptura",
      "EGO": "Criatividade · Despertar",
      "Arquétipo": "Ponta de Ruptura",
      "Playstyle": "Drible Encadeado"
    },
    archetypeBonus: "+1 Explosão",
    stats: {
      "Drible": 16,
      "Físico": 8,
      "Velocidade": 17,
      "Técnica": 13,
      "Defesa": 5,
      "Egoísmo": 15,
      "Passe": 10,
      "Leitura de Jogo": 11
    },
    highlights: ["Drible", "Velocidade"],
    skills: [
      ["+3", "Explosão"],
      ["+3", "Encadeamento"],
      ["+2", "Agilidade"],
      ["+2", "Finta"]
    ],
    nerfs: [
      ["-2", "Pressão"],
      ["-1", "Precisão de Passe"]
    ],
    talent: {
      name: "Sombra Inalcançável",
      text: `Uma vez por rodada, quando receber a bola com espaço para avançar, pode ativar seu talento e realizar um teste de <strong>Drible com +2</strong> contra a marcação direta. Se vencer por 2 ou mais de diferença, pode avançar até <strong>4 metros adicionais</strong> após superar o adversário. Se terminar o movimento dentro de uma zona de finalização, recebe <strong>+1 em Execução</strong> no próximo chute da mesma jogada. O bônus não acumula com outras ativações desse talento.`
    },
    abilities: [
      {
        name: "Corte Fantasma",
        text: `Quando um defensor tentar interceptar sua progressão, pode executar uma finta lateral com <strong>+2 em Finta</strong>. Se vencer, ultrapassa o defensor e mantém a posse da bola. Se perder, o movimento é interrompido normalmente.`
      }
    ]
  },

  npc8: {
    name: "NPC 8",
    subtitle: "O Arquiteto do Campo • Meio-campista central / Armador",
    description: "Um jogador cerebral que enxerga oportunidades antes dos outros. Não precisa ser o mais veloz: sua vantagem está em posicionar a bola exatamente onde a defesa não consegue responder.",
    level: 1,
    xp: 49,
    identity: {
      "AT": "Visão Calculada",
      "EGO": "Holístico · Frieza",
      "Arquétipo": "Maestro de Distribuição",
      "Playstyle": "Incisive Pass"
    },
    archetypeBonus: "+1 Precisão",
    stats: {
      "Drible": 10,
      "Físico": 7,
      "Velocidade": 9,
      "Técnica": 15,
      "Defesa": 11,
      "Egoísmo": 8,
      "Passe": 17,
      "Leitura de Jogo": 18
    },
    highlights: ["Passe", "Leitura de Jogo"],
    skills: [
      ["+3", "Percepção Espacial"],
      ["+3", "Precisão"],
      ["+2", "Antecipação de Jogadas"],
      ["+2", "Adaptação de Jogadas"]
    ],
    nerfs: [
      ["-2", "Explosão"],
      ["-1", "Potência"]
    ],
    talent: {
      name: "Geometria Impossível",
      text: `Uma vez por rodada, pode analisar o posicionamento de até <strong>3 adversários visíveis</strong>. Em seguida, escolhe um aliado para receber um passe especial. O passe recebe <strong>+2 em Precisão</strong>. Se atravessar uma linha defensiva e alcançar o aliado sem ser interceptado, o receptor recebe <strong>+2 em Domínio</strong> na primeira tentativa de controle. Se o receptor estiver sendo marcado por dois adversários, o bônus de Domínio é reduzido para <strong>+1</strong>.`
    },
    abilities: [
      {
        name: "Passe de Ruptura",
        text: `Ao passar a bola para um companheiro que esteja se movimentando em direção ao gol, recebe <strong>+2 em Precisão</strong>. Se o passe vencer a defesa por 2 ou mais de diferença, o receptor pode avançar até <strong>2 metros adicionais</strong> após dominar a bola.`
      }
    ]
  },

  npc9: {
    name: "NPC 9",
    subtitle: "O Canhão Branco • Centroavante / Finalizador de potência",
    description: "Um finalizador que combina força física, técnica e sangue-frio. Seu objetivo é simples: encontrar uma brecha e chutar antes que a defesa consiga reagir. É perigoso na área, mas não contribui tanto para a organização do time.",
    level: 1,
    xp: 49,
    identity: {
      "AT": "Instinto de Finalização",
      "EGO": "Frieza · Individualista",
      "Arquétipo": "Artilheiro de Potência",
      "Playstyle": "Power Shot"
    },
    archetypeBonus: "+1 Potência",
    stats: {
      "Drible": 9,
      "Físico": 16,
      "Velocidade": 12,
      "Técnica": 16,
      "Defesa": 6,
      "Egoísmo": 14,
      "Passe": 8,
      "Leitura de Jogo": 13
    },
    highlights: ["Físico", "Técnica"],
    skills: [
      ["+3", "Potência"],
      ["+3", "Execução"],
      ["+2", "Duelo Físico"],
      ["+2", "Frieza"]
    ],
    nerfs: [
      ["-2", "Interceptação"],
      ["-1", "Adaptação de Jogadas"]
    ],
    talent: {
      name: "Impacto Absoluto",
      text: `Uma vez por rodada, quando estiver com a bola e em condições de chutar ao gol, pode concentrar toda a força na finalização, recebendo <strong>+2 em Potência</strong>. Se vencer o teste de finalização por 2 ou mais de diferença, o goleiro não pode reduzir o resultado usando apenas um bônus passivo de posicionamento; precisará realizar uma defesa ativa conforme as regras do sistema. Após utilizar o talento, o NPC sofre <strong>-1 em Precisão</strong> na próxima ação ofensiva da mesma posse, representando o esforço necessário para executar o chute.`
    },
    abilities: [
      {
        name: "Canhão de Primeira",
        text: `Quando receber um passe rasteiro ou cruzamento baixo, pode chutar sem realizar um domínio prévio. Recebe <strong>+2 em Execução</strong> para essa finalização. Se a bola vier de um passe com efeito, o bônus é reduzido para <strong>+1</strong>. A habilidade não pode ser usada se o passe chegar fora de alcance ou se houver um bloqueio físico que impeça o chute.`
      }
    ]
  },

  npc11: {
    name: "NPC 11",
    subtitle: "O Rei Carmesim • Segundo atacante / Meia-atacante",
    description: "Um atacante agressivo que não fica parado esperando a bola. Ele explora espaços, pressiona os defensores e procura o momento exato para aparecer livre na área. Seu estilo mistura movimentação inteligente com finalizações rápidas.",
    level: 1,
    xp: 49,
    identity: {
      "AT": "Instinto Predatório",
      "EGO": "Individualista · Resiliência",
      "Arquétipo": "Atacante de Transição",
      "Playstyle": "Shadow Striker"
    },
    archetypeBonus: "+1 Desmarque",
    stats: {
      "Drible": 12,
      "Físico": 13,
      "Velocidade": 14,
      "Técnica": 15,
      "Defesa": 8,
      "Egoísmo": 17,
      "Passe": 10,
      "Leitura de Jogo": 14
    },
    highlights: ["Egoísmo", "Técnica"],
    skills: [
      ["+3", "Desmarque"],
      ["+3", "Execução"],
      ["+2", "Tempo de Reação"],
      ["+2", "Frieza"]
    ],
    nerfs: [
      ["-2", "Bloqueio"],
      ["-1", "Lançamento"]
    ],
    talent: {
      name: "Caçada Carmesim",
      text: `Uma vez por rodada, quando um adversário receber a bola a até <strong>8 metros</strong> dele, pode iniciar uma pressão agressiva com <strong>+2 em Pressão</strong>. Se vencer o teste, o adversário sofre <strong>-2 em Precisão</strong> na próxima ação com a bola, desde que seja realizada antes de sair da pressão ou se livrar da marcação. Se a pressão provocar um passe errado, o NPC recebe <strong>+1 em Tempo de Reação</strong> para disputar a bola resultante.`
    },
    abilities: [
      {
        name: "Predador do Ponto Cego",
        text: `Quando um aliado estiver com a posse da bola, pode se deslocar até <strong>3 metros</strong> para escapar da marcação direta. Se o movimento o deixar livre para receber um passe, ganha <strong>+2 em Desmarque</strong> no teste para se desvencilhar do marcador. Se receber a bola com sucesso, pode realizar uma finalização imediata, sem bônus adicional de Execução.`
      }
    ]
  },

  snuffy: {
    name: "Marc Snuffy",
    subtitle: "O Mestre dos Ubers • Master Striker · Estrategista · Ubers",
    description: "Snuffy não depende apenas de talento individual: ele transforma o campo em um tabuleiro, identifica as tendências dos adversários e monta estratégias para explorar suas fraquezas. Sua maior força é conseguir adaptar seu próprio jogo à necessidade da equipe. A ficha foi pensada como um NPC chefe de elite, muito acima dos jogadores de NV-1.",
    level: 10,
    levelLabel: "Chefe de Elite",
    xp: 999,
    identity: {
      "AT": "Estratégia Suprema",
      "EGO": "Holístico · Resiliência",
      "Arquétipo": "General de Campo",
      "Playstyle": "Tactical Mastermind"
    },
    archetypeBonus: "+1 Adaptação de Jogadas",
    stats: {
      "Drible": 22,
      "Físico": 24,
      "Velocidade": 20,
      "Técnica": 26,
      "Defesa": 23,
      "Egoísmo": 22,
      "Passe": 28,
      "Leitura de Jogo": 30
    },
    highlights: ["Passe", "Leitura de Jogo", "Técnica"],
    skills: [
      ["+4", "Adaptação de Jogadas"],
      ["+4", "Percepção Espacial"],
      ["+3", "Antecipação de Jogadas"],
      ["+3", "Precisão"],
      ["+3", "Domínio"],
      ["+3", "Frieza"],
      ["+2", "Potência"],
      ["+2", "Desarme"]
    ],
    nerfs: [
      ["-1", "Explosão — não depende exclusivamente de arrancadas curtas para superar os adversários."],
      ["-1", "Despertar — prefere estratégias calculadas a ações improvisadas motivadas pela emoção."],
      ["-2", "Egoísmo — prioriza o funcionamento coletivo em vez de buscar protagonismo em todas as jogadas."]
    ],
    talent: {
      name: "O Tabuleiro Perfeito",
      text: `<strong>Tipo:</strong> Talento passivo de liderança e adaptação.<br><br>
      No início da partida, Snuffy pode observar até <strong>3 adversários</strong> por uma rodada. Para cada adversário analisado, escolhe uma tendência entre: <strong>passe, drible, finalização ou movimentação</strong>.<br><br>
      Enquanto a tendência escolhida estiver sendo utilizada pelo adversário observado, Snuffy e um aliado designado recebem <strong>+2 na perícia apropriada</strong> para responder à jogada.<br><br>
      <strong>Exemplos:</strong><br>
      • Contra um driblador, recebe bônus em <strong>Desarme</strong> ou <strong>Antecipação de Jogadas</strong>.<br>
      • Contra um finalizador, recebe bônus em <strong>Bloqueio</strong>.<br>
      • Contra um armador, recebe bônus em <strong>Interceptação</strong>.<br>
      • Contra um jogador que busca espaços, recebe bônus em <strong>Percepção Espacial</strong>.<br><br>
      <strong>Limitação:</strong> Snuffy só pode manter três análises ativas. Se o adversário mudar completamente seu estilo de jogo, Snuffy precisa gastar uma ação para atualizar a análise. O bônus não acumula com outra análise sobre o mesmo adversário.`
    },
    abilities: [
      {
        tag: "Habilidade Inicial",
        name: "Plano de Contingência",
        text: `<strong>Tipo:</strong> Suporte tático.<br><br>
        Quando um companheiro estiver prestes a receber a bola sob pressão, Snuffy pode orientar seu posicionamento e indicar uma rota segura. O aliado recebe <strong>+3 em Adaptação de Jogadas</strong> para executar a ação seguinte. Caso consiga sair da pressão, poderá fazer um passe para outro companheiro com <strong>+2 em Precisão</strong>.<br><br>
        <strong>Restrição:</strong> Uma vez por rodada, desde que Snuffy consiga observar a jogada e comunicar a instrução.`
      },
      {
        tag: "Skill Especial",
        name: "Predador Polivalente",
        text: `<strong>Tipo:</strong> Técnica ativa de elite.<br><br>
        Snuffy adapta seu estilo à necessidade imediata da partida. Ao ativar a habilidade, escolhe uma das três funções abaixo até o fim da rodada:<br><br>
        <strong>1. Finalizador Supremo</strong><br>
        Recebe <strong>+3 em Execução</strong> e <strong>+2 em Potência</strong> ao finalizar. Se houver um companheiro em posição claramente melhor, pode optar por um passe com <strong>+2 em Precisão</strong>.<br><br>
        <strong>2. Maestro Tático</strong><br>
        Recebe <strong>+3 em Precisão</strong> e <strong>+2 em Adaptação de Jogadas</strong>. Um aliado que receba um passe bem-sucedido de Snuffy também ganha <strong>+2 em Domínio</strong>.<br><br>
        <strong>3. Muralha de Aço</strong><br>
        Recebe <strong>+3 em Desarme ou Bloqueio</strong>, à sua escolha, e <strong>+2 em Antecipação de Jogadas</strong>. Se vencer uma disputa defensiva por 3 ou mais de diferença, pode iniciar um contra-ataque com <strong>+2 em Precisão</strong> no primeiro passe.<br><br>
        <strong>Limitação:</strong> Só pode escolher uma função por rodada e não pode repetir a mesma função em rodadas consecutivas.`
      },
      {
        tag: "Habilidade Máxima",
        name: "Ubers: Domínio Absoluto",
        text: `<strong>Técnica suprema · Uso limitado a uma vez por partida.</strong><br><br>
        Snuffy assume o comando tático completo da equipe e transforma a próxima jogada em uma sequência coordenada. Escolhe até <strong>três aliados</strong> que consigam ouvi-lo. Cada um recebe uma ordem individual: <strong>infiltrar, criar linha de passe ou proteger a posse</strong>.<br><br>
        <strong>Durante a jogada:</strong><br>
        • Snuffy recebe <strong>+3 em Leitura de Jogo</strong> para coordenar as ações.<br>
        • Os aliados recebem <strong>+2 na perícia mais relevante</strong> para cumprir suas ordens.<br>
        • Se dois aliados executarem suas funções com sucesso, o jogador que finalizar a sequência recebe <strong>+3 em Execução ou Precisão</strong>, dependendo de ser um chute ou passe decisivo.<br><br>
        <strong>Condição de falha:</strong> Se o adversário antecipar a estratégia e vencer um teste de <strong>Antecipação de Jogadas</strong> contra Snuffy, o bônus final é cancelado.<br><br>
        <strong>Custo:</strong> Depois da ativação, Snuffy sofre <strong>-2 em Velocidade</strong> e <strong>-1 em Precisão</strong> até o fim da próxima rodada, devido ao esforço de coordenar toda a equipe.`
      }
    ]
  }
};

function modifierFor(value) {
  if (value <= 1) return -5;
  if (value <= 3) return -4;
  if (value <= 5) return -3;
  if (value <= 7) return -2;
  if (value <= 9) return -1;
  if (value <= 11) return 0;
  if (value <= 13) return 1;
  if (value <= 15) return 2;
  if (value <= 17) return 3;
  if (value <= 19) return 4;
  if (value <= 21) return 5;
  if (value <= 23) return 6;
  if (value <= 25) return 7;
  if (value <= 27) return 8;
  if (value <= 29) return 9;
  return 10;
}

function formatModifier(value) {
  return value > 0 ? `+${value}` : `${value}`;
}

function renderPlayer(key) {
  const player = players[key];
  const sheet = document.getElementById("sheet");

  document.title = `Ficha Blue Lock - ${player.name}`;

  const infoItems = Object.entries(player.identity).map(([label, value]) => {
    const bonus = label === "Arquétipo" ? `<small>${player.archetypeBonus}</small>` : "";
    return `
      <div class="info-item">
        <span>${label}</span>
        <strong>${value}</strong>
        ${bonus}
      </div>
    `;
  }).join("");

  const stats = Object.entries(player.stats).map(([label, value]) => {
    const mod = modifierFor(value);
    const modifierClass = mod > 0 ? "positive" : mod < 0 ? "negative" : "";
    const highlight = player.highlights.includes(label) ? "destaque" : "";
    return `
      <div class="stat ${highlight}">
        <span>${label}</span>
        <strong>${value}</strong>
        <div class="modifier ${modifierClass}">${formatModifier(mod)}</div>
      </div>
    `;
  }).join("");

  const skills = player.skills.map(([bonus, name]) => `
    <li><strong>${bonus}</strong> ${name}</li>
  `).join("");

  const nerfs = player.nerfs.map(([penalty, name]) => `
    <li><strong>${penalty}</strong> ${name}</li>
  `).join("");

  const abilities = player.abilities.map((ability, index) => `
    <section class="card ability-card secondary">
      <div class="section-tag">${ability.tag || (index === 0 ? "Habilidade Inicial" : `Skill ${index + 1}`)}</div>
      <h2>${ability.name}</h2>
      <p>${ability.text}</p>
    </section>
  `).join("");

  sheet.innerHTML = `
    <div class="sheet-fade">
      <header class="hero">
        <div>
          <p class="eyebrow">BLUE LOCK • FICHA DE PERSONAGEM</p>
          <h1>${player.name}</h1>
          <p class="subtitle">${player.subtitle}</p>
          ${player.description ? `<p class="player-description">${player.description}</p>` : ""}
        </div>

        <div class="level-card">
          <span>NV</span>
          <strong>${player.level}</strong>
          ${player.levelLabel ? `<small>${player.levelLabel}</small>` : ""}
          <small>XP ${player.xp}</small>
        </div>
      </header>

      <section class="card">
        <h2>Identidade de Jogo</h2>
        <div class="info-grid">${infoItems}</div>
      </section>

      <section class="card">
        <h2>Atributos</h2>
        <div class="stats-grid">${stats}</div>
      </section>

      <section class="split-grid">
        <article class="card">
          <h2>Perícias</h2>
          <ul class="list positive-list">${skills}</ul>
        </article>

        <article class="card">
          <h2>Nerfs</h2>
          <ul class="list negative-list">${nerfs}</ul>
        </article>
      </section>

      <section class="card ability-card">
        <div class="section-tag">Talento</div>
        <h2>${player.talent.name}</h2>
        <p>${player.talent.text}</p>
      </section>

      ${abilities}
    </div>
  `;
}

const buttons = document.querySelectorAll(".player-button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderPlayer(button.dataset.player);
    document.getElementById("sheet").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

renderPlayer("npc1");
