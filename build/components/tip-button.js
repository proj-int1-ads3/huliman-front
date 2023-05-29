export class TipButton extends HTMLButtonElement {
    // private _icon = document.createElement('img')
    constructor() {
        super();
        // this._icon.src = 'assets/images/tip_button-icon.png'
        this.value = '?';
        this.classList.add('tip-btn');
    }
}
