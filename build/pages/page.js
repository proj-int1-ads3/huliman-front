export class Page extends HTMLElement {
    constructor() {
        super();
        this.classList.add("tela");
    }
    print() {
        console.log("printando info sensivel da tela");
    }
    render() {
        return "";
    }
    vanish() {
        this.style.display = "none";
    }
}
