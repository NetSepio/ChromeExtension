import{S as A,i as L,s as V,k as p,l as m,m as b,h as r,n as f,b as v,H as I,o as q,q as x,a as C,r as y,c as H,D as h,P as S,J as T,L as B}from"../chunks/index.52bf09a9.js";import{a as N}from"../chunks/secondAuth.341e9a7c.js";function W(k){let e,n,s,a,l,o,i,d,c,_,E;return{c(){e=p("div"),n=p("h3"),s=x("Congratulations!"),a=C(),l=p("p"),o=x("Click below to go to home page"),i=C(),d=p("div"),c=p("label"),_=p("a"),E=x("Home"),this.h()},l(w){e=m(w,"DIV",{class:!0});var t=b(e);n=m(t,"H3",{class:!0});var u=b(n);s=y(u,"Congratulations!"),u.forEach(r),a=H(t),l=m(t,"P",{class:!0});var g=b(l);o=y(g,"Click below to go to home page"),g.forEach(r),i=H(t),d=m(t,"DIV",{class:!0});var P=b(d);c=m(P,"LABEL",{for:!0,class:!0});var U=b(c);_=m(U,"A",{href:!0});var D=b(_);E=y(D,"Home"),D.forEach(r),U.forEach(r),P.forEach(r),t.forEach(r),this.h()},h(){f(n,"class","font-bold text-lg"),f(l,"class","py-4"),f(_,"href","/"),f(c,"for","my-modal"),f(c,"class","btn"),f(d,"class","modal-action"),f(e,"class","modal-box dark:text-white dark:bg-gray-800")},m(w,t){v(w,e,t),h(e,n),h(n,s),h(e,a),h(e,l),h(l,o),h(e,i),h(e,d),h(d,c),h(c,_),h(_,E)},p:I,d(w){w&&r(e)}}}function $(k){let e,n,s,a,l,o,i,d,c,_,E,w;return{c(){e=p("h1"),n=x("Wallet is locked!"),s=C(),a=p("p"),l=x("Enter Password"),o=C(),i=p("input"),d=C(),c=p("button"),_=x("Unlock"),this.h()},l(t){e=m(t,"H1",{class:!0});var u=b(e);n=y(u,"Wallet is locked!"),u.forEach(r),s=H(t),a=m(t,"P",{class:!0});var g=b(a);l=y(g,"Enter Password"),g.forEach(r),o=H(t),i=m(t,"INPUT",{type:!0,placeholder:!0,class:!0}),d=H(t),c=m(t,"BUTTON",{class:!0});var P=b(c);_=y(P,"Unlock"),P.forEach(r),this.h()},h(){f(e,"class","text-5xl text-left text-black dark:text-white"),f(a,"class","text-md mt-5 mb-3 dark:text-white dark:bg-gray-900"),f(i,"type","password"),f(i,"placeholder","Enter Password"),f(i,"class","input input-bordered input-md w-full max-w-xs dark:bg-gray-700 dark:text-white"),f(c,"class","btn mt-5")},m(t,u){v(t,e,u),h(e,n),v(t,s,u),v(t,a,u),h(a,l),v(t,o,u),v(t,i,u),S(i,k[0]),v(t,d,u),v(t,c,u),h(c,_),E||(w=[T(i,"input",k[3]),T(c,"click",k[2])],E=!0)},p(t,u){u&1&&i.value!==t[0]&&S(i,t[0])},d(t){t&&r(e),t&&r(s),t&&r(a),t&&r(o),t&&r(i),t&&r(d),t&&r(c),E=!1,B(w)}}}function j(k){let e;function n(l,o){return l[1]==!1?$:W}let s=n(k),a=s(k);return{c(){e=p("div"),a.c(),this.h()},l(l){e=m(l,"DIV",{class:!0});var o=b(e);a.l(o),o.forEach(r),this.h()},h(){f(e,"class","bg-white dark:text-white dark:bg-gray-900")},m(l,o){v(l,e,o),a.m(e,null)},p(l,[o]){s===(s=n(l))&&a?a.p(l,o):(a.d(1),a=s(l),a&&(a.c(),a.m(e,null)))},i:I,o:I,d(l){l&&r(e),a.d()}}}function J(k,e,n){let s="",a=!1;function l(){return N(s)}const o=()=>{s.length>=6&&l()&&n(1,a=!0)};q(()=>{localStorage.removeItem("jwtToken")});function i(){s=this.value,n(0,s)}return[s,a,o,i]}class z extends A{constructor(e){super(),L(this,e,J,j,V,{})}}export{z as component};