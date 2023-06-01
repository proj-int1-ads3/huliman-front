"use strict";(()=>{var o=class extends HTMLElement{constructor(){super(),this.classList.add("tela")}print(){console.log("printando info sensivel da tela")}render(){return""}show(){this.style.display="flex"}vanish(){this.style.display="none"}loadEvents(){}onEnter(){}onLEave(){}};var i=class extends HTMLDivElement{constructor(t){super(),this.classList.add("bg-box"),t&&this.addElement(t)}addElement(t){t.forEach(e=>{this.append(e)})}};var m=class extends HTMLElement{constructor(t){super(),this.textContent=t,this.classList.add("button")}};var c=class extends HTMLInputElement{constructor(t="nome",e,a){super(),this.placeholder=t,this.classList.add("input-box"),e&&(this.id=e),a&&(this.name=a)}};var g=class extends HTMLElement{constructor(){super();let t=document.createElement("img");t.src="assets/images/login.webp",this.append(t),this.classList.add("logo")}};var p=class extends m{constructor(t){super(t),this.classList.add("button-simples")}};var d=class extends HTMLElement{constructor(){super(),this.textContent="huliman",this.classList.add("title")}};var r=class extends HTMLElement{constructor(t){super(),t&&this.change_message(t)}change_message(t){this.textContent=t,this.classList.add("message")}};var _=class extends o{constructor(){super();this._planetList=[{name:"Sociologia",path:"assets/images/planets/terra.png"},{name:"Matem\xE1tica",path:"assets/images/planets/terra.png"},{name:"Hist\xF3ria",path:"assets/images/planets/terra.png"},{name:"Geografia",path:"assets/images/planets/terra.png"},{name:"Portugu\xEAs",path:"assets/images/planets/terra.png"},{name:"Filosofia",path:"assets/images/planets/terra.png"},{name:"Biologia",path:"assets/images/planets/terra.png"},{name:"Qu\xEDmica",path:"assets/images/planets/terra.png"}];this._planets=Array();this._title=new r("Selecione onde deseja batalhar.");this._bgBox=new i;this._planetList.forEach(e=>{this._planets.push(new u(e.path,e.name))}),this.append(this._title),this._bgBox.classList.add("planets-list"),this._bgBox.addElement(this._planets),this.append(this._bgBox)}};var x=class extends o{constructor(){super();this._title=new d;this._logo=new g;this._confirmButton=new m("confirmar");this._leaveButton=new p("sair");this._inputBoxEmail=new c("E-mail");this._inputBoxPassword=new c("Senha");this._bgBox=new i;this._loginLink=document.createElement("a");this._singinpLink=document.createElement("a");this._loginLink.text="Login",this._singinpLink.text="Singup",this.append(this._title),this.append(this._logo),this._bgBox.addElement([this._inputBoxEmail,this._inputBoxPassword,this._confirmButton,this._leaveButton]),this.append(this._bgBox),this.classList.add("login-tela"),this._confirmButton.addEventListener("click",()=>this.changeScreen()),this._confirmButton.addEventListener("click",()=>this.changeScreen())}changeScreen(){console.log("trocando tela"),n.instance.proxima(new _)}loadEvents(){this._leaveButton.addEventListener("click",this.sair)}onEnter(){}onLEave(){}sair(){}};var n=class{constructor(){this._navigation=new Array(new x);this._container=document.querySelector(".container")}static get instance(){return n._instance||(n._instance=new n),n._instance}init(){let t=this._navigation[0];this._container.append(t),t.show()}proxima(t){let e=this._navigation[this._navigation.length-1];e.vanish(),this._container.removeChild(e),this._navigation.push(t),this._container.append(t),t.show()}voltar(){let t=this._navigation.pop();t==null||t.vanish(),this._container.removeChild(t);let e=this._navigation[this._navigation.length-1];this._container.append(e),e.show()}static encerrar(){}};var v=class extends i{constructor(e,a,b){super();this._status=document.createElement("h2");this._image=document.createElement("img");this._dialog=document.createElement("p");this._status.textContent=e,this._image.src=a,this._dialog.textContent=b,this.classList.add("btl-status-box"),this._dialog.classList.add("btl-status-msg"),this.append(this._status,this._image,this._dialog)}};var l=class extends HTMLElement{constructor(e,a){super();this._img=document.createElement("img");this._name=document.createElement("p");this._lifeBar=document.createElement("hr");this._img.src=e,this._name.innerText=a,this.append(this._img,this._name,this._lifeBar)}};var h=class extends HTMLElement{constructor(e,a){super();this._img=document.createElement("img");this._name=new r;this._img.src=e,a!=!1&&this._name.change_message(a),this.append(this._img,this._name)}};var f=class extends HTMLElement{constructor(e){super();this._dialog=new r;this._button=new p("Continuar");this._bgBox=new i;this._player=new h("assets/images/boy.webp",!1),this._character=new h("assets/images/boy.webp","Rika"),this._dialog.change_message(e),this._bgBox.addElement([this._player,this._character,this._dialog,this._button]),this.append(this._bgBox)}};var E=class extends o{constructor(){super();this._box=new i;this._question=new r;this._buttons=Array();this._combate=document.createElement("div");this._player=new l("assets/images/boy.webp","Fulano");this._enemy=new l("assets/images/boy.webp","FIGTHT");this._helpBox=new f("Perder n\xE3o tem nada a ver com n\xE3o vencer, mas sim com desistir");this._combate.classList.add("combat-box"),this._combate.append(this._player,this._enemy),this._question.change_message("Em suma, um handler \xE9 um bloco de c\xF3digo respons\xE1vel por tratar eventos, solicita\xE7\xF5es ou exce\xE7\xF5es em um programa. Sua fun\xE7\xE3o \xE9 definir a l\xF3gica necess\xE1ria para lidar com uma situa\xE7\xE3o espec\xEDfica e execut\xE1-la quando necess\xE1rio.");for(let e=0;e<5;e++)this._buttons.push(new p("Vamos ver o que vai da"));this._box.addElement([this._question]),this._box.addElement(this._buttons),this.help(),this.append(this._box,this._combate)}help(){this.append(this._helpBox),this.append(new v("Vit\xF3ria","assets/images/girl.webp","Voc\xEA \xE9 bom nisso!"))}};var u=class extends HTMLElement{constructor(e,a){super();this._img=document.createElement("img");this._name=document.createElement("span");this.classList.add("planet-box"),this._img.src=e,this._img.classList.add("name"),this._name.innerText=a,this.append(this._img,this._name),this._name,this.addEventListener("click",()=>this.change_page())}change_page(){n.instance.proxima(new E)}};})();
