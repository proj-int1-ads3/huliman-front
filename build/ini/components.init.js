import { AppInit } from "./app-init.js";
import { Button } from "../components/button.js";
import { Logo } from "../components/logo.js";
import { Message } from "../components/message.js";
import { SimpleButton } from "../components/simple-button.js";
import { Title } from "../components/title.js";
export class ComponentsInit extends AppInit {
    static init() {
        customElements.define("app-title", Title);
        customElements.define("app-logo", Logo);
        customElements.define("app-button", Button);
        customElements.define("app-simple-button", SimpleButton);
        customElements.define("app-message", Message);
    }
}
