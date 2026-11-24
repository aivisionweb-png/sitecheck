const screens=[...document.querySelectorAll(".screen")];const progress=document.querySelector("#progress");let current=0;
function show(index){screens.forEach((s,i)=>s.classList.toggle("active",i===index));current=index;progress.style.width=Math.max(20,((index+1)/5)*100)+"%";}
document.querySelectorAll("[data-next]").forEach(btn=>btn.addEventListener("click",()=>show(current+1)));
document.querySelector("#yesBtn").addEventListener("click",()=>{show(3);burst();});
document.querySelector("#maybeBtn").addEventListener("click",()=>show(4));
function burst(){for(let i=0;i<34;i++){const dot=document.createElement("i");dot.className="particle";dot.style.left="50%";dot.style.top="50%";dot.style.setProperty("--x",((Math.random()-.5)*90)+"vw");dot.style.setProperty("--y",((Math.random()-.5)*90)+"vh");dot.style.setProperty("--d",(.7+Math.random()*.9)+"s");document.body.appendChild(dot);setTimeout(()=>dot.remove(),1800);}}
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&current<2)show(current+1);});