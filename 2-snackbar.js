import"./assets/styles-CvnLTCuk.js";import{i}from"./assets/vendor-BbbuE1sJ.js";function a(o){let e={icon:"",iconUrl:"./img/alert.png",iconColor:"#fff",messageColor:"#fff",color:"#ef4040",position:"topRight",class:"izi-svg",timeout:5e3,imageWidth:50,theme:"dark"};o.preventDefault();const t=o.target.delay.value,r=o.target.state.value;let s=!0;switch(r){case"fulfilled":{e.message=`Fulfilled promise ${t}ms`,e.color="#59a10d",e.iconUrl="../img/ok.png";break}case"rejected":{e.message=`Rejected promise ${t}ms`,e.iconUrl="./img/alert.png",e.color="#ef4040",s=!1;break}}m(e,t,s)}const m=(o,e,t=!0)=>new Promise((r,s)=>{setTimeout(()=>{t?r(i.show(o)):s(i.show(o))},e)}),l=document.querySelector(".form");l.addEventListener("submit",o=>a(o));console.log("form:",l);
//# sourceMappingURL=2-snackbar.js.map
