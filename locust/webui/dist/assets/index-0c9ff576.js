import{j as e,M as Se,B as d,I as Y,d as we,u as ge,r as u,a as ke,b as j,T as l,L as p,C as v,c as D,e as Ce,f as Te,g as ve,h as m,D as g,i as Re,k as De,l as f,F as $e,m as Pe,n as Ae,A as Z,o as X,p as ee,q as te,s as Ie,t as Ee,v as Me,P as Le,w as Fe,x as Ne,y as z,z as J,E as Ue,G as Oe,H as Ge,J as y,K as We,N as Be,O as He,Q as _e,R as qe,S as Ve,U as Ke,V as ze,W as Je,X as Qe,Y as Ye}from"./vendor-87854ba9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();function G({open:t,onClose:s,children:n}){return e.jsx(Se,{onClose:s,open:t,children:e.jsxs(d,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"md",display:"flex",flexDirection:"column",rowGap:2,bgcolor:"background.paper",boxShadow:24,borderRadius:2,p:4},children:[e.jsx(Y,{color:"inherit",onClick:s,sx:{position:"absolute",top:1,right:1},children:e.jsx(we,{})}),n]})})}const $=ge,Ze=ke;function k(t){const s=Ze();return u.useCallback(n=>{s(t(n))},[t,s])}const Xe=[{name:"Carl Byström",website:"http://cgbystrom.com/",social:{handle:"@cgbystrom",link:"https://twitter.com/cgbystrom/"}},{name:"Jonatan Heyman",website:"http://heyman.info/",social:{handle:"@jonatanheyman",link:"https://twitter.com/jonatanheyman/"}},{name:"Joakim Hamrén",social:{handle:"@jahaaja",link:"https://twitter.com/Jahaaja/"}},{name:"ESN Social Software",website:"http://esn.me/",social:{handle:"@uprise_ea",link:"https://twitter.com/uprise_ea"}},{name:"Hugo Heyman",social:{handle:"@hugoheyman",link:"https://twitter.com/hugoheyman/"}}];function et(){const[t,s]=u.useState(!1),n=$(({swarm:r})=>r.version);return e.jsxs(e.Fragment,{children:[e.jsx(d,{sx:{display:"flex",justifyContent:"flex-end"},children:e.jsx(j,{color:"inherit",onClick:()=>s(!0),variant:"text",children:"About"})}),e.jsxs(G,{onClose:()=>s(!1),open:t,children:[e.jsxs("div",{children:[e.jsx(l,{component:"h2",variant:"h4",children:"About"}),e.jsx(l,{component:"p",variant:"subtitle1",children:"The original idea for Locust was Carl Byström's who made a first proof of concept in June 2010. Jonatan Heyman picked up Locust in January 2011, implemented the current concept of Locust classes and made it work distributed across multiple machines."}),e.jsx(l,{component:"p",sx:{mt:2},variant:"subtitle1",children:"Jonatan, Carl and Joakim Hamrén has continued the development of Locust at their job, ESN Social Software, who have adopted Locust as an inhouse Open Source project."})]}),e.jsxs("div",{children:[e.jsx(l,{component:"h2",variant:"h4",children:"Authors and Copyright"}),e.jsx(d,{sx:{display:"flex",flexDirection:"column",rowGap:.5},children:Xe.map(({name:r,website:a,social:{handle:o,link:i}},c)=>e.jsxs("div",{children:[a?e.jsx(p,{href:a,children:r}):r,e.jsxs(d,{sx:{display:"inline",ml:.5},children:["(",e.jsx(p,{href:i,children:o}),")"]})]},`author-${c}`))})]}),e.jsxs("div",{children:[e.jsx(l,{component:"h2",variant:"h4",children:"License"}),e.jsx(l,{component:"p",variant:"subtitle1",children:"Open source licensed under the MIT license."})]}),e.jsxs("div",{children:[e.jsx(l,{component:"h2",variant:"h4",children:"Version"}),e.jsx(p,{href:`https://github.com/locustio/locust/releases/tag/${n}`,children:n})]}),e.jsxs("div",{children:[e.jsx(l,{component:"h2",variant:"h4",children:"Website"}),e.jsx(p,{href:"https://locust.io/",children:"https://locust.io"})]})]})]})}function tt(){return e.jsx(d,{component:"nav",sx:{position:"fixed",bottom:0,width:"100%"},children:e.jsx(v,{maxWidth:"xl",sx:{display:"flex",justifyContent:"flex-end"},children:e.jsx(et,{})})})}const st={isDarkMode:!1},se=D({name:"theme",initialState:st,reducers:{setIsDarkMode:(t,{payload:s})=>{t.isDarkMode=s}}}),nt=se.actions,rt=se.reducer,C={DARK:"dark",LIGHT:"light"},at=t=>Ce({palette:{mode:t,primary:{main:"#15803d"},success:{main:"#00C853"}}});function ot(){const t=$(({theme:{isDarkMode:r}})=>r),s=k(nt.setIsDarkMode);u.useEffect(()=>{s(localStorage.theme===C.DARK||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches)},[]);const n=()=>{localStorage.theme=t?C.LIGHT:C.DARK,s(!t)};return e.jsx(Y,{color:"inherit",onClick:n,children:t?e.jsx(Te,{}):e.jsx(ve,{})})}const x={READY:"ready",RUNNING:"running",STOPPED:"stopped",SPAWNING:"spawning",CLEANUP:"cleanup",STOPPING:"stopping",MISSING:"missing"};function it({isDistributed:t,state:s,host:n,totalRps:r,failRatio:a,userCount:o,workerCount:i}){return e.jsxs(d,{sx:{display:"flex",columnGap:2},children:[e.jsxs(d,{sx:{display:"flex",flexDirection:"column"},children:[e.jsx(l,{variant:"button",children:"Host"}),e.jsx(l,{children:n})]}),e.jsx(g,{flexItem:!0,orientation:"vertical"}),e.jsxs(d,{sx:{display:"flex",flexDirection:"column"},children:[e.jsx(l,{variant:"button",children:"Status"}),e.jsx(l,{variant:"button",children:s})]}),s===x.RUNNING&&e.jsxs(e.Fragment,{children:[e.jsx(g,{flexItem:!0,orientation:"vertical"}),e.jsxs(d,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(l,{variant:"button",children:"Users"}),e.jsx(l,{variant:"button",children:o})]})]}),t&&e.jsxs(e.Fragment,{children:[e.jsx(g,{flexItem:!0,orientation:"vertical"}),e.jsxs(d,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(l,{variant:"button",children:"Workers"}),e.jsx(l,{variant:"button",children:i})]})]}),e.jsx(g,{flexItem:!0,orientation:"vertical"}),e.jsxs(d,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(l,{variant:"button",children:"RPS"}),e.jsx(l,{variant:"button",children:r})]}),e.jsx(g,{flexItem:!0,orientation:"vertical"}),e.jsxs(d,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(l,{variant:"button",children:"Failures"}),e.jsx(l,{variant:"button",children:`${a}%`})]})]})}const ct=({swarm:{isDistributed:t,state:s,host:n,workerCount:r},ui:{totalRps:a,failRatio:o,userCount:i}})=>({isDistributed:t,state:s,host:n,totalRps:a,failRatio:o,userCount:i,workerCount:r}),lt=m(ct)(it);function ne({children:t,onSubmit:s}){const n=u.useCallback(async r=>{r.preventDefault();const a=new FormData(r.target),o={};for(const[i,c]of a.entries())o.hasOwnProperty(i)?(Array.isArray(o[i])||(o[i]=[o[i]]),o[i].push(c)):o[i]=c;s(o)},[s]);return e.jsx("form",{onSubmit:n,children:t})}const ut=t=>!Object.keys(t).length;function dt(t,s){return{...t,...s}}const mt=t=>{const s=new URLSearchParams;for(const[n,r]of Object.entries(t))if(Array.isArray(r))for(const a of r)s.append(n,a);else s.append(n,r);return s},W=(t,s)=>Object.entries(s).reduce((n,[r,a])=>({...n,[r]:[...n[r]||[],a]}),t);function re(t,s,n){return s&&(Array.isArray(s)?s.map(r=>re(t,r,n)):typeof s=="object"?B(s,n):s)}const B=(t,s)=>Object.entries(t).reduce((n,[r,a])=>({...n,[s(r)]:re(t,a,s)}),{}),ae=t=>t.replace(/_([a-z0-9])/g,(s,n)=>n.toUpperCase()),ht=t=>t[0]===t[0].toUpperCase()?t:t.replace(/([a-z0-9])([A-Z0-9])/g,"$1_$2").toLowerCase(),T=t=>B(t,ae),xt=t=>B(t,ht),pt=t=>t.replace(/([a-z0-9])([A-Z0-9])/g,"$1 $2").replace(/^./,s=>s.toUpperCase()),ft=t=>Object.fromEntries(new URLSearchParams(t).entries()),F=Re({baseQuery:De(),endpoints:t=>({getStats:t.query({query:()=>"stats/requests",transformResponse:T}),getTasks:t.query({query:()=>"tasks",transformResponse:T}),getExceptions:t.query({query:()=>"exceptions",transformResponse:T}),startSwarm:t.mutation({query:s=>({url:"swarm",method:"POST",body:mt(xt(s)),headers:{"content-type":"application/x-www-form-urlencoded"}})})})}),{useGetStatsQuery:jt,useGetTasksQuery:yt,useGetExceptionsQuery:bt,useStartSwarmMutation:oe}=F;function St({onSubmit:t,spawnRate:s,userCount:n}){const[r]=oe(),a=o=>{t(),r(o)};return e.jsxs(v,{maxWidth:"md",sx:{my:2},children:[e.jsx(l,{component:"h2",noWrap:!0,variant:"h6",children:"Edit running load test"}),e.jsx(ne,{onSubmit:a,children:e.jsxs(d,{sx:{my:2,display:"flex",flexDirection:"column",rowGap:4},children:[e.jsx(f,{defaultValue:n||1,label:"Number of users (peak concurrency)",name:"userCount"}),e.jsx(f,{defaultValue:s||1,label:"Ramp Up (users started/second)",name:"spawnRate"}),e.jsx(j,{size:"large",type:"submit",variant:"contained",children:"Update Swarm"})]})})]})}const wt=({swarm:{spawnRate:t,userCount:s}})=>({spawnRate:t,userCount:s}),gt=m(wt)(St);function kt(){const[t,s]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(j,{color:"secondary",onClick:()=>s(!0),type:"button",variant:"contained",children:"Edit"}),e.jsx(G,{onClose:()=>s(!1),open:t,children:e.jsx(gt,{onSubmit:()=>s(!1)})})]})}function N({label:t,name:s,options:n,multiple:r=!1,defaultValue:a,sx:o}){return e.jsxs($e,{sx:o,children:[e.jsx(Pe,{htmlFor:s,shrink:!0,children:t}),e.jsx(Ae,{defaultValue:a||r&&n||n[0],label:t,multiple:r,name:s,native:!0,children:n.map((i,c)=>e.jsx("option",{value:i,children:i},`option-${i}-${c}`))})]})}const Q=t=>t.defaultValue!==null&&typeof t.defaultValue!="boolean";function Ct({label:t,defaultValue:s,choices:n,helpText:r,isSecret:a}){const o=pt(t),i=r?`${o} (${r})`:o;return n?e.jsx(N,{defaultValue:s,label:i,name:t,options:n,sx:{width:"100%"}}):e.jsx(f,{label:i,name:t,sx:{width:"100%"},type:a?"password":"text",value:s})}function Tt({extraOptions:t}){const s=u.useMemo(()=>Object.entries(t).reduce((r,[a,o])=>Q(o)?[...r,{label:a,...o}]:r,[]),[t]),n=u.useMemo(()=>Object.keys(t).reduce((r,a)=>Q(t[a])?r:[...r,a],[]),[t]);return e.jsxs(Z,{children:[e.jsx(X,{expandIcon:e.jsx(ee,{}),children:e.jsx(l,{children:"Custom parameters"})}),e.jsx(te,{children:e.jsxs(d,{sx:{display:"flex",flexDirection:"column",rowGap:4},children:[s.map((r,a)=>e.jsx(Ct,{...r},`valid-parameter-${a}`)),e.jsx(d,{children:n&&e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"The following custom parameters can't be set in the Web UI, because it is a boolean or None type:"}),e.jsx("ul",{children:n.map((r,a)=>e.jsx("li",{children:e.jsx(l,{children:r})},`invalid-parameter-${a}`))})]})})]})})]})}function H(t,{payload:s}){return dt(t,s)}const vt=T(window.templateArgs),ie=D({name:"swarm",initialState:vt,reducers:{setSwarm:H}}),ce=ie.actions,Rt=ie.reducer;function Dt({availableShapeClasses:t,availableUserClasses:s,host:n,extraOptions:r,isShape:a,numUsers:o,overrideHostWarning:i,runTime:c,setSwarm:h,showUserclassPicker:b,spawnRate:S}){const[P]=oe(),w=A=>{h({state:x.RUNNING}),P(A)};return e.jsxs(v,{maxWidth:"md",sx:{my:2},children:[e.jsx(l,{component:"h2",noWrap:!0,variant:"h6",children:"Start new load test"}),e.jsx(ne,{onSubmit:w,children:e.jsxs(d,{sx:{my:2,display:"flex",flexDirection:"column",rowGap:4},children:[b&&e.jsxs(e.Fragment,{children:[e.jsx(N,{label:"User Classes",multiple:!0,name:"userClasses",options:s}),e.jsx(N,{label:"Shape Class",name:"shapeClass",options:t})]}),e.jsx(f,{defaultValue:a&&"-"||o||1,disabled:!!a,label:"Number of users (peak concurrency)",name:"userCount"}),e.jsx(f,{defaultValue:a&&"-"||S||1,disabled:!!a,label:"Ramp Up (users started/second)",name:"spawnRate",title:"Disabled for tests using LoadTestShape class"}),e.jsx(f,{defaultValue:n,label:`Host ${i?"(setting this will override the host for the User classes)":""}`,name:"host",title:"Disabled for tests using LoadTestShape class"}),e.jsxs(Z,{children:[e.jsx(X,{expandIcon:e.jsx(ee,{}),children:e.jsx(l,{children:"Advanced options"})}),e.jsx(te,{children:e.jsx(f,{defaultValue:c,label:"Run time (e.g. 20, 20s, 3m, 2h, 1h20m, 3h30m10s, etc.)",name:"runTime",sx:{width:"100%"}})})]}),!ut(r)&&e.jsx(Tt,{extraOptions:r}),e.jsx(j,{size:"large",type:"submit",variant:"contained",children:"Start Swarm"})]})})]})}const $t=({swarm:{availableShapeClasses:t,availableUserClasses:s,extraOptions:n,isShape:r,host:a,numUsers:o,overrideHostWarning:i,runTime:c,spawnRate:h,showUserclassPicker:b}})=>({availableShapeClasses:t,availableUserClasses:s,extraOptions:n,isShape:r,host:a,overrideHostWarning:i,showUserclassPicker:b,numUsers:o,runTime:c,spawnRate:h}),Pt={setSwarm:ce.setSwarm},le=m($t,Pt)(Dt);function At(){const[t,s]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(j,{color:"success",onClick:()=>s(!0),type:"button",variant:"contained",children:"New"}),e.jsx(G,{onClose:()=>s(!1),open:t,children:e.jsx(le,{})})]})}function It(){const t=()=>{fetch("stats/reset")};return e.jsx(j,{color:"warning",onClick:t,type:"button",variant:"contained",children:"Reset"})}function Et(){const[t,s]=u.useState(!1);u.useEffect(()=>{s(!1)},[]);const n=()=>{fetch("stop"),s(!0)};return e.jsx(j,{color:"error",disabled:t,onClick:n,type:"button",variant:"contained",children:t?"Loading":"Stop"})}function Mt(){const t=$(({swarm:s})=>s.state);return t===x.READY?null:t===x.STOPPED?e.jsx(At,{}):e.jsxs(d,{sx:{display:"flex",columnGap:2},children:[e.jsx(kt,{}),e.jsx(Et,{}),e.jsx(It,{})]})}function Lt(){return e.jsx(Ie,{position:"static",children:e.jsx(v,{maxWidth:"xl",children:e.jsxs(Ee,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsxs(p,{color:"inherit",href:"#",sx:{display:"flex",alignItems:"center",columnGap:2},underline:"none",children:[e.jsx("img",{height:"52",src:"/assets/logo.png",width:"52"}),e.jsx(l,{component:"h1",noWrap:!0,sx:{fontWeight:700,display:"flex",alignItems:"center"},variant:"h3",children:"Locust"})]}),e.jsxs(d,{sx:{display:"flex",columnGap:6},children:[e.jsx(lt,{}),e.jsx(Mt,{}),e.jsx(ot,{})]})]})})})}function Ft({children:t}){return e.jsxs(e.Fragment,{children:[e.jsx(Lt,{}),e.jsx("main",{children:t}),e.jsx(tt,{})]})}const U=(t,s=0)=>{const n=Math.pow(10,s);return Math.round(t*n)/n};function Nt({content:t,round:s,markdown:n}){return s?U(t,s):n?e.jsx(Oe,{skipHtml:!1,children:t}):t}function R({rows:t,structure:s}){return e.jsx(Me,{component:Le,children:e.jsxs(Fe,{children:[e.jsx(Ne,{children:e.jsx(z,{children:s.map(({title:n,key:r})=>e.jsx(J,{children:n},`table-head-${r}`))})}),e.jsx(Ue,{children:t.map((n,r)=>e.jsx(z,{children:s.map(({key:a,round:o,markdown:i},c)=>e.jsx(J,{children:e.jsx(Nt,{content:n[a],markdown:i,round:o})},`table-row=${c}`))},`${n.name}-${r}`))})]})})}function Ut({rows:t,tableStructure:s}){return s?e.jsx(R,{rows:t,structure:s}):null}const Ot=({swarm:{extendedTables:t},ui:{extendedStats:s},url:{query:n}})=>{const r=n&&n.tab&&t&&t.find(({key:o})=>o===n.tab),a=n&&n.tab&&s&&s.find(({key:o})=>o===n.tab);return{tableStructure:r?r.structure.map(({key:o,...i})=>({key:ae(o),...i})):null,rows:a?a.data:[]}},Gt=m(Ot)(Ut),Wt=[{key:"count",title:"# occurrences"},{key:"traceback",title:"Traceback"}];function Bt({exceptions:t}){return e.jsx(R,{rows:t,structure:Wt})}const Ht=({ui:{exceptions:t}})=>({exceptions:t}),_t=m(Ht)(Bt),qt=[{key:"occurrences",title:"# Failures"},{key:"method",title:"Method"},{key:"name",title:"Name"},{key:"error",title:"Message",markdown:!0}];function Vt({errors:t}){return e.jsx(R,{rows:t,structure:qt})}const Kt=({ui:{errors:t}})=>({errors:t}),zt=m(Kt)(Vt);function Jt({extendedCsvFiles:t,statsHistoryEnabled:s}){return e.jsxs(Ge,{sx:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:e.jsx(p,{href:"/stats/requests/csv",children:"Download requests CSV"})}),s&&e.jsx(y,{children:e.jsx(p,{href:"/stats/requests_full_history/csv",children:"Download full request statistics history CSV"})}),e.jsx(y,{children:e.jsx(p,{href:"/stats/failures/csv",children:"Download failures CSV"})}),e.jsx(y,{children:e.jsx(p,{href:"/exceptions/csv",children:"Download exceptions CSV"})}),e.jsx(y,{children:e.jsx(p,{href:"/stats/report",target:"_blank",children:"Download Report"})}),t&&t.map(({href:n,title:r})=>e.jsx(y,{children:e.jsx(p,{href:n,children:r})}))]})}const Qt=({swarm:{extendedCsvFiles:t,statsHistoryEnabled:s}})=>({extendedCsvFiles:t,statsHistoryEnabled:s}),Yt=m(Qt)(Jt),Zt=[{key:"method",title:"Type"},{key:"name",title:"Name"},{key:"numRequests",title:"# Requests"},{key:"numFailures",title:"# Fails"},{key:"medianResponseTime",title:"Median (ms)",round:2},{key:"ninetiethResponseTime",title:"90%ile (ms)"},{key:"ninetyNinthResponseTime",title:"99%ile (ms)"},{key:"avgResponseTime",title:"Average (ms)",round:2},{key:"minResponseTime",title:"Min (ms)"},{key:"maxResponseTime",title:"Max (ms)"},{key:"avgContentLength",title:"Average size (bytes)",round:2},{key:"currentRps",title:"Current RPS",round:2},{key:"currentFailPerSec",title:"Current Failures/s",round:2}];function Xt({stats:t}){return e.jsx(R,{rows:t,structure:Zt})}const es=({ui:{stats:t}})=>({stats:t}),ts=m(es)(Xt),ss=({charts:t,title:s,seriesData:n})=>({legend:{icon:"circle",inactiveColor:"#b3c3bc",textStyle:{color:"#b3c3bc"}},title:{text:s,x:10,y:10},tooltip:{trigger:"axis",formatter:r=>r&&Array.isArray(r)&&r.length>0&&r.some(a=>!!a.value)?r.reduce((a,{color:o,seriesName:i,value:c})=>`
          ${a}
          <br>
          <span style="color:${o};">
            ${i}:&nbsp${c}
          </span>
        `,""):"No data",axisPointer:{animation:!0},textStyle:{color:"#b3c3bc",fontSize:13},backgroundColor:"rgba(21,35,28, 0.93)",borderWidth:0,extraCssText:"z-index:1;"},xAxis:{type:"category",splitLine:{show:!1},axisLine:{lineStyle:{color:"#5b6f66"}},data:t.time},yAxis:{type:"value",boundaryGap:[0,"5%"],splitLine:{show:!1},axisLine:{lineStyle:{color:"#5b6f66"}}},series:n,grid:{x:60,y:70,x2:40,y2:40},color:["#00ca5a","#ff6d6d"],toolbox:{feature:{saveAsImage:{name:s.replace(/\s+/g,"_").toLowerCase()+"_"+new Date().getTime()/1e3,title:"Download as PNG",emphasis:{iconStyle:{textPosition:"left"}}}}}}),ns=({charts:t,lines:s})=>s.map(({key:n,name:r})=>({name:r,type:"line",showSymbol:!0,data:t[n]})),rs=t=>({symbol:"none",label:{formatter:s=>`Run #${s.dataIndex+1}`},lineStyle:{color:"#5b6f66"},data:(t.markers||[]).map(s=>({xAxis:s}))});We("locust",{backgroundColor:"#27272a",xAxis:{lineColor:"#f00"},textStyle:{color:"#b3c3bc"},title:{textStyle:{color:"#b3c3bc"}}});function as({charts:t,title:s,lines:n}){const[r,a]=u.useState(null),o=u.useRef(null);return u.useEffect(()=>{if(!o.current)return;const i=Be(o.current,"locust");return i.setOption(ss({charts:t,title:s,seriesData:ns({charts:t,lines:n})})),a(i),()=>{He(i)}},[o]),u.useEffect(()=>{const i=n.every(({key:c})=>!!t[c]);r&&i&&r.setOption({xAxis:{data:t.time},series:n.map(({key:c},h)=>({data:t[c],...h===0?{markLine:rs(t)}:{}}))})},[t,r,n]),e.jsx("div",{ref:o,style:{width:"100%",height:"300px"}})}const os=({ui:{charts:t}})=>({charts:t}),is=m(os)(as),cs=[{title:"Total Requests per Second",lines:[{name:"RPS",key:"currentRps"},{name:"Failures/s",key:"currentFailPerSec"}]},{title:"Response Times (ms)",lines:[{name:"Median Response Time",key:"responseTimePercentile1"},{name:"95% percentile",key:"responseTimePercentile2"}]},{title:"Number of Users",lines:[{name:'"Number of Users"',key:"userCount"}]}];function ls(){return e.jsx("div",{children:cs.map((t,s)=>e.jsx(is,{...t},`swarm-chart-${s}`))})}function us(t){return(t*100).toFixed(1)+"%"}function O({classRatio:t}){return e.jsx("ul",{children:Object.entries(t).map(([s,{ratio:n,tasks:r}])=>e.jsxs("li",{children:[`${us(n)} ${s}`,r&&e.jsx(O,{classRatio:r})]},`nested-ratio-${s}`))})}function ds({ratios:{perClass:t,total:s}}){return!t&&!s?null:e.jsxs("div",{children:[t&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Ratio Per Class"}),e.jsx(O,{classRatio:t})]}),s&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Total Ratio"}),e.jsx(O,{classRatio:s})]})]})}const ms=({ui:{ratios:t}})=>({ratios:t}),hs=m(ms)(ds),xs=[{key:"id",title:"Worker"},{key:"state",title:"State"},{key:"userCount",title:"# users"},{key:"cpuUsage",title:"CPU usage"},{key:"memoryUsage",title:"Memory usage"}];function ps({workers:t=[]}){return e.jsx(R,{rows:t,structure:xs})}const fs=({ui:{workers:t}})=>({workers:t}),js=m(fs)(ps),ys=[{component:ts,key:"stats",title:"Statistics"},{component:ls,key:"charts",title:"Charts"},{component:zt,key:"failures",title:"Failures"},{component:_t,key:"exceptions",title:"Exceptions"},{component:hs,key:"ratios",title:"Current Ratio"},{component:Yt,key:"reports",title:"Download Data"}],bs=[{component:js,key:"workers",title:"Workers",shouldDisplayTab:t=>t.swarm.isDistributed}],Ss=t=>{const s=new URL(window.location.href);for(const[n,r]of Object.entries(t))s.searchParams.set(n,r);window.history.pushState(null,"",s)},ws=()=>window.location.search?ft(window.location.search):null,gs={query:ws()},ue=D({name:"url",initialState:gs,reducers:{setUrl:H}}),ks=ue.actions,Cs=ue.reducer;function Ts({currentTabIndexFromQuery:t,setUrl:s,tabs:n}){const[r,a]=u.useState(t),o=(i,c)=>{const h=n[c].key;Ss({tab:h}),s({query:{tab:h}}),a(c)};return e.jsxs(v,{maxWidth:"xl",children:[e.jsx(d,{sx:{mb:2},children:e.jsx(_e,{onChange:o,value:r,children:n.map(({title:i},c)=>e.jsx(qe,{label:i},`tab-${c}`))})}),n.map(({component:i=Gt},c)=>r===c&&e.jsx(i,{},`tabpabel-${c}`))]})}const vs=t=>{const{swarm:{extendedTabs:s=[]},url:{query:n}}=t,r=bs.filter(({shouldDisplayTab:o})=>o(t)),a=[...ys,...r,...s];return{tabs:a,currentTabIndexFromQuery:n&&n.tab?a.findIndex(({key:o})=>o===n.tab):0}},Rs={setUrl:ks.setUrl},Ds=m(vs,Rs)(Ts);function M(t,s,{shouldRunInterval:n}={shouldRunInterval:!0}){const r=u.useRef(t);u.useEffect(()=>{r.current=t},[t]),u.useEffect(()=>{if(!n)return;const a=setInterval(()=>r.current(),s);return()=>{clearInterval(a)}},[s,n])}const $s={totalRps:0,failRatio:0,stats:[],errors:[],exceptions:[],charts:T(window.templateArgs).history.reduce(W,{}),ratios:{},userCount:0},Ps=(t,s)=>W(t,{currentRps:{value:null},currentFailPerSec:{value:null},responseTimePercentile1:{value:null},responseTimePercentile2:{value:null},userCount:{value:null},time:s}),de=D({name:"ui",initialState:$s,reducers:{setUi:H,updateCharts:(t,{payload:s})=>({...t,charts:W(t.charts,s)}),updateChartMarkers:(t,{payload:s})=>({...t,charts:{...Ps(t.charts,s.length?s.at(-1):t.charts.time[0]),markers:t.charts.markers?[...t.charts.markers,s]:[t.charts.time[0],s]}})}}),L=de.actions,As=de.reducer;function Is(){const t=k(ce.setSwarm),s=k(L.setUi),n=k(L.updateCharts),r=k(L.updateChartMarkers),a=$(({swarm:I})=>I),o=u.useRef(a.state),[i,c]=u.useState(!1),{data:h,refetch:b}=jt(),{data:S,refetch:P}=yt(),{data:w,refetch:A}=bt();u.useEffect(()=>{if(!h)return;const{extendedStats:I,state:E,stats:me,errors:he,totalRps:xe,failRatio:_,workers:pe,currentResponseTimePercentile1:fe,currentResponseTimePercentile2:je,userCount:q}=h;(E===x.STOPPED||E===x.SPAWNING)&&t({state:E});const V=new Date().toLocaleTimeString();i&&(c(!1),r(V));const K=U(xe,2),ye=U(_*100),be={currentRps:K,currentFailPerSec:_,responseTimePercentile1:fe,responseTimePercentile2:je,userCount:q,time:V};s({extendedStats:I,stats:me,errors:he,totalRps:K,failRatio:ye,workers:pe,userCount:q}),n(be)},[h]),u.useEffect(()=>{S&&s({ratios:S})},[S]),u.useEffect(()=>{w&&s({exceptions:w.exceptions})},[w]),M(b,2e3,{shouldRunInterval:a.state!==x.STOPPED}),M(P,5e3,{shouldRunInterval:a.state!==x.STOPPED}),M(A,5e3,{shouldRunInterval:a.state!==x.STOPPED}),u.useEffect(()=>{a.state===x.RUNNING&&o.current===x.STOPPED&&c(!0),o.current=a.state},[a.state,o])}function Es({isDarkMode:t,swarmState:s}){Is();const n=u.useMemo(()=>at(t?C.DARK:C.LIGHT),[t]);return e.jsxs(Ve,{theme:n,children:[e.jsx(Ke,{}),e.jsx(Ft,{children:s===x.READY?e.jsx(le,{}):e.jsx(Ds,{})})]})}const Ms=({swarm:{state:t},theme:{isDarkMode:s}})=>({isDarkMode:s,swarmState:t}),Ls=m(Ms)(Es),Fs=ze({[F.reducerPath]:F.reducer,swarm:Rt,theme:rt,ui:As,url:Cs}),Ns=Je({reducer:Fs}),Us=Qe.createRoot(document.getElementById("root"));Us.render(e.jsx(Ye,{store:Ns,children:e.jsx(Ls,{})}));