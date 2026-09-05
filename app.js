const COURSE = {
  title: "Uso Profissional de IA",
  modules: [
    {id:1,title:"Pensar antes da IA",goal:"Mudar a relação com a IA: entender capacidades, limites e responsabilidade.",lessons:[
      ["IA como ferramenta de trabalho","Entender a IA como ferramenta de trabalho, não como autoridade."],
      ["Capacidades, limites e confiabilidade","Reconhecer o que a IA faz bem, onde pode falhar e quando desconfiar."],
      ["Quando usar, quando não usar e quando supervisionar","Tomar decisões proporcionais ao risco antes de usar IA."]
    ]},
    {id:2,title:"Preparar o trabalho",goal:"Aprender a pensar na tarefa antes de abrir o chat.",lessons:[
      ["Definindo uma tarefa profissional","Transformar pedidos vagos em trabalhos claramente definidos."],
      ["Briefing proporcional e critérios de sucesso","Preparar apenas o necessário, mas o suficiente para reduzir ambiguidade."]
    ]},
    {id:3,title:"Direcionar a IA",goal:"Transformar pensamento estruturado em orientação eficaz para a IA.",lessons:[
      ["Contexto: o que fornecer e como organizar","Selecionar, priorizar e organizar contexto relevante."],
      ["Anatomia de uma instrução profissional","Construir instruções claras com objetivo, contexto, critérios e formato."],
      ["Exemplos, referências e restrições","Usar exemplos e referências para orientar resultados sem criar ruído."]
    ]},
    {id:4,title:"Avaliar e verificar",goal:"Deixar de ser alguém que apenas copia a resposta da IA.",lessons:[
      ["Uma resposta boa não é necessariamente uma resposta correta","Aprender a separar fluência de confiabilidade."],
      ["Como avaliar uma saída de IA","Aplicar o framework RACCCA para avaliar resultados."],
      ["Como encontrar erros e alucinações","Detectar afirmações que precisam de investigação."],
      ["Verificação: fontes, evidências e confiança","Verificar informações importantes com fontes e evidências."]
    ]},
    {id:5,title:"Refinar",goal:"Melhorar resultados sem entrar em ciclos intermináveis.",lessons:[
      ["Iteração inteligente: feedback que realmente melhora","Dar feedback específico e orientado a critérios."],
      ["Melhorar, mudar de estratégia ou parar","Saber quando insistir, mudar a abordagem ou encerrar."]
    ]},
    {id:6,title:"Usar com responsabilidade",goal:"Conhecer os principais riscos profissionais sem transformar o curso em um curso jurídico.",lessons:[
      ["Privacidade e dados: o que você pode compartilhar","Reconhecer dados pessoais, sensíveis, confidenciais e desnecessários."],
      ["IA, autoria e propriedade intelectual","Entender princípios de autoria, conteúdo de terceiros e regras que variam por jurisdição."],
      ["Responsabilidade e documentação profissional","Registrar decisões, verificações e alterações de forma proporcional."]
    ]},
    {id:7,title:"Escolher estratégias e ferramentas",goal:"Escolher ferramentas pelo problema, não pelo hype.",lessons:[
      ["Como escolher a ferramenta certa","Comparar capacidade, qualidade, contexto, custo, privacidade e limitações."],
      ["Construindo seu fluxo profissional de IA","Unir o método inteiro em um fluxo pessoal reutilizável."]
    ]},
    {id:8,title:"Projeto final",goal:"Provar competência aplicando o método em uma tarefa diferente dos exemplos.",lessons:[
      ["Projeto final: do problema à entrega","Conduzir uma tarefa completa: decidir, preparar, direcionar, avaliar, verificar, refinar e entregar."]
    ]}
  ]
};

const KEY="upia-v01-progress";
let state = JSON.parse(localStorage.getItem(KEY)||"{}");
const app=document.getElementById("app"), nav=document.getElementById("courseNav");
const total=COURSE.modules.reduce((s,m)=>s+m.lessons.length,0);

function save(){localStorage.setItem(KEY,JSON.stringify(state)); updateProgress();}
function lessonId(mi,li){return `${COURSE.modules[mi].id}-${li+1}`}
function flatLessons(){return COURSE.modules.flatMap((m,mi)=>m.lessons.map((l,li)=>({mi,li,id:lessonId(mi,li),module:m,lesson:l})))}
function progressCount(){return Object.values(state).filter(Boolean).length}
function updateProgress(){
  const pct=Math.round(progressCount()/total*100);
  document.getElementById("topProgressBar").style.width=pct+"%";
  document.getElementById("topProgressText").textContent=pct+"%";
}
function buildNav(){
  nav.innerHTML=COURSE.modules.map((m,mi)=>{
    const done=m.lessons.filter((_,li)=>state[lessonId(mi,li)]).length;
    return `<div class="module-nav ${location.hash.includes(`/m${m.id}`)?"open":""}">
      <button class="module-toggle" onclick="toggleModule(this)">
        <span class="module-number">${String(m.id).padStart(2,"0")}</span>
        <span style="font-size:11px;font-weight:700">${m.title}</span><span class="chev">›</span>
      </button>
      <div class="lesson-list">${m.lessons.map((l,li)=>`
        <a class="lesson-link ${location.hash===`#/m${m.id}/a${li+1}`?"active":""}" href="#/m${m.id}/a${li+1}">
          <span class="lesson-state">${state[lessonId(mi,li)]?"✓":"○"}</span><span>Aula ${String(li+1).padStart(2,"0")} · ${l[0]}</span>
        </a>`).join("")}</div>
    </div>`
  }).join("");
}
window.toggleModule=(el)=>el.parentElement.classList.toggle("open");

function home(){
 app.innerHTML=`<section class="hero">
  <div><span class="kicker">Curso 01 · Protótipo navegável</span>
   <h1>Não é sobre pedir melhor.<br><span class="gradient-text">É sobre trabalhar melhor com IA.</span></h1>
   <p>Uma experiência de aprendizagem criada para transformar o uso casual de IA em um processo profissional: decidir, preparar, direcionar, avaliar, refinar e entregar.</p>
   <div class="hero-actions"><a class="btn primary" href="#/curso">Começar o curso →</a><a class="btn ghost" href="#/sobre">Como funciona</a></div>
  </div>
  <div class="hero-visual"><div class="orbit"></div><div class="core">IA<br>como<br>ferramenta</div><span class="node n1">DECIDIR</span><span class="node n2">DIRECIONAR</span><span class="node n3">AVALIAR</span><span class="node n4">ENTREGAR</span></div>
 </section>
 <section><div class="section-title"><span class="kicker">A transformação</span><h2>De usuário casual a profissional</h2><p>O foco é desenvolver julgamento e processo — não decorar prompts.</p></div>
 <div class="cards"><div class="card"><span class="num">01 · DECIDIR</span><h3>Pensar antes</h3><p>Entender quando IA ajuda, quando precisa de supervisão e quando não é a melhor ferramenta.</p></div>
 <div class="card"><span class="num">02 · TRABALHAR</span><h3>Estruturar o trabalho</h3><p>Definir objetivo, contexto, critérios, referências e instruções antes de pedir qualquer coisa.</p></div>
 <div class="card"><span class="num">03 · JULGAR</span><h3>Não aceitar no automático</h3><p>Avaliar, verificar, refinar e só então entregar o resultado.</p></div></div></section>`;
}
function dashboard(){
 const pct=Math.round(progressCount()/total*100);
 app.innerHTML=`<div class="dashboard-head"><div><span class="kicker">Sua trilha</span><h1>Curso completo</h1><p>8 módulos · ${total} aulas. Percorra na ordem recomendada ou explore qualquer módulo.</p></div><div class="overall"><strong>${pct}%</strong><small>progresso geral</small><div class="bar"><span style="width:${pct}%"></span></div></div></div>
 ${COURSE.modules.map((m,mi)=>{const done=m.lessons.filter((_,li)=>state[lessonId(mi,li)]).length;const mp=Math.round(done/m.lessons.length*100);return `<article class="module-card">
 <div class="module-card-head"><div class="module-index">${String(m.id).padStart(2,"0")}</div><div><h2>${m.title}</h2><p>${m.goal}</p></div><div class="module-pct">${done}/${m.lessons.length}</div></div>
 <div class="module-lessons">${m.lessons.map((l,li)=>`<a class="lesson-row" href="#/m${m.id}/a${li+1}"><span class="lesson-num">${String(li+1).padStart(2,"0")}</span><div><h3>${l[0]}</h3><small>${l[1]}</small></div><span class="go ${state[lessonId(mi,li)]?"done":""}">${state[lessonId(mi,li)]?"✓":"→"}</span></a>`).join("")}</div>
 </article>`}).join("")}`;
}
function about(){
 app.innerHTML=`<div class="lesson-page"><span class="kicker">Arquitetura do curso</span><h1>Como esta experiência funciona</h1><p class="lesson-intro">Este V0.1 é um protótipo: o objetivo é testar estrutura, navegação, ritmo e sensação de produto antes da produção dos conteúdos e vídeos definitivos.</p>
 <div class="content-block"><h2>O método central</h2><p><strong>DECIDIR → PREPARAR → DIRECIONAR → AVALIAR → REFINAR → ENTREGAR.</strong></p><p>Dentro dessas fases entram briefing, contexto, instruções, execução, verificação, controle de qualidade, documentação e escolha de ferramentas.</p></div>
 <div class="content-block"><h2>O que ainda é placeholder</h2><ul><li>Vídeos de aproximadamente 2 segundos para simular a experiência.</li><li>Conteúdo completo, demonstrações, exercícios e materiais finais.</li><li>Identidade visual e narrativa audiovisual definitivas.</li><li>Autenticação, pagamentos e infraestrutura de produção.</li></ul></div>
 <div class="content-block exercise"><span class="tag">DECISÃO DE DESIGN</span><h2>Por que testar antes de produzir?</h2><p>Porque um protótipo navegável revela problemas que um documento não revela. Primeiro validamos a experiência; depois investimos na produção.</p></div></div>`;
}
function lesson(mi,li){
 const m=COURSE.modules[mi], l=m.lessons[li], flat=flatLessons(), idx=flat.findIndex(x=>x.mi===mi&&x.li===li), prev=flat[idx-1], next=flat[idx+1], id=lessonId(mi,li), done=!!state[id];
 const nextLabel=next?`Aula ${String(next.li+1).padStart(2,"0")} · ${next.lesson[0]}`:"Finalizar projeto";
 app.innerHTML=`<div class="lesson-page">
  <div class="lesson-meta"><span class="pill">Módulo ${String(m.id).padStart(2,"0")}</span><span>›</span><span>Aula ${String(li+1).padStart(2,"0")}</span></div>
  <h1>${l[0]}</h1><p class="lesson-intro">${l[1]}</p>
  <div class="video-placeholder"><div class="video-grid"></div><div class="pulse"></div><div class="video-center"><div class="video-icon">▶</div><strong>Vídeo placeholder · 2s</strong><small>Será substituído pelo vídeo definitivo na produção.</small></div></div>
  <div class="content-grid"><div>
   <div class="content-block"><h2>O que você vai aprender</h2><p>Nesta aula, o aluno desenvolve uma competência prática relacionada ao método profissional de IA. O conteúdo final será construído com explicação, exemplo comum, construção, demonstração, comparação e prática.</p></div>
   <div class="content-block"><h2>Estrutura da aula</h2><ul><li>Hook: apresentar o problema real.</li><li>Erro comum: mostrar o que normalmente dá errado.</li><li>Conceito: explicar o princípio de forma simples.</li><li>Construção: transformar pensamento em processo.</li><li>Demonstração: aplicar em uma tarefa realista.</li><li>Prática: o aluno aplica por conta própria.</li></ul></div>
   <div class="content-block exercise"><span class="tag">PRÁTICA · PLACEHOLDER</span><h2>Exercício da aula</h2><p>O exercício definitivo será desenhado para testar transferência: o aluno deverá aplicar o princípio em uma situação que não seja apenas uma cópia do exemplo apresentado.</p></div>
  </div><aside class="side-card"><h3>Material da aula</h3><ul><li>Resumo visual do conceito</li><li>Checklist de aplicação</li><li>Exercício prático</li><li>Critérios de verificação</li></ul><button class="btn primary check-btn" onclick="completeLesson('${id}')">${done?"✓ Aula concluída":"Marcar como concluída"}</button><div class="completed-note">${done?"Seu progresso foi salvo neste dispositivo.":""}</div></aside></div>
  <div class="lesson-nav">${prev?`<a class="btn ghost" href="#/m${prev.module.id}/a${prev.li+1}">← Anterior</a>`:`<a class="btn ghost" href="#/curso">← Módulos</a>`}${next?`<a class="btn primary" href="#/m${next.module.id}/a${next.li+1}">${nextLabel} →</a>`:`<a class="btn primary" href="#/curso">Voltar ao curso →</a>`}</div>
 </div>`;
}
window.completeLesson=(id)=>{state[id]=true;save();render()};
function render(){
 buildNav(); updateProgress();
 const h=location.hash||"#/";
 if(h==="#/"||h==="#")home();
 else if(h==="#/curso")dashboard();
 else if(h==="#/sobre")about();
 else {const match=h.match(/^#\/m(\d+)\/a(\d+)$/); if(match){const mi=COURSE.modules.findIndex(m=>m.id==+match[1]);const li=+match[2]-1;if(mi>=0&&li>=0&&li<COURSE.modules[mi].lessons.length)lesson(mi,li);else home();}else home();}
 document.getElementById("app").focus({preventScroll:true});
}
document.getElementById("menuBtn").onclick=()=>document.getElementById("sidebar").classList.toggle("open");
window.addEventListener("hashchange",()=>{document.getElementById("sidebar").classList.remove("open");render()});
render();
