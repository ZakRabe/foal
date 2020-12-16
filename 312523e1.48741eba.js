(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var o=n(3),r=n(7),a=(n(0),n(250)),s={title:"The REST API"},i={unversionedId:"tutorials/simple-todo-list/5-the-rest-api",id:"tutorials/simple-todo-list/5-the-rest-api",isDocsHomePage:!1,title:"The REST API",description:"Good, so far you have a frontend working properly and some todos in your database. Now it is time to code a REST API to link them both.",source:"@site/docs/tutorials/simple-todo-list/5-the-rest-api.md",slug:"/tutorials/simple-todo-list/5-the-rest-api",permalink:"/docs/tutorials/simple-todo-list/5-the-rest-api",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/simple-todo-list/5-the-rest-api.md",version:"current",sidebar:"someSidebar",previous:{title:"The Shell Script create-todo",permalink:"/docs/tutorials/simple-todo-list/4-the-shell-script-create-todo"},next:{title:"Validation & Sanitization",permalink:"/docs/tutorials/simple-todo-list/6-validation-and-sanitization"}},l=[],p={rightToc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Good, so far you have a frontend working properly and some todos in your database. Now it is time to code a REST API to link them both."),Object(a.b)("p",null,"To do so, you are going to use a ",Object(a.b)("em",{parentName:"p"},"controller"),". Controllers receive the HTTP requests and process them. They may call ",Object(a.b)("em",{parentName:"p"},"services")," in the background to help them do this. We will not study the services in this tutorial."),Object(a.b)("p",null,"Open the file ",Object(a.b)("inlineCode",{parentName:"p"},"api.controller.ts")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"src/app/controllers/")," directory and replace its content."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Get, HttpResponseOK } from '@foal/core';\n\nexport class ApiController {\n\n  @Get('/todos')\n  getTodos() {\n    const todos = [\n      { id: 1, text: 'My task 1' },\n      { id: 2, text: 'My task 2' }\n    ];\n    return new HttpResponseOK(todos);\n  }\n\n}\n")),Object(a.b)("p",null,"Controllers have special methods that define the routes and their respective handlers. These functions are decorated by one of the decorators ",Object(a.b)("inlineCode",{parentName:"p"},"Get"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Post"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Patch"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Put")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Delete")," which define the http method and the path of the route."),Object(a.b)("p",null,"In this case the controller responds with a 200 status and a mock data (the two fake todos)."),Object(a.b)("p",null,"Refresh your browser, you should see the two todos printed."),Object(a.b)("p",null,"Now, we would like to return the todos stored in the database. Update the code as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import {\n  Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent,\n  HttpResponseNotFound, HttpResponseOK, Post\n} from '@foal/core';\n\nimport { Todo } from '../entities';\n\nexport class ApiController {\n\n  @Get('/todos')\n  async getTodos() {\n    const todos = await Todo.find();\n    return new HttpResponseOK(todos);\n  }\n\n}\n")),Object(a.b)("p",null,"If you refresh your browser, you should now see the tasks that we created through the command line."),Object(a.b)("p",null,"Add the create and delete features."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"  @Post('/todos')\n  async postTodo(ctx: Context) {\n    // Create a new todo with the body of the HTTP request.\n    const todo = new Todo();\n    todo.text = ctx.request.body.text;\n\n    // Save the todo in the database.\n    await todo.save();\n\n    // Return the new todo with the id generated by the database. The status is 201.\n    return new HttpResponseCreated(todo);\n  }\n\n  @Delete('/todos/:id')\n  async deleteTodo(ctx: Context) {\n    // Get the todo with the id given in the URL if it exists.\n    const todo = await Todo.findOne({ id: ctx.request.params.id });\n\n    // Return a 404 Not Found response if no such todo exists.\n    if (!todo) {\n      return new HttpResponseNotFound();\n    }\n\n    // Remove the todo from the database.\n    await todo.remove();\n\n    // Returns an successful empty response. The status is 204.\n    return new HttpResponseNoContent();\n  }\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Context")," object, which is passed to each route handler, contains the express ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://expressjs.com/en/4x/api.html#req"}),"request object"),". This represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on."),Object(a.b)("p",null,"Now type a new todo in the input text and press Enter. The task appears in the todo list. Refresh the page, it should still be there. If you click on the checkbox, the todo is successfully deleted."),Object(a.b)("p",null,"The last thing to know is how the ",Object(a.b)("inlineCode",{parentName:"p"},"ApiController")," is bound to the request handler. You defined so far routes in this controller but never registered the controller anywhere. This is done in the ",Object(a.b)("inlineCode",{parentName:"p"},"app.controller.ts")," file, the entry point of your application."),Object(a.b)("p",null,"Open the file ",Object(a.b)("inlineCode",{parentName:"p"},"app.controller.ts")," in ",Object(a.b)("inlineCode",{parentName:"p"},"src/app"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { controller, IAppController } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController } from './controllers';\n\nexport class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController),\n  ];\n\n  async init() {\n    await createConnection();\n  }\n}\n")),Object(a.b)("p",null,"This controller is the main controller of the application. It is directly called when a request comes in. It may have sub-controllers that go in the ",Object(a.b)("inlineCode",{parentName:"p"},"controllers/")," directory."))}c.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,b=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.a.createElement(b,i(i({ref:t},p),{},{components:n})):r.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);