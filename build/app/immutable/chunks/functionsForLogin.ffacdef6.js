import{w as d,b as u,p}from"./store.158563d8.js";import{P as c}from"./public.6087a87e.js";import{A as l}from"./index.074eaf46.js";const b=async()=>{let t="";return d.subscribe(a=>t=a),(await fetch(`${c}/flowid?walletAddress=${t}`)).json()},A=async(t,e,a)=>{let r=new Headers;r.append("Content-Type","application/json");let o=JSON.stringify({flowId:t,signature:e,pubKey:a}),n={method:"POST",headers:r,body:o,redirect:"follow"};return await(await fetch(`${c}/authenticate`,n)).json()},h=async t=>{let e="",a="";u.subscribe(n=>a=n),p.subscribe(n=>e=n);function r(n){return new Uint8Array(n.match(/.{1,2}/g).map(s=>parseInt(s,16)))}let o=new TextEncoder().encode(`APTOS
message: ${t==null?void 0:t.eula}
nonce: ${t==null?void 0:t.flowId}`);if(e!==""){const n=r(e);return{signature:new l(n).signBuffer(o).hex(),pubKey:a}}};export{b as a,A as b,h as s};
