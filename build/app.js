// import { CharterBox } from './components/character-box.js';
import { ComponentsInit } from "./ini/components.init.js";
import { PagesInit } from "./ini/pages.init.js";
import { GameManager } from "./managers/game-manager.js";
// import { LoginPage } from "./pages/login-page.js";
// import { DialogBox } from "./components/dialog-box.js";
// import { SingupPage } from "./pages/singup-page.js";
// import { TestePage } from "./pages/teste-page.js";
// import { LoginPage } from "./pages/login-page.js";
// import { PlanetSelectPage } from "./pages/planet-select-page.js";
// import { SingupPage } from "./pages/singup-page.js"
const init = () => {
    let collection = new Array(ComponentsInit, PagesInit);
    collection.forEach((element) => {
        element.init();
    });
};
init();
/* #######################################################
const loginTela: HTMLElement = document.querySelector(
//     "#login-tela"
// ) as HTMLElement;
// const homeTela: HTMLElement = document.querySelector(
//     "#home-tela"
// ) as HTMLElement;

// //const loginImg = document.querySelector("#login-img") as HTMLElement;
// const loginComecar: HTMLElement = document.querySelector(
//     "#login-comecar"
// ) as HTMLElement;
// const loginSair: HTMLElement = document.querySelector(
//     "#login-sair"
// ) as HTMLElement;

//const tela = new Tela();

// const fecharJogo = () => {
//     console.log("saiu");
//     //  tela.print();
// };

// const reiniciarJogo = () => {
//     console.log("reiniciou");
//     homeTela.style.display = "none";
//     loginTela.style.display = "flex";
// };

// const proximaTela = () => {
//     console.log("comecou");
//     loginTela.style.display = "none";
//     homeTela.style.display = "flex";

//     setTimeout(reiniciarJogo, 5000);
// };

//loginSair.addEventListener("click", fecharJogo);
//loginComecar.addEventListener("click", proximaTela);

*/
//#######################################################
// const container = document.querySelector(".container") as HTMLElement;
/*
// const leavePage = new LeavePage();
// const loginPage = new LoginPage();

// container.append(loginPage);
// container.append(leavePage);

*/
// container.append(new PlanetBox("assets/images/planets/terra.png", "História"))
// container.append(document.createElement('hr'))
// container.append(new CharterBox('assets/images/boy.webp', true))
// container.append(document.createElement('hr'))
// container.append(new DialogBox('DialogBox é uma caixa de dialogo!'))
GameManager.instance.init();
// container.append(loginPage)
// let gender = new GenderBox();
// container.append(new LoginPage())
