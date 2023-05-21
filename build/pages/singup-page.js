import { Button } from "../components/button.js";
import { GenderBox } from "../components/gender-box.js";
import { InputBox } from "../components/input-box.js";
import { Page } from "./page.js";
export class SingupPage extends Page {
    constructor() {
        super();
        this._emailInputBox = new InputBox('E-mail');
        this._passwordInputBox = new InputBox('Senha');
        this._registerButton = new Button('Cadastrar');
        this._gender = new GenderBox();
        this.append(this._emailInputBox);
        this.append(this._passwordInputBox);
        this.append(this._gender);
        this.append(this._registerButton);
    }
}
