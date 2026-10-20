document.querySelectorAll(".xlink").forEach(a=>{a.href=X_LINK;a.target="_blank";a.rel="noopener"});
document.querySelectorAll(".ca-text").forEach(e=>e.textContent=CONTRACT_ADDRESS);
const toast=document.querySelector(".toast");
document.querySelectorAll(".copy").forEach(b=>b.addEventListener("click",async()=>{
  try{await navigator.clipboard.writeText(CONTRACT_ADDRESS)}catch(e){const t=document.createElement("textarea");t.value=CONTRACT_ADDRESS;document.body.append(t);t.select();document.execCommand("copy");t.remove()}
  const o=b.textContent;b.textContent="Copied";toast.classList.add("show");setTimeout(()=>{b.textContent=o;toast.classList.remove("show")},1600);
}));
const nav=document.querySelector("nav");addEventListener("scroll",()=>nav.classList.toggle("solid",scrollY>40),{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".reveal").forEach(e=>io.observe(e));
