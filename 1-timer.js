import"./assets/styles-CvnLTCuk.js";import{f as S,i as p}from"./assets/vendor-BbbuE1sJ.js";const i={icon:"",iconUrl:"../img/alert.png",iconColor:"#fff",messageColor:"#fff",color:"#ef4040",position:"topRight",class:"izi-svg",timeout:5e3,imageWidth:50,theme:"dark"},b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){I(t[0])?(l(),f=t[0]):d()}},C=t=>{const h=Math.floor(t/864e5),v=Math.floor(t%864e5/36e5),g=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:h,hours:v,minutes:g,seconds:y}},l=()=>{r(e)||(e.active=!0,u())},d=()=>{r(e)&&(e.active=!1,u())},L=()=>{a.disabled=!0,a.classList.add("input-disable")},w=()=>{a.disabled=!1,a.classList.remove("input-disable")},u=t=>{switch(t=t||"",t.toLowerCase){case"on":{e.classList.add("is-active");break}case"off":{e.classList.remove("is-active");break}default:e.classList.toggle("is-active")}},k=t=>{q(),d(),L()},c=()=>{let t=0,s={};if(t=f.getTime()-Date.now(),t>0)s=C(t),T.textContent=String(s.days).padStart(2,"0"),D.textContent=String(s.hours).padStart(2,"0"),x.textContent=String(s.minutes).padStart(2,"0"),B.textContent=String(s.seconds).padStart(2,"0");else{l(),w(),clearInterval(m);return}},q=t=>{c(),m=setInterval(c,1e3)},I=t=>t.getTime()<=Date.now()?(o(),!1):!0,M=t=>{t.preventDefault(),r(t.currentTarget)?k():a.disabled?o("Wait please for timer finish"):o()},o=t=>{i.message=t??"Please choose a date in the future",p.show(i)},r=t=>t.active??!1,a=document.querySelector("#datetime-picker");S(a,b);const e=document.querySelector("[data-start]"),n=document.querySelector(".timer"),T=n.querySelector("[data-days]"),D=n.querySelector("[data-hours]"),x=n.querySelector("[data-minutes]"),B=n.querySelector("[data-seconds]");let f="",m;e.addEventListener("click",t=>M(t));
//# sourceMappingURL=1-timer.js.map
