export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  content: string;
}

export const newsData: NewsItem[] = [
  {
    id: "rota-da-seda-digital",
    title: "A Nova Rota da Seda Digital: Como a tecnologia está redefinindo as exportações",
    category: "Mercado & Estratégia",
    date: "26 Dez, 2025",
    image: "/news-digital-silk-road.jpg",
    summary: "Análise exclusiva sobre o impacto da digitalização nos corredores logísticos e a redução de custos para o agronegócio nacional.",
    content: `
        <p class="lead text-xl md:text-2xl font-light text-gray-800 mb-8 font-serif italic border-l-4 border-[#7c522e] pl-6">
            "A digitalização não é apenas uma ferramenta de eficiência, é o novo terreno onde as nações negociam sua soberania econômica."
        </p>

        <p>
            A logística global está passando por sua maior transformação desde a invenção do contêiner. A chamada "Rota da Seda Digital" não é feita de asfalto ou trilhos, mas de cabos de fibra ótica, data centers e algoritmos de blockchain que prometem reduzir drasticamente o atrito no comércio internacional.
        </p>

        <h2>O Fim da Documentação em Papel</h2>
        <p>
            Estudos indicam que o processamento de documentação física representa até 20% do custo total de transporte de mercadorias. A implementação de Smart Contracts e sistemas de rastreabilidade ponta-a-ponta está eliminando intermediários burocráticos, permitindo que cargas liberadas em Xangai sejam pré-aprovadas em Santos antes mesmo de o navio zarpar.
        </p>

        <h2>Integração Brasil-Ásia</h2>
        <p>
            Para o agronegócio brasileiro, isso significa previsibilidade. A CCTAAL tem monitorado projetos pilotos que integram os sistemas fitossanitários brasileiros diretamente com as alfândegas chinesas. O resultado é uma redução média de 5 dias no tempo de desembaraço aduaneiro.
        </p>

        <p>
            Essa integração digital cria um "corredor expresso" para commodities certificadas, valorizando a produção que já nasce rastreada e em conformidade com os mais rigorosos padrões internacionais.
        </p>

        <h2>O Papel da Infraestrutura 5G</h2>
        <p>
            A expansão do 5G nos portos e, crucialmente, nas fazendas, é o elo físico dessa revolução. Sensores IoT monitoram a umidade do grão do silo ao porão do navio, garantindo a qualidade do produto e reduzindo perdas que historicamente chegavam a 5% da safra.
        </p>

        <div class="bg-[#f9f9f7] p-8 rounded-sm my-12 border border-[#7c522e]/20">
            <h3 class="text-xl font-serif font-bold text-[#7c522e] mt-0 mb-4">Pontos Chave</h3>
            <ul class="list-disc pl-5 space-y-2 mb-0">
                <li>Redução de custos burocráticos em até 15%.</li>
                <li>Aceleração do desembaraço aduaneiro em portos estratégicos.</li>
                <li>Rastreabilidade total como diferencial competitivo premium.</li>
                <li>Integração de sistemas governamentais via Blockchain.</li>
            </ul>
        </div>

        <p>
            Estamos diante de uma oportunidade histórica: converter nossa vantagem comparativa natural (terra e clima) em uma vantagem competitiva sustentável através da tecnologia. A Rota da Seda Digital já está sendo pavimentada, e o Brasil precisa garantir seu lugar neste novo mapa mundi.
        </p>
    `
  },
  {
    id: "1",
    title: "China aprova novo protocolo para soja sustentável brasileira",
    category: "Regulação",
    date: "22 Dez, 2025",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=2627&auto=format&fit=crop", // Soy Field
    summary: "Novo acordo bilateral estabelece critérios claros para rastreabilidade e sustentabilidade, abrindo portas para produtores certificados.",
    content: `
        <p>A Administração Geral de Alfândegas da China (GACC) anunciou nesta terça-feira a aprovação de um novo protocolo sanitário e ambiental para a importação de soja brasileira. O acordo, negociado ao longo dos últimos 18 meses com o apoio direto da CCTAAL, estabelece critérios rigorosos, mas transparentes, para a certificação de "soja verde".</p>
        
        <p>Segundo o documento, produtores que comprovarem rastreabilidade completa e desmatamento zero terão acesso a um "fast-track" nos portos chineses, reduzindo o tempo de desembaraço de 15 para apenas 4 dias. Esta medida representa um avanço significativo na logística de exportação e premia o agricultor brasileiro que investe em sustentabilidade.</p>
        
        <p>"Este é um marco histórico. Não estamos apenas vendendo commodities, estamos vendendo segurança alimentar com responsabilidade ambiental", afirmou o presidente da CCTAAL em nota oficial. A expectativa é que o volume de soja certificada exportada para a China cresça 25% já no primeiro semestre de 2026.</p>
        
        <p>Especialistas de mercado apontam que a medida deve valorizar o prêmio pago sobre a saca de soja brasileira em Chicago, consolidando a liderança do país como fornecedor preferencial para o gigante asiático.</p>
      `
  },
  {
    id: "2",
    title: "Tecnologia 5G no campo aumenta produtividade em 15% no Mato Grosso",
    category: "Tecnologia",
    date: "20 Dez, 2025",
    image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=2638&auto=format&fit=crop", // Smart Farming/Drone
    summary: "Projeto piloto em Sorriso demonstra como a conectividade total permite gestão em tempo real de maquinário e defensivos.",
    content: `
        <p>Os resultados do projeto piloto "Conectar Agro", implementado em fazendas de Sorriso (MT), superaram as expectativas mais otimistas. O uso de redes 5G privadas para conectar colheitadeiras autônomas, drones de monitoramento e sensores de solo resultou em um aumento médio de 15% na produtividade por hectare.</p>
        
        <p>A latência quase nula do 5G permitiu ajustes em tempo real na aplicação de defensivos, gerando uma economia de insumos da ordem de 20%. "A precisão milimétrica que conseguimos atingir muda completamente a equação de custo da lavoura", explica a engenheira agrônoma líder do projeto.</p>
        
        <p>O desafio agora é a infraestrutura. A CCTAAL está liderando um consórcio de investidores para expandir a cobertura de fibra ótica e antenas 5G para regiões adjacentes, visando cobrir 2 milhões de hectares até o final de 2026.</p>
      `
  },
  {
    id: "3",
    title: "Volume de exportações pelo Arco Norte bate recorde histórico",
    category: "Logística",
    date: "18 Dez, 2025",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop", // Large Container Port
    summary: "Investimentos em infraestrutura fluvial e portuária consolidam a rota norte como principal saída para o milho e soja.",
    content: `
        <p>Pela primeira vez na história, os portos do Arco Norte escoaram mais de 50% de toda a safra de grãos produzida acima do paralelo 16. O dado confirma a consolidação da rota logística que integra hidrovia e rodovia, reduzindo a dependência dos portos de Santos e Paranaguá.</p>
        
        <p>A eficiência logística do Arco Norte reduziu o custo de frete em cerca de 12% para os produtores do Mato Grosso e Pará. "Cada dólar economizado no frete é um dólar a mais na margem do produtor e na competividade do Brasil lá fora", analisa o diretor de logística da CCTAAL.</p>
        
        <p>Novos investimentos privados estão previstos para a ampliação dos terminais de transbordo em Miritituba, prometendo aumentar a capacidade de escoamento em mais 10 milhões de toneladas para a próxima safra.</p>
      `
  },
  {
    id: "4",
    title: "Mercado de Crédito de Carbono: O novo ouro verde da LatAm",
    category: "Mercado",
    date: "15 Dez, 2025",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2641&auto=format&fit=crop", // Green Forest
    summary: "Regulamentação global impulsiona demanda por ativos ambientais e coloca a América Latina no centro das negociações.",
    content: `
        <p>Com a entrada em vigor das novas regras do Artigo 6 do Acordo de Paris, o mercado voluntário de carbono experimenta um boom sem precedentes. A América Latina, com seu vasto potencial de reflorestamento e agricultura regenerativa, está se posicionando como o grande "banco central" desses ativos.</p>
        
        <p>Projetos de ILPF (Integração Lavoura-Pecuária-Floresta) no Brasil e Paraguai estão sendo negociados a prêmios de até US$ 30 por tonelada de CO2 equivalente. Grandes corporações europeias e asiáticas correm para garantir contratos de longo prazo (offtake agreements) para compensar suas emissões.</p>
        
        <p>"Não é mais sobre plantar para colher apenas grãos. O produtor moderno colhe grãos, carne e carbono. É a diversificação definitiva da receita rural", comenta o especialista em finanças verdes da CCTAAL.</p>
      `
  },
  {
    id: "5",
    title: "Parceria CCTAAL e Governo de Xangai abre portas para startups",
    category: "Institucional",
    date: "12 Dez, 2025",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop", // Professional Handshake/Meeting
    summary: "Programa de aceleração levará 10 AgTechs latinas para imersão no ecossistema de inovação chinês.",
    content: `
        <p>A CCTAAL assinou ontem um memorando de entendimento com o Parque Tecnológico de Zhangjiang, em Xangai, criando o programa "Bridge to Innovation". A iniciativa selecionará anualmente 10 startups do setor agroindustrial (AgTechs) da América Latina para um programa de imersão de 3 meses na China.</p>
        
        <p>O objetivo é conectar inovações em biotecnologia e automação desenvolvidas na LatAm com o capital de risco e a escala de mercado chineses. As empresas selecionadas terão acesso a mentorias, espaço de escritório e rodadas exclusivas com fundos de Venture Capital asiáticos.</p>
        
        <p>As inscrições para a primeira turma abrem em janeiro de 2026. "Queremos transformar nossas startups em unicórnios globais, usando a China como trampolim", disse a diretora de tecnologia da Câmara.</p>
      `
  },
  {
    id: "6",
    title: "Previsão Safra 2026: Clima favorável impulsiona projeções",
    category: "Mercado",
    date: "10 Dez, 2025",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2671&auto=format&fit=crop", // Farming Field
    summary: "Relatório da CCTAAL Intelligence aponta para recuperação dos níveis de chuva no Sul e Centro-Oeste.",
    content: `
        <p>Os modelos meteorológicos analisados pela equipe de CCTAAL Intelligence indicam o fim do ciclo de La Niña, trazendo chuvas regulares para as principais regiões produtoras do continente a partir de setembro.</p>
        
        <p>A projeção inicial é de uma safra recorde de 320 milhões de toneladas de grãos no Brasil, com recuperação significativa na produtividade do milho safrinha. Na Argentina, espera-se que a produção de soja volte aos patamares históricos de 50 milhões de toneladas, após três anos de seca severa.</p>
        
        <p>O otimismo, no entanto, vem acompanhado de cautela nos custos. Embora a produtividade prometa ser alta, a margem do produtor dependerá da gestão eficiente da compra de insumos em um cenário de dólar ainda volátil.</p>
      `
  }
];
