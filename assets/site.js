function toggleMenu(){var m=document.getElementById('mm');if(m)m.classList.toggle('open')}
function sendMsg(e){e.preventDefault();
 var g=function(i){var el=document.getElementById(i);return el?el.value:''};
 var n=g('f-name'),m=g('f-email'),t=g('f-topic'),b=g('f-msg');
 location.href='mailto:jit@jitpuru.com?subject='+encodeURIComponent('Rishita Books enquiry \u2014 '+t)
  +'&body='+encodeURIComponent('Name: '+n+'\nEmail: '+m+'\nReaching out as: '+t+'\n\n'+b);
 return false}
(function(){
 var nav=document.getElementById('nav');
 if(nav&&!nav.classList.contains('solid')){
  window.addEventListener('scroll',function(){nav.classList.toggle('solid',window.scrollY>40)})}
 var els=document.querySelectorAll('.reveal');
 if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
   if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})},
   {threshold:.08,rootMargin:'0px 0px -40px 0px'});
  [].forEach.call(els,function(el){io.observe(el)});
 } else {[].forEach.call(els,function(el){el.classList.add('visible')})}
 var y=document.getElementById('yr'); if(y) y.textContent=new Date().getFullYear();
})();
