(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(4),i=n.n(r),c=(n(10),n(1)),o=(n(11),n(2)),s="FETCH_TASK_DATA",u="CREATE_TASK",d="UPDATE_TASK",m="DELETE_TASK",b=function(e,t,n){fetch("http://127.0.0.1:8000/graphqlApi/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:t})}).then(function(e){if(e.ok)return e;var t=new Error("Error: "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(e){n(e.data)}).catch(function(e){return alert("error: "+e.message+"\n Please refresh your page")})};function p(e,t){switch(t.type){case s:return Object(o.a)({},e,{tasks:t.payload});case u:var n=[{node:t.payload}].concat(e.tasks);return Object(o.a)({},e,{tasks:n});case d:var a=e.tasks.filter(function(e){return e.node.id===t.payload.idIs?(e.node.title=t.payload.task.title,e.node.completed=t.payload.task.completed,e):e});return Object(o.a)({},e,{tasks:a});case m:return Object(o.a)({},e,{tasks:e.tasks.filter(function(e){return e.node.id!==t.payload})});default:return e}}var f=function(e){b("\n        query {\n            allTasks(first:20){\n                edges{\n                  node{\n                    id\n                    title\n                    completed\n                  }\n                }\n            }\n        }\n    ",{id:"",title:""},e)},k=function(e,t){b("\n    mutation creatingTask( $title: String!){\n      createTask(input:{\n        title:$title\n      }){\n      task{\n          id\n          title\n          completed\n        }\n      }\n    }\n  ",{title:e},t)},E=function(e,t){var n={id:e.node.id};b("\n    mutation deleteTask( $id:ID!){\n      deleteTask(input:{\n        Id:$id\n      }){\n      task{\n          id\n        }\n      }\n    }  \n  ",n,t)},v=function(e,t,n){var a={id:e.node.id,title:e.node.title};!0===t&&(a={id:e.node.id,completed:!e.node.completed});b("\n    mutation updateTask( $id:ID! , $title: String, $completed:Boolean){\n      updateTask(input:{\n        Id:$id, title: $title, completed: $completed\n      }){\n      task{\n          id\n          title\n          completed\n        }\n      }\n    }  \n  ",a,n)},y=Object(a.createContext)();var g=function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),r=n[0],i=n[1],b=Object(a.useReducer)(p,{tasks:[]}),g=Object(c.a)(b,2),T=g[0],h=g[1],w=0,j=function(e){return h({type:s,payload:e.allTasks.edges})},O=function(e){return h({type:u,payload:e.createTask.task})},S=function(e){return h({type:m,payload:w})},x=function(e){return h({type:d,payload:{idIs:w,task:e.updateTask.task}})};return Object(a.useEffect)(function(){!1===r&&(f(j),i(!0))},[]),l.a.createElement(y.Provider,{value:Object(o.a)({},T,{createTask:function(e){k(e,O)},deleteTask:function(e){w=e.node.id,E(e,S)},updatingTask:function(e,t){w=e.node.id,v(e,t,x)}})},e.children,"                              ")};function T(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),o=Object(c.a)(i,2),s=o[0],u=o[1],d=Object(a.useContext)(y),m=d.tasks,b=d.deleteTask,p=d.updatingTask,f=Object(a.useState)(!1),k=Object(c.a)(f,2),E=k[0],v=k[1],g=Object(a.useState)({node:{id:"",title:"",completed:""}}),T=Object(c.a)(g,2),h=T[0],w=T[1],j=document.getElementById("title");return!1===n&&(setTimeout(function(){u(!0)},6500),r(!0)),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"task-container"},l.a.createElement("div",{id:"form-wrapper"},l.a.createElement("form",{id:"form",onSubmit:function(e){e.preventDefault(),""==!j.value.replace(/\s/g,"")&&(E?(h.node.title=j.value,p(h,!1),j.value="",v(!1)):((0,d.createTask)(j.value),j.value=""))}},l.a.createElement("div",{className:"flex-wrapper"},l.a.createElement("div",{style:{flex:6}},l.a.createElement("input",{className:"form-control",id:"title",type:"text",name:"title",placeholder:"Add task.."})),l.a.createElement("div",{style:{flex:1}},l.a.createElement("input",{id:"submit",className:"btn btn-warning",type:"submit",name:"Add"}))))),l.a.createElement("div",{id:"list-wrapper"},m.map(function(e){return l.a.createElement("div",{key:e.node.id,className:"task-wrapper flex-wrapper"},l.a.createElement("div",{onClick:function(){return function(e){p(e,!0)}(e)},style:{flex:7}}," ",!1===e.node.completed?l.a.createElement("span",null,e.node.title):l.a.createElement("strike",null,e.node.title)),l.a.createElement("div",{style:{flex:1}},l.a.createElement("button",{onClick:function(){return function(e){j.value=e.node.title,w(e),v(!0)}(e)},className:"btn btn-sm btn-outline-info"},"Edit")),l.a.createElement("div",{style:{flex:1}},l.a.createElement("button",{onClick:function(){return b(e)},className:"btn btn-sm btn-outline-dark delete"},l.a.createElement("i",{style:{color:"inherit"},className:"fa fa-trash"}))))})))),l.a.createElement("div",{style:!0===s?{visibility:""}:{visibility:"hidden"},id:"bubbles"},l.a.createElement("img",{src:"bubble.png",alt:"bubble"}),l.a.createElement("img",{src:"bubble.png",alt:"bubble"}),l.a.createElement("img",{src:"bubble.png",alt:"bubble"}),l.a.createElement("img",{src:"bubble.png",alt:"bubble"}),l.a.createElement("img",{src:"bubble.png",alt:"bubble"}),l.a.createElement("img",{src:"bubble.png",alt:"bubble"}),l.a.createElement("img",{src:"bubble.png",alt:"bubble"})))}var h=function(){return l.a.createElement(g,null,l.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}],[[5,1,2]]]);
//# sourceMappingURL=main.c1a04cda.chunk.js.map