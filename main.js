(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("osszes").addEventListener("click",(async()=>{let e=await fetch("/users.json"),t=(await e.json()).users;t=t.sort(((e,t)=>{if(e.lastName<t.lastName)return-1})),async function(e){let t=document.getElementById("emberek");t.textContent="";for(let n of e){let e=document.createElement("li");e.textContent=n.lastName+", "+n.firstName,t.appendChild(e)}}(t)})),document.getElementById("elerhetoseg").addEventListener("click",(async()=>{let e=await fetch("/users.json");!async function(e){let t=document.getElementById("tabla");t.innerHTML="";for(let n of e){let e=document.createElement("tr"),s=document.createElement("td"),a=document.createElement("td"),l=document.createElement("td");s.textContent=n.username,a.textContent=n.email,l.textContent=n.phone,t.appendChild(e),t.appendChild(s),t.appendChild(a),t.appendChild(l)}}((await e.json()).users)})),document.getElementById("sulyosGomb").addEventListener("click",(async()=>{let e=await fetch("/users.json");!function(e){let t=document.getElementById("suly").value,n=0,s=e.filter((function(e){return e.height==t}));for(let e of s)e.height==t&&(n+=e.weight);document.getElementById("sulyossz").textContent="Súlyösszeg: "+n}((await e.json()).users)}))}))})();