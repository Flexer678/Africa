const navbar = document.querySelector("nav");
const navbartexts = document.querySelector(".nav_links")
const menuBar = document.querySelector(".menu")




window.addEventListener("resize",()=>{
    console.log(window.innerWidth)
   if (window.innerWidth <= 1170){
    
       document.querySelector("body").style.display = "none"
   }else{
       document.querySelector("body").style.display = "grid"
   }
})

function changeBg(){
    var scrollvalue = window.scrollY
    if(scrollvalue > 568 && scrollvalue < 2336 ){
        navbar.classList.add('colorblack')
        navbar.style.backgroundColor = 'white'
    }else if (scrollvalue < 574){
        navbar.style.backgroundColor = 'transparent';
        navbar.classList.remove('colorblack')
    }else{
        navbar.classList.remove('colorblack')
        navbar.style.background = "black"
    }
}

window.addEventListener('scroll',changeBg)

let click = 0


menuBar.addEventListener('click', function(){
    if(click ==0 ){
        menuBar.style.borderBottomRightRadius = "0px";
    menuBar.style.borderBottomLeftRadius = "0px";
    menuBar.style.height = "100px"
    menuBar.style.backgroundColor = "gold"
    menuBar.style.color = "black";
    navbartexts.style.hover
    navbartexts.style.display = "grid";
    click = 1
    }
    else if(click == 1){
        menuBar.style.borderBottomLeftRadius = "30px"
        menuBar.style.height = "50px"
         menuBar.style.borderBottomRightRadius = "30px"
        navbartexts.style.display = "none"
        click = 0;
    }
} )


window.addEventListener('resize', function(){

    if(window.innerWidth <= 1150 && click == 1){
        navbartexts.style.display = "flex";
        menuBar.style.borderBottomRightRadius = "0px";
        menuBar.style.borderBottomLeftRadius = "0px";
        menuBar.style.height = "100px"
        menuBar.style.backgroundColor = "gold"
        menuBar.style.color = "black";
        navbartexts.style.display = "grid";
    }
    else if(window.innerWidth <= 1150 && click == 0){
        menuBar.style.height = "50px"
        navbartexts.style.display = "none"
        click = 0;
    }
    else{
        navbartexts.style.display ="flex"
    }
    
})


navbar.addEventListener('mouseover', function(){
    if (click == 1){
        navbartexts.style.color = "black";
    }
})





/*
sheet.replaceSync('')
document.adoptedStyleSheets = [sheet];
*/


//https://itnext.io/how-to-make-a-fancy-inverted-border-radius-in-css-5db048a53f95
