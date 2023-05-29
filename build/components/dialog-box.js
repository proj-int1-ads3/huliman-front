export class DialogBox extends HTMLElement {
    constructor(text) {
        super();
        this.textContent = text;
        this.classList.add("message");
    }
}
