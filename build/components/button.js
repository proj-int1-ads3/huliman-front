export class Button extends HTMLElement {
    constructor(text) {
        super();
        this.textContent = text;
        this.classList.add("button");
    }
}
