const products=[
{name:"SPG-LiFe LIFE 1200 NS",cat:"Power Backup",img:"assets/spg-life.png",desc:"Advanced lithium-ion inverter solution for modern home backup."},
{name:"Autobat Ener-Red Battery",cat:"Power Backup",img:"assets/autobat.png",desc:"Reliable battery option for inverter and backup applications."},
{name:"Amaron Current Tall Tubular",cat:"Power Backup",img:"assets/amaron.png",desc:"Tall tubular battery designed for dependable backup performance."},
{name:"Exide InvaMaster Battery",cat:"Power Backup",img:"assets/exide.png",desc:"Long-life tubular battery for inverter and backup use."},
{name:"UTL Inverters",cat:"Power Backup",img:"assets/spg-life.png",desc:"Inverter solutions across different power requirements."},
{name:"UTL Solar",cat:"Solar",img:"assets/solar.svg",desc:"Solar energy products and system solutions."},
{name:"Jet Aqua Water Purifier",cat:"Water",img:"assets/jet-aqua.png",desc:"Water purification solution for cleaner everyday drinking water."},
{name:"CP PLUS CCTV Camera",cat:"Security",img:"assets/cp-plus.png",desc:"Smart CCTV and security solutions for homes and businesses."},
{name:"LED TVs & Electronics",cat:"Electronics",img:"assets/solar.svg",desc:"Selected electronics and entertainment products."},
{name:"Stabilizers",cat:"Electronics",img:"assets/spg-life.png",desc:"Voltage protection solutions for compatible appliances."},
{name:"Tubular Batteries",cat:"Power Backup",img:"assets/amaron.png",desc:"Long-runtime battery choices for backup systems."},
{name:"Car Batteries",cat:"Power Backup",img:"assets/exide.png",desc:"Battery options for cars and automotive applications."}
];
const grid=document.getElementById("grid"), filters=document.getElementById("filters"), search=document.getElementById("search"), sel=document.getElementById("productSelect");
let active="All";
["All",...new Set(products.map(p=>p.cat))].forEach(c=>{let b=document.createElement("button");b.className="filter"+(c==="All"?" active":"");b.textContent=c;b.onclick=()=>{active=c;document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");render()};filters.appendChild(b)});
products.forEach(p=>{let o=document.createElement("option");o.value=p.name;o.textContent=p.name;sel.appendChild(o)});
function render(){let q=search.value.toLowerCase();let list=products.filter(p=>(active==="All"||p.cat===active)&&(p.name+" "+p.cat+" "+p.desc).toLowerCase().includes(q));grid.innerHTML=list.map(p=>`<article class="product"><div class="visual"><img class="product-photo" src="${p.img}" alt="${p.name}"></div><div class="product-info"><div class="tag">${p.cat.toUpperCase()}</div><h3>${p.name}</h3><p>${p.desc}</p><div class="product-bottom"><b>Price on enquiry</b><a class="enquire" target="_blank" href="https://wa.me/919325579069?text=${encodeURIComponent("Hello Nanak Enterprises,\nI am interested in "+p.name+".\nPlease share available models, specifications, price, warranty and delivery details.")}">WhatsApp ↗</a></div></div></article>`).join("")}
search.oninput=render;render();
document.querySelectorAll("[data-filter-link]").forEach(a=>a.onclick=()=>{active=a.dataset.filterLink;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x.textContent===active));render()});
document.getElementById("form").onsubmit=e=>{e.preventDefault();let n=document.getElementById("name"),ph=document.getElementById("phone"),loc=document.getElementById("location"),msgBox=document.getElementById("message");let msg=`Hello Nanak Enterprises,\n\nI am interested in ${sel.value}.\n\nName: ${n.value}\nPhone: ${ph.value}\nLocation: ${loc.value}\nRequirement: ${msgBox.value}\n\nPlease share available models, specifications, price, warranty and delivery details.`;window.open("https://wa.me/919325579069?text="+encodeURIComponent(msg),"_blank")};
document.getElementById("menuBtn").onclick=()=>document.getElementById("nav").classList.toggle("open");
document.getElementById("year").textContent=new Date().getFullYear();
