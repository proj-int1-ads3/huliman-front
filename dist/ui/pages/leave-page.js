"use strict";(()=>{var c=class extends HTMLElement{render(){this.onEnter()}vanish(){this.onLeave()}loadEvents(){throw new Error("Method not implemented.")}onEnter(){throw new Error("Method not implemented.")}onLeave(){throw new Error("Method not implemented.")}};var n=class extends c{constructor(){super(),this.classList.add("tela")}render(){super.render(),this.style.display="flex"}vanish(){super.vanish(),this.style.display="none"}};var a=class extends c{constructor(){super()}render(){super.render(),this.style.display="flex"}vanish(){super.vanish(),this.style.display="none"}};var m=class extends a{constructor(e){super(),this.textContent=e,this.classList.add("button")}};var s=class extends a{constructor(e){super(),e&&this.change_message(e)}change_message(e){this.textContent=e,this.classList.add("message")}};var o=class extends m{constructor(e){super(e),this.classList.add("button-simples")}};var d=class extends HTMLElement{constructor(t,h){super();this._img=document.createElement("img");this._name=new s;this._img.src=t,h!=!1&&this._name.change_message(h),this.append(this._img,this._name)}};var p=class extends a{constructor(e){super(),this.classList.add("bg-box"),e&&this.addElement(e)}addElement(e){e.forEach(t=>{this.append(t)})}};var v=class extends HTMLElement{constructor(t){super();this._dialog=new s;this._button=new o("Continuar");this._bgBox=new p;this._player=new d("assets/images/boy.webp",!1),this._character=new d("assets/images/boy.webp","Rika"),this._dialog.change_message(t),this._bgBox.addElement([this._player,this._character,this._dialog,this._button]),this.append(this._bgBox)}};var u=class extends o{constructor(){super(""),this.classList.add("tip-btn")}};var _=class extends p{constructor(){super();this._question=new s;this._buttons=Array();this._tip=new u;this._question.change_message("Em suma, um handler \xE9 um bloco de c\xF3digo respons\xE1vel por tratar eventos, solicita\xE7\xF5es ou exce\xE7\xF5es em um programa. Sua fun\xE7\xE3o \xE9 definir a l\xF3gica necess\xE1ria para lidar com uma situa\xE7\xE3o espec\xEDfica e execut\xE1-la quando necess\xE1rio.");for(let t=0;t<5;t++)this._buttons.push(new o("Vamos ver o que vai da"));this.addElement([this._question,this._tip]),this.addElement(this._buttons)}};var l=class extends HTMLElement{constructor(t,h){super();this._img=document.createElement("img");this._name=document.createElement("p");this._lifeBar=document.createElement("hr");this._img.src=t,this._name.innerText=h,this.append(this._img,this._name,this._lifeBar)}};var g=class extends p{constructor(){super();this._player=new l("assets/images/boy.webp","Fulano");this._enemy=new l("assets/images/boy.webp","FIGTHT");this.style.backgroundColor,this.append(this._enemy,this._player),this.classList.add("combat-box")}};var x=class extends n{constructor(){super();this._helpBox=new v("Perder n\xE3o tem nada a ver com n\xE3o vencer, mas sim com desistir");this._questionBox=new _;this._combat=new g;this._combat.classList.add("combat-box"),this.append(this._questionBox,this._combat)}help(){this.append(this._helpBox)}};var f=class extends n{constructor(){super();this.spbtn=new o("OK");this.spbtn.addEventListener("click",()=>this.clicado()),this.append(this.spbtn)}clicado(){i.instance.proxima(new x)}onEnter(){}onLeave(){}};var i=class{constructor(){this._navigation=new Array(new f);this._container=document.querySelector(".container")}static get instance(){return i._instance||(i._instance=new i),i._instance}init(){let e=this._navigation[0];this._container.append(e),e.render()}proxima(e){let t=this._navigation[this._navigation.length-1];t.vanish(),this._container.removeChild(t),this._navigation.push(e),this._container.append(e),e.render()}voltar(){let e=this._navigation.pop();e==null||e.vanish(),this._container.removeChild(e);let t=this._navigation[this._navigation.length-1];this._container.append(t),t.render()}static encerrar(){window.close()}};var E=class extends n{constructor(){super();this._message=new s("Deseja realmente sair?");this._confirmButton=new m("Sim");this._cancelButton=new m("N\xE3o");this.append(this._message),this.append(this._confirmButton),this.append(this._cancelButton),this.loadEvents()}loadEvents(){this._confirmButton.addEventListener("click",()=>this.leave()),this._cancelButton.addEventListener("click",()=>this.back())}onEnter(){}onLeave(){}back(){i.instance.voltar()}leave(){i.encerrar()}};})();
