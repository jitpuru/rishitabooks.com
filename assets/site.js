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

(function(){
 var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 function carousel(root,prefix,interval){
  var track=root.querySelector('.'+prefix+'-track'),
      dots=Array.prototype.slice.call(root.querySelectorAll('.'+prefix+'-dot')),
      n=dots.length, step=100/n, i=0, timer=null;
  if(!track||n<2) return;
  function go(k){
   i=(k+n)%n;
   track.style.transform='translateX(-'+(i*step)+'%)';
   dots.forEach(function(d,j){d.classList.toggle('is-on',j===i)});
  }
  function stop(){ if(timer){clearInterval(timer); timer=null;} }
  function start(){ if(reduce) return; stop(); timer=setInterval(function(){go(i+1)},interval); }
  dots.forEach(function(d,k){d.addEventListener('click',function(){go(k); start();})});
  root.addEventListener('mouseenter',stop);
  root.addEventListener('mouseleave',start);
  root.addEventListener('focusin',stop);
  root.addEventListener('focusout',start);
  start();
 }
 var s=document.querySelector('[data-shelf]'); if(s) carousel(s,'shelf',5000);
 var f=document.querySelector('[data-feat]'); if(f) carousel(f,'feat',6500);
})();
