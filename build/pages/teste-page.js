import { TipButton } from "../components/tip-button.js";
import { Page } from "./page.js";
export class TestePage extends Page {
    constructor() {
        super();
        this.tip = new TipButton();
        this.append(this.tip);
    }
}
