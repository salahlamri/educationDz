let open = document.querySelector(".open");
let close = document.querySelector(".close");
let navs= document.querySelector(".main-navbar");


open.onclick = function(){
    navs.classList.add("magic");
}
close.onclick = function(){
    navs.classList.remove("magic");
}



// FaQ


let btns = document.querySelectorAll(".btn");
let contents = document.querySelectorAll(".btn .content");





for(i=0;i<btns.length;i++){
    btns[i].addEventListener('click',function(){
        this.lastElementChild.classList.toggle("active");
        this.firstElementChild.lastElementChild.classList.toggle("active")
    })
}







// احضار العنصر من الوثائق
let icon = document.querySelector('.icon');
let stng = document.querySelector(".settings");
// إضافة حدث النقر على العنصر
icon.addEventListener('click', () => {
  // إضافة الفئة "active" للعنصر عند النقر
    stng.classList.toggle('active');
});


// 
let mainColor = localStorage.getItem("color_option");
if(mainColor !== null){

    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));
}
// Change colors to webite

let ColorsLi = document.querySelectorAll(".colors-list li");

ColorsLi.forEach(li => {

    li.addEventListener("click", (e) => {

        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);



        localStorage.setItem("color_option",e.target.dataset.color);


        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        })

        e.target.classList.add("active");
    })


})



// Ups

let UP =document.querySelector(".ups");

window.onscroll=function(){
    if(this.scrollY >= 1000){
        UP.style.right = "30px";
    }else{
        UP.style.right="-60px";
    }
}