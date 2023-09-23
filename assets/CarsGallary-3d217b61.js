import{s as o,j as e,A as M,p as S,q as B,t as D,v as O,B as L,P as i,F as v,C as T,r as P,l as W,o as E,u as x,b as N,D as A,E as G,G as k,H as K,I as J,J as U,S as Q,K as V,M as X}from"./index-f41b2327.js";const Y=o.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 168px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: 700;
  line-height: calc() (14px/20px);
  color: white;
  border: 1px solid #3470ff;
  background-color: #3470ff;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`,Z=()=>e.jsx(Y,{href:"tel:+380730000000",children:"Rental car"}),H=n=>n.cars.cars.cars,_=n=>n.cars.cars.someCars,ee=n=>n.cars.cars.page,ie=n=>n.cars.isLoading,ne=M([S,B,D,O,H],(n,l,t,r,c)=>{const s=n.length>0?c.filter(a=>n.includes(a.make)):c,d=l?s.filter(a=>a.rentalPrice.split("$")[1]<=l):s;return t||r?d.filter(a=>{if(t&&r)return a.mileage>=t&&a.mileage<=r;if(t&&!r)return a.mileage>=t;if(!t&&r)return a.mileage<=r}):d}),te=M([S,B,L],(n,l,t)=>{const r=n.length>0?t.filter(s=>n.includes(s.make)):t;return l?r.filter(s=>s.rentalPrice.split("$")[1]<=l):r}),re=o.div`
  display: grid;

  grid-template-columns: repeat(1, minmax(210, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(210, 1fr));
  grid-row-gap: 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(336px, 1fr));

    grid-template-rows: repeat(auto-fit, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: ${n=>n.$isFavouritePage?"repeat(3, 274px)":"repeat(4, 274px)"};
    grid-template-rows: auto;
  }
`,se=o.button`
  display: flex;
  margin: 100px auto 0px;
  border: none;
  outline: none;
  background: none;
  color: #3470ff;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    color: #0b44cd;
    outline: none;
  }
`,F=o.h2`
  text-align: center;
  color: rgba(18, 20, 23, 0.5);
`,oe=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  background-color: rgba(18, 20, 23, 0.5);
`,le=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,ae=o.div`
  background-color: #fff;
  border-radius: 24px;
  padding: 18px;
  min-width: 335px;
  width: 100%;
  position: relative;
  color: #121417;

  @media (min-width: 768px) {
    max-width: 541px;
    padding: 40px;
  }

  & button {
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    outline: none;
    position: absolute;
    top: 22px;
    right: 22px;
    color: #121417;
    & svg {
      font-size: 18px;
    }
  }

  & img {
    display: block;
    min-width: 100%;
    max-height: 248px;
    border-radius: 14px;
    object-fit: cover;
    margin-bottom: 14px;
  }

  & h2 {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: calc(18px / 24px);
    margin-bottom: 8px;

    & span {
      color: #3470ff;
    }
  }

  & h3 {
    font-size: 14px;
    line-height: calc(12px / 20px);
    font-weight: 400;
    margin-bottom: 9px;
  }

  & p {
    font-size: 14px;
    font-weight: 400;
    line-height: calc(14px / 20px);
    margin-bottom: 24px;
  }
`,$=o.ul`
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: calc(12px / 18px);
  font-weight: 400;
  margin-bottom: 4px;

  & li:not(:last-of-type) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
  }

  & li:not(:last-of-type)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 14px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-left: 6px;
  }
`,ce=o.ul`
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: calc(12px / 18px);
  font-weight: 400;
  margin-bottom: 14px;

  & li:not(:last-of-type) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
  }

  & li:not(:last-of-type)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 14px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-left: 6px;
  }
`,de=o.ul`
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  gap: 8px;
  margin-bottom: 24px;

  & li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    padding: 0 14px;
    border-radius: 35px;
    background-color: #f9f9f9;
    color: #363535;
    font-size: 12px;
    line-height: calc(12 / 18);
    letter-spacing: -0.02em;
    & span {
      color: #3470ff;
      font-weight: 700;
    }
  }
`,z=({setCarToShow:n,car:l})=>{const{id:t,year:r,make:c,model:s,type:d,img:f,description:a,fuelConsumption:m,engineSize:p,accessories:b,functionalities:y,rentalPrice:w,address:u,rentalConditions:R,mileage:C}=l,q=new Intl.NumberFormat("en-US").format(C),j=`${w.slice(1)}$`;return e.jsxs(ae,{children:[e.jsx("button",{onClick:()=>n(null),children:e.jsx(v,{icon:T,size:"2x"})}),e.jsx("img",{src:f,alt:c}),e.jsxs("h2",{children:[c," ",e.jsx("span",{children:` ${s}, `}),r]}),e.jsxs($,{children:[e.jsx("li",{children:e.jsx("span",{children:u.split(",")[1]})}),e.jsx("li",{children:e.jsx("span",{children:u.split(",")[2]})}),e.jsx("li",{children:e.jsx("span",{children:`Id: ${t}`})}),e.jsx("li",{children:e.jsx("span",{children:`Type: ${d.split(",").splice(0,1).join("")}`})})]}),e.jsxs(ce,{children:[e.jsx("li",{children:e.jsx("span",{children:`Fuel Consumption: ${m}`})}),e.jsx("li",{children:e.jsx("span",{children:`Engine Size: ${p}`})})]}),e.jsx("p",{children:a}),e.jsx("h3",{children:"Accessories and functionalities:"}),e.jsxs($,{children:[b.map((g,h)=>e.jsx("li",{children:g},h)),y.map((g,h)=>e.jsx("li",{children:g},h))]}),e.jsx("h3",{children:"Rental Conditions: "}),e.jsxs(de,{children:[R.split(`
`).map((g,h)=>e.jsx("li",{children:g},h)),e.jsxs("li",{children:["Mileage: "," ",e.jsx("span",{children:` ${q}`})]},"mileage"),e.jsxs("li",{children:["Price: ",e.jsx("span",{children:` ${j}`})]},"price")]}),e.jsx(Z,{})]})};z.propTypes={car:i.shape({id:i.string.isRequired,year:i.number.isRequired,make:i.string.isRequired,model:i.string.isRequired,type:i.string.isRequired,img:i.string.isRequired,description:i.string.isRequired,fuelConsumption:i.string.isRequired,engineSize:i.string.isRequired,accessories:i.arrayOf(i.string),functionalities:i.arrayOf(i.string),rentalPrice:i.string.isRequired,rentalCompany:i.string.isRequired,address:i.string.isRequired,rentalConditions:i.string.isRequired,mileage:i.number.isRequired,popular:i.number.isRequired}),setCarToShow:i.func.isRequired};const pe=document.querySelector("#modal-root"),ge=({setCarToShow:n,car:l})=>{P.useEffect(()=>{const r=c=>{c.code==="Escape"&&n(null)};return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[n]);const t=r=>{r.currentTarget===r.target&&n(null)};return W.createPortal(e.jsx(oe,{onClick:t,children:e.jsx(le,{children:e.jsx(z,{car:l,setCarToShow:n})})}),pe)};z.propTypes={car:i.shape({id:i.string.isRequired,year:i.number.isRequired,make:i.string.isRequired,model:i.string.isRequired,type:i.string.isRequired,img:i.string.isRequired,description:i.string.isRequired,fuelConsumption:i.string.isRequired,engineSize:i.string.isRequired,accessories:i.arrayOf(i.string),functionalities:i.arrayOf(i.string),rentalPrice:i.string.isRequired,rentalCompany:i.string.isRequired,address:i.string.isRequired,rentalConditions:i.string.isRequired,mileage:i.number.isRequired,popular:i.number.isRequired}),setCarToShow:i.func.isRequired};var ue={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"]};const xe=o.div`
  background-color: #fff;
  border-radius: 14px;
  padding: 12px;

  & button {
    width: 100%;
    background-color: #3470ff;
    color: white;
    transition: all 250ms linear;

    &:hover,
    &:focus {
      background-color: #0b44cd;
    }
  }

  &:hover img {
    transform: scale(1.1);
  }
`,he=o.div`
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 14px;

  & img {
    display: block;
    width: 100%;
    height: 240px;
    object-fit: cover;
    transition: all 250ms linear;
  }

  & > button {
    position: absolute;
    top: 14px;
    right: 14px;
    border: none;
    background: transparent;
    z-index: 2;
    padding: 0;
    margin: 0;
    transition: all 250ms linear;
    width: 18px;
    height: 18px;

    &:hover,
    &:focus {
      outline: none;
      background: transparent;
    }

    & svg {
      width: 18px;
      height: 18px;
      transition: all 250ms linear;

      color: ${n=>n.$isfavorite?"#3470FF":"white"};
      &:hover,
      &:focus {
        transform: scale(1.1);
      }
    }
  }
`,fe=o.h3`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(16px / 24px);

  & span {
    color: #3470ff;
  }
`,me=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(16px / 24px);
`,je=o.ul`
  display: inline-flex;
  flex-wrap: wrap;

  padding: 0;
  margin: 0;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: calc(12px / 18px);
  font-weight: 400;
  letter-spacing: -0.03em;

  & li:not(:last-of-type) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 3px;
  }

  & li:not(:last-of-type)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 14px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-left: 3px;
  }
`,be=o.ul`
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  letter-spacing: -0.03em;
  line-height: calc(12px / 18px);
  font-weight: 400;
  margin-bottom: 28px;

  & li:not(:last-of-type) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 3px;
  }

  & li:not(:last-of-type)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 14px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-left: 3px;
  }
`,I=({car:n,setCarToShow:l})=>{const t=E(),r=x(L),c=n.popular,s=x(N),d=r.some(p=>n.id===p.id),f=n.description.includes("premium","convertible"),a=()=>{if(d){if(d){t(K(n));const p=c-1;t(k({car:n,popular:p}))}}else{t(G(n));const p=c+1;t(k({car:n,popular:p}))}},m=()=>{l(n);const p=c+1;t(k({car:n,popular:p})),s.includes(n)||t(J(n))};return e.jsxs(xe,{children:[e.jsxs(he,{$isfavorite:d,children:[e.jsx("img",{src:n.img,alt:n.make}),e.jsx("button",{type:"button",onClick:a,children:d?e.jsx(v,{icon:A}):e.jsx(v,{icon:ue})})]}),e.jsxs(me,{children:[e.jsxs(fe,{children:[n.make,n.make.length+n.model.length<=12&&e.jsx("span",{children:` ${n.model}`}),`, ${n.year}`]}),e.jsx("p",{children:n.rentalPrice})]}),e.jsxs(je,{children:[e.jsx("li",{children:e.jsx("span",{children:n.address.split(",")[1]})}),e.jsx("li",{children:e.jsx("span",{children:n.address.split(",")[2]})}),e.jsx("li",{children:e.jsx("span",{children:n.rentalCompany})}),f&&e.jsx("li",{children:e.jsx("span",{children:"Premium"})})]}),e.jsxs(be,{children:[e.jsx("li",{children:e.jsx("span",{children:n.type.split(",").splice(0,1).join("")})}),e.jsx("li",{children:e.jsx("span",{children:n.model.split(" ").splice(0,2).join(" ")})}),e.jsx("li",{children:e.jsx("span",{children:n.mileage})}),e.jsx("li",{children:e.jsx("span",{children:n.accessories[0].split(" ").splice(0,2).join(" ")})})]}),e.jsx("button",{type:"button",onClick:m,children:"Learn more"})]})};I.propTypes={car:i.shape({id:i.string.isRequired,year:i.number.isRequired,make:i.string.isRequired,model:i.string.isRequired,type:i.string.isRequired,img:i.string.isRequired,description:i.string.isRequired,fuelConsumption:i.string.isRequired,engineSize:i.string.isRequired,accessories:i.arrayOf(i.string),functionalities:i.arrayOf(i.string),rentalPrice:i.string.isRequired,rentalCompany:i.string.isRequired,address:i.string.isRequired,rentalConditions:i.string.isRequired,mileage:i.number.isRequired,popular:i.number.isRequired}),setCarToShow:i.func.isRequired};const ye=({cars:n,setCarToShow:l})=>n.length>0&&n.map(t=>e.jsx(I,{car:t,setCarToShow:l},t.id)),Re=({carsList:n})=>{const l=x(ie),[t,r]=P.useState(null),c=E(),{pathname:s}=U(),d=s.includes("favorites"),f=!s.includes("favorites")&&!s.includes("catalog"),a=x(H),m=x(_),p=x(L),b=x(ne),y=x(te),w=a.filter(g=>g.popular>=0).sort((g,h)=>g.popular<=h.popular?1:-1).slice(0,4),u=x(Q),R=x(ee),C=Math.round(a.length/8),q=g=>{const h=g+1;c(X(h))},j=P.useMemo(()=>s.includes("favorites")&&!u?p:s.includes("favorites")&&u?y:s.includes("catalog")&&u?b:s.includes("catalog")&&!u?m:w,[p,b,u,s,w,m,y]);return e.jsxs(e.Fragment,{children:[l&&e.jsx(V,{}),e.jsxs(re,{$isFavouritePage:d,children:[e.jsx(ye,{cars:n&&n.length>0?n:j,setCarToShow:r}),d&&j.length===0?e.jsx(F,{children:"No cars to show... Change your choise or select your favourite car from the catalog."}):null]}),R<=C&&!u&&!d&&!f?e.jsx(se,{type:"button",onClick:()=>q(R),children:"Load more"}):null,u&&j.length===0?e.jsx(F,{children:"No results... Try something else."}):null,t&&e.jsx(ge,{car:t,setCarToShow:r})]})};export{Re as C,Z as R,ee as a,H as s};
