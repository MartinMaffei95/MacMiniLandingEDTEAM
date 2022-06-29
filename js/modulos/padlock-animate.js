const padlockElement = document.getElementById('padlockID')
const dataTextElement= document.getElementById('masked-data-text')
const dataKeyElement= document.getElementById('masked-data-key')
const mesaggeElement= document.getElementById('message')
const panelSecurity = document.getElementById('securityPanel')

let padlockData,dataTextData,dataKeyData;


const option = {
    threshold : 0.66
}

const getInitialData =(steps,range,ref)=>{
    const start = ref + scrollY - (innerHeight * option.threshold)
    const end = start + range
    const unit = (end - start) /steps
    return{start, end, steps, unit}
}

const setInitialData =()=>{
    padlockData = getInitialData(72,350,padlockElement.getBoundingClientRect().top)
    dataTextData =  getInitialData(dataTextElement.innerText.length,150, mesaggeElement.getBoundingClientRect().top)
    dataKeyData = getInitialData(dataKeyElement.innerText.length,150, mesaggeElement.getBoundingClientRect().bottom)

}

setInitialData()
addEventListener('resize', setInitialData)

const getCurentStep =({start, end, steps, unit})=>{

    let currentStep = 0

    if(scrollY >= start && scrollY <= end){
        currentStep = Math.ceil((scrollY - start) / unit)
    }
    if(scrollY < start && currentStep != 0){
        currentStep = 0
    }
    if(scrollY > end && currentStep < steps){
        currentStep = steps
    }

    return currentStep
}

const handleOpenPadlockWithScroll =()=>{
    padlockElement.style.animationDelay = `-${getCurentStep(padlockData)}s`
}

const handleChangeTextWithScroll =(data,element)=>{
    const steps = element.innerText.length
    const currentStep = getCurentStep(data)
    const partialText = element.dataset.text.substring(0,currentStep)
    const partialDots = '*'.repeat(steps-currentStep)
    element.innerText = partialText + partialDots
}

const scrollFunctions =()=>{
    handleOpenPadlockWithScroll()
    handleChangeTextWithScroll(dataTextData,dataTextElement)
    handleChangeTextWithScroll(dataKeyData,dataKeyElement)
}

const callbackSecurityPanel = (ent)=>{
    if(ent[0].isIntersecting) addEventListener('scroll',scrollFunctions)
    else removeEventListener('scroll',scrollFunctions)
}

const SecurityObserve = new IntersectionObserver(callbackSecurityPanel)

export const securityPanelScroll =()=>{
    SecurityObserve.observe(panelSecurity)
}