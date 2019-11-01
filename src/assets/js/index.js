/* import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faAngleLeft } from "@fortawesome/free-solid-svg-icons/";

import 'bootstrap/js/dist/collapse.js';
import 'bootstrap/js/dist/carousel.js';

library.add(faCheck);
library.add(faAngleLeft);
dom.watch(); */

import '../scss/commonSCSS/estilo.scss';

import '../imgs/coches/img2.png';
import '../imgs/img1.png';


//Polyfill custom Event

/* 
(function () {
    if (typeof window.CustomEvent === "function") return false; //If not IE

    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();
 */

/* 
padre.addEventListener("click",function (e){
    log(this);

    [...hijos].forEach(element => {
        element.dispatchEvent(new CustomEvent("veronica",{
            bubbles:true
        }))
    });
}) */

let { log, dir, table, timeEnd, time } = console;

log("Hola!!!!")





