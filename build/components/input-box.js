export class InputBox extends HTMLInputElement {
    constructor(message_content = 'nome', id_box, name_box) {
        super();
        this.placeholder = message_content;
        this.classList.add('input-box');
        if (id_box) {
            this.id = id_box;
        }
        if (name_box) {
            this.name = name_box;
        }
    }
}
