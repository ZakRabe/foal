(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{250:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(m,i(i({ref:t},l),{},{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},302:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/introduction-report-ec779378236fb937b330af576a59e2ca.png"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(250)),s={title:"Introduction"},i={unversionedId:"testing/introduction",id:"version-1.x/testing/introduction",isDocsHomePage:!1,title:"Introduction",description:"Every shipped app should come with a minimum set of tests. Writing tests lets you find problems early, facilitate changes and document your code. FoalTS is designed to be easily testable and provides the tools you need to write tests right away.",source:"@site/versioned_docs/version-1.x/testing/introduction.md",slug:"/testing/introduction",permalink:"/docs/1.x/testing/introduction",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/testing/introduction.md",version:"1.x",sidebar:"someSidebar",previous:{title:"Visual Studio Code",permalink:"/docs/1.x/development-environment/vscode"},next:{title:"Unit Testing",permalink:"/docs/1.x/testing/unit-testing"}},c=[{value:"The Mocha Framework",id:"the-mocha-framework",children:[]},{value:"The <code>assert</code> Node.js module",id:"the-assert-nodejs-module",children:[]}],l={rightToc:c};function u(e){var t=e.components,s=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Every shipped app should come with a ",Object(a.b)("strong",{parentName:"p"},"minimum set of tests"),". Writing tests lets you find problems early, facilitate changes and document your code. FoalTS is designed to be easily testable and provides the tools you need to write tests right away."),Object(a.b)("h2",{id:"the-mocha-framework"},"The Mocha Framework"),Object(a.b)("p",null,"The testing ecosystem is based on the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://mochajs.org/"}),"Mocha")," framework. It provides functions to help you structuring your tests and also making assertions."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"describe")," function groups tests (or groups of tests) together."),Object(a.b)("li",{parentName:"ul"},"And the ",Object(a.b)("inlineCode",{parentName:"li"},"it")," function defines an individual test.")),Object(a.b)("p",null,"Using these two helpers lets you organize your tests in a readable way and print comprehensive reports."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"describe('The number 1', () => {\n\n  it('should be equal to 1.', () => {\n    if (1 !== 1) {\n      throw new Error();\n    }\n  })\n\n  it('should not be equal to 2.', () => {\n    if (1 === 2) {\n      throw new Error();\n    }\n  });\n\n})\n")),Object(a.b)("p",null,"Running this file with mocha gives you the below report:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Test report",src:n(302).default})),Object(a.b)("h2",{id:"the-assert-nodejs-module"},"The ",Object(a.b)("inlineCode",{parentName:"h2"},"assert")," Node.js module"),Object(a.b)("p",null,"In addition to the Mocha framework, you can use the Node.js built-in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/api/assert.html"}),"assert")," module. It provides some useful functions such as ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/api/assert.html#assert_assert_ok_value_message"}),"ok"),", ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/api/assert.html#assert_assert_strictequal_actual_expected_message"}),"strictEqual")," or ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/api/assert.html#assert_assert_deepstrictequal_actual_expected_message"}),"deepStrictEqual")," to make your tests more readable and concise."),Object(a.b)("p",null,"The previous code can be refactored as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { strictEqual } from 'assert';\n\ndescribe('The number 1', () => {\n\n  it('should be equal to 1.', () => {\n    strictEqual(1, 1);\n  })\n\n  it('should not be equal to 2.', () => {\n    strictEqual(1, 2);\n  });\n\n})\n")))}u.isMDXComponent=!0}}]);