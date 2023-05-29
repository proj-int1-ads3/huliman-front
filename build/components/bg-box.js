export class BackgroundBox extends HTMLDivElement {
    constructor(elementList) {
        super();
        this.classList.add('bg-box');
        if (elementList)
            this.addElement(elementList);
    }
    addElement(elementList) {
        elementList.forEach(x => {
            this.append(x);
        });
    }
}
