(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(21)},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(6),o=n(1),r=n(2),c=n(3),l=n(5),i=n(4),u=n(0),s=n.n(u),m=(n(12),function(e){var t=e.toDo,n=e.done;return s.a.createElement("div",{className:"app-header container d-flex"},s.a.createElement("h1",null,"\u0555\u0580\u057e\u0561 \u054a\u056c\u0561\u0576"),s.a.createElement("h2",null,t," \u0563\u0578\u0580\u056e \u056f\u0561\u057f\u0561\u0580\u0565\u0574 \u0565\u0574, ",n," \u0563\u0578\u0580\u056e \u057a\u0565\u057f\u0584 \u0567 \u056f\u0561\u057f\u0561\u0580\u0565\u0574"))}),d=(n(13),function(){return s.a.createElement("div",{className:"top-panel d-flex"},s.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"\u0578\u0580\u0578\u0576\u0565\u056c\u2024\u2024\u2024"}))}),f=n(9),p=(n(14),function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.ToDeleted,a=e.onToggleDone,o=e.onToggleImportant,r="todo-list-item ";return e.done&&(r+=" done"),e.important&&(r+=" important"),s.a.createElement("span",{className:r},s.a.createElement("span",{onClick:a},"    ",t,"  "),s.a.createElement("button",{onClick:o,type:"button",className:"btn btn-outline-success btn-sm float-right "},s.a.createElement("i",{className:"fa fa-exclamation"})),s.a.createElement("button",{onClick:n,type:"button",className:"btn btn-outline-danger btn-sm float-right"},s.a.createElement("i",{className:"fa fa-trash-o"})))}}]),n}(s.a.Component)),b=(n(15),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleImportant,o=e.onToggleDone,r=t.map((function(e){var t=e.id,r=Object(f.a)(e,["id"]);return s.a.createElement("li",{key:t,className:"list-color list-group-item"},s.a.createElement(p,Object.assign({},r,{ToDeleted:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleDone:function(){return o(t)}})))}));return s.a.createElement("ul",{className:"list-group todo-list"},r)}),g=(n(16),n(17),function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={label:""},e.onLabelChange=function(t){e.setState({label:t.target.value})},e.onsub=function(t){t.preventDefault(),e.props.onItemAdded(e.state.label),e.setState({label:""})},e}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("form",{className:"addItem d-flex"},s.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"\u0546\u0578\u0580 \u0563\u0578\u0580\u056e\u2024\u2024\u2024",value:this.state.label}),s.a.createElement("button",{className:"btn btn-danger",onClick:this.onsub},"\u0531\u057e\u0565\u056c\u0561\u0581\u0576\u0565\u056c"))}}]),n}(s.a.Component)),h=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,l=new Array(c),i=0;i<c;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).maxId=1,e.state={todoData:[e.createTodoItem("Drink Coffee"),e.createTodoItem("Make Awesome App"),e.createTodoItem("Have a lunch")],visiblfiltr:""},e.addItem=function(t){var n=e.createTodoItem(t);e.setState((function(e){var t=e.todoData;return{todoData:[].concat(Object(o.a)(t),[n])}}))},e.deleteItem=function(t){e.setState((function(e){var n=e.todoData,a=n.findIndex((function(e){return e.id===t}));return{todoData:[].concat(Object(o.a)(n.slice(0,a)),Object(o.a)(n.slice(a+1)))}}))},e.onToggleDone=function(t){e.setState((function(e){var n=e.todoData,r=n.findIndex((function(e){return e.id===t})),c=Object(a.a)(Object(a.a)({},n[r]),{},{done:!n[r].done});return{todoData:[].concat(Object(o.a)(n.slice(0,r)),[c],Object(o.a)(n.slice(r+1)))}}))},e.onToggleImportant=function(t){e.setState((function(e){var n=e.todoData,r=n.findIndex((function(e){return e.id===t})),c=Object(a.a)(Object(a.a)({},n[r]),{},{important:!n[r].important});return{todoData:[].concat(Object(o.a)(n.slice(0,r)),[c],Object(o.a)(n.slice(r+1)))}}))},e}return Object(c.a)(n,[{key:"createTodoItem",value:function(e){return{label:e,important:!1,done:!1,id:this.maxId++}}},{key:"search",value:function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.indexOf(t)>-1}))}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.visiblfiltr,a=this.search(t,n),o=t.filter((function(e){return e.done})).length,r=t.length-o;return s.a.createElement("div",{className:"todo-app"},s.a.createElement(m,{toDo:o,done:r}),s.a.createElement(d,null),s.a.createElement(b,{todos:a,onDeleted:this.deleteItem,onToggleDone:this.onToggleDone,onToggleImportant:this.onToggleImportant}),s.a.createElement(g,{onItemAdded:this.addItem}))}}]),n}(s.a.Component),v=n(8);n.n(v).a.render(s.a.createElement(h,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.9b0b5e81.chunk.js.map