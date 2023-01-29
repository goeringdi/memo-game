import { iteratee } from "lodash";

declare module "*.jpg";
declare module "*.jpeg";

declare global {
    interface Window { application: any; }
    interface HTMLElement { classList: any; }
    interface NamedNodeMap { 
        attributes: NamedNodeMap; 
        src: NamedNodeMap; 
        nodeValue: NamedNodeMap;
    }
}
