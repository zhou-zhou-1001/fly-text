(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const O=[{id:"N1",type:"官方公告",title:"The Nobel Prize in Physics 2026",org:"瑞典皇家科学院",url:"https://www.kva.se/en/news/the-nobel-prize-in-physics-2026/"},{id:"I1",type:"探测器",title:"IceCube detector overview",org:"IceCube Collaboration",url:"https://icecube.wisc.edu/science/icecube/"},{id:"I2",type:"数据与尺度",title:"IceCube Quick Facts",org:"IceCube Collaboration",url:"https://icecube.wisc.edu/about-us/facts/"},{id:"I3",type:"2026 进展",title:"The IceCube Neutrino Observatory gets a major upgrade beneath the ice",org:"IceCube Collaboration",url:"https://icecube.wisc.edu/news/press-releases/2026/02/the-icecube-neutrino-observatory-gets-a-major-upgrade-beneath-the-ice/"},{id:"P1",type:"关键论文",title:"Evidence for High-Energy Extraterrestrial Neutrinos at the IceCube Detector",org:"Science 342 (2013)",url:"https://doi.org/10.1126/science.1242856"},{id:"P2",type:"关键论文",title:"Observation of High-Energy Astrophysical Neutrinos in Three Years of IceCube Data",org:"Physical Review Letters 113 (2014)",url:"https://doi.org/10.1103/PhysRevLett.113.101101"},{id:"P3",type:"多信使天文",title:"Multimessenger observations of a flaring blazar coincident with high-energy neutrino IceCube-170922A",org:"Science 361 (2018)",url:"https://doi.org/10.1126/science.aat1378"}],R=document.querySelector("#app");R.innerHTML=`
  <header class="site-header" aria-label="主导航">
    <a class="brand" href="#top" aria-label="回到顶部"><span class="brand-mark">ν</span><span>冰下信使</span></a>
    <nav id="site-nav" aria-label="章节导航">
      <a href="#story">为何获奖</a><a href="#detector">冰立方</a><a href="#lab">交互实验</a><a href="#timeline">时间线</a><a href="#details">专业层</a>
    </nav>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span><b class="sr-only">打开导航</b></button>
    <button class="mode-toggle" type="button" aria-pressed="false" aria-label="切换专业阅读模式"><span>大众</span><i></i><span>专业</span></button>
    <div class="read-progress" aria-hidden="true"><i></i></div>
  </header>

  <main id="main">
    <section class="hero" id="top">
      <canvas id="hero-canvas" aria-hidden="true"></canvas>
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="hero-copy reveal">
        <p class="eyebrow">THE NOBEL PRIZE IN PHYSICS 2026</p>
        <h1>在一立方公里的冰里<br><em>倾听宇宙</em></h1>
        <p class="hero-kicker">一项把南极冰层变成天文台的发现</p>
        <p class="hero-lead">Francis Halzen 让一立方公里南极冰成为望远镜，打开了以高能中微子观察宇宙的新窗口。</p>
        <div class="hero-actions"><a class="primary" href="#story">用 5 分钟看懂 <span>↓</span></a><button class="text-button jump-pro" type="button">直接进入专业层 ↗</button></div>
      </div>
      <aside class="award-card reveal" aria-label="获奖者信息">
        <div class="award-year">2026</div>
        <p>诺贝尔物理学奖</p>
        <h2>Francis Halzen</h2>
        <p class="affiliation">University of Wisconsin–Madison</p>
        <blockquote><span>官方授奖理由</span>“对 IceCube 中微子天文台以及发现天体物理起源的高能中微子作出决定性贡献”</blockquote>
        <a href="https://www.kva.se/en/news/the-nobel-prize-in-physics-2026/" target="_blank" rel="noreferrer">查看官方公告 <span>↗</span></a>
      </aside>
      <div class="hero-facts" aria-label="核心数字"><span><b>1 km³</b>南极深冰</span><span><b>5,160</b>个光学传感器</span><span><b>≈ 0</b>中微子电荷</span></div>
      <div class="scroll-cue" aria-hidden="true"><span></span>SCROLL TO DESCEND</div>
    </section>

    <section class="route section" aria-labelledby="route-title">
      <div><p class="section-index">选择你的阅读深度</p><h2 id="route-title">先理解发现，<br>再决定要不要下潜。</h2></div>
      <button class="route-card active" data-mode="public" type="button"><span>5 分钟</span><strong>大众路径</strong><p>用类比、尺度和一次信号的旅程理解：为什么要用一立方公里冰。</p><b>从故事开始 ↓</b></button>
      <button class="route-card" data-mode="pro" type="button"><span>含公式与证据</span><strong>专业路径</strong><p>直接查看有效面积、切伦科夫重建、显著性与多信使观测。</p><b>进入专业层 ↘</b></button>
    </section>

    <section class="statement section reveal" id="story">
      <p class="section-index">01 / 一句话看懂</p>
      <h2>它不是“看见”中微子。<br>它看见的是中微子<span>偶尔留下的一束蓝光</span>。</h2>
      <div class="story-grid">
        <p>宇宙里最狂暴的天体加速器会产生高能粒子。带电的宇宙线会被磁场拐弯，光子可能被物质吸收；中微子几乎不与物质作用，所以能从源头直线抵达地球。</p>
        <p>代价是它也极难被抓住。Halzen 的关键洞见，是把南极深处透明、稳定而黑暗的天然冰层，变成体积足够大的粒子探测器。</p>
      </div>
      <div class="messenger-compare" role="img" aria-label="光子、宇宙线与中微子作为宇宙信使的比较">
        <div><span class="messenger photon"></span><strong>光子 γ</strong><small>方向保真，但可能被尘埃与辐射场吸收</small></div>
        <div><span class="messenger cosmic"></span><strong>宇宙线 p</strong><small>能量极高，但带电，会被宇宙磁场拐弯</small></div>
        <div class="active"><span class="messenger neutrino"></span><strong>中微子 ν</strong><small>几乎直线穿行，把源头方向带到地球</small></div>
      </div>
      <p class="chart-takeaway"><span>结论</span>中微子的优势不是“更亮”，而是它几乎不被吸收、也不被磁场拐弯，方向更接近源头。</p>
    </section>

    <section class="detector-section" id="detector">
      <div class="section detector-head reveal">
        <div><p class="section-index">02 / 把冰变成望远镜</p><h2>IceCube 有多大？</h2></div>
        <p>不是一个“盒子”，而是埋在南极冰下 <strong>1,450–2,450 米</strong>、横跨约 <strong>1 km³</strong> 的三维传感器阵列。<sup><a href="#source-I1">I1</a></sup></p>
      </div>
      <div class="ice-stage reveal">
        <div class="depth-scale"><span>地表 0 m</span><span>−1,450 m</span><span>−2,450 m</span></div>
        <div class="surface-line"><span>Amundsen–Scott 南极站</span></div>
        <div class="ice-volume" id="ice-volume" aria-label="IceCube 探测器示意图，移动鼠标观察">
          <canvas id="ice-canvas"></canvas>
          <div class="ice-label label-strings"><b>86</b><span>条传感器串</span></div>
          <div class="ice-label label-doms"><b>5,160</b><span>个数字光学模块</span></div>
          <div class="ice-label label-volume"><b>1 km³</b><span>天然透明冰体</span></div>
        </div>
        <div class="ice-legend"><span><i></i>每个亮点代表一个 DOM</span><span>示意图非真实比例</span></div>
        <div class="eiffel" aria-hidden="true"><i></i><span>约 3 座埃菲尔铁塔<br>首尾相接的深度</span></div>
      </div>
    </section>

    <section class="mechanism section" id="mechanism">
      <p class="section-index">03 / 一次信号如何诞生</p>
      <div class="mechanism-title reveal"><h2>从幽灵粒子<br>到一张宇宙地图</h2><p>点击步骤，观察一次不可见的碰撞如何变成可分析的数据。</p></div>
      <div class="stepper reveal">
        <div class="step-controls" role="tablist" aria-label="探测流程">
          ${["穿越地球","偶然碰撞","蓝色光锥","重建方向"].map((e,s)=>`<button role="tab" aria-selected="${s===0}" data-step="${s}"><span>0${s+1}</span>${e}</button>`).join("")}
        </div>
        <div class="step-visual">
          <svg viewBox="0 0 700 460" role="img" aria-labelledby="mechanism-caption">
            <defs><radialGradient id="earthG"><stop offset="0" stop-color="#2d6174"/><stop offset="1" stop-color="#0b202c"/></radialGradient><filter id="glow"><feGaussianBlur stdDeviation="7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
            <circle class="earth" cx="350" cy="230" r="176" fill="url(#earthG)"/>
            <g class="detector-mini"></g>
            <path class="nu-path" d="M45,420 L645,72"/>
            <circle class="nu-dot" cx="45" cy="420" r="7"/>
            <g class="collision"><circle cx="400" cy="214" r="9"/><circle cx="400" cy="214" r="38"/></g>
            <path class="cone" d="M400 214 L575 140 L540 310 Z"/>
            <g class="reconstruction"><path d="M400 214 L140 365"/><path d="M400 214 L660 63"/></g>
          </svg>
          <p id="mechanism-caption" aria-live="polite"><strong>中微子穿越地球</strong><span>绝大多数中微子不留痕迹；地球对它们几乎透明。</span></p>
        </div>
      </div>
    </section>

    <section class="lab" id="lab">
      <div class="section lab-inner">
        <div class="lab-copy reveal"><p class="section-index">04 / 关键概念实验室</p><h2>为什么一定要<br>这么大？</h2><p>中微子越难发生相互作用，就越需要更大的目标体积。拖动“相互作用概率”，看看穿过探测器的 240 个粒子中有多少会留下信号。</p><div class="formula-lite"><span>期望事件数</span><strong>N ≈ Φ · σ · n · V · T</strong></div></div>
        <div class="probability-lab reveal">
          <div class="lab-stats"><span>模拟粒子 <b>240</b></span><span>留下信号 <b id="hits">3</b></span></div>
          <canvas id="particle-lab" width="720" height="430" aria-label="中微子与探测体积相互作用概率模拟"></canvas>
          <label for="probability">演示用相互作用概率 <output id="probability-value">1.2%</output></label>
          <input id="probability" type="range" min="0.4" max="8" value="1.2" step="0.2">
          <p class="lab-note">注意：这是帮助理解“低概率 × 大体积”的演示模型，不代表 IceCube 的真实事件率。</p>
        </div>
      </div>
    </section>

    <section class="timeline section" id="timeline">
      <p class="section-index">05 / 38 年，从设想到诺奖</p><h2 class="reveal">一条穿过冰层的时间线</h2>
      <div class="timeline-track reveal" tabindex="0" aria-label="可横向浏览的 IceCube 时间线">
        ${[["1988","Halzen 提出利用南极冰探测高能中微子的构想","概念"],["1993–2000","AMANDA 在冰下验证技术路线","原型"],["2004","IceCube 开始建设","建造"],["2010","第 86 条传感器串部署完成","完成"],["2013","报告首批高能宇宙中微子证据","发现"],["2018","中微子与耀变体 TXS 0506+056 建立关联","定位"],["2026","Upgrade 完成 5 条新传感器串部署","升级"],["2026","Francis Halzen 获诺贝尔物理学奖","诺奖"]].map((e,s)=>`<article class="timeline-event ${s===7?"gold":""}"><time>${e[0]}</time><i></i><div><small>${e[2]}</small><p>${e[1]}</p></div></article>`).join("")}
      </div>
    </section>

    <section class="details" id="details">
      <div class="section details-inner">
        <div class="details-head reveal"><p class="section-index">06 / 专业阅读层</p><h2>把比喻换成物理</h2><p>从事件率到统计显著性。可逐项展开；专业模式会展开完整证据链。</p><div class="mode-status" aria-live="polite"><i></i><span>当前：大众模式</span></div></div>
        <div class="detail-list">
          <details><summary><span>01</span><div><strong>相互作用与事件率</strong><small>弱相互作用截面为何决定体积</small></div><b>+</b></summary><div class="detail-body"><p>探测期望值可写为 <code>N = T ∫ dE dΩ Φν(E,Ω) A<sub>eff</sub>(E,Ω)</code>。有效面积 <code>A<sub>eff</sub></code> 同时吸收了中微子—核子截面、靶质量、触发与筛选效率，以及高能时地球吸收等效应。用几何体积直接乘一个固定概率只适合定性理解。</p><div class="equation">σ<sub>νN</sub>(E) ↑ &nbsp; with &nbsp; E &nbsp;&nbsp; · &nbsp;&nbsp; P<sub>int</sub> ≈ n σ L</div></div></details>
          <details><summary><span>02</span><div><strong>切伦科夫光与重建</strong><small>从光子到方向、能量与拓扑</small></div><b>+</b></summary><div class="detail-body"><p>中微子相互作用产生的相对论性带电次级粒子，在冰中的速度超过该介质中的光相速度时发出切伦科夫光。光到达各 DOM 的时间与电荷分布被似然方法拟合。长轨迹多与 ν<sub>μ</sub> 带电流事件相关，簇射型事例则常来自 ν<sub>e</sub>、ν<sub>τ</sub> 或中性流相互作用。</p><div class="equation">cos θ<sub>C</sub> = 1 / βn &nbsp;&nbsp; → &nbsp;&nbsp; θ<sub>C</sub> ≈ 41°（深冰中，β≈1）</div></div></details>
          <details><summary><span>03</span><div><strong>天体物理起源的证据</strong><small>能谱、方向与大气本底</small></div><b>+</b></summary><div class="detail-body"><p>核心问题不是“是否探测到中微子”，而是事件能量与分布能否由大气中微子及穿透 μ 子解释。2013 年 Science 论文报告 28 个 30–1200 TeV 级候选事件，相对已知本底达到 4.1σ；随后三年数据把天体物理成分证据推至 5.7σ。<sup><a href="#source-P1">P1</a></sup><sup><a href="#source-P2">P2</a></sup></p></div></details>
          <details><summary><span>04</span><div><strong>从弥散通量到点源</strong><small>2018 多信使观测的意义</small></div><b>+</b></summary><div class="detail-body"><p>2017 年 9 月 22 日的高能轨迹事件 IceCube-170922A 触发实时警报；多波段后随观测将其方向与耀变体 TXS 0506+056 的伽马射线耀发联系起来。历史数据中同方向还出现 2014–2015 年中微子过量，推动了中微子多信使天文学。<sup><a href="#source-P3">P3</a></sup></p></div></details>
        </div>
      </div>
    </section>

    <section class="sources section" id="sources">
      <p class="section-index">07 / 来源与边界</p><div class="sources-head"><h2>事实，逐条可追溯</h2><p>奖项事实以瑞典皇家科学院公告为准；探测器参数来自 IceCube 官方资料；科学结论链接至同行评议论文。页面中的三维图与动画为解释性绘制，不是实验原始数据。</p></div>
      <div class="source-list">${O.map(e=>`<a id="source-${e.id}" href="${e.url}" target="_blank" rel="noreferrer"><span>${e.id}</span><div><small>${e.type} · ${e.org}</small><strong>${e.title}</strong></div><b>↗</b></a>`).join("")}</div>
    </section>
  </main>
  <footer><div><span class="brand-mark">ν</span><strong>冰下信使</strong></div><p>2026 诺贝尔物理学奖独立科普可视化<br>更新于 2026-10-06 · 非诺贝尔基金会官方网站</p><a href="#top">回到冰面 ↑</a></footer>
`;const n=(e,s=document)=>s.querySelector(e),c=(e,s=document)=>[...s.querySelectorAll(e)],M=n(".mode-toggle");function L(e){document.body.classList.toggle("pro-mode",e),M.setAttribute("aria-pressed",String(e)),c(".route-card").forEach(s=>s.classList.toggle("active",s.dataset.mode===(e?"pro":"public"))),n(".mode-status span").textContent=e?"当前：专业模式 · 证据链已展开":"当前：大众模式",e&&c("#details details").forEach(s=>s.open=!0)}M.addEventListener("click",()=>L(!document.body.classList.contains("pro-mode")));n(".jump-pro").addEventListener("click",()=>{L(!0),n("#details").scrollIntoView({behavior:"smooth"})});c(".route-card").forEach(e=>e.addEventListener("click",()=>{const s=e.dataset.mode==="pro";L(s),n(s?"#details":"#story").scrollIntoView({behavior:"smooth"})}));const f=n(".nav-toggle"),k=n("#site-nav");f.addEventListener("click",()=>{const e=f.getAttribute("aria-expanded")==="true";f.setAttribute("aria-expanded",String(!e)),k.classList.toggle("open",!e)});c("#site-nav a").forEach(e=>e.addEventListener("click",()=>{f.setAttribute("aria-expanded","false"),k.classList.remove("open")}));const z=new IntersectionObserver(e=>e.forEach(s=>{s.isIntersecting&&s.target.classList.add("visible")}),{threshold:.12});c(".reveal").forEach(e=>z.observe(e));const p=n("#hero-canvas"),h=p.getContext("2d");let $=[];function A(){const e=devicePixelRatio||1;p.width=p.clientWidth*e,p.height=p.clientHeight*e,h.setTransform(e,0,0,e,0,0),$=Array.from({length:110},()=>({x:Math.random()*p.clientWidth,y:Math.random()*p.clientHeight,r:Math.random()*1.5+.2,a:Math.random()*.7+.2}))}function H(e=0){h.clearRect(0,0,p.clientWidth,p.clientHeight),$.forEach(s=>{h.globalAlpha=s.a*(.7+.3*Math.sin(e/900+s.x)),h.fillStyle="#bdeeff",h.beginPath(),h.arc(s.x,s.y,s.r,0,7),h.fill()}),h.globalAlpha=1,requestAnimationFrame(H)}A();H();addEventListener("resize",A);const b=n("#ice-canvas"),o=b.getContext("2d");let y={x:.65,y:.4};function T(){const e=devicePixelRatio||1,s=b.clientWidth,t=b.clientHeight;(b.width!==s*e||b.height!==t*e)&&(b.width=s*e,b.height=t*e,o.setTransform(e,0,0,e,0,0)),o.clearRect(0,0,s,t);const d=11,a=9;for(let i=0;i<a;i++)for(let u=0;u<d;u++){const l=i/a,v=s*(.2+u*.061+i%2*.025),m=t*(.09+l*.18),g=t*(.73+l*.12),C=(y.x-.5)*18;o.strokeStyle=`rgba(104,201,228,${.12+l*.09})`,o.lineWidth=1,o.beginPath(),o.moveTo(v+C*(1-l),m),o.lineTo(v,g),o.stroke();for(let x=0;x<12;x++){const I=m+(g-m)*(x/11),P=Math.abs(y.x-v/s)<.09&&Math.abs(y.y-I/t)<.16;o.fillStyle=P?"rgba(132,230,255,.95)":"rgba(110,199,222,.52)",o.beginPath(),o.arc(v+C*(1-l),I,P?2.8:1.5,0,7),o.fill()}}requestAnimationFrame(T)}b.parentElement.addEventListener("pointermove",e=>{const s=b.getBoundingClientRect();y={x:(e.clientX-s.left)/s.width,y:(e.clientY-s.top)/s.height}});T();const S=[["中微子穿越地球","绝大多数中微子不留痕迹；地球对它们几乎透明。"],["一次极罕见的碰撞","中微子与冰中原子核发生弱相互作用，产生高速带电粒子。"],["切伦科夫蓝光展开","次级粒子快于光在冰中的相速度，发出特征光锥。"],["时间差还原来路","5,160 个传感器记录光子的到达时间与亮度，算法重建方向和能量。"]];c(".step-controls button").forEach(e=>e.addEventListener("click",()=>{const s=+e.dataset.step;c(".step-controls button").forEach((t,d)=>t.setAttribute("aria-selected",String(d===s))),n(".step-visual").dataset.step=s,n("#mechanism-caption").innerHTML=`<strong>${S[s][0]}</strong><span>${S[s][1]}</span>`}));const E=n("#particle-lab"),r=E.getContext("2d"),w=n("#probability"),q=Array.from({length:240},(e,s)=>({x:s*47%239/239,y:(s*83+17)%241/241,seed:s*73%997/997}));function N(){const e=E.width,s=E.height,t=+w.value/100;r.clearRect(0,0,e,s);const d=r.createLinearGradient(0,0,0,s);d.addColorStop(0,"#0d3040"),d.addColorStop(1,"#061923"),r.fillStyle=d,r.fillRect(155,28,410,374),r.strokeStyle="rgba(120,205,226,.35)",r.strokeRect(155,28,410,374);let a=0;q.forEach((i,u)=>{const l=20+i.x*(e-40),v=18+i.y*(s-36),m=l>155&&l<565,g=m&&i.seed<t*2.3;g&&a++,r.strokeStyle=g?"rgba(237,196,107,.8)":"rgba(103,202,232,.3)",r.lineWidth=g?1.8:.7,r.beginPath(),r.moveTo(l-14,v+8),r.lineTo(l+14,v-8),r.stroke(),g&&(r.fillStyle="#f2cc78",r.beginPath(),r.arc(l,v,4.5,0,7),r.fill())}),n("#hits").textContent=a,n("#probability-value").textContent=w.value+"%"}w.addEventListener("input",N);N();c('a[href^="#"]').forEach(e=>e.addEventListener("click",s=>{const t=n(e.getAttribute("href"));t&&(s.preventDefault(),t.scrollIntoView({behavior:"smooth"}))}));addEventListener("scroll",()=>{n(".site-header").classList.toggle("scrolled",scrollY>40);const e=document.documentElement.scrollHeight-innerHeight;n(".read-progress i").style.transform=`scaleX(${e?Math.min(1,scrollY/e):0})`;let s="";c("main > section[id]").forEach(t=>{t.getBoundingClientRect().top<innerHeight*.38&&(s=t.id)}),c("#site-nav a").forEach(t=>t.classList.toggle("active",t.getAttribute("href")===`#${s}`))},{passive:!0});matchMedia("(prefers-reduced-motion: reduce)").matches&&c(".reveal").forEach(e=>e.classList.add("visible"));
