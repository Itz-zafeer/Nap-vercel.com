


function scrollDownn(){
    window.scrollTo(0,window.innerHeight)
}

const btns = document.querySelectorAll('.dropdown-btn')
const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown=>{
    console.log(dropdown)

    dropdown.querySelectorAll('li').forEach(listItem=>{
        listItem.addEventListener('click',()=>handleDropdownValue(listItem))
    console.log(listItem)

    })
})

btns.forEach(btn=>{
    btn.addEventListener('click',()=>toggleDropdown(btn))
})
const handleSubmit =(e)=>{
    e.preventDefault()
    let inputs = document.querySelectorAll(['input.required','textarea.required'])
    
    let btns = document.querySelectorAll('.dropdown-btn')
    let firstErrorIndex = null

    btns.forEach((btn,index)=>{
        if(btn.querySelector('span').innerText =="Select Inquiry Type"){
            if(!firstErrorIndex){
                firstErrorIndex = index +1
            }
             btn.parentElement.parentElement.classList.add('error')
             setTimeout(()=>{
                 btn.parentElement.parentElement.classList.remove('error')
             },8000)
        }
       
    })

    inputs.forEach((input,index)=>{
         
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
      
    let els = [btns[0],inputs[0],inputs[1],inputs[2],inputs[3],inputs[4]]
    
    if(firstErrorIndex){ 
         
        $('html, body').animate({
                    scrollTop: $(els[firstErrorIndex -1]).offset().top - 150
                }, 500);
    }
}
document.querySelector('form').addEventListener('submit',handleSubmit)


const toggleDropdown =(btn)=>{
   let dropdown=  btn.parentElement.querySelector('.dropdown')
   let dropdownHeight = dropdown.querySelectorAll('li').length * 75
   dropdown.classList.toggle('max-h-0')
   dropdown.classList.toggle(`max-h-[${dropdownHeight}px]`)
    btn.classList.toggle('active')
}

const handleDropdownValue =(listItem)=>{
    const dropdownBtn =listItem.parentElement.parentElement.querySelector('.dropdown-btn')
    console.log(dropdownBtn)
    const btnSpan = dropdownBtn.querySelector('span')
    btnSpan.innerHTML = listItem.innerText
    btnSpan.classList.remove('opacity-[0.56]') 
    toggleDropdown(dropdownBtn)
}



