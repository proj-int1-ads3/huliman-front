import { BackgroundBox } from "./bg-box.js";
export class PhaseInfoBox extends BackgroundBox {
    constructor(boss_img, boss_name, phase_description) {
        super();
        this._bossImage = document.createElement('img');
        this._bossName = document.createElement('p');
        this._phaseDescription = document.createElement('p');
        this._bossImage.src = boss_img;
        this._bossName.innerText = boss_name;
        this._phaseDescription.innerText = phase_description;
        this.addElement([this._bossImage, this._bossName, this._phaseDescription]);
        this.append();
    }
}
