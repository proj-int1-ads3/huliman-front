"use strict";(()=>{var e=class extends HTMLElement{constructor(t,s){super();this._img=document.createElement("img");this._name=document.createElement("span");this.classList.add("planet-box"),this._img.src=t,this._img.classList.add("name"),this._name.innerText=s,this.append(this._img,this._name),this._name,this.addEventListener("click",()=>this.change_page())}change_page(){this.style.display="none"}};})();
