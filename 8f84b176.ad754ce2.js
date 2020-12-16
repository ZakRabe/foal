(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{178:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"rightToc",(function(){return s})),n.d(r,"default",(function(){return p}));var t=n(3),o=n(7),a=(n(0),n(250)),i={title:"Error Handling"},c={unversionedId:"cookbook/error-handling",id:"version-1.x/cookbook/error-handling",isDocsHomePage:!1,title:"Error Handling",description:"When creating a new project with Foal, error handling is already configured for you. When an error is thrown or rejected in a controller or a hook, the application returns an html page Internal Server Error with the status code 500. If the configuration key settings.debug is set to true (which is the case during development or testing), the page includes some details about the error (name, message, stack trace, etc).",source:"@site/versioned_docs/version-1.x/cookbook/error-handling.md",slug:"/cookbook/error-handling",permalink:"/docs/1.x/cookbook/error-handling",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cookbook/error-handling.md",version:"1.x",sidebar:"someSidebar",previous:{title:"Logging & Debugging",permalink:"/docs/1.x/utilities/logging-and-debugging"},next:{title:"Generate Tokens",permalink:"/docs/1.x/cookbook/generate-tokens"}},s=[],l={rightToc:s};function p(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When creating a new project with Foal, error handling is already configured for you. When an error is thrown or rejected in a controller or a hook, the application returns an html page ",Object(a.b)("inlineCode",{parentName:"p"},"Internal Server Error")," with the status code ",Object(a.b)("inlineCode",{parentName:"p"},"500"),". If the configuration key ",Object(a.b)("inlineCode",{parentName:"p"},"settings.debug")," is set to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," (which is the case during development or testing), the page includes some details about the error (name, message, stack trace, etc)."),Object(a.b)("p",null,"In some situations, we may want to override this behavior. This can be the case when we want, for example, to send the error to an external service, treat some errors in a particular way, customize the error page or return a JSON object to describe the error."),Object(a.b)("p",null,"To do this, you can pass an additional option to the ",Object(a.b)("inlineCode",{parentName:"p"},"createApp")," function and add an ",Object(a.b)("inlineCode",{parentName:"p"},"handleError")," method to the ",Object(a.b)("inlineCode",{parentName:"p"},"AppController")," class."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/index.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"// ...\n\nexport async function main() {\n  // ...\n\n  const app = createApp(AppController, {\n    methods: {\n      handleError: true\n    }\n  });\n\n  // ...\n}\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/app/app.controller.ts (example)")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, HttpResponse, renderError } from '@foal/core';\n\nfunction sendErrorToAnExternalService(error: Error, user: User) {\n  // ...\n}\n\nexport class AppController {\n  subControllers = [\n    // ...\n  ];\n\n  handleError(error: Error, ctx: Context): HttpResponse|Promise<HttpResponse> {\n    sendErrorToAnExternalService(error, ctx.user);\n\n    if (error instanceof MyError) {\n      // Do something\n    }\n\n    return renderError(err, ctx);\n  }\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If necessary, error logging can be disabled by setting the ",Object(a.b)("inlineCode",{parentName:"p"},"settings.logErrors")," configuration key to ",Object(a.b)("inlineCode",{parentName:"p"},"false"),".")))}p.isMDXComponent=!0},250:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=t,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:r},l),{},{components:n})):o.a.createElement(m,c({ref:r},l))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);