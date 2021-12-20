let uploadFile = document.querySelector(".first-slide i")
let icon = document.querySelector(".fas");
uploadFile.addEventListener("click",function(){
    this.nextElementSibling.click();
})
uploadFile.nextElementSibling.addEventListener("change",function(e){
    const {files} = e.target;
    for (let file of files) {
        const fileReader = new FileReader();
        fileReader.onloadend = function(e){
            const {result} = e.target;
            const img = document.createElement("img");
            img.setAttribute("src",result);
            document.querySelector(".first-upload").appendChild(img);
        }
        fileReader.readAsDataURL(file);
        icon.style.display = "none";
    }
})
let scndUploadFile = document.querySelector(".second-slide i")
let icon2 = document.querySelector(".second-icon");
scndUploadFile.addEventListener("click",function(){
    this.nextElementSibling.click();
})
scndUploadFile.nextElementSibling.addEventListener("change",function(e){
    const {files} = e.target;
    for (let file of files) {
        const fileReader = new FileReader();
        fileReader.onloadend = function(e){
            const {result} = e.target;

            const img = document.createElement("img");
            img.setAttribute("src",result);
            document.querySelector(".second-upload").appendChild(img);
        }
        fileReader.readAsDataURL(file);
        icon2.style.display = "none";
    }
})
let thirdUploadFile = document.querySelector(".third-slide i")
let icon3 = document.querySelector(".third-icon");
thirdUploadFile.addEventListener("click",function(){
    this.nextElementSibling.click();
})
thirdUploadFile.nextElementSibling.addEventListener("change",function(e){
    const {files} = e.target;
    for (let file of files) {
        const fileReader = new FileReader();
        fileReader.onloadend = function(e){
            const {result} = e.target;
            const img = document.createElement("img");
            img.setAttribute("src",result);
            document.querySelector(".third-upload").appendChild(img);
        }
        fileReader.readAsDataURL(file);
        icon3.style.display = "none";
        let showSlide = document.querySelector(".slide-show");
        showSlide.style.display = "flex";
        let p = document.querySelector(".p-tag")
        p.style.display = "flex";
        let btn = document.querySelector(".btn")
        btn.style.display = "flex";
        btn.addEventListener("click", () =>{
            ShowSlides();
            p.style.display = "none";
            btn.style.display = "none";
        })
        document.addEventListener("keydown", (e)=>{
            if (e.code ==="Escape") {
                showSlide.style.display = "none";
            }
        })
    }
})
let slideIndex = 0;
function ShowSlides() {
    let slides = document.getElementsByClassName("my-slides");
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";        
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";
    setTimeout(ShowSlides,2000);
}


