import{S as _t,i as bt,s as kt,k as w,y as Le,a as I,l as _,m as H,z as Re,c as G,h as g,n as x,b as W,A as ze,D as d,d as oe,f as vt,g as ie,B as Oe,I as Ne,o as At,v as xt,H as xe,q as K,r as J,M as we,Q as ve,L as ae,u as St,N as Ct,K as _e}from"../chunks/index.831d07df.js";import{H as Ht}from"../chunks/Header.4364769c.js";import{j as yt,c as Z,r as Et,b as Bt,w as Tt,h as pt}from"../chunks/secondAuth.e07c53db.js";import{I as Dt,A as Pt}from"../chunks/browser.54892ed2.js";import{a as gt}from"../chunks/public.dc121523.js";import{A as Mt}from"../chunks/AskToLogin.ec6689c9.js";const It=async()=>{let f="",l="";yt.subscribe(s=>f=s);try{return[await(await fetch(`${gt}/profile`,{method:"GET",headers:{Authorization:f}})).json(),null]}catch(s){return l=s,[null,l]}};var je={},Ue={exports:{}};Ue.exports;(function(f){(function(l,s,i){function p(e){var n=this,u=o();n.next=function(){var t=2091639*n.s0+n.c*23283064365386963e-26;return n.s0=n.s1,n.s1=n.s2,n.s2=t-(n.c=t|0)},n.c=1,n.s0=u(" "),n.s1=u(" "),n.s2=u(" "),n.s0-=u(e),n.s0<0&&(n.s0+=1),n.s1-=u(e),n.s1<0&&(n.s1+=1),n.s2-=u(e),n.s2<0&&(n.s2+=1),u=null}function m(e,n){return n.c=e.c,n.s0=e.s0,n.s1=e.s1,n.s2=e.s2,n}function v(e,n){var u=new p(e),t=n&&n.state,r=u.next;return r.int32=function(){return u.next()*4294967296|0},r.double=function(){return r()+(r()*2097152|0)*11102230246251565e-32},r.quick=r,t&&(typeof t=="object"&&m(t,u),r.state=function(){return m(u,{})}),r}function o(){var e=4022871197,n=function(u){u=String(u);for(var t=0;t<u.length;t++){e+=u.charCodeAt(t);var r=.02519603282416938*e;e=r>>>0,r-=e,r*=e,e=r>>>0,r-=e,e+=r*4294967296}return(e>>>0)*23283064365386963e-26};return n}s&&s.exports?s.exports=v:i&&i.amd?i(function(){return v}):this.alea=v})(Z,f,!1)})(Ue);var Gt=Ue.exports,Ve={exports:{}};Ve.exports;(function(f){(function(l,s,i){function p(o){var e=this,n="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var t=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^t^t>>>8},o===(o|0)?e.x=o:n+=o;for(var u=0;u<n.length+64;u++)e.x^=n.charCodeAt(u)|0,e.next()}function m(o,e){return e.x=o.x,e.y=o.y,e.z=o.z,e.w=o.w,e}function v(o,e){var n=new p(o),u=e&&e.state,t=function(){return(n.next()>>>0)/4294967296};return t.double=function(){do var r=n.next()>>>11,a=(n.next()>>>0)/4294967296,c=(r+a)/(1<<21);while(c===0);return c},t.int32=n.next,t.quick=t,u&&(typeof u=="object"&&m(u,n),t.state=function(){return m(n,{})}),t}s&&s.exports?s.exports=v:i&&i.amd?i(function(){return v}):this.xor128=v})(Z,f,!1)})(Ve);var Nt=Ve.exports,$e={exports:{}};$e.exports;(function(f){(function(l,s,i){function p(o){var e=this,n="";e.next=function(){var t=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^(t^t<<1))|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,o===(o|0)?e.x=o:n+=o;for(var u=0;u<n.length+64;u++)e.x^=n.charCodeAt(u)|0,u==n.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function m(o,e){return e.x=o.x,e.y=o.y,e.z=o.z,e.w=o.w,e.v=o.v,e.d=o.d,e}function v(o,e){var n=new p(o),u=e&&e.state,t=function(){return(n.next()>>>0)/4294967296};return t.double=function(){do var r=n.next()>>>11,a=(n.next()>>>0)/4294967296,c=(r+a)/(1<<21);while(c===0);return c},t.int32=n.next,t.quick=t,u&&(typeof u=="object"&&m(u,n),t.state=function(){return m(n,{})}),t}s&&s.exports?s.exports=v:i&&i.amd?i(function(){return v}):this.xorwow=v})(Z,f,!1)})($e);var Lt=$e.exports,We={exports:{}};We.exports;(function(f){(function(l,s,i){function p(o){var e=this;e.next=function(){var u=e.x,t=e.i,r,a;return r=u[t],r^=r>>>7,a=r^r<<24,r=u[t+1&7],a^=r^r>>>10,r=u[t+3&7],a^=r^r>>>3,r=u[t+4&7],a^=r^r<<7,r=u[t+7&7],r=r^r<<13,a^=r^r<<9,u[t]=a,e.i=t+1&7,a};function n(u,t){var r,a=[];if(t===(t|0))a[0]=t;else for(t=""+t,r=0;r<t.length;++r)a[r&7]=a[r&7]<<15^t.charCodeAt(r)+a[r+1&7]<<13;for(;a.length<8;)a.push(0);for(r=0;r<8&&a[r]===0;++r);for(r==8?a[7]=-1:a[r],u.x=a,u.i=0,r=256;r>0;--r)u.next()}n(e,o)}function m(o,e){return e.x=o.x.slice(),e.i=o.i,e}function v(o,e){o==null&&(o=+new Date);var n=new p(o),u=e&&e.state,t=function(){return(n.next()>>>0)/4294967296};return t.double=function(){do var r=n.next()>>>11,a=(n.next()>>>0)/4294967296,c=(r+a)/(1<<21);while(c===0);return c},t.int32=n.next,t.quick=t,u&&(u.x&&m(u,n),t.state=function(){return m(n,{})}),t}s&&s.exports?s.exports=v:i&&i.amd?i(function(){return v}):this.xorshift7=v})(Z,f,!1)})(We);var Rt=We.exports,Xe={exports:{}};Xe.exports;(function(f){(function(l,s,i){function p(o){var e=this;e.next=function(){var u=e.w,t=e.X,r=e.i,a,c;return e.w=u=u+1640531527|0,c=t[r+34&127],a=t[r=r+1&127],c^=c<<13,a^=a<<17,c^=c>>>15,a^=a>>>12,c=t[r]=c^a,e.i=r,c+(u^u>>>16)|0};function n(u,t){var r,a,c,k,L,R=[],j=128;for(t===(t|0)?(a=t,t=null):(t=t+"\0",a=0,j=Math.max(j,t.length)),c=0,k=-32;k<j;++k)t&&(a^=t.charCodeAt((k+32)%t.length)),k===0&&(L=a),a^=a<<10,a^=a>>>15,a^=a<<4,a^=a>>>13,k>=0&&(L=L+1640531527|0,r=R[k&127]^=a+L,c=r==0?c+1:0);for(c>=128&&(R[(t&&t.length||0)&127]=-1),c=127,k=4*128;k>0;--k)a=R[c+34&127],r=R[c=c+1&127],a^=a<<13,r^=r<<17,a^=a>>>15,r^=r>>>12,R[c]=a^r;u.w=L,u.X=R,u.i=c}n(e,o)}function m(o,e){return e.i=o.i,e.w=o.w,e.X=o.X.slice(),e}function v(o,e){o==null&&(o=+new Date);var n=new p(o),u=e&&e.state,t=function(){return(n.next()>>>0)/4294967296};return t.double=function(){do var r=n.next()>>>11,a=(n.next()>>>0)/4294967296,c=(r+a)/(1<<21);while(c===0);return c},t.int32=n.next,t.quick=t,u&&(u.X&&m(u,n),t.state=function(){return m(n,{})}),t}s&&s.exports?s.exports=v:i&&i.amd?i(function(){return v}):this.xor4096=v})(Z,f,!1)})(Xe);var zt=Xe.exports,qe={exports:{}};qe.exports;(function(f){(function(l,s,i){function p(o){var e=this,n="";e.next=function(){var t=e.b,r=e.c,a=e.d,c=e.a;return t=t<<25^t>>>7^r,r=r-a|0,a=a<<24^a>>>8^c,c=c-t|0,e.b=t=t<<20^t>>>12^r,e.c=r=r-a|0,e.d=a<<16^r>>>16^c,e.a=c-t|0},e.a=0,e.b=0,e.c=-1640531527,e.d=1367130551,o===Math.floor(o)?(e.a=o/4294967296|0,e.b=o|0):n+=o;for(var u=0;u<n.length+20;u++)e.b^=n.charCodeAt(u)|0,e.next()}function m(o,e){return e.a=o.a,e.b=o.b,e.c=o.c,e.d=o.d,e}function v(o,e){var n=new p(o),u=e&&e.state,t=function(){return(n.next()>>>0)/4294967296};return t.double=function(){do var r=n.next()>>>11,a=(n.next()>>>0)/4294967296,c=(r+a)/(1<<21);while(c===0);return c},t.int32=n.next,t.quick=t,u&&(typeof u=="object"&&m(u,n),t.state=function(){return m(n,{})}),t}s&&s.exports?s.exports=v:i&&i.amd?i(function(){return v}):this.tychei=v})(Z,f,!1)})(qe);var Ot=qe.exports,mt={exports:{}};(function(f){(function(l,s,i){var p=256,m=6,v=52,o="random",e=i.pow(p,m),n=i.pow(2,v),u=n*2,t=p-1,r;function a(y,b,P){var S=[];b=b==!0?{entropy:!0}:b||{};var E=R(L(b.entropy?[y,N(s)]:y??j(),3),S),A=new c(S),D=function(){for(var M=A.g(m),T=e,z=0;M<n;)M=(M+z)*p,T*=p,z=A.g(1);for(;M>=u;)M/=2,T/=2,z>>>=1;return(M+z)/T};return D.int32=function(){return A.g(4)|0},D.quick=function(){return A.g(4)/4294967296},D.double=D,R(N(A.S),s),(b.pass||P||function(M,T,z,U){return U&&(U.S&&k(U,A),M.state=function(){return k(A,{})}),z?(i[o]=M,T):M})(D,E,"global"in b?b.global:this==i,b.state)}function c(y){var b,P=y.length,S=this,E=0,A=S.i=S.j=0,D=S.S=[];for(P||(y=[P++]);E<p;)D[E]=E++;for(E=0;E<p;E++)D[E]=D[A=t&A+y[E%P]+(b=D[E])],D[A]=b;(S.g=function(M){for(var T,z=0,U=S.i,V=S.j,B=S.S;M--;)T=B[U=t&U+1],z=z*p+B[t&(B[U]=B[V=t&V+T])+(B[V]=T)];return S.i=U,S.j=V,z})(p)}function k(y,b){return b.i=y.i,b.j=y.j,b.S=y.S.slice(),b}function L(y,b){var P=[],S=typeof y,E;if(b&&S=="object")for(E in y)try{P.push(L(y[E],b-1))}catch{}return P.length?P:S=="string"?y:y+"\0"}function R(y,b){for(var P=y+"",S,E=0;E<P.length;)b[t&E]=t&(S^=b[t&E]*19)+P.charCodeAt(E++);return N(b)}function j(){try{var y;return r&&(y=r.randomBytes)?y=y(p):(y=new Uint8Array(p),(l.crypto||l.msCrypto).getRandomValues(y)),N(y)}catch{var b=l.navigator,P=b&&b.plugins;return[+new Date,l,P,l.screen,N(s)]}}function N(y){return String.fromCharCode.apply(0,y)}if(R(i.random(),s),f.exports){f.exports=a;try{r=Et}catch{}}else i["seed"+o]=a})(typeof self<"u"?self:Z,[],Math)})(mt);var jt=mt.exports,Ut=Gt,Vt=Nt,$t=Lt,Wt=Rt,Xt=zt,qt=Ot,le=jt;le.alea=Ut;le.xor128=Vt;le.xorwow=$t;le.xorshift7=Wt;le.xor4096=Xt;le.tychei=qt;var Ft=le,Yt=Z&&Z.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(je,"__esModule",{value:!0});var wt=je.AvatarGenerator=void 0,dt=Yt(Ft),Qt=function(){function f(){}return f.prototype.generateRandomAvatar=function(l){var s=new Array;s.push("NoHair","Eyepatch","Hat","Hijab","Turban","WinterHat1","WinterHat2","WinterHat3","WinterHat4","LongHairBigHair","LongHairBob","LongHairBun","LongHairCurly","LongHairCurvy","LongHairDreads","LongHairFrida","LongHairFro","LongHairFroBand","LongHairNotTooLong","LongHairShavedSides","LongHairMiaWallace","LongHairStraight","LongHairStraight2","LongHairStraightStrand","ShortHairDreads01","ShortHairDreads02","ShortHairFrizzle","ShortHairShaggyMullet","ShortHairShortCurly","ShortHairShortFlat","ShortHairShortRound","ShortHairShortWaved","ShortHairSides","ShortHairTheCaesar","ShortHairTheCaesarSidePart");var i=new Array;i.push("Blank","Kurt","Prescription01","Prescription02","Round","Sunglasses","Wayfarers");var p=new Array;p.push("Blank","BeardMedium","BeardLight","BeardMagestic","MoustacheFancy","MoustacheMagnum");var m=new Array;m.push("Auburn","Black","Blonde","BlondeGolden","Brown","BrownDark","Platinum","Red");var v=new Array;v.push("BlazerShirt","BlazerSweater","CollarSweater","GraphicShirt","Hoodie","Overall","ShirtCrewNeck","ShirtScoopNeck","ShirtVNeck");var o=new Array;o.push("Close","Cry","Default","Dizzy","EyeRoll","Happy","Hearts","Side","Squint","Surprised","Wink","WinkWacky");var e=new Array;e.push("Angry","AngryNatural","Default","DefaultNatural","FlatNatural","RaisedExcited","RaisedExcitedNatural","SadConcerned","SadConcernedNatural","UnibrowNatural","UpDown","UpDownNatural");var n=new Array;n.push("Concerned","Default","Disbelief","Eating","Grimace","Sad","ScreamOpen","Serious","Smile","Tongue","Twinkle","Vomit");var u=new Array;u.push("Tanned","Yellow","Pale","Light","Brown","DarkBrown","Black");var t=new Array;t.push("Auburn","Black","Blonde","BlondeGolden","Brown","BrownDark","PastelPink","Platinum","Red","SilverGray");var r=new Array;r.push("Black","Blue01","Blue02","Blue03","Gray01","Gray02","Heather","PastelBlue","PastelGreen","PastelOrange","PastelRed","PastelYellow","Pink","Red","White");var a=new Array;a.push("Black","Blue01","Blue02","Blue03","Gray01","Gray02","Heather","PastelBlue","PastelGreen","PastelOrange","PastelRed","PastelYellow","Pink","Red","White");var c=l?dt.default(l):dt.default();return"https://avataaars.io/?accessoriesType="+i[Math.floor(c()*i.length)]+"&avatarStyle=Circle&clotheColor="+a[Math.floor(c()*a.length)]+"&clotheType="+v[Math.floor(c()*v.length)]+"&eyeType="+o[Math.floor(c()*o.length)]+"&eyebrowType="+e[Math.floor(c()*e.length)]+"&facialHairColor="+m[Math.floor(c()*m.length)]+"&facialHairType="+p[Math.floor(c()*p.length)]+"&hairColor="+t[Math.floor(c()*t.length)]+"&hatColor="+r[Math.floor(c()*r.length)]+"&mouthType="+n[Math.floor(c()*n.length)]+"&skinColor="+u[Math.floor(c()*u.length)]+"&topType="+s[Math.floor(c()*s.length)]},f}();wt=je.AvatarGenerator=Qt;function Kt(f){let l,s;return l=new Mt({}),{c(){Le(l.$$.fragment)},l(i){Re(l.$$.fragment,i)},m(i,p){ze(l,i,p),s=!0},p:xe,i(i){s||(ie(l.$$.fragment,i),s=!0)},o(i){oe(l.$$.fragment,i),s=!1},d(i){Oe(l,i)}}}function Jt(f){let l,s,i,p,m,v,o,e,n,u,t,r,a,c,k,L,R,j,N,y,b,P,S,E,A,D,M,T,z,U,V,B,se,be,ke,Ae,Se,q,Ce,F,He,Y,Ee,Be,Te,Q,ue,te,De,Pe,ye,Me,ce,re,Ie,ne,Ge,Fe,O=f[8]&&ht(f);const Ye=[er,Zt],ee=[];function Qe(h,C){return h[4]?0:1}a=Qe(f),c=ee[a]=Ye[a](f);function Ke(h,C){return h[7]?rr:tr}let ge=Ke(f),X=ge(f);return{c(){l=w("div"),O&&O.c(),s=I(),i=w("div"),p=w("span"),m=K("Your Profile"),v=I(),o=w("div"),e=w("div"),n=w("h1"),u=K(f[5]),t=I(),r=w("button"),c.c(),k=I(),L=w("input"),R=I(),j=w("div"),N=w("div"),y=w("label"),b=K("✕"),P=I(),S=w("h3"),E=K("Your wallet Address QR Code!"),A=I(),D=w("div"),X.c(),M=I(),T=w("button"),z=K("Edit"),U=I(),V=w("div"),B=w("div"),se=w("h1"),be=K("Edit you profile"),ke=I(),Ae=w("br"),Se=I(),q=w("input"),Ce=I(),F=w("input"),He=I(),Y=w("input"),Ee=I(),Be=w("br"),Te=I(),Q=w("div"),ue=w("div"),te=w("button"),De=K("CANCEL"),Pe=I(),ye=w("div"),Me=I(),ce=w("div"),re=w("button"),Ie=K("Save"),this.h()},l(h){l=_(h,"DIV",{class:!0});var C=H(l);O&&O.l(C),s=G(C),i=_(C,"DIV",{class:!0});var fe=H(i);p=_(fe,"SPAN",{class:!0});var Je=H(p);m=J(Je,"Your Profile"),Je.forEach(g),fe.forEach(g),C.forEach(g),v=G(h),o=_(h,"DIV",{class:!0});var pe=H(o);e=_(pe,"DIV",{class:!0});var me=H(e);n=_(me,"H1",{class:!0});var Ze=H(n);u=J(Ze,f[5]),Ze.forEach(g),t=G(me),r=_(me,"BUTTON",{class:!0});var et=H(r);c.l(et),et.forEach(g),me.forEach(g),k=G(pe),L=_(pe,"INPUT",{type:!0,id:!0,class:!0}),R=G(pe),j=_(pe,"DIV",{class:!0});var tt=H(j);N=_(tt,"DIV",{class:!0});var de=H(N);y=_(de,"LABEL",{for:!0,class:!0});var rt=H(y);b=J(rt,"✕"),rt.forEach(g),P=G(de),S=_(de,"H3",{class:!0});var nt=H(S);E=J(nt,"Your wallet Address QR Code!"),nt.forEach(g),A=G(de),D=_(de,"DIV",{class:!0});var at=H(D);X.l(at),at.forEach(g),de.forEach(g),tt.forEach(g),pe.forEach(g),M=G(h),T=_(h,"BUTTON",{class:!0});var ot=H(T);z=J(ot,"Edit"),ot.forEach(g),U=G(h),V=_(h,"DIV",{class:!0});var it=H(V);B=_(it,"DIV",{class:!0});var $=H(B);se=_($,"H1",{class:!0});var lt=H(se);be=J(lt,"Edit you profile"),lt.forEach(g),ke=G($),Ae=_($,"BR",{}),Se=G($),q=_($,"INPUT",{type:!0,class:!0,placeholder:!0}),Ce=G($),F=_($,"INPUT",{type:!0,class:!0,placeholder:!0}),He=G($),Y=_($,"INPUT",{type:!0,class:!0,placeholder:!0}),Ee=G($),Be=_($,"BR",{}),Te=G($),Q=_($,"DIV",{class:!0});var he=H(Q);ue=_(he,"DIV",{class:!0});var st=H(ue);te=_(st,"BUTTON",{class:!0});var ut=H(te);De=J(ut,"CANCEL"),ut.forEach(g),st.forEach(g),Pe=G(he),ye=_(he,"DIV",{class:!0}),H(ye).forEach(g),Me=G(he),ce=_(he,"DIV",{class:!0});var ct=H(ce);re=_(ct,"BUTTON",{class:!0});var ft=H(re);Ie=J(ft,"Save"),ft.forEach(g),ct.forEach(g),he.forEach(g),$.forEach(g),it.forEach(g),this.h()},h(){x(p,"class","text-4xl text-center"),x(i,"class","flex justify-center"),x(l,"class","flex flex-col justify-evenly items-center mb-4 dark:bg-gray-900 dark:text-white"),x(n,"class","font-bold text-sm text-black dark:text-white"),x(r,"class","ml-1 px-4 py-2 rounded-lg w-auto h-auto text-white content-around dark:bg-gray-500"),we(r,"bg-gray-900",f[4]),x(e,"class","flex items-center mb-4"),x(L,"type","checkbox"),x(L,"id","my-modal-3"),x(L,"class","modal-toggle"),x(y,"for","my-modal-3"),x(y,"class","btn btn-sm btn-circle absolute right-2 top-2"),x(S,"class","text-lg font-bold"),x(D,"class","py-4 ml-24"),x(N,"class","modal-box relative dark:bg-gray-800 dark:text-gray-100"),x(j,"class","modal"),x(o,"class","flex flex-col items-center bg-white dark:bg-gray-900"),x(T,"class","btn w-full h-full mt-5"),x(se,"class","text-xl text-left mb-2"),x(q,"type","text"),x(q,"class","input input-bordered input-success dark:bg-gray-900 dark:text-white dark:border-zinc-600 input-md w-full max-w-xs my-2"),x(q,"placeholder","Enter your name"),x(F,"type","text"),x(F,"class","input input-bordered input-success dark:bg-gray-900 dark:text-white dark:border-zinc-600 input-md w-full max-w-xs my-2"),x(F,"placeholder","What's your country?"),x(Y,"type","url"),x(Y,"class","input input-bordered input-success dark:bg-gray-900 dark:text-white dark:border-zinc-600 input-md w-full max-w-xs my-2"),x(Y,"placeholder","Enter your profile pic url"),x(te,"class","btn mt-10"),x(ue,"class","grid flex-grow"),x(ye,"class","divider divider-horizontal"),x(re,"class","btn mt-10"),x(ce,"class","grid flex-grow"),x(Q,"class","flex w-full mt-2"),x(B,"class","modal-box dark:bg-gray-800 dark:text-white"),x(V,"class","modal"),we(V,"modal-open",f[0])},m(h,C){W(h,l,C),O&&O.m(l,null),d(l,s),d(l,i),d(i,p),d(p,m),W(h,v,C),W(h,o,C),d(o,e),d(e,n),d(n,u),d(e,t),d(e,r),ee[a].m(r,null),d(o,k),d(o,L),d(o,R),d(o,j),d(j,N),d(N,y),d(y,b),d(N,P),d(N,S),d(S,E),d(N,A),d(N,D),X.m(D,null),W(h,M,C),W(h,T,C),d(T,z),W(h,U,C),W(h,V,C),d(V,B),d(B,se),d(se,be),d(B,ke),d(B,Ae),d(B,Se),d(B,q),ve(q,f[1]),d(B,Ce),d(B,F),ve(F,f[2]),d(B,He),d(B,Y),ve(Y,f[3]),d(B,Ee),d(B,Be),d(B,Te),d(B,Q),d(Q,ue),d(ue,te),d(te,De),d(Q,Pe),d(Q,ye),d(Q,Me),d(Q,ce),d(ce,re),d(re,Ie),ne=!0,Ge||(Fe=[ae(r,"click",f[9]),ae(T,"click",f[11]),ae(q,"input",f[12]),ae(F,"input",f[13]),ae(Y,"input",f[14]),ae(te,"click",f[15]),ae(re,"click",f[10])],Ge=!0)},p(h,C){h[8]?O?O.p(h,C):(O=ht(h),O.c(),O.m(l,s)):O&&(O.d(1),O=null),(!ne||C&32)&&St(u,h[5]);let fe=a;a=Qe(h),a===fe?ee[a].p(h,C):(xt(),oe(ee[fe],1,1,()=>{ee[fe]=null}),vt(),c=ee[a],c?c.p(h,C):(c=ee[a]=Ye[a](h),c.c()),ie(c,1),c.m(r,null)),(!ne||C&16)&&we(r,"bg-gray-900",h[4]),ge===(ge=Ke(h))&&X?X.p(h,C):(X.d(1),X=ge(h),X&&(X.c(),X.m(D,null))),C&2&&q.value!==h[1]&&ve(q,h[1]),C&4&&F.value!==h[2]&&ve(F,h[2]),C&8&&Y.value!==h[3]&&ve(Y,h[3]),(!ne||C&1)&&we(V,"modal-open",h[0])},i(h){ne||(ie(c),ne=!0)},o(h){oe(c),ne=!1},d(h){h&&g(l),O&&O.d(),h&&g(v),h&&g(o),ee[a].d(),X.d(),h&&g(M),h&&g(T),h&&g(U),h&&g(V),Ge=!1,Ct(Fe)}}}function ht(f){let l,s;return{c(){l=w("img"),this.h()},l(i){l=_(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){_e(l.src,s=f[8])||x(l,"src",s),x(l,"alt","MATIC token"),x(l,"class","w-28 flex items-center mx-2 mb-4")},m(i,p){W(i,l,p)},p(i,p){p&256&&!_e(l.src,s=i[8])&&x(l,"src",s)},d(i){i&&g(l)}}}function Zt(f){let l,s;return l=new Dt({props:{src:Pt}}),{c(){Le(l.$$.fragment)},l(i){Re(l.$$.fragment,i)},m(i,p){ze(l,i,p),s=!0},p:xe,i(i){s||(ie(l.$$.fragment,i),s=!0)},o(i){oe(l.$$.fragment,i),s=!1},d(i){Oe(l,i)}}}function er(f){let l;return{c(){l=K("COPIED")},l(s){l=J(s,"COPIED")},m(s,i){W(s,l,i)},p:xe,i:xe,o:xe,d(s){s&&g(l)}}}function tr(f){let l,s;return{c(){l=w("p"),s=K("Generating QR code...")},l(i){l=_(i,"P",{});var p=H(l);s=J(p,"Generating QR code..."),p.forEach(g)},m(i,p){W(i,l,p),d(l,s)},p:xe,d(i){i&&g(l)}}}function rr(f){let l,s;return{c(){l=w("img"),this.h()},l(i){l=_(i,"IMG",{src:!0,alt:!0}),this.h()},h(){_e(l.src,s=f[7])||x(l,"src",s),x(l,"alt","QR Code")},m(i,p){W(i,l,p)},p(i,p){p&128&&!_e(l.src,s=i[7])&&x(l,"src",s)},d(i){i&&g(l)}}}function nr(f){let l,s,i,p,m,v,o,e,n;s=new Ht({});const u=[Jt,Kt],t=[];function r(a,c){return a[6]?0:1}return o=r(f),e=t[o]=u[o](f),{c(){l=w("div"),Le(s.$$.fragment),i=I(),p=w("br"),m=I(),v=w("div"),e.c(),this.h()},l(a){l=_(a,"DIV",{class:!0});var c=H(l);Re(s.$$.fragment,c),i=G(c),p=_(c,"BR",{}),m=G(c),v=_(c,"DIV",{class:!0});var k=H(v);e.l(k),k.forEach(g),c.forEach(g),this.h()},h(){x(v,"class","w-auto rounded-lg shadow-xl p-5"),x(l,"class","bg-white text-black dark:bg-gray-900 dark:text-white")},m(a,c){W(a,l,c),ze(s,l,null),d(l,i),d(l,p),d(l,m),d(l,v),t[o].m(v,null),n=!0},p(a,[c]){let k=o;o=r(a),o===k?t[o].p(a,c):(xt(),oe(t[k],1,1,()=>{t[k]=null}),vt(),e=t[o],e?e.p(a,c):(e=t[o]=u[o](a),e.c()),ie(e,1),e.m(v,null))},i(a){n||(ie(s.$$.fragment,a),ie(e),n=!0)},o(a){oe(s.$$.fragment,a),oe(e),n=!1},d(a){a&&g(l),Oe(s),t[o].d()}}}function ar(f,l,s){let i,p,m;Ne(f,Tt,A=>s(21,i=A)),Ne(f,yt,A=>s(22,p=A)),Ne(f,pt,A=>s(8,m=A));let v=!1,o="",e="",n="",u=!1,t,r,a="...",c=!0,k="",L="";const R=()=>{if(m!=="")return;const A=new wt;pt.set(A.generateRandomAvatar(i))},j=()=>{navigator.clipboard.writeText(i),s(4,u=!0)},N=async()=>{try{let A=o.trim(),D=e.trim(),M=n.trim(),T=new Headers;T.append("Authorization",p),T.append("Content-Type","application/json");let z=JSON.stringify({name:A,country:D,profilePictureUrl:M});(await fetch(`${gt}/profile`,{method:"PATCH",headers:T,body:z})).status!==200&&(r="Failed to update the profile")}catch(A){console.error(A)}};At(async()=>{[t,r]=await It(),r?k=i:k=t.payload.walletAddress,s(5,a=`${k.substring(0,5)}...${k.substring(k.length-4)}`),R(),t.payload.roles,s(6,[c]=await Bt(),c)});const y=()=>s(0,v=!0);function b(){o=this.value,s(1,o)}function P(){e=this.value,s(2,e)}function S(){n=this.value,s(3,n)}return[v,o,e,n,u,a,c,L,m,j,N,y,b,P,S,()=>s(0,v=!1)]}class fr extends _t{constructor(l){super(),bt(this,l,ar,nr,kt,{})}}export{fr as component};
