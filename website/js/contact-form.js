/* LO-CARB — contact form: topic chips, validation, success state */
(function(){
  var f=document.getElementById('ctf2');if(!f)return;
  var th=function(){return document.documentElement.dataset.lang==='th';};
  var topic='',sols=[];
  var tb=[].slice.call(f.querySelectorAll('#cx-topic button')),sb=[].slice.call(f.querySelectorAll('#cx-sols button'));
  var solsBox=document.getElementById('cx-sols'),lk=document.getElementById('cx-lk-w'),route=document.getElementById('cx-route'),err=document.getElementById('cx-err');
  function upd(){
    tb.forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.v===topic));});
    sb.forEach(function(b){b.setAttribute('aria-pressed',String(sols.indexOf(b.dataset.v)>-1));});
    solsBox.hidden=topic!=='Solutions';lk.hidden=topic!=='Careers';
    var to=topic==='Careers'?'hr@locarb.green':'contact@locarb.green';
    route.textContent=topic?(th()?'ข้อความจะส่งถึง ':'Your message goes to ')+to:'';
  }
  tb.forEach(function(b){b.addEventListener('click',function(){topic=b.dataset.v;err.hidden=true;upd();});});
  sb.forEach(function(b){b.addEventListener('click',function(){var v=b.dataset.v,i=sols.indexOf(v);if(i>-1)sols.splice(i,1);else sols.push(v);upd();});});
  f.addEventListener('submit',function(e){e.preventDefault();
    var d=new FormData(f),miss=!topic?(th()?'กรุณาเลือกหัวข้อที่ต้องการติดต่อ':'Please choose what you are contacting us about.'):
      (!d.get('fn')||!d.get('ln')||!d.get('em'))?(th()?'กรุณากรอกช่องที่มีเครื่องหมาย *':'Please fill in the fields marked *.'):
      !document.getElementById('cx-ag').checked?(th()?'กรุณายอมรับนโยบายความเป็นส่วนตัวเพื่อส่งข้อความ':'Please accept the privacy policy to send your message.'):'';
    if(miss){err.textContent=miss;err.hidden=false;return;}
    var to=topic==='Careers'?'hr@locarb.green':'contact@locarb.green';
    var body=['Topic: '+topic+(sols.length?' ('+sols.join(', ')+')':''),'Name: '+d.get('fn')+' '+d.get('ln'),'Email: '+d.get('em'),'Phone: '+(d.get('ph')||''),'Company: '+(d.get('co')||''),'Job title: '+(d.get('jt')||'')].concat(topic==='Careers'?['LinkedIn: '+(d.get('lk')||'')]:[]).concat(['',d.get('ms')||'']).join('\n');
    try{window.open('mailto:'+to+'?subject='+encodeURIComponent('LO-CARB · '+topic)+'&body='+encodeURIComponent(body),'_self');}catch(x){}
    f.hidden=true;var dn=document.getElementById('cx-done');dn.hidden=false;dn.focus();});
  document.querySelector('.cx-again').addEventListener('click',function(){document.getElementById('cx-done').hidden=true;f.hidden=false;f.reset();topic='';sols=[];upd();});
  var ms=document.getElementById('cx-ms');
  function ph(){ms.placeholder=th()?'โปรดระบุรายละเอียดหรือความต้องการของท่าน เพื่อให้ทีมงานติดต่อกลับได้ตรงประเด็น':'How can we help?';upd();}
  new MutationObserver(ph).observe(document.documentElement,{attributes:true,attributeFilter:['data-lang']});
  ph();
})();
