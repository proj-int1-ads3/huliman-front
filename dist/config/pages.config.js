"use strict";(()=>{var f=class extends HTMLElement{render(){this.onEnter()}vanish(){this.onLeave()}loadEvents(){throw new Error("Method not implemented.")}onEnter(){throw new Error("Method not implemented.")}onLeave(){throw new Error("Method not implemented.")}};var n=class extends f{constructor(){super()}render(){super.render(),this.style.display="flex"}vanish(){super.vanish(),this.style.display="none"}};var h=class extends n{constructor(e){super(),this.textContent=e,this.classList.add("button")}};var x=class extends n{constructor(){super();let e=document.createElement("img");e.src="assets/images/login.webp",this.append(e),this.classList.add("logo")}};var g=class extends n{constructor(){super(),this.textContent="huliman",this.classList.add("title")}};var a=class extends f{constructor(){super(),this.classList.add("tela")}render(){super.render(),this.style.display="flex"}vanish(){super.vanish(),this.style.display="none"}};var q=class extends a{constructor(){super();this._title=new g;this._btn=new h("Continuar");this._logo=new x;this.append(this._title,this._logo,this._btn)}};var d=class extends n{constructor(e){super(),e&&this.change_message(e)}change_message(e){this.textContent=e,this.classList.add("message")}};var l=class{constructor(e,t){this._id=e,this._text=t}get id(){return this._id}get text(){return this._text}set id(e){this._id=e}set text(e){this._text=e}};var v=class{constructor(e,t,i,m,T){this.text=t,this._id=e,this._questionText=t,this._correctAnswer=i,this._answers=T,this._tip=m}get text(){return this._questionText}get correctAnswer(){return this._correctAnswer}get answers(){return this._answers}get id(){return this._id}get tip(){return this._tip}set text(e){this._questionText=e}set correctAnswer(e){this._correctAnswer=e}set answers(e){this._answers=e}set id(e){this._id=e}set tip(e){this._tip=e}};var o=class extends h{constructor(e){super(e),this.classList.add("button-simples")}};var A=class extends HTMLElement{constructor(t,i){super();this._img=document.createElement("img");this._name=new d;this._img.src=t,i!=!1&&this._name.change_message(i),this.append(this._img,this._name)}};var p=class extends n{constructor(e){super(),this.classList.add("bg-box"),e&&this.addElement(e)}addElement(e){e.forEach(t=>{this.append(t)})}};var S=class extends n{constructor(t){super();this._dialog=new d;this._btn=new o("Continuar");this._bgBox=new p;this._player=new A("assets/images/boy.webp",!1),this._character=new A("assets/images/boy.webp","Rika"),this._dialog.change_message(t),this._bgBox.addElement([this._player,this._character,this._dialog,this._btn]),this.append(this._bgBox),this.loadEvents()}loadEvents(){this._btn.addEventListener("click",()=>{this.remove()})}};var y=class extends HTMLElement{constructor(t,i){super();this._img=document.createElement("img");this._name=document.createElement("p");this._lifeBar=document.createElement("hr");this._img.src=t,this._name.innerText=i,this._img.classList.add("imagem-combate"),this.append(this._img,this._name,this._lifeBar)}};var k=class extends p{constructor(){super();this._player=new y("assets/images/characters/battle-girl.svg","Fulano");this._enemy=new y("assets/images/characters/inimigoStatic.svg","FIGTHT");this.style.backgroundColor,this._player.classList.add("protagonista"),this._enemy.classList.add("inimigo"),this.append(this._enemy,this._player),this.classList.add("combat-box")}};var C=class extends o{constructor(){super("?"),this.classList.add("tip-btn")}};var I=class extends o{constructor(e){super(e),this.classList.add("answer-btn")}};var D=class extends p{constructor(t){super();this._text=new d;this._buttons=Array();this._tip=new C;this._gameManager=r.instance;this._question=t,this._text.change_message(t.text),this._text.classList.add("pergunta"),this.classList.add("question-box");for(let i of t.answers){let m=new I(i.text);m.id="answer-button-"+i.id,m.classList.add("botao-resposta"),this._buttons.push(m)}this.addElement([this._text,this._tip]),this.addElement(this._buttons),this.loadEvents()}loadEvents(){this._tip.addEventListener("click",()=>{this._gameManager.showTip(this._question.tip)})}get question(){return this._question}get tip(){return this._question.text}};var u=class extends a{constructor(t){super();this._combat=new k;this._questionBox=new D(t),this._combat.classList.add("combat-box"),this.append(this._questionBox,this._combat)}help(t){this._helpBox=new S(t),this._combat.append(this._helpBox)}};var w=class extends a{constructor(){super();this.spbtn=new o("OK");this.spbtn.addEventListener("click",()=>this.clicado()),this.append(this.spbtn)}clicado(){r.instance.next(new u(new v(235,"Como a linguagem influencia nossa compreens\xE3o da realidade e das experi\xEAncias?",new l(1,"N\xE3o sei"),"Esse campo de estudo \xE9 conhecido como Lingu\xEDstica Cognitiva e tem como objetivo investigar como a linguagem molda nossos pensamentos, percep\xE7\xF5es e compreens\xE3o do mundo ao nosso redor.",[new l(2,"Documento"),new l(4,"Documento"),new l(3,"Documento")])))}onEnter(){}onLeave(){}};var r=class{constructor(){this._navigation=new Array(new w);this._TOTAL_QUESTIONS=10;this._container=document.querySelector(".container")}static get instance(){return r._instance||(r._instance=new r),r._instance}init(){let e=this._navigation[0];this._container.append(e),e.render()}next(e){let t=this._navigation[this._navigation.length-1];t.vanish(),this._container.removeChild(t),this._navigation.push(e),this._container.append(e),e.render()}previous(){let e=this._navigation.pop();e==null||e.vanish(),this._container.removeChild(e);let t=this._navigation[this._navigation.length-1];this._container.append(t),t.render()}showTip(e){let t=this._navigation.pop();t==null||t.help(e)}tipHide(){let e=this._navigation.pop()}phaseGenerator(){this._navigation=[];for(let t=0;t<this._TOTAL_QUESTIONS;t++){let i=this.generateQuestion(),m=new u(i);this.next(m)}this._navigation[0].render()}generateQuestion(){let e=new v;return e.id=1,e.text="Question text",e.correctAnswer=this.generateAnswer("Correct answer"),e.tip="Tip for the question",e.answers=[e.correctAnswer,this.generateAnswer("Incorrect answer 1"),this.generateAnswer("Incorrect answer 2"),this.generateAnswer("Incorrect answer 3")],e}generateAnswer(e){let t=new l;return t.id=1,t.text=e,t}static encerrar(){}};var b=class extends a{constructor(){super();this._message=new d("Deseja realmente sair?");this._confirmButton=new h("Sim");this._cancelButton=new h("N\xE3o");this.append(this._message),this.append(this._confirmButton),this.append(this._cancelButton),this.loadEvents()}loadEvents(){this._confirmButton.addEventListener("click",()=>this.leave()),this._cancelButton.addEventListener("click",()=>this.back())}onEnter(){}onLeave(){}back(){r.instance.previous()}leave(){r.encerrar()}};var _=class extends HTMLInputElement{constructor(e="nome",t,i){super(),this.placeholder=e,this.classList.add("input-box"),t&&(this.id=t),i&&(this.name=i)}};var M=class extends p{constructor(t,i,m){super();this._bossImage=document.createElement("img");this._bossName=document.createElement("p");this._phaseDescription=document.createElement("p");this._atackBtn=new o("Atacar");this._escapeBtn=new o("Fugir");this._bossImage.src=t,this._bossName.innerText=i,this._phaseDescription.innerText=m,this.addElement([this._bossImage,this._bossName,this._phaseDescription,this._atackBtn,this._escapeBtn]),this.loadEvents(),this.classList.add("phase-info-box")}loadEvents(){this._atackBtn.addEventListener("click",()=>{r.instance.next(new u(new v(235,"Como a linguagem influencia nossa compreens\xE3o da realidade e das experi\xEAncias?",new l(1,"N\xE3o sei"),"Esse campo de estudo \xE9 conhecido como Lingu\xEDstica Cognitiva e tem como objetivo investigar como a linguagem molda nossos pensamentos, percep\xE7\xF5es e compreens\xE3o do mundo ao nosso redor.",[new l(2,"Documento"),new l(4,"Documento"),new l(3,"Documento")])))}),this._escapeBtn.addEventListener("click",()=>{this.vanish()})}onLeave(){}vanish(){super.vanish()}};var E=class extends a{constructor(t="assets/images/maps/historia.svg"){super();this._map=document.createElement("object");this._phase=new M("assets/images/boy.webp","PHANOPO","O Brasil tem uma hist\xF3ria diversificada, desde suas ra\xEDzes ind\xEDgenas at\xE9 a invas\xE3o portuguesa, o per\xEDodo imperial, a luta pela independ\xEAncia e a evolu\xE7\xE3o como uma na\xE7\xE3o multicultural e democr\xE1tica. De heran\xE7a rica, o pa\xEDs enfrentou desafios e conquistou avan\xE7os, moldando sua identidade ao longo dos s\xE9culos.");this._map.type="image/svg+xml",this._map.data=t,this._map.id="map",this._phase.style.display="none",this._map.addEventListener("load",()=>{let i=this._map.contentDocument;(i==null?void 0:i.getElementById("path5919")).addEventListener("click",()=>{this.getPhaseInfo()})}),this.append(this._map,this._phase)}getPhaseInfo(){this._map.classList.add("map-to-left"),this._phase.style.display="flex"}render(){}vanish(){}};var B=class extends a{constructor(t){super();this._planetImage=document.createElement("img");this._desc=new d;this._button=new o("Continuar");this._previous=new o("Voltar");this._planetName=new d(`Planeta ${t.name}`),this._desc.innerText=t.description,this._planetImage.src=t.img,this._desc.change_message(t.description),this.loadEvents(),this.append(this._planetName,this._planetImage,this._desc,this._button,this._previous)}loadEvents(){this._button.addEventListener("click",()=>{r.instance.next(new E)}),this._previous.addEventListener("click",()=>{r.instance.previous()})}render(){}vanish(){}};var Q=class extends n{constructor(t){super();this._img=document.createElement("img");this._name=document.createElement("span");this.classList.add("planet-box"),this._img.src=t.img,this._img.classList.add("name"),this._name.innerText=t.name,this.append(this._img,this._name),this._name,this._destiny=new B(t),this.addEventListener("click",()=>this.change_page())}change_page(){this._destiny?r.instance.next(this._destiny):console.log("N\xE3o a destino definido")}};var c=class{constructor(e,t,i,m,T){this._id=e,this._name=i,this._description=m,T&&(this._topics=T),this._img=t}get id(){return this._id}get img(){return this._img}get name(){return this._name}get description(){return this._description}get topics(){return this._topics}};var L=class extends a{constructor(){super();this._planetList=[new c(1,"assets/images/planets/terra.png","Sociologia","Escolha as suas batalhas e n\xE3o desista at\xE9 venc\xEA-las."),new c(2,"assets/images/planets/terra.png","Matem\xE1tica","Os desafios s\xE3o o tempero da vida!"),new c(3,"assets/images/planets/terra.png","Hist\xF3ria","Quando n\xE3o houver mais solu\xE7\xE3o, ainda h\xE1 de haver sa\xEDda. - Tit\xE3s"),new c(4,"assets/images/planets/terra.png","Geografia","A \xFAnica coisa imposs\xEDvel \xE9 aquilo que voc\xEA n\xE3o tenta."),new c(5,"assets/images/planets/terra.png","Gram\xE1tica","O essencial \xE9 invis\xEDvel aos olhos. - Antoine de Saint-Exup\xE9ry"),new c(9,"assets/images/planets/terra.png","Literatura",""),new c(6,"assets/images/planets/terra.png","Filosofia","A filosofia \xE9 o amor pela sabedoria e a busca pelo conhecimento profundo e reflexivo. Ela nos convida a questionar as quest\xF5es fundamentais da exist\xEAncia, como a natureza da realidade, o sentido da vida, a moralidade e a busca pela verdade. Ao estudar filosofia, mergulhamos em um mar de indaga\xE7\xF5es e debates, questionando nossas pr\xF3prias cren\xE7as e ampliando nossa compreens\xE3o do mundo e de n\xF3s mesmos."),new c(7,"assets/images/planets/terra.png","Biologia","A biologia \xE9 o estudo da vida em suas m\xFAltiplas manifesta\xE7\xF5es. Ela nos convida a explorar os mist\xE9rios da exist\xEAncia, desde as formas mais simples de vida at\xE9 a complexidade impressionante dos organismos. Ao estudar biologia, mergulhamos na diversidade e na interconex\xE3o de todos os seres vivos, questionando a origem e a evolu\xE7\xE3o da vida, e buscando compreender a natureza da pr\xF3pria exist\xEAncia."),new c(10,"assets/images/planets/terra.png","Qu\xEDmica","A qu\xEDmica \xE9 uma dan\xE7a dos elementos, uma busca pela ess\xEAncia que comp\xF5e todas as subst\xE2ncias. Ela nos convida a investigar as transforma\xE7\xF5es da mat\xE9ria, as rea\xE7\xF5es qu\xEDmicas e as propriedades dos \xE1tomos e das mol\xE9culas. Atrav\xE9s da qu\xEDmica, questionamos a natureza dos elementos e suas intera\xE7\xF5es, mergulhando nas profundezas dos arranjos at\xF4micos e descobrindo a harmonia invis\xEDvel que permeia toda a mat\xE9ria."),new c(11,"assets/images/planets/terra.png","F\xEDsica","A f\xEDsica busca desvendar os segredos do universo atrav\xE9s das leis e dos fen\xF4menos que governam a natureza. Ela nos conduz a uma jornada para compreender as part\xEDculas subat\xF4micas, as for\xE7as fundamentais e as grandezas c\xF3smicas. Ao estudar f\xEDsica, mergulhamos no \xE2mago da realidade, questionando a pr\xF3pria natureza do tempo, espa\xE7o e mat\xE9ria, e explorando os mist\xE9rios que envolvem a cria\xE7\xE3o e o funcionamento do universo."),new c(12,"assets/images/planets/terra.png","Espanhol","Aqueles que aprendem outro idioma, abrem portas que jamais se fechar\xE3o."),new c(13,"assets/images/planets/terra.png","Ingl\xEAs","Aqueles que aprendem outro idioma, abrem portas que jamais se fechar\xE3o.")];this._planets=Array();this._title=new d("Selecione onde deseja batalhar.");this._bgBox=new p;this._planetList.forEach(t=>{let i=new Q(t);this._planets.push(i)}),this.append(this._title),this._bgBox.classList.add("planets-list"),this._bgBox.addElement(this._planets),this.append(this._bgBox)}render(){}vanish(){}};var j=class extends a{constructor(){super();this._title=new g;this._logo=new x;this._confirmButton=new h("confirmar");this._leaveButton=new o("sair");this._inputBoxEmail=new _("E-mail");this._inputBoxPassword=new _("Senha");this._bgBox=new p;this._loginLink=document.createElement("a");this._singinpLink=document.createElement("a");this._loginLink.text="Login",this._singinpLink.text="Singup",this.append(this._title),this.append(this._logo),this._bgBox.addElement([this._inputBoxEmail,this._inputBoxPassword,this._confirmButton,this._leaveButton]),this.append(this._bgBox),this.classList.add("login-tela"),this.loadEvents()}loadEvents(){this._confirmButton.addEventListener("click",()=>this.changeScreen()),this._leaveButton.addEventListener("click",()=>this.leave())}onEnter(){}onLeave(){}changeScreen(){r.instance.next(new L)}leave(){r.instance.next(new b)}};var H=class extends a{};var P=class extends n{constructor(t,i=!1,m="female"){super();this.charterImg=document.createElement("img");this.gender=document.createElement("input");this._label=document.createElement("label");this.charterImg.src=t,this._label.htmlFor=m,this.gender.type="radio",this.gender.name="gender",this.gender.checked=i,this.gender.id=m,this._label.append(this.charterImg),this.append(this.gender),this.append(this._label)}};var N=class extends n{constructor(){super();this._boy=new P("assets/images/boy.webp",!0,"male");this._gril=new P("assets/images/girl.webp");this.append(this._boy),this.append(this._gril)}};var O=class extends a{constructor(){super();this._emailInputBox=new _("E-mail");this._passwordInputBox=new _("Senha");this._registerButton=new h("Cadastrar");this._gender=new N;this._bgBox=new p;this._title=new g;this.append(this._title),this._bgBox.addElement([this._emailInputBox,this._passwordInputBox,this._registerButton,this._gender]),this.append(this._bgBox)}};var z=class extends a{constructor(){super();this._img=document.createElement("img");this._imgPlanet=document.createElement("img");this._loadBar=document.createElement("hr");this.append(this._img,this._imgPlanet,this._loadBar)}};var F=class{init(){customElements.define("app-page-singup",O),customElements.define("app-page-title",H),customElements.define("app-page-login",j),customElements.define("app-page-home",q),customElements.define("app-page-leave",b),customElements.define("app-page-planets",L),customElements.define("app-page-planet-info",B),customElements.define("app-page-phase",E),customElements.define("app-page-combat",u),customElements.define("app-page-loading",z),customElements.define("test-page",w)}};})();
