import{S as g,i as q,s as z,D as B,k as d,r as O,a as U,l as _,m as h,u as P,h as e,c as T,p as E,b as k,E as c,F as C,G,H,g as J,d as M,I as N,n as R,J as K,v as Q}from"../chunks/index.7df24d5a.js";import{a as W,e as X}from"../chunks/forms.9938c00b.js";import{p as Y,c as ee}from"../chunks/pocketbase.b37ce63f.js";function te(D){let t,s,f,v,n,u,r;return{c(){t=d("li"),s=d("a"),f=O("Přihlásit se"),v=U(),n=d("li"),u=d("a"),r=O("Zaregistrovat"),this.h()},l(a){t=_(a,"LI",{});var m=h(t);s=_(m,"A",{href:!0});var L=h(s);f=P(L,"Přihlásit se"),L.forEach(e),m.forEach(e),v=T(a),n=_(a,"LI",{});var p=h(n);u=_(p,"A",{href:!0});var b=h(u);r=P(b,"Zaregistrovat"),b.forEach(e),p.forEach(e),this.h()},h(){E(s,"href","/login"),E(u,"href","/register")},m(a,m){k(a,t,m),c(t,s),c(s,f),k(a,v,m),k(a,n,m),c(n,u),c(u,r)},p:R,d(a){a&&e(t),a&&e(v),a&&e(n)}}}function ae(D){let t,s,f=D[0].email+"",v,n,u,r,a,m,L,p,b,V,x,I;return{c(){t=d("li"),s=d("a"),v=O(f),n=U(),u=d("li"),r=d("form"),a=d("button"),m=O("Odhlásit se"),L=U(),p=d("li"),b=d("a"),V=O("Dashboard"),this.h()},l(o){t=_(o,"LI",{});var l=h(t);s=_(l,"A",{href:!0});var i=h(s);v=P(i,f),i.forEach(e),l.forEach(e),n=T(o),u=_(o,"LI",{});var y=h(u);r=_(y,"FORM",{method:!0,action:!0});var $=h(r);a=_($,"BUTTON",{});var A=h(a);m=P(A,"Odhlásit se"),A.forEach(e),$.forEach(e),y.forEach(e),L=T(o),p=_(o,"LI",{});var w=h(p);b=_(w,"A",{href:!0});var S=h(b);V=P(S,"Dashboard"),S.forEach(e),w.forEach(e),this.h()},h(){E(s,"href","/"),E(r,"method","POST"),E(r,"action","/logout"),E(b,"href","/dashboard")},m(o,l){k(o,t,l),c(t,s),c(s,v),k(o,n,l),k(o,u,l),c(u,r),c(r,a),c(a,m),k(o,L,l),k(o,p,l),c(p,b),c(b,V),x||(I=K(X.call(null,r,D[3])),x=!0)},p(o,l){l&1&&f!==(f=o[0].email+"")&&Q(v,f)},d(o){o&&e(t),o&&e(n),o&&e(u),o&&e(L),o&&e(p),x=!1,I()}}}function le(D){let t,s,f,v,n,u,r,a,m,L,p,b;function V(i,y){return i[0]?ae:te}let x=V(D),I=x(D);const o=D[2].default,l=B(o,D,D[1],null);return{c(){t=d("div"),s=d("div"),f=d("div"),v=d("div"),n=d("a"),u=O("Project scout"),r=U(),a=d("div"),m=d("ul"),I.c(),L=U(),p=d("div"),l&&l.c(),this.h()},l(i){t=_(i,"DIV",{class:!0});var y=h(t);s=_(y,"DIV",{class:!0});var $=h(s);f=_($,"DIV",{class:!0});var A=h(f);v=_(A,"DIV",{class:!0});var w=h(v);n=_(w,"A",{href:!0,class:!0});var S=h(n);u=P(S,"Project scout"),S.forEach(e),w.forEach(e),r=T(A),a=_(A,"DIV",{class:!0});var j=h(a);m=_(j,"UL",{class:!0});var F=h(m);I.l(F),F.forEach(e),j.forEach(e),A.forEach(e),$.forEach(e),L=T(y),p=_(y,"DIV",{class:!0});var Z=h(p);l&&l.l(Z),Z.forEach(e),y.forEach(e),this.h()},h(){E(n,"href","/"),E(n,"class","btn btn-ghost text-xl font-bold text-indigo-500"),E(v,"class","flex-1"),E(m,"class","menu menu-horizontal px-1"),E(a,"class","flex-none"),E(f,"class","navbar bg-base-200 rounded-lg shadow-xl max-w-full "),E(s,"class","px-8 py-8 "),E(p,"class","max-w-full mx-auto px-8"),E(t,"class","min-h-screen")},m(i,y){k(i,t,y),c(t,s),c(s,f),c(f,v),c(v,n),c(n,u),c(f,r),c(f,a),c(a,m),I.m(m,null),c(t,L),c(t,p),l&&l.m(p,null),b=!0},p(i,[y]){x===(x=V(i))&&I?I.p(i,y):(I.d(1),I=x(i),I&&(I.c(),I.m(m,null))),l&&l.p&&(!b||y&2)&&C(l,o,i,i[1],b?H(o,i[1],y,null):G(i[1]),null)},i(i){b||(J(l,i),b=!0)},o(i){M(l,i),b=!1},d(i){i&&e(t),I.d(),l&&l.d(i)}}}function se(D,t,s){let f;N(D,ee,r=>s(0,f=r));let{$$slots:v={},$$scope:n}=t;const u=()=>async({result:r})=>{Y.authStore.clear(),await W(r)};return D.$$set=r=>{"$$scope"in r&&s(1,n=r.$$scope)},[f,n,v,u]}class ne extends g{constructor(t){super(),q(this,t,se,le,z,{})}}export{ne as default};
