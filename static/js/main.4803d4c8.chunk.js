(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(e,t,n){e.exports=n(67)},37:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(11),c=n.n(r),l=(n(37),n(9)),u=n(6),i=n(2),s=n(3),m=n(5),d=n(4),p=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.todo,n=t.completed,o=t.id,r=t.title;return a.a.createElement("li",{className:"todo-item"},a.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return e.props.handleChange(o)}}),a.a.createElement("span",{className:this.props.todo.completed?"completed":null},r),a.a.createElement("button",{className:"btn-style",onClick:function(){return e.props.deleteTodo(o)}},"X"))}}]),n}(a.a.Component),h=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("ul",null,this.props.todos.map((function(t){return a.a.createElement(p,{key:t.id,todo:t,handleChange:e.props.handleChange,deleteTodo:e.props.deleteTodo})}))))}}]),n}(a.a.Component),f=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("header",{className:"header-container"},a.a.createElement("h1",{className:"header-title"},"Simple Todo App"))}}]),n}(a.a.Component);var b=function(e){var t=Object(o.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1];return a.a.createElement("form",{className:"form-container",onSubmit:function(t){t.preventDefault(),e.addTodo(r),c("")}},a.a.createElement("input",{type:"text",placeholder:"Add Todo...",className:"input-text",value:r,onChange:function(e){c(e.target.value)}}),a.a.createElement("input",{type:"submit",value:"Submit",className:"input-submit"}))},v=n(14),E=n(13),j=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).submitThemeColor=o.submitThemeColor.bind(Object(E.a)(o)),o}return Object(s.a)(n,[{key:"submitThemeColor",value:function(e){e&&(console.log("handleChangeTheme"),this.props.saveColorTheme(e))}},{key:"componentWillReceiveProps",value:function(e){console.log("UNSAFE_componentWillReceiveProps: "+JSON.stringify(e)),document.documentElement.style.setProperty("--main-color",e.themeColor.color)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"footer"},a.a.createElement("div",{className:"vertical-center"},a.a.createElement("span",null,"Choose Theme "),a.a.createElement("button",{onClick:function(){return e.submitThemeColor("#ff0000")},className:"dot red"}),a.a.createElement("button",{onClick:function(){return e.submitThemeColor("#0000ff")},className:"dot blue"}),a.a.createElement("button",{onClick:function(){return e.submitThemeColor("#678c89")},className:"dot gray"})))}}]),n}(a.a.Component);var O=Object(v.b)((function(e){return{themeColor:e.color}}),(function(e){return{dispatch:e,saveColorTheme:function(t){return e(function(e){return{type:"CHANGE_THEME",payload:{color:e}}}(t))}}}))(j),y=n(16),C=n.n(y);var g=function(){var e=Object(o.useState)({todos:[]}),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){C.a.get("https://jsonplaceholder.typicode.com/todos",{params:{_limit:5}}).then((function(e){return r({todos:e.data})}))}),[]),a.a.createElement("div",{className:"container"},a.a.createElement(f,null),a.a.createElement(b,{addTodo:function(e){var t={title:e,completed:!1};C.a.post("https://jsonplaceholder.typicode.com/todos",t).then((function(e){console.log(e.data),r({todos:[].concat(Object(l.a)(n.todos),[e.data])})}))}}),a.a.createElement(h,{todos:n.todos,handleChange:function(e){r({todos:n.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},deleteTodo:function(e){C.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(t){return r({todos:Object(l.a)(n.todos.filter((function(t){return t.id!==e})))})}))}}),a.a.createElement(O,null))},T=n(15),N={color:"#FFFFFF"};var k=Object(T.a)({color:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_THEME":return console.log("themeReducer: "+JSON.stringify(e)),Object.assign({},e,{color:t.payload.color});default:return N}}}),S=Object(T.b)(k);c.a.render(a.a.createElement(v.a,{store:S},a.a.createElement(g,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.4803d4c8.chunk.js.map