import{S as Q,i as Y,s as Z,k as f,q as L,a as I,l as h,m as b,r as N,h as a,c as $,n as _,K as J,b as g,D as c,P as ae,J as A,H,L as oe,y as K,z as X,A as F,d as q,f as ne,g as z,B as G,o as ce,v as ie,w as ue,W as de,X as fe}from"../chunks/index.52bf09a9.js";import{H as he}from"../chunks/Header.d59277a6.js";import{m as re,s as me,w as _e,o as be,d as ve}from"../chunks/store.6d99b839.js";import{c as pe}from"../chunks/secondAuth.341e9a7c.js";function ke(m){let e,l,o;return{c(){e=f("div"),l=f("button"),o=L("Reset"),this.h()},l(n){e=h(n,"DIV",{class:!0});var s=b(e);l=h(s,"BUTTON",{class:!0});var r=b(l);o=N(r,"Reset"),r.forEach(a),s.forEach(a),this.h()},h(){_(l,"class","btn"),l.disabled=!0,_(e,"class","modal-action")},m(n,s){g(n,e,s),c(e,l),c(l,o)},p:H,d(n){n&&a(e)}}}function we(m){let e,l,o,n,s,r;return{c(){e=f("div"),l=f("a"),o=f("button"),n=L("Reset"),this.h()},l(d){e=h(d,"DIV",{class:!0});var u=b(e);l=h(u,"A",{href:!0});var v=b(l);o=h(v,"BUTTON",{class:!0});var i=b(o);n=N(i,"Reset"),i.forEach(a),v.forEach(a),u.forEach(a),this.h()},h(){_(o,"class","btn"),_(l,"href","/"),_(e,"class","modal-action")},m(d,u){g(d,e,u),c(e,l),c(l,o),c(o,n),s||(r=A(o,"click",m[3]),s=!0)},p:H,d(d){d&&a(e),s=!1,r()}}}function ge(m){let e,l,o,n,s,r,d,u,v,i,E,T,k,W,B,D;function S(y,p){return y[1]?we:ke}let O=S(m),U=O(m);return{c(){e=f("div"),l=f("button"),o=L("Reset Wallet"),n=I(),s=f("div"),r=f("div"),d=f("button"),u=L("✕"),v=I(),i=f("p"),E=L("Enter 'reset'"),T=I(),k=f("input"),W=I(),U.c(),this.h()},l(y){e=h(y,"DIV",{});var p=b(e);l=h(p,"BUTTON",{class:!0});var x=b(l);o=N(x,"Reset Wallet"),x.forEach(a),n=$(p),s=h(p,"DIV",{class:!0});var P=b(s);r=h(P,"DIV",{class:!0});var V=b(r);d=h(V,"BUTTON",{class:!0});var R=b(d);u=N(R,"✕"),R.forEach(a),v=$(V),i=h(V,"P",{class:!0});var M=b(i);E=N(M,"Enter 'reset'"),M.forEach(a),T=$(V),k=h(V,"INPUT",{type:!0,placeholder:!0,class:!0}),W=$(V),U.l(V),V.forEach(a),P.forEach(a),p.forEach(a),this.h()},h(){_(l,"class","block rounded-lg shadow-lg bg-red-500 dark:bg-red-500 text-white p-5 w-full h-auto hover:bg-slate-600 active:bg-slate-500 text-xl text-center"),_(d,"class","btn btn-sm btn-circle absolute right-2 top-2"),_(i,"class","text-md mt-5 mb-3 text-center"),_(k,"type","text"),_(k,"placeholder","reset"),_(k,"class","input input-bordered dark:bg-gray-900 dark:text-white dark:border-zinc-600 input-md w-full max-w-xs"),_(r,"class","modal-box dark:bg-gray-900 dark:text-white"),_(s,"class","modal modal-bottom sm:modal-middle"),J(s,"modal-open",m[0])},m(y,p){g(y,e,p),c(e,l),c(l,o),c(e,n),c(e,s),c(s,r),c(r,d),c(d,u),c(r,v),c(r,i),c(i,E),c(r,T),c(r,k),ae(k,m[2]),c(r,W),U.m(r,null),B||(D=[A(l,"click",m[4]),A(d,"click",m[5]),A(k,"input",m[6]),A(k,"change",m[7])],B=!0)},p(y,[p]){p&4&&k.value!==y[2]&&ae(k,y[2]),O===(O=S(y))&&U?U.p(y,p):(U.d(1),U=O(y),U&&(U.c(),U.m(r,null))),p&1&&J(s,"modal-open",y[0])},i:H,o:H,d(y){y&&a(e),U.d(),B=!1,oe(D)}}}function Ee(m,e,l){let o=!1,n=!1,s="";const r=async()=>{await re.remove(),me(""),_e.set(""),be.set(3),localStorage.removeItem("encryptedMnemonic"),localStorage.removeItem("iv"),localStorage.removeItem("mnemonicHash"),ve.set(""),l(0,o=!1)},d=()=>l(0,o=!0),u=()=>{l(0,o=!1)};function v(){s=this.value,l(2,s)}return[o,n,s,r,d,u,v,()=>{s=="reset"&&l(1,n=!0)}]}class ye extends Q{constructor(e){super(),Y(this,e,Ee,ge,Z,{})}}function Ue(m){let e,l,o,n,s,r,d,u,v,i,E,T,k,W,B,D,S,O,U,y;return{c(){e=f("div"),l=f("button"),o=L("Lock Wallet"),n=I(),s=f("div"),r=f("div"),d=f("button"),u=L("✕"),v=I(),i=f("p"),E=L("Sure want to lock the wallet?"),T=I(),k=f("div"),W=f("button"),B=L("Cancel"),D=I(),S=f("button"),O=L("Lock"),this.h()},l(p){e=h(p,"DIV",{});var x=b(e);l=h(x,"BUTTON",{class:!0});var P=b(l);o=N(P,"Lock Wallet"),P.forEach(a),n=$(x),s=h(x,"DIV",{class:!0});var V=b(s);r=h(V,"DIV",{class:!0});var R=b(r);d=h(R,"BUTTON",{class:!0});var M=b(d);u=N(M,"✕"),M.forEach(a),v=$(R),i=h(R,"P",{class:!0});var C=b(i);E=N(C,"Sure want to lock the wallet?"),C.forEach(a),T=$(R),k=h(R,"DIV",{class:!0});var t=b(k);W=h(t,"BUTTON",{class:!0});var w=b(W);B=N(w,"Cancel"),w.forEach(a),D=$(t),S=h(t,"BUTTON",{class:!0});var j=b(S);O=N(j,"Lock"),j.forEach(a),t.forEach(a),R.forEach(a),V.forEach(a),x.forEach(a),this.h()},h(){_(l,"class","block rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:text-white p-5 w-full h-auto hover:bg-slate-200 active:bg-slate-500 text-xl text-center"),_(d,"class","btn btn-sm btn-circle absolute right-2 top-2"),_(i,"class","text-xl mt-5 mb-3"),_(W,"class","btn"),_(S,"class","btn"),_(k,"class","modal-action"),_(r,"class","modal-box dark:bg-gray-900 dark:text-white"),_(s,"class","modal modal-bottom sm:modal-middle"),J(s,"modal-open",m[0])},m(p,x){g(p,e,x),c(e,l),c(l,o),c(e,n),c(e,s),c(s,r),c(r,d),c(d,u),c(r,v),c(r,i),c(i,E),c(r,T),c(r,k),c(k,W),c(W,B),c(k,D),c(k,S),c(S,O),U||(y=[A(l,"click",m[3]),A(d,"click",m[4]),A(W,"click",m[5]),A(S,"click",m[1])],U=!0)},p(p,[x]){x&1&&J(s,"modal-open",p[0])},i:H,o:H,d(p){p&&a(e),U=!1,oe(y)}}}function xe(m,e,l){let o=!1,{isWalletUnlocked:n}=e;const s=async()=>{await re.remove(),l(2,n=!1),l(0,o=!1)},r=()=>l(0,o=!0),d=()=>{l(0,o=!1)},u=()=>{l(0,o=!1)};return m.$$set=v=>{"isWalletUnlocked"in v&&l(2,n=v.isWalletUnlocked)},[o,s,n,r,d,u]}class Ie extends Q{constructor(e){super(),Y(this,e,xe,Ue,Z,{isWalletUnlocked:2})}}function $e(m){let e,l,o,n,s,r;return{c(){e=f("div"),l=f("h1"),o=L("Unlock the wallet"),n=I(),s=f("a"),r=L("Unlock"),this.h()},l(d){e=h(d,"DIV",{class:!0});var u=b(e);l=h(u,"H1",{class:!0});var v=b(l);o=N(v,"Unlock the wallet"),v.forEach(a),n=$(u),s=h(u,"A",{href:!0,class:!0});var i=b(s);r=N(i,"Unlock"),i.forEach(a),u.forEach(a),this.h()},h(){_(l,"class","text-3xl dark:text-yellow-200"),_(s,"href","/wallet"),_(s,"class","btn"),_(e,"class","h-[40vh] w-full p-5 flex flex-col items-center justify-evenly")},m(d,u){g(d,e,u),c(e,l),c(l,o),c(e,n),c(e,s),c(s,r)},p:H,i:H,o:H,d(d){d&&a(e)}}}function Te(m){let e,l,o,n,s,r,d,u,v,i,E,T,k,W,B,D,S,O,U,y,p,x,P,V,R;function M(t){m[1](t)}let C={};return m[0]!==void 0&&(C.isWalletUnlocked=m[0]),D=new Ie({props:C}),ue.push(()=>de(D,"isWalletUnlocked",M)),x=new ye({}),{c(){e=f("br"),l=I(),o=f("h1"),n=L("Settings"),s=I(),r=f("br"),d=I(),u=f("div"),v=f("a"),i=f("div"),E=L("Show Seed Phrase"),T=I(),k=f("br"),W=I(),B=f("div"),K(D.$$.fragment),O=I(),U=f("br"),y=I(),p=f("div"),K(x.$$.fragment),P=I(),V=f("br"),this.h()},l(t){e=h(t,"BR",{}),l=$(t),o=h(t,"H1",{class:!0});var w=b(o);n=N(w,"Settings"),w.forEach(a),s=$(t),r=h(t,"BR",{}),d=$(t),u=h(t,"DIV",{class:!0});var j=b(u);v=h(j,"A",{href:!0,class:!0});var ee=b(v);i=h(ee,"DIV",{class:!0});var te=b(i);E=N(te,"Show Seed Phrase"),te.forEach(a),ee.forEach(a),j.forEach(a),T=$(t),k=h(t,"BR",{}),W=$(t),B=h(t,"DIV",{class:!0});var le=b(B);X(D.$$.fragment,le),le.forEach(a),O=$(t),U=h(t,"BR",{}),y=$(t),p=h(t,"DIV",{class:!0});var se=b(p);X(x.$$.fragment,se),se.forEach(a),P=$(t),V=h(t,"BR",{}),this.h()},h(){_(o,"class","text-3xl mt-5 mb-2 text-center"),_(i,"class","block rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:text-white p-5 h-auto hover:bg-slate-200 active:bg-slate-500"),_(v,"href","/settings/show-secret-key"),_(v,"class","text-xl text-center"),_(u,"class","justify-center"),_(B,"class","justify-center"),_(p,"class","justify-center")},m(t,w){g(t,e,w),g(t,l,w),g(t,o,w),c(o,n),g(t,s,w),g(t,r,w),g(t,d,w),g(t,u,w),c(u,v),c(v,i),c(i,E),g(t,T,w),g(t,k,w),g(t,W,w),g(t,B,w),F(D,B,null),g(t,O,w),g(t,U,w),g(t,y,w),g(t,p,w),F(x,p,null),g(t,P,w),g(t,V,w),R=!0},p(t,w){const j={};!S&&w&1&&(S=!0,j.isWalletUnlocked=t[0],fe(()=>S=!1)),D.$set(j)},i(t){R||(z(D.$$.fragment,t),z(x.$$.fragment,t),R=!0)},o(t){q(D.$$.fragment,t),q(x.$$.fragment,t),R=!1},d(t){t&&a(e),t&&a(l),t&&a(o),t&&a(s),t&&a(r),t&&a(d),t&&a(u),t&&a(T),t&&a(k),t&&a(W),t&&a(B),G(D),t&&a(O),t&&a(U),t&&a(y),t&&a(p),G(x),t&&a(P),t&&a(V)}}}function We(m){let e,l,o,n,s,r;l=new he({});const d=[Te,$e],u=[];function v(i,E){return i[0]?0:1}return n=v(m),s=u[n]=d[n](m),{c(){e=f("div"),K(l.$$.fragment),o=I(),s.c()},l(i){e=h(i,"DIV",{});var E=b(e);X(l.$$.fragment,E),o=$(E),s.l(E),E.forEach(a)},m(i,E){g(i,e,E),F(l,e,null),c(e,o),u[n].m(e,null),r=!0},p(i,[E]){let T=n;n=v(i),n===T?u[n].p(i,E):(ie(),q(u[T],1,1,()=>{u[T]=null}),ne(),s=u[n],s?s.p(i,E):(s=u[n]=d[n](i),s.c()),z(s,1),s.m(e,null))},i(i){r||(z(l.$$.fragment,i),z(s),r=!0)},o(i){q(l.$$.fragment,i),q(s),r=!1},d(i){i&&a(e),G(l),u[n].d()}}}function De(m,e,l){let o=!1;ce(async()=>{l(0,[,o]=await pe(),o)});function n(s){o=s,l(0,o)}return[o,n]}class Le extends Q{constructor(e){super(),Y(this,e,De,We,Z,{})}}export{Le as component};