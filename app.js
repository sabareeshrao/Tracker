(function () {
'use strict';
const data = window.TRACKER_DATA;
const root = document.getElementById('app');
if (!data || !root) { document.body.innerHTML = '<p style="padding:2rem">Question catalog could not be loaded. Make sure data.js is next to index.html.</p>'; return; }
const STORAGE = 'developer7.tracker.progress.v1';
const QUESTION = new Map(data.questions.map(q => [q[0], {id:q[0], text:q[1], refs:q[2]}]));
const SET = new Map(data.sets.map(s => [s[0], {id:s[0], title:s[1], ids:s[2]}]));
const rawTopics = [
 ['Java fundamentals','java-basics','Java language basics','\b(variable|data type|primitive|operator|literal|loop|conditional|control flow|java basics|switch statement|instanceof)\b'],
 ['Java fundamentals','jdk-jre','JDK & JRE','\b(jdk|jre|java development kit|java runtime environment|java home|java_home)\b'],
 ['Java fundamentals','jvm','JVM architecture','\b(jvm|java virtual machine|runtime data area|bytecode|execution engine)\b'],
 ['Java fundamentals','jit','JIT compilation','\b(jit|just.in.time compiler|hotspot)\b'],
 ['Java fundamentals','class-loading','Class loading','\b(class loader|class loading|classloader|loading linking initialization)\b'],
 ['Java fundamentals','memory-gc','Memory & garbage collection','\b(garbage collect|heap memory|stack memory|memory leak|outofmemory|gc tuning|metaspace)\b'],
 ['Java fundamentals','strings','String, StringBuilder & StringBuffer','\b(stringbuilder|stringbuffer|string pool|string immutability|immutable string|java string)\b'],
 ['Java fundamentals','equality','equals() & hashCode()','\b(equals\(\)|hashcode\(\)|equality contract|equals and hashcode)\b'],
 ['Java fundamentals','exceptions','Exceptions & finally','\b(exception|throwable|try.catch|finally|throws keyword|throw keyword)\b'],
 ['Java fundamentals','types-casting','Type conversion & casting','\b(typecast|type cast|casting|widening|narrowing|autoboxing|unboxing|wrapper class|promotion)\b'],
 ['Java fundamentals','static-final','static, final & super','\b(static|final keyword|super keyword|this keyword|system\.exit)\b'],
 ['Java fundamentals','generics','Generics','\b(generic|type parameter|wildcard|type erasure)\b'],
 ['Java fundamentals','annotations','Annotations & reflection','\b(annotation|reflection|@override|@deprecated|metadata)\b'],
 ['Java fundamentals','serialization','Serialization & cloning','\b(serializ|deserializ|clone\(\)|cloning|deep copy|shallow copy)\b'],
 ['OOP & design','oop','Object-oriented programming','\b(oop|object.oriented|class(es)? and object|four pillars)\b'],
 ['OOP & design','encapsulation','Encapsulation','\b(encapsulation|getter and setter|data hiding|access modifier)\b'],
 ['OOP & design','inheritance','Inheritance','\b(inheritance|extend(s|ed)? class|superclass|subclass)\b'],
 ['OOP & design','polymorphism','Polymorphism','\b(polymorphism|overrid(e|ing)|overload(ing)?|dynamic method dispatch|method dispatch)\b'],
 ['OOP & design','abstraction','Abstraction & interfaces','\b(abstraction|abstract class|interface|functional interface|default method)\b'],
 ['OOP & design','solid','SOLID & design principles','\b(solid|single responsibility|open.closed|liskov|interface segregation|dependency inversion|design principle)\b'],
 ['OOP & design','patterns','Design patterns','\b(design pattern|singleton|factory pattern|builder pattern|strategy pattern|observer pattern|adapter pattern)\b'],
 ['Collections & algorithms','collections','Collections Framework','\b(collections? framework|collection interface|collections? utility|collections? class)\b'],
 ['Collections & algorithms','list','List, ArrayList & LinkedList','\b(arraylist|linkedlist|list interface|list vs|list\.sort)\b'],
 ['Collections & algorithms','set','Set, HashSet & TreeSet','\b(hashset|treeset|linkedhashset|set interface|sorted set|set vs)\b'],
 ['Collections & algorithms','map','Map, HashMap & LinkedHashMap','\b(hashmap|linkedhashmap|treemap|concurrenthashmap|map interface|map vs|map entry)\b'],
 ['Collections & algorithms','queue','Queue, Deque & priority queue','\b(priorityqueue|priority queue|deque|queue interface|blockingqueue)\b'],
 ['Collections & algorithms','sorting','Sorting & comparator','\b(sort|comparable|comparator|timsort|merge sort|insertion sort)\b'],
 ['Collections & algorithms','algorithms','Algorithms & complexity','\b(algorithm|big.o|time complexity|space complexity|two pointers|binary search|recursion|dynamic programming)\b'],
 ['Collections & algorithms','streams','Stream API','\b(stream api|java streams|stream\(\)|collectors|stream pipeline|parallel stream)\b'],
 ['Collections & algorithms','lambdas','Lambdas & functional programming','\b(lambda|method reference|functional programming|predicate|consumer|supplier|function interface)\b'],
 ['Collections & algorithms','optional','Optional API','\b(optional\b|optional\.of|optional\.empty)\b'],
 ['Concurrency','threads','Threads & Runnable','\b(thread|runnable|thread lifecycle|multithread)\b'],
 ['Concurrency','synchronization','Synchronization & locks','\b(synchroniz|reentrantlock|mutex|semaphore|monitor lock|thread safe|thread.safe)\b'],
 ['Concurrency','executors','Executor & thread pools','\b(executor|thread pool|forkjoin|future|completablefuture)\b'],
 ['Concurrency','concurrency-issues','volatile, deadlocks & ThreadLocal','\b(volatile|deadlock|threadlocal|race condition|atomicinteger|atomic variable)\b'],
 ['Spring & APIs','spring-core','Spring Core, IoC & DI','\b(dependency injection|inversion of control|ioc|bean lifecycle|applicationcontext|component scan|@autowired|constructor injection|spring core)\b'],
 ['Spring & APIs','spring-boot','Spring Boot','\b(spring boot|springboot|@springbootapplication|springapplication\.run|starter dependencies|auto.configuration)\b'],
 ['Spring & APIs','spring-mvc','Spring MVC & controllers','\b(spring mvc|@restcontroller|@controller|@requestmapping|@getmapping|@postmapping|modelandview)\b'],
 ['Spring & APIs','rest','REST & HTTP APIs','\b(rest api|restful|http status|http method|endpoint|request body|response body|api versioning|api design)\b'],
 ['Spring & APIs','validation','Input validation & error handling','\b(@valid|@validated|bean validation|validation error|exceptionhandler|controlleradvice|input validation)\b'],
 ['Spring & APIs','security','Spring Security, JWT & OAuth','\b(spring security|jwt|oauth|authentication|authorization|csrf|securityfilterchain|bearer token)\b'],
 ['Spring & APIs','aop','AOP & proxies','\b(aop|aspect.oriented|@aspect|join point|pointcut|proxy|advice)\b'],
 ['Spring & APIs','transactions','Transactions & consistency','\b(transaction|@transactional|rollback|commit|acid|saga|outbox|two.phase commit)\b'],
 ['Spring & APIs','microservices','Microservices & distributed systems','\b(microservice|service discovery|api gateway|distributed system|circuit breaker|resilience4j|load balanc)\b'],
 ['Spring & APIs','messaging','Messaging & Kafka','\b(kafka|message broker|rabbitmq|producer|consumer|event.driven|message queue|pub.sub)\b'],
 ['Spring & APIs','caching','Caching & Redis','\b(cache|redis|@cacheable|eviction|ttl)\b'],
 ['Spring & APIs','observability','Actuator, logging & metrics','\b(actuator|observability|logback|slf4j|distributed tracing|micrometer|prometheus|grafana)\b'],
 ['Data & persistence','sql','SQL queries & joins','\b(sql|join query|inner join|outer join|group by|having clause|indexing)\b'],
 ['Data & persistence','databases','Databases & data modeling','\b(database|dbms|rdbms|schema|primary key|foreign key|normaliz)\b'],
 ['Data & persistence','jpa','JPA, Hibernate & Spring Data','\b(jpa|hibernate|spring data|repository interface|entitymanager|@entity|lazy loading|n\+1 query)\b'],
 ['Data & persistence','postgres','PostgreSQL & PostGIS','\b(postgresql|postgres|postgis|spatial sql)\b'],
 ['Build, test & deploy','intellij','IntelliJ & IDE tools','\b(intellij|ide shortcut|eclipse|sts editor|integrated development environment|lombok)\b'],
 ['Build, test & deploy','maven','Maven & pom.xml','\b(maven|pom\.xml|\.m2|dependency management|build lifecycle|dependency resolution)\b'],
 ['Build, test & deploy','git','Git, GitHub & version control','\b(github|git |gitlab|version control|pull request|branching|merge conflict|commit history)\b'],
 ['Build, test & deploy','junit','JUnit & unit testing','\b(junit|unit test|@test|@beforeeach|mockito|assertion|test doubles|test coverage)\b'],
 ['Build, test & deploy','integration-tests','Integration & contract testing','\b(integration test|testcontainers|contract test|end.to.end test|consumer.driven|api test)\b'],
 ['Build, test & deploy','cicd','CI/CD pipelines','\b(ci\/cd|pipeline|github actions|jenkins|continuous integration|continuous deployment)\b'],
 ['Build, test & deploy','containers','Docker & containers','\b(docker|containeriz|dockerfile|docker compose|image registry)\b'],
 ['Build, test & deploy','kubernetes','Kubernetes & deployment','\b(kubernetes|kubectl|k8s|pod|helm|deployment manifest|replica set)\b'],
 ['Build, test & deploy','linux','Linux & shell','\b(linux|bash|shell script|terminal command|unix)\b'],
 ['Build, test & deploy','agile','Agile & team workflows','\b(agile|scrum|sprint|waterfall|jira|retrospective|code review|mentorship)\b'],
 ['GIS & system design','gis','GIS & GeoOps','\b(gis|geoops|geospatial|geographic information|map layer|feature collection)\b'],
 ['GIS & system design','spatial','Spatial data & geometry','\b(geometry|coordinate|crs\b|srid|projection|shapefile|geojson|topolog)\b'],
 ['GIS & system design','performance','Performance & scaling','\b(performance|throughput|latency|load test|scalab|profiling|bottleneck)\b'],
 ['GIS & system design','reliability','Reliability & incidents','\b(incident|outage|fault|recovery time|slo\b|sla\b|reliability|production bug|disaster recovery)\b'],
 ['GIS & system design','architecture','System design & architecture','\b(system design|architecture|high.level design|low.level design|design a |scale a )\b'],
 ['AI & emerging','llm','LLMs & prompting','\b(llm|large language model|prompt|tokens?|context window|generative ai)\b'],
 ['AI & emerging','rag','RAG & embeddings','\b(rag|retrieval.augmented|embedding|vector database|semantic search|vector search)\b'],
 ['AI & emerging','spring-ai','Spring AI & agents','\b(spring ai|ai agents?|agentic|tool calling|function calling)\b']
];
const topics = rawTopics.map((r,i)=>({group:r[0],id:r[1],name:r[2],regex:new RegExp(r[3],'i'),qids:[],sets:new Set()}));
for (const q of QUESTION.values()) {
 const qtext=q.text;
 let matched=topics.filter(t=>t.regex.test(qtext));
 if (!matched.length) {
  const first=SET.get(q.refs[0][0]);
  if(first) matched=topics.filter(t=>t.regex.test(first.title)).slice(0,3);
 }
 matched.forEach(t=>{t.qids.push(q.id);q.refs.forEach(r=>t.sets.add(r[0]));});
}
const topicById=new Map(topics.map(t=>[t.id,t]));
const empty=()=>({version:1,concepts:{},questions:{},notes:[]});
let progress;try {const x=JSON.parse(localStorage.getItem(STORAGE)||'null');progress=x&&typeof x==='object'&&x.version===1?{...empty(),...x}:empty();}catch(e){progress=empty();}
let view='overview',query='',groupFilter='All subjects',stageFilter='all',questionFilter='all',selectedSet=1,selectedTopic=topics[0].id,roadLimit=20,questionLimit=35,topicLimit=48,drawer=null,draft='',selectedTags=new Set(),tagsTouched=false;
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const stageNames=['Not started','Read','Notes captured','Practiced','Interview ready'];
const stageColors=['muted','sky','cyan','amber','green'];
const qNames=['Not started','Read','Practiced','Interview ready'];
const pct=n=>Math.round(n*100);
const cStage=id=>Math.min(4,Math.max(0,+(progress.concepts[id]||0)));
const qStage=id=>Math.min(3,Math.max(0,+(progress.questions[id]||0)));
const groups=['All subjects',...new Set(topics.map(t=>t.group))];
const knownTopicCount=topics.filter(t=>t.qids.length).length;
function persist(){localStorage.setItem(STORAGE,JSON.stringify(progress));}
function meter(v,cls){return '<div class="meter"><span class="fill '+(cls||'green')+'" style="width:'+Math.min(100,Math.max(0,v))+'%"></span></div>';}
function icon(name){const m={grid:'▦',atlas:'◈',list:'☷',journal:'▤',search:'⌕',arrow:'↗',back:'←',check:'✓',spark:'✦',close:'×',cloud:'⇩'};return m[name]||name;}
function linkFor(q){const line=q.refs[0][3];return 'https://github.com/sabareeshrao/Tracker/blob/main/docs/questions/roadmap/ALL_SETS_001_390.md#L'+line;}
function initials(label){return label.split(/\s+/).slice(0,2).map(s=>s[0]||'').join('').toUpperCase();}
function phase(set){return set<=85?'Existing roadmap':set<=378?'Question preview':'Optional extension';}
function setStats(s){const ids=s.ids;const read=ids.filter(id=>qStage(id)>0).length,ready=ids.filter(id=>qStage(id)===3).length;return {read,ready,total:ids.length,percent:ids.length?pct(read/ids.length):0};}
function stats(){const qc=data.questions.length,qRead=data.questions.filter(q=>qStage(q[0])>0).length,qReady=data.questions.filter(q=>qStage(q[0])===3).length,sum=topics.reduce((s,t)=>s+cStage(t.id)*25,0);return {qc,qRead,qReady,qPercent:pct(qRead/qc),cPercent:Math.round(sum/topics.length),cStarted:topics.filter(t=>cStage(t.id)>0).length,cReady:topics.filter(t=>cStage(t.id)===4).length};}
function matchingTopics(s){
 const note=s.toLowerCase().trim();if(note.length<4)return[];
 const scores=[];
 topics.forEach(t=>{
 let score=0;const match=note.match(t.regex);if(match)score+=4+Math.min(4,match[0].length/8);
 const literal=t.name.toLowerCase().replace(/[&,]/g,' ').replace(/\s+/g,' ').trim();
 if(literal.length>6&&note.includes(literal))score+=5;
 if(score>0)scores.push([t,score]);
 });
 return scores.sort((a,b)=>b[1]-a[1]||a[0].name.localeCompare(b[0].name)).slice(0,8).map(x=>x[0]);
}
function navHtml(){
 const s=stats();
 return '<aside class="sidebar" id="sidebar"><div class="brand"><div class="brand-mark">T<span>·</span></div><div><div class="brand-title">TRACE <small>STUDY TRACKER</small></div><div class="brand-sub">Developer-7 · Personal dashboard</div></div></div>'+
 '<div class="nav-kicker">WORKSPACE</div>'+
 '<div class="nav-list">'+[
 ['overview','grid','Overview'],['roadmap','list','Set roadmap'],['atlas','atlas','Concept atlas'],['questions','list','Question bank'],['journal','journal','Study journal']
 ].map(n=>'<button class="nav-button '+(view===n[0]?'active':'')+'" data-action="view" data-view="'+n[0]+'"><span class="nav-icon">'+icon(n[1])+'</span>'+n[2]+(n[0]==='journal'?'<span class="nav-number">'+progress.notes.length+'</span>':'')+'</button>').join('')+'</div>'+
 '<div class="nav-kicker nav-kicker-2">LEARNING STATUS</div>'+
 '<div class="sidebar-progress"><div class="mini-caption"><span>Concept coverage</span><strong>'+s.cPercent+'%</strong></div>'+meter(s.cPercent,'green')+'<div class="mini-caption dim"><span>'+s.cStarted+' of '+topics.length+' concepts started</span><span>Personal</span></div></div>'+
 '<div class="sidebar-bottom"><div class="save-indicator"><span class="live-dot"></span> Stored in this browser</div><a href="https://github.com/sabareeshrao/Tracker" target="_blank" rel="noopener noreferrer">View source repository '+icon('arrow')+'</a></div></aside>';
}
function topHtml(){
 return '<header class="topbar"><div class="topbar-left"><button class="mobile-menu icon-button" data-action="menu" aria-label="Toggle menu">☰</button><div class="breadcrumb">MY WORKSPACE <span>/</span> <strong>'+({overview:'Overview',roadmap:'Set roadmap',atlas:'Concept atlas',questions:'Question bank',journal:'Study journal'}[view])+'</strong></div></div><div class="topbar-right"><div class="search-shell"><span class="search-glyph">⌕</span><input id="global-search" placeholder="Search questions, sets, concepts..." aria-label="Global search" value="'+esc(query)+'"><kbd>/</kbd></div><button class="soft-button" data-action="export">⇩ Export</button><button class="icon-button upload" data-action="import" title="Import saved progress">⇧</button></div></header>';
}
function layout(body){
 root.innerHTML=navHtml()+'<div class="app-body">'+topHtml()+'<main class="main">'+body+'</main></div><input type="file" id="import-input" accept=".json,application/json" hidden><div id="toast" role="status" aria-live="polite"></div>'+(drawer?drawerHtml():'');
 const search=document.getElementById('global-search');
 search.addEventListener('input',e=>{query=e.target.value;roadLimit=20;topicLimit=48;questionLimit=35;renderMain();});
 document.getElementById('import-input').addEventListener('change',importData);
}
function renderMain(){
 const el=document.querySelector('.main');if(!el)return;
 el.innerHTML=({overview:overviewHtml,roadmap:roadmapHtml,atlas:atlasHtml,questions:questionsHtml,journal:journalHtml}[view])();
 if(view==='journal')renderMatches();
}
function header(kicker,title,sub,action){
 return '<div class="section-heading"><div><div class="eyebrow">'+esc(kicker)+'</div><h1>'+esc(title)+'</h1><p>'+esc(sub)+'</p></div>'+(action||'')+'</div>';
}
function metric(label,value,description,color,svg){
 return '<div class="metric '+(color||'')+'"><div class="metric-top"><span>'+esc(label)+'</span><span class="metric-symbol">'+svg+'</span></div><div class="metric-value">'+esc(value)+'</div><div class="metric-desc">'+esc(description)+'</div></div>';
}
function overviewHtml(){
 const s=stats();
 let domain=groups.slice(1).map(g=>{
  const ts=topics.filter(t=>t.group===g),value=Math.round(ts.reduce((a,t)=>a+cStage(t.id)*25,0)/ts.length);
  return '<button class="domain-line" data-action="group" data-group="'+esc(g)+'"><span class="domain-icon">'+initials(g)+'</span><span class="domain-text"><strong>'+esc(g)+'</strong><small>'+ts.filter(t=>cStage(t.id)>0).length+' / '+ts.length+' started</small></span>'+meter(value,'green')+'<b>'+value+'%</b></button>';
 }).join('');
 const priority=topics.filter(t=>t.qids.length).sort((a,b)=>cStage(b.id)-cStage(a.id)||a.name.localeCompare(b.name)).slice(0,6);
 return header('YOUR LEARNING SPACE','Build knowledge. See the progress.','One question library, one place to collect what you have genuinely studied.','<button class="primary-button" data-action="view" data-view="journal"><span>✦</span> Add study knowledge <span>↗</span></button>')+
 '<div class="metric-grid">'+
 metric('KNOWLEDGE COVERAGE',s.cPercent+'%','Milestones you marked across '+topics.length+' concepts','accent','◷')+
 metric('QUESTIONS TOUCHED',s.qRead.toLocaleString(),'of '+s.qc.toLocaleString()+' unique questions','blue','☷')+
 metric('CONCEPTS STARTED',s.cStarted,'of '+topics.length+' concepts','violet','◈')+
 metric('INTERVIEW READY',s.cReady,'concepts at final milestone','orange','✧')+'</div>'+
 '<div class="dashboard-grid"><section class="panel focus-panel"><div class="panel-top"><div><div class="eyebrow">YOUR PROGRESS</div><h2>A clearer picture of what you know</h2></div><span class="tiny-mark">LIVE</span></div><div class="focus-content"><div class="donut" style="--p:'+s.cPercent+'"><div><b>'+s.cPercent+'%</b><small>concept coverage</small></div></div><div class="focus-detail"><div class="progress-row"><span><i class="bullet green-dot"></i> Interview ready</span><strong>'+s.cReady+' concepts</strong></div><div class="progress-row"><span><i class="bullet blue-dot"></i> In progress</span><strong>'+(s.cStarted-s.cReady)+' concepts</strong></div><div class="progress-row"><span><i class="bullet gray-dot"></i> Not started</span><strong>'+(topics.length-s.cStarted)+' concepts</strong></div><div class="fine-print">Coverage comes from your own study milestones, not from the source repository’s completed-set labels. Questions are tracked separately.</div></div></div></section>'+
 '<section class="panel"><div class="panel-top"><div><div class="eyebrow">KNOWLEDGE MAP</div><h2>Progress by subject</h2></div><button class="text-link" data-action="view" data-view="atlas">Explore atlas ↗</button></div><div class="domains">'+domain+'</div></section></div>'+
 '<div class="panel split-panel"><div class="split-copy"><div class="eyebrow">HOW TO START</div><h2>Your reading becomes visible progress.</h2><p>Paste a concept explanation, choose the detected topics, and save it. Your evidence is stored in the journal, and those concepts move to <strong>Notes captured · 50%</strong>. Practice and interview readiness remain your decisions.</p><button class="primary-button" data-action="view" data-view="journal">Open study journal ↗</button></div><div class="example-window"><div class="window-dots"><i></i><i></i><i></i><span>example / spring-boot</span></div><div class="example-quote">"Spring Boot uses auto-configuration to configure beans based on the classpath..."</div><div class="tag-row"><span class="tag recognized">✓ Spring Boot</span><span class="tag recognized">✓ Spring Core</span></div><div class="example-bottom"><span>Knowledge captured</span><strong>50% <span>▰▰▰▱</span></strong></div></div></div>'+
 '<section class="panel table-panel"><div class="panel-top"><div><div class="eyebrow">START WITH THE SOURCE</div><h2>Original roadmap order</h2></div><button class="text-link" data-action="view" data-view="roadmap">All 390 sets ↗</button></div><div class="set-preview">'+data.sets.slice(0,6).map(s=>setCompact(SET.get(s[0]))).join('')+'</div></section>';
}
function controls(subject){
 const opts=subject==='roadmap'?'<select data-select="phase" aria-label="Roadmap phase"><option value="all">All source phases</option><option value="existing">Existing roadmap · 1–85</option><option value="preview">Question previews · 86–378</option><option value="extension">Optional extensions · 379–390</option></select>':'<select data-select="group" aria-label="Subject group">'+groups.map(g=>'<option value="'+esc(g)+'" '+(groupFilter===g?'selected':'')+'>'+esc(g)+'</option>').join('')+'</select>';
 const state='<select data-select="stage" aria-label="Progress filter">'+[['all','All progress'],['new','Not started'],['started','In progress'],['ready','Interview ready']].map(a=>'<option value="'+a[0]+'" '+(stageFilter===a[0]?'selected':'')+'>'+a[1]+'</option>').join('')+'</select>';
 return '<div class="filters">'+opts+state+'<span class="filter-hint">Use search above to narrow results</span></div>';
}
function setCompact(s){
 const x=setStats(s);return '<button class="set-row" data-action="set" data-id="'+s.id+'"><span class="set-num">'+String(s.id).padStart(3,'0')+'</span><span class="set-summary"><strong>'+esc(s.title)+'</strong><small>'+x.total+' unique questions · '+esc(phase(s.id))+'</small></span><span class="set-meter">'+meter(x.percent,x.percent===100?'green':'sky')+'</span><span class="set-count">'+x.read+'/'+x.total+'</span><span class="set-chevron">↗</span></button>';
}
function setMatches(s){
 if(query && !(('set '+s.id+' '+s.title).toLowerCase().includes(query.toLowerCase())||s.ids.some(id=>QUESTION.get(id).text.toLowerCase().includes(query.toLowerCase()))))return false;
 const stat=setStats(s);if(stageFilter==='new'&&stat.read)return false;if(stageFilter==='started'&&(!stat.read||stat.percent===100))return false;if(stageFilter==='ready'&&stat.percent!==100)return false;
 return true;
}
function roadmapHtml(){
 let arr=[...SET.values()].filter(setMatches);
 const phaseFilter=document.querySelector('[data-select="phase"]')?.value||'all';
 if(phaseFilter!=='all')arr=arr.filter(s=>phaseFilter==='existing'?s.id<=85:phaseFilter==='preview'?s.id>85&&s.id<=378:s.id>=379);
 const display=arr.slice(0,roadLimit);
 return header('390 SETS · SOURCE ORDER','Your complete question roadmap','Every set stays in its original numbered order. Repeated questions are shown once in the global bank but stay linked to every source set.')+
 controls('roadmap')+'<div class="result-line">'+arr.length+' sets · '+data.meta.uniqueQuestions.toLocaleString()+' globally unique questions</div>'+
 '<section class="panel set-list">'+display.map(setCompact).join('')+(arr.length===0?'<div class="empty">No sets match this search or filter.</div>':'')+'</section>'+
 (arr.length>roadLimit?'<button class="load-button" data-action="more-road">Show next 20 sets ↓</button>':'');
}
function topicsFiltered(){
 return topics.filter(t=>(groupFilter==='All subjects'||t.group===groupFilter)&&(!query||(t.name+' '+t.group).toLowerCase().includes(query.toLowerCase())||t.qids.some(id=>QUESTION.get(id).text.toLowerCase().includes(query.toLowerCase())))&&(stageFilter==='all'||(stageFilter==='new'&&cStage(t.id)===0)||(stageFilter==='started'&&cStage(t.id)>0&&cStage(t.id)<4)||(stageFilter==='ready'&&cStage(t.id)===4)));
}
function topicCard(t){
 const stage=cStage(t.id),value=stage*25;
 return '<button class="topic-card" data-action="topic" data-id="'+esc(t.id)+'"><div class="topic-card-top"><span class="topic-icon">'+esc(initials(t.name))+'</span><span class="stage-pill '+stageColors[stage]+'">'+esc(stageNames[stage])+'</span></div><h3>'+esc(t.name)+'</h3><div class="topic-meta">'+esc(t.group)+' · '+t.qids.length+' related questions</div><div class="topic-bottom"><span>Coverage</span><strong>'+value+'%</strong></div>'+meter(value,stageColors[stage])+'</button>';
}
function atlasHtml(){
 const arr=topicsFiltered();
 return header(topics.length+' CURATED CONCEPTS','Concept atlas','Keywords and related question families extracted from the full roadmap. Open a concept to set its milestone and see all related questions.')+
 controls('atlas')+'<div class="result-line">'+arr.length+' concepts · '+topics.filter(t=>t.qids.length).length+' linked to question text</div>'+
 '<div class="topic-grid">'+arr.slice(0,topicLimit).map(topicCard).join('')+'</div>'+(arr.length? '':'<div class="empty">No matching concepts. Try another search.</div>')+
 (arr.length>topicLimit?'<button class="load-button" data-action="more-topics">Show more concepts ↓</button>':'');
}
function questionRow(q,short){
 const st=qStage(q.id);
 const refs=q.refs.map(r=>r[0]);const distinct=[...new Set(refs)];
 return '<div class="question-row"><div class="question-main"><span class="question-id">Q'+String(q.id).padStart(4,'0')+'</span><div class="question-copy"><p>'+esc(q.text)+'</p><div class="question-tags"><span>Set '+distinct.join(', ')+'</span><span>'+q.refs.length+' source '+(q.refs.length===1?'occurrence':'occurrences')+'</span>'+(q.refs.some(r=>r[4])?'<span class="pending">✨ Excel pending</span>':'')+'<a href="'+esc(linkFor(q))+'" target="_blank" rel="noopener noreferrer">Original ↗</a></div></div></div><div class="q-actions"><select data-select="question" data-id="'+q.id+'" aria-label="Study status for question '+q.id+'">'+qNames.map((n,i)=>'<option value="'+i+'" '+(st===i?'selected':'')+'>'+esc(n)+'</option>').join('')+'</select></div></div>';
}
function questionsHtml(){
 let arr=[...QUESTION.values()];
 if(query)arr=arr.filter(q=>q.text.toLowerCase().includes(query.toLowerCase())||q.refs.some(r=>('set '+r[0]+' '+SET.get(r[0]).title).toLowerCase().includes(query.toLowerCase())));
 if(questionFilter!=='all')arr=arr.filter(q=>questionFilter==='pending'?q.refs.some(r=>r[4]):questionFilter==='new'?qStage(q.id)===0:questionFilter==='read'?qStage(q.id)>0:questionFilter==='ready'?qStage(q.id)===3:q.refs.length>1);
 return header('DEDUPLICATED MASTER INDEX','Every question. Just once.','Unique wording is displayed once here. Each question retains its original set and line references; tracking one question updates all linked sets.')+
 '<div class="filters"><select data-select="question-filter" aria-label="Question filter">'+[['all','All questions'],['new','Not started'],['read','Read or practiced'],['ready','Interview ready'],['pending','Excel study additions'],['repeated','Appears in multiple sets']].map(n=>'<option value="'+n[0]+'" '+(questionFilter===n[0]?'selected':'')+'>'+n[1]+'</option>').join('')+'</select><span class="filter-hint">Shared questions keep one progress state</span></div>'+
 '<div class="result-line">'+arr.length.toLocaleString()+' questions found · '+data.meta.duplicateOccurrences.toLocaleString()+' repeated source appearances merged</div>'+
 '<section class="panel question-list">'+arr.slice(0,questionLimit).map(q=>questionRow(q)).join('')+(arr.length?'':'<div class="empty">No matching questions.</div>')+'</section>'+
 (arr.length>questionLimit?'<button class="load-button" data-action="more-questions">Show next 35 questions ↓</button>':'');
}
function renderMatches(){
 const el=document.getElementById('matches');if(!el)return;
 const suggestions=matchingTopics(draft);
 if(!tagsTouched)selectedTags=new Set(suggestions.slice(0,5).map(t=>t.id));
 const selected=topics.filter(t=>selectedTags.has(t.id));
 el.innerHTML='<div class="match-heading"><strong>Detected concepts <span>'+suggestions.length+' matches</span></strong><small>Select only concepts your note actually covers</small></div>'+
 (suggestions.length?'<div class="check-chips">'+suggestions.map(t=>'<label class="check-chip"><input type="checkbox" data-tag="'+esc(t.id)+'" '+(selectedTags.has(t.id)?'checked':'')+'><span>'+esc(t.name)+'</span></label>').join('')+'</div>':'<div class="match-empty">Paste at least one concept explanation to detect related topics, or select one manually below.</div>')+
 '<div class="manual-add"><select id="manual-topic"><option value="">+ Add any concept manually</option>'+topics.filter(t=>!selectedTags.has(t.id)).map(t=>'<option value="'+esc(t.id)+'">'+esc(t.name)+'</option>').join('')+'</select><span>'+selected.length+' selected</span></div>';
 const save=document.getElementById('save-note');if(save)save.disabled=!draft.trim()||!selectedTags.size;
}
function journalHtml(){
 const notes=[...progress.notes].reverse();
 return header('PERSONAL KNOWLEDGE BASE','Study journal','Paste what you learned. The tracker proposes matching concepts, and saving your note gives selected concepts a 50% “Notes captured” milestone unless they are already further along.')+
 '<div class="journal-grid"><section class="panel composer"><div class="panel-top"><div><div class="eyebrow">CAPTURE NEW KNOWLEDGE</div><h2>What did you read today?</h2></div><span class="tiny-mark">YOUR WORDS</span></div><label for="knowledge-text">Paste an explanation, code insight, or interview answer</label><textarea id="knowledge-text" rows="9" placeholder="Example: The JVM loads compiled .class bytecode using class loaders. The JIT compiler can turn frequently executed bytecode into native machine code...">'+esc(draft)+'</textarea><div id="matches"></div><div class="composer-bottom"><span>Progress remains on this device until exported.</span><button class="primary-button" id="save-note" data-action="save-note">Save knowledge & update concepts ↗</button></div></section>'+
 '<section class="panel journal-guide"><div class="eyebrow">PROGRESS MILESTONES</div><h2>What each bar means</h2><div class="milestone-list">'+stageNames.map((s,i)=>'<div class="milestone"><span class="milestone-dot '+stageColors[i]+'">'+i*25+'%</span><span><strong>'+esc(s)+'</strong><small>'+['No personal evidence recorded','You have started reading this concept','An explanation or notes have been captured','You have practiced or implemented it','You have checked your own interview readiness'][i]+'</small></span></div>').join('')+'</div><p class="guide-tip">Capturing a note does not certify every related question. Mark questions individually when you study them.</p></section></div>'+
 '<section class="panel note-history"><div class="panel-top"><div><div class="eyebrow">YOUR EVIDENCE</div><h2>Saved notes <span class="light-num">'+notes.length+'</span></h2></div></div>'+
 (notes.length?notes.map(n=>'<article class="note-entry"><div class="note-top"><span>'+new Date(n.date).toLocaleString()+'</span><button class="text-link danger" data-action="delete-note" data-id="'+esc(n.id)+'" aria-label="Delete note">Delete</button></div><p>'+esc(n.text)+'</p><div class="tag-row">'+(n.tags||[]).map(id=>'<button class="tag" data-action="topic" data-id="'+esc(id)+'">'+esc(topicById.get(id)?.name||id)+'</button>').join('')+'</div></article>').join(''):'<div class="empty">No notes yet. Paste a passage above to build your knowledge history.</div>')+'</section>';
}
function drawerHtml(){
 if(!drawer)return'';
 const isSet=drawer.type==='set',s=isSet?SET.get(drawer.id):null,t=!isSet?topicById.get(drawer.id):null;if(!s&&!t)return'';
 const ids=isSet?s.ids:t.qids;
 const stage=!isSet?cStage(t.id):null,st=isSet?setStats(s):null;
 const title=isSet?'Set '+s.id+' — '+s.title:t.name;
 return '<div class="drawer-shade" data-action="close"></div><aside class="drawer" role="dialog" aria-modal="true" aria-label="'+esc(title)+'"><div class="drawer-head"><div><div class="eyebrow">'+(isSet?'SOURCE ROADMAP · '+esc(phase(s.id)):esc(t.group)+' · CONCEPT')+'</div><h2>'+esc(title)+'</h2></div><button class="icon-button" data-action="close" aria-label="Close details">×</button></div>'+
 '<div class="drawer-scroll">'+(isSet?'<div class="drawer-status"><div><span>Questions you have touched</span><strong>'+st.read+' / '+st.total+'</strong></div>'+meter(st.percent,st.percent===100?'green':'sky')+'<small>All '+st.total+' questions appear in original source order. A repeated question shares status everywhere.</small></div>':
 '<div class="drawer-status"><div><span>Personal concept coverage</span><strong>'+stage*25+'%</strong></div>'+meter(stage*25,stageColors[stage])+'<label for="milestone-select">Your current milestone</label><select id="milestone-select" data-select="concept-stage" data-id="'+esc(t.id)+'">'+stageNames.map((nm,i)=>'<option value="'+i+'" '+(i===stage?'selected':'')+'>'+i*25+'% — '+esc(nm)+'</option>').join('')+'</select><small>'+t.qids.length+' questions linked to this keyword. Milestones are self-assessed and independent of question status.</small></div>')+
 '<div class="drawer-subtitle"><h3>Related questions</h3><span>'+ids.length+' unique</span></div><div class="drawer-questions">'+ids.map(id=>questionRow(QUESTION.get(id),true)).join('')+'</div>'+
 '</div></aside>';
}
function openDrawer(type,id){drawer={type,id};document.body.classList.add('drawer-open');const old=document.querySelector('.drawer-shade');if(old){old.remove();document.querySelector('.drawer')?.remove();}root.insertAdjacentHTML('beforeend',drawerHtml());}
function closeDrawer(){drawer=null;document.body.classList.remove('drawer-open');document.querySelector('.drawer-shade')?.remove();document.querySelector('.drawer')?.remove();}
function flash(message){let x=document.getElementById('toast');if(!x)return;x.textContent=message;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),3600);}
function setView(v){if(!['overview','roadmap','atlas','questions','journal'].includes(v))return;view=v;query='';document.querySelector('.sidebar')?.classList.remove('open');roadLimit=20;topicLimit=48;questionLimit=35;closeDrawer();render();window.scrollTo({top:0,behavior:'auto'});}
function rerenderDrawer(){if(!drawer)return;document.querySelector('.drawer')?.remove();root.insertAdjacentHTML('beforeend',drawerHtml());}
function saveNote(){
 const text=draft.trim();const tags=[...selectedTags].filter(id=>topicById.has(id));if(!text||!tags.length){flash('Paste knowledge and select at least one concept.');return;}
 const id=Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,7);
 progress.notes.push({id,text,tags,date:new Date().toISOString()});
 tags.forEach(k=>{progress.concepts[k]=Math.max(cStage(k),2);});
 persist();draft='';tagsTouched=false;selectedTags.clear();render();flash('Note saved · '+tags.length+' concepts updated to at least 50%');}
function exportData(){
 const content=JSON.stringify({app:'Developer-7 Tracker',exportedAt:new Date().toISOString(),sourceSha:data.meta.sourceSha,progress},null,2);
 const blob=new Blob([content],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='developer7-tracker-'+new Date().toISOString().slice(0,10)+'.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);flash('Backup downloaded');}
function importData(e){
 const file=e.target.files?.[0];if(!file)return;
 if(!confirm('Importing a backup will replace progress in this browser. Continue?'))return;
 const reader=new FileReader();reader.onload=()=>{try{
 const parsed=JSON.parse(reader.result),incoming=parsed.progress||parsed;
 if(incoming.version!==1||!incoming.concepts||!incoming.questions||!Array.isArray(incoming.notes))throw Error('Not a tracker backup');
 const normalized={...empty(),concepts:{},questions:{},notes:[]};
 for(const [id,v] of Object.entries(incoming.concepts))if(topicById.has(id)&&Number.isInteger(+v)&&+v>=0&&+v<=4)normalized.concepts[id]=+v;
 for(const [id,v] of Object.entries(incoming.questions))if(QUESTION.has(+id)&&Number.isInteger(+v)&&+v>=0&&+v<=3)normalized.questions[id]=+v;
 normalized.notes=incoming.notes.filter(n=>n&&typeof n.text==='string'&&Array.isArray(n.tags)&&typeof n.date==='string'&&typeof n.id==='string').slice(-10000);
 progress=normalized;persist();render();flash('Progress backup imported successfully');
 }catch(err){flash('Could not import: invalid tracker backup');}};
 reader.readAsText(file);
}
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-action]');if(!b)return;
 const action=b.dataset.action;
 if(action==='view'){setView(b.dataset.view);return;}
 if(action==='group'){groupFilter=b.dataset.group;setView('atlas');return;}
 if(action==='set'){openDrawer('set',Number(b.dataset.id));return;}
 if(action==='topic'){openDrawer('topic',b.dataset.id);return;}
 if(action==='close'){closeDrawer();return;}
 if(action==='menu'){document.querySelector('.sidebar')?.classList.toggle('open');return;}
 if(action==='more-road'){roadLimit+=20;renderMain();return;}
 if(action==='more-topics'){topicLimit+=48;renderMain();return;}
 if(action==='more-questions'){questionLimit+=35;renderMain();return;}
 if(action==='save-note'){saveNote();return;}
 if(action==='delete-note'){if(!confirm('Delete this study note? Concept milestones will stay unchanged.'))return;progress.notes=progress.notes.filter(n=>n.id!==b.dataset.id);persist();renderMain();flash('Note deleted');return;}
 if(action==='export'){exportData();return;}
 if(action==='import'){document.getElementById('import-input')?.click();return;}
});
document.addEventListener('change',e=>{
 const el=e.target;
 if(el.matches('[data-select="question"]')){progress.questions[el.dataset.id]=Number(el.value);persist();const scroll=document.querySelector('.drawer-scroll')?.scrollTop;renderMain();if(drawer){rerenderDrawer();document.querySelector('.drawer-scroll').scrollTop=scroll||0;}return;}
 if(el.matches('[data-select="concept-stage"]')){progress.concepts[el.dataset.id]=Number(el.value);persist();renderMain();rerenderDrawer();flash('Concept milestone updated');return;}
 if(el.matches('[data-select="group"]')){groupFilter=el.value;topicLimit=48;renderMain();return;}
 if(el.matches('[data-select="stage"]')){stageFilter=el.value;topicLimit=48;roadLimit=20;renderMain();return;}
 if(el.matches('[data-select="question-filter"]')){questionFilter=el.value;questionLimit=35;renderMain();return;}
 if(el.matches('[data-select="phase"]')){const choice=el.value;renderMain();const next=document.querySelector('[data-select="phase"]');if(next)next.value=choice;return;}
 if(el.matches('[data-tag]')){tagsTouched=true;if(el.checked)selectedTags.add(el.dataset.tag);else selectedTags.delete(el.dataset.tag);renderMatches();return;}
 if(el.id==='manual-topic'&&el.value){selectedTags.add(el.value);tagsTouched=true;renderMatches();return;}
});
document.addEventListener('input',e=>{if(e.target.id==='knowledge-text'){draft=e.target.value;tagsTouched=false;renderMatches();}});
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'&&drawer){closeDrawer();return;}
 if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){e.preventDefault();document.getElementById('global-search')?.focus();}
});
function render(){layout(({overview:overviewHtml,roadmap:roadmapHtml,atlas:atlasHtml,questions:questionsHtml,journal:journalHtml}[view])());if(view==='journal')renderMatches();}
render();
})();