"use strict";exports.id=356,exports.ids=[356],exports.modules={57356:(e,t,r)=>{r.d(t,{fromHttp:()=>p});var o=r(68942),n=r(97110),s=r(73292),a=r.n(s);let i=(e,t)=>{if("https:"!==e.protocol&&"169.254.170.2"!==e.hostname&&"169.254.170.23"!==e.hostname&&"[fd00:ec2::23]"!==e.hostname){if(e.hostname.includes("[")){if("[::1]"===e.hostname||"[0000:0000:0000:0000:0000:0000:0000:0001]"===e.hostname)return}else{if("localhost"===e.hostname)return;let t=e.hostname.split("."),r=e=>{let t=parseInt(e,10);return 0<=t&&t<=255};if("127"===t[0]&&r(t[1])&&r(t[2])&&r(t[3])&&4===t.length)return}throw new n.mV(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`,{logger:t})}};var c=r(41966),l=r(39539),d=r(62258);async function h(e,t){let r=(0,d.Ou)(e.body),o=await r.transformToString();if(200===e.statusCode){let e=JSON.parse(o);if("string"!=typeof e.AccessKeyId||"string"!=typeof e.SecretAccessKey||"string"!=typeof e.Token||"string"!=typeof e.Expiration)throw new n.mV("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }",{logger:t});return{accessKeyId:e.AccessKeyId,secretAccessKey:e.SecretAccessKey,sessionToken:e.Token,expiration:(0,l.uj)(e.Expiration)}}if(e.statusCode>=400&&e.statusCode<500){let r={};try{r=JSON.parse(o)}catch(e){}throw Object.assign(new n.mV(`Server responded with status: ${e.statusCode}`,{logger:t}),{Code:r.Code,Message:r.Message})}throw new n.mV(`Server responded with status: ${e.statusCode}`,{logger:t})}let u=(e,t,r)=>async()=>{for(let o=0;o<t;++o)try{return await e()}catch(e){await new Promise(e=>setTimeout(e,r))}return await e()},p=(e={})=>{let t;e.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");let r=e.awsContainerCredentialsRelativeUri??process.env.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI,s=e.awsContainerCredentialsFullUri??process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI,l=e.awsContainerAuthorizationToken??process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN,d=e.awsContainerAuthorizationTokenFile??process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE,p=e.logger?.constructor?.name!=="NoOpLogger"&&e.logger?e.logger.warn:console.warn;if(r&&s&&(p("@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri."),p("awsContainerCredentialsFullUri will take precedence.")),l&&d&&(p("@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile."),p("awsContainerAuthorizationToken will take precedence.")),s)t=s;else if(r)t=`http://169.254.170.2${r}`;else throw new n.mV(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`,{logger:e.logger});let w=new URL(t);i(w,e.logger);let g=new o.NA({requestTimeout:e.timeout??1e3,connectionTimeout:e.timeout??1e3});return u(async()=>{let t=function(e){return new c.aW({protocol:e.protocol,hostname:e.hostname,port:Number(e.port),path:e.pathname,query:Array.from(e.searchParams.entries()).reduce((e,[t,r])=>(e[t]=r,e),{}),fragment:e.hash})}(w);l?t.headers.Authorization=l:d&&(t.headers.Authorization=(await a().readFile(d)).toString());try{let e=await g.handle(t);return h(e.response)}catch(t){throw new n.mV(String(t),{logger:e.logger})}},e.maxRetries??3,e.timeout??1e3)}}};