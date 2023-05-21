export class Logo extends HTMLElement {
    constructor() {
        super();
        let element = document.createElement("img");
        element.src = "assets/images/login.webp";
        this.append(element);
        this.classList.add("logo");
    }
}
