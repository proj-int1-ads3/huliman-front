import { Page } from "./page.js";
export class LoginPage extends Page {
    constructor(logo) {
        super();
        this.logo = logo;
        this.logo = new HTMLLabelElement();
        this.logo.classList("logo");
        this.append(logo);
    }
}
