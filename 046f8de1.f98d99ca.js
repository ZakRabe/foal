(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{250:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(b,i(i({ref:t},c),{},{components:n})):o.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(250)),s={title:"Limit Repeated Requests"},i={unversionedId:"cookbook/limit-repeated-requests",id:"cookbook/limit-repeated-requests",isDocsHomePage:!1,title:"Limit Repeated Requests",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/docs/cookbook/limit-repeated-requests.md",slug:"/cookbook/limit-repeated-requests",permalink:"/docs/cookbook/limit-repeated-requests",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/cookbook/limit-repeated-requests.md",version:"current",sidebar:"someSidebar",previous:{title:"Root Imports",permalink:"/docs/cookbook/root-imports"},next:{title:"Configuration",permalink:"/docs/deployment-and-environments/configuration"}},p=[{value:"Rate limiting with CORS",id:"rate-limiting-with-cors",children:[]}],c={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/tree/v1.x/docs"}),"here"),".")),Object(a.b)("p",null,"To prevent brute force attacks or overloads on your application, you need to implement a rate limiter to limit the number of requests a user is able to send to your application."),Object(a.b)("p",null,"In FoalTS you can implement a rate limiter like the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nfriedly/express-rate-limit"}),"express-rate-limit")," package by creating a customized ",Object(a.b)("inlineCode",{parentName:"p"},"express")," object and passing it as a parameter to the FoalTS ",Object(a.b)("inlineCode",{parentName:"p"},"createApp")," function."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: Because the rate limiter response for rate limited requests does not get handled by FoalTS and its hooks, you need to manually set the default FoalTS headers to the response object of the rate limiter in its ",Object(a.b)("inlineCode",{parentName:"p"},"handle")," function.\nIf you don't manually set any headers only the default Express.js headers will be set in the response.")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/index.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// std\nimport * as http from 'http';\n\n// 3p\nimport { Config, createApp } from '@foal/core';\nimport * as express from 'express';\nimport * as rateLimit from 'express-rate-limit';\n\n// App\nimport { AppController } from './app/app.controller';\n\nasync function main() {\n  // Connection to the database(s)...\n    \n  const expressApp = express();\n  expressApp.use(rateLimit({\n    max: 100, // limit each IP to 100 requests per windowMs\n    windowMs: 15 * 60 * 1000, // 15 minutes\n    handler: function (req, res, next) {\n      // Set default FoalTS headers to the response of limited requests\n      res.removeHeader('X-Powered-By');\n      res.setHeader('X-Content-Type-Options', 'nosniff');\n      res.setHeader('X-Frame-Options', 'SAMEORIGIN');\n      res.setHeader('X-XSS-Protection', '1; mode=block');\n      res.setHeader('Strict-Transport-Security', 'max-age=15552000; includeSubDomains');\n      \n      // Send the response with the default statusCode and message from rateLimit\n      res.status(this.statusCode).send(this.message);\n    }\n  }));\n    \n  const app = await createApp(AppController, { expressInstance: expressApp });\n    \n  const httpServer = http.createServer(app);\n  const port = Config.get('port', 'number', 3001);\n  httpServer.listen(port, () => {\n    console.log(`Listening on port ${port}...`);\n  });\n}\n\nmain();\n")),Object(a.b)("h2",{id:"rate-limiting-with-cors"},"Rate limiting with CORS"),Object(a.b)("p",null,"If you need CORS headers in a rate limited response, you will need to manually add the headers in the rate limiter ",Object(a.b)("inlineCode",{parentName:"p"},"handler")," function accordingly."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"expressApp.use(rateLimit({\n  max: 100,\n  windowMs: 15 * 60 * 1000,\n  handler: function (req, res, next) {\n    // Set default FoalTS headers to the response of limited requests\n    res.removeHeader('X-Powered-By');\n    res.setHeader('X-Content-Type-Options', 'nosniff');\n    res.setHeader('X-Frame-Options', 'SAMEORIGIN');\n    res.setHeader('X-XSS-Protection', '1; mode=block');\n    res.setHeader('Strict-Transport-Security', 'max-age=15552000; includeSubDomains');\n\n    // Set CORS headers\n    res.setHeader('Access-Control-Allow-Origin', '*');\n    if (req.method === 'OPTIONS') {\n      // You may want to allow other headers depending on what you need.\n      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');\n      res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');\n    }\n\n    // Send the response with the default statusCode and message from rateLimit\n    res.status(this.statusCode).send(this.message);\n  }\n}));\n")),Object(a.b)("p",null,"You can find more options for ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/express-rate-limit"}),"express-rate-limit")," in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nfriedly/express-rate-limit"}),"documentation"),"."))}l.isMDXComponent=!0}}]);