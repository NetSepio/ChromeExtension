import{S as z,i as C,s as K,k as c,y as M,a as w,l as d,m as u,z as P,c as V,h as n,b as S,A as j,D as r,g as F,d as G,B as J,o as Q,q as W,r as x,n as f,K as O,H as Y,N as R}from"../chunks/index.89e71670.js";import{H as X}from"../chunks/Header.cf7b0240.js";import{o as H}from"../chunks/store.b194c171.js";function Z(k){let e,s,o,h,v,l,a,t,i,y,m,$,p,_,b,I,N;return{c(){e=c("div"),s=c("div"),o=c("h1"),h=W("Welcome to Netsepio"),v=w(),l=c("div"),a=c("a"),t=c("button"),i=W("New Wallet"),y=w(),m=c("div"),$=w(),p=c("a"),_=c("button"),b=W("Import Wallet"),this.h()},l(E){e=d(E,"DIV",{class:!0});var g=u(e);s=d(g,"DIV",{class:!0});var T=u(s);o=d(T,"H1",{class:!0});var A=u(o);h=x(A,"Welcome to Netsepio"),A.forEach(n),T.forEach(n),v=V(g),l=d(g,"DIV",{class:!0});var D=u(l);a=d(D,"A",{href:!0});var B=u(a);t=d(B,"BUTTON",{class:!0});var U=u(t);i=x(U,"New Wallet"),U.forEach(n),B.forEach(n),y=V(D),m=d(D,"DIV",{class:!0}),u(m).forEach(n),$=V(D),p=d(D,"A",{href:!0});var q=u(p);_=d(q,"BUTTON",{class:!0});var L=u(_);b=x(L,"Import Wallet"),L.forEach(n),q.forEach(n),D.forEach(n),g.forEach(n),this.h()},h(){f(o,"class","text-5xl text-center font-bold"),f(s,"class","mx-auto"),f(t,"class","btn btn-wide"),f(a,"href","/Onboarding/get-secret-key"),f(m,"class","divider mr-5 divider-white"),f(_,"class","btn btn-wide"),f(p,"href","/Onboarding/import-old-wallet"),f(l,"class","mt-10 grid place-content-center"),f(e,"class","mt-28")},m(E,g){S(E,e,g),r(e,s),r(s,o),r(o,h),r(e,v),r(e,l),r(l,a),r(a,t),r(t,i),r(l,y),r(l,m),r(l,$),r(l,p),r(p,_),r(_,b),I||(N=[O(a,"click",k[2]),O(p,"click",k[3])],I=!0)},p:Y,d(E){E&&n(e),I=!1,R(N)}}}function ee(k){let e,s,o,h,v,l,a,t,i,y,m,$,p;return{c(){e=c("div"),s=c("div"),o=c("h1"),h=W("You have already completed this 🤩"),v=w(),l=c("div"),a=c("a"),t=c("button"),i=W("See your profile"),y=w(),m=c("div"),this.h()},l(_){e=d(_,"DIV",{class:!0});var b=u(e);s=d(b,"DIV",{});var I=u(s);o=d(I,"H1",{class:!0});var N=u(o);h=x(N,"You have already completed this 🤩"),N.forEach(n),I.forEach(n),v=V(b),l=d(b,"DIV",{class:!0});var E=u(l);a=d(E,"A",{href:!0});var g=u(a);t=d(g,"BUTTON",{class:!0});var T=u(t);i=x(T,"See your profile"),T.forEach(n),g.forEach(n),y=V(E),m=d(E,"DIV",{class:!0}),u(m).forEach(n),E.forEach(n),b.forEach(n),this.h()},h(){f(o,"class","text-5xl text-left"),f(t,"class","btn btn-wide"),f(a,"href","/profile"),f(m,"class","divider mr-5 divider-white"),f(l,"class","mt-10"),f(e,"class","mt-28")},m(_,b){S(_,e,b),r(e,s),r(s,o),r(o,h),r(e,v),r(e,l),r(l,a),r(a,t),r(t,i),r(l,y),r(l,m),$||(p=O(a,"click",k[1]),$=!0)},p:Y,d(_){_&&n(e),$=!1,p()}}}function te(k){let e,s,o,h;s=new X({});function v(t,i){return t[0]<1&&t[0]!==null&&t[0]!==void 0?ee:Z}let l=v(k),a=l(k);return{c(){e=c("div"),M(s.$$.fragment),o=w(),a.c()},l(t){e=d(t,"DIV",{});var i=u(e);P(s.$$.fragment,i),o=V(i),a.l(i),i.forEach(n)},m(t,i){S(t,e,i),j(s,e,null),r(e,o),a.m(e,null),h=!0},p(t,[i]){l===(l=v(t))&&a?a.p(t,i):(a.d(1),a=l(t),a&&(a.c(),a.m(e,null)))},i(t){h||(F(s.$$.fragment,t),h=!0)},o(t){G(s.$$.fragment,t),h=!1},d(t){t&&n(e),J(s),a.d()}}}function ae(k,e,s){let o;return Q(()=>{H.subscribe(a=>s(0,o=a))}),[o,()=>H.set(-1),()=>H.set(2),()=>H.set(2)]}class oe extends z{constructor(e){super(),C(this,e,ae,te,K,{})}}export{oe as component};
