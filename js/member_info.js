let welcomeName = document.querySelector('.welcome')


window.addEventListener("load", function(){
    if(document.cookie.split('=')[0].split('=')[0] != 'first name'){
        alert("You don't belong here. \r \n You are not a member.")
        alert("To be a member register or login")
        window.location.replace('index.html')
    }else{
        welcomeName.innerHTML = "<h1>"+"welcome, " + document.cookie.split(';')[0].split('=')[1]+"<h1>"
    }
})