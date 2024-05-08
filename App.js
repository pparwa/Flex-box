console.log('hello')
const menueicon = document.getElementById(`menue-icon`)
const menuebar = document.querySelector('.ul-container')
const close = document.querySelector('#close-icon')
const body = document.querySelector('body')
const suggest = 20
window.addEventListener('resize',()=>{
    if(window.innerWidth > 992){
        close.style.display = 'none'
        menueicon.style.display ='none'
    }else{
        menueicon.style.display='block'
    }
})
menueicon.addEventListener('click',()=>{
    menuebar.style.left = '0px'
    menueicon.style.display= 'none'
    close.style.display= 'block'
    
})

close.addEventListener('click',()=>{
     menuebar.style.left = '-300px'
    close.style.display= 'none'
    menueicon.style.display= 'block'
})

