import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i}from"./assets/vendor-njWUcVeN.js";const t=document.querySelector("form");t.addEventListener("submit",r=>{r.preventDefault();const o=Number(t.delay.value),F=t.querySelector('input[name="state"]:checked');new Promise((e,s)=>{setTimeout(()=>{F.value==="fulfilled"?e(o):s(o)},o)}).then(e=>{i.show({title:"OK",titleColor:"#FFFFFF",icon:"material-icons",iconText:"task_alt",iconColor:"#FFFFFF",message:` Fulfilled promise in ${e}ms`,messageColor:"#FFFFFF",backgroundColor:"#59A10D",position:"topRight",close:!1,layout:2,timeout:1e4})}).catch(e=>{i.error({title:" Error",titleColor:"#FFFFFF",icon:"material-icons",iconText:"error",iconColor:"#FFFFFF",message:`Rejected promise in ${e}ms`,messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",close:!1,layout:2,timeout:1e4})})});
//# sourceMappingURL=2-snackbar.js.map
