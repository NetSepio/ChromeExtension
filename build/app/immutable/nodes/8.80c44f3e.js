import{S as le,i as ae,s as re,k as p,y as ne,a as S,q as K,l as f,m as _,z as oe,c as H,r as N,h as d,n as h,L as Y,b as V,A as ie,D as o,R as Z,K as U,g as ce,d as ue,B as de,N as ee,u as te,H as se}from"../chunks/index.0c2a1aba.js";import{b as he,p as pe,w as fe,m as me,o as _e}from"../chunks/store.158563d8.js";import{H as be}from"../chunks/Header.d08ee970.js";import{A as ve}from"../chunks/index.074eaf46.js";function ye(c){let e,t=c[1].length>0?`${c[1]}`:"Enter your seed phases separated with a single blank space",n,s;return{c(){e=p("h3"),n=K(t),this.h()},l(l){e=f(l,"H3",{class:!0});var r=_(e);n=N(r,t),r.forEach(d),this.h()},h(){h(e,"class",s=`text-sm ${c[1]!==""?"text-red-500":""}`)},m(l,r){V(l,e,r),o(e,n)},p(l,r){r&2&&t!==(t=l[1].length>0?`${l[1]}`:"Enter your seed phases separated with a single blank space")&&te(n,t),r&2&&s!==(s=`text-sm ${l[1]!==""?"text-red-500":""}`)&&h(e,"class",s)},d(l){l&&d(e)}}}function ge(c){let e,t,n,s,l=`${c[3].substring(0,8)}...${c[3].substring(c[3].length-8)}`,r;return{c(){e=p("h2"),t=K("Found this Wallet"),n=S(),s=p("span"),r=K(l),this.h()},l(a){e=f(a,"H2",{class:!0});var i=_(e);t=N(i,"Found this Wallet"),i.forEach(d),n=H(a),s=f(a,"SPAN",{});var v=_(s);r=N(v,l),v.forEach(d),this.h()},h(){h(e,"class","text-sm text-green-300")},m(a,i){V(a,e,i),o(e,t),V(a,n,i),V(a,s,i),o(s,r)},p(a,i){i&8&&l!==(l=`${a[3].substring(0,8)}...${a[3].substring(a[3].length-8)}`)&&te(r,l)},d(a){a&&d(e),a&&d(n),a&&d(s)}}}function ke(c){let e,t,n,s,l;return{c(){e=p("div"),t=p("button"),n=K("Submit"),this.h()},l(r){e=f(r,"DIV",{class:!0});var a=_(e);t=f(a,"BUTTON",{class:!0});var i=_(t);n=N(i,"Submit"),i.forEach(d),a.forEach(d),this.h()},h(){h(t,"class","btn"),h(e,"class","modal-action ml-px")},m(r,a){V(r,e,a),o(e,t),o(t,n),s||(l=U(t,"click",c[4]),s=!0)},p:se,d(r){r&&d(e),s=!1,l()}}}function Ee(c){let e,t,n,s,l,r;return{c(){e=p("div"),t=p("a"),n=p("button"),s=K("Continue"),this.h()},l(a){e=f(a,"DIV",{class:!0});var i=_(e);t=f(i,"A",{href:!0});var v=_(t);n=f(v,"BUTTON",{class:!0});var A=_(n);s=N(A,"Continue"),A.forEach(d),v.forEach(d),i.forEach(d),this.h()},h(){h(n,"class","btn"),h(t,"href","import-old-wallet/create-password"),h(e,"class","modal-action ml-px")},m(a,i){V(a,e,i),o(e,t),o(t,n),o(n,s),l||(r=[U(n,"click",c[5]),U(t,"click",c[8])],l=!0)},p:se,d(a){a&&d(e),l=!1,ee(r)}}}function we(c){let e,t,n,s,l,r,a,i,v,A,D,$,k,m,E,T,x,q,F,C,w,L,B,R,j;t=new be({});function z(u,b){return u[3]!==""?ge:ye}let O=z(c),y=O(c);function M(u,b){return u[3]!==""?Ee:ke}let W=M(c),g=W(c);return{c(){e=p("div"),ne(t.$$.fragment),n=S(),s=p("div"),l=p("h1"),r=K("Enter your seed phase"),a=S(),i=p("button"),v=K("Enter Seed Phrase"),A=S(),D=p("input"),$=S(),k=p("div"),m=p("div"),E=p("h3"),T=K("Seed Phrase"),x=S(),q=p("br"),F=S(),y.c(),C=S(),w=p("input"),L=S(),g.c(),this.h()},l(u){e=f(u,"DIV",{});var b=_(e);oe(t.$$.fragment,b),n=H(b),s=f(b,"DIV",{class:!0});var I=_(s);l=f(I,"H1",{class:!0});var G=_(l);r=N(G,"Enter your seed phase"),G.forEach(d),a=H(I),i=f(I,"BUTTON",{class:!0});var J=_(i);v=N(J,"Enter Seed Phrase"),J.forEach(d),A=H(I),D=f(I,"INPUT",{type:!0,id:!0,class:!0}),$=H(I),k=f(I,"DIV",{class:!0});var Q=_(k);m=f(Q,"DIV",{class:!0});var P=_(m);E=f(P,"H3",{class:!0});var X=_(E);T=N(X,"Seed Phrase"),X.forEach(d),x=H(P),q=f(P,"BR",{}),F=H(P),y.l(P),C=H(P),w=f(P,"INPUT",{type:!0,placeholder:!0,class:!0}),L=H(P),g.l(P),P.forEach(d),Q.forEach(d),I.forEach(d),b.forEach(d),this.h()},h(){h(l,"class","text-3xl font-bold text-center mb-48"),h(i,"class","btn btn-wide modal-button mx-auto block"),h(D,"type","checkbox"),h(D,"id","my-modal"),h(D,"class","modal-toggle"),h(E,"class","font-bold text-lg"),h(w,"type","text"),h(w,"placeholder","ex - better phone option poke water glasses mandate spell thought nice history united"),h(w,"class","py-4 my-4 input input-bordered input-lg w-full max-w-xs dark:bg-gray-800 dark:text-white border-white/50"),h(m,"class","modal-box dark:bg-gray-800 dark:text-white"),h(k,"class","modal"),Y(k,"modal-open",c[0]),h(s,"class","mt-12")},m(u,b){V(u,e,b),ie(t,e,null),o(e,n),o(e,s),o(s,l),o(l,r),o(s,a),o(s,i),o(i,v),o(s,A),o(s,D),o(s,$),o(s,k),o(k,m),o(m,E),o(E,T),o(m,x),o(m,q),o(m,F),y.m(m,null),o(m,C),o(m,w),Z(w,c[2]),o(m,L),g.m(m,null),B=!0,R||(j=[U(i,"click",c[6]),U(w,"input",c[7])],R=!0)},p(u,[b]){O===(O=z(u))&&y?y.p(u,b):(y.d(1),y=O(u),y&&(y.c(),y.m(m,C))),b&4&&w.value!==u[2]&&Z(w,u[2]),W===(W=M(u))&&g?g.p(u,b):(g.d(1),g=W(u),g&&(g.c(),g.m(m,null))),(!B||b&1)&&Y(k,"modal-open",u[0])},i(u){B||(ce(t.$$.fragment,u),B=!0)},o(u){ue(t.$$.fragment,u),B=!1},d(u){u&&d(e),de(t),y.d(),g.d(),R=!1,ee(j)}}}function Pe(c,e,t){let n=!1,s="",l="",r="",a="",i="";const v="m/44'/637'/0'/0'/0'",A=async()=>{if(l!==""){t(1,s=""),t(2,l=l.trim());try{let E=ve.fromDerivePath(v,l);if(E!==null){let T=E.toPrivateKeyObject();t(3,r=T.address),a=T.publicKeyHex,i=T.privateKeyHex.slice(2)}else t(1,s="No wallet found")}catch{t(1,s="Something wrong!")}}else t(1,s="Enter a valid key")},D=async()=>{he.set(a),pe.set(i),fe.set(r),me.set(l)},$=()=>t(0,n=!0);function k(){l=this.value,t(2,l)}return[n,s,l,r,A,D,$,k,()=>_e.set(1)]}class Ie extends le{constructor(e){super(),ae(this,e,Pe,we,re,{})}}export{Ie as component};
