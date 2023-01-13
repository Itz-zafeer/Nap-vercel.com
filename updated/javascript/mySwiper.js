
    var swiper = new Swiper(".mySwiper", {
        effect:'fade',
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
     
      });
      swiper.on('slideChange', function () {
        setTimeout(() => {
          document.querySelectorAll('.swiper-slide').forEach((item,index)=>{
          if(item.classList.contains('swiper-slide-active')){
            item.querySelector('.redOverlay').style.transformOrigin = 'bottom'
            item.querySelector('.blackOverlay').style.transformOrigin = 'bottom'
          }else{
            item.querySelector('.redOverlay').style.transformOrigin = 'top'
            item.querySelector('.blackOverlay').style.transformOrigin = 'top'
            
          }
        })
        }, 800);
        
        
      });
      const whyNap= document.getElementById('why-nap')
      const slides = document.querySelectorAll('.swiper-slide')
      let firstVisit = false
      window.addEventListener('scroll',()=>{
          if(window.scrollY > slides[0].offsetTop + whyNap.offsetTop - (window.innerHeight/1.6)){
              if(!firstVisit){
                  firstVisit = true
                  slides[0].classList.add('activeInit')
                
              }
          }
  })
    