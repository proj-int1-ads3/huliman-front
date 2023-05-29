import { CharterBox } from "./character-box.js";
export class GenderBox extends HTMLElement {
    constructor() {
        super();
        this._boy = new CharterBox('assets/images/boy.webp', true, 'male');
        this._gril = new CharterBox('assets/images/girl.webp');
        this.append(this._boy);
        this.append(this._gril);
    }
}
