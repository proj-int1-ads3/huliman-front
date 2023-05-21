import { HomePage } from "../pages/home-page.js";
import { LeavePage } from "../pages/leave-page.js";
import { LoginPage } from "../pages/login-page.js";
export class GameManager {
    constructor(container) {
        this._pages = new Array(new LoginPage(), new LeavePage(), new HomePage());
        this._navigation = new Array();
        this._container = container;
        this._navigation.push(this._pages.shift());
    }
    init() {
        let page = this._navigation[0];
        this._container.append(page);
        page.show();
    }
    proxima(page) {
        this._navigation.push(page);
    }
    static voltar() { }
    static encerrar() { }
}
