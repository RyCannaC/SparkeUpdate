(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[329],{93095:function(e,t,s){Promise.resolve().then(s.bind(s,79534))},79534:function(e,t,s){"use strict";s.r(t);var a=s(57437),l=s(2265),n=s(51305),r=s(75553),i=s(59887),u=s(59772);let c=u.z.object({justDate:u.z.date().nullable(),justTime:u.z.string().refine(e=>{let[t,s]=e.split(":").map(Number);return!isNaN(t)&&!isNaN(s)&&t>=0&&t<24&&s>=0&&s<60},"Invalid time format")});t.default=()=>{let[e,t]=(0,l.useState)({justDate:null,justTime:"17:00"});c.parse(e);let s=e.justDate?(0,r.t)(e.justDate,{hours:17,minutes:0}):null,u=e.justDate?(0,r.t)(e.justDate,{hours:22,minutes:0}):null,m=[];if(s&&u)for(let e=s;e<=u;e=(0,i.I)(e,{minutes:30}))m.push(e);return(0,a.jsxs)("section",{className:"w-full flex-center flex-col",children:[(0,a.jsxs)("h3",{children:[(0,a.jsx)("p",{className:"h2_text orange_gradient text-center",children:"Please select a date below"}),(0,a.jsxs)("p",{className:"desc text-center",children:[(0,a.jsx)("br",{className:"max-md:hidden"}),"Or use our ",(0,a.jsx)("a",{href:"/contactus",className:"orange_gradient",children:"Contact US"})," page.",(0,a.jsx)("br",{className:"max-md:hidden"})]})]}),(0,a.jsx)(n.ZP,{minDate:new Date,className:"react-calendar p-2",view:"month",onClickDay:e=>t(t=>({...t,justDate:e}))}),e.justDate&&(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{children:["Selected Date: ",e.justDate.toDateString()]}),(0,a.jsx)("select",{className:"react-calendar p-4",value:e.justTime,onChange:e=>{let s=e.target.value,a=c.shape.justTime.safeParse(s);if(a.success){let[e,a]=s.split(":").map(Number);t(t=>({...t,justTime:s,justDate:(0,r.t)(t.justDate,{hours:e,minutes:a})}))}else console.error(a.error)},children:m.map((e,t)=>(0,a.jsx)("option",{value:e.toTimeString().slice(0,5),children:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},t))})]})]})}}},function(e){e.O(0,[69,971,23,744],function(){return e(e.s=93095)}),_N_E=e.O()}]);