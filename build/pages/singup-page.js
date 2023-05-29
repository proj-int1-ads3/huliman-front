import { BackgroundBox } from "../components/bg-box.js";
import { Button } from "../components/button.js";
import { GenderBox } from "../components/gender-box.js";
import { InputBox } from "../components/input-box.js";
import { Title } from "../components/title.js";
import { Page } from "./page.js";
export class SingupPage extends Page {
    constructor() {
        super();
        this._emailInputBox = new InputBox('E-mail');
        this._passwordInputBox = new InputBox('Senha');
        this._registerButton = new Button('Cadastrar');
        this._gender = new GenderBox();
        this._bgBox = new BackgroundBox();
        this._title = new Title();
        this.append(this._title);
        this._bgBox.addElement([
            this._emailInputBox,
            this._passwordInputBox,
            this._registerButton,
            this._gender
        ]);
        this.append(this._bgBox);
        // this.append(this._emailInputBox)
        // this.append(this._passwordInputBox)
        // this.append(this._gender)
        // this.append(this._registerButton)
    }
}
