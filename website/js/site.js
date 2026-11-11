/* LO-CARB — language / text-size switchers, header, menus, search (every page) */

(function(){
  var root=document.documentElement,reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* language */
  function setLang(l){root.dataset.lang=l;root.lang=l;
    document.querySelectorAll('.nu-opt[data-set]').forEach(function(b){b.setAttribute('aria-checked',String(b.dataset.set===l));});
    var lc=document.querySelector('.lang-code');if(lc)lc.textContent=l.toUpperCase();
    try{localStorage.setItem('locarb-lang',l);}catch(e){}
    }
  document.querySelectorAll('.nu-opt[data-set]').forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.set);closeAll();});});
  /* dropdown menus (hover on desktop, tap on touch / keyboard) */
  var dds=[].slice.call(document.querySelectorAll('[data-dd]')),nus=[].slice.call(document.querySelectorAll('.nu'));
  function closeAll(except){dds.concat(nus).forEach(function(d){if(d!==except){d.classList.remove('open');var t=d.querySelector('[aria-expanded]');if(t)t.setAttribute('aria-expanded','false');}});}
  function toggle(d,force){var o=force!==undefined?force:!d.classList.contains('open');closeAll(d);d.classList.toggle('open',o);var t=d.querySelector('[aria-expanded]');if(t)t.setAttribute('aria-expanded',String(o));}
  var fine=window.matchMedia('(hover:hover) and (min-width:1101px)');
  dds.forEach(function(d){var t=d.querySelector('.nl'),tm;
    d.addEventListener('mouseenter',function(){if(fine.matches){clearTimeout(tm);toggle(d,true);}});
    d.addEventListener('mouseleave',function(){if(fine.matches){tm=setTimeout(function(){toggle(d,false);},140);}});
    t.addEventListener('click',function(e){if(!fine.matches||!d.classList.contains('open')){e.preventDefault();toggle(d);}});
    t.addEventListener('keydown',function(e){if(e.key==='ArrowDown'){e.preventDefault();toggle(d,true);var f=d.querySelector('.mi');if(f)f.focus();}});
  });
  nus.forEach(function(n){n.querySelector('.nu-btn').addEventListener('click',function(e){e.stopPropagation();toggle(n);});});
  document.addEventListener('click',function(e){if(!e.target.closest('[data-dd],.nu'))closeAll();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeAll();closeSearch();}});
  /* text size */
  function setScale(v){document.body.style.setProperty('--zoom',v);document.querySelectorAll('.nu-opt[data-scale]').forEach(function(b){b.setAttribute('aria-checked',String(b.dataset.scale===String(v)));});try{localStorage.setItem('locarb-scale',String(v));}catch(e){}}
  document.querySelectorAll('.nu-opt[data-scale]').forEach(function(b){b.addEventListener('click',function(){setScale(b.dataset.scale);closeAll();});});
  var sc='1';try{sc=localStorage.getItem('locarb-scale')||'1';}catch(e){}
  if(['0.92','1','1.1'].indexOf(sc)<0)sc='1';setScale(sc);
  /* search */
  var srch=document.getElementById('srch'),sin=document.getElementById('srch-in'),sres=document.getElementById('srch-r'),lastFocus=null;
  function pages(){var l=root.dataset.lang,out=[];document.querySelectorAll('#nav .mi').forEach(function(a){var t=a.querySelector('.mt .'+l)||a.querySelector('.mt'),d=a.querySelector('.md .'+l)||a.querySelector('.md');out.push({h:a.getAttribute('href'),t:t.textContent,d:d.textContent});});
    out.push({h:'Contact.html',t:l==='th'?'ติดต่อเรา':'Contact',d:'contact@locarb.green · 096 996 6249'});return out;}
  function render(){var q=sin.value.trim().toLowerCase();sres.innerHTML='';pages().filter(function(p){return !q||(p.t+' '+p.d).toLowerCase().indexOf(q)>-1;}).forEach(function(p){var li=document.createElement('li'),a=document.createElement('a'),b=document.createElement('b'),sp=document.createElement('span');a.href=p.h;b.textContent=p.t;sp.textContent=p.d;a.appendChild(b);a.appendChild(sp);li.appendChild(a);sres.appendChild(li);});}
  function openSearch(){lastFocus=document.activeElement;srch.hidden=false;sin.placeholder=root.dataset.lang==='th'?'ค้นหาบริการ หน้า หรือบทความ':'Search services, pages or articles';sin.value='';render();sin.focus();}
  function closeSearch(){if(srch.hidden)return;srch.hidden=true;if(lastFocus)lastFocus.focus();}
  document.getElementById('srch-btn').addEventListener('click',openSearch);
  srch.querySelector('.srch-x').addEventListener('click',closeSearch);
  srch.addEventListener('click',function(e){if(e.target===srch)closeSearch();});
  sin.addEventListener('input',render);
  /* header: transparent over the film, solid after */

  var hd=document.getElementById('hd');
  function hdState(){hd.classList.toggle('solid',window.scrollY>8);}
  window.addEventListener('scroll',hdState,{passive:true});hdState();
  var mb=document.querySelector('.mbtn');
  mb.addEventListener('click',function(){var o=hd.classList.toggle('open');mb.setAttribute('aria-expanded',String(o));});
  document.querySelectorAll('.nav a:not(.nl[aria-haspopup])').forEach(function(a){a.addEventListener('click',function(){hd.classList.remove('open');mb.setAttribute('aria-expanded','false');});});
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
    document.querySelectorAll('.rv:not(.in)').forEach(function(el){io.observe(el);});
    if(!reduce){var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);
      var b=e.target,to=+b.dataset.count,suf=b.dataset.suf||'',t0=null,em=suf?'<em>'+suf+'</em>':'';
      function step(ts){if(!t0)t0=ts;var p=Math.min(1,(ts-t0)/1100);b.innerHTML=Math.round(to*(1-Math.pow(1-p,3)))+em;if(p<1)requestAnimationFrame(step);}
      requestAnimationFrame(step);});},{threshold:.6});
      document.querySelectorAll('[data-count]').forEach(function(b){co.observe(b);});}
  }else{document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in');});}
  var v=document.querySelector('.xh-card video');
  function startFilm(){if(!v||reduce||v.dataset.on)return;v.dataset.on='1';v.src=v.dataset.src;v.play&&v.play().catch(function(){});}
  if(document.readyState==='complete')setTimeout(startFilm,300);else window.addEventListener('load',function(){setTimeout(startFilm,300);});
  /* contact form: compose an email to the team (no data leaves the page otherwise) */
  var f=document.getElementById('ctf');
  if(f)f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f),l=root.dataset.lang==='th';
    var body=(l?'ชื่อ: ':'Name: ')+(d.get('n')||'')+'\n'+(l?'บริษัท: ':'Company: ')+(d.get('c')||'')+'\n'+(l?'อีเมล: ':'Email: ')+(d.get('e')||'')+'\n'+(l?'เรื่อง: ':'Topic: ')+(d.get('t')||'')+'\n\n'+(d.get('m')||'');
    location.href='mailto:contact@locarb.green?subject='+encodeURIComponent('LO-CARB · '+(d.get('t')||'Enquiry'))+'&body='+encodeURIComponent(body);});

  if('IntersectionObserver' in window){var mko=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');mko.unobserve(e.target);}});},{threshold:.15});document.querySelectorAll('.mk').forEach(function(el){mko.observe(el);});}else{document.querySelectorAll('.mk').forEach(function(el){el.classList.add('in');});}
  var pxl=[].slice.call(document.querySelectorAll('.pxl'));
  if(!reduce&&pxl.length){var tk=false;function pf(){tk=false;var vh=innerHeight;pxl.forEach(function(el){var r=el.parentNode.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;el.style.transform='translate3d(0,'+((r.top+r.height/2-vh/2)*-parseFloat(el.dataset.px)).toFixed(1)+'px,0)';});}
    window.addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(pf);}},{passive:true});pf();}
  var saved=null;try{saved=localStorage.getItem('locarb-lang');}catch(e){}
  setLang(saved==='en'?'en':'th');
})();
