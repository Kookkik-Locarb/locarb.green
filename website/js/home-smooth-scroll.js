/* LO-CARB — Home: eased scroll for in-page links */
(function(){
  var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  /* eased scroll for in-page links (banner arrow, "explore" buttons) */
  function ease(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}
  document.addEventListener('click',function(e){
    var a=e.target.closest('a[href^="#"]');if(!a)return;var id=a.getAttribute('href').slice(1);if(!id)return;
    var el=document.getElementById(id);if(!el)return;e.preventDefault();
    var hd=document.getElementById('hd'),off=hd?hd.offsetHeight:0,start=scrollY,end=el.getBoundingClientRect().top+scrollY-off,dur=reduce?0:1100,t0=null;
    if(!dur){scrollTo(0,end);return;}
    function step(ts){if(!t0)t0=ts;var p=Math.min(1,(ts-t0)/dur);scrollTo(0,start+(end-start)*ease(p));if(p<1)requestAnimationFrame(step);}
    requestAnimationFrame(step);
    if(history.replaceState)history.replaceState(null,'','#'+id);
  });
  if(reduce||!('IntersectionObserver' in window))return;
  /* which elements animate, per section */
  var groups=[
    ['.mm','.mm2-side > *,.mm .btns','an'],
    ['.wwd','.mm2-side > *,.wwd-t','an'],
    ['.st12','.st11-ph','an-img'],['.st12','.p11-k,.st-lead,.st-p,.st11-pl li,.st11-c .btn','an'],
    ['.imp','.imp-top > *','an'],['.imp','#kn-row li','an-sc'],
    ['.cli8','.cli8-top > *','an'],['.cli8','.cm-row','an-l'],
    ['.ce8','.ce8-g > div > *','an'],['.ce8','.ce8-l li','an'],
    ['.if11','.if12-1','an-sc'],['.if11','.if-h,.if-sub,.if10-l li,.if11 .btns','an'],
    ['.sol9','.sol9-top > *,.sol9-idx li','an'],['.sol9','.so','an'],
    ['.in11','.p11-head > *','an'],['.in11','.in11-g li','an'],
    ['.ct11','.ct11-l > *','an'],['.ct11','.ct11-r','an-sc'],
    ['.tg2','.tg2-t > span,.tg2-side','an'],
    ['.ft2','.ft2-g > *','an']
  ];
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
  groups.forEach(function(g){
    [].slice.call(document.querySelectorAll(g[0])).forEach(function(sec){
      var els=[].slice.call(sec.querySelectorAll(g[1]));
      els.forEach(function(el,i){ if(el.classList.contains('rv'))el.classList.remove('rv');
        el.classList.add(g[2]);el.style.setProperty('--d',Math.min(i,8)*0.09+'s');io.observe(el);});
    });
  });
})();
