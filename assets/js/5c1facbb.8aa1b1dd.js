"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[691],{876:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(2784);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return o?n.createElement(f,a(a({ref:t},p),{},{components:o})):n.createElement(f,a({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4547:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=o(7896),r=(o(2784),o(876));const i={id:"ci",title:"Continuous Integration"},a=void 0,l={unversionedId:"ci",id:"ci",title:"Continuous Integration",description:"Automate your development process to minimize errors and make it faster and more cost-efficient. The create-plugin tool helps you to configure your GitHub actions workflows to help automate your development process.",source:"@site/../docs/ci.md",sourceDirName:".",slug:"/ci",permalink:"/plugin-tools/docs/ci",draft:!1,editUrl:"https://github.com/grafana/plugin-tools/edit/main/docusaurus/website/../docs/ci.md",tags:[],version:"current",frontMatter:{id:"ci",title:"Continuous Integration"},sidebar:"docs",previous:{title:"Docker Development Environment",permalink:"/plugin-tools/docs/docker"},next:{title:"Distributing Your Plugin",permalink:"/plugin-tools/docs/distributing-your-plugin"}},s={},c=[{value:"The CI workflow",id:"the-ci-workflow",level:2},{value:"The release workflow",id:"the-release-workflow",level:2},{value:"The compatibility check (<code>is-compatible.yml</code>)",id:"the-compatibility-check-is-compatibleyml",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Automate your development process to minimize errors and make it faster and more cost-efficient. The ",(0,r.kt)("inlineCode",{parentName:"p"},"create-plugin")," tool helps you to configure your GitHub actions workflows to help automate your development process."),(0,r.kt)("h2",{id:"the-ci-workflow"},"The CI workflow"),(0,r.kt)("p",null,"The CI (",(0,r.kt)("inlineCode",{parentName:"p"},"ci.yml"),") workflow is designed to lint, type check, and build the frontend and backend. It is also used to run tests on your plugin every time you push changes to your repository. The ",(0,r.kt)("inlineCode",{parentName:"p"},"create-plugin")," tool helps to catch any issues early in the development process, before they become bigger problems."),(0,r.kt)("h2",{id:"the-release-workflow"},"The release workflow"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This workflow requires a Grafana Cloud API key. Before you begin, follow the instructions for ",(0,r.kt)("a",{parentName:"p",href:"/plugin-tools/docs/distributing-your-plugin#initial-steps"},"distributing your plugin"),".")),(0,r.kt)("p",null,"The release (",(0,r.kt)("inlineCode",{parentName:"p"},"release.yml"),") workflow is designed to create a new release of your plugin whenever you're ready to publish a new version. This automates the process of creating releases in GitHub and provides instructions for submitting the plugin to the Grafana plugin catalog."),(0,r.kt)("p",null,"To trigger the release workflow, push a Git tag for the plugin version that you want to release:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git tag v1.0.0\ngit push origin v1.0.0\n")),(0,r.kt)("h2",{id:"the-compatibility-check-is-compatibleyml"},"The compatibility check (",(0,r.kt)("inlineCode",{parentName:"h2"},"is-compatible.yml"),")"),(0,r.kt)("p",null,"The compatibility check (",(0,r.kt)("inlineCode",{parentName:"p"},"is-compatible.yml"),") workflow is designed to check the Grafana API compatibility of your plugin every time you push changes to your repository. This helps to catch potential frontend runtime issues before they occur."),(0,r.kt)("p",null,"The workflow contains the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Finding ",(0,r.kt)("inlineCode",{parentName:"li"},"@grafana")," npm packages in your plugin."),(0,r.kt)("li",{parentName:"ol"},"Extracting the exported types of the specified version."),(0,r.kt)("li",{parentName:"ol"},"Comparing the differences between that version and the latest version."),(0,r.kt)("li",{parentName:"ol"},"Looking for usages of those changed APIs inside your plugin."),(0,r.kt)("li",{parentName:"ol"},"Reporting any potential incompatibilities.")))}m.isMDXComponent=!0}}]);