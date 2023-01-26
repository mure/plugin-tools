"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[542],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=o,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||a;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(7896),o=(n(2784),n(876));const a={id:"updating-to-new-releases",title:"Updating to New Releases"},r=void 0,l={unversionedId:"updating-to-new-releases",id:"updating-to-new-releases",title:"Updating to New Releases",description:"To update an existing plugin to a newer version of create-plugin run the following migration command:",source:"@site/../docs/updating-to-new-releases.md",sourceDirName:".",slug:"/updating-to-new-releases",permalink:"/plugin-tools/docs/updating-to-new-releases",draft:!1,editUrl:"https://github.com/grafana/plugin-tools/edit/main/docusaurus/website/../docs/updating-to-new-releases.md",tags:[],version:"current",frontMatter:{id:"updating-to-new-releases",title:"Updating to New Releases"},sidebar:"docs",previous:{title:"Folder Structure",permalink:"/plugin-tools/docs/folder-structure"},next:{title:"Migrating from Grafana Toolkit",permalink:"/plugin-tools/docs/migrating-from-toolkit"}},p={},s=[{value:"Prompts",id:"prompts",level:2},{value:"Would you like to update the project&#39;s configuration?",id:"would-you-like-to-update-the-projects-configuration",level:3},{value:"Would you like to update the following dependencies in the package.json?",id:"would-you-like-to-update-the-following-dependencies-in-the-packagejson",level:3},{value:"Would you like to update the scripts in your package.json? All scripts using grafana-toolkit will be replaced.",id:"would-you-like-to-update-the-scripts-in-your-packagejson-all-scripts-using-grafana-toolkit-will-be-replaced",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To update an existing plugin to a newer version of ",(0,o.kt)("inlineCode",{parentName:"p"},"create-plugin")," run the following migration command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx @grafana/create-plugin update\n")),(0,o.kt)("p",null,"This command will rerun the original scaffolding commands against the configuration files, dependencies, and scripts, using the latest version of ",(0,o.kt)("inlineCode",{parentName:"p"},"create-plugin"),". It will prompt to confirm any destructive operations are agreed to prior to being run."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It's recommended that all prompts are agreed to so configs, dependencies and scripts are kept in sync.")),(0,o.kt)("h2",{id:"prompts"},"Prompts"),(0,o.kt)("p",null,"When running the update command the following prompts will appear asking for confirmation before making changes. Due to their destructive nature the default for each of the following prompts is ",(0,o.kt)("inlineCode",{parentName:"p"},"no"),"."),(0,o.kt)("h3",{id:"would-you-like-to-update-the-projects-configuration"},"Would you like to update the project's configuration?"),(0,o.kt)("p",null,"Selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," will replace the files inside the ",(0,o.kt)("inlineCode",{parentName:"p"},".config")," directory to make sure the plugin is built and tested with the latest Grafana recommended configurations."),(0,o.kt)("h3",{id:"would-you-like-to-update-the-following-dependencies-in-the-packagejson"},"Would you like to update the following dependencies in the package.json?"),(0,o.kt)("p",null,"This step is skipped if there are no dependencies to update otherwise select from the following choices:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Selecting ",(0,o.kt)("inlineCode",{parentName:"li"},"Yes, all of them")," will update all existing dependencies and add any missing dependencies to ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,o.kt)("li",{parentName:"ul"},"Selecting ",(0,o.kt)("inlineCode",{parentName:"li"},"Yes, but only the outdated ones")," will update all existing dependencies in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,o.kt)("li",{parentName:"ul"},"Selecting ",(0,o.kt)("inlineCode",{parentName:"li"},"No")," will skip this step preventing any dependency updates.")),(0,o.kt)("h3",{id:"would-you-like-to-update-the-scripts-in-your-packagejson-all-scripts-using-grafana-toolkit-will-be-replaced"},"Would you like to update the scripts in your package.json? All scripts using grafana-toolkit will be replaced."),(0,o.kt)("p",null,"This step will update any npm scripts in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file to match the latest configurations. Any scripts that were previously using ",(0,o.kt)("inlineCode",{parentName:"p"},"grafana-toolkit")," will be replaced."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Whilst as much care as possible is taken to ensure this doesn't break things it\u2019s always good to consult the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/grafana/plugin-tools/blob/main/CHANGELOG.md"},"changelog")," for potential breaking changes.")))}c.isMDXComponent=!0}}]);