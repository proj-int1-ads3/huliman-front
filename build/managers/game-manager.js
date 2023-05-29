// import { HomePage } from "../pages/home-page.js";
// import { LeavePage } from "../pages/leave-page.js";
import { LoginPage } from "../pages/login-page.js";
export class GameManager {
    static get instance() {
        if (!GameManager._instance) {
            GameManager._instance = new GameManager();
        }
        return GameManager._instance;
    }
    constructor() {
        this._navigation = new Array(new LoginPage());
        this._container = document.querySelector(".container");
        //this._navigation.push(this._pages.shift() as Page);
    }
    init() {
        let page = this._navigation[0];
        this._container.append(page);
        page.show();
    }
    proxima(page) {
        let paginaAtual = this._navigation[this._navigation.length - 1];
        paginaAtual.vanish();
        this._container.removeChild(paginaAtual);
        this._navigation.push(page);
        this._container.append(page);
        page.show();
    }
    voltar() {
        let paginaAtual = this._navigation.pop();
        paginaAtual === null || paginaAtual === void 0 ? void 0 : paginaAtual.vanish();
        this._container.removeChild(paginaAtual);
        let paginaDestino = this._navigation[this._navigation.length - 1];
        this._container.append(paginaDestino);
        paginaDestino.show();
    }
    static encerrar() { }
}
