(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{170:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(250)),c={title:"Architecture Overview"},i={unversionedId:"architecture/architecture-overview",id:"architecture/architecture-overview",isDocsHomePage:!1,title:"Architecture Overview",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/docs/architecture/architecture-overview.md",slug:"/architecture/architecture-overview",permalink:"/docs/architecture/architecture-overview",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/architecture/architecture-overview.md",version:"current",sidebar:"someSidebar",previous:{title:"E2E Testing & Authentication",permalink:"/docs/tutorials/multi-user-todo-list/8-e2e-testing-and-authentication"},next:{title:"Controllers",permalink:"/docs/architecture/controllers"}},s=[{value:"Controllers",id:"controllers",children:[]},{value:"Services",id:"services",children:[]},{value:"Hooks",id:"hooks",children:[]},{value:"A Simple Application",id:"a-simple-application",children:[]}],l={rightToc:s};function p(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/tree/v1.x/docs"}),"here"),".")),Object(a.b)("p",null,"FoalTS is a framework for creating server-side ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org"}),"Node.js")," applications. It is written in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript"),", a typed superset of JavaScript that provides advanced development tools and the latest language features."),Object(a.b)("p",null,"FoalTS architecture is organized around three main components: controllers, services and hooks."),Object(a.b)("h2",{id:"controllers"},"Controllers"),Object(a.b)("p",null,"Controllers are classes instantiated as singletons. Their methods process the incoming HTTP requests."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, HttpResponseOK } from '@foal/core';\n\nclass AppController {\n\n  @Get('/')\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),Object(a.b)("h2",{id:"services"},"Services"),Object(a.b)("p",null,"Services are also classes instantiated as singletons. They are used by the controllers (or hooks) to perform specific tasks."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Get, HttpResponseOK } from '@foal/core';\n\nclass FormatService {\n  withDate(message: string): string {\n    return `${new Date()} - ${message}`;\n  }\n}\n\nclass AppController {\n  @dependency\n  format: FormatService;\n\n  @Get('/')\n  index() {\n    const message = this.format.withDate('Hello world!');\n    return new HttpResponseOK(message);\n  }\n\n}\n")),Object(a.b)("h2",{id:"hooks"},"Hooks"),Object(a.b)("p",null,"Hooks are small functions that add extra logic before or after the execution of a controller method."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, HttpResponseOK } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\nclass AppController {\n\n  @Get('/')\n  @JWTRequired()\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),Object(a.b)("h2",{id:"a-simple-application"},"A Simple Application"),Object(a.b)("p",null,"Controllers may have sub-controllers. Hooks can be attached to the controllers or their methods. "),Object(a.b)("p",null,"Here's an example of what a FoalTS application may look like."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, controller, Get, HttpResponseNotFound, HttpResponseOK, Log } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\n@JWTRequired()\nclass ApiController {\n  private products = [\n    { id: 1, name: 'phone' },\n    { id: 2, name: 'computer' },\n  ]\n\n  @Get('/products')\n  listProducts() {\n    return new HttpResponseOK(this.products);\n  }\n\n  @Get('/products/:id')\n  getProduct(ctx: Context) {\n    const product = this.products.find(\n      p => p.id === parseInt(ctx.request.params.id, 10)\n    );\n\n    if (!product) {\n      return new HttpResponseNotFound();\n    }\n\n    return new HttpResponseOK(product);\n  }\n}\n\n@Log('Receiving a request...')\nclass AppController {\n  subControllers = [\n    controller('/api', ApiController)\n  ];\n\n  @Get('/')\n  index() {\n    return new HttpResponseOK('Welcome!');\n  }\n}\n")),Object(a.b)("p",null,Object(a.b)("img",{alt:"Request Lifecycle",src:r(324).default})))}p.isMDXComponent=!0},250:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return r?o.a.createElement(m,i(i({ref:t},l),{},{components:r})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},324:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/request_lifecycle-6483154b08c8a22d7412d0fa953a7304.png"}}]);