import { Button } from "./button.js";
export class SimpleButton extends Button {
    constructor(text) {
        super(text);
        this.classList.add("button-simples");
    }
}
