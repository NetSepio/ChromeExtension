import{w as y,a as c,p as l}from"./store.82e7b560.js";import{P as u}from"./public.fa20e813.js";import{U as d,o as p}from"./chunk-NJRNZEHX.c6c7e7f5.js";import"./index.browser.2780c866.js";import{H as b}from"./index.4b5c89bb.js";import{W as w}from"./wallet.e0044ed6.js";const P=async()=>{let t="";return y.subscribe(o=>t=o),(await fetch(`${u}/flowid?walletAddress=${t}`)).json()},S=async(t,r,o,e,n)=>{let i=new Headers;i.append("Content-Type","application/json");let a=JSON.stringify({flowId:t,signature:r,pubKey:o,chainName:e}),s={method:"POST",headers:i,body:a,redirect:"follow"};return(await fetch(`${u}/authenticate?chain=${n}`,s)).json()},T=async t=>{let r="",o="";c.subscribe(n=>o=n),l.subscribe(n=>r=n);let e=new TextEncoder().encode(`APTOS
message: ${t==null?void 0:t.eula}
nonce: ${t==null?void 0:t.flowId}`);if(r!=="")try{const n=new b(r).toUint8Array(),i=new d(n);return{signature:p.fromPrivateKey({privateKey:i}).sign(e).toString(),pubKey:o}}catch(n){console.log("error:",n)}};async function E(t){let r="",o="";if(c.subscribe(e=>o=e),l.subscribe(e=>r=e),r!=="")try{const e=new w(r),n=`ETH
message: ${t==null?void 0:t.eula}
nonce: ${t==null?void 0:t.flowId}`;return{signature:await e.signMessage(n),pubKey:o}}catch(e){console.log("Error signing the message:",e)}else console.log("Private key is not available")}export{P as a,T as b,S as c,E as s};
