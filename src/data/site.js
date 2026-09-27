// Conteúdo base extraído do site atual (scarduellicomunicacao.com.br) e reorganizado conforme o PRD.
const IMG = 'https://www.scarduellicomunicacao.com.br/imagens'

export const contact = {
  email: 'contato@scarduellicomunicacao.com.br',
  phone: '(48) 99112-7757',
  whatsapp: 'https://wa.me/5548991127757',
  instagram: 'https://www.instagram.com/scarduelli_comunicacao',
  instagramHandle: '@scarduelli_comunicacao',
  city: 'Florianópolis · SC',
}

export const whatsappLink = (text) =>
  `${contact.whatsapp}?text=${encodeURIComponent(text)}`

export const nav = [
  { to: '/', label: 'Início' },
  { to: '/portfolio', label: 'Portfólio' },
  { to: '/cultura', label: 'Cultura' },
  { to: '/contato', label: 'Contato' },
]

export const services = [
  {
    id: 'pr',
    number: '01',
    title: 'PR & Influência',
    text: 'Assessoria de imprensa com trânsito real em redações de jornais, TVs, rádios e portais. Pautas que viram notícia.',
    items: ['Assessoria de imprensa', 'Relacionamento com a mídia', 'Gestão de crise e posicionamento'],
  },
  {
    id: 'estrategia',
    number: '02',
    title: 'Estratégia Digital',
    text: 'Presença digital pensada a partir do negócio: redes sociais, campanhas e métricas que conversam com a imprensa.',
    items: ['Administração de redes sociais', 'Marketing digital', 'Consultoria em comunicação'],
  },
  {
    id: 'eventos',
    number: '03',
    title: 'Eventos Culturais',
    text: 'Da concepção à repercussão: festivais, mostras e ativações que colocam marcas no centro da cena cultural.',
    items: ['Organização de eventos', 'Captação via leis de incentivo', 'Cobertura e repercussão'],
  },
  {
    id: 'conteudo',
    number: '04',
    title: 'Content Studio',
    text: 'Histórias bem contadas em qualquer formato — do release ao impresso, do vídeo curto à revista institucional.',
    items: ['Produção de conteúdos', 'Editoração de veículos impressos', 'Design e identidade editorial'],
  },
]

export const process = [
  { step: 'Entendemos seu negócio', text: 'Imersão na marca, no público e nos objetivos.' },
  { step: 'Você escolhe um pacote', text: 'Escopo sob medida, sem excessos.' },
  { step: 'Desenvolvemos o briefing', text: 'Narrativa, mensagens-chave e calendário.' },
  { step: 'Selecionamos a mídia', text: 'Os veículos que realmente falam com seus clientes.' },
  { step: 'Monitoramos os resultados', text: 'Clipping, alcance e relatórios claros.' },
]

export const stats = [
  { value: '40', suffix: 'anos', label: 'de trajetória no jornalismo e na comunicação' },
  { value: '12', suffix: '+', label: 'anos no ecossistema cultural de SC' },
  { value: '100', suffix: '+', label: 'jornalistas e veículos na rede de relacionamento' },
  { value: '7', suffix: '', label: 'frentes de serviço integradas' },
]

export const categories = ['Todos', 'Arte', 'Eventos', 'PR', 'Festivais']

export const cases = [
  {
    slug: 'floripa-sunset-cultural',
    title: 'Floripa Sunset Cultural',
    client: 'Floripa Sunset Cultural',
    tags: ['Festivais', 'Eventos'],
    year: '2026',
    image: `${IMG}/img_notc/notc_145.jpg`,
    excerpt: 'Eletrônico, pop rock e pagode ao pôr do sol na Beira-Mar Continental — gratuito, aberto e viabilizado por incentivo à cultura.',
    challenge:
      'Dar escala e presença de mídia a um projeto gratuito e periódico, que ocupa espaços icônicos da Capital e depende de patrocinadores via Lei Municipal de Incentivo à Cultura.',
    strategy: [
      'Calendário de pautas por edição, com destaque para cada atração do line-up.',
      'Narrativa de ocupação cultural da cidade, valorizando os espaços públicos.',
      'Visibilidade para as marcas patrocinadoras integrada à cobertura.',
    ],
    highlights: ['Line-up multigênero em espaço aberto', 'Evento gratuito à população', 'Patrocínio via Lei de Incentivo'],
    source: 'https://www.scarduellicomunicacao.com.br/noticia/floripa-sunset-cultural-reune-eletronico-pop-rock-e-pagode-na-beira-mar-continental-neste-domingo',
  },
  {
    slug: 'camerata-java-jazz',
    title: 'Camerata no Java Jazz Festival',
    client: 'Camerata Florianópolis',
    tags: ['Arte', 'Festivais', 'PR'],
    year: '2026',
    image: `${IMG}/img_notc/notc_144.jpg`,
    excerpt: 'Os bastidores de uma orquestra catarinense cruzando o planeta para representar o Brasil em Jacarta.',
    challenge:
      'Transformar a participação da Camerata Florianópolis na 21ª edição do Java Jazz Festival, na Indonésia, em uma história que fosse além da agenda de concertos.',
    strategy: [
      'Pauta de bastidores: a engenharia logística de mais de 48 horas de viagem.',
      'Ângulo de orgulho regional — Florianópolis representando o país num dos maiores festivais de jazz do mundo.',
      'Acompanhamento em tempo real, do embarque ao palco.',
    ],
    highlights: ['Pauta internacional com ângulo local', 'Narrativa de bastidores', 'Cobertura em tempo real'],
    source: 'https://www.scarduellicomunicacao.com.br/noticia/bastidores-da-musica-a-complexa-engenharia-logistica-da-camerata-florianopolis-para-cruzar-o-planeta-e-se-apresentar-em-festival-de-jazz-na-indonesia',
  },
  {
    slug: 'villa-francioni-robert-plant',
    title: 'Villa Francioni & Robert Plant',
    client: 'Villa Francioni',
    tags: ['PR', 'Arte'],
    year: '2026',
    image: `${IMG}/img_notc/notc_146.jpg`,
    excerpt: 'Quando o vocalista do Led Zeppelin escolhe um vinho de altitude catarinense, a notícia se escreve sozinha — com a mão certa.',
    challenge:
      'Converter um momento espontâneo — Robert Plant provando o Sauvignon Blanc da vinícola em Porto Alegre — em reputação de marca para os vinhos de altitude de Santa Catarina.',
    strategy: [
      'Agilidade para apurar e publicar enquanto o assunto estava quente.',
      'Conexão com o histórico da marca (o Rosé aprovado por Madonna, anos antes).',
      'Distribuição para editorias de gastronomia, música e estilo de vida.',
    ],
    highlights: ['Conexão marca × ícone da música', 'Timing de oportunidade', 'Pauta transversal entre editorias'],
    source: 'https://www.scarduellicomunicacao.com.br/noticia/villa-francioni-conquista-o-paladar-de-robert-plant-vocalista-do-led-zeppelin',
  },
  {
    slug: 'floripa-sustentavel-miami',
    title: 'Ponte Florianópolis–Miami',
    client: 'Floripa Sustentável',
    tags: ['PR', 'Eventos'],
    year: '2026',
    image: `${IMG}/img_notc/notc_147.jpg`,
    excerpt: 'ACATE e Mana Tech firmam parceria para um bureau de negócios na Flórida, com apoio do Floripa Sustentável.',
    challenge:
      'Comunicar um acordo institucional entre ecossistemas de inovação — Santa Catarina e Miami — de forma clara para público empresarial e imprensa.',
    strategy: [
      'Tradução do acordo em impacto concreto para empresas catarinenses.',
      'Gancho com o Tech Cities of America, evento em Miami com presença do prefeito.',
      'Relacionamento com imprensa de economia e inovação.',
    ],
    highlights: ['Comunicação institucional', 'Pauta de economia e inovação', 'Articulação entre parceiros'],
    source: 'https://www.scarduellicomunicacao.com.br/noticia/com-apoio-do-floripa-sustentavel-acate-e-mana-tech-firmam-parceria-para-criar-bureau-de-negocios-em-miami-e-internacionalizar-empresas-de-sc',
  },
  {
    slug: 'colegio-fatima-copa',
    title: 'Meu Recreio é Show — Copa',
    client: 'Colégio Salvatoriano Fátima',
    tags: ['Eventos'],
    year: '2026',
    image: `${IMG}/img_notc/notc_143.jpg`,
    excerpt: 'Troca de figurinhas e recreio temático: uma escola do Estreito entra no clima da Copa do Mundo.',
    challenge:
      'Mostrar o projeto pedagógico da escola para além dos muros, aproveitando o interesse do público pela Copa do Mundo.',
    strategy: [
      'Gancho sazonal com a Copa para ampliar o interesse das redações.',
      'Foco em comunidade: estudantes, famílias e educadores.',
      'Agenda de ações com fotos e personagens para a imprensa.',
    ],
    highlights: ['Gancho sazonal', 'Pauta de comunidade', 'Evento com agenda aberta'],
    source: 'https://www.scarduellicomunicacao.com.br/noticia/de-troca-de-figurinhas-a-recreio-tematico-colegio-em-florianopolis-entra-no-clima-da-copa-do-mundo',
  },
  {
    slug: 'hof-saude-ocular',
    title: 'Hormônios & Visão',
    client: 'Hospital de Olhos de Florianópolis',
    tags: ['PR'],
    year: '2026',
    image: `${IMG}/img_notc/notc_142.jpg`,
    excerpt: 'Conteúdo de serviço no mês das mulheres: como as fases hormonais afetam a saúde dos olhos.',
    challenge:
      'Posicionar a diretoria clínica do HOF como fonte especializada, com um tema pouco explorado e de interesse amplo.',
    strategy: [
      'Pauta de utilidade pública alinhada ao calendário (março, mês das mulheres).',
      'Porta-voz especialista preparada para entrevistas.',
      'Conteúdo replicável em imprensa, blog e redes sociais.',
    ],
    highlights: ['Porta-voz especialista', 'Jornalismo de serviço', 'Conteúdo multiplataforma'],
    source: 'https://www.scarduellicomunicacao.com.br/noticia/hormonios-femininos-tambem-afetam-a-visao-especialista-alerta-para-cuidados-com-os-olhos-em-diferentes-fases-da-vida',
  },
]

export const clients = [
  { name: 'Camerata Florianópolis', logo: `${IMG}/img_clin/md_clin_20.jpg` },
  { name: 'Hospital de Olhos de Florianópolis', logo: `${IMG}/img_clin/md_clin_35.jpg` },
  { name: 'Villa Francioni', logo: `${IMG}/img_clin/md_clin_37.jpg` },
  { name: 'Floripa Sustentável', logo: `${IMG}/img_clin/md_clin_38.jpg` },
  { name: 'Conexão BIM', logo: `${IMG}/img_clin/md_clin_39.jpg` },
  { name: 'SCClubes', logo: `${IMG}/img_clin/md_clin_41.jpg` },
  { name: 'FMW', logo: `${IMG}/img_clin/md_clin_43.jpg` },
  { name: 'FAM', logo: `${IMG}/img_clin/md_clin_44.jpg` },
  { name: 'Feira Maria da Ilha Gastrotruck', logo: `${IMG}/img_clin/md_clin_45.jpg` },
]

export const team = [
  { name: 'Paulo Scarduelli', role: 'Fundador · Jornalista', bio: 'Jornalista pela UFSC (1986) e Mestre em Comunicação pela USP (1996). Fundador da Scarduelli Comunicação.' },
  { name: 'Malu Sousa', role: 'Jornalista · Digital', bio: 'Jornalista pela UNISUL (2019), pós-graduada em Marketing Digital. Apaixonada por contar histórias.' },
  { name: 'Fernanda Lupion', role: 'Jornalista · Conteúdo', bio: 'Jornalista pela Unoeste (2017), com experiência em jornal impresso diário e TV em diversas editorias.' },
  { name: 'Vitor Botelho', role: 'Designer Gráfico', bio: 'Autodidata, apaixonado por design e entusiasta de interfaces.' },
]

export const values = [
  { title: 'Ética', text: 'Valores inegociáveis que guiam cada pauta, cada cliente e cada relação com a imprensa.' },
  { title: 'Comprometimento', text: 'Presença do início ao fim — da primeira conversa ao relatório de resultados.' },
  { title: 'Conhecimento', text: 'Rigor acadêmico e décadas de redação para acertar com base, não com palpite.' },
]
