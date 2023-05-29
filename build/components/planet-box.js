export class PlanetBox extends HTMLElement {
    constructor(image_path, planet_name) {
        super();
        this._img = document.createElement('img');
        this._name = document.createElement('span');
        this.classList.add('planet-box');
        this._img.src = image_path;
        this._img.classList.add('name');
        this._name.innerText = planet_name;
        this.append(this._img, this._name);
        this._name;
        this.addEventListener('click', () => this.change_page());
    }
    change_page() {
        this.style.display = 'none';
        // Preciso chamar um método/classe que controle as mudanças entre páginas
    }
}
