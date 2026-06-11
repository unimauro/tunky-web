/* ===== Tunky — data, i18n, interacciones ===== */

/* --- Portafolio real (tableros verificados en vivo) --- */
const WORK = [
  { url:"https://unimauro.github.io/observatorio-poder-economico/", tag:"Grafo · Inteligencia",
    t:"Observatorio de Poder Económico",
    es:"Grafo de grupos económicos, accionistas y directorios del Perú (SMV·BVL·SBS) con PageRank y comunidades.",
    en:"Graph of Peru's economic groups, shareholders and boards (SMV·BVL·SBS) with PageRank and communities.",
    pt:"Grafo de grupos econômicos, acionistas e diretorias do Peru (SMV·BVL·SBS) com PageRank e comunidades." },
  { url:"https://unimauro.github.io/peru-transparente/", tag:"Transparencia",
    t:"Perú Transparente",
    es:"Mapa de funcionarios, entidades públicas, empresas estatales y redes de poder.",
    en:"Map of public officials, agencies, state companies and power networks.",
    pt:"Mapa de funcionários, entidades públicas, empresas estatais e redes de poder." },
  { url:"https://unimauro.github.io/petroperu-analytics/", tag:"Finanzas",
    t:"Petroperú Analytics",
    es:"Análisis financiero, operativo y de gobierno corporativo de Petroperú, 2005 a hoy.",
    en:"Financial, operational and corporate-governance analysis of Petroperú, 2005 to date.",
    pt:"Análise financeira, operacional e de governança da Petroperú, de 2005 até hoje." },
  { url:"https://unimauro.github.io/observatorio-fonafe/", tag:"Sector público",
    t:"Observatorio FONAFE",
    es:"Empresas públicas del Perú: transparencia, datos y diagnóstico de gestión.",
    en:"Peru's state-owned enterprises: transparency, data and management diagnostics.",
    pt:"Empresas públicas do Peru: transparência, dados e diagnóstico de gestão." },
  { url:"https://unimauro.github.io/observatorio-defensa-interior/", tag:"Sector público",
    t:"Defensa e Interior",
    es:"Inteligencia financiera del sector Defensa e Interior: presupuesto, empresas y pensiones.",
    en:"Financial intelligence for Defense & Interior: budget, companies and pensions.",
    pt:"Inteligência financeira do setor Defesa e Interior: orçamento, empresas e pensões." },
  { url:"https://unimauro.github.io/proyecto-inti/", tag:"Territorio",
    t:"Proyecto INTI",
    es:"Gemelo digital del Perú: inteligencia territorial de 1,891 distritos.",
    en:"Peru's digital twin: territorial intelligence across 1,891 districts.",
    pt:"Gêmeo digital do Peru: inteligência territorial de 1.891 distritos." },
  { url:"https://unimauro.github.io/congreso-abierto-peru/", tag:"Transparencia",
    t:"Congreso Abierto",
    es:"Observatorio inteligente del Congreso de la República con datos legislativos.",
    en:"Smart observatory of Congress with open legislative data.",
    pt:"Observatório inteligente do Congresso com dados legislativos abertos." },
  { url:"https://unimauro.github.io/observatorio-smartphones-adolescentes/", tag:"Salud · Social",
    t:"Smartphones en Adolescentes",
    es:"Evidencia científica global sobre uso de smartphones y salud mental adolescente.",
    en:"Global scientific evidence on smartphone use and teen mental health.",
    pt:"Evidência científica global sobre uso de smartphones e saúde mental adolescente." },
  { url:"https://unimauro.github.io/observatorio-idoneidad-estado/", tag:"Sector público",
    t:"Idoneidad del Estado",
    es:"Índice de idoneidad y capacidad del Estado por entidad (mérito, estabilidad, capacidad).",
    en:"Index of state suitability and capacity by agency (merit, stability, capacity).",
    pt:"Índice de idoneidade e capacidade do Estado por entidade (mérito, estabilidade, capacidade)." },
  { url:"https://unimauro.github.io/unimaurox-vuelos-internacionales/", tag:"Tiempo real",
    t:"Vuelos Internacionales",
    es:"Tráfico aéreo en tiempo real sobre el mapa (OpenSky + Leaflet), sin backend.",
    en:"Real-time air traffic on the map (OpenSky + Leaflet), no backend.",
    pt:"Tráfego aéreo em tempo real no mapa (OpenSky + Leaflet), sem backend." },
  { url:"https://unimauro.github.io/unimaurox-seguridad/", tag:"Social",
    t:"Seguridad Ciudadana",
    es:"Mapa interactivo de seguridad ciudadana del Perú por región (ENAPRES, PNP, Sinadef).",
    en:"Interactive citizen-security map of Peru by region (ENAPRES, PNP, Sinadef).",
    pt:"Mapa interativo de segurança cidadã do Peru por região (ENAPRES, PNP, Sinadef)." },
  { url:"https://unimauro.github.io/unimaurox-peru-riesgos/", tag:"Territorio",
    t:"Perú en Riesgos",
    es:"Sismos, tsunamis, El Niño, huaicos y friajes con simuladores. Datos IGP/SENAMHI/INDECI.",
    en:"Quakes, tsunamis, El Niño, landslides and cold snaps with simulators. IGP/SENAMHI data.",
    pt:"Sismos, tsunamis, El Niño, deslizamentos e friagens com simuladores. Dados IGP/SENAMHI." },
  { url:"https://unimauro.github.io/colegios-evaluacion/", tag:"Educación",
    t:"Radiografía Educativa",
    es:"Evaluación educativa del Perú a partir de la prueba ENLA 2024.",
    en:"Peru's education assessment based on the 2024 ENLA test.",
    pt:"Avaliação educacional do Peru a partir do teste ENLA 2024." },
  { url:"https://unimauro.github.io/salariosperu/", tag:"Datos · Mercado",
    t:"Salarios Perú",
    es:"Tablero de salarios del mercado laboral peruano por sector y rol.",
    en:"Dashboard of Peruvian labor-market salaries by sector and role.",
    pt:"Painel de salários do mercado de trabalho peruano por setor e cargo." },
  { url:"https://unimauro.github.io/agentflow-ai/", tag:"IA · SaaS",
    t:"AgentFlow AI",
    es:"Demo de plataforma SaaS multi-agente con orquestación de tareas.",
    en:"Demo of a multi-agent SaaS platform with task orchestration.",
    pt:"Demo de plataforma SaaS multiagente com orquestração de tarefas." },
];

/* --- Capacidades IA-first --- */
const AI = [
  { ic:"◈", t:{es:"Copilotos a tu medida",en:"Custom copilots",pt:"Copilotos sob medida"},
    p:{es:"Un asistente que conoce TU negocio: responde, redacta y consulta tus datos en lenguaje natural. Como el copiloto que ya integramos en ConTodo ERP.",
       en:"An assistant that knows YOUR business: answers, writes and queries your data in natural language. Like the copilot we built into ConTodo ERP.",
       pt:"Um assistente que conhece o SEU negócio: responde, redige e consulta seus dados em linguagem natural. Como o copiloto que já integramos no ConTodo ERP."} },
  { ic:"⟁", t:{es:"Agentes que ejecutan",en:"Agents that act",pt:"Agentes que executam"},
    p:{es:"No solo conversan: rastrean licitaciones, califican leads, generan reportes y envían cobros por WhatsApp mientras tú duermes.",
       en:"They don't just chat: they track tenders, qualify leads, generate reports and send payment links on WhatsApp while you sleep.",
       pt:"Não só conversam: rastreiam licitações, qualificam leads, geram relatórios e enviam cobranças no WhatsApp enquanto você dorme."} },
  { ic:"⌁", t:{es:"Procesos automatizados",en:"Automated workflows",pt:"Processos automatizados"},
    p:{es:"Identificamos las tareas repetitivas que comen tu día y las convertimos en flujos que corren solos, con IA donde aporta.",
       en:"We find the repetitive tasks eating your day and turn them into flows that run themselves, with AI where it adds value.",
       pt:"Identificamos as tarefas repetitivas que consomem seu dia e as transformamos em fluxos que rodam sozinhos, com IA onde agrega."} },
  { ic:"◉", t:{es:"Decisiones con datos",en:"Data-driven decisions",pt:"Decisões com dados"},
    p:{es:"Dashboards e inteligencia que cruzan tus datos con fuentes públicas y te dicen qué hacer, no solo qué pasó.",
       en:"Dashboards and intelligence that cross your data with public sources and tell you what to do, not just what happened.",
       pt:"Dashboards e inteligência que cruzam seus dados com fontes públicas e dizem o que fazer, não só o que aconteceu."} },
];

/* --- Servicios productizados --- */
const SVC = [
  { ic:"▦", feat:false, key:"dash", price:"S/ 1,500+", time:"1–2 sem",
    t:{es:"Dashboard Express",en:"Express Dashboard",pt:"Dashboard Express"},
    p:{es:"Un tablero a partir de tus datos (Excel, API o BD). Hasta 6 vistas, en tu dominio.",
       en:"One dashboard from your data (Excel, API or DB). Up to 6 views, on your domain.",
       pt:"Um painel a partir dos seus dados (Excel, API ou BD). Até 6 visões, no seu domínio."} },
  { ic:"◉", feat:true, key:"obs", price:"S/ 5,000+", time:"3–5 sem",
    t:{es:"Observatorio a medida",en:"Custom Observatory",pt:"Observatório sob medida"},
    p:{es:"ETL + tablero interactivo con mapas y grafos, al estilo de los que ves arriba.",
       en:"ETL + interactive dashboard with maps and graphs, like the ones above.",
       pt:"ETL + painel interativo com mapas e grafos, como os de cima."} },
  { ic:"◆", feat:false, key:"mvp", price:"S/ 8,000+", time:"4–8 sem",
    t:{es:"App / SaaS (MVP)",en:"App / SaaS (MVP)",pt:"App / SaaS (MVP)"},
    p:{es:"Aplicación web con login, pagos (Yape/Culqi/tarjeta) y despliegue listo para vender.",
       en:"Web app with login, payments (Yape/Culqi/card) and deploy ready to sell.",
       pt:"App web com login, pagamentos (Yape/Culqi/cartão) e deploy pronto para vender."} },
  { ic:"⟁", feat:false, key:"bot", price:"S/ 2,500+", time:"1–3 sem",
    t:{es:"Bot / Automatización",en:"Bot / Automation",pt:"Bot / Automação"},
    p:{es:"Bot de WhatsApp o agente con IA que automatiza cobros, alertas o reportes.",
       en:"WhatsApp bot or AI agent that automates payments, alerts or reports.",
       pt:"Bot de WhatsApp ou agente de IA que automatiza cobranças, alertas ou relatórios."} },
  { ic:"⌁", feat:false, key:"maint", price:"S/ 300/mes", time:"continuo",
    t:{es:"Hosting & Mantenimiento",en:"Hosting & Maintenance",pt:"Hospedagem & Manutenção"},
    p:{es:"Alojamos en nuestro servidor, monitoreamos y aplicamos cambios cada mes.",
       en:"We host on our server, monitor and ship changes every month.",
       pt:"Hospedamos no nosso servidor, monitoramos e aplicamos mudanças todo mês."} },
  { ic:"✸", feat:false, key:"intel", price:"S/ 300+", time:"a pedido",
    t:{es:"Reporte de inteligencia",en:"Intelligence report",pt:"Relatório de inteligência"},
    p:{es:"Mapa de poder, accionistas y vínculos de una empresa o grupo, en PDF.",
       en:"Power map, shareholders and links of a company or group, as PDF.",
       pt:"Mapa de poder, acionistas e vínculos de uma empresa ou grupo, em PDF."} },
];

/* --- Productos propios --- */
const PROD = [
  { t:"ConTodo ERP", badge:"live", url:"https://contodo-erp.vercel.app",
    es:"ERP multi-tenant para pymes de Perú y LATAM, con copiloto de IA.",
    en:"Multi-tenant ERP for Peruvian & LATAM SMBs, with an AI copilot.",
    pt:"ERP multi-tenant para PMEs do Peru e LATAM, com copiloto de IA." },
  { t:"CondoFlow", badge:"build", url:"",
    es:"SaaS de administración de condominios, edificios e inmobiliarias.",
    en:"SaaS for managing condos, buildings and real estate.",
    pt:"SaaS para administração de condomínios, edifícios e imobiliárias." },
  { t:"CanchApp", badge:"build", url:"",
    es:"Reserva de canchas con bot de WhatsApp y pago por Yape.",
    en:"Sports-court booking with WhatsApp bot and Yape payments.",
    pt:"Reserva de quadras com bot de WhatsApp e pagamento via Yape." },
  { t:"LicitaPerú", badge:"build", url:"",
    es:"Alertas de licitaciones del Estado peruano por email y WhatsApp.",
    en:"Peruvian public-tender alerts by email and WhatsApp.",
    pt:"Alertas de licitações do Estado peruano por e-mail e WhatsApp." },
  { t:"Medsage", badge:"build", url:"",
    es:"Plataforma clínica para médicos y consultorios independientes.",
    en:"Clinical platform for independent doctors and practices.",
    pt:"Plataforma clínica para médicos e consultórios independentes." },
  { t:"Finance Hub AI", badge:"build", url:"",
    es:"Asesor de finanzas personales y familiares impulsado por IA.",
    en:"AI-powered personal and family finance advisor.",
    pt:"Consultor de finanças pessoais e familiares com IA." },
];

/* --- i18n (UI) --- */
const I18N = {
  es:{ "nav.ai":"IA-first","nav.work":"Trabajo","nav.services":"Servicios","nav.products":"Productos","nav.process":"Proceso","nav.cta":"Conversemos",
    "hero.pill":"IA-first · agentes · copilotos · automatización",
    "hero.l1":"Convertimos tu empresa","hero.l2":"en IA-first.",
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
    "hero.pill":"AI-first · agents · copilots · automation",
    "hero.l1":"We make your company","hero.l2":"AI-first.",
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
    "hero.pill":"IA-first · agentes · copilotos · automação",
    "hero.l1":"Tornamos sua empresa","hero.l2":"IA-first.",
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
};

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
      <div class="svc-foot"><span class="svc-price">${s.price}</span><span class="svc-time">${s.time}</span></div>
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
  document.querySelectorAll(".section .card, .svc, .prod").forEach((el,i)=>{
    el.classList.add("io"); el.style.transitionDelay=(i%6*0.04)+"s"; _io.observe(el);
  });
}

/* contact -> whatsapp */
const WA_NUMBER = "51940584307"; // WhatsApp Tunky / Carlos
function tunkySubmit(e){
  e.preventDefault();
  const f=e.target, d=new FormData(f);
  const lines={
    es:`Hola Tunky 👋%0ANombre: ${d.get("name")}%0AEmpresa: ${d.get("org")||"-"}%0ANecesito: ${d.get("need")}%0A${d.get("msg")||""}`,
    en:`Hi Tunky 👋%0AName: ${d.get("name")}%0ACompany: ${d.get("org")||"-"}%0AI need: ${d.get("need")}%0A${d.get("msg")||""}`,
    pt:`Olá Tunky 👋%0ANome: ${d.get("name")}%0AEmpresa: ${d.get("org")||"-"}%0APreciso de: ${d.get("need")}%0A${d.get("msg")||""}`,
  };
  window.open(`https://wa.me/${WA_NUMBER}?text=${lines[LANG]}`,"_blank");
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
})();
