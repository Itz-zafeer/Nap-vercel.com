


function scrollDownn(){
    window.scrollTo(0,window.innerHeight)
}

let inputs = document.querySelectorAll(['input','textarea'])

inputs.forEach((input,index)=>{
    e.preventDefault()
    if(!input.value){
  if(!firstErrorIndex){
    firstErrorIndex =index +2
  }
         
        input.parentElement.classList.add('error')
        setTimeout(()=>{
            input.parentElement.classList.remove('error')
        },8000)
    
    }
    
})



