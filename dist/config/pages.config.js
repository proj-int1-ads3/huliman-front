"use strict";(()=>{var h=class extends HTMLElement{render(){this.onEnter()}vanish(){this.onLeave()}loadEvents(){throw new Error("Method not implemented.")}onEnter(){throw new Error("Method not implemented.")}onLeave(){throw new Error("Method not implemented.")}};var o=class extends h{constructor(){super()}render(){super.render(),this.style.display="flex"}vanish(){super.vanish(),this.style.display="none"}};var d=class extends o{constructor(e){super(),this.textContent=e,this.classList.add("button")}};var g=class extends o{constructor(){super();let e=document.createElement("img");e.src="assets/images/login.webp",this.append(e),this.classList.add("logo")}};var l=class extends o{constructor(){super(),this.textContent="huliman",this.classList.add("title")}};var s=class extends h{constructor(){super(),this.classList.add("tela")}render(){super.render(),this.style.display="flex"}vanish(){super.vanish(),this.style.display="none"}};var y=class extends s{constructor(){super();this._title=new l;this._btn=new d("Continuar");this._logo=new g;this.append(this._title,this._logo,this._btn)}};var m=class extends o{constructor(e){super(),e&&this.change_message(e)}change_message(e){this.textContent=e,this.classList.add("message")}};var n=class extends o{constructor(e){super(),this.classList.add("bg-box"),e&&this.addElement(e)}addElement(e){e.forEach(t=>{this.append(t)})}};var c=class extends HTMLInputElement{constructor(e="nome",t,a){super(),this.placeholder=e,this.classList.add("input-box"),t&&(this.id=t),a&&(this.name=a)}};var p=class extends d{constructor(e){super(e),this.classList.add("button-simples")}};var B=class extends HTMLElement{constructor(t,a){super();this._img=document.createElement("img");this._name=new m;this._img.src=t,a!=!1&&this._name.change_message(a),this.append(this._img,this._name)}};var P=class extends HTMLElement{constructor(t){super();this._dialog=new m;this._button=new p("Continuar");this._bgBox=new n;this._player=new B("assets/images/boy.webp",!1),this._character=new B("assets/images/boy.webp","Rika"),this._dialog.change_message(t),this._bgBox.addElement([this._player,this._character,this._dialog,this._button]),this.append(this._bgBox)}};var k=class extends p{constructor(){super("?"),this.classList.add("tip-btn")}};var I=class extends n{constructor(){super();this._question=new m;this._buttons=Array();this._tip=new k;this._question.classList.add("pergunta"),this.classList.add("question-box"),this._question.change_message("Em suma w\xE7lkejgwehow owhgpowe gwhgpowe hgpowehgpowe hgpowehgp weghwp wgkhwekghweoi weogh owhgpow hpwoehg pwehgpwe wepgw ");for(let t=0;t<5;t++){let a=new p("Vamos ver o que vai da whjgowihgw wohgpweoghpwoe wpghwepg");a.classList.add("botao-resposta"),this._buttons.push(a)}this.addElement([this._question,this._tip]),this.addElement(this._buttons)}};var b=class extends HTMLElement{constructor(t,a){super();this._img=document.createElement("img");this._name=document.createElement("p");this._lifeBar=document.createElement("hr");this._img.src=t,this._name.innerText=a,this._img.classList.add("imagem-combate"),this.append(this._img,this._name,this._lifeBar)}};var T=class extends n{constructor(){super();this._player=new b("assets/images/characters/battle-girl.svg","Fulano");this._enemy=new b("assets/images/characters/inimigoStatic.svg","FIGTHT");this.style.backgroundColor,this._player.classList.add("protagonista"),this._enemy.classList.add("inimigo"),this.append(this._enemy,this._player),this.classList.add("combat-box")}};var u=class extends s{constructor(){super();this._helpBox=new P("Perder n\xE3o tem nada a ver com n\xE3o vencer, mas sim com desistir");this._questionBox=new I;this._combat=new T;this._combat.classList.add("combat-box"),this.append(this._questionBox,this._combat)}help(){this.append(this._helpBox)}};var C=class extends n{constructor(t,a,E){super();this._bossImage=document.createElement("img");this._bossName=document.createElement("p");this._phaseDescription=document.createElement("p");this._atackBtn=new p("Atacar");this._escapeBtn=new p("Fugir");this._bossImage.src=t,this._bossName.innerText=a,this._phaseDescription.innerText=E,this.addElement([this._bossImage,this._bossName,this._phaseDescription,this._atackBtn,this._escapeBtn]),this.loadEvents(),this.classList.add("phase-info-box")}loadEvents(){this._atackBtn.addEventListener("click",()=>{r.instance.next(new u)}),this._escapeBtn.addEventListener("click",()=>{this.vanish()})}vanish(){super.vanish(),this.vanish()}};var v=class extends s{constructor(t="assets/images/maps/historia.svg"){super();this._map=document.createElement("object");this._phase=new C("assets/images/boy.webp","PHANOPO","O Brasil tem uma hist\xF3ria diversificada, desde suas ra\xEDzes ind\xEDgenas at\xE9 a invas\xE3o portuguesa, o per\xEDodo imperial, a luta pela independ\xEAncia e a evolu\xE7\xE3o como uma na\xE7\xE3o multicultural e democr\xE1tica. De heran\xE7a rica, o pa\xEDs enfrentou desafios e conquistou avan\xE7os, moldando sua identidade ao longo dos s\xE9culos.");this._map.type="image/svg+xml",this._map.data=t,this._map.id="map",this._phase.style.display="none",this._map.addEventListener("load",()=>{let a=this._map.contentDocument;(a==null?void 0:a.getElementById("path5919")).addEventListener("click",()=>{this.getPhaseInfo()})}),this.append(this._map,this._phase)}getPhaseInfo(){this._map.classList.add("map-to-left"),this._phase.style.display="flex"}render(){}vanish(){}};var _=class extends s{constructor(t){super();this._planetImage=document.createElement("img");this._desc=new m;this._button=new p("Continuar");this._previous=new p("Voltar");this._planetName=new m(`Planeta ${t.name}`),this._desc.innerText=t.description,this._planetImage.src=t.img,this._desc.change_message(t.description),this.loadEvents(),this.append(this._planetName,this._planetImage,this._desc,this._button,this._previous)}loadEvents(){this._button.addEventListener("click",()=>{r.instance.next(new v)}),this._previous.addEventListener("click",()=>{r.instance.previous()})}render(){}vanish(){}};var S=class extends o{constructor(t){super();this._img=document.createElement("img");this._name=document.createElement("span");this.classList.add("planet-box"),this._img.src=t.img,this._img.classList.add("name"),this._name.innerText=t.name,this.append(this._img,this._name),this._name,this._destiny=new _(t),this.addEventListener("click",()=>this.change_page())}change_page(){this._destiny?r.instance.next(this._destiny):console.log("N\xE3o a destino definido")}};var f=class extends s{constructor(){super();this._planetList=[{name:"Sociologia",img:"assets/images/planets/terra.png",description:"Escolha as suas batalhas e n\xE3o desista at\xE9 venc\xEA-las."},{name:"Matem\xE1tica",img:"assets/images/planets/terra.png",description:"Os desafios s\xE3o o tempero da vida!"},{name:"Hist\xF3ria",img:"assets/images/planets/terra.png",description:"Quando n\xE3o houver mais solu\xE7\xE3o, ainda h\xE1 de haver sa\xEDda. - Tit\xE3s"},{name:"Geografia",img:"assets/images/planets/terra.png",description:"A \xFAnica coisa imposs\xEDvel \xE9 aquilo que voc\xEA n\xE3o tenta."},{name:"Portugu\xEAs",img:"assets/images/planets/terra.png",description:"O essencial \xE9 invis\xEDvel aos olhos. - Antoine de Saint-Exup\xE9ry"},{name:"Filosofia",img:"assets/images/planets/terra.png",description:""},{name:"Biologia",img:"assets/images/planets/terra.png",description:""},{name:"Qu\xEDmica",img:"assets/images/planets/terra.png",description:""}];this._planets=Array();this._title=new m("Selecione onde deseja batalhar.");this._bgBox=new n;this._planetList.forEach(t=>{let a=new S(t);this._planets.push(a)}),this.append(this._title),this._bgBox.classList.add("planets-list"),this._bgBox.addElement(this._planets),this.append(this._bgBox)}render(){}vanish(){}};var x=class extends s{constructor(){super();this._title=new l;this._logo=new g;this._confirmButton=new d("confirmar");this._leaveButton=new p("sair");this._inputBoxEmail=new c("E-mail");this._inputBoxPassword=new c("Senha");this._bgBox=new n;this._loginLink=document.createElement("a");this._singinpLink=document.createElement("a");this._loginLink.text="Login",this._singinpLink.text="Singup",this.append(this._title),this.append(this._logo),this._bgBox.addElement([this._inputBoxEmail,this._inputBoxPassword,this._confirmButton,this._leaveButton]),this.append(this._bgBox),this.classList.add("login-tela"),this.loadEvents()}loadEvents(){this._confirmButton.addEventListener("click",()=>this.changeScreen()),this._leaveButton.addEventListener("click",()=>this.leave())}onEnter(){}onLeave(){}changeScreen(){r.instance.next(new f)}leave(){r.instance.next(new w)}};var r=class{constructor(){this._navigation=new Array(new x);this._container=document.querySelector(".container")}static get instance(){return r._instance||(r._instance=new r),r._instance}init(){let e=this._navigation[0];this._container.append(e),e.render()}next(e){let t=this._navigation[this._navigation.length-1];t.vanish(),this._container.removeChild(t),this._navigation.push(e),this._container.append(e),e.render()}previous(){let e=this._navigation.pop();e==null||e.vanish(),this._container.removeChild(e);let t=this._navigation[this._navigation.length-1];this._container.append(t),t.render()}static encerrar(){}};var w=class extends s{constructor(){super();this._message=new m("Deseja realmente sair?");this._confirmButton=new d("Sim");this._cancelButton=new d("N\xE3o");this.append(this._message),this.append(this._confirmButton),this.append(this._cancelButton),this.loadEvents()}loadEvents(){this._confirmButton.addEventListener("click",()=>this.leave()),this._cancelButton.addEventListener("click",()=>this.back())}onEnter(){}onLeave(){}back(){r.instance.previous()}leave(){r.encerrar()}};var D=class extends s{};var L=class extends o{constructor(t,a=!1,E="female"){super();this.charterImg=document.createElement("img");this.gender=document.createElement("input");this._label=document.createElement("label");this.charterImg.src=t,this._label.htmlFor=E,this.gender.type="radio",this.gender.name="gender",this.gender.checked=a,this.gender.id=E,this._label.append(this.charterImg),this.append(this.gender),this.append(this._label)}};var M=class extends o{constructor(){super();this._boy=new L("assets/images/boy.webp",!0,"male");this._gril=new L("assets/images/girl.webp");this.append(this._boy),this.append(this._gril)}};var H=class extends s{constructor(){super();this._emailInputBox=new c("E-mail");this._passwordInputBox=new c("Senha");this._registerButton=new d("Cadastrar");this._gender=new M;this._bgBox=new n;this._title=new l;this.append(this._title),this._bgBox.addElement([this._emailInputBox,this._passwordInputBox,this._registerButton,this._gender]),this.append(this._bgBox)}};var A=class extends s{constructor(){super();this._img=document.createElement("img");this._imgPlanet=document.createElement("img");this._loadBar=document.createElement("hr");this.append(this._img,this._imgPlanet,this._loadBar)}};var q=class{init(){customElements.define("app-page-singup",H),customElements.define("app-page-title",D),customElements.define("app-page-login",x),customElements.define("app-page-home",y),customElements.define("app-page-leave",w),customElements.define("app-page-planets",f),customElements.define("app-page-planet-info",_),customElements.define("app-page-phase",v),customElements.define("app-page-combat",u),customElements.define("app-page-loading",A)}};})();
