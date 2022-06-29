import { activePanel } from "./modulos/active-panel.js";
import { handleActiveMenu } from "./modulos/menu.js";
import {securityPanelScroll} from "./modulos/padlock-animate.js"
import {handleActiveTabs} from "./modulos/tabs.js"

securityPanelScroll()
handleActiveMenu()
activePanel()
handleActiveTabs()