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
    show() {
        this.style.display = "flex";
    }
    vanish() {
        this.style.display = "none";
    }
    loadEvents() {
        // this._leaveButton.addEventListener("click", this.sair);
    }
    onEnter() { }
    onLEave() {
        // Animation.start();
    }
}
