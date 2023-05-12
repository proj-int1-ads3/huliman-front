import { AppInit } from "./app-init.js";
import { Button } from "../components/button.js";
import { Message } from "../components/message.js";
export class ComponentsInit extends AppInit {
    static init() {
        customElements.define("app-button", Button);
        customElements.define("app-message", Message);
    }
}
