import{j as s,r as h,R as _,a as b}from"./index-g5UgXZSA.js";import{A as E}from"./AuthGate-CpOj0FgR.js";import{N as L}from"./Navbar-B_Ptp4Wp.js";import{F as M}from"./Footer-CoVL0H3Y.js";import{S as R}from"./StockSearchBox-C5jTrceb.js";import{a as k}from"./dataLoader-6ZIZr1eF.js";import{f as W,w as P}from"./auth-CWROoA1a.js";import{h as A}from"./authRedirect-BrbJayQj.js";import"./preload-helper-ckwbz45p.js";import"./BrandLogo-Ck2ax9nP.js";import"./dataGate-sWYIBPBR.js";import"./idbCache-CYlA69ML.js";const u=new Map,D=40,I=`아래는 국내 주식 한 종목의 기술적·재무 분석 리포트입니다.
이 자료를 근거로 **종합 평가**를 해주세요. 자료 요약이 아니라 당신의 판단을 원합니다.

1. 종합 판단 — 이 종목이 지금 어떤 상태인지 결론부터 3~4문장으로.
2. 향후 흐름 — 상승·횡보·하락 시나리오를 각각의 발동 조건(가격대·확인 신호)과 함께 제시하고,
   어느 쪽이 더 유력한지 고르고 그 이유를 밝혀 주세요.
3. 단기적 흐름과 목표가 (수 주 ~ 수 개월) — **국면 분포 데이터를 주 근거로** 판단해 주세요.
   - 1차 근거(비중 대부분): 일봉·주봉 국면의 방향과 기울기, 채널 하단/중앙/상단, 종가의 채널 내
     위치(밴드 밖이면 오버슛), 국면 상태(진행 중 / 종료 후 미확정), 연장선이 가리키는 밴드 이동 방향.
   - 2차 근거: 이평선 이격도·밀집 구간을 겹쳐 저항·지지가 몰린 가격대로 범위를 조정.
   - ⚠ PER·PBR 배수를 곱해 얻은 가격(밴드 환산가 포함)은 **단기 목표가의 주 근거로 쓰지 마세요.**
     밸류에이션은 시간축이 없어 수 주~수 개월 흐름을 설명하지 못합니다 — 4번에서 따로 다루고,
     여기서는 "산출한 범위가 과도한지" 검증하는 보조 제약으로만 쓰세요.
   - 목표가는 범위(하단~상단)로, 무효화 조건과 함께. 연장선 숫자를 그대로 목표가로 쓰지는 말되,
     그 밴드가 어디로 움직이는지는 단기 판단의 핵심 입력으로 쓰세요.
4. 밸류에이션 판단 — 현재 주가에 무엇이 이미 반영돼 있는지, 지표 간 신호가 엇갈린다면
   어느 쪽을 더 신뢰해야 하는지 판단해 주세요.
5. 성장성 평가 — 이익 사이클상 어느 위치인지, 성장의 질(구조적인지 일시적인지)과 지속 가능성.
6. 가장 큰 위험 2가지 — 짧게.

작성 규칙:
- 각 항목은 결론 한 문장으로 시작하고, 근거는 그 뒤에 짧게 붙여 주세요.
- **근거를 시간축에 맞춰 쓰세요** — 단기(수 주~수 개월) 판단은 국면·채널·이평 같은 가격 구조 데이터로,
  중장기 판단은 밸류에이션·성장성으로. 단기 흐름을 PER·PBR 로 설명하지 마세요.
- 자료의 표에 있는 수치를 다시 나열하지 마세요. 판단의 근거로 쓴 수치만 인용해 주세요.
- "양쪽 다 가능하다" 로 끝내지 말고, 판단이 갈리는 지점에서는 어느 쪽이 유력한지 고르고 이유를 쓰세요.
- "추가 확인이 필요하다" 는 항목은 판단을 바꿀 수 있는 것 3개 이내로만.
- 업종 사이클·일반적인 재무 해석 지식을 함께 활용해도 됩니다. 자료에 없는 내용을 쓸 때는 추정임을 밝혀 주세요.
- 전제: "연장선"은 목표가가 아니라 추세 유지 시 밴드 위치이고, "밴드 환산가"는 적정주가가 아닌 환산값이며,
  "E" 표기는 분기 실적을 연 단위로 늘린 추정치입니다. (목표가는 이 값들을 베끼지 말고 직접 산출)
- 목표가는 단정하지 말고 범위와 전제(무효화 조건)를 함께 밝혀 주세요.
- 특정 시점에 매매하라는 지시는 하지 말고, 판단의 근거와 조건을 제시해 주세요.

---

`;function C(i,l){return l?I+i:i}async function q(i,l){const c=`${i}|${l||"latest"}`;if(u.has(c))return u.get(c);const a=await W(P(),{sMethod:"POST",oJson_body:{s_code:i,s_date:l||null}});if(a.status===401&&await A(a),a.status===404)throw new Error("이 종목의 평가 리포트가 없습니다. (신규 상장·거래정지 등)");if(!a.ok){const o=a.status===429?"요청이 많습니다. 잠시 후 다시 시도해 주세요.":a.status===503?"리포트 준비 중입니다. 잠시 후 다시 시도해 주세요.":"조회에 실패했습니다. 잠시 후 다시 시도해 주세요.";throw new Error(o)}const t=await a.json(),e=t==null?void 0:t.data;if(!e)throw new Error("조회에 실패했습니다. 잠시 후 다시 시도해 주세요.");const r={sCode:e.s_code,sDate:e.s_date,sMd:e.s_md,lsDates:e.ls_dates||[]};for(u.set(c,r),u.set(`${i}|${r.sDate}`,r);u.size>D;)u.delete(u.keys().next().value);return r}const F=/^\|[\s\-:|]+\|$/;function d(i,l){return i.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((a,t)=>a.startsWith("**")&&a.endsWith("**")?s.jsx("strong",{children:a.slice(2,-2)},`${l}-${t}`):a.startsWith("`")&&a.endsWith("`")?s.jsx("code",{children:a.slice(1,-1)},`${l}-${t}`):a)}function O({lsLines:i,sKeyBase:l}){const c=i.filter(e=>!F.test(e)).map(e=>e.replace(/^\||\|$/g,"").split("|").map(r=>r.trim()));if(!c.length)return null;const[a,...t]=c;return s.jsx("div",{className:"mdv-table-scroll",children:s.jsxs("table",{className:"mdv-table",children:[s.jsx("thead",{children:s.jsx("tr",{children:a.map((e,r)=>s.jsx("th",{children:d(e,`${l}-h${r}`)},r))})}),s.jsx("tbody",{children:t.map((e,r)=>s.jsx("tr",{children:e.map((o,m)=>s.jsx("td",{children:d(o,`${l}-${r}-${m}`)},m))},r))})]})})}function U({sMd:i}){const l=(i||"").split(`
`),c=[];let a=0;for(;a<l.length;){const t=l[a];if(t.startsWith("|")){const e=[];for(;a<l.length&&l[a].startsWith("|");)e.push(l[a++]);c.push({sType:"table",lsLines:e});continue}if(t.startsWith("> ")){const e=[];for(;a<l.length&&l[a].startsWith("> ");)e.push(l[a++].slice(2));c.push({sType:"quote",lsLines:e});continue}if(t.startsWith("- ")){const e=[];for(;a<l.length&&l[a].startsWith("- ");)e.push(l[a++].slice(2));c.push({sType:"list",lsLines:e});continue}if(t.startsWith("#")){const e=t.match(/^#+/)[0].length;c.push({sType:`h${Math.min(e,3)}`,sText:t.replace(/^#+\s*/,"")}),a+=1;continue}t.trim()&&c.push({sType:"p",sText:t}),a+=1}return s.jsx("div",{className:"mdv",children:c.map((t,e)=>t.sType==="table"?s.jsx(O,{lsLines:t.lsLines,sKeyBase:`t${e}`},e):t.sType==="quote"?s.jsx("blockquote",{className:"mdv-quote",children:t.lsLines.map((r,o)=>s.jsx("p",{children:d(r,`q${e}-${o}`)},o))},e):t.sType==="list"?s.jsx("ul",{className:"mdv-list",children:t.lsLines.map((r,o)=>s.jsx("li",{children:d(r,`l${e}-${o}`)},o))},e):t.sType==="h1"?s.jsx("h1",{className:"mdv-h1",children:d(t.sText,`b${e}`)},e):t.sType==="h2"?s.jsx("h2",{className:"mdv-h2",children:d(t.sText,`b${e}`)},e):t.sType==="h3"?s.jsx("h3",{className:"mdv-h3",children:d(t.sText,`b${e}`)},e):s.jsx("p",{className:"mdv-p",children:d(t.sText,`b${e}`)},e))})}const N="sq_eval_copy_prompt_v1";function z(){const[i,l]=h.useState([]),[c,a]=h.useState(null),[t,e]=h.useState(null),[r,o]=h.useState(!1),[m,j]=h.useState(""),[g,S]=h.useState(()=>localStorage.getItem(N)!=="0"),[y,v]=h.useState("");h.useEffect(()=>{k().then(n=>{l(n);const p=new URLSearchParams(window.location.search).get("code");if(p){const x=n.find(w=>w.code===p);x&&f(x,null)}}).catch(()=>j("종목 목록을 불러오지 못했습니다."))},[]);async function f(n,p){a(n),o(!0),j("");try{e(await q(n.code,p))}catch(x){j(x.message||"조회에 실패했습니다."),e(null)}o(!1)}function T(n){S(n),localStorage.setItem(N,n?"1":"0")}async function $(){try{await navigator.clipboard.writeText(C(t.sMd,g)),v("복사됐습니다")}catch{v("복사 실패 — 브라우저 권한을 확인해 주세요")}setTimeout(()=>v(""),2500)}return s.jsxs("div",{className:"ev-page",children:[s.jsx(L,{sActive:"evaluation"}),s.jsxs("main",{className:"ev-container",children:[s.jsxs("div",{className:"ev-head",children:[s.jsx("h1",{className:"ev-title",children:"종합 평가"}),s.jsx("a",{className:"ev-manual-link",href:"/#manual/evaluation",children:"리포트 읽는 방법"})]}),s.jsxs("div",{className:"ev-controls",children:[s.jsx(R,{lsStocks:i,onSelect:n=>f(n,null),sClass:"ev-search",sPlaceholder:"종목명 또는 코드 검색"}),t&&t.lsDates.length>0&&s.jsx("select",{className:"ev-date",value:t.sDate,onChange:n=>f(c,n.target.value),title:"기준 거래일 — 과거 날짜를 고르면 그 시점 리포트가 표시됩니다",children:t.lsDates.map(n=>s.jsx("option",{value:n,children:n},n))})]}),!c&&!m&&s.jsx("p",{className:"ev-status",children:"종목을 검색하면 국면·지지라인·재무·PER 밴드 종합 평가 리포트를 볼 수 있습니다."}),r&&s.jsx("p",{className:"ev-status",children:"불러오는 중…"}),m&&s.jsx("p",{className:"ev-status ev-error",children:m}),t&&!r&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"ev-copybar",children:[s.jsx("button",{type:"button",className:"ev-copy",onClick:$,children:"리포트 복사"}),s.jsxs("label",{className:"ev-copy-opt",children:[s.jsx("input",{type:"checkbox",checked:g,onChange:n=>T(n.target.checked)}),"AI 해석 요청 문구 함께 복사"]}),y&&s.jsx("span",{className:"ev-copied",children:y}),s.jsx("span",{className:"ev-copy-hint",children:"복사한 내용을 AI 서비스에 붙여넣으면 해석을 받아볼 수 있습니다."})]}),s.jsx("article",{className:"ev-report",children:s.jsx(U,{sMd:t.sMd})})]}),s.jsx("p",{className:"ev-footnote",children:"이 리포트는 알고리즘이 산출한 참고 지표이며, 특정 종목의 매수·매도 권유가 아닙니다. 과거 데이터 기반 산출값으로 미래 수익을 보장하지 않으며, 투자 판단의 책임은 투자자 본인에게 있습니다."})]}),s.jsx(M,{})]})}_.createRoot(document.getElementById("root")).render(s.jsx(b.StrictMode,{children:s.jsx(E,{children:s.jsx(z,{})})}));
