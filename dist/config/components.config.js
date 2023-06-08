"use strict";(()=>{var v=class extends HTMLElement{render(){this.onEnter()}vanish(){this.onLeave()}loadEvents(){throw new Error("Method not implemented.")}onEnter(){throw new Error("Method not implemented.")}onLeave(){throw new Error("Method not implemented.")}};var p=class extends v{constructor(){super()}render(){super.render(),this.style.display="flex"}vanish(){super.vanish(),this.style.display="none"}};var c=class extends p{constructor(e){super(),this.textContent=e,this.classList.add("button")}};var l=class extends p{constructor(t,n=!1,d="female"){super();this.charterImg=document.createElement("img");this.gender=document.createElement("input");this._label=document.createElement("label");this.charterImg.src=t,this._label.htmlFor=d,this.gender.type="radio",this.gender.name="gender",this.gender.checked=n,this.gender.id=d,this._label.append(this.charterImg),this.append(this.gender),this.append(this._label)}};var o=class extends p{constructor(e){super(),e&&this.change_message(e)}change_message(e){this.textContent=e,this.classList.add("message")}};var y=class extends p{constructor(){super();this._boy=new l("assets/images/boy.webp",!0,"male");this._gril=new l("assets/images/girl.webp");this.append(this._boy),this.append(this._gril)}};var h=class extends HTMLInputElement{constructor(e="nome",t,n){super(),this.placeholder=e,this.classList.add("input-box"),t&&(this.id=t),n&&(this.name=n)}};var _=class extends p{constructor(){super();let e=document.createElement("img");e.src="assets/images/login.webp",this.append(e),this.classList.add("logo")}};var r=class extends p{constructor(e){super(),this.classList.add("bg-box"),e&&this.addElement(e)}addElement(e){e.forEach(t=>{this.append(t)})}};var s=class extends c{constructor(e){super(e),this.classList.add("button-simples")}};var m=class extends v{constructor(){super(),this.classList.add("tela")}render(){super.render(),this.style.display="flex"}vanish(){super.vanish(),this.style.display="none"}};var f=class extends p{constructor(){super(),this.textContent="huliman",this.classList.add("title")}};var k=class extends m{constructor(t="assets/images/maps/historia.svg"){super();this._map=document.createElement("object");this._phase=new x("assets/images/boy.webp","PHANOPO","O Brasil tem uma hist\xF3ria diversificada, desde suas ra\xEDzes ind\xEDgenas at\xE9 a invas\xE3o portuguesa, o per\xEDodo imperial, a luta pela independ\xEAncia e a evolu\xE7\xE3o como uma na\xE7\xE3o multicultural e democr\xE1tica. De heran\xE7a rica, o pa\xEDs enfrentou desafios e conquistou avan\xE7os, moldando sua identidade ao longo dos s\xE9culos.");this._map.type="image/svg+xml",this._map.data=t,this._map.id="map",this._phase.style.display="none",this._map.addEventListener("load",()=>{let n=this._map.contentDocument;(n==null?void 0:n.getElementById("path5919")).addEventListener("click",()=>{this.getPhaseInfo()})}),this.append(this._map,this._phase)}getPhaseInfo(){this._map.classList.add("map-to-left"),this._phase.style.display="flex"}render(){}vanish(){}};var P=class extends m{constructor(t){super();this._planetImage=document.createElement("img");this._desc=new o;this._button=new s("Continuar");this._previous=new s("Voltar");this._planetName=new o(`Planeta ${t.name}`),this._desc.innerText=t.description,this._planetImage.src=t.img,this._desc.change_message(t.description),this.loadEvents(),this.append(this._planetName,this._planetImage,this._desc,this._button,this._previous)}loadEvents(){this._button.addEventListener("click",()=>{a.instance.next(new k)}),this._previous.addEventListener("click",()=>{a.instance.previous()})}render(){}vanish(){}};var E=class extends p{constructor(t){super();this._img=document.createElement("img");this._name=document.createElement("span");this.classList.add("planet-box"),this._img.src=t.img,this._img.classList.add("name"),this._name.innerText=t.name,this.append(this._img,this._name),this._name,this._destiny=new P(t),this.addEventListener("click",()=>this.change_page())}change_page(){this._destiny?a.instance.next(this._destiny):console.log("N\xE3o a destino definido")}};var T=class extends m{constructor(){super();this._planetList=[{name:"Sociologia",img:"assets/images/planets/terra.png",description:"Escolha as suas batalhas e n\xE3o desista at\xE9 venc\xEA-las."},{name:"Matem\xE1tica",img:"assets/images/planets/terra.png",description:"Os desafios s\xE3o o tempero da vida!"},{name:"Hist\xF3ria",img:"assets/images/planets/terra.png",description:"Quando n\xE3o houver mais solu\xE7\xE3o, ainda h\xE1 de haver sa\xEDda. - Tit\xE3s"},{name:"Geografia",img:"assets/images/planets/terra.png",description:"A \xFAnica coisa imposs\xEDvel \xE9 aquilo que voc\xEA n\xE3o tenta."},{name:"Portugu\xEAs",img:"assets/images/planets/terra.png",description:"O essencial \xE9 invis\xEDvel aos olhos. - Antoine de Saint-Exup\xE9ry"},{name:"Filosofia",img:"assets/images/planets/terra.png",description:""},{name:"Biologia",img:"assets/images/planets/terra.png",description:""},{name:"Qu\xEDmica",img:"assets/images/planets/terra.png",description:""}];this._planets=Array();this._title=new o("Selecione onde deseja batalhar.");this._bgBox=new r;this._planetList.forEach(t=>{let n=new E(t);this._planets.push(n)}),this.append(this._title),this._bgBox.classList.add("planets-list"),this._bgBox.addElement(this._planets),this.append(this._bgBox)}render(){}vanish(){}};var C=class extends m{constructor(){super();this._message=new o("Deseja realmente sair?");this._confirmButton=new c("Sim");this._cancelButton=new c("N\xE3o");this.append(this._message),this.append(this._confirmButton),this.append(this._cancelButton),this.loadEvents()}loadEvents(){this._confirmButton.addEventListener("click",()=>this.leave()),this._cancelButton.addEventListener("click",()=>this.back())}onEnter(){}onLeave(){}back(){a.instance.previous()}leave(){a.encerrar()}};var S=class extends m{constructor(){super();this._title=new f;this._logo=new _;this._confirmButton=new c("confirmar");this._leaveButton=new s("sair");this._inputBoxEmail=new h("E-mail");this._inputBoxPassword=new h("Senha");this._bgBox=new r;this._loginLink=document.createElement("a");this._singinpLink=document.createElement("a");this._loginLink.text="Login",this._singinpLink.text="Singup",this.append(this._title),this.append(this._logo),this._bgBox.addElement([this._inputBoxEmail,this._inputBoxPassword,this._confirmButton,this._leaveButton]),this.append(this._bgBox),this.classList.add("login-tela"),this.loadEvents()}loadEvents(){this._confirmButton.addEventListener("click",()=>this.changeScreen()),this._leaveButton.addEventListener("click",()=>this.leave())}onEnter(){}onLeave(){}changeScreen(){a.instance.next(new T)}leave(){a.instance.next(new C)}};var a=class{constructor(){this._navigation=new Array(new S);this._container=document.querySelector(".container")}static get instance(){return a._instance||(a._instance=new a),a._instance}init(){let e=this._navigation[0];this._container.append(e),e.render()}next(e){let t=this._navigation[this._navigation.length-1];t.vanish(),this._container.removeChild(t),this._navigation.push(e),this._container.append(e),e.render()}previous(){let e=this._navigation.pop();e==null||e.vanish(),this._container.removeChild(e);let t=this._navigation[this._navigation.length-1];this._container.append(t),t.render()}static encerrar(){}};var u=class extends HTMLElement{constructor(t,n){super();this._img=document.createElement("img");this._name=new o;this._img.src=t,n!=!1&&this._name.change_message(n),this.append(this._img,this._name)}};var b=class extends HTMLElement{constructor(t){super();this._dialog=new o;this._button=new s("Continuar");this._bgBox=new r;this._player=new u("assets/images/boy.webp",!1),this._character=new u("assets/images/boy.webp","Rika"),this._dialog.change_message(t),this._bgBox.addElement([this._player,this._character,this._dialog,this._button]),this.append(this._bgBox)}};var B=class extends s{constructor(){super("?"),this.classList.add("tip-btn")}};var w=class extends r{constructor(){super();this._question=new o;this._buttons=Array();this._tip=new B;this._question.change_message("Em suma, um handler \xE9 um bloco de c\xF3digo respons\xE1vel por tratar eventos, solicita\xE7\xF5es ou exce\xE7\xF5es em um programa. Sua fun\xE7\xE3o \xE9 definir a l\xF3gica necess\xE1ria para lidar com uma situa\xE7\xE3o espec\xEDfica e execut\xE1-la quando necess\xE1rio.");for(let t=0;t<5;t++)this._buttons.push(new s("Vamos ver o que vai da"));this.addElement([this._question,this._tip]),this.addElement(this._buttons)}};var g=class extends HTMLElement{constructor(t,n){super();this._img=document.createElement("img");this._name=document.createElement("p");this._lifeBar=document.createElement("hr");this._img.src=t,this._name.innerText=n,this.append(this._img,this._name,this._lifeBar)}};var L=class extends r{constructor(){super();this._player=new g("assets/images/boy.webp","Fulano");this._enemy=new g("assets/images/boy.webp","FIGTHT");this.style.backgroundColor,this.append(this._enemy,this._player),this.classList.add("combat-box")}};var D=class extends m{constructor(){super();this._helpBox=new b("Perder n\xE3o tem nada a ver com n\xE3o vencer, mas sim com desistir");this._questionBox=new w;this._combat=new L;this._combat.classList.add("combat-box"),this.append(this._questionBox,this._combat)}help(){this.append(this._helpBox)}};var x=class extends r{constructor(t,n,d){super();this._bossImage=document.createElement("img");this._bossName=document.createElement("p");this._phaseDescription=document.createElement("p");this._atackBtn=new s("Atacar");this._escapeBtn=new s("Fugir");this._bossImage.src=t,this._bossName.innerText=n,this._phaseDescription.innerText=d,this.addElement([this._bossImage,this._bossName,this._phaseDescription,this._atackBtn,this._escapeBtn]),this.loadEvents(),this.classList.add("phase-info-box")}loadEvents(){this._atackBtn.addEventListener("click",()=>{a.instance.next(new D)}),this._escapeBtn.addEventListener("click",()=>{this.vanish()})}vanish(){super.vanish(),this.vanish()}};var I=class extends HTMLButtonElement{constructor(t){super();this._img=document.createElement("img");this._img.src=t,this.append(this._img)}};var M=class extends HTMLElement{constructor(t="Vit\xF3ria",n="assets/images/boy.webp",d){super();this._status=document.createElement("p");this._characterImg=document.createElement("img");this._msg=document.createElement("p");this._btn=new s("Confirmar");this._status.innerText=t,this._characterImg.src=n,this._msg.innerText=d,this.append(this._status,this._characterImg,this._msg,this._btn)}};var H=class extends r{constructor(t,n,d){super();this._status=document.createElement("h2");this._image=document.createElement("img");this._dialog=document.createElement("p");this._btn=new s("Confirmar");this._status.textContent=t,this._image.src=n,this._dialog.textContent=d,this.classList.add("btl-status-box"),this._dialog.classList.add("btl-status-msg"),this.loadEvents(),this.append(this._status,this._image,this._dialog,this._btn)}loadEvents(){this._btn.addEventListener("click",()=>this.vanish())}vanish(){this.remove()}};var A=class extends r{constructor(){super();this._msg=new o;this._exit=new s("Sim");this._dont=new s("N\xE3o");this._blur=new r;this._msg.change_message(`Deseja realmente sair?
Voc\xEA ira perder todo o progresso da sua partida.`),this._dont.addEventListener("click",()=>this.vanish()),this._exit.addEventListener("click",()=>this.exit()),this._blur.append(this._msg,this._exit,this._dont),this.append(this._blur)}vanish(){this.style.display="none"}exit(){window.close()}};var q=class{init(){customElements.define("app-title",f),customElements.define("app-logo",_),customElements.define("app-button",c),customElements.define("app-background-box",r),customElements.define("app-simple-button",s),customElements.define("app-message",o),customElements.define("app-input-box",h,{extends:"input"}),customElements.define("app-charter-box",l),customElements.define("app-gender-box",y),customElements.define("app-planet-box",E),customElements.define("app-tip-button",B),customElements.define("app-phase-info-box",x),customElements.define("app-phase-button",I),customElements.define("app-character-dialog",u),customElements.define("app-tip-box",b),customElements.define("app-status-box",M),customElements.define("app-character-fight-box",g),customElements.define("app-battle-status",H),customElements.define("app-exit-box",A),customElements.define("app-question-box",w),customElements.define("app-combat-box",L)}};})();
