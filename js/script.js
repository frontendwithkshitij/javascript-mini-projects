function openTab(tabname,buttonElement){

   document.querySelectorAll('.tab-content').forEach((data)=>{
        data.style.display="none"
    })

    document.querySelectorAll('.tab-button').forEach((data)=>{
        data.classList.remove('active')
    })
    

 

    document.getElementById(tabname).style.display="block"
    buttonElement.classList.add('active')
}

document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.tab-button').click()
})

