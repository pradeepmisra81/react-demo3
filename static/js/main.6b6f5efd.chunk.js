(this["webpackJsonpreact-demo3"]=this["webpackJsonpreact-demo3"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(3),c=n.n(s),d=(n(9),n(4)),m=(n(10),n(0));var o=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.getFullYear(),a=e.date.toLocaleString("en-US",{day:"2-digit"});return Object(m.jsxs)("div",{className:"expense_date",children:[Object(m.jsx)("div",{className:"expense-date__month",children:t}),Object(m.jsx)("div",{className:"expense-date__year",children:n}),Object(m.jsx)("div",{className:"expense-date__day",children:a})]})};n(12);var r=function(e){var t="card "+e.className;return Object(m.jsx)("div",{className:t,children:e.children})};n(13);var l=function(e){var t=Object(a.useState)(e.title),n=Object(d.a)(t,2),i=n[0],s=n[1];return Object(m.jsxs)(r,{className:"expense-item",children:[Object(m.jsx)(o,{date:e.date}),Object(m.jsxs)("div",{className:"expense-item__description",children:[Object(m.jsx)("h2",{children:i}),Object(m.jsxs)("div",{className:"expense-item__price",children:["Rs. ",e.amount]})]}),Object(m.jsx)("button",{onClick:function(){s("Updated !")},children:"Change Title"})]})};var j=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)(l,{title:e.items[0].title,amount:e.items[0].amount,date:e.items[0].date}),Object(m.jsx)(l,{title:e.items[1].title,amount:e.items[1].amount,date:e.items[1].date}),Object(m.jsx)(l,{title:e.items[2].title,amount:e.items[2].amount,date:e.items[2].date}),Object(m.jsx)(l,{title:e.items[3].title,amount:e.items[3].amount,date:e.items[3].date}),Object(m.jsx)(l,{title:e.items[4].title,amount:e.items[4].amount,date:e.items[4].date}),Object(m.jsx)(l,{title:e.items[5].title,amount:e.items[5].amount,date:e.items[5].date})]})};var u=function(){var e=[{id:"e1",title:"Kitchen Item",amount:1e4,date:new Date(2021,6,20)},{id:"e2",title:"Ayushmaan's Tution Fees",amount:6e3,date:new Date(2021,7,22)},{id:"e3",title:"House Rent",amount:12200,date:new Date(2021,11,15)},{id:"e4",title:"Mobile Recharge",amount:1200,date:new Date(2022,0,10)},{id:"e5",title:"Tatasky Recharge",amount:600,date:new Date(2022,0,10)},{id:"e6",title:"Indane Gas Booking",amount:903,date:new Date(2022,0,11)}];return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Hi, Pradeep"}),Object(m.jsx)("p",{children:"Let's start the Expense App in ReactJS"}),Object(m.jsx)(j,{items:e})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(u,{})}),document.getElementById("root")),x()}],[[14,1,2]]]);
//# sourceMappingURL=main.6b6f5efd.chunk.js.map