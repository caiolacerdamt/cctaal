export interface NewsItem {
  id: string;
  image: string;
  date: string;
  sourceUrl?: string;
  translations: {
    pt: NewsTranslation;
    en: NewsTranslation;
    es: NewsTranslation;
    zh: NewsTranslation;
  };
}

export interface NewsTranslation {
  title: string;
  category: string;
  summary: string;
  content: string;
}

export const newsData: NewsItem[] = [
  {
    id: "soja-recorde-china-2026",
    image: "/images/news/soja-recorde.jpg",
    date: "20 Jan, 2026",
    sourceUrl: "https://forbes.com.br/forbesagro/2026/01/brasil-detem-736-do-mercado-de-soja-na-china-em-ano-de-recorde-historico/",
    translations: {
      pt: {
        title: "Brasil detém 73,6% do mercado de soja na China em ano de recorde histórico",
        category: "Mercado & Estratégia",
        summary: "Participação brasileira atinge patamar inédito em 2025/26, consolidando liderança frente aos EUA.",
        content: `
          <p class="lead text-xl md:text-2xl font-light text-gray-800 mb-8 font-serif italic border-l-4 border-[#7c522e] pl-6">
              "A consolidação do Brasil como fornecedor preferencial da China redesenha a geopolítica do agronegócio global em 2026."
          </p>
          <p>
              A participação do Brasil no mercado chinês de soja atingiu um patamar histórico de 73,6% no ciclo comercial encerrado em janeiro de 2026. Dados da Alfândega Chinesa (GACC) confirmam que o volume total importado superou 111 milhões de toneladas, com o produto brasileiro dominando as preferências dos processadores asiáticos.
          </p>
          <h2>Competitividade e Logística</h2>
          <p>
              O crescimento reflete não apenas a safra recorde, mas avanços cruciais na logística portuária do Arco Norte, que reduziu o tempo de trânsito para Xangai. "O Brasil provou ser o parceiro mais confiável em volume e qualidade proteica", afirma a análise da Forbes Agro.
          </p>
          <p>
              Enquanto isso, a participação dos EUA recuou para 15%, o menor nível em três décadas, pressionada pela força da oferta sul-americana e novas diretrizes de diversificação de Pequim.
          </p>
        `
      },
      en: {
        title: "Brazil holds 73.6% of China's soybean market in historic record year",
        category: "Market & Strategy",
        summary: "Brazilian share reaches unprecedented levels in 2025/26, consolidating leadership against the US.",
        content: `
          <p class="lead text-xl md:text-2xl font-light text-gray-800 mb-8 font-serif italic border-l-4 border-[#7c522e] pl-6">
              "Brazil's consolidation as China's preferred supplier redraws global agribusiness geopolitics in 2026."
          </p>
          <p>
              Brazil's share of the Chinese soybean market reached a historic 73.6% in the trade cycle ending January 2026. Chinese Customs (GACC) data confirms total import volume exceeded 111 million tons, with Brazilian product dominating Asian processor preferences.
          </p>
          <h2>Competitiveness and Logistics</h2>
          <p>
              The growth reflects not only a record harvest but crucial advances in Northern Arc port logistics, which reduced transit time to Shanghai. "Brazil has proven to be the most reliable partner in volume and protein quality," states Forbes Agro analysis.
          </p>
          <p>
              Meanwhile, US share retreated to 15%, the lowest level in three decades, pressured by South American supply strength and Beijing's new diversification guidelines.
          </p>
        `
      },
      es: {
        title: "Brasil posee el 73,6% del mercado de soja en China en un año de récord histórico",
        category: "Mercado y Estrategia",
        summary: "La participación brasileña alcanza niveles inéditos en 2025/26, consolidando liderazgo frente a EE.UU.",
        content: `
          <p class="lead text-xl md:text-2xl font-light text-gray-800 mb-8 font-serif italic border-l-4 border-[#7c522e] pl-6">
              "La consolidación de Brasil como proveedor preferido de China rediseña la geopolítica del agronegocio global en 2026."
          </p>
          <p>
              La participación de Brasil en el mercado chino de soja alcanzó un histórico 73,6% en el ciclo comercial cerrado en enero de 2026. Datos de la Aduana China (GACC) confirman que el volumen total importado superó 111 millones de toneladas, con el producto brasileño dominando las preferencias.
          </p>
          <h2>Competitividad y Logística</h2>
          <p>
              El crecimiento refleja no solo la cosecha récord, sino avances cruciales en la logística portuaria del Arco Norte. "Brasil demostró ser el socio más confiable en volumen y calidad proteica", afirma el análisis de Forbes Agro.
          </p>
          <p>
              Mientras tanto, la participación de EE.UU. retrocedió al 15%, el nivel más bajo en tres décadas, presionada por la fuerza de la oferta sudamericana.
          </p>
        `
      },
      zh: {
        title: "巴西在中国大豆市场份额达到 73.6%，创历史新高",
        category: "市场与战略",
        summary: "2025/26 年巴西市场份额达到前所未有的水平，巩固了对美国的领先地位。",
        content: `
          <p class="lead text-xl md:text-2xl font-light text-gray-800 mb-8 font-serif italic border-l-4 border-[#7c522e] pl-6">
              “巴西作为中国首选供应商的地位在 2026 年重塑了全球农业综合企业的地缘政治。”
          </p>
          <p>
              在截至 2026 年 1 月的贸易周期中，巴西在中国大豆市场的份额达到了历史性的 73.6%。中国海关（GACC）数据证实，进口总量超过 1.11 亿吨，巴西产品主导了亚洲加工商的偏好。
          </p>
          <h2>竞争力和物流</h2>
          <p>
              这种增长不仅反映了创纪录的收成，也反映了北部弧线港口物流的关键进展，缩短了到上海的运输时间。Forbes Agro 分析称：“在数量和蛋白质量方面，巴西已被证明是最可靠的合作伙伴。”
          </p>
          <p>
              与此同时，美国的份额回落至 15%，为三十年来的最低水平，受到南美供应强劲和北京新的多元化方针的压力。
          </p>
        `
      }
    }
  },
  {
    id: "agrishow-2026-ingressos",
    image: "/images/news/agrishow-2026.jpg",
    date: "20 Jan, 2026",
    sourceUrl: "https://visaoagro.com.br/agrishow-inicia-venda-de-ingressos-para-a-edicao-de-2026/",
    translations: {
      pt: {
        title: "Agrishow 2026 inicia venda de ingressos com foco em conectividade 5.5G",
        category: "Eventos & Tech",
        summary: "Maior feira do setor abre bilheteria para edição que promete revolucionar a agricultura digital.",
        content: `
          <p>A organização da Agrishow, maior feira de tecnologia agrícola da América Latina, anunciou o início das vendas para a edição de 2026. O evento terá como tema central a "Conectividade Total".</p>
          <p>Pela primeira vez, serão demonstradas soluções comerciais de 5.5G aplicadas ao campo, permitindo latência zero para enxames de drones e maquinário autônomo.</p>
        `
      },
      en: {
        title: "Agrishow 2026 ticket sales begin with focus on 5.5G connectivity",
        category: "Events & Tech",
        summary: "Largest sector fair opens box office for edition promising to revolutionize digital agriculture.",
        content: `
          <p>The organizers of Agrishow, Latin America's largest agricultural technology fair, announced the start of ticket sales for the 2026 edition. The central theme represents "Total Connectivity".</p>
          <p>For the first time, commercial 5.5G solutions applied to the field will be demonstrated, allowing zero latency for drone swarms and autonomous machinery.</p>
        `
      },
      es: {
        title: "Agrishow 2026 inicia venta de entradas con foco en conectividad 5.5G",
        category: "Eventos y Tech",
        summary: "La mayor feria del sector abre taquilla para edición que promete revolucionar la agricultura digital.",
        content: `
          <p>La organización de Agrishow, la mayor feria de tecnología agrícola de América Latina, anunció el inicio de ventas para la edición 2026. El evento tendrá como tema central la "Conectividad Total".</p>
          <p>Por primera vez, se demostrarán soluciones comerciales de 5.5G aplicadas al campo, permitiendo latencia cero para enjambres de drones y maquinaria autónoma.</p>
        `
      },
      zh: {
        title: "Agrishow 2026 开始售票，聚焦 5.5G 连接",
        category: "活动与科技",
        summary: "该行业最大的展会计票处开启，承诺彻底改变数字农业。",
        content: `
          <p>拉丁美洲最大的农业技术博览会 Agrishow 的组织者宣布 2026 年展会的门票开始销售。 中心主题代表“全面连接”。</p>
          <p>将首次展示应用于田间的商业 5.5G 解决方案，实现无人机群和自动机械的零延迟。</p>
        `
      }
    }
  },
  {
    id: "safra-soja-25-26-avanco",
    image: "/images/news/safra-soja.jpg",
    date: "12 Jan, 2026",
    sourceUrl: "https://www.agrolink.com.br/noticias/safra-de-soja-2025-26-caminha-para-novo-recorde_509616.html",
    translations: {
      pt: {
        title: "Safra de soja 2025/26 caminha para novo recorde de 177 milhões de toneladas",
        category: "Produção",
        summary: "Condições climáticas favoráveis em janeiro revertem cautela inicial e apontam para super-safra.",
        content: `
          <p>Com 96% da área semeada, a safra 2025/26 demonstra vigor excepcional. O relatório da Agrolink destaca que as chuvas regulares de janeiro foram decisivas para o enchimento de grãos.</p>
          <p>A projeção de 177 milhões de toneladas coloca o Brasil novamente na vanguarda da produção mundial, essencial para atender a demanda aquecida do leste asiático.</p>
        `
      },
      en: {
        title: "2025/26 soybean harvest heads for new record of 177 million tons",
        category: "Production",
        summary: "Favorable weather conditions in January reverse initial caution and point to super-harvest.",
        content: `
          <p>With 96% of the area sown, the 2025/26 crop demonstrates exceptional vigor. The Agrolink report highlights that regular January rains were decisive for grain filling.</p>
          <p>The projection of 177 million tons places Brazil once again at the forefront of global production, essential to meet heated East Asian demand.</p>
        `
      },
      es: {
        title: "Cosecha de soja 2025/26 se encamina a nuevo récord de 177 millones de toneladas",
        category: "Producción",
        summary: "Condiciones climáticas favorables en enero revierten cautela inicial y apuntan a súper cosecha.",
        content: `
          <p>Con 96% del área sembrada, la cosecha 2025/26 demuestra vigor excepcional. El informe de Agrolink destaca que las lluvias regulares fueron decisivas.</p>
          <p>La proyección de 177 millones de toneladas coloca a Brasil nuevamente en la vanguardia de la producción mundial, esencial para atender la demanda asiática.</p>
        `
      },
      zh: {
        title: "2025/26 大豆收成将创下 1.77 亿吨的新纪录",
        category: "生产",
        summary: "1 月份有利的天气条件扭转了最初的谨慎态度，预示着大丰收。",
        content: `
          <p>播种面积达到 96%，2025/26 年度作物表现出非凡的活力。 Agrolink 报告强调，1 月份的规律降雨对谷物灌浆起到了决定性作用。</p>
          <p>1.77 亿吨的预测值使巴西再次处于全球生产的最前沿，对于满足东亚激增的需求至关重要。</p>
        `
      }
    }
  },
  {
    id: "usda-wasde-jan-2026",
    image: "/images/news/usda-soybean.jpg",
    date: "10 Jan, 2026",
    sourceUrl: "https://br.tradingview.com/news/barchart:1e408174f094b:0-soybeans-fall-on-monday-as-usda-raises-carryout/",
    translations: {
      pt: {
        title: "USDA mantém projeção conservadora para safra brasileira e derruba preços",
        category: "Mercado Global",
        summary: "Relatório WASDE de janeiro impacta Chicago ao elevar estoques finais, apesar da cautela com clima.",
        content: `
          <p>O Departamento de Agricultura dos EUA (USDA) divulgou seu relatório mensal (WASDE), elevando a estimativa da safra brasileira. O ajuste técnico pressionou as cotações em Chicago.</p>
          <p>Analistas veem a oferta sul-americana como o principal fator de baixa para 2026, obrigando produtores americanos a revisarem margens.</p>
        `
      },
      en: {
        title: "USDA maintains conservative projection for Brazilian crop and pushes prices down",
        category: "Global Market",
        summary: "January WASDE report impacts Chicago by raising ending stocks, despite weather caution.",
        content: `
          <p>The US Department of Agriculture (USDA) released its monthly report (WASDE), raising the Brazilian crop estimate. The technical adjustment pressured Chicago quotes.</p>
          <p>Analysts see South American supply as the main bearish factor for 2026, forcing US producers to revise margins.</p>
        `
      },
      es: {
        title: "USDA mantiene proyección conservadora para cosecha brasileña y derriba precios",
        category: "Mercado Global",
        summary: "Informe WASDE de enero impacta Chicago al elevar stocks finales, a pesar de cautela climática.",
        content: `
          <p>El Departamento de Agricultura de EE.UU. (USDA) divulgó su informe mensual (WASDE), elevando la estimación de la cosecha brasileña. El ajuste técnico presionó las cotizaciones en Chicago.</p>
          <p>Analistas ven la oferta sudamericana como el principal factor bajista para 2026, obligando a productores americanos a revisar márgenes.</p>
        `
      },
      zh: {
        title: "美国农业部维持对巴西作物的保守预测，导致价格下跌",
        category: "全球市场",
        summary: "尽管对天气持谨慎态度，美国农业部 1 月份的供需报告提高了期末库存，从而影响了芝加哥市场。",
        content: `
          <p>美国农业部（USDA）发布月度报告（WASDE），上调了巴西作物产量预估。 技术调整给芝加哥报价带来了压力。</p>
          <p>分析师认为南美供应是 2026 年的主要利空因素，迫使美国生产商修正利润率。</p>
        `
      }
    }
  },
  {
    id: "china-eua-soja-2026",
    image: "/images/news/us-china-trade.jpg",
    date: "19 Jan, 2026",
    sourceUrl: "https://exame.com/agro/eua-diz-que-china-vai-comprar-25-milhoes-de-toneladas-de-soja-em-2026/",
    translations: {
      pt: {
        title: "EUA confirmam acordo para China comprar 25 milhões de toneladas de soja em 2026",
        category: "Geopolítica",
        summary: "Acordo bilateral visa diversificar fornecedores e garantir segurança alimentar chinesa.",
        content: `
          <p>Em um movimento estratégico, Pequim e Washington firmaram compromisso para o embarque de 25 milhões de toneladas em 2026. O acordo é visto como uma 'apólice de seguro' chinesa.</p>
          <p>Para o exportador brasileiro, o sinal é claro: a competividade em preço e sustentabilidade será a garantia de market share.</p>
        `
      },
      en: {
        title: "US confirms deal for China to buy 25 million tons of soy in 2026",
        category: "Geopolitics",
        summary: "Bilateral agreement aims to diversify suppliers and ensure Chinese food security.",
        content: `
          <p>In a strategic move, Beijing and Washington signed a commitment for the shipment of 25 million tons in 2026. The deal is seen as a Chinese 'insurance policy'.</p>
          <p>For the Brazilian exporter, the signal is clear: price competitiveness and sustainability will be the guarantee of market share.</p>
        `
      },
      es: {
        title: "EE.UU. confirma acuerdo para que China compre 25 millones de toneladas de soja en 2026",
        category: "Geopolítica",
        summary: "Acuerdo bilateral busca diversificar proveedores y garantizar seguridad alimentaria china.",
        content: `
          <p>En un movimiento estratégico, Pekín y Washington firmaron compromiso para el embarque de 25 millones de toneladas en 2026. El acuerdo es visto como una 'póliza de seguro' china.</p>
          <p>Para el exportador brasileño, la señal es clara: la competitividad en precio y sostenibilidad será la garantía de cuota de mercado.</p>
        `
      },
      zh: {
        title: "美国确认中国将在 2026 年购买 2500 万吨大豆的协议",
        category: "地缘政治",
        summary: "双边协议旨在使供应商多样化并确保中国的粮食安全。",
        content: `
          <p>北京和华盛顿采取了一项战略举措，签署了在 2026 年运送 2500 万吨大豆的承诺。该协议被视为中国的“保险单”。</p>
          <p>对于巴西出口商来说，信号很明确：价格竞争力和可持续性将是市场份额的保证。</p>
        `
      }
    }
  },
  {
    id: "gacc-china-importacao-carne-2026",
    image: "/images/news/gacc-meat.jpg",
    date: "13 Jan, 2026",
    sourceUrl: "https://valorinternational.globo.com/business/news/2026/01/13/meatpackers-may-curb-output-after-china-sets-import-quota.ghtml",
    translations: {
      pt: {
        title: "GACC: Importação de carnes pela China recua 11% no início de 2026 com novas cotas",
        category: "Regulação",
        summary: "Novas regras alfandegárias visam proteger produção doméstica e controlar inflação.",
        content: `
          <p>Dados da Alfândega Chinesa mostram recuo nas importações de proteína animal em janeiro. A implementação de cotas móveis desafia frigoríficos brasileiros.</p>
          <p>Apesar da queda, a GACC reafirmou que o Brasil permanece parceiro prioritário, desde que cumpridos os requisitos de rastreabilidade.</p>
        `
      },
      en: {
        title: "GACC: China's meat imports drop 11% in early 2026 with new quotas",
        category: "Regulation",
        summary: "New customs rules aim to protect domestic production and control inflation.",
        content: `
          <p>Chinese Customs data show a decline in animal protein imports in January. The implementation of sliding quotas challenges Brazilian meatpackers.</p>
          <p>Despite the drop, GACC reaffirmed that Brazil remains a priority partner, provided traceability requirements are met.</p>
        `
      },
      es: {
        title: "GACC: Importación de carnes por China cae 11% a inicios de 2026 con nuevas cuotas",
        category: "Regulación",
        summary: "Nuevas reglas aduaneras buscan proteger producción doméstica y controlar inflación.",
        content: `
          <p>Datos de la Aduana China muestran retroceso en importaciones de proteína animal en enero. La implementación de cuotas móviles desafía a frigoríficos brasileños.</p>
          <p>A pesar de la caída, GACC reafirmó que Brasil permanece como socio prioritario, siempre que se cumplan los requisitos de trazabilidad.</p>
        `
      },
      zh: {
        title: "海关总署（GACC）：2026 年初中国肉类进口受新配额影响下降 11%",
        category: "法规",
        summary: "新的海关规则旨在保护国内生产并控制通货膨胀。",
        content: `
          <p>中国海关数据显示 1 月份动物蛋白进口量下降。 滑动配额的实施对巴西肉类加工企业构成了挑战。</p>
          <p>尽管有所下降，海关总署重申巴西通过满足可追溯性要求，仍然是优先合作伙伴。</p>
        `
      }
    }
  },
  {
    id: "john-deere-autonomo-2026",
    image: "/images/news/john-deere-autonomous.jpg",
    date: "07 Jan, 2026",
    sourceUrl: "https://www.dtnpf.com/agriculture/web/ag/equipment/article/2026/01/07/deere-displays-technology-loaded-x9",
    translations: {
      pt: {
        title: "John Deere expande frota autônoma com novo trator 9RX exibido na CES 2026",
        category: "Inovação",
        summary: "Gigante americana aposta em operações 24/7 via satélite para grandes culturas.",
        content: `
          <p>Direto de Las Vegas, a John Deere revelou seus planos globais para o trator autônomo 9RX. A máquina utiliza constelação de satélites de baixa órbita.</p>
          <p>"A autonomia não é mais um conceito, é uma necessidade operacional para alimentar o mundo em 2050", declarou o CEO.</p>
        `
      },
      en: {
        title: "John Deere expands autonomous fleet with new 9RX tractor shown at CES 2026",
        category: "Innovation",
        summary: "American giant bets on 24/7 satellite operations for large crops.",
        content: `
          <p>Straight from Las Vegas, John Deere revealed global plans for the autonomous 9RX tractor. The machine uses low-earth orbit satellite constellations.</p>
          <p>"Autonomy is no longer a concept, it is an operational necessity to feed the world in 2050," declared the CEO.</p>
        `
      },
      es: {
        title: "John Deere expande flota autónoma con nuevo tractor 9RX exhibido en CES 2026",
        category: "Innovación",
        summary: "Gigante americana apuesta en operaciones 24/7 vía satélite para grandes cultivos.",
        content: `
          <p>Directo de Las Vegas, John Deere reveló sus planes globales para el tractor autónomo 9RX. La máquina utiliza constelación de satélites de baja órbita.</p>
          <p>"La autonomía no es más un concepto, es una necesidad operativa para alimentar al mundo en 2050", declaró el CEO.</p>
        `
      },
      zh: {
        title: "约翰迪尔在 CES 2026 上展示新款 9RX 拖拉机，扩大自动驾驶车队",
        category: "创新",
        summary: "这家美国巨头押注于大型农作物的 24/7 卫星运营。",
        content: `
          <p>约翰迪尔在拉斯维加斯公布了 9RX 自动拖拉机的全球计划。 该机器使用低地球轨道卫星星座。</p>
          <p>首席执行官宣称：“自主不再是一个概念，而是 2050 年养活世界的运营必要条件。”</p>
        `
      }
    }
  }
];
