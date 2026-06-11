/* ===== Tunky — data, i18n (es·en·pt·fr·zh·ja), interacciones ===== */

/* --- Capacidades IA-first --- */
const AI = [
  { ic:"◈",
    t:{es:"Copilotos a tu medida",en:"Custom copilots",pt:"Copilotos sob medida",fr:"Copilotes sur mesure",zh:"定制副驾驶",ja:"オーダーメイドのコパイロット"},
    p:{es:"Un asistente que conoce TU negocio: responde, redacta y consulta tus datos en lenguaje natural. Como el copiloto que ya integramos en ConTodo ERP.",
       en:"An assistant that knows YOUR business: answers, writes and queries your data in natural language. Like the copilot we built into ConTodo ERP.",
       pt:"Um assistente que conhece o SEU negócio: responde, redige e consulta seus dados em linguagem natural. Como o copiloto que já integramos no ConTodo ERP.",
       fr:"Un assistant qui connaît VOTRE entreprise : il répond, rédige et interroge vos données en langage naturel. Comme le copilote déjà intégré à ConTodo ERP.",
       zh:"一个了解您业务的助手：用自然语言回答、撰写并查询您的数据。就像我们已集成到 ConTodo ERP 的副驾驶。",
       ja:"あなたのビジネスを理解するアシスタント：自然言語で回答・作成し、データを照会します。ConTodo ERPに統合済みのコパイロットのように。"} },
  { ic:"⟁",
    t:{es:"Agentes que ejecutan",en:"Agents that act",pt:"Agentes que executam",fr:"Des agents qui agissent",zh:"会执行的智能体",ja:"実行するエージェント"},
    p:{es:"No solo conversan: rastrean licitaciones, califican leads, generan reportes y envían cobros por WhatsApp mientras tú duermes.",
       en:"They don't just chat: they track tenders, qualify leads, generate reports and send payment links on WhatsApp while you sleep.",
       pt:"Não só conversam: rastreiam licitações, qualificam leads, geram relatórios e enviam cobranças no WhatsApp enquanto você dorme.",
       fr:"Ils ne font pas que discuter : ils suivent les appels d'offres, qualifient les prospects, génèrent des rapports et envoient des paiements via WhatsApp pendant que vous dormez.",
       zh:"它们不只是聊天：在您睡觉时追踪招标、筛选潜在客户、生成报告并通过 WhatsApp 发送收款。",
       ja:"会話するだけではありません：入札を追跡し、リードを評価し、レポートを生成し、あなたが寝ている間にWhatsAppで請求を送ります。"} },
  { ic:"⌁",
    t:{es:"Procesos automatizados",en:"Automated workflows",pt:"Processos automatizados",fr:"Processus automatisés",zh:"自动化流程",ja:"自動化されたプロセス"},
    p:{es:"Identificamos las tareas repetitivas que comen tu día y las convertimos en flujos que corren solos, con IA donde aporta.",
       en:"We find the repetitive tasks eating your day and turn them into flows that run themselves, with AI where it adds value.",
       pt:"Identificamos as tarefas repetitivas que consomem seu dia e as transformamos em fluxos que rodam sozinhos, com IA onde agrega.",
       fr:"Nous identifions les tâches répétitives qui dévorent votre journée et les transformons en flux autonomes, avec l'IA là où elle apporte de la valeur.",
       zh:"我们找出占用您时间的重复性任务，将其转化为自动运行的流程，并在有价值之处加入 AI。",
       ja:"あなたの一日を奪う反復作業を特定し、価値のある所にAIを加えて、自律的に動くフローに変えます。"} },
  { ic:"◉",
    t:{es:"Decisiones con datos",en:"Data-driven decisions",pt:"Decisões com dados",fr:"Décisions fondées sur les données",zh:"数据驱动的决策",ja:"データに基づく意思決定"},
    p:{es:"Dashboards e inteligencia que cruzan tus datos con fuentes públicas y te dicen qué hacer, no solo qué pasó.",
       en:"Dashboards and intelligence that cross your data with public sources and tell you what to do, not just what happened.",
       pt:"Dashboards e inteligência que cruzam seus dados com fontes públicas e dizem o que fazer, não só o que aconteceu.",
       fr:"Des tableaux de bord et de l'intelligence qui croisent vos données avec des sources publiques et vous disent quoi faire, pas seulement ce qui s'est passé.",
       zh:"将您的数据与公共来源交叉分析的看板与情报，告诉您该做什么，而不仅是发生了什么。",
       ja:"あなたのデータを公共ソースと掛け合わせ、何が起きたかだけでなく、何をすべきかを示すダッシュボードとインテリジェンス。"} },
];

/* --- Portafolio real (tableros verificados en vivo) --- */
const WORK = [
  { url:"https://unimauro.github.io/observatorio-poder-economico/", tag:"Grafo · Inteligencia", t:"Observatorio de Poder Económico",
    es:"Grafo de grupos económicos, accionistas y directorios del Perú (SMV·BVL·SBS) con PageRank y comunidades.",
    en:"Graph of Peru's economic groups, shareholders and boards (SMV·BVL·SBS) with PageRank and communities.",
    pt:"Grafo de grupos econômicos, acionistas e diretorias do Peru (SMV·BVL·SBS) com PageRank e comunidades.",
    fr:"Graphe des groupes économiques, actionnaires et conseils d'administration du Pérou (SMV·BVL·SBS) avec PageRank et communautés.",
    zh:"秘鲁经济集团、股东和董事会的图谱（SMV·BVL·SBS），含 PageRank 与社区分析。",
    ja:"ペルーの経済グループ・株主・取締役会のグラフ（SMV・BVL・SBS）、PageRankとコミュニティ分析付き。" },
  { url:"https://unimauro.github.io/peru-transparente/", tag:"Transparencia", t:"Perú Transparente",
    es:"Mapa de funcionarios, entidades públicas, empresas estatales y redes de poder.",
    en:"Map of public officials, agencies, state companies and power networks.",
    pt:"Mapa de funcionários, entidades públicas, empresas estatais e redes de poder.",
    fr:"Carte des fonctionnaires, entités publiques, entreprises d'État et réseaux de pouvoir.",
    zh:"公职人员、公共机构、国有企业及权力网络地图。",
    ja:"公務員・公共機関・国有企業・権力ネットワークのマップ。" },
  { url:"https://unimauro.github.io/petroperu-analytics/", tag:"Finanzas", t:"Petroperú Analytics",
    es:"Análisis financiero, operativo y de gobierno corporativo de Petroperú, 2005 a hoy.",
    en:"Financial, operational and corporate-governance analysis of Petroperú, 2005 to date.",
    pt:"Análise financeira, operacional e de governança da Petroperú, de 2005 até hoje.",
    fr:"Analyse financière, opérationnelle et de gouvernance de Petroperú, de 2005 à aujourd'hui.",
    zh:"Petroperú 的财务、运营与公司治理分析，2005 年至今。",
    ja:"Petroperúの財務・運営・コーポレートガバナンス分析（2005年〜現在）。" },
  { url:"https://unimauro.github.io/observatorio-fonafe/", tag:"Sector público", t:"Observatorio FONAFE",
    es:"Empresas públicas del Perú: transparencia, datos y diagnóstico de gestión.",
    en:"Peru's state-owned enterprises: transparency, data and management diagnostics.",
    pt:"Empresas públicas do Peru: transparência, dados e diagnóstico de gestão.",
    fr:"Entreprises publiques du Pérou : transparence, données et diagnostic de gestion.",
    zh:"秘鲁国有企业：透明度、数据与管理诊断。",
    ja:"ペルーの公営企業：透明性・データ・経営診断。" },
  { url:"https://unimauro.github.io/observatorio-defensa-interior/", tag:"Sector público", t:"Defensa e Interior",
    es:"Inteligencia financiera del sector Defensa e Interior: presupuesto, empresas y pensiones.",
    en:"Financial intelligence for Defense & Interior: budget, companies and pensions.",
    pt:"Inteligência financeira do setor Defesa e Interior: orçamento, empresas e pensões.",
    fr:"Intelligence financière des secteurs Défense et Intérieur : budget, entreprises et pensions.",
    zh:"国防与内政部门的财务情报：预算、企业与养老金。",
    ja:"国防・内務部門の財務インテリジェンス：予算・企業・年金。" },
  { url:"https://unimauro.github.io/proyecto-inti/", tag:"Territorio", t:"Proyecto INTI",
    es:"Gemelo digital del Perú: inteligencia territorial de 1,891 distritos.",
    en:"Peru's digital twin: territorial intelligence across 1,891 districts.",
    pt:"Gêmeo digital do Peru: inteligência territorial de 1.891 distritos.",
    fr:"Jumeau numérique du Pérou : intelligence territoriale de 1 891 districts.",
    zh:"秘鲁数字孪生：覆盖 1,891 个区的地域智能分析。",
    ja:"ペルーのデジタルツイン：1,891地区の地域インテリジェンス。" },
  { url:"https://unimauro.github.io/congreso-abierto-peru/", tag:"Transparencia", t:"Congreso Abierto",
    es:"Observatorio inteligente del Congreso de la República con datos legislativos.",
    en:"Smart observatory of Congress with open legislative data.",
    pt:"Observatório inteligente do Congresso com dados legislativos abertos.",
    fr:"Observatoire intelligent du Congrès de la République avec données législatives.",
    zh:"共和国国会智能观察站，含立法数据。",
    ja:"立法データを備えた共和国議会のスマート観測所。" },
  { url:"https://unimauro.github.io/observatorio-smartphones-adolescentes/", tag:"Salud · Social", t:"Smartphones en Adolescentes",
    es:"Evidencia científica global sobre uso de smartphones y salud mental adolescente.",
    en:"Global scientific evidence on smartphone use and teen mental health.",
    pt:"Evidência científica global sobre uso de smartphones e saúde mental adolescente.",
    fr:"Données scientifiques mondiales sur l'usage des smartphones et la santé mentale des adolescents.",
    zh:"关于智能手机使用与青少年心理健康的全球科学证据。",
    ja:"スマートフォン利用と思春期のメンタルヘルスに関する世界的な科学的エビデンス。" },
  { url:"https://unimauro.github.io/observatorio-idoneidad-estado/", tag:"Sector público", t:"Idoneidad del Estado",
    es:"Índice de idoneidad y capacidad del Estado por entidad (mérito, estabilidad, capacidad).",
    en:"Index of state suitability and capacity by agency (merit, stability, capacity).",
    pt:"Índice de idoneidade e capacidade do Estado por entidade (mérito, estabilidade, capacidade).",
    fr:"Indice d'aptitude et de capacité de l'État par entité (mérite, stabilité, capacité).",
    zh:"各机构的国家适任与能力指数（绩效、稳定性、能力）。",
    ja:"機関別の国家適性・能力指数（実績・安定性・能力）。" },
  { url:"https://unimauro.github.io/unimaurox-vuelos-internacionales/", tag:"Tiempo real", t:"Vuelos Internacionales",
    es:"Tráfico aéreo en tiempo real sobre el mapa (OpenSky + Leaflet), sin backend.",
    en:"Real-time air traffic on the map (OpenSky + Leaflet), no backend.",
    pt:"Tráfego aéreo em tempo real no mapa (OpenSky + Leaflet), sem backend.",
    fr:"Trafic aérien en temps réel sur la carte (OpenSky + Leaflet), sans backend.",
    zh:"地图上的实时空中交通（OpenSky + Leaflet），无需后端。",
    ja:"地図上のリアルタイム航空交通（OpenSky + Leaflet）、バックエンド不要。" },
  { url:"https://unimauro.github.io/unimaurox-seguridad/", tag:"Social", t:"Seguridad Ciudadana",
    es:"Mapa interactivo de seguridad ciudadana del Perú por región (ENAPRES, PNP, Sinadef).",
    en:"Interactive citizen-security map of Peru by region (ENAPRES, PNP, Sinadef).",
    pt:"Mapa interativo de segurança cidadã do Peru por região (ENAPRES, PNP, Sinadef).",
    fr:"Carte interactive de la sécurité citoyenne du Pérou par région (ENAPRES, PNP, Sinadef).",
    zh:"秘鲁各地区公民安全互动地图（ENAPRES、PNP、Sinadef）。",
    ja:"地域別のペルー市民安全インタラクティブマップ（ENAPRES、PNP、Sinadef）。" },
  { url:"https://unimauro.github.io/unimaurox-peru-riesgos/", tag:"Territorio", t:"Perú en Riesgos",
    es:"Sismos, tsunamis, El Niño, huaicos y friajes con simuladores. Datos IGP/SENAMHI/INDECI.",
    en:"Quakes, tsunamis, El Niño, landslides and cold snaps with simulators. IGP/SENAMHI data.",
    pt:"Sismos, tsunamis, El Niño, deslizamentos e friagens com simuladores. Dados IGP/SENAMHI.",
    fr:"Séismes, tsunamis, El Niño, coulées de boue et vagues de froid avec simulateurs. Données IGP/SENAMHI.",
    zh:"地震、海啸、厄尔尼诺、泥石流与寒潮，含模拟器。数据来自 IGP/SENAMHI。",
    ja:"地震・津波・エルニーニョ・土石流・寒波をシミュレーター付きで。IGP/SENAMHIデータ。" },
  { url:"https://unimauro.github.io/colegios-evaluacion/", tag:"Educación", t:"Radiografía Educativa",
    es:"Evaluación educativa del Perú a partir de la prueba ENLA 2024.",
    en:"Peru's education assessment based on the 2024 ENLA test.",
    pt:"Avaliação educacional do Peru a partir do teste ENLA 2024.",
    fr:"Évaluation éducative du Pérou à partir du test ENLA 2024.",
    zh:"基于 2024 年 ENLA 测试的秘鲁教育评估。",
    ja:"2024年ENLAテストに基づくペルーの教育評価。" },
  { url:"https://unimauro.github.io/salariosperu/", tag:"Datos · Mercado", t:"Salarios Perú",
    es:"Tablero de salarios del mercado laboral peruano por sector y rol.",
    en:"Dashboard of Peruvian labor-market salaries by sector and role.",
    pt:"Painel de salários do mercado de trabalho peruano por setor e cargo.",
    fr:"Tableau des salaires du marché du travail péruvien par secteur et poste.",
    zh:"按行业和职位划分的秘鲁劳动力市场薪资看板。",
    ja:"業界・職種別のペルー労働市場の給与ダッシュボード。" },
  { url:"https://unimauro.github.io/agentflow-ai/", tag:"IA · SaaS", t:"AgentFlow AI",
    es:"Demo de plataforma SaaS multi-agente con orquestación de tareas.",
    en:"Demo of a multi-agent SaaS platform with task orchestration.",
    pt:"Demo de plataforma SaaS multiagente com orquestração de tarefas.",
    fr:"Démo d'une plateforme SaaS multi-agents avec orchestration des tâches.",
    zh:"多智能体 SaaS 平台演示，支持任务编排。",
    ja:"タスクオーケストレーション付きマルチエージェントSaaSプラットフォームのデモ。" },
];

/* --- Servicios productizados --- */
const SVC = [
  { ic:"▦", feat:false,
    t:{es:"Dashboard Express",en:"Express Dashboard",pt:"Dashboard Express",fr:"Dashboard Express",zh:"快速看板",ja:"エクスプレス・ダッシュボード"},
    p:{es:"Un tablero a partir de tus datos (Excel, API o BD). Hasta 6 vistas, en tu dominio.",
       en:"One dashboard from your data (Excel, API or DB). Up to 6 views, on your domain.",
       pt:"Um painel a partir dos seus dados (Excel, API ou BD). Até 6 visões, no seu domínio.",
       fr:"Un tableau de bord à partir de vos données (Excel, API ou BD). Jusqu'à 6 vues, sur votre domaine.",
       zh:"基于您的数据（Excel、API 或数据库）的看板。最多 6 个视图，部署在您的域名。",
       ja:"あなたのデータ（Excel・API・DB）からダッシュボードを構築。最大6ビュー、あなたのドメインで。"},
    price:{es:"S/ 1,500+",en:"S/ 1,500+",pt:"S/ 1,500+",fr:"S/ 1,500+",zh:"S/ 1,500+",ja:"S/ 1,500+"},
    time:{es:"1–2 sem",en:"1–2 wks",pt:"1–2 sem",fr:"1–2 sem.",zh:"1–2 周",ja:"1〜2週間"} },
  { ic:"◉", feat:true,
    t:{es:"Observatorio a medida",en:"Custom Observatory",pt:"Observatório sob medida",fr:"Observatoire sur mesure",zh:"定制观察站",ja:"オーダーメイド・オブザバトリー"},
    p:{es:"ETL + tablero interactivo con mapas y grafos, al estilo de los que ves arriba.",
       en:"ETL + interactive dashboard with maps and graphs, like the ones above.",
       pt:"ETL + painel interativo com mapas e grafos, como os de cima.",
       fr:"ETL + tableau de bord interactif avec cartes et graphes, comme ceux ci-dessus.",
       zh:"ETL + 含地图与图谱的互动看板，如上方所示。",
       ja:"ETL + 上記のような地図・グラフ付きのインタラクティブ・ダッシュボード。"},
    price:{es:"S/ 5,000+",en:"S/ 5,000+",pt:"S/ 5,000+",fr:"S/ 5,000+",zh:"S/ 5,000+",ja:"S/ 5,000+"},
    time:{es:"3–5 sem",en:"3–5 wks",pt:"3–5 sem",fr:"3–5 sem.",zh:"3–5 周",ja:"3〜5週間"} },
  { ic:"◆", feat:false,
    t:{es:"App / SaaS (MVP)",en:"App / SaaS (MVP)",pt:"App / SaaS (MVP)",fr:"App / SaaS (MVP)",zh:"应用 / SaaS（MVP）",ja:"アプリ / SaaS（MVP）"},
    p:{es:"Aplicación web con login, pagos (Yape/Culqi/tarjeta) y despliegue listo para vender.",
       en:"Web app with login, payments (Yape/Culqi/card) and deploy ready to sell.",
       pt:"App web com login, pagamentos (Yape/Culqi/cartão) e deploy pronto para vender.",
       fr:"App web avec connexion, paiements (Yape/Culqi/carte) et déploiement prêt à vendre.",
       zh:"含登录、支付（Yape/Culqi/银行卡）和可上线部署的 Web 应用。",
       ja:"ログイン、決済（Yape/Culqi/カード）、販売可能なデプロイを備えたWebアプリ。"},
    price:{es:"S/ 8,000+",en:"S/ 8,000+",pt:"S/ 8,000+",fr:"S/ 8,000+",zh:"S/ 8,000+",ja:"S/ 8,000+"},
    time:{es:"4–8 sem",en:"4–8 wks",pt:"4–8 sem",fr:"4–8 sem.",zh:"4–8 周",ja:"4〜8週間"} },
  { ic:"⟁", feat:false,
    t:{es:"Bot / Automatización",en:"Bot / Automation",pt:"Bot / Automação",fr:"Bot / Automatisation",zh:"机器人 / 自动化",ja:"ボット / 自動化"},
    p:{es:"Bot de WhatsApp o agente con IA que automatiza cobros, alertas o reportes.",
       en:"WhatsApp bot or AI agent that automates payments, alerts or reports.",
       pt:"Bot de WhatsApp ou agente de IA que automatiza cobranças, alertas ou relatórios.",
       fr:"Bot WhatsApp ou agent IA qui automatise paiements, alertes ou rapports.",
       zh:"自动处理收款、提醒或报告的 WhatsApp 机器人或 AI 智能体。",
       ja:"請求・アラート・レポートを自動化するWhatsAppボットまたはAIエージェント。"},
    price:{es:"S/ 2,500+",en:"S/ 2,500+",pt:"S/ 2,500+",fr:"S/ 2,500+",zh:"S/ 2,500+",ja:"S/ 2,500+"},
    time:{es:"1–3 sem",en:"1–3 wks",pt:"1–3 sem",fr:"1–3 sem.",zh:"1–3 周",ja:"1〜3週間"} },
  { ic:"⌁", feat:false,
    t:{es:"Hosting & Mantenimiento",en:"Hosting & Maintenance",pt:"Hospedagem & Manutenção",fr:"Hébergement & Maintenance",zh:"托管与维护",ja:"ホスティング & 保守"},
    p:{es:"Alojamos en nuestro servidor, monitoreamos y aplicamos cambios cada mes.",
       en:"We host on our server, monitor and ship changes every month.",
       pt:"Hospedamos no nosso servidor, monitoramos e aplicamos mudanças todo mês.",
       fr:"Nous hébergeons sur notre serveur, surveillons et livrons des changements chaque mois.",
       zh:"在我们的服务器上托管，每月监控并实施变更。",
       ja:"当社サーバーでホスティングし、監視のうえ毎月変更を反映します。"},
    price:{es:"S/ 300/mes",en:"S/ 300/mo",pt:"S/ 300/mês",fr:"S/ 300/mois",zh:"S/ 300/月",ja:"S/ 300/月"},
    time:{es:"continuo",en:"ongoing",pt:"contínuo",fr:"continu",zh:"持续",ja:"継続"} },
  { ic:"✸", feat:false,
    t:{es:"Reporte de inteligencia",en:"Intelligence report",pt:"Relatório de inteligência",fr:"Rapport d'intelligence",zh:"情报报告",ja:"インテリジェンス・レポート"},
    p:{es:"Mapa de poder, accionistas y vínculos de una empresa o grupo, en PDF.",
       en:"Power map, shareholders and links of a company or group, as PDF.",
       pt:"Mapa de poder, acionistas e vínculos de uma empresa ou grupo, em PDF.",
       fr:"Carte de pouvoir, actionnaires et liens d'une entreprise ou d'un groupe, en PDF.",
       zh:"某公司或集团的权力图谱、股东与关联关系，PDF 格式。",
       ja:"企業またはグループの権力マップ・株主・つながりをPDFで。"},
    price:{es:"S/ 300+",en:"S/ 300+",pt:"S/ 300+",fr:"S/ 300+",zh:"S/ 300+",ja:"S/ 300+"},
    time:{es:"a pedido",en:"on demand",pt:"sob demanda",fr:"sur demande",zh:"按需",ja:"オンデマンド"} },
];

/* --- Productos propios --- */
const PROD = [
  { t:"ConTodo ERP", badge:"live", url:"https://contodo-erp.vercel.app",
    es:"ERP multi-tenant para pymes de Perú y LATAM, con copiloto de IA.",
    en:"Multi-tenant ERP for Peruvian & LATAM SMBs, with an AI copilot.",
    pt:"ERP multi-tenant para PMEs do Peru e LATAM, com copiloto de IA.",
    fr:"ERP multi-tenant pour PME du Pérou et d'Amérique latine, avec copilote IA.",
    zh:"面向秘鲁及拉美中小企业的多租户 ERP，配备 AI 副驾驶。",
    ja:"ペルー・中南米の中小企業向けマルチテナントERP、AIコパイロット付き。" },
  { t:"CondoFlow", badge:"build", url:"",
    es:"SaaS de administración de condominios, edificios e inmobiliarias.",
    en:"SaaS for managing condos, buildings and real estate.",
    pt:"SaaS para administração de condomínios, edifícios e imobiliárias.",
    fr:"SaaS de gestion de copropriétés, d'immeubles et d'agences immobilières.",
    zh:"用于公寓、楼宇和房地产管理的 SaaS。",
    ja:"マンション・ビル・不動産管理のためのSaaS。" },
  { t:"CanchApp", badge:"build", url:"",
    es:"Reserva de canchas con bot de WhatsApp y pago por Yape.",
    en:"Sports-court booking with WhatsApp bot and Yape payments.",
    pt:"Reserva de quadras com bot de WhatsApp e pagamento via Yape.",
    fr:"Réservation de terrains de sport avec bot WhatsApp et paiement Yape.",
    zh:"运动场地预订，配备 WhatsApp 机器人和 Yape 支付。",
    ja:"WhatsAppボットとYape決済によるスポーツコート予約。" },
  { t:"LicitaPerú", badge:"build", url:"",
    es:"Alertas de licitaciones del Estado peruano por email y WhatsApp.",
    en:"Peruvian public-tender alerts by email and WhatsApp.",
    pt:"Alertas de licitações do Estado peruano por e-mail e WhatsApp.",
    fr:"Alertes d'appels d'offres publics péruviens par e-mail et WhatsApp.",
    zh:"通过电子邮件和 WhatsApp 发送秘鲁政府招标提醒。",
    ja:"メールとWhatsAppによるペルー政府入札アラート。" },
  { t:"Medsage", badge:"build", url:"",
    es:"Plataforma clínica para médicos y consultorios independientes.",
    en:"Clinical platform for independent doctors and practices.",
    pt:"Plataforma clínica para médicos e consultórios independentes.",
    fr:"Plateforme clinique pour médecins et cabinets indépendants.",
    zh:"面向独立医生和诊所的临床平台。",
    ja:"独立した医師・診療所向けの臨床プラットフォーム。" },
  { t:"Finance Hub AI", badge:"build", url:"",
    es:"Asesor de finanzas personales y familiares impulsado por IA.",
    en:"AI-powered personal and family finance advisor.",
    pt:"Consultor de finanças pessoais e familiares com IA.",
    fr:"Conseiller en finances personnelles et familiales propulsé par l'IA.",
    zh:"由 AI 驱动的个人与家庭理财顾问。",
    ja:"AIを活用した個人・家庭向けの財務アドバイザー。" },
];

/* --- i18n (UI) --- */
const I18N = {
  es:{ "nav.ai":"IA-first","nav.work":"Trabajo","nav.services":"Servicios","nav.products":"Productos","nav.process":"Proceso","nav.cta":"Conversemos",
    "hero.pill":"IA-first · agentes · copilotos · automatización","hero.l1":"Convertimos tu empresa","hero.l2":"en IA-first.",
    "hero.sub":"Agentes, copilotos y dashboards de inteligencia que trabajan por ti. Software a medida que sí se lanza — y datos hechos decisiones. No vendemos promesas: mostramos producto en producción.",
    "hero.ctaWork":"Ver el trabajo","hero.ctaTalk":"Convertir mi empresa",
    "hero.s1":"tableros en vivo","hero.s2":"proyectos construidos","hero.s3":"a tu primer dashboard",
    "ai.title":"Qué significa ser IA-first con Tunky","ai.desc":"No es ponerle un chatbot encima. Es rediseñar cómo trabaja tu empresa para que la IA haga el trabajo pesado.",
    "work.title":"Tableros en producción","work.desc":"Cada uno está vivo ahora mismo. Haz clic y compruébalo. Esto es lo que podemos construir con tus datos.",
    "services.title":"Lo que hacemos, con precio claro","services.desc":"Alcance y precio fijos. Sin sorpresas, sin “depende”. 50% para arrancar.",
    "products.title":"Productos que construimos","products.desc":"SaaS propios que prueban que no solo asesoramos: enviamos producto.",
    "process.title":"Cómo trabajamos",
    "contact.title":"¿Tienes datos? Tienes un dashboard.","contact.desc":"Cuéntanos qué quieres ver claro. Te respondemos con una propuesta concreta — alcance, precio y plazo.",
    "contact.fName":"Nombre","contact.fOrg":"Empresa / organización","contact.fNeed":"¿Qué necesitas?","contact.fMsg":"Mensaje","contact.send":"Enviar por WhatsApp",
    "contact.o1":"Dashboard a medida","contact.o2":"Observatorio / ETL","contact.o3":"App o SaaS (MVP)","contact.o4":"Bot / automatización","contact.o5":"Otro",
    "footer.tag":"Datos públicos, hechos inteligencia. Lima · LATAM.","footer.rights":"Todos los derechos reservados",
    "card.live":"En vivo","card.see":"Ver en vivo","prod.live":"En vivo","prod.build":"En desarrollo","prod.visit":"Visitar →",
    "proc.1t":"Entendemos","proc.1p":"Una llamada corta: qué decisión necesitas tomar y con qué datos.",
    "proc.2t":"Proponemos","proc.2p":"Alcance, precio y plazo por escrito. Sin letra chica.",
    "proc.3t":"Construimos","proc.3p":"Avances visibles cada semana. Tú apruebas, nosotros enviamos.",
    "proc.4t":"Entregamos","proc.4p":"En tu dominio, con capacitación. Mantenimiento opcional." },
  en:{ "nav.ai":"AI-first","nav.work":"Work","nav.services":"Services","nav.products":"Products","nav.process":"Process","nav.cta":"Let's talk",
    "hero.pill":"AI-first · agents · copilots · automation","hero.l1":"We make your company","hero.l2":"AI-first.",
    "hero.sub":"Agents, copilots and intelligence dashboards that work for you. Custom software that actually ships — and data turned into decisions. We don't sell promises — we show product in production.",
    "hero.ctaWork":"See the work","hero.ctaTalk":"Transform my company",
    "hero.s1":"live dashboards","hero.s2":"projects built","hero.s3":"to your first dashboard",
    "ai.title":"What being AI-first with Tunky means","ai.desc":"It's not slapping a chatbot on top. It's redesigning how your company works so AI does the heavy lifting.",
    "work.title":"Dashboards in production","work.desc":"Every one is live right now. Click and check. This is what we can build with your data.",
    "services.title":"What we do, priced clearly","services.desc":"Fixed scope and price. No surprises, no “it depends”. 50% to start.",
    "products.title":"Products we build","products.desc":"Our own SaaS — proof we don't just advise, we ship.",
    "process.title":"How we work",
    "contact.title":"Got data? You've got a dashboard.","contact.desc":"Tell us what you need to see clearly. We reply with a concrete proposal — scope, price and timeline.",
    "contact.fName":"Name","contact.fOrg":"Company / organization","contact.fNeed":"What do you need?","contact.fMsg":"Message","contact.send":"Send via WhatsApp",
    "contact.o1":"Custom dashboard","contact.o2":"Observatory / ETL","contact.o3":"App or SaaS (MVP)","contact.o4":"Bot / automation","contact.o5":"Other",
    "footer.tag":"Public data, turned into intelligence. Lima · LATAM.","footer.rights":"All rights reserved",
    "card.live":"Live","card.see":"View live","prod.live":"Live","prod.build":"In progress","prod.visit":"Visit →",
    "proc.1t":"We listen","proc.1p":"A short call: what decision you need to make and with what data.",
    "proc.2t":"We propose","proc.2p":"Scope, price and timeline in writing. No fine print.",
    "proc.3t":"We build","proc.3p":"Visible progress every week. You approve, we ship.",
    "proc.4t":"We deliver","proc.4p":"On your domain, with training. Maintenance optional." },
  pt:{ "nav.ai":"IA-first","nav.work":"Trabalho","nav.services":"Serviços","nav.products":"Produtos","nav.process":"Processo","nav.cta":"Vamos conversar",
    "hero.pill":"IA-first · agentes · copilotos · automação","hero.l1":"Tornamos sua empresa","hero.l2":"IA-first.",
    "hero.sub":"Agentes, copilotos e dashboards de inteligência que trabalham por você. Software sob medida que realmente sai — e dados virando decisões. Não vendemos promessas: mostramos produto em produção.",
    "hero.ctaWork":"Ver o trabalho","hero.ctaTalk":"Transformar minha empresa",
    "hero.s1":"painéis no ar","hero.s2":"projetos construídos","hero.s3":"até seu primeiro painel",
    "ai.title":"O que é ser IA-first com a Tunky","ai.desc":"Não é colocar um chatbot por cima. É redesenhar como sua empresa trabalha para que a IA faça o trabalho pesado.",
    "work.title":"Painéis em produção","work.desc":"Cada um está no ar agora. Clique e confira. É isto que podemos construir com seus dados.",
    "services.title":"O que fazemos, com preço claro","services.desc":"Escopo e preço fixos. Sem surpresas, sem “depende”. 50% para começar.",
    "products.title":"Produtos que construímos","products.desc":"SaaS próprios que provam que não só aconselhamos: entregamos produto.",
    "process.title":"Como trabalhamos",
    "contact.title":"Tem dados? Tem um dashboard.","contact.desc":"Conte o que precisa ver com clareza. Respondemos com uma proposta concreta — escopo, preço e prazo.",
    "contact.fName":"Nome","contact.fOrg":"Empresa / organização","contact.fNeed":"Do que você precisa?","contact.fMsg":"Mensagem","contact.send":"Enviar pelo WhatsApp",
    "contact.o1":"Dashboard sob medida","contact.o2":"Observatório / ETL","contact.o3":"App ou SaaS (MVP)","contact.o4":"Bot / automação","contact.o5":"Outro",
    "footer.tag":"Dados públicos, transformados em inteligência. Lima · LATAM.","footer.rights":"Todos os direitos reservados",
    "card.live":"No ar","card.see":"Ver no ar","prod.live":"No ar","prod.build":"Em desenvolvimento","prod.visit":"Visitar →",
    "proc.1t":"Entendemos","proc.1p":"Uma call curta: que decisão você precisa tomar e com quais dados.",
    "proc.2t":"Propomos","proc.2p":"Escopo, preço e prazo por escrito. Sem letras miúdas.",
    "proc.3t":"Construímos","proc.3p":"Progresso visível toda semana. Você aprova, nós entregamos.",
    "proc.4t":"Entregamos","proc.4p":"No seu domínio, com treinamento. Manutenção opcional." },
  fr:{ "nav.ai":"IA-first","nav.work":"Travail","nav.services":"Services","nav.products":"Produits","nav.process":"Processus","nav.cta":"Parlons-en",
    "hero.pill":"IA-first · agents · copilotes · automatisation","hero.l1":"Nous rendons votre entreprise","hero.l2":"IA-first.",
    "hero.sub":"Des agents, des copilotes et des tableaux de bord d'intelligence qui travaillent pour vous. Du logiciel sur mesure qui se lance vraiment — et des données transformées en décisions. Nous ne vendons pas de promesses : nous montrons du produit en production.",
    "hero.ctaWork":"Voir le travail","hero.ctaTalk":"Transformer mon entreprise",
    "hero.s1":"tableaux de bord en ligne","hero.s2":"projets réalisés","hero.s3":"jusqu'à votre premier tableau",
    "ai.title":"Ce que signifie être IA-first avec Tunky","ai.desc":"Ce n'est pas coller un chatbot par-dessus. C'est repenser le fonctionnement de votre entreprise pour que l'IA fasse le gros du travail.",
    "work.title":"Tableaux de bord en production","work.desc":"Chacun est en ligne en ce moment. Cliquez et vérifiez. Voici ce que nous pouvons construire avec vos données.",
    "services.title":"Ce que nous faisons, à prix clair","services.desc":"Périmètre et prix fixes. Pas de surprises, pas de « ça dépend ». 50 % pour démarrer.",
    "products.title":"Les produits que nous construisons","products.desc":"Nos propres SaaS — la preuve que nous ne faisons pas que conseiller : nous livrons.",
    "process.title":"Comment nous travaillons",
    "contact.title":"Des données ? Vous avez un tableau de bord.","contact.desc":"Dites-nous ce que vous voulez voir clairement. Nous répondons par une proposition concrète — périmètre, prix et délai.",
    "contact.fName":"Nom","contact.fOrg":"Entreprise / organisation","contact.fNeed":"De quoi avez-vous besoin ?","contact.fMsg":"Message","contact.send":"Envoyer via WhatsApp",
    "contact.o1":"Tableau de bord sur mesure","contact.o2":"Observatoire / ETL","contact.o3":"App ou SaaS (MVP)","contact.o4":"Bot / automatisation","contact.o5":"Autre",
    "footer.tag":"Données publiques, transformées en intelligence. Lima · Amérique latine.","footer.rights":"Tous droits réservés",
    "card.live":"En ligne","card.see":"Voir en ligne","prod.live":"En ligne","prod.build":"En développement","prod.visit":"Visiter →",
    "proc.1t":"Nous écoutons","proc.1p":"Un court appel : quelle décision vous devez prendre et avec quelles données.",
    "proc.2t":"Nous proposons","proc.2p":"Périmètre, prix et délai par écrit. Aucune clause cachée.",
    "proc.3t":"Nous construisons","proc.3p":"Des avancées visibles chaque semaine. Vous validez, nous livrons.",
    "proc.4t":"Nous livrons","proc.4p":"Sur votre domaine, avec formation. Maintenance en option." },
  zh:{ "nav.ai":"AI 优先","nav.work":"案例","nav.services":"服务","nav.products":"产品","nav.process":"流程","nav.cta":"联系我们",
    "hero.pill":"AI 优先 · 智能体 · 副驾驶 · 自动化","hero.l1":"我们让您的企业","hero.l2":"AI 优先。",
    "hero.sub":"为您工作的智能体、副驾驶和智能看板。真正能上线的定制软件——把数据变成决策。我们不卖承诺：我们展示已上线的产品。",
    "hero.ctaWork":"查看案例","hero.ctaTalk":"改造我的企业",
    "hero.s1":"在线看板","hero.s2":"已构建项目","hero.s3":"交付首个看板",
    "ai.title":"与 Tunky 一起成为 AI 优先意味着什么","ai.desc":"不是在表面加个聊天机器人，而是重新设计企业的运作方式，让 AI 承担繁重工作。",
    "work.title":"生产环境中的看板","work.desc":"每一个现在都在线。点击即可验证。这就是我们能用您的数据构建的东西。",
    "services.title":"我们的服务，价格清晰","services.desc":"固定范围与价格。没有意外，没有“看情况”。预付 50% 即可启动。",
    "products.title":"我们构建的产品","products.desc":"我们自己的 SaaS——证明我们不仅提供咨询，更交付产品。",
    "process.title":"我们如何合作",
    "contact.title":"有数据？您就有了看板。","contact.desc":"告诉我们您想看清什么。我们将给出具体方案——范围、价格与周期。",
    "contact.fName":"姓名","contact.fOrg":"公司 / 组织","contact.fNeed":"您需要什么？","contact.fMsg":"留言","contact.send":"通过 WhatsApp 发送",
    "contact.o1":"定制看板","contact.o2":"观察站 / ETL","contact.o3":"应用或 SaaS（MVP）","contact.o4":"机器人 / 自动化","contact.o5":"其他",
    "footer.tag":"公共数据，化为情报。利马 · 拉丁美洲。","footer.rights":"版权所有",
    "card.live":"在线","card.see":"查看在线","prod.live":"在线","prod.build":"开发中","prod.visit":"访问 →",
    "proc.1t":"倾听","proc.1p":"一次简短通话：您需要做什么决策、用哪些数据。",
    "proc.2t":"提案","proc.2p":"书面的范围、价格与周期。没有附加细则。",
    "proc.3t":"构建","proc.3p":"每周可见进展。您确认，我们交付。",
    "proc.4t":"交付","proc.4p":"部署到您的域名，并提供培训。可选维护。" },
  ja:{ "nav.ai":"AIファースト","nav.work":"実績","nav.services":"サービス","nav.products":"プロダクト","nav.process":"プロセス","nav.cta":"相談する",
    "hero.pill":"AIファースト · エージェント · コパイロット · 自動化","hero.l1":"あなたの会社を","hero.l2":"AIファーストに。",
    "hero.sub":"あなたのために働くエージェント、コパイロット、インテリジェンス・ダッシュボード。本当にリリースできるオーダーメイドのソフトウェア——そしてデータを意思決定へ。約束ではなく、本番稼働中のプロダクトをお見せします。",
    "hero.ctaWork":"実績を見る","hero.ctaTalk":"会社を変革する",
    "hero.s1":"稼働中のダッシュボード","hero.s2":"構築したプロジェクト","hero.s3":"最初のダッシュボードまで",
    "ai.title":"Tunkyと共に「AIファースト」になるとは","ai.desc":"チャットボットを後付けすることではありません。AIが重労働を担うよう、会社の働き方を再設計することです。",
    "work.title":"本番稼働中のダッシュボード","work.desc":"どれも今この瞬間に稼働しています。クリックしてご確認ください。これがあなたのデータで構築できるものです。",
    "services.title":"私たちのサービス、明確な価格で","services.desc":"範囲も価格も固定。驚きも「場合による」もありません。着手は50%から。",
    "products.title":"私たちが構築したプロダクト","products.desc":"自社SaaS——助言するだけでなく、プロダクトを届ける証です。",
    "process.title":"私たちの進め方",
    "contact.title":"データがあれば、ダッシュボードができます。","contact.desc":"何を明確に見たいかお聞かせください。具体的な提案——範囲・価格・納期——でお返事します。",
    "contact.fName":"お名前","contact.fOrg":"会社 / 組織","contact.fNeed":"ご要望は？","contact.fMsg":"メッセージ","contact.send":"WhatsAppで送信",
    "contact.o1":"オーダーメイドのダッシュボード","contact.o2":"オブザバトリー / ETL","contact.o3":"アプリまたはSaaS（MVP）","contact.o4":"ボット / 自動化","contact.o5":"その他",
    "footer.tag":"公共データを、インテリジェンスへ。リマ · 中南米。","footer.rights":"無断転載を禁じます",
    "card.live":"稼働中","card.see":"ライブで見る","prod.live":"稼働中","prod.build":"開発中","prod.visit":"見る →",
    "proc.1t":"ヒアリング","proc.1p":"短い通話で：どんな意思決定が必要か、どのデータを使うか。",
    "proc.2t":"ご提案","proc.2p":"範囲・価格・納期を書面で。細かい但し書きはありません。",
    "proc.3t":"構築","proc.3p":"毎週、目に見える進捗。承認いただき、私たちが届けます。",
    "proc.4t":"納品","proc.4p":"あなたのドメインに、研修付きで。保守はオプション。" },
};

/* --- Compartir (i18n) --- */
const SHARE_STR = {
  es:{title:"¿Te sirve? Compártelo.",desc:"Ayúdanos a llegar a quien necesite volverse IA-first.",copy:"Copiar enlace",copied:"¡Copiado!",msg:"Tunky convierte tu empresa en IA-first 🚀 agentes, copilotos y dashboards a medida:"},
  en:{title:"Useful? Share it.",desc:"Help us reach whoever needs to go AI-first.",copy:"Copy link",copied:"Copied!",msg:"Tunky makes your company AI-first 🚀 agents, copilots and custom dashboards:"},
  pt:{title:"Útil? Compartilhe.",desc:"Ajude-nos a alcançar quem precisa se tornar IA-first.",copy:"Copiar link",copied:"Copiado!",msg:"A Tunky torna sua empresa IA-first 🚀 agentes, copilotos e dashboards sob medida:"},
  fr:{title:"Utile ? Partagez-le.",desc:"Aidez-nous à toucher ceux qui doivent devenir IA-first.",copy:"Copier le lien",copied:"Copié !",msg:"Tunky rend votre entreprise IA-first 🚀 agents, copilotes et tableaux de bord sur mesure :"},
  zh:{title:"觉得有用？分享出去。",desc:"帮助我们触达需要变得 AI 优先的人。",copy:"复制链接",copied:"已复制！",msg:"Tunky 让您的企业 AI 优先 🚀 智能体、副驾驶和定制看板："},
  ja:{title:"役に立ちましたか？シェアを。",desc:"AIファーストになるべき人に届くよう、力を貸してください。",copy:"リンクをコピー",copied:"コピーしました！",msg:"Tunkyがあなたの会社をAIファーストに 🚀 エージェント・コパイロット・オーダーメイドのダッシュボード："},
};
// inyecta share.title/desc en I18N para el loop data-i18n
for(const l in SHARE_STR){ I18N[l]["share.title"]=SHARE_STR[l].title; I18N[l]["share.desc"]=SHARE_STR[l].desc; }

const SHARE_URL = "https://tunky.net/";
const SVG = {
  wa:'<svg viewBox="0 0 24 24"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26C2.16 6.51 6.6 2.08 12.05 2.08c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 012.89 6.99c0 5.45-4.43 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0012.05.16C5.5.16.16 5.5.16 12.05c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 005.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41Z"/></svg>',
  fb:'<svg viewBox="0 0 24 24"><path d="M24 12.07C24 5.45 18.63.07 12 .07S0 5.45 0 12.07c0 5.99 4.39 10.95 10.12 11.85v-8.38H7.08v-3.47h3.04V9.43c0-3 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.61 23.03 24 18.06 24 12.07z"/></svg>',
  li:'<svg viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
  x:'<svg viewBox="0 0 24 24"><path d="M18.24 2.25h3.31l-7.23 8.26L23.05 22h-6.66l-5.21-6.82L4.99 22H1.68l7.73-8.84L1.25 2.25H8.08l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12z"/></svg>',
  cp:'<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>',
};
function renderShare(){
  const s=SHARE_STR[LANG]||SHARE_STR.es;
  const u=encodeURIComponent(SHARE_URL), tx=encodeURIComponent(s.msg);
  const el=document.getElementById("shareBtns"); if(!el) return;
  el.innerHTML=`
    <a class="sbtn wa" href="https://wa.me/?text=${tx}%20${u}" target="_blank" rel="noopener">${SVG.wa}WhatsApp</a>
    <a class="sbtn fb" href="https://www.facebook.com/sharer/sharer.php?u=${u}" target="_blank" rel="noopener">${SVG.fb}Facebook</a>
    <a class="sbtn li" href="https://www.linkedin.com/sharing/share-offsite/?url=${u}" target="_blank" rel="noopener">${SVG.li}LinkedIn</a>
    <a class="sbtn x" href="https://twitter.com/intent/tweet?text=${tx}&url=${u}" target="_blank" rel="noopener">${SVG.x}X</a>
    <button class="sbtn cp" id="copyBtn" type="button">${SVG.cp}<span id="copyTxt">${s.copy}</span></button>`;
  const cb=document.getElementById("copyBtn");
  cb.addEventListener("click",async()=>{
    try{
      if(navigator.share){ await navigator.share({title:"Tunky",text:s.msg,url:SHARE_URL}); return; }
      await navigator.clipboard.writeText(SHARE_URL);
    }catch(_){}
    cb.classList.add("ok"); document.getElementById("copyTxt").textContent=s.copied;
    setTimeout(()=>{cb.classList.remove("ok");document.getElementById("copyTxt").textContent=s.copy;},1800);
  });
}

let LANG = "es";

/* --- render --- */
function render(){
  const L = LANG;
  // ai-first
  document.getElementById("aiGrid").innerHTML = AI.map(a=>`
    <div class="ai-card">
      <div class="ai-ic">${a.ic}</div>
      <h3>${a.t[L]}</h3>
      <p>${a.p[L]}</p>
    </div>`).join("");
  // work
  document.getElementById("workGrid").innerHTML = WORK.map(w=>`
    <a class="card" href="${w.url}" target="_blank" rel="noopener" onmousemove="cardGlow(event)">
      <span class="card-tag">${w.tag}</span>
      <h3>${w.t}</h3>
      <p>${w[L]}</p>
      <span class="card-link"><span class="live-dot"></span>${I18N[L]["card.see"]} <span class="arrow">↗</span></span>
    </a>`).join("");
  // services
  document.getElementById("svcGrid").innerHTML = SVC.map(s=>`
    <div class="svc${s.feat?" feat":""}">
      <div class="svc-ic">${s.ic}</div>
      <h3>${s.t[L]}</h3>
      <p class="svc-p">${s.p[L]}</p>
      <div class="svc-foot"><span class="svc-price">${s.price[L]}</span><span class="svc-time">${s.time[L]}</span></div>
    </div>`).join("");
  // products
  document.getElementById("prodGrid").innerHTML = PROD.map(p=>{
    const badge = p.badge==="live"
      ? `<span class="prod-badge b-live">● ${I18N[L]["prod.live"]}</span>`
      : `<span class="prod-badge b-build">◐ ${I18N[L]["prod.build"]}</span>`;
    const link = p.url ? `<a class="prod-link" href="${p.url}" target="_blank" rel="noopener">${I18N[L]["prod.visit"]}</a>` : "";
    return `<div class="prod"><div class="prod-top"><h3>${p.t}</h3>${badge}</div><p>${p[L]}</p>${link}</div>`;
  }).join("");
  // process
  const steps=[1,2,3,4].map(n=>`<div class="proc io"><h3>${I18N[L]["proc."+n+"t"]}</h3><p>${I18N[L]["proc."+n+"p"]}</p></div>`).join("");
  document.getElementById("procGrid").innerHTML = steps;
  // share
  renderShare();
  // static i18n nodes
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k=el.getAttribute("data-i18n"); if(I18N[L][k]!==undefined) el.textContent=I18N[L][k];
  });
  document.documentElement.lang = L;
  observe();
}

/* card hover glow follows cursor */
function cardGlow(e){
  const r=e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx",((e.clientX-r.left)/r.width*100)+"%");
}

/* language switch */
document.querySelector(".lang").addEventListener("click",e=>{
  const b=e.target.closest("button[data-lang]"); if(!b) return;
  LANG=b.dataset.lang;
  document.querySelectorAll(".lang button").forEach(x=>x.classList.toggle("active",x===b));
  try{localStorage.setItem("tunky_lang",LANG)}catch(_){}
  render();
});

/* intersection reveal */
let _io;
function observe(){
  if(_io) _io.disconnect();
  _io=new IntersectionObserver(es=>es.forEach(en=>{ if(en.isIntersecting){en.target.classList.add("in");_io.unobserve(en.target);} }),{threshold:.12});
  document.querySelectorAll(".io").forEach(el=>_io.observe(el));
  document.querySelectorAll(".section .card, .svc, .prod, .ai-card").forEach((el,i)=>{
    el.classList.add("io"); el.style.transitionDelay=(i%6*0.04)+"s"; _io.observe(el);
  });
}

/* contact -> whatsapp */
const WA_NUMBER = "51940584307"; // WhatsApp Tunky / Carlos
function tunkySubmit(e){
  e.preventDefault();
  const f=e.target, d=new FormData(f);
  const greet={es:"Hola Tunky 👋",en:"Hi Tunky 👋",pt:"Olá Tunky 👋",fr:"Bonjour Tunky 👋",zh:"你好 Tunky 👋",ja:"こんにちは Tunky 👋"};
  const lbl={
    es:["Nombre","Empresa","Necesito"],en:["Name","Company","I need"],pt:["Nome","Empresa","Preciso de"],
    fr:["Nom","Entreprise","J'ai besoin de"],zh:["姓名","公司","我需要"],ja:["お名前","会社","ご要望"]
  }[LANG]||["Nombre","Empresa","Necesito"];
  const msg=`${greet[LANG]||greet.es}%0A${lbl[0]}: ${d.get("name")}%0A${lbl[1]}: ${d.get("org")||"-"}%0A${lbl[2]}: ${d.get("need")}%0A${d.get("msg")||""}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`,"_blank");
  return false;
}

/* boot */
(function init(){
  // 1) ?lang= en la URL manda (para SEO/hreflang y compartir), 2) preferencia guardada, 3) idioma del navegador
  let pick=null;
  try{ const u=new URLSearchParams(location.search).get("lang"); if(u&&I18N[u]) pick=u; }catch(_){}
  if(!pick){ try{ const s=localStorage.getItem("tunky_lang"); if(s&&I18N[s]) pick=s; }catch(_){} }
  if(!pick){ const n=(navigator.language||"es").slice(0,2); if(I18N[n]) pick=n; }
  if(pick) LANG=pick;
  document.querySelectorAll(".lang button").forEach(x=>x.classList.toggle("active",x.dataset.lang===LANG));
  document.getElementById("year").textContent="2026";
  const wa=document.getElementById("waLink"); if(wa) wa.href=`https://wa.me/${WA_NUMBER}`;
  render();
  bgfx();
})();

/* ===== fondo IA: red neuronal animada ===== */
function bgfx(){
  if(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cv=document.getElementById("bgfx"); if(!cv) return;
  const ctx=cv.getContext("2d");
  let w,h,dpr,nodes,raf,pulses;
  const ACC=[198,242,78], MNT=[123,224,192];
  function size(){
    dpr=Math.min(window.devicePixelRatio||1,2);
    w=cv.clientWidth; h=cv.clientHeight;
    cv.width=w*dpr; cv.height=h*dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
    const target=Math.min(90,Math.floor(w*h/16000));
    nodes=Array.from({length:target},()=>({
      x:Math.random()*w, y:Math.random()*h,
      vx:(Math.random()-.5)*.25, vy:(Math.random()-.5)*.25,
      r:Math.random()*1.6+.6
    }));
    pulses=[];
  }
  function step(){
    ctx.clearRect(0,0,w,h);
    const D=140;
    // líneas entre nodos cercanos
    for(let i=0;i<nodes.length;i++){
      const a=nodes[i];
      a.x+=a.vx; a.y+=a.vy;
      if(a.x<0||a.x>w)a.vx*=-1; if(a.y<0||a.y>h)a.vy*=-1;
      for(let j=i+1;j<nodes.length;j++){
        const b=nodes[j], dx=a.x-b.x, dy=a.y-b.y, dist=Math.hypot(dx,dy);
        if(dist<D){
          const op=(1-dist/D)*.28;
          ctx.strokeStyle=`rgba(${MNT[0]},${MNT[1]},${MNT[2]},${op})`;
          ctx.lineWidth=.6; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
          // pulso ocasional viajando por la conexión
          if(Math.random()<0.0008) pulses.push({ax:a.x,ay:a.y,bx:b.x,by:b.y,t:0});
        }
      }
    }
    // nodos
    for(const n of nodes){
      ctx.fillStyle=`rgba(${ACC[0]},${ACC[1]},${ACC[2]},.55)`;
      ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,6.283); ctx.fill();
    }
    // pulsos de "señal"
    pulses=pulses.filter(p=>p.t<=1);
    for(const p of pulses){
      p.t+=0.03;
      const x=p.ax+(p.bx-p.ax)*p.t, y=p.ay+(p.by-p.ay)*p.t;
      ctx.fillStyle=`rgba(${ACC[0]},${ACC[1]},${ACC[2]},${1-p.t})`;
      ctx.beginPath(); ctx.arc(x,y,2.2,0,6.283); ctx.fill();
    }
    raf=requestAnimationFrame(step);
  }
  size(); step();
  let rt; window.addEventListener("resize",()=>{cancelAnimationFrame(raf);clearTimeout(rt);rt=setTimeout(()=>{size();step();},200);});
  document.addEventListener("visibilitychange",()=>{ if(document.hidden){cancelAnimationFrame(raf);} else {cancelAnimationFrame(raf);step();} });
}
