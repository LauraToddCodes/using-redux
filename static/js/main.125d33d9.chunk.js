(this["webpackJsonpusing-redux"]=this["webpackJsonpusing-redux"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);n(0);var c=n(14),i=n.n(c),a=n(9),r=n(3),s=n(1);var d=function(){return Object(s.jsxs)("nav",{children:[Object(s.jsx)(a.b,{to:"/",children:"Home"}),Object(s.jsx)(a.b,{to:"/saved",children:"Saved"})]})},j=n(11),o="SAVE_ITEM",u="REMOVE_ITEM";var v=Object(j.b)((function(e){return{items:e.save.items}}),(function(e){return{saveItem:function(t){return e({type:o,payload:{id:t}})}}}))((function(e){var t=e.items,n=e.saveItem;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Home"}),Object(s.jsx)("div",{children:t.map((function(e){return Object(s.jsxs)("div",{id:e.id,className:"animal",children:[e.name,Object(s.jsx)("button",{onClick:function(){return n(e.id)},children:"Save"})]},e.id)}))})]})}));var b=Object(j.b)((function(e){return{savedItems:e.save.savedItems}}),(function(e){return{removeItem:function(t){return e({type:u,payload:{id:t}})}}}))((function(e){var t=e.savedItems,n=e.removeItem;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Saved"}),Object(s.jsx)("div",{children:t.map((function(e){return Object(s.jsxs)("div",{id:e.id,className:"animal",children:[e.name,Object(s.jsx)("button",{onClick:function(){return n(e.id)},children:"Remove"})]},e.id)}))})]})}));n(34);var m=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(d,{}),Object(s.jsxs)(r.c,{children:[Object(s.jsx)(r.a,{exact:!0,path:"/",component:v}),Object(s.jsx)(r.a,{exact:!0,path:"/saved",component:b})]})]})},l=n(10),O=n(21),h=n(12),x={items:[{id:"0",name:"Cow"},{id:"1",name:"Chicken"},{id:"2",name:"Pig"},{id:"3",name:"Goat"}],savedItems:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n=e.items.find((function(e){return e.id===t.payload.id})),c=e.savedItems.find((function(e){return e.id===t.payload.id}));return Object(h.a)(Object(h.a)({},e),{},{savedItems:c?Object(O.a)(e.savedItems):[].concat(Object(O.a)(e.savedItems),[Object(h.a)({},n)])});case u:return Object(h.a)(Object(h.a)({},e),{},{savedItems:e.savedItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},p=Object(l.b)({save:f}),I=Object(l.c)(p);i.a.render(Object(s.jsx)(j.a,{store:I,children:Object(s.jsx)(a.a,{children:Object(s.jsx)(m,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.125d33d9.chunk.js.map