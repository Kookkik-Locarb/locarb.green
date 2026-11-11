/* LO-CARB — reveal-on-scroll animation (inner pages) */
(function(){
  if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window))return;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.1,rootMargin:'0px 0px -6% 0px'});
  var G=[['.ph-hero','.crumbs2,.lab,h1,.ph-lead,.btns','an'],['body.ip main section:not(.ph-hero)','.head > div > *,.head > p,.prose-l > *,.prose > *,.checks li,.band-cta .g > *','an'],['body.ip main section','.cards > *','an'],['body.ip main section','.prose-l .pimg','an-img']];
  G.forEach(function(g){[].slice.call(document.querySelectorAll(g[0])).forEach(function(sec){[].slice.call(sec.querySelectorAll(g[1])).forEach(function(el,i){if(el.closest('.th,.en')&&el.offsetParent===null&&false)return;el.classList.remove('rv');el.classList.add(g[2]);el.style.setProperty('--d',Math.min(i,8)*0.08+'s');io.observe(el);});});});
})();
