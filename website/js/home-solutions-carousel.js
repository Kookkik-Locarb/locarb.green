/* LO-CARB — Home: solutions carousel */(function(){var t=document.getElementById('sol9-track');if(!t)return;var cards=[].slice.call(t.children),idx=[].slice.call(document.querySelectorAll('.sol9-idx button')),bar=document.getElementById('sol9-prog');
 function go(i){i=Math.max(0,Math.min(cards.length-1,i));t.scrollTo({left:cards[i].offsetLeft-t.offsetLeft-parseFloat(getComputedStyle(t).paddingLeft),behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});}
 function cur(){var x=t.scrollLeft,best=0,d=1e9;cards.forEach(function(c,i){var dd=Math.abs(c.offsetLeft-t.offsetLeft-parseFloat(getComputedStyle(t).paddingLeft)-x);if(dd<d){d=dd;best=i;}});return best;}
 function upd(){var i=cur(),max=t.scrollWidth-t.clientWidth;idx.forEach(function(b,j){b.setAttribute('aria-current',j===i?'true':'false');});bar.style.width=(max>0?Math.max(20,(t.scrollLeft/max)*100):100)+'%';}
 document.querySelectorAll('.sol9-b').forEach(function(b){b.addEventListener('click',function(){go(cur()+ +b.dataset.d);});});
 idx.forEach(function(b,i){b.addEventListener('click',function(){go(i);});});
 t.addEventListener('scroll',function(){requestAnimationFrame(upd);},{passive:true});upd();})();
