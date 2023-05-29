import { Page } from './page.js';
// import { DialogBox } from '../components/dialog-box.js';
import { BackgroundBox } from '../components/bg-box.js';
import { PlanetBox } from '../components/planet-box.js';
import { DialogBox } from '../components/dialog-box.js';
export class PlanetSelectPage extends Page {
    // private _bgBoxPlanets = new BackgroundBox()
    constructor() {
        super();
        this._planetList = [
            { name: "Sociologia", path: "assets/images/planets/terra.png" },
            { name: "Matemática", path: "assets/images/planets/terra.png" },
            { name: "História", path: "assets/images/planets/terra.png" },
            { name: "Geografia", path: "assets/images/planets/terra.png" },
            { name: "Português", path: "assets/images/planets/terra.png" },
            { name: "Filosofia", path: "assets/images/planets/terra.png" },
            { name: "Biologia", path: "assets/images/planets/terra.png" },
            { name: "Química", path: "assets/images/planets/terra.png" }
        ];
        // private _dialog = new DialogBox('Selecione o pla')
        this._planets = Array();
        this._title = new DialogBox('Selecione onde deseja batalhar.');
        this._bgBox = new BackgroundBox();
        // this._title.classList.add('planet-select-page')
        this._planetList.forEach((info) => {
            this._planets.push(new PlanetBox(info.path, info.name));
        });
        // console.log(this._planets)
        // for(let i = 0; i < 8; i++){
        // }
        this.append(this._title);
        this._bgBox.classList.add('planets-list');
        this._bgBox.addElement(this._planets);
        this.append(this._bgBox);
    }
}
