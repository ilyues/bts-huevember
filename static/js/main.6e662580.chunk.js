(this["webpackJsonphuevember-react"]=this["webpackJsonphuevember-react"]||[]).push([[0],{36:function(e,c,t){},39:function(e,c,t){},57:function(e,c,t){},63:function(e,c,t){},64:function(e,c,t){},65:function(e,c,t){},66:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t(1),l=t.n(a),r=t(28),i=t.n(r),n=(t(36),t(13)),o=t.n(n),j=t(29),d=t(18),b=t(14),h=t.n(b),x=(t(39),t(15)),u=t.n(x),m=t(8);t(57);function O(){return Object(s.jsxs)("div",{className:"nav",children:[Object(s.jsx)(m.b,{to:"/",className:"nav-link",children:"today's prompt"}),Object(s.jsx)(m.b,{to:"/ab",className:"nav-link",children:"about + guidelines"}),Object(s.jsx)(m.b,{to:"/wkly",className:"nav-link",children:"weekly schedule"}),Object(s.jsx)(m.b,{to:"alt",className:"nav-link",children:"busy bee schedule"})]})}function y(){var e=l.a.useState(null),c=Object(d.a)(e,2),t=c[0],a=c[1],r=l.a.useState(null),i=Object(d.a)(r,2),n=i[0],b=i[1];function x(){return(x=Object(j.a)(o.a.mark((function e(){var c,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://api.airtable.com/v0/appmSi3iuK6vOde4s/Busy",{headers:{authorization:"Bearer ".concat("keycTv83fSC7kBjHT")}});case 2:return c=e.sent,e.next=5,u.a.get("https://api.airtable.com/v0/appmSi3iuK6vOde4s/Weekly",{headers:{authorization:"Bearer ".concat("keycTv83fSC7kBjHT")}});case 5:t=e.sent,a(c.data.records),b(t.data.records);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(l.a.useEffect((function(){!function(){x.apply(this,arguments)}()}),[]),!t)return Object(s.jsx)("div",{});if(!n)return Object(s.jsx)("div",{});for(var m,y=parseInt(h()().format("D")),v=h()().format("MMMM Do"),p=null,f=0;f<4;f++)y>=n[f].fields.FirstDay&&y<=n[f].fields.LastDay&&(p=n[f].fields);p||(p=n[0].fields);var N=15,g=15,C=30;for(f=0;f<11;f++)y<=t[f].fields.Day&&C>t[f].fields.Day&&(C=t[f].fields.Day,m=t[f].fields);return Object(s.jsxs)("div",{className:"home",children:[Object(s.jsx)(O,{}),Object(s.jsxs)("div",{className:"today-container",children:[Object(s.jsxs)("div",{className:"tagline",children:[Object(s.jsx)("a",{href:"https://twitter.com/search?q=%23BTShuevember2020&src=typeahead_click",children:"#BTSHUEVEMBER2020"})," ","with ",Object(s.jsx)("a",{href:"https://twitter.com/Katamism",children:"Kata"})," +"," ",Object(s.jsx)("a",{href:"https://twitter.com/kayedaily_",children:"Kaye"}),"!"]}),Object(s.jsx)("div",{className:"today",children:v}),Object(s.jsxs)("div",{className:"daily-prompt",children:[Object(s.jsxs)("div",{className:"prompt-header",children:["Day ",m.Day.toString().padStart(2,"0"),": "]}),Object(s.jsx)("div",{className:"daily-tagline",children:"next upcoming day"}),Object(s.jsx)("div",{className:"palette",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{style:{color:m.Colour1},children:m.Colour1}),Object(s.jsx)("li",{style:{color:m.Colour2},children:m.Colour2}),Object(s.jsx)("li",{style:{color:m.Colour3},children:m.Colour3}),Object(s.jsx)("li",{style:{color:m.Colour4},children:m.Colour4}),Object(s.jsx)("li",{style:{color:m.Colour5},children:m.Colour5})]})})]}),Object(s.jsxs)("div",{className:"weekly-prompt",children:[Object(s.jsxs)("div",{className:"prompt-header",children:[p.Name,":"]}),Object(s.jsx)("div",{className:"prompt-text",children:p.Prompt}),Object(s.jsx)("div",{className:"palette",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{style:{color:p.Colour1},children:p.Colour1}),Object(s.jsx)("li",{style:{color:p.Colour2},children:p.Colour2}),Object(s.jsx)("li",{style:{color:p.Colour3},children:p.Colour3}),Object(s.jsx)("li",{style:{color:p.Colour4},children:p.Colour4}),Object(s.jsx)("li",{style:{color:p.Colour5},children:p.Colour5})]})})]})]}),Object(s.jsx)("div",{className:"circle-1",children:Object(s.jsxs)("svg",{viewBox:"0 0 600 80",children:[Object(s.jsx)("circle",{cx:40,cy:g,r:N,fill:p.Colour1}),Object(s.jsx)("circle",{cx:80,cy:g,r:N,fill:p.Colour2}),Object(s.jsx)("circle",{cx:120,cy:g,r:N,fill:p.Colour3}),Object(s.jsx)("circle",{cx:160,cy:g,r:N,fill:p.Colour4}),Object(s.jsx)("circle",{cx:200,cy:g,r:N,fill:p.Colour5})]})}),Object(s.jsx)("div",{className:"circle-2",children:Object(s.jsxs)("svg",{viewBox:"0 0 600 80",children:[Object(s.jsx)("circle",{cx:40,cy:g,r:N,fill:m.Colour1}),Object(s.jsx)("circle",{cx:80,cy:g,r:N,fill:m.Colour2}),Object(s.jsx)("circle",{cx:120,cy:g,r:N,fill:m.Colour3}),Object(s.jsx)("circle",{cx:160,cy:g,r:N,fill:m.Colour4}),Object(s.jsx)("circle",{cx:200,cy:g,r:N,fill:m.Colour5})]})}),Object(s.jsxs)("div",{className:"insp-1",children:[Object(s.jsxs)("div",{className:"insp-header",children:[p.Name," inspo.png"]}),Object(s.jsx)("img",{className:"insp-img",src:p.InspURL})]}),Object(s.jsxs)("div",{className:"insp-2",children:[Object(s.jsxs)("div",{className:"insp-header",children:["Day ",m.Day," inspo.png"]}),Object(s.jsx)("img",{className:"insp-img",src:m.InspURL})]}),Object(s.jsxs)("div",{className:"signature",children:["site by ",Object(s.jsx)("a",{href:"https://twitter.com/ilyues",children:"@ilyues"})]})]})}t(63);var v=t.p+"static/media/huevember.92fe7abd.jpg";function p(){return Object(s.jsxs)("div",{className:"about",children:[Object(s.jsx)(O,{}),Object(s.jsxs)("div",{className:"about-container",children:[Object(s.jsxs)("div",{className:"about-text",children:[Object(s.jsx)("div",{className:"about-header",children:"What is #BTSHuevember?"}),Object(s.jsxs)("div",{className:"body-text",children:["A month-long color challenge based on palettes from BTS MVs; a huevember variant by"," ",Object(s.jsx)("a",{href:"https://twitter.com/kayedaily_",children:"@kayedaily_"})," and"," ",Object(s.jsx)("a",{href:"https://twitter.com/Katamism",children:"@katamism"}),".",Object(s.jsx)("p",{}),"#BTSHuevember2020's goal is to practice making art with a limited palette. Every week, there will be a main BTS-inspired prompt and palette available. If weekly's too slow, there's also an alternate schedule for you busier bees!",Object(s.jsx)("p",{})]}),Object(s.jsx)("div",{className:"about-header",children:"How can I join in?"}),Object(s.jsxs)("div",{className:"about-guidelines",children:[Object(s.jsxs)("div",{className:"guideline",children:[Object(s.jsx)("div",{className:"numbers",children:"01."}),Object(s.jsx)("div",{className:"body-text",children:"You can draw anything! It does not have to be MV or BTS related."})]}),Object(s.jsxs)("div",{className:"guideline",children:[Object(s.jsx)("div",{className:"numbers",children:"02."}),Object(s.jsx)("div",{className:"body-text",children:"Feel free to mix and match, jump around days, or adjust any of the palettes."})]}),Object(s.jsxs)("div",{className:"guideline",children:[Object(s.jsx)("div",{className:"numbers",children:"03."}),Object(s.jsxs)("div",{className:"body-text",children:["Anyone is free to join! Tag your art"," ",Object(s.jsx)("a",{href:"https://twitter.com/search?q=%23BTShuevember2020&src=typeahead_click",children:"#BTSHUEVEMBER2020"})," ","so everyone can see your hard work!"]})]})]})]}),Object(s.jsx)("img",{className:"drawing",src:v})]})]})}t(64);function f(){return Object(s.jsxs)("div",{className:"weekly",children:[Object(s.jsx)(O,{}),Object(s.jsx)("div",{className:"weekly-container",children:Object(s.jsx)("div",{className:"body-text",children:"There's nothing here yet!! I'm sorry :("})})]})}t(65);function N(){return Object(s.jsxs)("div",{className:"busy",children:[Object(s.jsx)(O,{}),Object(s.jsx)("div",{className:"busy-container",children:Object(s.jsx)("div",{className:"body-text",children:"There's nothing here yet either!! I'm sorry again :("})})]})}var g=t(2);function C(){return Object(s.jsx)(m.a,{children:Object(s.jsxs)(g.c,{children:[Object(s.jsx)(g.a,{exact:!0,path:"/",component:y}),Object(s.jsx)(g.a,{exact:!0,path:"/ab",component:p}),Object(s.jsx)(g.a,{exact:!0,path:"/wkly",component:f}),Object(s.jsx)(g.a,{exact:!0,path:"/alt",component:N})]})})}var w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,67)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,l=c.getLCP,r=c.getTTFB;t(e),s(e),a(e),l(e),r(e)}))};i.a.render(Object(s.jsx)(l.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root")),w()}},[[66,1,2]]]);
//# sourceMappingURL=main.6e662580.chunk.js.map