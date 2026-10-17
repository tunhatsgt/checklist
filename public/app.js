const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let me,ITEMS;
async function api(u,o={}){const f=o.body instanceof FormData;const r=await fetch(u,{method:o.method,headers:o.body&&!f?{'Content-Type':'application/json'}:{},body:f?o.body:o.body&&JSON.stringify(o.body)});const j=await r.json().catch(()=>({}));if(!r.ok)throw new Error(j.error||r.status);return j}
async function boot(){try{me=await api('/api/me')}catch{location.href='/';return new Promise(()=>{})}ITEMS=me.items;
 $('#bar').innerHTML=`<a class="brand" href="/dashboard.html">Visa Schengen</a><span class="sp"></span><span class="who">${esc(me.name)} · ${me.role}</span><button onclick="out()">Thoát</button>`}
async function out(){await api('/api/logout',{method:'POST'});location.href='/'}
function toast(t){const d=document.createElement('div');d.className='toast';d.textContent=t;document.body.append(d);setTimeout(()=>d.remove(),2600)}
const own=i=>me.role==='admin'||me.role===(i<=16?'sale':'op'),upl=i=>own(i)||me.role==='visa',stt=()=>['admin','visa'].includes(me.role),edG=()=>['admin','sale'].includes(me.role);
