"use strict";(()=>{var e=class extends HTMLElement{constructor(){super(),this.classList.add("tela")}print(){console.log("printando info sensivel da tela")}render(){return""}show(){this.style.display="flex"}vanish(){this.style.display="none"}loadEvents(){}onEnter(){}onLEave(){}};var s=class extends HTMLElement{constructor(t){super(),this.textContent=t,this.classList.add("button")}};var n=class extends HTMLElement{constructor(t){super(),t&&this.change_message(t)}change_message(t){this.textContent=t,this.classList.add("message")}};var i=class extends e{constructor(){super();this._message=new n("Deseja realmente sair?");this._confirmButton=new s("Sim");this._cancelButton=new s("N\xE3o");this.append(this._message),this.append(this._confirmButton),this.append(this._cancelButton)}};})();
