"use strict";(()=>{var r=class extends HTMLElement{render(){this.onEnter()}vanish(){this.onLeave()}loadEvents(){throw new Error("Method not implemented.")}onEnter(){throw new Error("Method not implemented.")}onLeave(){throw new Error("Method not implemented.")}};var n=class extends r{constructor(){super(),this.classList.add("tela")}render(){super.render(),this.style.display="flex"}vanish(){super.vanish(),this.style.display="none"}};var t=class extends r{constructor(){super()}render(){super.render(),this.style.display="flex"}vanish(){super.vanish(),this.style.display="none"}};var i=class extends t{constructor(e){super(),this.classList.add("bg-box"),e&&this.addElement(e)}addElement(e){e.forEach(a=>{this.append(a)})}};var o=class extends t{constructor(e){super(),e&&this.change_message(e)}change_message(e){this.textContent=e,this.classList.add("message")}};var p=class extends t{constructor(a,d){super();this._img=document.createElement("img");this._name=document.createElement("span");this.classList.add("planet-box"),this._img.src=a,this._img.classList.add("name"),this._name.innerText=d,this.append(this._img,this._name),this._name,this.addEventListener("click",()=>this.change_page())}change_page(){this.style.display="none"}};var m=class extends n{constructor(){super();this._planetList=[{name:"Sociologia",path:"assets/images/planets/terra.png"},{name:"Matem\xE1tica",path:"assets/images/planets/terra.png"},{name:"Hist\xF3ria",path:"assets/images/planets/terra.png"},{name:"Geografia",path:"assets/images/planets/terra.png"},{name:"Portugu\xEAs",path:"assets/images/planets/terra.png"},{name:"Filosofia",path:"assets/images/planets/terra.png"},{name:"Biologia",path:"assets/images/planets/terra.png"},{name:"Qu\xEDmica",path:"assets/images/planets/terra.png"}];this._planets=Array();this._title=new o("Selecione onde deseja batalhar.");this._bgBox=new i;this._planetList.forEach(a=>{this._planets.push(new p(a.path,a.name))}),this.append(this._title),this._bgBox.classList.add("planets-list"),this._bgBox.addElement(this._planets),this.append(this._bgBox)}};})();
