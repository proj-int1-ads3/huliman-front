"use strict";(()=>{var m=class extends HTMLElement{constructor(t){super(),this.textContent=t,this.classList.add("button")}};var l=class extends HTMLElement{constructor(e,n=!1,p="female"){super();this.charterImg=document.createElement("img");this.gender=document.createElement("input");this._label=document.createElement("label");this.charterImg.src=e,this._label.htmlFor=p,this.gender.type="radio",this.gender.name="gender",this.gender.checked=n,this.gender.id=p,this._label.append(this.charterImg),this.append(this.gender),this.append(this._label)}};var r=class extends HTMLElement{constructor(t){super(),t&&this.change_message(t)}change_message(t){this.textContent=t,this.classList.add("message")}};var b=class extends HTMLElement{constructor(){super();this._boy=new l("assets/images/boy.webp",!0,"male");this._gril=new l("assets/images/girl.webp");this.append(this._boy),this.append(this._gril)}};var h=class extends HTMLInputElement{constructor(t="nome",e,n){super(),this.placeholder=t,this.classList.add("input-box"),e&&(this.id=e),n&&(this.name=n)}};var u=class extends HTMLElement{constructor(){super();let t=document.createElement("img");t.src="assets/images/login.webp",this.append(t),this.classList.add("logo")}};var i=class extends m{constructor(t){super(t),this.classList.add("button-simples")}};var a=class extends HTMLElement{constructor(t){super(),this.classList.add("bg-box"),t&&this.addElement(t)}addElement(t){t.forEach(e=>{this.append(e)})}};var B=class extends a{constructor(e,n,p){super();this._bossImage=document.createElement("img");this._bossName=document.createElement("p");this._phaseDescription=document.createElement("p");this._atackBtn=new i("Atacar");this._escapeBtn=new i("Fugir");this._bossImage.src=e,this._bossName.innerText=n,this._phaseDescription.innerText=p,this.addElement([this._bossImage,this._bossName,this._phaseDescription,this._atackBtn,this._escapeBtn]),this.classList.add("phase-info-box")}};var c=class extends HTMLElement{constructor(){super(),this.classList.add("tela")}print(){console.log("printando info sensivel da tela")}render(){return""}show(){this.style.display="flex"}vanish(){this.style.display="none"}loadEvents(){}onEnter(){}onLEave(){}};var _=class extends HTMLElement{constructor(){super(),this.textContent="huliman",this.classList.add("title")}};var w=class extends c{constructor(){super();this._planetList=[{name:"Sociologia",path:"assets/images/planets/terra.png"},{name:"Matem\xE1tica",path:"assets/images/planets/terra.png"},{name:"Hist\xF3ria",path:"assets/images/planets/terra.png"},{name:"Geografia",path:"assets/images/planets/terra.png"},{name:"Portugu\xEAs",path:"assets/images/planets/terra.png"},{name:"Filosofia",path:"assets/images/planets/terra.png"},{name:"Biologia",path:"assets/images/planets/terra.png"},{name:"Qu\xEDmica",path:"assets/images/planets/terra.png"}];this._planets=Array();this._title=new r("Selecione onde deseja batalhar.");this._bgBox=new a;this._planetList.forEach(e=>{this._planets.push(new x(e.path,e.name))}),this.append(this._title),this._bgBox.classList.add("planets-list"),this._bgBox.addElement(this._planets),this.append(this._bgBox)}};var f=class extends a{constructor(){super();this._msg=new r;this._exit=new i("Sim");this._dont=new i("N\xE3o");this._msg.change_message("Deseja realmente sair?"),this._dont.addEventListener("click",()=>this.toggle),this._exit.addEventListener("click",()=>this.exit),this.append(this._msg,this._exit,this._dont)}toggle(){this.style.display="none"}exit(){}};var L=class extends c{constructor(){super();this._title=new _;this._logo=new u;this._confirmButton=new m("confirmar");this._leaveButton=new i("sair");this._inputBoxEmail=new h("E-mail");this._inputBoxPassword=new h("Senha");this._bgBox=new a;this._loginLink=document.createElement("a");this._singinpLink=document.createElement("a");this._loginLink.text="Login",this._singinpLink.text="Singup",this.append(this._title),this.append(this._logo),this._bgBox.addElement([this._inputBoxEmail,this._inputBoxPassword,this._confirmButton,this._leaveButton]),this.append(this._bgBox),this.classList.add("login-tela"),this._confirmButton.addEventListener("click",()=>this.changeScreen())}changeScreen(){console.log("trocando tela"),o.instance.proxima(new w)}loadEvents(){this._leaveButton.addEventListener("click",this.sair)}onEnter(){}onLEave(){}sair(){this.append(new f)}};var o=class{constructor(){this._navigation=new Array(new L);this._container=document.querySelector(".container")}static get instance(){return o._instance||(o._instance=new o),o._instance}init(){let t=this._navigation[0];this._container.append(t),t.show()}proxima(t){let e=this._navigation[this._navigation.length-1];e.vanish(),this._container.removeChild(e),this._navigation.push(t),this._container.append(t),t.show()}voltar(){let t=this._navigation.pop();t==null||t.vanish(),this._container.removeChild(t);let e=this._navigation[this._navigation.length-1];this._container.append(e),e.show()}static encerrar(){}};var v=class extends a{constructor(e,n,p){super();this._status=document.createElement("h2");this._image=document.createElement("img");this._dialog=document.createElement("p");this._status.textContent=e,this._image.src=n,this._dialog.textContent=p,this.classList.add("btl-status-box"),this._dialog.classList.add("btl-status-msg"),this.append(this._status,this._image,this._dialog)}};var d=class extends HTMLElement{constructor(e,n){super();this._img=document.createElement("img");this._name=document.createElement("p");this._lifeBar=document.createElement("hr");this._img.src=e,this._name.innerText=n,this.append(this._img,this._name,this._lifeBar)}};var g=class extends HTMLElement{constructor(e,n){super();this._img=document.createElement("img");this._name=new r;this._img.src=e,n!=!1&&this._name.change_message(n),this.append(this._img,this._name)}};var E=class extends HTMLElement{constructor(e){super();this._dialog=new r;this._button=new i("Continuar");this._bgBox=new a;this._player=new g("assets/images/boy.webp",!1),this._character=new g("assets/images/boy.webp","Rika"),this._dialog.change_message(e),this._bgBox.addElement([this._player,this._character,this._dialog,this._button]),this.append(this._bgBox)}};var T=class extends c{constructor(){super();this._box=new a;this._question=new r;this._buttons=Array();this._combate=document.createElement("div");this._player=new d("assets/images/boy.webp","Fulano");this._enemy=new d("assets/images/boy.webp","FIGTHT");this._helpBox=new E("Perder n\xE3o tem nada a ver com n\xE3o vencer, mas sim com desistir");this._combate.classList.add("combat-box"),this._combate.append(this._player,this._enemy),this._question.change_message("Em suma, um handler \xE9 um bloco de c\xF3digo respons\xE1vel por tratar eventos, solicita\xE7\xF5es ou exce\xE7\xF5es em um programa. Sua fun\xE7\xE3o \xE9 definir a l\xF3gica necess\xE1ria para lidar com uma situa\xE7\xE3o espec\xEDfica e execut\xE1-la quando necess\xE1rio.");for(let e=0;e<5;e++)this._buttons.push(new i("Vamos ver o que vai da"));this._box.addElement([this._question]),this._box.addElement(this._buttons),this.help(),this.append(this._box,this._combate)}help(){this.append(this._helpBox),this.append(new v("Vit\xF3ria","assets/images/girl.webp","Voc\xEA \xE9 bom nisso!"))}};var x=class extends HTMLElement{constructor(e,n){super();this._img=document.createElement("img");this._name=document.createElement("span");this.classList.add("planet-box"),this._img.src=e,this._img.classList.add("name"),this._name.innerText=n,this.append(this._img,this._name),this._name,this.addEventListener("click",()=>this.change_page())}change_page(){o.instance.proxima(new T)}};var y=class extends i{constructor(){super(""),this.classList.add("tip-btn")}};var H=class extends HTMLButtonElement{constructor(e){super();this._img=document.createElement("img");this._img.src=e,this.append(this._img)}};var k=class extends HTMLElement{constructor(e="Vit\xF3ria",n="assets/images/boy.webp",p){super();this._status=document.createElement("p");this._characterImg=document.createElement("img");this._msg=document.createElement("p");this._btn=new i("Confirmar");this._status.innerText=e,this._characterImg.src=n,this._msg.innerText=p,this.append(this._status,this._characterImg,this._msg,this._btn)}};var M=class{init(){customElements.define("app-title",_),customElements.define("app-logo",u),customElements.define("app-button",m),customElements.define("app-background-box",a),customElements.define("app-simple-button",i),customElements.define("app-message",r),customElements.define("app-input-box",h,{extends:"input"}),customElements.define("app-charter-box",l),customElements.define("app-gender-box",b),customElements.define("app-planet-box",x),customElements.define("app-tip-button",y,{extends:"button"}),customElements.define("app-phase-info-box",B),customElements.define("app-phase-button",H),customElements.define("app-character-dialog",g),customElements.define("app-tip-box",E),customElements.define("app-status-box",k),customElements.define("app-character-fight-box",d),customElements.define("app-battle-status",v),customElements.define("app-exit-box",f)}};})();
