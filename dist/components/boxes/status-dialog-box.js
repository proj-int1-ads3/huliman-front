"use strict";(()=>{var s=class extends HTMLElement{constructor(t){super(),this.textContent=t,this.classList.add("button")}};var e=class extends s{constructor(t){super(t),this.classList.add("button-simples")}};var n=class extends HTMLElement{constructor(i="Vit\xF3ria",a="assets/images/boy.webp",c){super();this._status=document.createElement("p");this._characterImg=document.createElement("img");this._msg=document.createElement("p");this._btn=new e("Confirmar");this._status.innerText=i,this._characterImg.src=a,this._msg.innerText=c,this.append(this._status,this._characterImg,this._msg,this._btn)}};})();
