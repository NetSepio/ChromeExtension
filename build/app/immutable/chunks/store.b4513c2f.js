import{w as t}from"./index.f81ac18e.js";const r=!0,a=r,y=t(localStorage.getItem("balance")),h=t(localStorage.getItem("testnet")||"true"),w=t({}),L=t(!1),n=t(localStorage.getItem("walletAddress")||"none");n.subscribe(e=>localStorage.setItem("walletAddress",e));const c=t(sessionStorage.getItem("privateKey")||""),i=t(sessionStorage.getItem("publicKey")||"");c.subscribe(e=>sessionStorage.setItem("privateKey",e));i.subscribe(e=>sessionStorage.setItem("publicKey",e));async function g(e){try{return a&&sessionStorage.setItem("mnemonicPhrase",e),!0}catch{return!1}}async function l(){try{return sessionStorage.getItem("mnemonicPhrase")}catch{return}}async function m(){try{return sessionStorage.removeItem("mnemonicPhrase"),!0}catch{return!1}}const P={get:l,set:g,remove:m},b=t(localStorage.getItem("jwtToken")),K=e=>{localStorage.setItem("jwtToken",`${e}`),b.set(e)},s=t(Number(localStorage.getItem("onboardingStepsLeft"))||0);s.subscribe(e=>localStorage.setItem("onboardingStepsLeft",e.toString()));const S=e=>{localStorage.setItem("onboardingStepsLeft",`${e}`),s.set(e)},u=()=>{s.update(e=>(localStorage.setItem("onboardingStepsLeft",`${e-1}`),e-1))},d=()=>{s.update(e=>(localStorage.setItem("onboardingStepsLeft",(e+1).toString()),e+1))},k={subscribe:s.subscribe,set:S,decrease:u,increase:d},I=t(localStorage.getItem("iv")||"");I.subscribe(e=>localStorage.setItem("iv",e));const o=t(localStorage.getItem("avatar")||"");o.subscribe(e=>localStorage.setItem("avatar",e));const p=e=>{localStorage.setItem("avatar",`${e}`),o.set(e)},j={set:p,subscribe:o.subscribe};export{i as a,j as b,y as c,L as d,b as j,P as m,k as o,c as p,K as s,h as t,w as u,n as w};
