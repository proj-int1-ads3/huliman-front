"use strict";(()=>{var p=class extends HTMLElement{constructor(){super(),this.classList.add("tela")}print(){console.log("printando info sensivel da tela")}render(){return""}show(){this.style.display="flex"}vanish(){this.style.display="none"}loadEvents(){}onEnter(){}onLEave(){}};var i=class extends HTMLElement{constructor(t){super(),this.classList.add("bg-box"),t&&this.addElement(t)}addElement(t){t.forEach(e=>{this.append(e)})}};var m=class extends HTMLElement{constructor(t){super(),this.textContent=t,this.classList.add("button")}};var c=class extends HTMLInputElement{constructor(t="nome",e,n){super(),this.placeholder=t,this.classList.add("input-box"),e&&(this.id=e),n&&(this.name=n)}};var d=class extends HTMLElement{constructor(){super();let t=document.createElement("img");t.src="assets/images/login.webp",this.append(t),this.classList.add("logo")}};var r=class extends m{constructor(t){super(t),this.classList.add("button-simples")}};var g=class extends HTMLElement{constructor(){super(),this.textContent="huliman",this.classList.add("title")}};var a=class{constructor(){this._navigation=new Array(new u);this._container=document.querySelector(".container")}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){let t=this._navigation[0];this._container.append(t),t.show()}proxima(t){let e=this._navigation[this._navigation.length-1];e.vanish(),this._container.removeChild(e),this._navigation.push(t),this._container.append(t),t.show()}voltar(){let t=this._navigation.pop();t==null||t.vanish(),this._container.removeChild(t);let e=this._navigation[this._navigation.length-1];this._container.append(e),e.show()}static encerrar(){}};var _=class extends i{constructor(e,n,f){super();this._status=document.createElement("h2");this._image=document.createElement("img");this._dialog=document.createElement("p");this._status.textContent=e,this._image.src=n,this._dialog.textContent=f,this.classList.add("btl-status-box"),this._dialog.classList.add("btl-status-msg"),this.append(this._status,this._image,this._dialog)}};var l=class extends HTMLElement{constructor(e,n){super();this._img=document.createElement("img");this._name=document.createElement("p");this._lifeBar=document.createElement("hr");this._img.src=e,this._name.innerText=n,this.append(this._img,this._name,this._lifeBar)}};var o=class extends HTMLElement{constructor(t){super(),t&&this.change_message(t)}change_message(t){this.textContent=t,this.classList.add("message")}};var h=class extends HTMLElement{constructor(e,n){super();this._img=document.createElement("img");this._name=new o;this._img.src=e,n!=!1&&this._name.change_message(n),this.append(this._img,this._name)}};var v=class extends HTMLElement{constructor(e){super();this._dialog=new o;this._button=new r("Continuar");this._bgBox=new i;this._player=new h("assets/images/boy.webp",!1),this._character=new h("assets/images/boy.webp","Rika"),this._dialog.change_message(e),this._bgBox.addElement([this._player,this._character,this._dialog,this._button]),this.append(this._bgBox)}};var x=class extends p{constructor(){super();this._box=new i;this._question=new o;this._buttons=Array();this._combate=document.createElement("div");this._player=new l("assets/images/boy.webp","Fulano");this._enemy=new l("assets/images/boy.webp","FIGTHT");this._helpBox=new v("Perder n\xE3o tem nada a ver com n\xE3o vencer, mas sim com desistir");this._combate.classList.add("combat-box"),this._combate.append(this._player,this._enemy),this._question.change_message("Em suma, um handler \xE9 um bloco de c\xF3digo respons\xE1vel por tratar eventos, solicita\xE7\xF5es ou exce\xE7\xF5es em um programa. Sua fun\xE7\xE3o \xE9 definir a l\xF3gica necess\xE1ria para lidar com uma situa\xE7\xE3o espec\xEDfica e execut\xE1-la quando necess\xE1rio.");for(let e=0;e<5;e++)this._buttons.push(new r("Vamos ver o que vai da"));this._box.addElement([this._question]),this._box.addElement(this._buttons),this.help(),this.append(this._box,this._combate)}help(){this.append(this._helpBox),this.append(new _("Vit\xF3ria","assets/images/girl.webp","Voc\xEA \xE9 bom nisso!"))}};var u=class extends p{constructor(){super();this._title=new g;this._logo=new d;this._confirmButton=new m("confirmar");this._leaveButton=new r("sair");this._inputBoxEmail=new c("E-mail");this._inputBoxPassword=new c("Senha");this._bgBox=new i;this._loginLink=document.createElement("a");this._singinpLink=document.createElement("a");this._loginLink.text="Login",this._singinpLink.text="Singup",this.append(this._title),this.append(this._logo),this._bgBox.addElement([this._inputBoxEmail,this._inputBoxPassword,this._confirmButton,this._leaveButton]),this.append(this._bgBox),this.classList.add("login-tela"),this._confirmButton.addEventListener("click",()=>this.changeScreen())}changeScreen(){console.log("trocando tela"),a.instance.proxima(new x)}loadEvents(){this._leaveButton.addEventListener("click",this.sair)}onEnter(){}onLEave(){}sair(){}};})();
