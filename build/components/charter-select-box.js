export class CharterBox extends HTMLElement {
    constructor(img, checked = false) {
        super();
        this.charterImg = document.createElement("img");
        this.gender = document.createElement("input");
        this.charterImg.src = img;
        this.gender.type = "radio";
        this.gender.name = "gender";
        this.gender.checked = checked;
        this.append(this.charterImg);
        this.append(this.gender);
    }
}
