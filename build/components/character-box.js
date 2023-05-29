export class CharterBox extends HTMLElement {
    constructor(img, checked = false, gid = "female") {
        super();
        this.charterImg = document.createElement("img");
        this.gender = document.createElement("input");
        this._label = document.createElement("label");
        this.charterImg.src = img;
        // this.charterImg.id = gid;
        this._label.htmlFor = gid;
        this.gender.type = "radio";
        this.gender.name = "gender";
        this.gender.checked = checked;
        this.gender.id = gid;
        this._label.append(this.charterImg);
        this.append(this.gender);
        this.append(this._label);
    }
}
