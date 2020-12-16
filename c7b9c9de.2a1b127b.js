(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{213:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(250)),c={title:"Password Management",sidebar_label:"Passwords"},i={unversionedId:"authentication-and-access-control/password-management",id:"version-1.x/authentication-and-access-control/password-management",isDocsHomePage:!1,title:"Password Management",description:"Every application must store passwords using a cryptographic technique. FoalTS provides two functions to hash and verify passwords.",source:"@site/versioned_docs/version-1.x/authentication-and-access-control/password-management.md",slug:"/authentication-and-access-control/password-management",permalink:"/docs/1.x/authentication-and-access-control/password-management",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/authentication-and-access-control/password-management.md",version:"1.x",sidebar_label:"Passwords",sidebar:"someSidebar",previous:{title:"User Class and create-user Script",permalink:"/docs/1.x/authentication-and-access-control/user-class"},next:{title:"Session Tokens",permalink:"/docs/1.x/authentication-and-access-control/session-tokens"}},s=[{value:"The <code>hashPassword</code> function",id:"the-hashpassword-function",children:[]},{value:"The <code>verifyPassword</code> function",id:"the-verifypassword-function",children:[]}],b={rightToc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Every application must store passwords using a cryptographic technique. FoalTS provides two functions to hash and verify passwords."),Object(o.b)("h2",{id:"the-hashpassword-function"},"The ",Object(o.b)("inlineCode",{parentName:"h2"},"hashPassword")," function"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"hashPassword")," utility uses the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/PBKDF2"}),"PBKDF2")," algorithm with a SHA256 hash. It takes as parameters the password in plain text and an optional ",Object(o.b)("inlineCode",{parentName:"p"},"options")," object. It returns a promise which value is a password hash."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The function generates a unique cryptographically-strong random salt for each password. This salt is returned by the function beside the password hash.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"plainTextPassword"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"options"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"{ legacy?: boolean }")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"{}"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Return type")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"Promise<string>\n")),Object(o.b)("h2",{id:"the-verifypassword-function"},"The ",Object(o.b)("inlineCode",{parentName:"h2"},"verifyPassword")," function"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"verifyPassword")," takes three arguments:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the password to check in plain text,"),Object(o.b)("li",{parentName:"ul"},"the password hash (usually fetched from the database),"),Object(o.b)("li",{parentName:"ul"},"and an optional ",Object(o.b)("inlineCode",{parentName:"li"},"options")," object (see below).")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"plainTextPassword"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"passwordHash"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"options"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"{ legacy?: boolean }")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"{}"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Return type")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"Promise<boolean>\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you used the ",Object(o.b)("inlineCode",{parentName:"p"},"parsePassword")," function in previous versions of Foal (<0.7.0), you must pass the ",Object(o.b)("inlineCode",{parentName:"p"},"legacy: true")," option to ",Object(o.b)("inlineCode",{parentName:"p"},"verifyPassword")," and ",Object(o.b)("inlineCode",{parentName:"p"},"hashPassword"),".")))}l.isMDXComponent=!0},250:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(a),d=n,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return a?r.a.createElement(m,i(i({ref:t},b),{},{components:a})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);