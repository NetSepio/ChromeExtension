import{S as K,i as Q,s as X,k as v,a as U,e as oe,l as w,m as $,h as p,c as A,n as _,b as E,H as B,J as fe,I as De,o as ee,q as P,r as T,G as m,K as ke,u as te,L as ne,y as G,z as F,A as Y,g as S,d as C,B as J,M as Pe,p as Te,f as Re,v as Ue}from"../chunks/index.a58bc7cb.js";import{g as Ae}from"../chunks/navigation.f5314373.js";import{H as We}from"../chunks/Header.485ce948.js";import{L as xe}from"../chunks/Loader.cc59cc9d.js";import{w as Le}from"../chunks/index.6342914c.js";import{c as Ne}from"../chunks/secondAuth.40e728da.js";import{P as Ee}from"../chunks/public.fa20e813.js";import{j as Ie,u as Ve,g as je}from"../chunks/store.82e7b560.js";const Be=!0,bt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Be},Symbol.toStringTag,{value:"Module"}));function ge(o,e,r){const t=o.slice();return t[7]=e[r].id,t}function be(o,e,r){const t=o.slice();return t[7]=e[r].id,t[10]=e[r].label,t}function ve(o){let e,r=o[10]+"",t,s,a,n,c;function d(){return o[5](o[7])}return{c(){e=v("button"),t=P(r),s=U(),this.h()},l(l){e=w(l,"BUTTON",{class:!0});var u=$(e);t=T(u,r),s=A(u),u.forEach(p),this.h()},h(){_(e,"class",a=`text-[10px] m-1 font-semibold h-full whitespace-nowrap tab ${o[2]===o[7]?"active":""}`)},m(l,u){E(l,e,u),m(e,t),m(e,s),n||(c=ke(e,"click",d),n=!0)},p(l,u){o=l,u&1&&r!==(r=o[10]+"")&&te(t,r),u&5&&a!==(a=`text-[10px] m-1 font-semibold h-full whitespace-nowrap tab ${o[2]===o[7]?"active":""}`)&&_(e,"class",a)},d(l){l&&p(e),n=!1,c()}}}function Me(o){let e,r;return{c(){e=v("span"),r=P("User-Driven Insights"),this.h()},l(t){e=w(t,"SPAN",{class:!0});var s=$(e);r=T(s,"User-Driven Insights"),s.forEach(p),this.h()},h(){_(e,"class","whitespace-nowrap semiBold text-lg")},m(t,s){E(t,e,s),m(e,r)},p:B,d(t){t&&p(e)}}}function Se(o){let e,r,t,s;return{c(){e=v("span"),r=P("You're Currently Browsing "),t=v("span"),s=P(o[1]),this.h()},l(a){e=w(a,"SPAN",{class:!0});var n=$(e);r=T(n,"You're Currently Browsing "),n.forEach(p),t=w(a,"SPAN",{});var c=$(t);s=T(c,o[1]),c.forEach(p),this.h()},h(){_(e,"class","whitespace-nowrap semiBold text-lg")},m(a,n){E(a,e,n),m(e,r),E(a,t,n),m(t,s)},p(a,n){n&2&&te(s,a[1])},d(a){a&&p(e),a&&p(t)}}}function we(o){let e,r;return{c(){e=v("div"),this.h()},l(t){e=w(t,"DIV",{class:!0,id:!0});var s=$(e);s.forEach(p),this.h()},h(){_(e,"class","tab-content h-max"),_(e,"id",r=`tab-content-${o[7]}`),ne(e,"show",o[2]===o[7])},m(t,s){E(t,e,s)},p(t,s){s&1&&r!==(r=`tab-content-${t[7]}`)&&_(e,"id",r),s&5&&ne(e,"show",t[2]===t[7])},d(t){t&&p(e)}}}function Ce(o){let e,r,t,s,a,n=o[0],c=[];for(let i=0;i<n.length;i+=1)c[i]=ve(be(o,n,i));function d(i,y){return i[2]==="tab2"?Se:Me}let l=d(o),u=l(o),g=o[0],f=[];for(let i=0;i<g.length;i+=1)f[i]=we(ge(o,g,i));return{c(){e=v("div");for(let i=0;i<c.length;i+=1)c[i].c();r=U(),t=v("h2"),u.c(),s=U();for(let i=0;i<f.length;i+=1)f[i].c();a=oe(),this.h()},l(i){e=w(i,"DIV",{class:!0});var y=$(e);for(let b=0;b<c.length;b+=1)c[b].l(y);y.forEach(p),r=A(i),t=w(i,"H2",{class:!0});var h=$(t);u.l(h),h.forEach(p),s=A(i);for(let b=0;b<f.length;b+=1)f[b].l(i);a=oe(),this.h()},h(){_(e,"class","flex border border-[#263238] dark:border-[#11D9C5] rounded-[3px] mx-auto w-[80%] mt-[10%] h-auto"),_(t,"class","pb-2 mx-auto w-[80%] text-center mt-[5%] mb-[3%] text-black flex flex-col items-start dark:text-white text-lg semiBold capitalize leading-[30px]")},m(i,y){E(i,e,y);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(e,null);E(i,r,y),E(i,t,y),u.m(t,null),E(i,s,y);for(let h=0;h<f.length;h+=1)f[h]&&f[h].m(i,y);E(i,a,y)},p(i,[y]){if(y&21){n=i[0];let h;for(h=0;h<n.length;h+=1){const b=be(i,n,h);c[h]?c[h].p(b,y):(c[h]=ve(b),c[h].c(),c[h].m(e,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=n.length}if(l===(l=d(i))&&u?u.p(i,y):(u.d(1),u=l(i),u&&(u.c(),u.m(t,null))),y&5){g=i[0];let h;for(h=0;h<g.length;h+=1){const b=ge(i,g,h);f[h]?f[h].p(b,y):(f[h]=we(b),f[h].c(),f[h].m(a.parentNode,a))}for(;h<f.length;h+=1)f[h].d(1);f.length=g.length}},i:B,o:B,d(i){i&&p(e),fe(c,i),i&&p(r),i&&p(t),u.d(),i&&p(s),fe(f,i),i&&p(a)}}}function He(o,e,r){let t,{tabs:s=[]}=e,{header:a=""}=e,n=Le(s.length>0?s[0].id:null);De(o,n,l=>r(2,t=l));function c(l){n.set(l)}ee(()=>{s.forEach(({id:l,component:u,props:g})=>{const f=document.getElementById(`tab-content-${l}`);f&&new u({target:f,props:g||{}})})});const d=l=>c(l);return o.$$set=l=>{"tabs"in l&&r(0,s=l.tabs),"header"in l&&r(1,a=l.header)},[s,a,t,n,c,d]}class ze extends K{constructor(e){super(),Q(this,e,He,Ce,X,{tabs:0,header:1})}}function Oe(o){let e,r,t,s,a;return{c(){e=v("div"),r=v("button"),t=P("read reviews"),this.h()},l(n){e=w(n,"DIV",{class:!0});var c=$(e);r=w(c,"BUTTON",{class:!0});var d=$(r);t=T(d,"read reviews"),d.forEach(p),c.forEach(p),this.h()},h(){_(r,"class","secondary-button"),_(e,"class","grid flex-grow")},m(n,c){E(n,e,c),m(e,r),m(r,t),s||(a=ke(r,"click",o[0]),s=!0)},p:B,i:B,o:B,d(n){n&&p(e),s=!1,a()}}}function qe(o,e,r){let{urlWithoutProtocol:t}=e;function s(){window.open(`https://app.netsepio.com/reviews/${t}`,"_blank")}return o.$$set=a=>{"urlWithoutProtocol"in a&&r(1,t=a.urlWithoutProtocol)},[s,t]}class Ge extends K{constructor(e){super(),Q(this,e,qe,Oe,X,{urlWithoutProtocol:1})}}function $e(o,e,r){const t=o.slice();return t[10]=e[r],t}function ye(o){let e,r,t,s=o[3](o[10].description,15)+"",a,n,c,d,l,u,g,f,i,y,h;return{c(){e=v("div"),r=v("p"),t=P('"'),a=P(s),n=P('"'),c=U(),d=v("button"),l=v("img"),g=U(),f=v("a"),i=P("Review as NFT"),h=U(),this.h()},l(b){e=w(b,"DIV",{style:!0,class:!0});var k=$(e);r=w(k,"P",{class:!0});var W=$(r);t=T(W,'"'),a=T(W,s),n=T(W,'"'),W.forEach(p),c=A(k),d=w(k,"BUTTON",{class:!0});var V=$(d);l=w(V,"IMG",{width:!0,height:!0,src:!0,alt:!0,class:!0}),g=A(V),f=w(V,"A",{target:!0,href:!0,class:!0});var L=$(f);i=T(L,"Review as NFT"),L.forEach(p),V.forEach(p),h=A(k),k.forEach(p),this.h()},h(){var b;_(r,"class","text-[11px]"),_(l,"width",12),_(l,"height",12),Pe(l.src,u="/img.svg")||_(l,"src",u),_(l,"alt","img"),_(l,"class",""),_(f,"target","_blank"),_(f,"href",y=`https://explorer.aptoslabs.com/txn/${(b=o[10])==null?void 0:b.transactionHash}/?network=mainnet`),_(f,"class","text-[8px] whitespace-nowrap text-white"),_(d,"class","flex items-center mt-2 bg-secondary dark:bg-action dark:bg-opacity-60 hover:scale-105 cursor-pointer duration-200 active:scale-100 w-[84px] h-[19px] gap-1 pt-[1px] px-[5px] pb-[2px] rounded-[5px]"),Te(e,"box-shadow","0px 2px 4px 0px rgba(38, 50, 56, 0.2)"),_(e,"class","reviews border border-secondary dark:border-action dark:shadow-action dark:border-opacity-10 border-opacity-10 h-[85px]")},m(b,k){E(b,e,k),m(e,r),m(r,t),m(r,a),m(r,n),m(e,c),m(e,d),m(d,l),m(d,g),m(d,f),m(f,i),m(e,h)},p(b,k){var W;k&1&&s!==(s=b[3](b[10].description,15)+"")&&te(a,s),k&1&&y!==(y=`https://explorer.aptoslabs.com/txn/${(W=b[10])==null?void 0:W.transactionHash}/?network=mainnet`)&&_(f,"href",y)},d(b){b&&p(e)}}}function Fe(o){let e,r,t,s,a,n,c,d=Math.round(o[1]*10)+"",l,u,g,f,i,y,h,b,k,W,V,L,re,j,M,le,H,z,ie,O,q=o[0].slice(0,2),I=[];for(let x=0;x<q.length;x+=1)I[x]=ye($e(o,q,x));return M=new Ge({props:{urlWithoutProtocol:o[2]}}),{c(){e=v("div"),r=v("div"),t=v("div"),s=v("h3"),a=P("Ratings"),n=U(),c=v("span"),l=P(d),u=P("% safe"),g=U(),f=v("div"),i=v("span"),h=U(),b=v("div"),k=v("h3"),W=P("Reviews"),V=U(),L=v("div");for(let x=0;x<I.length;x+=1)I[x].c();re=U(),j=v("div"),G(M.$$.fragment),le=U(),H=v("a"),z=v("button"),ie=P("Write Reviews"),this.h()},l(x){e=w(x,"DIV",{class:!0});var R=$(e);r=w(R,"DIV",{class:!0});var N=$(r);t=w(N,"DIV",{class:!0});var D=$(t);s=w(D,"H3",{class:!0});var Z=$(s);a=T(Z,"Ratings"),Z.forEach(p),n=A(D),c=w(D,"SPAN",{class:!0});var ce=$(c);l=T(ce,d),u=T(ce,"% safe"),ce.forEach(p),D.forEach(p),g=A(N),f=w(N,"DIV",{class:!0});var he=$(f);i=w(he,"SPAN",{style:!0,class:!0}),$(i).forEach(p),he.forEach(p),N.forEach(p),h=A(R),b=w(R,"DIV",{class:!0});var se=$(b);k=w(se,"H3",{class:!0});var de=$(k);W=T(de,"Reviews"),de.forEach(p),V=A(se),L=w(se,"DIV",{class:!0});var pe=$(L);for(let ue=0;ue<I.length;ue+=1)I[ue].l(pe);pe.forEach(p),se.forEach(p),re=A(R),j=w(R,"DIV",{class:!0});var ae=$(j);F(M.$$.fragment,ae),le=A(ae),H=w(ae,"A",{href:!0});var me=$(H);z=w(me,"BUTTON",{class:!0});var _e=$(z);ie=T(_e,"Write Reviews"),_e.forEach(p),me.forEach(p),ae.forEach(p),R.forEach(p),this.h()},h(){_(s,"class","text-sm dark:font-medium font-semibold"),_(c,"class","text-[10px]"),_(t,"class","flex justify-between items-center mt-2"),_(i,"style",y=`width: ${Math.round(o[1]*10)}%`),_(i,"class","h-[8px] block my-auto shad rounded-[5px] bg-[#263238] dark:bg-[#11D9C5]"),_(f,"class","mt-4 h-2 w-full rounded-lg bg-white/5 shadow-sm shadow-appGray dark:shadow-none dark:bg-[#2F3A65] shadow-light"),_(r,"class","mb-[10%]"),_(k,"class","text-sm mb-3 dark:font-medium font-semibold"),_(L,"class","flex flex-col gap-3"),_(b,"class",""),_(z,"class","primary-button"),_(H,"href","/submit-review/create-review"),_(j,"class","grid grid-cols-2 mt-[10%] gap-x-4"),_(e,"class","w-[75%] mx-auto mt-[6%]")},m(x,R){E(x,e,R),m(e,r),m(r,t),m(t,s),m(s,a),m(t,n),m(t,c),m(c,l),m(c,u),m(r,g),m(r,f),m(f,i),m(e,h),m(e,b),m(b,k),m(k,W),m(b,V),m(b,L);for(let N=0;N<I.length;N+=1)I[N]&&I[N].m(L,null);m(e,re),m(e,j),Y(M,j,null),m(j,le),m(j,H),m(H,z),m(z,ie),O=!0},p(x,[R]){if((!O||R&2)&&d!==(d=Math.round(x[1]*10)+"")&&te(l,d),(!O||R&2&&y!==(y=`width: ${Math.round(x[1]*10)}%`))&&_(i,"style",y),R&9){q=x[0].slice(0,2);let D;for(D=0;D<q.length;D+=1){const Z=$e(x,q,D);I[D]?I[D].p(Z,R):(I[D]=ye(Z),I[D].c(),I[D].m(L,null))}for(;D<I.length;D+=1)I[D].d(1);I.length=q.length}const N={};R&4&&(N.urlWithoutProtocol=x[2]),M.$set(N)},i(x){O||(S(M.$$.fragment,x),O=!0)},o(x){C(M.$$.fragment,x),O=!1},d(x){x&&p(e),fe(I,x),J(M)}}}function Ye(o,e,r){let t,s,a=[],n=0;const c=async()=>{var g;try{const[f]=await chrome.tabs.query({active:!0,currentWindow:!0});r(4,s=(g=f.url)==null?void 0:g.toLocaleLowerCase())}catch(f){console.log(f)}finally{}},d=g=>g==null?void 0:g.replace("ipfs://",""),l=async()=>{var f,i,y;let g="";Ie.subscribe(h=>g=h);try{const h={method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${g}`}},k=await(await fetch(`${Ee}/getreviews?page=1&domain=${t}`,h)).json();r(1,n=((f=k==null?void 0:k.payload)==null?void 0:f.averageRating)??0),((i=k==null?void 0:k.payload)==null?void 0:i.reviews)&&((y=k==null?void 0:k.payload)==null||y.reviews.forEach(async V=>{const L=`https://nftstorage.link/ipfs/${d(V.metaDataUri)}`,j=await(await fetch(L)).json();j.transactionHash=V.transactionHash,r(0,a=[...a,j])}))}catch(h){console.error("An error occurred:",h)}},u=(g,f)=>{const i=g.split(" "),h=i.slice(0,f).join(" "),b=i.length>f;return h.concat(b?"..":"")};return ee(async()=>{await c(),await l(),await Ne()}),o.$$.update=()=>{o.$$.dirty&16&&r(2,t=s==null?void 0:s.replace(/^https?:\/\/([^/]+)\/.*/,"$1"))},[a,n,t,u,s]}class Je extends K{constructor(e){super(),Q(this,e,Ye,Fe,X,{})}}function Ke(o){let e,r="No insight found for the above url",t;return{c(){e=v("p"),t=P(r),this.h()},l(s){e=w(s,"P",{class:!0});var a=$(e);t=T(a,r),a.forEach(p),this.h()},h(){_(e,"class","text-[11px] capitalize w-max mx-auto font-medium")},m(s,a){E(s,e,a),m(e,t)},p:B,d(s){s&&p(e)}}}function Qe(o){let e,r;return{c(){e=v("p"),r=P(o[0]),this.h()},l(t){e=w(t,"P",{class:!0});var s=$(e);r=T(s,o[0]),s.forEach(p),this.h()},h(){_(e,"class","text-[11px] font-normal")},m(t,s){E(t,e,s),m(e,r)},p(t,s){s&1&&te(r,t[0])},d(t){t&&p(e)}}}function Xe(o){let e,r;return{c(){e=v("p"),r=P("Insight generation in progress"),this.h()},l(t){e=w(t,"P",{class:!0});var s=$(e);r=T(s,"Insight generation in progress"),s.forEach(p),this.h()},h(){_(e,"class","p-5 w-max mx-auto font-medium capitalize")},m(t,s){E(t,e,s),m(e,r)},p:B,d(t){t&&p(e)}}}function Ze(o){let e;function r(a,n){if(a[1])return Xe;if(a[0]!=="")return Qe;if(a[0]=="")return Ke}let t=r(o),s=t&&t(o);return{c(){e=v("div"),s&&s.c(),this.h()},l(a){e=w(a,"DIV",{class:!0});var n=$(e);s&&s.l(n),n.forEach(p),this.h()},h(){_(e,"class","reviews w-[80%] h-[315px] mx-auto")},m(a,n){E(a,e,n),s&&s.m(e,null)},p(a,[n]){t===(t=r(a))&&s?s.p(a,n):(s&&s.d(1),s=t&&t(a),s&&(s.c(),s.m(e,null)))},i:B,o:B,d(a){a&&p(e),s&&s.d()}}}function et(o,e,r){let t,s="",a,n=!1;const c=async()=>{var l;r(1,n=!0);try{const[u]=await chrome.tabs.query({active:!0,currentWindow:!0});t=(l=u.url)==null?void 0:l.toLocaleLowerCase()}catch(u){console.log(u),r(1,n=!1)}finally{r(1,n=!1)}},d=async()=>{var u;r(1,n=!0);const l={method:"GET",headers:{"Content-Type":"application/json"}};try{const f=await(await fetch(`${Ee}/site-insight?siteUrl=${new URL(t).origin}`,l)).json();a=f.message,(u=f.payload)!=null&&u.insight&&r(0,s=f.payload.insight),r(1,n=!1)}catch(g){console.log("error",g),r(1,n=!1)}};return ee(async()=>{await c(),await d()}),[s,n]}class tt extends K{constructor(e){super(),Q(this,e,et,Ze,X,{})}}function rt(o){let e,r,t,s,a,n,c,d;return r=new We({}),s=new ze({props:{header:o[1],tabs:[{id:"tab2",label:"AI Summary",component:tt},{id:"tab1",label:"Reviews",component:Je}]}}),c=new xe({}),{c(){e=v("div"),G(r.$$.fragment),t=U(),G(s.$$.fragment),a=U(),n=v("div"),G(c.$$.fragment),this.h()},l(l){e=w(l,"DIV",{class:!0});var u=$(e);F(r.$$.fragment,u),t=A(u),F(s.$$.fragment,u),a=A(u),n=w(u,"DIV",{class:!0});var g=$(n);F(c.$$.fragment,g),g.forEach(p),u.forEach(p),this.h()},h(){_(n,"class","modal h-screen z-10 absolute top-0 flex justify-center items-center"),ne(n,"modal-open",o[0]),_(e,"class","h-full")},m(l,u){E(l,e,u),Y(r,e,null),m(e,t),Y(s,e,null),m(e,a),m(e,n),Y(c,n,null),d=!0},p(l,[u]){const g={};u&2&&(g.header=l[1]),s.$set(g),(!d||u&1)&&ne(n,"modal-open",l[0])},i(l){d||(S(r.$$.fragment,l),S(s.$$.fragment,l),S(c.$$.fragment,l),d=!0)},o(l){C(r.$$.fragment,l),C(s.$$.fragment,l),C(c.$$.fragment,l),d=!1},d(l){l&&p(e),J(r),J(s),J(c)}}}let st="";function at(o,e,r){let t,s,a=!1;const n=async()=>{var c;r(0,a=!0);try{const[d]=await chrome.tabs.query({active:!0,currentWindow:!0});r(2,s=(c=d.url)==null?void 0:c.toLocaleLowerCase());const l=new URL(s).origin,u=new URL(s);console.log(u.origin,u.pathname),chrome.storage.local.get("urlMappings",g=>{const f=g.urlMappings||{};f[l]||(f[l]=[]),f[l].includes(u.pathname)||f[l].push(u.pathname),chrome.storage.local.set({urlMappings:f},()=>{Ve.set(f)})}),console.log(st)}catch(d){console.log(d)}finally{r(0,a=!1)}};return ee(async()=>{await n()}),o.$$.update=()=>{o.$$.dirty&4&&r(1,t=s==null?void 0:s.replace(/^https?:\/\/([^/]+)\/.*/,"$1"))},[a,t,s]}class ot extends K{constructor(e){super(),Q(this,e,at,rt,X,{})}}function nt(o){let e,r;return e=new ot({}),{c(){G(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,s){Y(e,t,s),r=!0},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){C(e.$$.fragment,t),r=!1},d(t){J(e,t)}}}function lt(o){let e,r;return e=new xe({}),{c(){G(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,s){Y(e,t,s),r=!0},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){C(e.$$.fragment,t),r=!1},d(t){J(e,t)}}}function it(o){let e,r,t,s;const a=[lt,nt],n=[];function c(d,l){return d[0]?0:1}return e=c(o),r=n[e]=a[e](o),{c(){r.c(),t=oe()},l(d){r.l(d),t=oe()},m(d,l){n[e].m(d,l),E(d,t,l),s=!0},p(d,[l]){let u=e;e=c(d),e!==u&&(Ue(),C(n[u],1,1,()=>{n[u]=null}),Re(),r=n[e],r||(r=n[e]=a[e](d),r.c()),S(r,1),r.m(t.parentNode,t))},i(d){s||(S(r),s=!0)},o(d){C(r),s=!1},d(d){n[e].d(d),d&&p(t)}}}function ct(o,e,r){let t="none",s=!1,a=!0;return ee(async()=>{Ie.subscribe(n=>t=n),s=je("unlocked"),!s&&t!=="none"&&t!==null&&t!==""&&await Ae("/signIn"),r(0,a=!1)}),[a]}class vt extends K{constructor(e){super(),Q(this,e,ct,it,X,{})}}export{vt as component,bt as universal};