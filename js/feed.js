let loading = document.querySelector(".ring")
let calendar_container = document.querySelector(".calendar_container")
let calendar = document.querySelector("#calendar")
let news = document.querySelector(".news")

setTimeout(function(){
    loading.style.display = "none";
    calendar_container.style.display = 'grid';
    calendar.style.display ="grid";
    news.style.display = "grid";
},2000)




