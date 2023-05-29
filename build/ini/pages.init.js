import { AppInit } from "./app-init.js";
import { HomePage } from "../pages/home-page.js";
import { LeavePage } from "../pages/leave-page.js";
import { LoginPage } from "../pages/login-page.js";
import { TitlePage } from "../pages/title-page.js";
import { SingupPage } from "../pages/singup-page.js";
import { PlanetSelectPage } from "../pages/planet-select-page.js";
import { TestePage } from "../pages/teste-page.js";
export class PagesInit extends AppInit {
    static init() {
        customElements.define("app-page-singup", SingupPage);
        customElements.define("app-page-title", TitlePage);
        customElements.define("app-page-login", LoginPage);
        customElements.define("app-page-home", HomePage);
        customElements.define("app-page-leave", LeavePage);
        customElements.define("app-page-planets", PlanetSelectPage);
        // customElements.define('app-page-planet-select-page', PlanetSelectPage)
        customElements.define('app-page-teste', TestePage);
    }
}
