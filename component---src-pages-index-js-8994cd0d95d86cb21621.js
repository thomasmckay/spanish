"use strict";(self.webpackChunkoperate_first=self.webpackChunkoperate_first||[]).push([[678],{33729:function(e,r,n){n.r(r),n.d(r,{default:function(){return T}});var t=n(67294),o=n(47569),a=n(42982),i=n(71027),l=n(53599),c=n(37697);function s(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(!e)return;if("string"==typeof e)return u(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,r)}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var f=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,h=function(e,r,n){return r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n},y=function(e,r){for(var n in r||(r={}))g.call(r,n)&&h(e,n,r[n]);if(p){var t,o=s(p(r));try{for(o.s();!(t=o.n()).done;){n=t.value;b.call(r,n)&&h(e,n,r[n])}}catch(a){o.e(a)}finally{o.f()}}return e},v=function(e,r){return d(e,m(r))},x={opacity:.6,color:"#fff",zIndex:(0,i.w)("modal"),radius:0,blur:0},k=(0,t.forwardRef)((function(e,r){var n=(0,l.Z3)("Overlay",x,e),o=n.opacity,i=n.blur,u=n.color,f=n.gradient,d=n.zIndex,m=n.component,h=n.radius,k=n.sx,z=function(e,r){var n={};for(var t in e)g.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&p){var o,a=s(p(e));try{for(a.s();!(o=a.n()).done;)t=o.value,r.indexOf(t)<0&&b.call(e,t)&&(n[t]=e[t])}catch(i){a.e(i)}finally{a.f()}}return n}(n,["opacity","blur","color","gradient","zIndex","component","radius","sx"]),w=f?{backgroundImage:f}:{backgroundColor:u},S={position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:d},E=function(e){return t.createElement(c.x,y({component:m||"div",ref:r,sx:[function(e){return v(y(y({},w),S),{opacity:o,borderRadius:e.fn.size({size:h,sizes:e.radius})})}].concat((0,a.Z)(Array.isArray(k)?k:[k]))},e))};return i?t.createElement(c.x,y({sx:[function(){return v(y({},S),{backdropFilter:"blur(".concat(i,"px)")})}].concat((0,a.Z)(Array.isArray(k)?k:[k]))},z),E()):E(z)}));k.displayName="@mantine/core/Overlay";var z=n(92230),w=n(24458),S=(0,o.k)((function(e){var r,n,t,o;return{hero:{position:"relative",backgroundImage:"url(https://wallpaperaccess.com/full/1567666.png)",backgroundSize:"cover",backgroundPosition:"center"},container:(r={height:500,display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"flex-start",paddingBottom:8*e.spacing.xl,zIndex:0,position:"relative"},r[e.fn.smallerThan("sm")]={height:400,paddingBottom:5*e.spacing.xl,marginLeft:20},r),title:(n={color:e.white,fontSize:55,fontWeight:600,lineHeight:1.1},n[e.fn.smallerThan("sm")]={fontSize:40,lineHeight:1.2,marginBottom:1*e.spacing.md},n[e.fn.smallerThan("xs")]={fontSize:28,lineHeight:1.3},n),description:(t={color:e.white,maxWidth:600},t[e.fn.smallerThan("sm")]={maxWidth:"100%",fontSize:e.fontSizes.sm},t),control:(o={marginTop:1.5*e.spacing.xl},o[e.fn.smallerThan("sm")]={marginTop:.2*e.spacing.sm,width:250,fontSize:1.1*e.fontSizes.md,marginLeft:2*e.spacing.lg},o["&:hover"]={color:"black",backgroundColor:"white"},o)}}));function E(){var e=S().classes;return t.createElement("div",{className:e.hero},t.createElement(k,{gradient:"linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)",opacity:1,zIndex:0}),t.createElement(z.W,{className:e.container},t.createElement(w.D,{className:e.title},"Practical Spanish practice!")))}var I=n(34468),O=(0,o.k)((function(e){var r;return{feature:{position:"relative",paddingTop:e.spacing.xl,paddingLeft:e.spacing.xl},overlay:{position:"absolute",height:100,width:160,top:0,left:0,backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.colors[e.primaryColor][7],.2):e.colors[e.primaryColor][0],zIndex:1},content:{position:"relative",zIndex:2},icon:{color:e.colors[e.primaryColor]["dark"===e.colorScheme?4:6]},title:{color:"dark"===e.colorScheme?e.white:e.black},abouttext:(r={},r[e.fn.smallerThan("sm")]={padding:10},r)}}));function C(){var e=O().classes;return t.createElement(z.W,{mt:30,mb:30,size:"lg",py:"lg"},t.createElement(w.D,{order:1,align:"center",sx:function(e){return{color:e.colors.blue[7]}}},"Why practice here?"),t.createElement(I.x,{my:"xl",size:"lg",px:100,className:e.abouttext,align:"center"},"Some really nice description should go here"))}var j=n(30883),A=n(93486),T=function(){return t.createElement("main",null,t.createElement("style",{jsx:!0,global:!0},"\n      body {\n        margin: 0px;\n        padding: 0px;\n      }\n    "),t.createElement(j.J,{links:[{link:"/about",label:"About"}]}),t.createElement(E,null),t.createElement(C,null),t.createElement(A.$,{links:[{link:"https://openinfra.dev/legal/code-of-conduct",label:"Code of Conduct"}]}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-8994cd0d95d86cb21621.js.map