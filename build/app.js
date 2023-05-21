import { ComponentsInit } from "./ini/components.init.js";
import { PagesInit } from "./ini/pages.init.js";
// import { LoginPage } from "./pages/login-page";
// import { LoginPage } from "./pages/login-page";
// import { LeavePage } from "./pages/leave-page.js";
// import { GameManager } from "./managers/game-manager.js";
// import { LoginPage } from "./pages/login-page.js";
import { SingupPage } from "./pages/singup-page.js";
const init = () => {
    let collection = new Array(ComponentsInit, PagesInit);
    collection.forEach((element) => {
        element.init();
    });
};
init();
// const loginTela: HTMLElement = document.querySelector(
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
//#######################################################
const container = document.querySelector(".container");
// const leavePage = new LeavePage();
// const loginPage = new LoginPage();
// container.append(loginPage);
// container.append(leavePage);
// const gameManager = new GameManager(container);
// gameManager.init();
// container.append(loginPage)
container.append(new SingupPage());
