(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[618],{70371:function(e,t,n){Promise.resolve().then(n.bind(n,29457))},29457:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var s=n(57437),r=n(17156),i=n(46316),a=n(69476),o=n(74830),l=n(2265),c=n(98564),d=n(49),m=n(68038),h=n(56551),x=n(54247),u=n(20357);let f=new x.W({region:"us-east-1",credentials:{accessKeyId:u.env.AWS_ACCESS_KEY_ID,secretAccessKey:u.env.AWS_SECRET_ACCESS_KEY}});var j=n(80511),g=n(13718),p=n(24732),b=n(68396);let Z=(0,p.Z)({palette:{primary:{cloudBurst:"#374151",main:"#3f50b5",dark:"#111827",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}}),y={values:{fName:"",lName:"",phone:"",reqEmail:"",subject:"",message:"",checked:!1},isLoading:!1};var v=()=>{let[e,t]=(0,l.useState)(y),{values:n,isLoading:x}=e,u=(0,g.Z)(),p=e=>{let{name:n,value:s}=e.target;t(e=>({...e,values:{...e.values,[n]:s}}))},v=async e=>{e.preventDefault(),t(e=>({...e,isLoading:!0}));let s='\n    <div style="font-family: Arial, sans-serif; color: #333;">\n        <h2 style="color: #0056b3;">New Contact Request</h2>\n        <p><strong>First Name:</strong> '.concat(n.fName,"</p>\n        <p><strong>Last Name:</strong> ").concat(n.lName,"</p>\n        <p><strong>Phone Number:</strong> ").concat(n.phone,"</p>\n        <p><strong>Email:</strong> ").concat(n.reqEmail,"</p>\n        <p><strong>Subject:</strong> ").concat(n.subject,'</p>\n        <h3>Message:</h3>\n        <p style="border-left: 4px solid #ddd; padding-left: 10px; color: #555;">\n            ').concat(n.message,"\n        </p>\n        <br />\n        <hr />\n        <p>This message was sent from your website contact form.</p>\n    </div>\n"),r=new h.K({Destination:{CcAddresses:n.checked?[n.reqEmail]:[],ToAddresses:["rmaxwell@sparkeunlimited.ca"]},Message:{Body:{Html:{Charset:"UTF-8",Data:s},Text:{Charset:"UTF-8",Data:n.message}},Subject:{Charset:"UTF-8",Data:n.subject}},Source:"info@sparkeunlimited.ca",ReplyToAddresses:[n.reqEmail]});try{await f.send(r)}catch(e){console.error("Error sending email:",e)}finally{t(e=>({...e,isLoading:!1}))}};return(0,s.jsxs)(r.Z,{sx:{bgcolor:"white",p:4,width:1},children:[(0,s.jsx)(b.Z,{theme:Z,children:(0,s.jsx)(j.Z,{variant:u?"h6":"h4",sx:{textAlign:"center",marginBottom:2,fontWeight:"bold",color:Z.palette.primary.dark},children:"Contact Form:"})}),(0,s.jsx)("form",{onSubmit:v,children:(0,s.jsxs)(i.Z,{container:!0,spacing:2,children:[["fName","lName","phone","reqEmail","subject"].map((e,t)=>(0,s.jsx)(i.Z,{item:"true",size:12,children:(0,s.jsx)(a.Z,{id:e,name:e,label:"reqEmail"===e?"Email":"phone"===e?"Phone Number":"fName"===e?"First Name":"lName"===e?"Last Name":"Subject",type:"phone"===e?"tel":"reqEmail"===e?"email":"text",variant:"outlined",fullWidth:!0,required:!0,value:n[e],onChange:p})},t)),(0,s.jsx)(i.Z,{item:"true",size:12,children:(0,s.jsx)(a.Z,{id:"message",name:"message",label:"Message",multiline:!0,rows:8,variant:"outlined",fullWidth:!0,required:!0,value:n.message,onChange:p})}),(0,s.jsx)(i.Z,{item:"true",size:12,children:(0,s.jsx)(d.Z,{children:(0,s.jsx)(m.Z,{control:(0,s.jsx)(c.Z,{id:"ccEmail",checked:n.checked,onChange:e=>{let{checked:n}=e.target;t(e=>({...e,values:{...e.values,checked:n}}))},color:"warning"}),label:"Would you like to be cc'd on this email?"})})}),(0,s.jsx)(i.Z,{item:"true",size:12,children:(0,s.jsx)(o.Z,{disabled:!n.fName||!n.lName||!n.phone||!n.reqEmail||!n.subject||!n.message||x,id:"submitButton",type:"submit",variant:"contained",color:"warning",fullWidth:!0,children:x?"Sending...":"Submit"})})]})})]})},E=n(35539),w=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("section",{className:"mb-6 w-full flex-center flex-col",children:[(0,s.jsx)("h1",{className:"h2_text text-center",children:(0,s.jsx)("p",{className:"orange_gradient text-center mb-6",children:"Contact Us"})}),(0,s.jsx)(E.Z,{contactpage:!0}),(0,s.jsx)(v,{})]})})},35539:function(e,t,n){"use strict";var s=n(57437),r=n(87138),i=n(17156),a=n(80511),o=n(13718),l=n(24732),c=n(68396),d=n(65549),m=n(32184),h=n(78498),x=n(86917),u=n(46316);let f=(0,l.Z)({palette:{primary:{cloudBurst:"#374151",main:"#3f50b5",dark:"#111827",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}});t.Z=e=>{let{contactpage:t}=e,n=(0,o.Z)();return(0,s.jsx)(c.Z,{theme:f,children:(0,s.jsxs)(i.Z,{sx:{bgcolor:"white",marginBottom:n?1:2,p:n?2:4,width:1},children:[(0,s.jsx)(a.Z,{variant:n?"h6":"h4",sx:{textAlign:"center",marginBottom:2,fontWeight:"bold",color:f.palette.primary.dark},children:"Contact Us for a Free Estimate"}),(0,s.jsx)(a.Z,{variant:n?"body2":"body1",sx:{marginBottom:2,color:f.palette.primary.cloudBurst},children:"At Spark-E Unlimited Electrical, we’re always here to answer your questions and help you make informed decisions. Whether you need a detailed estimate, more information about our services, or advice on an upcoming project, our team is ready to assist. Expect prompt responses and clear communication from the very first interaction."}),(0,s.jsx)(i.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",margin:"0 auto"},children:t?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(u.Z,{container:!0,alignItems:"center",children:[(0,s.jsx)(u.Z,{item:"true",size:12,sx:{display:"flex",textAlign:"center",justifyContent:"center"},children:(0,s.jsx)(a.Z,{variant:n?"h6":"h4",sx:{textAlign:"center",marginBottom:2,fontWeight:"bold",color:f.palette.primary.dark},children:"Location & Contact Information:"})}),(0,s.jsxs)(u.Z,{item:"true",size:12,sx:{marginBottom:4,display:"flex",textAlign:"center",justifyContent:"center"},children:[(0,s.jsx)(u.Z,{container:!0,children:(0,s.jsx)(u.Z,{item:"true",spacing:2,size:6,children:(0,s.jsxs)(m.Z,{dense:!0,children:[(0,s.jsxs)(h.ZP,{children:[(0,s.jsx)(x.Z,{children:(0,s.jsx)(d.Z,{fontSize:"small"})}),(0,s.jsx)(a.Z,{sx:{fontWeight:"bold"},variant:n?"body2":"body1",children:"Address:"})]}),(0,s.jsxs)(h.ZP,{children:[(0,s.jsx)(x.Z,{children:(0,s.jsx)(d.Z,{fontSize:"small"})}),(0,s.jsx)(a.Z,{sx:{fontWeight:"bold"},variant:n?"body2":"body1",children:"Phone:"})]}),(0,s.jsxs)(h.ZP,{children:[(0,s.jsx)(x.Z,{children:(0,s.jsx)(d.Z,{fontSize:"small"})}),(0,s.jsx)(a.Z,{sx:{fontWeight:"bold"},variant:n?"body2":"body1",children:"Email:"})]}),(0,s.jsxs)(h.ZP,{children:[(0,s.jsx)(x.Z,{children:(0,s.jsx)(d.Z,{fontSize:"small"})}),(0,s.jsx)(a.Z,{sx:{fontWeight:"bold"},variant:n?"body2":"body1",children:"Business Hours:"})]})]})})}),(0,s.jsxs)(m.Z,{dense:!0,children:[(0,s.jsx)(h.ZP,{children:(0,s.jsx)(a.Z,{variant:n?"body2":"body1",children:"367 Balinroan Cres., Nepean ON, K2J 3V1"})}),(0,s.jsx)(h.ZP,{children:(0,s.jsx)(a.Z,{variant:n?"body2":"body1",children:"(343)596-6337"})}),(0,s.jsx)(h.ZP,{children:(0,s.jsx)(a.Z,{variant:n?"body2":"body1",children:"rmaxwell@sparkeunlimited.ca"})}),(0,s.jsx)(h.ZP,{children:(0,s.jsx)(a.Z,{variant:n?"body2":"body1",children:"Mon-Fri: 5:00 PM – 9:00 PM"})}),(0,s.jsx)(h.ZP,{children:(0,s.jsx)(a.Z,{variant:n?"body2":"body1",children:"Sat-Sun: 9:00 AM – 9:00 PM"})})]})]})]})}):(0,s.jsx)(r.default,{href:"/contactus",className:"orange_grad_btn",children:(0,s.jsx)(a.Z,{sx:{fontWeight:"bold",display:"flex"},children:"Contact Us"})})})]})})}},13718:function(e,t,n){"use strict";var s=n(2265);t.Z=()=>{let[e,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>{t(window.innerWidth<=768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}}},function(e){e.O(0,[865,294,349,932,89,513,971,23,744],function(){return e(e.s=70371)}),_N_E=e.O()}]);