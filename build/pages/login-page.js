import { Page } from "./page.js";
import { Button } from "../components/button.js";
import { Logo } from "../components/logo.js";
import { SimpleButton } from "../components/simple-button.js";
import { Title } from "../components/title.js";
import { InputBox } from "../components/input-box.js";
import { BackgroundBox } from "../components/bg-box.js";
import { PlanetSelectPage } from "./planet-select-page.js";
import { GameManager } from "../managers/game-manager.js";
// import { GameManager } from "../managers/game-manager";
export class LoginPage extends Page {
    // private _loginSingup = new HTMLDivElement(); 
    constructor() {
        super();
        this._title = new Title();
        this._logo = new Logo();
        this._confirmButton = new Button("confirmar");
        this._leaveButton = new SimpleButton("sair");
        this._inputBoxEmail = new InputBox('E-mail');
        this._inputBoxPassword = new InputBox('Senha');
        this._bgBox = new BackgroundBox();
        this._loginLink = document.createElement('a');
        this._singinpLink = document.createElement('a');
        // this.logo.classList("logo");
        // this.append(this._logo);
        this._loginLink.text = 'Login';
        this._singinpLink.text = 'Singup';
        this.append(this._title);
        this.append(this._logo);
        // this._loginSingup.append(this._loginLink)
        // this._loginSingup.append(this._singinpLink)
        // this._loginSingup.classList.add()
        // this.append(this._loginSingup)
        this._bgBox.addElement([
            this._inputBoxEmail,
            this._inputBoxPassword,
            this._confirmButton,
            this._leaveButton
        ]);
        this.append(this._bgBox);
        this.classList.add("login-tela");
        this._confirmButton.addEventListener("click", () => this.trocaTela());
    }
    trocaTela() {
        console.log("trocando tela");
        GameManager.instance.proxima(new PlanetSelectPage());
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
