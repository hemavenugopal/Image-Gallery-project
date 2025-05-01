const images = document.querySelectorAll("#container img")
const popup = document.getElementById("popup")
const closeBtn= document.getElementById("closeBtn")
const popupImage = document.getElementById("popupImg")

images.forEach((img) => {
   img.addEventListener("click",function(){
    popup.style.display="block"
    popupImage.src=img.src
   })
  
})

// closing
closeBtn.addEventListener("click",function(){
    popup.style.display="none"
})
