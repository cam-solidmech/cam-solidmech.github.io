"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[919],{9813:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a,r,i,o,s=n(7294),l=n(9690),c=n(2337),u=n(3503),d=n(8629),m=n(1450),f=n(9366),p=n(7906),h=n(6670),g=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function v(e,t){var n=Array.isArray(e)?e:function(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(g))}(e),o=document.activeElement,s=function(){if(t&(a.First|a.Next))return i.Next;if(t&(a.Previous|a.Last))return i.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),l=function(){if(t&a.First)return 0;if(t&a.Previous)return Math.max(0,n.indexOf(o))-1;if(t&a.Next)return Math.max(0,n.indexOf(o))+1;if(t&a.Last)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),c=t&a.NoScroll?{preventScroll:!0}:{},u=0,d=n.length,m=void 0;do{var f;if(u>=d||u+d<=0)return r.Error;var p=l+u;if(t&a.WrapAround)p=(p+d)%d;else{if(p<0)return r.Underflow;if(p>=d)return r.Overflow}null==(f=m=n[p])||f.focus(c),u+=s}while(m!==document.activeElement);return m.hasAttribute("tabindex")||m.setAttribute("tabindex","0"),r.Success}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(a||(a={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(r||(r={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(i||(i={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(o||(o={}));var b,x,y=n(5834);!function(e){e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.SetOrientation=1]="SetOrientation",e[e.SetActivation=2]="SetActivation",e[e.RegisterTab=3]="RegisterTab",e[e.UnregisterTab=4]="UnregisterTab",e[e.RegisterPanel=5]="RegisterPanel",e[e.UnregisterPanel=6]="UnregisterPanel",e[e.ForceRerender=7]="ForceRerender"}(x||(x={}));var w=((b={})[x.SetSelectedIndex]=function(e,t){return e.selectedIndex===t.index?e:(0,c.gY)({},e,{selectedIndex:t.index})},b[x.SetOrientation]=function(e,t){return e.orientation===t.orientation?e:(0,c.gY)({},e,{orientation:t.orientation})},b[x.SetActivation]=function(e,t){return e.activation===t.activation?e:(0,c.gY)({},e,{activation:t.activation})},b[x.RegisterTab]=function(e,t){return e.tabs.includes(t.tab)?e:(0,c.gY)({},e,{tabs:[].concat(e.tabs,[t.tab])})},b[x.UnregisterTab]=function(e,t){return(0,c.gY)({},e,{tabs:e.tabs.filter((function(e){return e!==t.tab}))})},b[x.RegisterPanel]=function(e,t){return e.panels.includes(t.panel)?e:(0,c.gY)({},e,{panels:[].concat(e.panels,[t.panel])})},b[x.UnregisterPanel]=function(e,t){return(0,c.gY)({},e,{panels:e.panels.filter((function(e){return e!==t.panel}))})},b[x.ForceRerender]=function(e){return(0,c.gY)({},e)},b),S=(0,s.createContext)(null);function k(e){var t=(0,s.useContext)(S);if(null===t){var n=new Error("<"+e+" /> is missing a parent <Tab.Group /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,k),n}return t}function E(e,t){return(0,u.E)(t.type,w,e,t)}S.displayName="TabsContext";var T=s.Fragment;function P(e){var t,n,r="headlessui-tabs-tab-"+(0,h.M)(),i=k(P.name),o=i[0],l=o.selectedIndex,g=o.tabs,b=o.panels,w=o.orientation,S=o.activation,E=i[1],T=E.dispatch,N=E.change,A=(0,s.useRef)(null),R=(0,m.T)(A,(function(e){e&&T({type:x.ForceRerender})}));(0,p.e)((function(){return T({type:x.RegisterTab,tab:A}),function(){return T({type:x.UnregisterTab,tab:A})}}),[T,A]);var I=g.indexOf(A),F=I===l,M=(0,s.useCallback)((function(e){var t=g.map((function(e){return e.current})).filter(Boolean);if(e.key===f.R.Space||e.key===f.R.Enter)return e.preventDefault(),e.stopPropagation(),void N(I);switch(e.key){case f.R.Home:case f.R.PageUp:return e.preventDefault(),e.stopPropagation(),v(t,a.First);case f.R.End:case f.R.PageDown:return e.preventDefault(),e.stopPropagation(),v(t,a.Last)}return(0,u.E)(w,{vertical:function(){return e.key===f.R.ArrowUp?v(t,a.Previous|a.WrapAround):e.key===f.R.ArrowDown?v(t,a.Next|a.WrapAround):void 0},horizontal:function(){return e.key===f.R.ArrowLeft?v(t,a.Previous|a.WrapAround):e.key===f.R.ArrowRight?v(t,a.Next|a.WrapAround):void 0}})}),[g,w,I,N]),Y=(0,s.useCallback)((function(){var e;null==(e=A.current)||e.focus()}),[A]),O=(0,s.useCallback)((function(){var e;null==(e=A.current)||e.focus(),N(I)}),[N,I,A]),L=(0,s.useMemo)((function(){return{selected:F}}),[F]),U={ref:R,onKeyDown:M,onFocus:"manual"===S?Y:O,onClick:O,id:r,role:"tab",type:(0,y.f)(e,A),"aria-controls":null==(t=b[I])||null==(n=t.current)?void 0:n.id,"aria-selected":F,tabIndex:F?0:-1},C=e;return(0,d.sY)({props:(0,c.gY)({},C,U),slot:L,defaultTag:"button",name:"Tabs.Tab"})}var N=d.AN.RenderStrategy|d.AN.Static;P.Group=function(e){var t=e.defaultIndex,n=void 0===t?0:t,a=e.vertical,r=void 0!==a&&a,i=e.manual,o=void 0!==i&&i,l=e.onChange,u=(0,c.gK)(e,["defaultIndex","vertical","manual","onChange"]),m=r?"vertical":"horizontal",f=o?"manual":"auto",p=(0,s.useReducer)(E,{selectedIndex:null,tabs:[],panels:[],orientation:m,activation:f}),h=p[0],g=p[1],v=(0,s.useMemo)((function(){return{selectedIndex:h.selectedIndex}}),[h.selectedIndex]),b=(0,s.useRef)((function(){}));(0,s.useEffect)((function(){g({type:x.SetOrientation,orientation:m})}),[m]),(0,s.useEffect)((function(){g({type:x.SetActivation,activation:f})}),[f]),(0,s.useEffect)((function(){"function"==typeof l&&(b.current=l)}),[l]),(0,s.useEffect)((function(){if(!(h.tabs.length<=0)&&null===h.selectedIndex){var e=h.tabs.map((function(e){return e.current})).filter(Boolean),t=e.filter((function(e){return!e.hasAttribute("disabled")}));if(n<0)g({type:x.SetSelectedIndex,index:e.indexOf(t[0])});else if(n>h.tabs.length)g({type:x.SetSelectedIndex,index:e.indexOf(t[t.length-1])});else{var a=e.slice(0,n),r=e.slice(n),i=[].concat(r,a).find((function(e){return t.includes(e)}));if(!i)return;g({type:x.SetSelectedIndex,index:e.indexOf(i)})}}}),[n,h.tabs,h.selectedIndex]);var y=(0,s.useRef)(h.selectedIndex),w=(0,s.useMemo)((function(){return[h,{dispatch:g,change:function(e){y.current!==e&&b.current(e),y.current=e,g({type:x.SetSelectedIndex,index:e})}}]}),[h,g]);return s.createElement(S.Provider,{value:w},(0,d.sY)({props:(0,c.gY)({},u),slot:v,defaultTag:T,name:"Tabs"}))},P.List=function e(t){var n=k([P.name,e.name].join("."))[0],a={selectedIndex:n.selectedIndex},r={role:"tablist","aria-orientation":n.orientation},i=t;return(0,d.sY)({props:(0,c.gY)({},i,r),slot:a,defaultTag:"div",name:"Tabs.List"})},P.Panels=function e(t){var n=k([P.name,e.name].join("."))[0].selectedIndex,a=(0,s.useMemo)((function(){return{selectedIndex:n}}),[n]);return(0,d.sY)({props:t,slot:a,defaultTag:"div",name:"Tabs.Panels"})},P.Panel=function e(t){var n,a,r=k([P.name,e.name].join(".")),i=r[0],o=i.selectedIndex,l=i.tabs,u=i.panels,f=r[1].dispatch,g="headlessui-tabs-panel-"+(0,h.M)(),v=(0,s.useRef)(null),b=(0,m.T)(v,(function(e){e&&f({type:x.ForceRerender})}));(0,p.e)((function(){return f({type:x.RegisterPanel,panel:v}),function(){return f({type:x.UnregisterPanel,panel:v})}}),[f,v]);var y=u.indexOf(v),w=y===o,S=(0,s.useMemo)((function(){return{selected:w}}),[w]),E={ref:b,id:g,role:"tabpanel","aria-labelledby":null==(n=l[y])||null==(a=n.current)?void 0:a.id,tabIndex:w?0:-1},T=t;return(0,d.sY)({props:(0,c.gY)({},T,E),slot:S,defaultTag:"div",features:N,visible:w,name:"Tabs.Panel"})};var A=[{name:"Solids",features:[{name:"Micro-architected solids",description:"Micro-architectured solids are an emerging new class of engineering materials, ranging from gyroid foams on the nanoscale to 3D composites at the micron scale and above. They offer the opportunity for design at the microstructural level and can lead to new combinations of properties, such as high thermal resistance, high toughness and high strength at low weight. The group has invented several such materials long with new manufacturing and test techniques including in-situ 3D X-ray tomography methods for ceramic/metal composites (cermets).",imageSrc:"https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg",imageAlt:"Maple organizer base with slots, supporting white polycarbonate trays of various sizes."}]},{name:"Materials",features:[{name:"Structural materials under high rate loading",description:"The scope of this work is very broad: it encompasses fluid-structure interaction effects between blast waves and structures to the invention of new structural materials for blast-resistant sandwich panels. An important element of the work has been the development of laboratory- based simulators of blast loading dynamic events. This provides the ability to make critical scientific measurements and observations which are not possible in field tests. These simulators include: (i) firing of foam projectiles to exert controlled and known dynamic loads on structures; (ii) development of a water shock tube to study fluid-structure interaction without the need to detonate an explosive charge and (iii) loading of structures by high velocity granular and fluid sprays. This experimental work has been accompanied by the development of new simulation tools to perform large-scale computations of these dynamic events, e.g. coupled discrete particle/finite element methods to simulate granular loading of structures.",imageSrc:"https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg",imageAlt:"Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment."}]},{name:"Plasticity",features:[{name:"Plasticity on the micron scale",description:"How do dislocations collectively dictate the high temperature creep behaviour of engineering alloys? We have developed computational mechanics methodology for the motion of discrete dislocations (both climb and glide) coupled to vacancy diffusion. This explains, for the first time, the origins of the continually increasing creep strain rates in superalloys and the role of particle size effects in metallic composites at high temperatures. In doing so we have taken discrete dislocation theory from a primitive state of modelling of a small number of dislocations in the 2D small strain context to complex multi-physics high temperature applications. The theory now includes non-linear effects such as lattice rotation, geometrical non-linearities and coupling of plasticity and dislocation motion to vacancy and interfacial diffusion in complex alloys.",imageSrc:"https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg",imageAlt:"Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils."}]},{name:"Mechano-biology",features:[{name:"Mechano-biology of cells and tissues",description:"We have pioneered the development modelling frameworks for the mechano-sensitive response of eukaryotic cells with a focus on the role of the cytoskeleton and focal adhesions. A key insight was to develop an ensemble for the homeostatic equilibrium of cells even though from a conventional thermodynamics viewpoint, living cells are ultimate examples of non- equilibrium systems. This has led to the development of a statistical mechanics framework for living cells, on par with conventional statistical thermodynamics but yet accounting for the non-thermal fluctuations of cells and their subcellular components. The entropic forces associated with these non-thermal fluctuations help explain numerous non-intuitive phenomena including the alignment of cells in anisotropic environments and their mechano- sensitive spreading behaviour.",imageSrc:"https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg",imageAlt:"Walnut organizer system on black leather desk mat on top of white desk."}]}];function R(){return s.createElement(l.Z,null,s.createElement("div",{className:"bg-white"},s.createElement("section",{"aria-labelledby":"features-heading",className:"max-w-7xl mx-auto sm:px-2 lg:px-8"},s.createElement("div",{className:"max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none"},s.createElement("div",{className:"pt-8 max-w-3xl"},s.createElement("h2",{className:"mt-6 text-1xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl"},"Cambridge Solid Mechanics Group")),s.createElement(P.Group,{as:"div",className:"mt-4"},s.createElement("div",{className:"-mx-4 flex overflow-x-auto sm:mx-0"},s.createElement("div",{className:"flex-auto px-4 border-b border-gray-200 sm:px-0"},s.createElement(P.List,{className:"-mb-px flex space-x-10"},A.map((function(e){return s.createElement(P,{key:e.name,className:function(e){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}(e.selected?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-6 border-b-2 font-medium text-sm")}},e.name)}))))),s.createElement(P.Panels,{as:s.Fragment},A.map((function(e){return s.createElement(P.Panel,{key:e.name,className:"space-y-16 pt-10 lg:pt-16"},e.features.map((function(e){return s.createElement("div",{key:e.name,className:"flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"},s.createElement("div",{className:"mt-6 lg:mt-0 lg:col-span-5"},s.createElement("h3",{className:"text-lg font-medium text-gray-900"},e.name),s.createElement("p",{className:"mt-2 text-sm text-gray-500"},e.description)))})))}))))))))}}}]);
//# sourceMappingURL=component---src-pages-research-tsx-f3938480279a0c05a4d2.js.map