"use strict";(()=>{var r=class extends HTMLElement{render(){this.onEnter()}vanish(){this.onLeave()}loadEvents(){throw new Error("Method not implemented.")}onEnter(){throw new Error("Method not implemented.")}onLeave(){throw new Error("Method not implemented.")}};var t=class extends r{constructor(){super()}render(){super.render(),this.style.display="flex"}vanish(){super.vanish(),this.style.display="none"}};var n=class extends t{constructor(e){super(),this.classList.add("bg-box"),e&&this.addElement(e)}addElement(e){e.forEach(s=>{this.append(s)})}};})();
