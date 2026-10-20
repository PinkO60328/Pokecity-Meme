document.querySelectorAll(".xlink").forEach(a=>{a.href=X_LINK;a.target="_blank";a.rel="noopener"});
document.querySelectorAll(".ca-text").forEach(e=>e.textContent=CONTRACT_ADDRESS);
const toast=document.querySelector(".toast");
document.querySelectorAll(".copy").forEach(b=>b.addEventListener("click",async()=>{
  try{await navigator.clipboard.writeText(CONTRACT_ADDRESS)}catch(e){const t=document.createElement("textarea");t.value=CONTRACT_ADDRESS;document.body.append(t);t.select();document.execCommand("copy");t.remove()}
  const o=b.textContent;b.textContent="Copied";toast.classList.add("show");setTimeout(()=>{b.textContent=o;toast.classList.remove("show")},1600)}));
const nav=document.querySelector("nav");
const paras=[...document.querySelectorAll("[data-parallax]")];
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
function onScroll(){nav.classList.toggle("solid",scrollY>40);if(reduce)return;const vh=innerHeight;
  paras.forEach(el=>{const r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;const p=(r.top+r.height/2-vh/2)/vh;el.style.transform=`translate3d(0,${(p*-8).toFixed(2)}%,0) scale(1.18)`});}
addEventListener("scroll",onScroll,{passive:true});onScroll();
const dlg=document.querySelector("dialog"),di=dlg.querySelector("img");
document.querySelectorAll(".gallery button").forEach(b=>b.onclick=()=>{di.src=b.dataset.full;di.alt=b.querySelector("img").alt;dlg.showModal()});dlg.onclick=()=>dlg.close();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>io.observe(e));
