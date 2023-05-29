import { AppInit } from "./app-init.js";
import { Button } from "../components/button.js";
import { Logo } from "../components/logo.js";
import { DialogBox } from "../components/dialog-box.js";
import { SimpleButton } from "../components/simple-button.js";
import { Title } from "../components/title.js";
import { InputBox } from "../components/input-box.js";
import { GenderBox } from "../components/gender-box.js";
import { CharterBox } from "../components/character-box.js";
import { BackgroundBox } from "../components/bg-box.js";
import { PlanetBox } from "../components/planet-box.js";
import { TipButton } from "../components/tip-button.js";
import { PhaseInfoBox } from "../components/phase-info-box.js";
export class ComponentsInit extends AppInit {
    static init() {
        customElements.define("app-title", Title);
        customElements.define("app-logo", Logo);
        customElements.define("app-button", Button);
        customElements.define("app-simple-button", SimpleButton);
        customElements.define("app-message", DialogBox);
        customElements.define('app-input-box', InputBox, { extends: 'input' });
        customElements.define('app-charter-box', CharterBox);
        customElements.define('app-gender-box', GenderBox);
        customElements.define('app-background-box', BackgroundBox, { extends: 'div' });
        customElements.define('app-planet-box', PlanetBox);
        customElements.define('app-tip-button', TipButton, { extends: 'button' });
        customElements.define('app-phase-info-box', PhaseInfoBox);
    }
}
