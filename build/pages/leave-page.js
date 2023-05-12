import { Page } from "./page.js";
import { Button } from "../components/button.js";
import { Message } from "../components/message.js";
export class LeavePage extends Page {
    constructor() {
        super();
        this._message = new Message("Deseja realmente sair?");
        this._confirmButton = new Button("Sim");
        this._cancelButton = new Button("Não");
        this.append(this._message);
        this.append(this._confirmButton);
        this.append(this._cancelButton);
    }
}
