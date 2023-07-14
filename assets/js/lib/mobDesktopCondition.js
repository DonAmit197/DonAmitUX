import enquire from "./enquireJS";
const mobile = require('is-mobile');
import removeNodeFromDevice from "./helpers/removeNodeFromDevice";
//const Mob = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
 

const mobDesktopCondition = ()=>{
   
    
 const ISDESKTOP_NODE = document.querySelectorAll("[data-isDesktop]");
 const ISMOB_NODE = document.querySelectorAll("[data-isMobile]");
 if(mobile()){
    console.log("Mob")
    removeNodeFromDevice(ISDESKTOP_NODE);

   
    
 } else {
    //console.log("Desktop")
    
    removeNodeFromDevice(ISMOB_NODE);
 }

 

}
export default mobDesktopCondition;