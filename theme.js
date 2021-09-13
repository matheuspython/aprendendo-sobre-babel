const header = document.querySelector('.header')

const colors = {
  dark:{
    active:undefined,
    headerBackgroundDark: 'rgb(53, 52, 52)',
    headerWorksDark: 'white',
  },
  light:{
    active:undefined,
    headerBackgroundLight: 'white',
    headerWorksLight: 'rgb(53, 52, 52)'
  }

}

function colorize(element){
  if(colors.dark.active == undefined || colors.light.active == undefined){
    element.style.background = colors.dark.headerBackgroundDark
    element.style.color = colors.dark.headerWorksDark

    colors.dark.active = true
    colors.light.active = false
    console.log('chegou aqui')
    return
  }
  if(colors.dark.active == undefined || colors.dark.active == false){
    element.style.background = colors.dark.headerBackgroundDark
    element.style.color = colors.dark.headerWorksDark
    console.log('chegou aquio')
    
    colors.dark.active = true
    colors.light.active = false
    return
  }
  element.style.background = colors.light.headerBackgroundLight
  element.style.color = colors.light.headerWorksLight

  colors.dark.active = false
  colors.light.active = true
}

(()=>{
  colorize(header)
})()

document.addEventListener('click', e =>{
 const el = e.target
  if(el.classList.contains("h")){
    colorize(header)
  }
})