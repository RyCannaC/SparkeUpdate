"use strict";exports.id=88,exports.ids=[88],exports.modules={20534:(e,t,s)=>{s.d(t,{e1:()=>o,fk:()=>r,mJ:()=>i});var n=s(99805);let o=(e,t)=>(0,n.J)(e,t).then(e=>{if(e.length)try{return JSON.parse(e)}catch(t){throw t?.name==="SyntaxError"&&Object.defineProperty(t,"$responseBodyText",{value:e}),t}return{}}),r=async(e,t)=>{let s=await o(e,t);return s.message=s.message??s.Message,s},i=(e,t)=>{let s,n;let o=e=>{let t=e;return"number"==typeof t&&(t=t.toString()),t.indexOf(",")>=0&&(t=t.split(",")[0]),t.indexOf(":")>=0&&(t=t.split(":")[0]),t.indexOf("#")>=0&&(t=t.split("#")[1]),t},r=(s=e.headers,n="x-amzn-errortype",Object.keys(s).find(e=>e.toLowerCase()===n.toLowerCase()));return void 0!==r?o(e.headers[r]):void 0!==t.code?o(t.code):void 0!==t.__type?o(t.__type):void 0}},91088:(e,t,s)=>{s.d(t,{GetRoleCredentialsCommand:()=>D,SSOClient:()=>eG});var n=s(38085),o=s(65030),r=s(90251);let i=e=>({...e,useDualstackEndpoint:e.useDualstackEndpoint??!1,useFipsEndpoint:e.useFipsEndpoint??!1,defaultSigningName:"awsssoportal"}),a={UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}};class d extends r.sI{constructor(e){super(e),Object.setPrototypeOf(this,d.prototype)}}class c extends d{constructor(e){super({name:"InvalidRequestException",$fault:"client",...e}),this.name="InvalidRequestException",this.$fault="client",Object.setPrototypeOf(this,c.prototype)}}class u extends d{constructor(e){super({name:"ResourceNotFoundException",$fault:"client",...e}),this.name="ResourceNotFoundException",this.$fault="client",Object.setPrototypeOf(this,u.prototype)}}class p extends d{constructor(e){super({name:"TooManyRequestsException",$fault:"client",...e}),this.name="TooManyRequestsException",this.$fault="client",Object.setPrototypeOf(this,p.prototype)}}class l extends d{constructor(e){super({name:"UnauthorizedException",$fault:"client",...e}),this.name="UnauthorizedException",this.$fault="client",Object.setPrototypeOf(this,l.prototype)}}let h=e=>({...e,...e.accessToken&&{accessToken:r.oc}}),m=e=>({...e,...e.secretAccessKey&&{secretAccessKey:r.oc},...e.sessionToken&&{sessionToken:r.oc}}),y=e=>({...e,...e.roleCredentials&&{roleCredentials:m(e.roleCredentials)}});var f=s(20534),g=s(32491);let S=async(e,t)=>{let s;let n=(0,g.cu)(e,t),o=(0,r.UI)({},C,{[U]:e[A]});n.bp("/federation/credentials");let i=(0,r.UI)({[z]:[,(0,r.CE)(e[q],"roleName")],[O]:[,(0,r.CE)(e[R],"accountId")]});return n.m("GET").h(o).q(i).b(s),n.build()},b=async(e,t)=>{if(200!==e.statusCode&&e.statusCode>=300)return P(e,t);let s=(0,r.UI)({$metadata:k(e)}),n=(0,r.CE)((0,r.Wh)(await (0,f.e1)(e.body,t)),"body");return Object.assign(s,(0,r.qn)(n,{roleCredentials:r.F3})),s},P=async(e,t)=>{let s={...e,body:await (0,f.fk)(e.body,t)},n=(0,f.mJ)(e,s.body);switch(n){case"InvalidRequestException":case"com.amazonaws.sso#InvalidRequestException":throw await x(s,t);case"ResourceNotFoundException":case"com.amazonaws.sso#ResourceNotFoundException":throw await w(s,t);case"TooManyRequestsException":case"com.amazonaws.sso#TooManyRequestsException":throw await I(s,t);case"UnauthorizedException":case"com.amazonaws.sso#UnauthorizedException":throw await E(s,t);default:return v({output:e,parsedBody:s.body,errorCode:n})}},v=(0,r.PC)(d),x=async(e,t)=>{let s=(0,r.UI)({}),n=e.body;Object.assign(s,(0,r.qn)(n,{message:r.pY}));let o=new c({$metadata:k(e),...s});return(0,r.to)(o,e.body)},w=async(e,t)=>{let s=(0,r.UI)({}),n=e.body;Object.assign(s,(0,r.qn)(n,{message:r.pY}));let o=new u({$metadata:k(e),...s});return(0,r.to)(o,e.body)},I=async(e,t)=>{let s=(0,r.UI)({}),n=e.body;Object.assign(s,(0,r.qn)(n,{message:r.pY}));let o=new p({$metadata:k(e),...s});return(0,r.to)(o,e.body)},E=async(e,t)=>{let s=(0,r.UI)({}),n=e.body;Object.assign(s,(0,r.qn)(n,{message:r.pY}));let o=new l({$metadata:k(e),...s});return(0,r.to)(o,e.body)},k=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),C=e=>null!=e&&""!==e&&(!Object.getOwnPropertyNames(e).includes("length")||0!=e.length)&&(!Object.getOwnPropertyNames(e).includes("size")||0!=e.size),R="accountId",A="accessToken",O="account_id",q="roleName",z="role_name",U="x-amz-sso_bearer_token";class D extends r.mY.classBuilder().ep(a).m(function(e,t,s,r){return[(0,o.p2)(s,this.serialize,this.deserialize),(0,n.a3)(s,e.getEndpointParameterInstructions())]}).s("SWBPortalService","GetRoleCredentials",{}).n("SSOClient","GetRoleCredentialsCommand").f(h,y).ser(S).de(b).build(){}var F=s(50553),$=s(52031),j=s(46288),M=s(20197),N=s(8086),G=s(45808),T=s(54859),H=s(58213),_=s(82264);let L=async(e,t,s)=>({operation:(0,_.J)(t).operation,region:await (0,_.$)(e.region)()||(()=>{throw Error("expected `region` to be configured for `aws.auth#sigv4`")})()}),B=e=>{let t=[];switch(e.operation){case"GetRoleCredentials":case"ListAccountRoles":case"ListAccounts":case"Logout":t.push({schemeId:"smithy.api#noAuth"});break;default:t.push({schemeId:"aws.auth#sigv4",signingProperties:{name:"awsssoportal",region:e.region},propertiesExtractor:(e,t)=>({signingProperties:{config:e,context:t}})})}return t},V=e=>({...(0,H.K)(e)}),J={i8:"3.651.1"};var K=s(68542),Y=s(39916),W=s(61385),X=s(24407),Z=s(22025),Q=s(35841),ee=s(72667),et=s(63994),es=s(43611),en=s(99206),eo=s(68667),er=s(54833),ei=s(12750);let ea="required",ed="argv",ec="isSet",eu="booleanEquals",ep="error",el="endpoint",eh="tree",em="PartitionResult",ey="getAttr",ef={[ea]:!1,type:"String"},eg={[ea]:!0,default:!1,type:"Boolean"},eS={ref:"Endpoint"},eb={fn:eu,[ed]:[{ref:"UseFIPS"},!0]},eP={fn:eu,[ed]:[{ref:"UseDualStack"},!0]},ev={},ex={fn:ey,[ed]:[{ref:em},"supportsFIPS"]},ew={ref:em},eI={fn:eu,[ed]:[!0,{fn:ey,[ed]:[ew,"supportsDualStack"]}]},eE=[eb],ek=[eP],eC=[{ref:"Region"}],eR={version:"1.0",parameters:{Region:ef,UseDualStack:eg,UseFIPS:eg,Endpoint:ef},rules:[{conditions:[{fn:ec,[ed]:[eS]}],rules:[{conditions:eE,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:ep},{conditions:ek,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:ep},{endpoint:{url:eS,properties:ev,headers:ev},type:el}],type:eh},{conditions:[{fn:ec,[ed]:eC}],rules:[{conditions:[{fn:"aws.partition",[ed]:eC,assign:em}],rules:[{conditions:[eb,eP],rules:[{conditions:[{fn:eu,[ed]:[!0,ex]},eI],rules:[{endpoint:{url:"https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:ev,headers:ev},type:el}],type:eh},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:ep}],type:eh},{conditions:eE,rules:[{conditions:[{fn:eu,[ed]:[ex,!0]}],rules:[{conditions:[{fn:"stringEquals",[ed]:[{fn:ey,[ed]:[ew,"name"]},"aws-us-gov"]}],endpoint:{url:"https://portal.sso.{Region}.amazonaws.com",properties:ev,headers:ev},type:el},{endpoint:{url:"https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}",properties:ev,headers:ev},type:el}],type:eh},{error:"FIPS is enabled but this partition does not support FIPS",type:ep}],type:eh},{conditions:ek,rules:[{conditions:[eI],rules:[{endpoint:{url:"https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:ev,headers:ev},type:el}],type:eh},{error:"DualStack is enabled but this partition does not support DualStack",type:ep}],type:eh},{endpoint:{url:"https://portal.sso.{Region}.{PartitionResult#dnsSuffix}",properties:ev,headers:ev},type:el}],type:eh}],type:eh},{error:"Invalid Configuration: Missing Region",type:ep}]},eA=new ei.$X({size:50,params:["Endpoint","Region","UseDualStack","UseFIPS"]}),eO=(e,t={})=>eA.get(e,()=>(0,ei.B1)(eR,{endpointParams:e,logger:t.logger}));ei.DY.aws=er.Iu;let eq=e=>({apiVersion:"2019-06-10",base64Decoder:e?.base64Decoder??en.G,base64Encoder:e?.base64Encoder??en.s,disableHostPrefix:e?.disableHostPrefix??!1,endpointProvider:e?.endpointProvider??eO,extensions:e?.extensions??[],httpAuthSchemeProvider:e?.httpAuthSchemeProvider??B,httpAuthSchemes:e?.httpAuthSchemes??[{schemeId:"aws.auth#sigv4",identityProvider:e=>e.getIdentityProvider("aws.auth#sigv4"),signer:new et.VR},{schemeId:"smithy.api#noAuth",identityProvider:e=>e.getIdentityProvider("smithy.api#noAuth")||(async()=>({})),signer:new g.oH}],logger:e?.logger??new r.vk,serviceId:e?.serviceId??"SSO",urlParser:e?.urlParser??es.e,utf8Decoder:e?.utf8Decoder??eo.$x,utf8Encoder:e?.utf8Encoder??eo.GZ});var ez=s(97574);let eU=e=>{(0,r.H_)(process.version);let t=(0,ez.j)(e),s=()=>t().then(r.jv),n=eq(e);return(0,K.H)(process.version),{...n,...e,runtime:"node",defaultsMode:t,bodyLengthChecker:e?.bodyLengthChecker??Q.W,defaultUserAgentProvider:e?.defaultUserAgentProvider??(0,Y.fV)({serviceId:n.serviceId,clientVersion:J.i8}),maxAttempts:e?.maxAttempts??(0,X.M)(T.Hs),region:e?.region??(0,X.M)(N._c,N.zb),requestHandler:Z.NA.create(e?.requestHandler??s),retryMode:e?.retryMode??(0,X.M)({...T.aK,default:async()=>(await s()).retryMode||ee.CA}),sha256:e?.sha256??W.k.bind(null,"sha256"),streamCollector:e?.streamCollector??Z.CF,useDualstackEndpoint:e?.useDualstackEndpoint??(0,X.M)(N.G7),useFipsEndpoint:e?.useFipsEndpoint??(0,X.M)(N.NL)}};var eD=s(84959),eF=s(19193);let e$=e=>{let t=e.httpAuthSchemes,s=e.httpAuthSchemeProvider,n=e.credentials;return{setHttpAuthScheme(e){let s=t.findIndex(t=>t.schemeId===e.schemeId);-1===s?t.push(e):t.splice(s,1,e)},httpAuthSchemes:()=>t,setHttpAuthSchemeProvider(e){s=e},httpAuthSchemeProvider:()=>s,setCredentials(e){n=e},credentials:()=>n}},ej=e=>({httpAuthSchemes:e.httpAuthSchemes(),httpAuthSchemeProvider:e.httpAuthSchemeProvider(),credentials:e.credentials()}),eM=e=>e,eN=(e,t)=>{let s={...eM((0,eD.GW)(e)),...eM((0,r.kE)(e)),...eM((0,eF.cA)(e)),...eM(e$(e))};return t.forEach(e=>e.configure(s)),{...e,...(0,eD.A1)(s),...(0,r.SQ)(s),...(0,eF.AO)(s),...ej(s)}};class eG extends r.KU{constructor(...[e]){let t=i(eU(e||{})),s=(0,M.er)(t),o=(0,T.BC)(s),r=(0,N.Xb)(o),a=(0,F.S8)(r),d=eN(V((0,n.uW)(a)),e?.extensions||[]);super(d),this.config=d,this.middlewareStack.use((0,M.XJ)(this.config)),this.middlewareStack.use((0,T.NQ)(this.config)),this.middlewareStack.use((0,G.VG)(this.config)),this.middlewareStack.use((0,F.G2)(this.config)),this.middlewareStack.use((0,$.cV)(this.config)),this.middlewareStack.use((0,j.eV)(this.config)),this.middlewareStack.use((0,g.tZ)(this.config,{httpAuthSchemeParametersProvider:L,identityProviderConfigProvider:async e=>new g.K5({"aws.auth#sigv4":e.credentials})})),this.middlewareStack.use((0,g.aZ)(this.config))}destroy(){super.destroy()}}}};