(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{10221:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,65356,23)),Promise.resolve().then(n.t.bind(n,30347,23)),Promise.resolve().then(n.bind(n,30503))},30503:(e,t,n)=>{"use strict";n.d(t,{Providers:()=>x});var r=n(95155),a=n(84725),o=n(76437),i=n(90872),l=n(12115);n(47650);let s=l.createContext(null);function c(e){let{children:t}=e,n=(0,l.useContext)(s),[r,a]=(0,l.useState)(0),o=(0,l.useMemo)(()=>({parent:n,modalCount:r,addModal(){a(e=>e+1),n&&n.addModal()},removeModal(){a(e=>e-1),n&&n.removeModal()}}),[n,r]);return l.createElement(s.Provider,{value:o},t)}function d(e){let t;let{modalProviderProps:n}={modalProviderProps:{"aria-hidden":!!(t=(0,l.useContext)(s))&&t.modalCount>0||void 0}};return l.createElement("div",{"data-overlay-container":!0,...e,...n})}function u(e){return l.createElement(c,null,l.createElement(d,e))}var f=n(93903),m=n(27249),h=n(39970),g=n(99234);function p(e){let{children:t,isValidProp:n,...a}=e;n&&(0,h.D)(n),(a={...(0,l.useContext)(m.Q),...a}).isStatic=(0,g.M)(()=>a.isStatic);let o=(0,l.useMemo)(()=>a,[JSON.stringify(a.transition),a.transformPagePoint,a.reducedMotion]);return(0,r.jsx)(m.Q.Provider,{value:o,children:t})}var v=e=>{let{children:t,navigate:n,disableAnimation:s,useHref:c,disableRipple:d=!1,skipFramerMotionAnimations:m=s,reducedMotion:h="never",validationBehavior:g,locale:v="en-US",defaultDates:b,createCalendar:x,...w}=e,y=t;n&&(y=(0,r.jsx)(i.pg,{navigate:n,useHref:c,children:y}));let S=(0,l.useMemo)(()=>(s&&m&&(f.W.skipAnimations=!0),{createCalendar:x,defaultDates:b,disableAnimation:s,disableRipple:d,validationBehavior:g}),[x,null==b?void 0:b.maxDate,null==b?void 0:b.minDate,s,d,g]);return(0,r.jsx)(a.n,{value:S,children:(0,r.jsx)(o.C,{locale:v,children:(0,r.jsx)(p,{reducedMotion:h,children:(0,r.jsx)(u,{...w,children:y})})})})},b=n(17146);function x(e){let{children:t}=e;return(0,r.jsx)(v,{children:(0,r.jsx)(b.O,{children:t})})}},17146:(e,t,n)=>{"use strict";n.d(t,{A:()=>c,O:()=>s});var r=n(95155),a=n(12115),o=n(14565),i=n(44595);let l=(0,a.createContext)({user:null,loading:!0,signInWithGoogle:async()=>{},logout:async()=>{}});function s(e){let{children:t}=e,[n,s]=(0,a.useState)(null),[c,d]=(0,a.useState)(!0);(0,a.useEffect)(()=>i.j2.onAuthStateChanged(e=>{s(e),d(!1)}),[]);let u=async()=>{try{await (0,o.df)(i.j2,i.hJ)}catch(e){console.error("Error signing in with Google:",e)}},f=async()=>{try{await (0,o.CI)(i.j2)}catch(e){console.error("Error signing out:",e)}};return(0,r.jsx)(l.Provider,{value:{user:n,loading:c,signInWithGoogle:u,logout:f},children:!c&&t})}let c=()=>(0,a.useContext)(l)},44595:(e,t,n)=>{"use strict";n.d(t,{db:()=>c,hJ:()=>d,j2:()=>s});var r=n(49904),a=n(14565),o=n(27058);let i={apiKey:"AIzaSyDUVTA4ru-i5IW3iCVFUIn2i8dTB2Nbfno",authDomain:"testimonials-ea2a5.firebaseapp.com",projectId:"testimonials-ea2a5",storageBucket:"testimonials-ea2a5.firebasestorage.app",messagingSenderId:"776348387738",appId:"1:776348387738:web:3ae288121c71c7f7ae9223"};console.log("Initializing Firebase with config:",{projectId:i.projectId,authDomain:i.authDomain});let l=(0,r.Wp)(i),s=(0,a.xI)(l),c=(0,o.aU)(l),d=new a.HF;(0,o.ol)(c).catch(e=>{"failed-precondition"===e.code?console.error("Multiple tabs open, persistence can only be enabled in one tab at a time."):"unimplemented"===e.code&&console.error("The current browser doesn't support persistence.")})},30347:()=>{},65356:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}},76437:(e,t,n)=>{"use strict";n.d(t,{C:()=>g,Y:()=>p});let r=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),a=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function o(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize(),n="function"==typeof t.getTextInfo?t.getTextInfo():t.textInfo;if(n)return"rtl"===n.direction;if(t.script)return r.has(t.script)}let t=e.split("-")[0];return a.has(t)}var i=n(12115),l=n(71632);let s=Symbol.for("react-aria.i18n.locale");function c(){let e="undefined"!=typeof window&&window[s]||"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch{e="en-US"}return{locale:e,direction:o(e)?"rtl":"ltr"}}let d=c(),u=new Set;function f(){for(let e of(d=c(),u))e(d)}function m(){let e=(0,l.wR)(),[t,n]=(0,i.useState)(d);return((0,i.useEffect)(()=>(0===u.size&&window.addEventListener("languagechange",f),u.add(n),()=>{u.delete(n),0===u.size&&window.removeEventListener("languagechange",f)}),[]),e)?{locale:"en-US",direction:"ltr"}:t}let h=i.createContext(null);function g(e){let{locale:t,children:n}=e,r=m(),a=i.useMemo(()=>t?{locale:t,direction:o(t)?"rtl":"ltr"}:r,[r,t]);return i.createElement(h.Provider,{value:a},n)}function p(){let e=m();return(0,i.useContext)(h)||e}}},e=>{var t=t=>e(e.s=t);e.O(0,[897,690,992,895,13,861,441,517,358],()=>t(10221)),_N_E=e.O()}]);