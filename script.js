const screens=[...document.querySelectorAll(".screen")];const bar=document.querySelector("#bar");const toast=document.querySelector("#toast");let current=0;const total=screens.length;let toastTimer;
function show(n){n=Math.max(0,Math.min(n,total-1));screens.forEach((s,i)=>s.classList.toggle("active",i===n));current=n;bar.style.width=Math.max(12,((n+1)/total)*100)+"%";if(n<5)notify("Kaustubh ne kahi didhu che — aa click karyu che 👀")}
function notify(message){toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),1900)}
document.querySelectorAll("[data-next]").forEach(b=>b.onclick=()=>{notify("Kaustubh ne kahi didhu che ke te aa click karyu che 👀");show(current+1)});
document.querySelector("#yesBtn").onclick=()=>{notify("Okayyy… Kaustubh ne aa pan kahi devu pade 😭");show(6);confetti()};
document.querySelector("#maybeBtn").onclick=()=>{notify("Kaustubh ne kahi devu ke tame 'lemme think' karyu 😭");show(7)};
document.querySelector("#backBtn").onclick=()=>show(5);
function confetti(){const colors=["#2f9d91","#d6ad5b","#ffb7c9","#173f42"];for(let i=0;i<55;i++){const x=document.createElement("i");x.className="confetti";x.style.setProperty("--x",((Math.random()-.5)*95)+"vw");x.style.setProperty("--y",((Math.random()-.5)*82)+"vh");x.style.setProperty("--d",(.8+Math.random()*1.2)+"s");x.style.setProperty("--c",colors[i%colors.length]);document.body.appendChild(x);setTimeout(()=>x.remove(),2200)}}
