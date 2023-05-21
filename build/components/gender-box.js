import { CharterBox } from "./charter-select-box.js";
export class GenderBox extends HTMLElement {
    constructor() {
        super();
        this._boy = new CharterBox('assets/images/boy.webp', true);
        this._gril = new CharterBox('assets/images/girl.webp');
        this.append(this._boy);
        this.append(this._gril);
    }
}
