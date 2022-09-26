const toggleBtn = document.querySelector('.toggle-btn');
const Body = document.getElementById('body')

toggleBtn.addEventListener('click', ()=> {
    if(toggleBtn.classList.contains('toggle-center')) {
        console.log("hellor")
        toggleBtn.classList.toggle('toggle-right')
        Body.classList.toggle('theme-3')
    }
   
})

toggleBtn.addEventListener('click', ()=> {
    toggleBtn.classList.toggle('toggle-center');
    Body.classList.toggle('theme-2')
    
})



