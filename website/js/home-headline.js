/* LO-CARB — Home: animated headline */
(function(){
  var h=document.querySelector('.mm2-h');if(!h)return;
  var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  var seg=('Segmenter' in Intl)?new Intl.Segmenter('th',{granularity:'word'}):null;
  function wrap(node){[].slice.call(node.childNodes).forEach(function(n){
    if(n.nodeType===3){var t=n.textContent;if(!t.trim())return;var f=document.createDocumentFragment();
      var parts=seg?Array.from(seg.segment(t),function(x){return x.segment;}):t.split(/(\s+)/);
      parts.forEach(function(p){if(!p)return;if(/^\s+$/.test(p)){f.appendChild(document.createTextNode(p));return;}var sp=document.createElement('span');sp.className='w';sp.textContent=p;f.appendChild(sp);});
      n.parentNode.replaceChild(f,n);}
    else if(n.nodeType===1&&!n.classList.contains('w'))wrap(n);});}
  wrap(h);
  var hi=[].slice.call(h.querySelectorAll('.mk,.ul'));
  function upd(){
    var langCls=document.documentElement.getAttribute('data-lang')==='th'?'.th':'.en';
    var ws=[].slice.call(h.querySelectorAll(langCls+' .w'));
    var r=h.getBoundingClientRect(),vh=innerHeight;
    var p=reduce?1:Math.max(0,Math.min(1,(vh*0.85-r.top)/(r.height+vh*0.25)));
    var n=Math.round(p*ws.length*1.15);
    ws.forEach(function(w,i){w.classList.toggle('on',i<n);});
    hi.forEach(function(m){var last=m.querySelectorAll('.w');last=last[last.length-1];m.classList.toggle('on',!!(last&&last.classList.contains('on')));});
  }
  addEventListener('scroll',function(){requestAnimationFrame(upd);},{passive:true});addEventListener('resize',upd);
  new MutationObserver(upd).observe(document.documentElement,{attributes:true,attributeFilter:['data-lang']});upd();
  var wd=document.querySelector('.wwd2');
  if(wd){if(reduce||!('IntersectionObserver' in window)){wd.classList.add('lit');}else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){wd.classList.add('lit');io.disconnect();}});},{threshold:.35});io.observe(wd);}}
})();
