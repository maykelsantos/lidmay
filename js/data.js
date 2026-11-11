/* =========================================================
   CONTEÚDO EDITÁVEL DO SITE
   Tudo o que aparece escrito no site mora aqui.
   Itens entre [colchetes] são placeholders a confirmar.
   ========================================================= */
window.SITE = {
  marca: {
    nome: "Lidmay",
    sufixo: "Tech",
    nomeProvisorio: false,
    slogan: "Tecnologia que move negócios.",
    descricao:
      "Desenvolvimento de sites, aplicativos, sistemas e infraestrutura com tecnologia, estratégia e foco em resultados.",
  },

  // Número só com dígitos, com DDI e DDD. Ex.: "5581999999999". Vazio = botão leva para a página de contato.
  whatsapp: "",
  email: "",                            // [e-mail da empresa]
  instagram: "",                        // [@ da empresa]
  regiao: "Recife - PE e região",
  horario: "[horário de atendimento]",

  painel: [
    { problema: "Pedidos se perdem no WhatsApp", solucao: "Pedidos organizados em um painel", tag: "pedidos" },
    { problema: "Cliente não encontra você no Google", solucao: "Site rápido, com mapa e horários", tag: "site" },
    { problema: "Estoque e caixa em caderno e planilha", solucao: "Sistema de gestão sob medida", tag: "gestão" },
    { problema: "Tarefas repetidas todos os dias", solucao: "Automação que trabalha por você", tag: "automação" },
  ],

  frentes: [
    {
      id: "desenvolvimento",
      n: "01",
      icone: "code",
      titulo: "Desenvolvimento",
      resumo: "O seu negócio visível, vendendo e organizado na internet.",
      itens: ["Sites institucionais", "Lojas virtuais", "Sistemas personalizados", "Painéis administrativos"],
      detalhe:
        "Criamos o que o seu comércio precisa para aparecer, vender e se organizar: do site que apresenta a loja até o sistema feito sob medida para o seu jeito de trabalhar.",
      paraQuem: "Quem ainda não tem site, quer vender online ou usa ferramentas que não se encaixam no negócio.",
      exemplo: "Uma hamburgueria que recebe pedidos por mensagem e precisa de um cardápio online com pedido direto.",
    },
    {
      id: "aplicativos",
      n: "02",
      icone: "phone",
      titulo: "Aplicativos",
      resumo: "O seu cliente e a sua equipe com o negócio no bolso.",
      itens: ["Aplicativos para clientes", "Pedidos e retirada", "Gestão e operação da equipe", "Fidelidade e relacionamento"],
      detalhe:
        "Aplicativos que aproximam o cliente do balcão e dão à equipe controle do dia a dia: pedidos, atendimentos, rotinas e acompanhamento em tempo real.",
      paraQuem: "Comércios com clientes recorrentes, entrega, agendamento ou equipe externa.",
      exemplo: "Uma loja com clientes fiéis que quer um app de pedidos e de pontos de fidelidade.",
    },
    {
      id: "infraestrutura",
      n: "03",
      icone: "server",
      titulo: "Infraestrutura",
      resumo: "A base que mantém tudo no ar, seguro e funcionando.",
      itens: ["Hospedagem, cloud e domínio", "Servidores", "Redes e Wi-Fi", "Integrações e manutenção"],
      detalhe:
        "Cuidamos do que fica por trás: onde o site mora, como a rede funciona, como os sistemas conversam entre si e quem resolve quando algo sai do ar.",
      paraQuem: "Quem já tem site ou sistema, mas sofre com lentidão, quedas, rede instável ou falta de suporte.",
      exemplo: "Um comércio cujo site cai em dia de movimento e cuja rede interna não dá conta do caixa e das câmeras.",
    },
    {
      id: "negocios",
      n: "04",
      icone: "bolt",
      titulo: "Tecnologia para negócios",
      resumo: "Menos trabalho manual, mais tempo para vender.",
      itens: ["Automações", "Digitalização de processos", "Integração entre sistemas", "Relatórios e controle"],
      detalhe:
        "Mapeamos o que a sua equipe faz repetidamente à mão e transformamos em processos digitais: cobranças, agendas, estoque, atendimento e relatórios.",
      paraQuem: "Negócios que cresceram e hoje dependem de planilhas, papel e lembretes para funcionar.",
      exemplo: "Uma empresa que confere estoque e envia cobranças manualmente todo mês.",
    },
  ],

  situacoes: [
    { problema: "Cardápio ou catálogo em foto e PDF", solucao: "Catálogo online com pedido direto" },
    { problema: "Atendimento e fila feitos só no balcão", solucao: "Aplicativo de pedidos e retirada" },
    { problema: "Site lento ou fora do ar", solucao: "Hospedagem monitorada e suporte" },
    { problema: "Rede, Wi-Fi e câmeras desorganizados", solucao: "Infraestrutura planejada e documentada" },
    { problema: "Planilhas e sistemas que não conversam", solucao: "Integração entre loja, estoque e caixa" },
    { problema: "Cobranças e agenda feitas à mão", solucao: "Automação de rotinas e lembretes" },
  ],

  passos: [
    { n: "01", titulo: "Escutamos", texto: "Conversamos com você, olhando para o dia a dia do negócio: onde está o gargalo, o retrabalho, a venda perdida." },
    { n: "02", titulo: "Desenhamos", texto: "Propomos a solução mais simples que resolve de verdade, em linguagem clara, com escopo, prazo e valor combinados antes." },
    { n: "03", titulo: "Construímos", texto: "Desenvolvemos em etapas curtas, mostrando o andamento e ajustando junto com você." },
    { n: "04", titulo: "Ficamos por perto", texto: "Entregamos, treinamos a equipe e seguimos com hospedagem, manutenção e evolução." },
  ],

  pilares: [
    { icone: "rocket", titulo: "Inovação", texto: "Tecnologia atual aplicada com critério: só o que realmente faz o seu negócio avançar." },
    { icone: "chat", titulo: "Parceria", texto: "Falamos com pessoas, não só com empresas. Entendemos o seu negócio antes de oferecer qualquer solução." },
    { icone: "shield", titulo: "Confiança", texto: "Prometemos apenas o que a equipe consegue entregar, e seguimos ao seu lado depois do projeto no ar." },
    { icone: "bars", titulo: "Crescimento", texto: "Cada solução nasce de uma necessidade real e é pensada para gerar resultado, não só um produto digital." },
    { icone: "code", titulo: "Tecnologia", texto: "Sites, aplicativos, sistemas e infraestrutura explicados de forma clara, sem complicar." },
  ],

  fundadores: [
    { nome: "[Nome do sócio 1]", cargo: "[Cargo / especialidade]", texto: "[Pequena apresentação: formação, experiência e o que faz na empresa.]" },
    { nome: "[Nome do sócio 2]", cargo: "[Cargo / especialidade]", texto: "[Pequena apresentação: formação, experiência e o que faz na empresa.]" },
  ],

  opcoesContato: [
    "Site institucional",
    "Loja virtual",
    "Sistema personalizado",
    "Aplicativo",
    "Hospedagem / servidor / rede",
    "Automação de processos",
    "Ainda não sei: quero conversar",
  ],
};
