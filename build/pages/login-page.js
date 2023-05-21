import { Page } from "./page.js";
import { Button } from "../components/button.js";
import { Logo } from "../components/logo.js";
import { SimpleButton } from "../components/simple-button.js";
import { Title } from "../components/title.js";
import { InputBox } from "../components/input-box.js";
// import { GameManager } from "../managers/game-manager";
export class LoginPage extends Page {
    constructor() {
        super();
        this._title = new Title();
        this._logo = new Logo();
        this._confirmButton = new Button("confirmar");
        this._leaveButton = new SimpleButton("sair");
        this._inputBoxEmail = new InputBox('E-mail');
        this._inputBoxPassword = new InputBox('Senha');
        // this.logo.classList("logo");
        // this.append(logo);
        this.append(this._title);
        this.append(this._logo);
        this.append(this._inputBoxEmail);
        this.append(this._inputBoxPassword);
        this.append(this._confirmButton);
        this.append(this._leaveButton);
        this.classList.add("login-tela");
    }
    loadEvents() {
        this._leaveButton.addEventListener("click", this.sair);
    }
    onEnter() { }
    onLEave() {
        // Animation.start("animation sair direita");
    }
    sair() {
        // GameManager.init.proxima(new LeavePage());
    }
}
