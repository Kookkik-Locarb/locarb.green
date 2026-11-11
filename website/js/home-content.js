/* LO-CARB — Home: content data (preview / production flags) */
/* ---- Home content data. Set LOCARB_ENV to "production" to hide anything not yet confirmed by BD. ---- */
window.LOCARB_ENV = window.LOCARB_ENV || 'preview'; /* mockup figures show in preview; in production they hide unless LOCARB_SHOW_MOCKUP = true */
document.documentElement.dataset.env = window.LOCARB_ENV;
window.LOCARB_HOME = {
  metrics: [
    { id:'projects', value:'60+', status:'mockup', en:'Projects', th:'โปรเจค' }  /* MOCKUP — replace with BD figure */,
    { id:'tco2e', value:'120K', status:'mockup', en:'tonCO2e verified', th:'ช่วยเก็บข้อมูลกว่า tonCO2e' }  /* MOCKUP — replace with BD figure; EN/TH wording to confirm */,
    { id:'years', value:'5+', status:'confirmed', en:'Years of experience', th:'ปีแห่งประสบการณ์' }
  ],
  certificates: [
    { id:'iso', name:'ISO', img:null, status:'pending-asset' },
    { id:'issb', name:'ISSB Training Partner', img:null, status:'pending-asset' },
    { id:'cfo', name:'CFO', img:null, status:'pending-asset' },
    { id:'cbam', name:'BSI (CBAM)', img:null, status:'pending-asset' }
  ]
};
(function(){
  var D=window.LOCARB_HOME,prod=window.LOCARB_ENV==='production',esc=function(t){var d=document.createElement('div');d.textContent=t;return d.innerHTML;};
  var row=document.getElementById('kn-row');
  D.metrics.forEach(function(m){ if(prod&&m.status==='mockup'&&!window.LOCARB_SHOW_MOCKUP)return;
    var li=document.createElement('li');li.dataset.status=m.status;
    li.innerHTML='<b class="kn-v">'+(m.value?esc(m.value):'<span class="kn-ph">[x]</span>')+'</b><span class="kn-l"><span class="th">'+esc(m.th)+'</span><span class="en">'+esc(m.en)+'</span></span>';
    row.appendChild(li);});
  row.style.setProperty('--n',row.children.length);

})();
