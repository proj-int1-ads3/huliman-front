"use strict";(()=>{var c=class extends HTMLElement{render(){this.onEnter()}vanish(){this.onLeave()}loadEvents(){throw new Error("Method not implemented.")}onEnter(){throw new Error("Method not implemented.")}onLeave(){throw new Error("Method not implemented.")}};var r=class extends c{constructor(){super(),this.classList.add("tela")}render(){super.render(),this.style.display="flex"}vanish(){super.vanish(),this.style.display="none"}};var p=class extends c{constructor(){super()}render(){super.render(),this.style.display="flex"}vanish(){super.vanish(),this.style.display="none"}};var m=class extends p{constructor(e){super(),this.classList.add("bg-box"),e&&this.addElement(e)}addElement(e){e.forEach(t=>{this.append(t)})}};var d=class extends p{constructor(e){super(),this.textContent=e,this.classList.add("button")}};var h=class extends HTMLInputElement{constructor(e="nome",t,a){super(),this.placeholder=e,this.classList.add("input-box"),t&&(this.id=t),a&&(this.name=a)}};var v=class extends p{constructor(){super();let e=document.createElement("img");e.src="assets/images/login.webp",this.append(e),this.classList.add("logo")}};var n=class extends d{constructor(e){super(e),this.classList.add("button-simples")}};var u=class extends p{constructor(){super(),this.textContent="huliman",this.classList.add("title")}};var o=class extends p{constructor(e){super(),e&&this.change_message(e)}change_message(e){this.textContent=e,this.classList.add("message")}};var _=class extends p{constructor(t){super();this._img=document.createElement("img");this._name=document.createElement("span");this.classList.add("planet-box"),this._img.src=t.img,this._img.classList.add("name"),this._name.innerText=t.name,this.append(this._img,this._name),this._name,this._destiny=new x(t),this.addEventListener("click",()=>this.change_page())}change_page(){this._destiny?s.instance.next(this._destiny):console.log("N\xE3o a destino definido")}};var f=class extends r{constructor(){super();this._planetList=[{id:1,name:"Sociologia",img:"assets/images/planets/terra.png",description:"Escolha as suas batalhas e n\xE3o desista at\xE9 venc\xEA-las."},{id:2,name:"Matem\xE1tica",img:"assets/images/planets/terra.png",description:"Os desafios s\xE3o o tempero da vida!"},{id:3,name:"Hist\xF3ria",img:"assets/images/planets/terra.png",description:"Quando n\xE3o houver mais solu\xE7\xE3o, ainda h\xE1 de haver sa\xEDda. - Tit\xE3s"},{id:4,name:"Geografia",img:"assets/images/planets/terra.png",description:"A \xFAnica coisa imposs\xEDvel \xE9 aquilo que voc\xEA n\xE3o tenta."},{id:5,name:"Portugu\xEAs",img:"assets/images/planets/terra.png",description:"O essencial \xE9 invis\xEDvel aos olhos. - Antoine de Saint-Exup\xE9ry"},{id:6,name:"Filosofia",img:"assets/images/planets/terra.png",description:""},{id:7,name:"Biologia",img:"assets/images/planets/terra.png",description:""},{id:8,name:"Qu\xEDmica",img:"assets/images/planets/terra.png",description:""}];this._planets=Array();this._title=new o("Selecione onde deseja batalhar.");this._bgBox=new m;this._planetList.forEach(t=>{let a=new _(t);this._planets.push(a)}),this.append(this._title),this._bgBox.classList.add("planets-list"),this._bgBox.addElement(this._planets),this.append(this._bgBox)}render(){}vanish(){}};var w=class extends r{constructor(){super();this._message=new o("Deseja realmente sair?");this._confirmButton=new d("Sim");this._cancelButton=new d("N\xE3o");this.append(this._message),this.append(this._confirmButton),this.append(this._cancelButton),this.loadEvents()}loadEvents(){this._confirmButton.addEventListener("click",()=>this.leave()),this._cancelButton.addEventListener("click",()=>this.back())}onEnter(){}onLeave(){}back(){s.instance.previous()}leave(){s.encerrar()}};var E=class extends r{constructor(){super();this._title=new u;this._logo=new v;this._confirmButton=new d("confirmar");this._leaveButton=new n("sair");this._inputBoxEmail=new h("E-mail");this._inputBoxPassword=new h("Senha");this._bgBox=new m;this._loginLink=document.createElement("a");this._singinpLink=document.createElement("a");this._loginLink.text="Login",this._singinpLink.text="Singup",this.append(this._title),this.append(this._logo),this._bgBox.addElement([this._inputBoxEmail,this._inputBoxPassword,this._confirmButton,this._leaveButton]),this.append(this._bgBox),this.classList.add("login-tela"),this.loadEvents()}loadEvents(){this._confirmButton.addEventListener("click",()=>this.changeScreen()),this._leaveButton.addEventListener("click",()=>this.leave())}onEnter(){}onLeave(){}changeScreen(){s.instance.next(new f)}leave(){s.instance.next(new w)}};var s=class{constructor(){this._navigation=new Array(new E);this._container=document.querySelector(".container")}static get instance(){return s._instance||(s._instance=new s),s._instance}init(){let e=this._navigation[0];this._container.append(e),e.render()}next(e){let t=this._navigation[this._navigation.length-1];t.vanish(),this._container.removeChild(t),this._navigation.push(e),this._container.append(e),e.render()}previous(){let e=this._navigation.pop();e==null||e.vanish(),this._container.removeChild(e);let t=this._navigation[this._navigation.length-1];this._container.append(t),t.render()}static encerrar(){}};var l=class extends HTMLElement{constructor(t,a){super();this._img=document.createElement("img");this._name=new o;this._img.src=t,a!=!1&&this._name.change_message(a),this.append(this._img,this._name)}};var B=class extends HTMLElement{constructor(t){super();this._dialog=new o;this._button=new n("Continuar");this._bgBox=new m;this._player=new l("assets/images/boy.webp",!1),this._character=new l("assets/images/boy.webp","Rika"),this._dialog.change_message(t),this._bgBox.addElement([this._player,this._character,this._dialog,this._button]),this.append(this._bgBox)}};var b=class extends n{constructor(){super("?"),this.classList.add("tip-btn")}};var L=class extends m{constructor(){super();this._question=new o;this._buttons=Array();this._tip=new b;this._question.classList.add("pergunta"),this.classList.add("question-box"),this._question.change_message("Em suma w\xE7lkejgwehow owhgpowe gwhgpowe hgpowehgpowe hgpowehgp weghwp wgkhwekghweoi weogh owhgpow hpwoehg pwehgpwe wepgw ");for(let t=0;t<5;t++){let a=new n("Vamos ver o que vai da whjgowihgw wohgpweoghpwoe wpghwepg");a.classList.add("botao-resposta"),this._buttons.push(a)}this.addElement([this._question,this._tip]),this.addElement(this._buttons)}};var g=class extends HTMLElement{constructor(t,a){super();this._img=document.createElement("img");this._name=document.createElement("p");this._lifeBar=document.createElement("hr");this._img.src=t,this._name.innerText=a,this._img.classList.add("imagem-combate"),this.append(this._img,this._name,this._lifeBar)}};var y=class extends m{constructor(){super();this._player=new g("assets/images/characters/battle-girl.svg","Fulano");this._enemy=new g("assets/images/characters/inimigoStatic.svg","FIGTHT");this.style.backgroundColor,this._player.classList.add("protagonista"),this._enemy.classList.add("inimigo"),this.append(this._enemy,this._player),this.classList.add("combat-box")}};var k=class extends r{constructor(){super();this._helpBox=new B("Perder n\xE3o tem nada a ver com n\xE3o vencer, mas sim com desistir");this._questionBox=new L;this._combat=new y;this._combat.classList.add("combat-box"),this.append(this._questionBox,this._combat)}help(){this.append(this._helpBox)}};var S=class extends m{constructor(t,a,T){super();this._bossImage=document.createElement("img");this._bossName=document.createElement("p");this._phaseDescription=document.createElement("p");this._atackBtn=new n("Atacar");this._escapeBtn=new n("Fugir");this._bossImage.src=t,this._bossName.innerText=a,this._phaseDescription.innerText=T,this.addElement([this._bossImage,this._bossName,this._phaseDescription,this._atackBtn,this._escapeBtn]),this.loadEvents(),this.classList.add("phase-info-box")}loadEvents(){this._atackBtn.addEventListener("click",()=>{s.instance.next(new k)}),this._escapeBtn.addEventListener("click",()=>{this.vanish()})}vanish(){super.vanish(),this.vanish()}};var P=class extends r{constructor(t="assets/images/maps/historia.svg"){super();this._map=document.createElement("object");this._phase=new S("assets/images/boy.webp","PHANOPO","O Brasil tem uma hist\xF3ria diversificada, desde suas ra\xEDzes ind\xEDgenas at\xE9 a invas\xE3o portuguesa, o per\xEDodo imperial, a luta pela independ\xEAncia e a evolu\xE7\xE3o como uma na\xE7\xE3o multicultural e democr\xE1tica. De heran\xE7a rica, o pa\xEDs enfrentou desafios e conquistou avan\xE7os, moldando sua identidade ao longo dos s\xE9culos.");this._map.type="image/svg+xml",this._map.data=t,this._map.id="map",this._phase.style.display="none",this._map.addEventListener("load",()=>{let a=this._map.contentDocument;(a==null?void 0:a.getElementById("path5919")).addEventListener("click",()=>{this.getPhaseInfo()})}),this.append(this._map,this._phase)}getPhaseInfo(){this._map.classList.add("map-to-left"),this._phase.style.display="flex"}render(){}vanish(){}};var x=class extends r{constructor(t){super();this._planetImage=document.createElement("img");this._desc=new o;this._button=new n("Continuar");this._previous=new n("Voltar");this._planetName=new o(`Planeta ${t.name}`),this._desc.innerText=t.description,this._planetImage.src=t.img,this._desc.change_message(t.description),this.loadEvents(),this.append(this._planetName,this._planetImage,this._desc,this._button,this._previous)}loadEvents(){this._button.addEventListener("click",()=>{s.instance.next(new P)}),this._previous.addEventListener("click",()=>{s.instance.previous()})}render(){}vanish(){}};})();
