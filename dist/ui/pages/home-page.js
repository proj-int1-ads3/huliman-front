"use strict";(()=>{var r=class extends HTMLElement{render(){this.onEnter()}vanish(){this.onLeave()}loadEvents(){throw new Error("Method not implemented.")}onEnter(){throw new Error("Method not implemented.")}onLeave(){throw new Error("Method not implemented.")}};var e=class extends r{constructor(){super()}render(){super.render(),this.style.display="flex"}vanish(){super.vanish(),this.style.display="none"}};var s=class extends e{constructor(o){super(),this.textContent=o,this.classList.add("button")}};var n=class extends e{constructor(){super();let o=document.createElement("img");o.src="assets/images/login.webp",this.append(o),this.classList.add("logo")}};var i=class extends e{constructor(){super(),this.textContent="huliman",this.classList.add("title")}};var d=class extends r{constructor(){super(),this.classList.add("tela")}render(){super.render(),this.style.display="flex"}vanish(){super.vanish(),this.style.display="none"}};var p=class extends d{constructor(){super();this._title=new i;this._btn=new s("Continuar");this._logo=new n;this.append(this._title,this._logo,this._btn)}};})();
