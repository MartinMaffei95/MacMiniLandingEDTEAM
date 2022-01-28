const speedPanel = document.getElementById("feature-panel-speed");
const activeClass = "is-active"

const options={
   threshold:0.8,
   rootMargin: '64px'

}

const callBackForObserver = (ent) =>{
    const panelInformation= ent[0];
    const panelElement =  panelInformation.target
    if( !panelElement ||
        panelElement.classList.contains(activeClass) ||
        panelInformation.isIntersecting === false){
        return
    }else{
        panelElement.classList.add(activeClass)
    }
}

const PanelObeserver = new IntersectionObserver(callBackForObserver,options)



export const activePanel = ()=>{
    PanelObeserver.observe(speedPanel)
}