"use strict";(()=>{var e=class extends HTMLElement{constructor(t,i){super();this._img=document.createElement("img");this._name=document.createElement("p");this._lifeBar=document.createElement("hr");this._img.src=t,this._name.innerText=i,this._img.classList.add("imagem-combate"),this.append(this._img,this._name,this._lifeBar),console.log(this._lifeBar.style.width)}decreaseLife(){console.log(this._lifeBar.style.width)}increaseLife(){}};})();
