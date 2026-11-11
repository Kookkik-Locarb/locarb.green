/* LO-CARB — staggered reveals: IFRS heading (Home) */
(function(){
  if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window))return;
  var els=[].slice.call(document.querySelectorAll('.if-st'));
  if(!els.length)return;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.25});
  els.forEach(function(el){el.classList.add('st-js');io.observe(el);});
})();
