const tabSection = document.getElementById('tabs-section')
const tabsContainer = document.getElementById('tabs-container')

const getArrayElements= (selector)=>Array.from(tabSection.querySelectorAll(selector))

const panels = getArrayElements('.panel')
const tabs = getArrayElements('.tab')
const images = getArrayElements('.image-panel')


const activeHandler = (element,index)=>{
    element.map(e => e.classList.remove('is-active'))
    element[index].classList.add('is-active')
}


const switchContent = (e)=>{
    const ele = e.target
    const index = tabs.indexOf(ele)
    if(!ele.classList.contains('tab')) return
    activeHandler(panels,index)
    activeHandler(images,index)
    activeHandler(tabs,index)
}

export const handleActiveTabs =()=>{
    tabsContainer.addEventListener('click',switchContent)
}