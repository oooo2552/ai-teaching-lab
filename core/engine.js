export const modes={free:'Free choice',random:'Randomized switching',local:'Local communication',central:'Central load balancing'};
export const codeValid=s=>/^[A-Z0-9]{8}$/.test(s);
export const roomCode=()=>Array.from(crypto.getRandomValues(new Uint8Array(8)),x=>'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[x%32]).join('');
export function evaluate(votes,capacity){let a=Object.values(votes).filter(v=>v==='A').length,b=Object.values(votes).filter(v=>v==='B').length;return {a,b,success:(a<=capacity?a:0)+(b<=capacity?b:0)};}
export function csv(results){return 'Round,Mode,Capacity,Eligible,Submitted,A,B,Success\n'+Object.entries(results||{}).map(([r,x])=>[r,x.mode,x.capacity,x.eligible,x.a+x.b,x.a,x.b,x.success].join(',')).join('\n');}
export function download(name,content){const u=URL.createObjectURL(new Blob([content],{type:'text/csv'}));const a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);}
export const $=id=>document.getElementById(id);
export function message(e){$('message').textContent=e?.message||String(e);}
export function safe(fn){return async(...args)=>{try{$('message').textContent='';await fn(...args)}catch(e){message(e)}};}
