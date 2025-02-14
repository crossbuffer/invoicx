(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{99495:(e,a,r)=>{Promise.resolve().then(r.bind(r,27527))},76046:(e,a,r)=>{"use strict";var s=r(66658);r.o(s,"useRouter")&&r.d(a,{useRouter:function(){return s.useRouter}})},27527:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>u});var s=r(95155),t=r(12115),o=r(76046),l=r(17281),i=r(77803),n=r(94936),d=r(17146);function u(){let{user:e,signInWithGoogle:a}=(0,d.A)(),r=(0,o.useRouter)();return(0,t.useEffect)(()=>{e&&r.push("/invoice")},[e,r]),(0,s.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100",children:(0,s.jsx)(l.Z,{className:"w-full max-w-md",children:(0,s.jsxs)(i.U,{className:"flex flex-col items-center gap-6 p-8",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",children:"Welcome to QuickInvoice"}),(0,s.jsx)("p",{className:"text-gray-600 text-center",children:"Sign in with your Google account to create and manage invoices."}),(0,s.jsx)(n.T,{color:"primary",size:"lg",onPress:a,className:"w-full",children:"Sign in with Google"})]})})})}},17146:(e,a,r)=>{"use strict";r.d(a,{A:()=>d,O:()=>n});var s=r(95155),t=r(12115),o=r(14565),l=r(44595);let i=(0,t.createContext)({user:null,loading:!0,signInWithGoogle:async()=>{},logout:async()=>{}});function n(e){let{children:a}=e,[r,n]=(0,t.useState)(null),[d,u]=(0,t.useState)(!0);(0,t.useEffect)(()=>l.j2.onAuthStateChanged(e=>{n(e),u(!1)}),[]);let c=async()=>{try{await (0,o.df)(l.j2,l.hJ)}catch(e){console.error("Error signing in with Google:",e)}},b=async()=>{try{await (0,o.CI)(l.j2)}catch(e){console.error("Error signing out:",e)}};return(0,s.jsx)(i.Provider,{value:{user:r,loading:d,signInWithGoogle:c,logout:b},children:!d&&a})}let d=()=>(0,t.useContext)(i)},44595:(e,a,r)=>{"use strict";r.d(a,{db:()=>d,hJ:()=>u,j2:()=>n});var s=r(49904),t=r(14565),o=r(27058);let l={apiKey:"AIzaSyDUVTA4ru-i5IW3iCVFUIn2i8dTB2Nbfno",authDomain:"testimonials-ea2a5.firebaseapp.com",projectId:"testimonials-ea2a5",storageBucket:"testimonials-ea2a5.firebasestorage.app",messagingSenderId:"776348387738",appId:"1:776348387738:web:3ae288121c71c7f7ae9223"};console.log("Initializing Firebase with config:",{projectId:l.projectId,authDomain:l.authDomain});let i=(0,s.Wp)(l),n=(0,t.xI)(i),d=(0,o.aU)(i),u=new t.HF;(0,o.ol)(d).catch(e=>{"failed-precondition"===e.code?console.error("Multiple tabs open, persistence can only be enabled in one tab at a time."):"unimplemented"===e.code&&console.error("The current browser doesn't support persistence.")})},17281:(e,a,r)=>{"use strict";r.d(a,{Z:()=>C});var s=r(80117),t=r(71354),o=r(2877),l=(0,t.tv)({slots:{base:["flex","flex-col","relative","overflow-hidden","h-auto","outline-none","text-foreground","box-border","bg-content1",...o.zb],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-3","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,isFooterBlurred:!1}}),i=r(12115),n=r(67093),d=r(29170),u=r(57010),c=r(13201),b=r(35130),f=r(84725),h=r(5582),m=r(49163),p=r(55078),g=r(46611),v=r(33138),x=r(83517),w=r(65858),y=r(39867),k=r(95155),j=(0,h.Rf)((e,a)=>{let{children:r,context:t,Component:o,isPressable:j,disableAnimation:C,disableRipple:I,getCardProps:N,getRippleProps:D}=function(e){var a,r,s,t;let o=(0,f.o)(),[y,k]=(0,h.rE)(e,l.variantKeys),{ref:j,as:C,children:I,onClick:N,onPress:D,autoFocus:P,className:E,classNames:B,allowTextSelectionOnPress:W=!0,...A}=y,F=(0,x.zD)(j),H=C||(e.isPressable?"button":"div"),R="string"==typeof H,S=null!=(r=null!=(a=e.disableAnimation)?a:null==o?void 0:o.disableAnimation)&&r,z=null!=(t=null!=(s=e.disableRipple)?s:null==o?void 0:o.disableRipple)&&t,U=(0,m.$)(null==B?void 0:B.base,E),{onClear:_,onPress:M,ripples:T}=(0,w.k)(),G=(0,i.useCallback)(e=>{z||S||!F.current||M(e)},[z,S,F,M]),{buttonProps:V,isPressed:$}=(0,b.l)({onPress:(0,n.c)(D,G),elementType:C,isDisabled:!e.isPressable,onClick:N,allowTextSelectionOnPress:W,...A},F),{hoverProps:O,isHovered:J}=(0,c.M)({isDisabled:!e.isHoverable,...A}),{isFocusVisible:K,isFocused:Z,focusProps:q}=(0,u.o)({autoFocus:P}),Q=(0,i.useMemo)(()=>l({...k,disableAnimation:S}),[(0,p.t6)(k),S]),L=(0,i.useMemo)(()=>({slots:Q,classNames:B,disableAnimation:S,isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,fullWidth:e.fullWidth}),[Q,B,e.isDisabled,e.isFooterBlurred,S,e.fullWidth]),X=(0,i.useCallback)(function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:F,className:Q.base({class:U}),tabIndex:e.isPressable?0:-1,"data-hover":(0,g.sE)(J),"data-pressed":(0,g.sE)($),"data-focus":(0,g.sE)(Z),"data-focus-visible":(0,g.sE)(K),"data-disabled":(0,g.sE)(e.isDisabled),...(0,d.v)(e.isPressable?{...V,...q,role:"button"}:{},e.isHoverable?O:{},(0,v.$)(A,{enabled:R}),(0,v.$)(a))}},[F,Q,U,R,e.isPressable,e.isHoverable,e.isDisabled,J,$,K,V,q,O,A]),Y=(0,i.useCallback)(()=>({ripples:T,onClear:_}),[T,_]);return{context:L,domRef:F,Component:H,classNames:B,children:I,isHovered:J,isPressed:$,disableAnimation:S,isPressable:e.isPressable,isHoverable:e.isHoverable,disableRipple:z,handlePress:G,isFocusVisible:K,getCardProps:X,getRippleProps:Y}}({...e,ref:a});return(0,k.jsxs)(o,{...N(),children:[(0,k.jsx)(s.u,{value:t,children:r}),j&&!C&&!I&&(0,k.jsx)(y.j,{...D()})]})});j.displayName="NextUI.Card";var C=j},77803:(e,a,r)=>{"use strict";r.d(a,{U:()=>d});var s=r(80117),t=r(5582),o=r(83517),l=r(49163),i=r(95155),n=(0,t.Rf)((e,a)=>{var r;let{as:t,className:n,children:d,...u}=e,c=(0,o.zD)(a),{slots:b,classNames:f}=(0,s.f)(),h=(0,l.$)(null==f?void 0:f.body,n);return(0,i.jsx)(t||"div",{ref:c,className:null==(r=b.body)?void 0:r.call(b,{class:h}),...u,children:d})});n.displayName="NextUI.CardBody";var d=n},80117:(e,a,r)=>{"use strict";r.d(a,{f:()=>t,u:()=>s});var[s,t]=(0,r(89583).q)({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"})}},e=>{var a=a=>e(e.s=a);e.O(0,[992,895,13,936,861,441,517,358],()=>a(99495)),_N_E=e.O()}]);