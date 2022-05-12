"use strict";(self.webpackChunkspanish=self.webpackChunkspanish||[]).push([[678],{33729:function(e,n,r){r.r(n),r.d(n,{default:function(){return T}});var t=r(67294),o=r(47569),a=r(42982),i=r(71027),l=r(53599),c=r(37697);function s(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return u(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var f=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=function(e,n,r){return n in e?f(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r},y=function(e,n){for(var r in n||(n={}))g.call(n,r)&&b(e,r,n[r]);if(p){var t,o=s(p(n));try{for(o.s();!(t=o.n()).done;){r=t.value;h.call(n,r)&&b(e,r,n[r])}}catch(a){o.e(a)}finally{o.f()}}return e},v=function(e,n){return d(e,m(n))},x={opacity:.6,color:"#fff",zIndex:(0,i.w)("modal"),radius:0,blur:0},k=(0,t.forwardRef)((function(e,n){var r=(0,l.Z3)("Overlay",x,e),o=r.opacity,i=r.blur,u=r.color,f=r.gradient,d=r.zIndex,m=r.component,b=r.radius,k=r.sx,z=function(e,n){var r={};for(var t in e)g.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&p){var o,a=s(p(e));try{for(a.s();!(o=a.n()).done;)t=o.value,n.indexOf(t)<0&&h.call(e,t)&&(r[t]=e[t])}catch(i){a.e(i)}finally{a.f()}}return r}(r,["opacity","blur","color","gradient","zIndex","component","radius","sx"]),w=f?{backgroundImage:f}:{backgroundColor:u},S={position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:d},E=function(e){return t.createElement(c.x,y({component:m||"div",ref:n,sx:[function(e){return v(y(y({},w),S),{opacity:o,borderRadius:e.fn.size({size:b,sizes:e.radius})})}].concat((0,a.Z)(Array.isArray(k)?k:[k]))},e))};return i?t.createElement(c.x,y({sx:[function(){return v(y({},S),{backdropFilter:"blur(".concat(i,"px)")})}].concat((0,a.Z)(Array.isArray(k)?k:[k]))},z),E()):E(z)}));k.displayName="@mantine/core/Overlay";var z=r(92230),w=r(24458),S=(0,o.k)((function(e){var n,r,t,o;return{hero:{position:"relative",backgroundImage:"url(https://wallpaperaccess.com/full/1567666.png)",backgroundSize:"cover",backgroundPosition:"center"},container:(n={height:500,display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"flex-start",paddingBottom:8*e.spacing.xl,zIndex:0,position:"relative"},n[e.fn.smallerThan("sm")]={height:400,paddingBottom:5*e.spacing.xl,marginLeft:20},n),title:(r={color:e.white,fontSize:55,fontWeight:600,lineHeight:1.1},r[e.fn.smallerThan("sm")]={fontSize:40,lineHeight:1.2,marginBottom:1*e.spacing.md},r[e.fn.smallerThan("xs")]={fontSize:28,lineHeight:1.3},r),description:(t={color:e.white,maxWidth:600},t[e.fn.smallerThan("sm")]={maxWidth:"100%",fontSize:e.fontSizes.sm},t),control:(o={marginTop:1.5*e.spacing.xl},o[e.fn.smallerThan("sm")]={marginTop:.2*e.spacing.sm,width:250,fontSize:1.1*e.fontSizes.md,marginLeft:2*e.spacing.lg},o["&:hover"]={color:"black",backgroundColor:"white"},o)}}));function E(){var e=S().classes;return t.createElement("div",{className:e.hero},t.createElement(k,{gradient:"linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)",opacity:1,zIndex:0}),t.createElement(z.W,{className:e.container},t.createElement(w.D,{className:e.title},"Practical Spanish practice!")))}var I=r(34468),O=(0,o.k)((function(e){var n;return{feature:{position:"relative",paddingTop:e.spacing.xl,paddingLeft:e.spacing.xl},overlay:{position:"absolute",height:100,width:160,top:0,left:0,backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.colors[e.primaryColor][7],.2):e.colors[e.primaryColor][0],zIndex:1},content:{position:"relative",zIndex:2},icon:{color:e.colors[e.primaryColor]["dark"===e.colorScheme?4:6]},title:{color:"dark"===e.colorScheme?e.white:e.black},abouttext:(n={},n[e.fn.smallerThan("sm")]={padding:10},n)}}));function C(){var e=O().classes;return t.createElement(z.W,{mt:30,mb:30,size:"lg",py:"lg"},t.createElement(w.D,{order:1,align:"center",sx:function(e){return{color:e.colors.blue[7]}}},"Why practice here?"),t.createElement(I.x,{my:"xl",size:"lg",px:100,className:e.abouttext,align:"center"},"Some really nice description should go here"))}var j=r(30883),A=r(93486),T=function(){return t.createElement("main",null,t.createElement("style",{jsx:!0,global:!0},"\n      body {\n        margin: 0px;\n        padding: 0px;\n      }\n    "),t.createElement(j.J,{links:[{link:"/about",label:"About"}]}),t.createElement(E,null),t.createElement(C,null),t.createElement(A.$,{links:[{link:"https://openinfra.dev/legal/code-of-conduct",label:"Code of Conduct"}]}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-7ec6e2d10841a83dcff6.js.map