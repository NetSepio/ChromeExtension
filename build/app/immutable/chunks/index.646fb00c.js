function v(){}const ot=t=>t;function ct(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function I(){return Object.create(null)}function k(t){t.forEach(J)}function z(t){return typeof t=="function"}function Rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function zt(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function ut(t){return Object.keys(t).length===0}function lt(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Bt(t,e,n){t.$$.on_destroy.push(lt(e,n))}function Tt(t,e,n,i){if(t){const r=K(t,e,n,i);return t[0](r)}}function K(t,e,n,i){return t[1]&&i?ct(n.ctx.slice(),t[1](i(e))):n.ctx}function Ft(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function It(t,e,n,i,r,u){if(r){const s=K(e,n,i,u);t.p(s,r)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const Q=typeof window<"u";let at=Q?()=>window.performance.now():()=>Date.now(),B=Q?t=>requestAnimationFrame(t):v;const b=new Set;function U(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&B(U)}function ft(t){let e;return b.size===0&&B(U),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let q=!1;function _t(){q=!0}function dt(){q=!1}function ht(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const c=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:ht(1,r,_=>e[n[_]].claim_order,c))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const u=[],s=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);l>=o;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);u.reverse(),s.sort((o,c)=>o.claim_order-c.claim_order);for(let o=0,c=0;o<s.length;o++){for(;c<u.length&&s[o].claim_order>=u[c].claim_order;)c++;const f=c<u.length?u[c]:null;t.insertBefore(s[o],f)}}function pt(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=Y("style");return gt(V(t),e),e.sheet}function gt(t,e){return pt(t.head||t,e),e.sheet}function xt(t,e){if(q){for(mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Wt(t,e,n){q&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function Gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function $t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function Jt(){return T(" ")}function Kt(){return T("")}function Qt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Vt(t){return t===""?null:+t}function bt(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,i,r=!1){wt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function tt(t,e,n,i){return Z(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||u.push(l.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Xt(t,e,n){return tt(t,e,n,Y)}function Yt(t,e,n){return tt(t,e,n,$t)}function vt(t,e){return Z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>T(e),!0)}function Zt(t){return vt(t," ")}function te(t,e){e=""+e,t.data!==e&&(t.data=e)}function ee(t,e){t.value=e??""}function ne(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ie(t,e,n){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function re(t){const e=t.querySelector(":checked");return e&&e.__value}function se(t,e,n){t.classList[n?"add":"remove"](e)}function Et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function oe(t,e){return new t(e)}const j=new Map;let M=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:yt(e),rules:{}};return j.set(t,n),n}function kt(t,e,n,i,r,u,s,l=0){const o=16.666/i;let c=`{
`;for(let m=0;m<=1;m+=o){const g=e+(n-e)*u(m);c+=m*100+`%{${s(g,1-g)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Nt(f)}_${l}`,_=V(t),{stylesheet:d,rules:h}=j.get(_)||St(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function H(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||At())}function At(){B(()=>{M||(j.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&X(e)}),j.clear())})}let S;function N(t){S=t}function et(){if(!S)throw new Error("Function called outside component initialization");return S}function ce(t){et().$$.on_mount.push(t)}function ue(t){et().$$.after_update.push(t)}const $=[],W=[];let w=[];const L=[],nt=Promise.resolve();let R=!1;function it(){R||(R=!0,nt.then(rt))}function le(){return it(),nt}function O(t){w.push(t)}function ae(t){L.push(t)}const D=new Set;let x=0;function rt(){if(x!==0)return;const t=S;do{try{for(;x<$.length;){const e=$[x];x++,N(e),Ct(e.$$)}}catch(e){throw $.length=0,x=0,e}for(N(null),$.length=0,x=0;W.length;)W.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];D.has(n)||(D.add(n),n())}w.length=0}while($.length);for(;L.length;)L.pop()();R=!1,D.clear(),N(t)}function Ct(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}function jt(t){const e=[],n=[];w.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),w=e}let E;function Mt(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function G(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const C=new Set;let p;function fe(){p={r:0,c:[],p}}function _e(){p.r||k(p.c),p=p.p}function Ot(t,e){t&&t.i&&(C.delete(t),t.i(e))}function de(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),p.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const qt={duration:0};function he(t,e,n){const i={direction:"in"};let r=e(t,n,i),u=!1,s,l,o=0;function c(){s&&H(t,s)}function f(){const{delay:_=0,duration:d=300,easing:h=ot,tick:y=v,css:m}=r||qt;m&&(s=kt(t,0,1,d,_,h,m,o++)),y(0,1);const g=at()+_,st=g+d;l&&l.abort(),u=!0,O(()=>G(t,!0,"start")),l=ft(P=>{if(u){if(P>=st)return y(1,0),G(t,!0,"end"),c(),u=!1;if(P>=g){const F=h((P-g)/d);y(F,1-F)}}return u})}let a=!1;return{start(){a||(a=!0,H(t),z(r)?(r=r(i),Mt().then(f)):f())},invalidate(){a=!1},end(){u&&(c(),u=!1)}}}function me(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function pe(t){t&&t.c()}function ye(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||O(()=>{const s=t.$$.on_mount.map(J).filter(z);t.$$.on_destroy?t.$$.on_destroy.push(...s):k(s),t.$$.on_mount=[]}),u.forEach(O)}function Dt(t,e){const n=t.$$;n.fragment!==null&&(jt(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&($.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ge(t,e,n,i,r,u,s,l=[-1]){const o=S;N(t);const c=t.$$={fragment:null,ctx:[],props:u,update:v,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:I(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return c.ctx&&r(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),f&&Lt(t,a)),_}):[],c.update(),f=!0,k(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){_t();const a=bt(e.target);c.fragment&&c.fragment.l(a),a.forEach(X)}else c.fragment&&c.fragment.c();e.intro&&Ot(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),dt(),rt()}N(o)}class xe{$destroy(){Dt(this,1),this.$destroy=v}$on(e,n){if(!z(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Pt as A,Dt as B,Tt as C,It as D,Ht as E,Ft as F,xt as G,v as H,Bt as I,Gt as J,Qt as K,se as L,zt as M,ee as N,k as O,$t as P,Yt as Q,O as R,xe as S,he as T,me as U,ae as V,re as W,ie as X,Vt as Y,ot as Z,Jt as a,Wt as b,Zt as c,de as d,Kt as e,_e as f,Ot as g,X as h,ge as i,ue as j,Y as k,Xt as l,bt as m,Ut as n,ce as o,ne as p,T as q,vt as r,Rt as s,le as t,te as u,fe as v,W as w,oe as x,pe as y,ye as z};
