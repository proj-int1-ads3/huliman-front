import { AppInit } from "./app-init.js";
import { HomePage } from "../pages/home-page.js";
import { LeavePage } from "../pages/leave-page.js";
import { LoginPage } from "../pages/login-page.js";
import { TitlePage } from "../pages/title-page.js";
import { InputBox } from "../components/input-box.js";
import { SingupPage } from "../pages/singup-page.js";
import { GenderBox } from "../components/gender-box.js";
import { CharterBox } from "../components/charter-select-box.js";
export class PagesInit extends AppInit {
    static init() {
        customElements.define("app-page-singup", SingupPage);
        customElements.define("app-page-title", TitlePage);
        customElements.define("app-page-login", LoginPage);
        customElements.define("app-page-home", HomePage);
        customElements.define("app-page-leave", LeavePage);
        // ==================== COMPONENTS =======================
        customElements.define('app-input-box', InputBox, { extends: 'input' });
        customElements.define('app-charter-box', CharterBox);
        customElements.define('app-gender-box', GenderBox);
    }
}
