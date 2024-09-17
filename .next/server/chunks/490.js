"use strict";exports.id=490,exports.ids=[490],exports.modules={6490:(e,r,n)=>{n.d(r,{fromIni:()=>v});var t=n(27634),i=n(15017);let o=(e,r,t)=>{let o={EcsContainer:async e=>{let{fromHttp:r}=await n.e(768).then(n.bind(n,23768)),{fromContainerMetadata:o}=await n.e(957).then(n.bind(n,78957));return t?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer"),(0,i.tS)(r(e??{}),o(e))},Ec2InstanceMetadata:async e=>{t?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");let{fromInstanceMetadata:r}=await n.e(957).then(n.bind(n,78957));return r(e)},Environment:async e=>{t?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");let{fromEnv:r}=await Promise.resolve().then(n.bind(n,80600));return r(e)}};if(e in o)return o[e];throw new i.mV(`Unsupported credential source in profile ${r}. Got ${e}, expected EcsContainer or Ec2InstanceMetadata or Environment.`,{logger:t})},s=(e,{profile:r="default",logger:n}={})=>!!e&&"object"==typeof e&&"string"==typeof e.role_arn&&["undefined","string"].indexOf(typeof e.role_session_name)>-1&&["undefined","string"].indexOf(typeof e.external_id)>-1&&["undefined","string"].indexOf(typeof e.mfa_serial)>-1&&(a(e,{profile:r,logger:n})||l(e,{profile:r,logger:n})),a=(e,{profile:r,logger:n})=>{let t="string"==typeof e.source_profile&&void 0===e.credential_source;return t&&n?.debug?.(`    ${r} isAssumeRoleWithSourceProfile source_profile=${e.source_profile}`),t},l=(e,{profile:r,logger:n})=>{let t="string"==typeof e.credential_source&&void 0===e.source_profile;return t&&n?.debug?.(`    ${r} isCredentialSourceProfile credential_source=${e.credential_source}`),t},d=async(e,r,s,a={})=>{s.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");let l=r[e];if(!s.roleAssumer){let{getDefaultRoleAssumer:e}=await n.e(861).then(n.bind(n,84861));s.roleAssumer=e({...s.clientConfig,credentialProviderLogger:s.logger,parentClientConfig:s?.parentClientConfig},s.clientPlugins)}let{source_profile:d}=l;if(d&&d in a)throw new i.mV(`Detected a cycle attempting to resolve credentials for profile ${(0,t.Jl)(s)}. Profiles visited: `+Object.keys(a).join(", "),{logger:s.logger});s.logger?.debug(`@aws-sdk/credential-provider-ini - finding credential resolver using ${d?`source_profile=[${d}]`:`profile=[${e}]`}`);let f=d?b(d,r,s,{...a,[d]:!0},c(r[d]??{})):(await o(l.credential_source,e,s.logger)(s))();if(c(l))return f;{let r={RoleArn:l.role_arn,RoleSessionName:l.role_session_name||`aws-sdk-js-${Date.now()}`,ExternalId:l.external_id,DurationSeconds:parseInt(l.duration_seconds||"3600",10)},{mfa_serial:n}=l;if(n){if(!s.mfaCodeProvider)throw new i.mV(`Profile ${e} requires multi-factor authentication, but no MFA code callback was provided.`,{logger:s.logger,tryNextLink:!1});r.SerialNumber=n,r.TokenCode=await s.mfaCodeProvider(n)}let t=await f;return s.roleAssumer(t,r)}},c=e=>!e.role_arn&&!!e.credential_source,f=e=>!!e&&"object"==typeof e&&"string"==typeof e.credential_process,g=async(e,r)=>n.e(528).then(n.bind(n,93528)).then(({fromProcess:n})=>n({...e,profile:r})()),u=async(e,r={})=>{let{fromSSO:t}=await n.e(520).then(n.bind(n,43520));return t({profile:e,logger:r.logger})()},_=e=>e&&("string"==typeof e.sso_start_url||"string"==typeof e.sso_account_id||"string"==typeof e.sso_session||"string"==typeof e.sso_region||"string"==typeof e.sso_role_name),p=e=>!!e&&"object"==typeof e&&"string"==typeof e.aws_access_key_id&&"string"==typeof e.aws_secret_access_key&&["undefined","string"].indexOf(typeof e.aws_session_token)>-1&&["undefined","string"].indexOf(typeof e.aws_account_id)>-1,y=(e,r)=>(r?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials"),Promise.resolve({accessKeyId:e.aws_access_key_id,secretAccessKey:e.aws_secret_access_key,sessionToken:e.aws_session_token,...e.aws_credential_scope&&{credentialScope:e.aws_credential_scope},...e.aws_account_id&&{accountId:e.aws_account_id}})),w=e=>!!e&&"object"==typeof e&&"string"==typeof e.web_identity_token_file&&"string"==typeof e.role_arn&&["undefined","string"].indexOf(typeof e.role_session_name)>-1,m=async(e,r)=>n.e(945).then(n.bind(n,47945)).then(({fromTokenFile:n})=>n({webIdentityTokenFile:e.web_identity_token_file,roleArn:e.role_arn,roleSessionName:e.role_session_name,roleAssumerWithWebIdentity:r.roleAssumerWithWebIdentity,logger:r.logger,parentClientConfig:r.parentClientConfig})()),b=async(e,r,n,t={},o=!1)=>{let a=r[e];if(Object.keys(t).length>0&&p(a))return y(a,n);if(o||s(a,{profile:e,logger:n.logger}))return d(e,r,n,t);if(p(a))return y(a,n);if(w(a))return m(a,n);if(f(a))return g(n,e);if(_(a))return await u(e,n);throw new i.mV(`Could not resolve credentials using profile: [${e}] in configuration/credentials file(s).`,{logger:n.logger})},v=(e={})=>async()=>{e.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");let r=await (0,t.MX)(e);return b((0,t.Jl)(e),r,e)}}};