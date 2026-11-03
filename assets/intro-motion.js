/* Progressive command writing. The complete code remains available to assistive technology. */
(()=>{
 const root=document.querySelector('#elessar-constellation');
 if(!root)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const entries=[...root.querySelectorAll('[data-intro-slide]')].map(slide=>{
  const code=slide.querySelector('pre code'),text=code.textContent;
  const reserve=document.createElement('span');reserve.textContent=text;reserve.style.opacity='0';
  const ink=document.createElement('span');ink.setAttribute('aria-hidden','true');
  Object.assign(ink.style,{position:'absolute',inset:'0',whiteSpace:'pre'});
  code.style.position='relative';code.style.display='block';code.replaceChildren(reserve,ink);
  return{slide,ink,text,count:0,finished:false};
 });
 let frame=0,last=0,elapsed=0,current=null;
 function full(entry){entry.ink.textContent=entry.text;entry.ink.classList.remove('cs-type-cursor');}
 function update(){
  cancelAnimationFrame(frame);frame=0;last=0;
  const allowed=!reduced.matches&&root.dataset.motion!=='off';
  if(!allowed){entries.forEach(full);return;}
  entries.forEach(e=>{e.ink.textContent=e.finished?e.text:e.text.slice(0,e.count)});
  current=entries.find(e=>e.slide.getAttribute('aria-hidden')!=='true');
  if(!current||current.finished||document.hidden||root.dataset.readerOpen==='true'||Number(root.dataset.story)>.65)return;
  elapsed=current.count*24;frame=requestAnimationFrame(tick);
 }
 function tick(now){
  if(!current)return;
  if(last)elapsed+=Math.min(now-last,80);last=now;
  current.count=Math.min(current.text.length,Math.floor(elapsed/24));
  current.ink.textContent=current.text.slice(0,current.count);current.ink.classList.add('cs-type-cursor');
  if(current.count<current.text.length)frame=requestAnimationFrame(tick);
  else{current.finished=true;full(current);frame=0;}
 }
 new MutationObserver(update).observe(root,{subtree:true,attributes:true,attributeFilter:['aria-hidden','data-motion','data-reader-open']});
 root.addEventListener('constellation:progress',()=>{if(Number(root.dataset.story)>.65){cancelAnimationFrame(frame);frame=0;}});
 document.addEventListener('visibilitychange',update);reduced.addEventListener('change',update);update();
})();
