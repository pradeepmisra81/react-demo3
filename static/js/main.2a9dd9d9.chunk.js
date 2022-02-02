(this["webpackJsonpreact-demo3"]=this["webpackJsonpreact-demo3"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),l=n.n(c),s=(n(14),n(5)),i=n(2),r=n(9),u=(n(15),n(16),n(0)),j=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],l=n[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),j=r[0],o=r[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),x=b[0],h=b[1],O=Object(a.useState)(!0),m=Object(i.a)(O,2),v=m[0],p=m[1],f=Object(a.useState)(!0),g=Object(i.a)(f,2),_=g[0],N=g[1];return Object(u.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),0!==c.trim().length)if(0!==j.trim().length){var n={title:c,amount:+j,date:new Date(x)};e.onSaveExpenseData(n),l(""),o(""),h("")}else N(!1);else p(!1)},children:[Object(u.jsxs)("div",{className:"new-expense__controls",children:[Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{style:{color:v?"black":"red"},children:"Title"}),Object(u.jsx)("input",{type:"text",value:c,maxLength:50,placeholder:"Enter title",onChange:function(e){l(e.target.value)}})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{style:{color:_?"black":"red"},children:"Amount"}),Object(u.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,max:"10000000.00",pattern:"[+-]?\\d+(?:[.,]\\d+)?",placeholder:"Enter amount",onChange:function(e){o(e.target.value)}})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Date"}),Object(u.jsx)("input",{type:"date",min:"2021-01-01",max:"2022-12-31",value:x,onChange:function(e){h(e.target.value)}})]})]}),Object(u.jsxs)("div",{className:"new-expense__actions",children:[Object(u.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(u.jsx)("button",{type:"submit",children:"Add Expense"})]})]})},o=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],l=n[1];return Object(u.jsxs)("div",{className:"new-expense",children:[!c&&Object(u.jsx)("button",{onClick:function(){l(!0)},children:"Add New Expense"}),c&&Object(u.jsx)(j,{onSaveExpenseData:function(t){var n=Object(r.a)({id:Math.random().toString()},t);e.onAddExpense(n),l(!1)},onCancel:function(){l(!1)}})]})};n(18);var d=function(e){var t="card "+e.className;return Object(u.jsx)("div",{className:t,children:e.children})},b=(n(19),n(20),function(e){return Object(u.jsx)("div",{className:"expenses-filter",children:Object(u.jsxs)("div",{className:"expenses-filter__control",children:[Object(u.jsx)("label",{children:"Filter by year"}),Object(u.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(u.jsx)("option",{value:"2022",children:"2022"}),Object(u.jsx)("option",{value:"2021",children:"2021"}),Object(u.jsx)("option",{value:"2020",children:"2020"}),Object(u.jsx)("option",{value:"2019",children:"2019"})]})]})})});n(21);var x=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.getFullYear(),a=e.date.toLocaleString("en-US",{day:"2-digit"});return Object(u.jsxs)("div",{className:"expense_date",children:[Object(u.jsx)("div",{className:"expense-date__month",children:t}),Object(u.jsx)("div",{className:"expense-date__year",children:n}),Object(u.jsx)("div",{className:"expense-date__day",children:a})]})};n(22);var h=function(e){var t=Object(a.useState)(e.title),n=Object(i.a)(t,2),c=n[0],l=n[1];return Object(u.jsxs)(d,{className:"expense-item",children:[Object(u.jsx)(x,{date:e.date}),Object(u.jsxs)("div",{className:"expense-item__description",children:[Object(u.jsx)("h2",{children:c}),Object(u.jsxs)("div",{className:"expense-item__price",children:["Rs. ",e.amount]})]}),Object(u.jsx)("div",{className:"edit-expense button",children:Object(u.jsx)("button",{type:"button",onClick:function(){var e=prompt("Please enter new title of this expense item");null!==e&&e.length>0&&l(e)},children:"Update Epense Title"})})]})},O=(n(23),function(e){return 0===e.items.length?Object(u.jsx)("h2",{className:"expenses-list__fallback",children:"No expenses found."}):Object(u.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(u.jsx)(h,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),m=n(8),v=(n(24),n(25),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(u.jsxs)("div",{className:"chart-bar",children:[Object(u.jsx)("div",{className:"chart-bar__inner",children:Object(u.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(u.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),p=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(u.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(u.jsx)(v,{value:e.value,maxValue:n,label:e.label},Math.random().toString+e.label)}))})},f=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(m.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(u.jsx)(p,{dataPoints:n})};var g=function(e){var t=Object(a.useState)("2021"),n=Object(i.a)(t,2),c=n[0],l=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(u.jsx)("div",{children:Object(u.jsxs)(d,{className:"expenses",children:[Object(u.jsx)(b,{selected:c,onChangeFilter:function(e){l(e)}}),Object(u.jsx)(f,{expenses:s}),Object(u.jsx)(O,{items:s})]})})},_=[{id:"e1",title:"Kitchen Item",amount:1e4,date:new Date(2019,6,20)},{id:"e2",title:"Ayushmaan's Tution Fees",amount:6e3,date:new Date(2020,7,22)},{id:"e3",title:"House Rent",amount:12200,date:new Date(2021,11,15)},{id:"e4",title:"Mobile Recharge",amount:1200,date:new Date(2022,0,10)},{id:"e5",title:"Tatasky Recharge",amount:600,date:new Date(2022,0,10)},{id:"e6",title:"Indane Gas Booking",amount:903,date:new Date(2022,0,11)}],N=function(){var e=Object(a.useState)(_),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Expense Tracker"}),Object(u.jsx)(o,{onAddExpense:function(e){c((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(u.jsx)(g,{items:n}),Object(u.jsx)("h2",{children:"Hi, Pradeep"}),Object(u.jsx)("p",{children:"Let's start the Expense App in ReactJS"})]})};l.a.render(Object(u.jsx)(N,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.2a9dd9d9.chunk.js.map